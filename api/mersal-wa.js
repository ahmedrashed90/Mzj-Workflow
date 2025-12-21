export default async function handler(req, res) {
  // ✅ CORS
  res.setHeader("Access-Control-Allow-Origin", "https://mzj-workflow.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(204).end();

  try {
    if (req.method !== "POST") {
      return res.status(405).json({ ok: false, error: "Method Not Allowed" });
    }

    const { phone, message } = req.body || {};
    if (!phone || !message) {
      return res.status(400).json({ ok: false, error: "Missing phone/message" });
    }

    const BASE_URL  = process.env.MERSAL_BASE_URL;   // https://w-mersal.com
    const SEND_PATH = process.env.MERSAL_SEND_PATH;  // /api/send (مثال)
    const TOKEN     = process.env.MERSAL_TOKEN;

    if (!BASE_URL || !SEND_PATH || !TOKEN) {
      return res.status(500).json({ ok: false, error: "Missing env vars" });
    }

    const payload = { mobile: phone, message };

    const r = await fetch(`${BASE_URL}${SEND_PATH}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": TOKEN
      },
      body: JSON.stringify(payload)
    });

    const txt = await r.text();
    if (!r.ok) return res.status(502).json({ ok: false, error: txt });

    return res.status(200).json({ ok: true, result: txt });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e?.message || e) });
  }
}
