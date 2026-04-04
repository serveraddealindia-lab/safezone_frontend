/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Windows can lock `.next/trace` (EPERM). Disabling tracing avoids build failures.
  outputFileTracing: false,
};
module.exports = nextConfig;
