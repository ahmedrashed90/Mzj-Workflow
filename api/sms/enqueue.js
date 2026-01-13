import admin from "firebase-admin";

function parseServiceAccount(raw) {
  if (!raw) return null;
  let s = String(raw).trim();

  // Remove wrapping quotes if pasted as a quoted JSON string
  if ((s.startsWith("'") && s.endsWith("'")) || (s.startsWith('"') && s.endsWith('"'))) {
    s = s.slice(1, -1);
  }

  // If it looks like base64 (no braces) try decode
  if (!s.startsWith("{")) {
    try {
      const decoded = Buffer.from(s, "base64").toString("utf8").trim();
      if (decoded.startsWith("{")) s = decoded;
    } catch (_) {}
  }

  try {
    const obj = JSON.parse(s);
    if (obj.private_key && typeof obj.private_key === "string") {
      obj.private_key = obj.private_key.replace(/\\n/g, "\n");
    }
    return obj;
  } catch (_) {
    return null;
  }
}

function buildServiceAccountFromParts() {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

  let privateKey = "";
  if (process.env.FIREBASE_PRIVATE_KEY_BASE64) {
    try {
      privateKey = Buffer.from(process.env.FIREBASE_PRIVATE_KEY_BASE64, "base64").toString("utf8");
    } catch (_) {
      privateKey = "";
    }
  }
  if (!privateKey) {
    privateKey = (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
  }

  privateKey = String(privateKey || "").trim();
  if ((privateKey.startsWith("'") && privateKey.endsWith("'")) || (privateKey.startsWith('"') && privateKey.endsWith('"'))) {
    privateKey = privateKey.slice(1, -1);
  }

  if (!projectId || !clientEmail || !privateKey) return null;
  return { project_id: projectId, projectId, client_email: clientEmail, clientEmail, private_key: privateKey, privateKey };
}

function initAdmin() {
  if (admin.apps.length) return;

  // Prefer full JSON env (most reliable)
  const sa =
    parseServiceAccount(process.env.FIREBASE_SERVICE_ACCOUNT_JSON) ||
    parseServiceAccount(process.env.FIREBASE_SERVICE_ACCOUNT) ||
    parseServiceAccount(process.env.FIREBASE_ADMIN_SA) ||
    buildServiceAccountFromParts();

  if (!sa) {
    throw new Error(
      "Missing Firebase Admin credentials. Set FIREBASE_SERVICE_ACCOUNT_JSON (recommended) or FIREBASE_SERVICE_ACCOUNT, or FIREBASE_PROJECT_ID + FIREBASE_CLIENT_EMAIL + FIREBASE_PRIVATE_KEY_BASE64."
    );
  }

  const pk = sa.private_key || sa.privateKey || "";
  if (
    !pk ||
    !String(pk).includes("BEGIN PRIVATE KEY") ||
    !String(pk).includes("END PRIVATE KEY")
  ) {
    throw new Error(
      "Invalid Firebase private key. Use the private_key from a Google Service Account JSON key (PKCS8)."
    );
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: sa.project_id || sa.projectId,
      clientEmail: sa.client_email || sa.clientEmail,
      privateKey: String(pk).replace(/\\n/g, "\n"),
    }),
  });
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

    initAdmin();

    // Require Firebase Auth Bearer Token (multi-user safe)
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
    if (!token) return res.status(401).send("Missing token");

    await admin.auth().verifyIdToken(token);

    const body = req.body || {};
    const phone = body.phone || body.to; // accept either
    const message = body.message;
    const source = body.source || "web";
    const meta = body.meta || {};

    if (!phone || !message) return res.status(400).send("phone & message required");

    const docRef = await admin.firestore().collection("sms_outbox").add({
      to: String(phone),
      phone: String(phone),
      message: String(message),
      source: String(source),
      meta: meta || {},
      status: "queued",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return res.status(200).json({ ok: true, id: docRef.id });
  } catch (e) {
    // Make the error readable in the browser UI
    return res.status(500).send(String(e?.message || e));
  }
}
