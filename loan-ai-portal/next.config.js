/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig