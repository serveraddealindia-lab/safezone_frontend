/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Windows can lock `.next/trace` (EPERM). Disabling tracing avoids build failures.
  outputFileTracing: false,
  // Use a different build directory in case `.next` has restrictive permissions.
  distDir: 'next-build',
};
module.exports = nextConfig;
