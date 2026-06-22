/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/blog-xml',          // La palabra limpia que pondrás en Google
        destination: '/sitemap-blog.xml', // El archivo real que va a leer
      },
      {
        source: '/contacto-xml',      // La palabra limpia para contacto
        destination: '/sitemap-contacto.xml',
      },
    ];
  },
};

module.exports = nextConfig;