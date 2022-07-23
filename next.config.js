/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID
  }
}

module.exports = nextConfig
