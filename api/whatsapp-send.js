/**
 * Vercel Serverless Function
 * File: /api/whatsapp-send.js
 *
 * Front-end calls:
 *   POST /api/whatsapp-send
 *   body: { to, message, orderNo, vin, stageNum }
 *
 * ENV (Vercel -> Project Settings -> Environment Variables):
 *   MERSAL_API_BASE   = https://w-mersal.com
 *   MERSAL_API_TOKEN  = N47Nm9eP20Ppctd3RmM6EBiM5b7dAaoljMHVJyns16b42721
 *
 * Optional ENV (to avoid guessing provider endpoint/payload/auth):
 *   MERSAL_SEND_PATH  = /send-message          (default)
 *   MERSAL_AUTH_MODE  = bearer | x_api_key     (default: bearer)
 *   MERSAL_API_NUMBER = <your api number / channelId> (optional)
 *
 * Notes:
 * - Because providers differ, this script supports 3 payload shapes and 2 auth styles.
 * - It tries the main payload first, then fallbacks automatically if it fails.
 */

export default async function handler(req, res) {
  // CORS (optional — helpful if you call from different domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-API-KEY");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    if (req.method !== "POST") {
      return res.status(405).json({ ok: false, error: "Method not allowed" });
    }

    const { to, message, orderNo, vin, stageNum } = req.body || {};

    // normalize phone: digits only
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

    if (!base || !token) {
      return res.status(500).json({
        ok: false,
        error: "Missing ENV: MERSAL_API_BASE / MERSAL_API_TOKEN",
      });
    }

    const endpointPath = process.env.MERSAL_SEND_PATH || "/send-message";
    const url = base.replace(/\/+$/, "") + endpointPath;

    // Auth headers
    const authMode = (process.env.MERSAL_AUTH_MODE || "bearer").toLowerCase();
    const headers = { "Content-Type": "application/json" };

    if (authMode === "x_api_key") {
      headers["X-API-KEY"] = token;
    } else {
      // default bearer
      headers["Authorization"] = `Bearer ${token}`;
    }

    const apiNumber = process.env.MERSAL_API_NUMBER || ""; // optional

    // Try different payload shapes (because provider keys differ)
    const payloadsToTry = [
      // Shape A (common)
      {
        to: phone,
        message: text,
        apiNumber: apiNumber || undefined,
        meta: { orderNo, vin, stageNum },
      },
      // Shape B (some providers)
      {
        phone: phone,
        text: text,
        from: apiNumber || undefined,
        data: { orderNo, vin, stageNum },
      },
      // Shape C (some providers)
      {
        number: phone,
        body: text,
        channelId: apiNumber || undefined,
        extra: { orderNo, vin, stageNum },
      },
    ].map((p) => JSON.parse(JSON.stringify(p))); // remove undefined fields

    let lastError = null;

    for (let i = 0; i < payloadsToTry.length; i++) {
      const payload = payloadsToTry[i];

      const r = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      const raw = await r.text();
      let data;
      try {
        data = JSON.parse(raw);
      } catch {
        data = { raw };
      }

      if (r.ok) {
        return res.status(200).json({
          ok: true,
          provider: "w-mersal",
          triedPayloadIndex: i,
          url,
          response: data,
        });
      }

      lastError = {
        triedPayloadIndex: i,
        status: r.status,
        response: data,
      };
    }

    return res.status(502).json({
      ok: false,
      error: "W-Mersal request failed (all payload shapes tried)",
      url,
      hint:
        "Check MERSAL_SEND_PATH and MERSAL_AUTH_MODE from w-mersal dashboard docs (API operations list).",
      lastError,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: String(e?.message || e) });
  }
}
