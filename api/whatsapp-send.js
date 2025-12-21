export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const {
      to,
      template_name,
      template_language = "ar",
      variables = [] // array of strings in order {{1}}, {{2}}, {{3}}...
    } = req.body || {};

    const base = (process.env.MERSAL_API_BASE || "").replace(/\/+$/, "");
    const token = process.env.MERSAL_API_TOKEN;

    if (!base || !token) {
      return res.status(500).json({
        ok: false,
        error: "Missing ENV: MERSAL_API_BASE / MERSAL_API_TOKEN"
      });
    }

    // Normalize phone (Saudi)
    let phone = String(to || "").replace(/\D/g, "");
    if (phone.startsWith("05") && phone.length === 10) phone = "966" + phone.slice(1);
    if (phone.startsWith("5") && phone.length === 9) phone = "966" + phone;

    if (!phone || phone.length < 10) {
      return res.status(400).json({ ok: false, error: "Invalid phone number" });
    }

    if (!template_name) {
      return res.status(400).json({ ok: false, error: "Missing template_name" });
    }

    // Build FormData (مرسال يعتمد عليها)
    const form = new FormData();
    form.append("phone", phone);
    form.append("template_name", template_name);
    form.append("template_language", template_language);

    // Map variables -> body, body2, body3...
    variables.forEach((val, idx) => {
      form.append(`body${idx === 0 ? "" : idx + 1}`, String(val));
    });

    // Endpoint (case-sensitive workaround)
    const urlPrimary = `${base}/api/wpbox/sendTemplateMessage?token=${encodeURIComponent(token)}`;
    const urlFallback = `${base}/api/wpbox/sendtemplatemessage?token=${encodeURIComponent(token)}`;

    const send = async (url) => {
      const r = await fetch(url, { method: "POST", body: form });
      const text = await r.text();
      let json = null;
      try { json = JSON.parse(text); } catch (_) {}
      return { ok: r.ok, status: r.status, json, text };
    };

    let resp = await send(urlPrimary);
    if (!resp.ok && (resp.status === 404 || resp.status === 405)) {
      resp = await send(urlFallback);
    }

    const confirmed =
      resp.json &&
      (resp.json.success === true ||
       resp.json.status === "success" ||
       resp.json.ok === true);

    if (!resp.ok || !confirmed) {
      return res.status(400).json({
        ok: false,
        error: "Provider did not confirm send",
        provider: resp.json || resp.text
      });
    }

    return res.json({
      ok: true,
      phone,
      template_name,
      provider: resp.json
    });

  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err.message
    });
  }
}
