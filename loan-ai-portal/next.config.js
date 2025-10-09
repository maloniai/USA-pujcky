/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  
  // Bundle Size Optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn']
    } : false,
  },
  
  // SWC Minification (faster and smaller)
  swcMinify: true,
  
  // Optimize Package Imports
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
  },
  
  // Experimental Features for Better Performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Compression
  compress: true,
  
  // Production Source Maps (disable for smaller bundle)
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig