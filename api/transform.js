/**
 * SANKETAM — VERCEL SERVERLESS FUNCTION: /api/transform
 * Securely uses GEMINI_API_KEY from Vercel Environment Variables
 * Zero-crash architecture with graceful fallback
 */

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { rawText, language = 'telugu', level = 'level2' } = req.body || {};

  if (!rawText) {
    return res.status(400).json({ error: 'Missing rawText in request body.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  // If no Gemini key is configured in Vercel, return an informational response without crashing
  if (!apiKey) {
    return res.status(200).json({
      status: 'fallback',
      message: 'GEMINI_API_KEY not configured in Vercel environment. Using client softening fallback.',
      source: 'client_fallback'
    });
  }

  try {
    const prompt = `You are Sanketam's Cultural Harmonizer AI.
Your goal is to convert this young adult's raw, informal, or stressed voice note into a warm, reassuring, and respectful update for their parents in ${language}.

Non-negotiable rules:
1. Never invent false safety or fake medical facts.
2. Soften traffic, late hours, or work frustration into calm, filial peace of mind.
3. Keep the translation concise (1-2 sentences) so it is easy for elderly parents to read or hear.
4. Output strict JSON with two keys:
   "indic": "The softened message written in ${language} script",
   "englishSub": "A brief English explanation/translation of the update"

Disclosure Level:
- level1 (Quick Safe Ping): Only confirm arrival and safety, zero extra detail.
- level2 (Dinner & Routine): Confirm arrival, mention meal eaten, and tomorrow's check-in plan.
- level3 (Warm Reflection): Include positive work notes, warm regards, and weekend call schedule.

Raw Note: "${rawText}"
Target Language: ${language}
Selected Level: ${level}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: 'application/json'
          }
        })
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error('Gemini API Error:', errText);
      return res.status(200).json({
        status: 'fallback',
        error: 'Gemini request unsuccessful, gracefully falling back.',
        source: 'client_fallback'
      });
    }

    const data = await response.json();
    const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
    const parsed = JSON.parse(candidate);

    return res.status(200).json({
      status: 'success',
      indic: parsed.indic,
      englishSub: parsed.englishSub,
      model: 'gemini-1.5-flash',
      source: 'live_gemini'
    });

  } catch (error) {
    console.error('Transform API Error:', error);
    // Never crash the frontend; return graceful fallback status
    return res.status(200).json({
      status: 'fallback',
      error: error.message,
      source: 'client_fallback'
    });
  }
}
