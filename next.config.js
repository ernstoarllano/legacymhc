/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    GOOGLE_MAP_API: process.env.GOOGLE_MAP_API
  },
  images: {
    domains: ['cdn.sanity.io']
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
