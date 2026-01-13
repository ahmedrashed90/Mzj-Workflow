import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)),
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "METHOD_NOT_ALLOWED" });

  try {
    const { to, message, source } = req.body || {};
    if (!to || !message) return res.status(400).json({ ok: false, error: "MISSING_FIELDS" });

    const doc = await admin.firestore().collection("sms_queue").add({
      to,
      message,
      source: source || "sales.html",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      sentAt: null,
      error: null
    });

    return res.status(200).json({ ok: true, id: doc.id });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e?.message || "UNKNOWN" });
  }
}
