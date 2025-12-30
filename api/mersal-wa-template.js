// mersal-wa-template.js
// WhatsApp Templates via Mersal (dedupe once-only for steps 1/9/10)

const DEDUPE_TTL_MS = 1000 * 60 * 60 * 24; // 24h
const _dedupe = globalThis.__MZJ_WA_DEDUPE__ || (globalThis.__MZJ_WA_DEDUPE__ = new Map());

function now() { return Date.now(); }

function cleanupDedupe() {
  const t = now();
  for (const [k, v] of _dedupe.entries()) {
    if (!v || (t - v.ts) > DEDUPE_TTL_MS) _dedupe.delete(k);
  }
}

function normalizeSaudiMobile(input) {
  if (input == null) return null;
  let p = String(input).trim().replace(/[^\d]/g, "");
  if (p.startsWith("00")) p = p.slice(2);              // 00966...
  if (p.startsWith("9660")) p = "966" + p.slice(4);    // 9660...
  if (p.startsWith("0")) p = "966" + p.slice(1);       // 05... -> 9665...
  if (p.length === 9 && p.startsWith("5")) p = "966" + p;
  if (!/^9665\d{8}$/.test(p)) return null;
  return p;
}

function pickTemplateByStage(stageNum, providedName) {
  const s = Number(stageNum);
  if (s === 1) return "m1";
  if (s === 9) return "mzj_car_ready_delivery";
  if (s === 10) return "mzj_delivery_completed";
  // fallback: allow provided template_name for other stages if any
  return (providedName || "").trim() || null;
}

function stableStringify(obj) {
  try { return JSON.stringify(obj); } catch { return String(obj); }
}

function makeDedupeKey({ stageNum, orderId, vin, phone, templateName, params }) {
  // Prefer deterministic business key if available
  const s = Number(stageNum);
  if ((s === 1 || s === 9 || s === 10) && (orderId || vin)) {
    return `stage:${s}|order:${String(orderId||"")}|vin:${String(vin||"")}`;
  }
  // Fallback: phone+template+params hash
  const base = `stage:${s}|phone:${phone}|tpl:${templateName}|p:${stableStringify(params)}`;
  // small hash to keep key short
  let h = 0;
  for (let i=0; i<base.length; i++) h = (h*31 + base.charCodeAt(i)) >>> 0;
  return `h:${h}`;
}

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "https://mzj-workflow.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method Not Allowed" });

  try {
    // Body may come as string depending on runtime
    let body = req.body;
    if (typeof body === "string") {
      try { body = JSON.parse(body); } catch { body = {}; }
    }
    body = body || {};

    const stageNum = body.stageNum ?? body.stage ?? null;
    const orderId = body.orderId || body.order_id || "";
    const vin = body.vin || body.VIN || "";

    const phone = normalizeSaudiMobile(body.phone);
    const templateLanguage = String(body.template_language || body.templateLanguage || "ar").trim();

    const templateName = pickTemplateByStage(stageNum, body.template_name || body.templateName);

    // Accept both body_params and bodyParams
    const params =
      (Array.isArray(body.body_params) && body.body_params) ||
      (Array.isArray(body.bodyParams) && body.bodyParams) ||
      (Array.isArray(body.params) && body.params) ||
      [];

    if (!phone || !templateName || !templateLanguage) {
      return res.status(400).json({
        ok: false,
        error: "Missing phone/template_name/template_language",
        received: {
          phone: body.phone,
          templateName,
          templateLanguage,
          stageNum
        }
      });
    }

    // Once-only dedupe for steps 1/9/10 (also works as anti double-click)
    cleanupDedupe();
    const s = Number(stageNum);
    if (s === 1 || s === 9 || s === 10) {
      const key = makeDedupeKey({ stageNum: s, orderId, vin, phone, templateName, params });
      const hit = _dedupe.get(key);
      if (hit && (now() - hit.ts) < DEDUPE_TTL_MS) {
        return res.status(409).json({ ok: false, error: "DUPLICATE_PREVENTED", key, at: hit.ts });
      }
      _dedupe.set(key, { ts: now() });
    }

    const BASE_URL = process.env.MERSAL_BASE_URL || "https://w-mersal.com";
    const TOKEN = process.env.MERSAL_TOKEN;
    if (!TOKEN) return res.status(500).json({ ok: false, error: "Missing MERSAL_TOKEN" });

    const payload = {
      token: TOKEN,
      phone,
      template_name: templateName,
      template_language: templateLanguage,
      components: [
        {
          type: "body",
          parameters: params.map(v => ({ type: "text", text: String(v ?? "") }))
        }
      ]
    };

    const r = await fetch(`${BASE_URL}/api/wpbox/sendtemplatemessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const text = await r.text();
    let data;
    try { data = text ? JSON.parse(text) : null; } catch { data = text; }

    if (!r.ok) {
      return res.status(502).json({ ok: false, status: r.status, error: data });
    }

    return res.status(200).json({
      ok: true,
      status: r.status,
      mersal_result: data,
      sent_payload: {
        phone,
        templateName,
        templateLanguage,
        paramsCount: params.length,
        stageNum: s,
        orderId,
        vin
      }
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message || String(e) });
  }
}
