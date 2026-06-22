/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/blog-xml',
        destination: '/sitemap-blog.xml',
      },
      {
        source: '/contacto-xml',
        destination: '/sitemap-contacto.xml',
      },
    ];
  },
};

export default nextConfig;