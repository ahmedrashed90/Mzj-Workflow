import admin from "firebase-admin";

function initAdmin() {
  if (admin.apps.length) return;

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

  const privateKey =
    process.env.FIREBASE_PRIVATE_KEY_BASE64
      ? Buffer.from(process.env.FIREBASE_PRIVATE_KEY_BASE64, "base64").toString("utf8")
      : (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Missing Firebase Admin ENV. Required: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY_BASE64 (or FIREBASE_PRIVATE_KEY)"
    );
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}

function normalizeSaudiE164(raw) {
  if (!raw) return "";
  let p = String(raw).trim();

  // keep digits and +
  p = p.replace(/[^\d+]/g, "");

  // 00 -> +
  if (p.startsWith("00")) p = "+" + p.slice(2);

  // 05xxxxxxxx -> +9665xxxxxxxx
  if (/^05\d{8}$/.test(p)) return "+966" + p.slice(1);

  // 5xxxxxxxx -> +9665xxxxxxxx
  if (/^5\d{8}$/.test(p)) return "+966" + p;

  // 9665xxxxxxxx -> +9665xxxxxxxx
  if (/^9665\d{8}$/.test(p)) return "+" + p;

  // +9665xxxxxxxx ok
  if (/^\+9665\d{8}$/.test(p)) return p;

  // sometimes phone arrives as 966xxxxxxxxx (10-12 digits) - best effort:
    if (p.startsWith("966") && !p.startsWith("+")) return "+" + p;
    return "+" + p

  return p;
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

    initAdmin();

    // Firebase Auth Bearer Token (multi-user safe)
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
    if (!token) return res.status(401).send("Missing token");

    await admin.auth().verifyIdToken(token);

    const { phone, to, message, source, meta } = req.body || {};
    const rawPhone = phone || to;
    if (!rawPhone || !message) return res.status(400).send("phone & message required");

    const norm = normalizeSaudiE164(rawPhone);

    const docRef = await admin.firestore().collection("sms_outbox").add({
      // store BOTH for Android listeners
      to: norm,
      phone: norm,
      message: String(message),
      source: String(source || "web"),
      meta: meta || {},
      status: "queued",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return res.status(200).json({ ok: true, id: docRef.id, to: norm });
  } catch (e) {
    return res.status(500).send(String(e?.message || e));
  }
}
