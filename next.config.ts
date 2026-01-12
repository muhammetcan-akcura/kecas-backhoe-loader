import type { NextConfig } from "next";
import path from "path";

const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion', '@radix-ui/react-slot'],
  },
  transpilePackages: [],
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://maps.googleapis.com; " +
              "frame-src https://www.google.com https://www.google.com/maps; " +
              "img-src 'self' data: https://www.google.com https://maps.gstatic.com; " +
              "style-src 'self' 'unsafe-inline';",
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'credentialless'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://fonts.googleapis.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https:",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-src 'self'",
              "object-src 'none'",
              "manifest-src 'self'",
              "worker-src 'self' blob:",
              "media-src 'self'"
            ].join('; ')
          }
        ],
      },
    ];
  },
  webpack: (config, { isServer, dev }) => {
    // Modül çözümlemesini proje diziniyle sınırla
    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.modules) {
      config.resolve.modules = [];
    }
    config.resolve.modules = [
      path.join(projectRoot, 'node_modules'),
      ...config.resolve.modules.filter((m: string) => m !== 'node_modules'),
      'node_modules',
    ];
    // Tailwind CSS ve PostCSS modüllerini proje dizininden çöz
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      tailwindcss: path.join(projectRoot, 'node_modules/tailwindcss'),
      '@tailwindcss/postcss': path.join(projectRoot, 'node_modules/@tailwindcss/postcss'),
    };
    // CSS modül çözümlemesi için
    config.resolve.extensionAlias = {
      '.css': ['.css'],
    };
    
    // Production optimizasyonları
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common chunk
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }
    
    return config;
  },
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
