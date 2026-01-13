import admin from "firebase-admin";

function initAdmin() {
  if (admin.apps.length) return;

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

  // ✅ الأفضل: تخزين المفتاح Base64 لتفادي مشاكل \n و OpenSSL
  const privateKey =
    process.env.FIREBASE_PRIVATE_KEY_BASE64
      ? Buffer.from(process.env.FIREBASE_PRIVATE_KEY_BASE64, "base64").toString("utf8")
      : (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Missing Firebase Admin ENV. Required: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY_BASE64 (or FIREBASE_PRIVATE_KEY)"
    );
  }

  // ✅ حماية إضافية: تأكد إن المفتاح شكله سليم
  if (!privateKey.includes("BEGIN PRIVATE KEY") || !privateKey.includes("END PRIVATE KEY")) {
    throw new Error("Invalid Firebase private key format. Make sure it includes BEGIN/END PRIVATE KEY lines.");
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

    initAdmin();

    // تحقق من Firebase Auth Bearer Token
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
    if (!token) return res.status(401).send("Missing token");

    await admin.auth().verifyIdToken(token);

    const { phone, to, message, source, meta } = req.body || {};
    const resolvedPhone = phone || to;
    if (!resolvedPhone || !message) return res.status(400).send("phone & message required");

    const docRef = await admin.firestore().collection("sms_outbox").add({
      to: String(resolvedPhone),
      phone: String(resolvedPhone),
      message: String(message),
      source: String(source || "web"),
      meta: meta || {},
      status: "queued",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return res.status(200).json({ ok: true, id: docRef.id });
  } catch (e) {
    return res.status(500).send(String(e?.message || e));
  }
}
