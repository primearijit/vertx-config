
module.exports = (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  res.status(200).json({
    supabase_url: process.env.SUPABASE_URL,
    supabase_anon_key: process.env.SUPABASE_PUBLISHABLE_KEY,
    supabase_jwks_url: process.env.SUPABASE_JWKS_URL
  });
};
