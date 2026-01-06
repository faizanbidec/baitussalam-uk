/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
      // Explicitly allow the API image domain
      {
        protocol: 'http',
        hostname: 'baitussalam-uk-nestjs.vapedepablo.com',
      },
      {
        protocol: 'https',
        hostname: 'baitussalam-uk-nestjs.vapedepablo.com',
      },
    ],
    // Allow unoptimized images as fallback (optional, for development)
    unoptimized: false,
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
};

export default nextConfig;
