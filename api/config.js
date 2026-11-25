
module.exports = (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  res.status(200).json({
    supabase_url: "https://yxpmdqmpuriiizbelmjw.supabase.co",
    supabase_anon_key: process.env.SUPABASE_PUBLISHABLE_KEY,
    supabase_jwks_url: "https://yxpmdqmpuriiizbelmjw.supabase.co/auth/v1/.well-known/jwks.json"
  });
};
