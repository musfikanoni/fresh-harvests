/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'code-commando.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
