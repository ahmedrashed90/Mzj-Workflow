export default async function handler(req, res) {
  try {
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

    const { phone, message, orderNo, stageNum } = req.body || {};
    if (!phone || !message) return res.status(400).json({ ok: false, error: "Missing phone/message" });

    // ⚠️ حطهم في Vercel Environment Variables
    const MERSAL_BASE_URL = process.env.MERSAL_BASE_URL;   // مثال: https://api.xxx.com
    const MERSAL_TOKEN    = process.env.MERSAL_TOKEN;      // Bearer/Token
    const MERSAL_SENDER   = process.env.MERSAL_SENDER;     // instance/channel id

    if (!MERSAL_BASE_URL || !MERSAL_TOKEN || !MERSAL_SENDER) {
      return res.status(500).json({ ok: false, error: "Mersal env vars are not set" });
    }

    // ✅ دي “شكل” حمولة عامة — هتعدّل الـ payload حسب مرسال بالظبط
    const payload = {
      sender: MERSAL_SENDER,
      to: phone,          // لازم يكون 9665xxxxxxx
      type: "text",
      text: message,
      meta: { orderNo, stageNum }
    };

    const r = await fetch(`${MERSAL_BASE_URL}/send-message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${MERSAL_TOKEN}`
      },
      body: JSON.stringify(payload)
    });

    const dataText = await r.text();
    if (!r.ok) return res.status(502).json({ ok: false, error: dataText });

    return res.status(200).json({ ok: true, mersal: dataText });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e?.message || e) });
  }
}
