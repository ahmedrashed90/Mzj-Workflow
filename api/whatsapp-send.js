// api/whatsapp-send.js
export default async function handler(req, res) {
  // CORS (for calling from your static sales.html)
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { to, message, orderNo, vin, stageNum, customerName, trackingUrl } = req.body || {};

    const base = (process.env.MERSAL_API_BASE || "").replace(/\/+$/, "");
    const token = process.env.MERSAL_API_TOKEN;
    const campaignName = process.env.MERSAL_CAMPAIGN_NAME || "Tracking"; // your dashboard campaign name
    const campaignIdEnv = process.env.MERSAL_CAMPAIGN_ID || ""; // optional fixed id

    if (!base || !token) {
      return res.status(500).json({
        ok: false,
        error: "Missing ENV: MERSAL_API_BASE / MERSAL_API_TOKEN",
      });
    }

    // Normalize phone to E.164
    let phone = String(to || "").replace(/\D/g, "");
    if (phone.startsWith("05") && phone.length === 10) phone = "966" + phone.slice(1);
    if (phone.startsWith("5") && phone.length === 9) phone = "966" + phone;
    if (!phone || phone.length < 10) {
      return res.status(400).json({ ok: false, error: "Invalid 'to' phone" });
    }

    const getJson = async (url) => {
      const r = await fetch(url, { method: "GET" });
      const t = await r.text();
      let j = null;
      try { j = JSON.parse(t); } catch (_) {}
      return { ok: r.ok, status: r.status, text: t, json: j };
    };

    const postJson = async (url, bodyObj) => {
      const r = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyObj),
      });
      const t = await r.text();
      let j = null;
      try { j = JSON.parse(t); } catch (_) {}
      return { ok: r.ok, status: r.status, text: t, json: j };
    };

    // ===== 1) Resolve campaign_id (ENV or lookup by name) =====
    let campaign_id = campaignIdEnv || null;
    let campaignsDebug = null;

    if (!campaign_id) {
      const candidates = [
        `${base}/api/wpbox/getCampaigns?token=${encodeURIComponent(token)}`,
        `${base}/api/campaigns?token=${encodeURIComponent(token)}`,
        `${base}/api/wpbox/campaigns?token=${encodeURIComponent(token)}`,
      ];

      for (const url of candidates) {
        const r = await getJson(url);
        if (r.ok && r.json) {
          const list =
            r.json.campaigns ||
            r.json.data?.campaigns ||
            r.json.data ||
            r.json.campaign_list ||
            [];

          if (Array.isArray(list) && list.length) {
            const found = list.find((c) => {
              const n = String(c.name || c.title || "").trim().toLowerCase();
              return n === String(campaignName).trim().toLowerCase();
            });
            campaign_id = found?.id || found?.campaign_id || null;
            campaignsDebug = { usedUrl: url, count: list.length, found: !!campaign_id };
            break;
          }
        }
        campaignsDebug = { usedUrl: url, status: r.status, body: (r.json || r.text || "").toString().slice(0, 300) };
      }
    }

    // ===== 2) Build template variables (matches your template: {{body}}, {{body2}}, {{body3}}) =====
    const body1 = (customerName || "").toString().trim() || "عميلنا العزيز";
    const body2 = (vin || orderNo || "").toString().trim() || "—";
    const body3 =
      (trackingUrl || "").toString().trim() ||
      (vin ? `https://mzj-tracking.vercel.app/Test-Track.html?vin=${encodeURIComponent(String(vin))}` : "");

    // ===== 3) Try sending with a few common endpoint/payload variants =====
    const tries = [
      {
        label: "sendTemplateMessage_phone_campaign",
        url: `${base}/api/wpbox/sendTemplateMessage?token=${encodeURIComponent(token)}`,
        body: { phone, campaign_id, body: body1, body2, body3 },
      },
      {
        label: "sendTemplateMessage_to_campaign",
        url: `${base}/api/wpbox/sendTemplateMessage?token=${encodeURIComponent(token)}`,
        body: { to: phone, campaign_id, body: body1, body2, body3 },
      },
      {
        label: "sendCampaignMessage_phone",
        url: `${base}/api/wpbox/sendCampaignMessage?token=${encodeURIComponent(token)}`,
        body: { phone, campaign_id, body: body1, body2, body3 },
      },
    ];

    let last = null;
    for (const t of tries) {
      const resp = await postJson(t.url, t.body);
      last = { attempt: t.label, url: t.url, sent: t.body, resp: resp.json || resp.text };

      if (resp.ok) {
        const statusStr = (resp.json?.status || resp.json?.message || "").toString().toLowerCase();
        if (!statusStr.includes("fail") && !statusStr.includes("error")) {
          return res.json({
            ok: true,
            used: { phone, campaign_id, campaignName, body: body1, body2, body3 },
            provider: resp.json || resp.text,
            debug: { campaigns: campaignsDebug, attempt: t.label },
          });
        }
      }
    }

    return res.status(400).json({
      ok: false,
      error: "Provider did not confirm send",
      used: { phone, campaign_id, campaignName, body: body1, body2, body3 },
      debug: { campaigns: campaignsDebug, lastAttempt: last },
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e?.message || String(e) });
  }
}
