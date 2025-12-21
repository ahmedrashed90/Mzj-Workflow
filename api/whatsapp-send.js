export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { to, message, template_name, template_language, components } = req.body || {};

    const base = (process.env.MERSAL_API_BASE || "").replace(/\/+$/, "");
    const token = process.env.MERSAL_API_TOKEN;

    if (!base || !token) {
      return res.status(500).json({
        ok: false,
        error: "Missing ENV: MERSAL_API_BASE / MERSAL_API_TOKEN",
      });
    }

    const phone = String(to || "").replace(/\D/g, "");
    if (!phone || phone.length < 10) {
      return res.status(400).json({ ok: false, error: "Invalid 'to' phone" });
    }

    // ========= Helpers =========
    const tryRequest = async ({ url, method = "POST", headers = {}, body }) => {
      const resp = await fetch(url, { method, headers, body });
      const text = await resp.text();
      let json = null;
      try { json = JSON.parse(text); } catch (_) {}
      return { ok: resp.ok, status: resp.status, text, json };
    };

    // ========= Build message payloads =========
    // A) JSON payload (common)
    const jsonPayload = {
      token, // بعض السيرفرات تتطلبه داخل الـ body أيضًا
      phone,
      message: (message || "").trim(),
      template_name: template_name || "mzj_tracking_update",
      template_language: template_language || "ar",
      components: Array.isArray(components) ? components : undefined,
    };

    // B) x-www-form-urlencoded payload (بعض APIs لا تقبل JSON)
    const form = new URLSearchParams();
    form.set("token", token);
    form.set("phone", phone);
    if ((message || "").trim()) form.set("message", String(message).trim());
    form.set("template_name", jsonPayload.template_name);
    form.set("template_language", jsonPayload.template_language);
    if (jsonPayload.components) form.set("components", JSON.stringify(jsonPayload.components));

    // ========= Endpoint candidates (مرسال أحيانًا lowercase) =========
    const candidates = [
      // 1) lowercase endpoint + token in query (الأكثر احتمالًا)
      {
        name: "lowercase + query token + JSON",
        url: `${base}/api/wpbox/sendtemplatemessage?token=${encodeURIComponent(token)}`,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...jsonPayload, token: undefined }), // لأن token موجود في query
      },
      // 2) lowercase endpoint + token in query + FORM
      {
        name: "lowercase + query token + FORM",
        url: `${base}/api/wpbox/sendtemplatemessage?token=${encodeURIComponent(token)}`,
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: new URLSearchParams([...form.entries()].filter(([k]) => k !== "token")).toString(),
      },

      // 3) CamelCase endpoint (لو السيرفر فعلاً كده)
      {
        name: "camelcase + query token + JSON",
        url: `${base}/api/wpbox/sendTemplateMessage?token=${encodeURIComponent(token)}`,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...jsonPayload, token: undefined }),
      },

      // 4) بعض الأنظمة تقبل token داخل body فقط
      {
        name: "lowercase + body token + JSON",
        url: `${base}/api/wpbox/sendtemplatemessage`,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonPayload),
      },
      {
        name: "lowercase + body token + FORM",
        url: `${base}/api/wpbox/sendtemplatemessage`,
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: form.toString(),
      },
    ];

    const attempts = [];
    for (const c of candidates) {
      const r = await tryRequest(c);
      attempts.push({ name: c.name, status: r.status, ok: r.ok, json: r.json || null, text: r.json ? undefined : r.text?.slice(0, 500) });

      // اعتبر نجاح إذا resp.ok أو الـ json فيه status=success
      const success =
        r.ok ||
        (r.json && (r.json.status === "success" || r.json.ok === true));

      if (success) {
        return res.json({ ok: true, via: c.name, data: r.json ?? r.text });
      }
    }

    // لو كله فشل: رجّع تفاصيل المحاولات للواجهة عشان نعرف السبب الحقيقي
    return res.status(400).json({
      ok: false,
      error: "Mersal request failed",
      attempts,
    });

  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
}
