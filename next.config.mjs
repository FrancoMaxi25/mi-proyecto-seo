module.exports = {
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