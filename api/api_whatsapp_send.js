/**
 * Vercel Serverless Function
 * Path: /api/whatsapp-send.js
 *
 * Receives from front-end:
 *   { to, message, orderNo, vin, stageNum }
 * Forwards to W‑Mersal WhatsApp API.
 *
 * Put credentials in ENV (Vercel Project → Settings → Environment Variables):
 *   MERSAL_API_BASE   = https://<YOUR-WMERSAL-API-DOMAIN>
 *   MERSAL_API_TOKEN  = <YOUR_TOKEN>
 *   MERSAL_API_NUMBER = <YOUR_API_NUMBER_OR_CHANNEL_ID> (optional if required)
 *
 * NOTE:
 * W‑Mersal docs are typically accessible inside their console, so this file is written
 * adapter-style: you only update endpointPath + payload keys one time to match their spec.
 */

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ ok: false, error: "Method not allowed" });
    }

    const { to, message, orderNo, vin, stageNum } = req.body || {};

    const phone = String(to || "").replace(/\D/g, "");
    const text = String(message || "").trim();

    if (!phone || phone.length < 10) {
      return res.status(400).json({ ok: false, error: "Invalid 'to' phone" });
    }
    if (!text) {
      return res.status(400).json({ ok: false, error: "Empty message" });
    }

    const base = process.env.MERSAL_API_BASE;
    const token = process.env.MERSAL_API_TOKEN;
    const apiNumber = process.env.MERSAL_API_NUMBER; // optional

    if (!base || !token) {
      return res.status(500).json({
        ok: false,
        error: "Missing ENV: MERSAL_API_BASE / MERSAL_API_TOKEN",
      });
    }

    // ====== ADAPTER ZONE (EDIT THIS ONCE) ======
    // Replace this path with the real W‑Mersal "send message" endpoint from their dashboard docs.
    const endpointPath = "/send-message"; // <-- CHANGE ME
    const url = base.replace(/\/+$/, "") + endpointPath;

    // Replace keys below to match W‑Mersal payload requirements
    const payload = {
      to: phone,                 // maybe "phone" or "number"
      message: text,             // maybe "body" or "text"
      apiNumber: apiNumber || "",// maybe "from" or "channelId" (or remove if not needed)
      meta: { orderNo, vin, stageNum },
    };

    const r = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Auth style 1 (common): Bearer token
        "Authorization": `Bearer ${token}`,
        // Auth style 2 (if their docs say so):
        // "X-API-KEY": token,
      },
      body: JSON.stringify(payload),
    });

    const ct = r.headers.get("content-type") || "";
    const raw = await r.text();

    let data;
    if (ct.includes("application/json")) {
      try { data = JSON.parse(raw); } catch { data = { raw }; }
    } else {
      data = { raw };
    }

    if (!r.ok) {
      return res.status(502).json({
        ok: false,
        error: "W‑Mersal request failed",
        status: r.status,
        response: data,
      });
    }

    return res.status(200).json({ ok: true, provider: "w-mersal", response: data });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: String(e?.message || e) });
  }
}
