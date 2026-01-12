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
  if (req.method !== "POST") return res.status(405).json({ok:false});

  const { apiKey, phone, message, source } = req.body || {};
  if (apiKey !== process.env.SMS_API_KEY)
    return res.status(401).json({ok:false, error:"unauthorized"});

  if (!phone || !message)
    return res.status(400).json({ok:false, error:"missing fields"});

  const a = getAdmin();
  const db = a.firestore();

  const doc = await db.collection("sms_queue").add({
    phone,
    message,
    source: source || "sales.html",
    status: "queued",
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });

  res.json({ok:true, id: doc.id});
}
