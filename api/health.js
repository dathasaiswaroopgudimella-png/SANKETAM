/**
 * SANKETAM — VERCEL HEALTH CHECK & CONFIG INSPECTOR: /api/health
 */

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store, max-age=0');

  const hasGemini = Boolean(process.env.GEMINI_API_KEY);
  const hasOpenRouter = Boolean(process.env.OPENROUTER_API_KEY);
  const hasSupabase = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);

  return res.status(200).json({
    app: 'Sanketam',
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production',
    integrations: {
      gemini_ai: hasGemini ? 'configured' : 'client_fallback_mode',
      openrouter: hasOpenRouter ? 'configured' : 'optional',
      supabase: hasSupabase ? 'configured' : 'optional'
    },
    message: 'Sanketam Vercel deployment is active with zero-crash fallback guarantees.'
  });
}
