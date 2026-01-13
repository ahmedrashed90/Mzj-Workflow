// /api/sms/enqueue.js
import admin from "firebase-admin";

function getAdmin(){
  if (!admin.apps.length){
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON))
    });
  }
  return admin;
}

export default async function handler(req,res){
  if (req.method !== "POST") return res.status(405).json({ ok:false, error:"method_not_allowed" });

  const a = getAdmin();
  const db = a.firestore();

  // ✅ 1) Web: Firebase ID Token (preferred)
  // ✅ 2) Android/Server: apiKey (fallback)
  const authHeader = req.headers.authorization || "";
  const bearer = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : "";
  const { apiKey, phone, message, source, meta } = req.body || {};

  let caller = { mode: "unknown", uid: null, email: null };

  try{
    if (bearer){
      const decoded = await a.auth().verifyIdToken(bearer);
      caller = { mode:"firebase", uid: decoded.uid, email: decoded.email || null };
    } else {
      if (apiKey !== process.env.SMS_API_KEY) {
        return res.status(401).json({ ok:false, error:"unauthorized" });
      }
      caller = { mode:"apikey", uid:null, email:null };
    }
  }catch(e){
    return res.status(401).json({ ok:false, error:"unauthorized_token" });
  }

  if (!phone || !message) return res.status(400).json({ ok:false, error:"missing_fields" });

  const doc = await db.collection("sms_queue").add({
    phone: String(phone),
    message: String(message),
    source: source || "sales.html",
    meta: meta || null,

    status: "queued",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),

    // audit
    createdBy: caller,
  });

  res.json({ ok:true, id: doc.id });
}
