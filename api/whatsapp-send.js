export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { to, message, template, params } = req.body || {};

    if (!to) {
      return res.status(400).json({ ok: false, error: "Missing phone number" });
    }

    const base = process.env.MERSAL_API_BASE; // https://w-mersal.com
    const token = process.env.MERSAL_API_TOKEN;

    if (!base || !token) {
      return res.status(500).json({
        ok: false,
        error: "Missing ENV: MERSAL_API_BASE / MERSAL_API_TOKEN"
      });
    }

    // رقم العميل بدون +
    const phone = String(to).replace(/\D/g, "");

    const url =
      `${base}/api/wpbox/sendTemplateMessage?token=${encodeURIComponent(token)}`;

    const payload = {
      phone: phone,
      message: message || "رسالة من مجموعة محمد بن ذعار العجمي للسيارات",
      template: template || "mzj_tracking_update",
      params: params || []
    };

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await resp.json();

    if (!resp.ok || data.status === "error") {
      return res.status(400).json({
        ok: false,
        error: data
      });
    }

    return res.json({ ok: true, data });

  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err.message
    });
  }
}
