/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['nodemailer'],
  images: {
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 100],
  },
};

export default nextConfig;

