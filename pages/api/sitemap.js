const BASE_URL = "https://mi-proyecto-seo-maxi.onrender.com";

export default async function handler(req, res) {
  const postsFromCMS = [
    { slug: "introduccion-a-nextjs-y-ssr" },
    { slug: "guia-de-seo-avanzado-para-desarrolladores" },
    { slug: "optimizacion-critica-de-imagenes-con-webp" },
  ];

  const staticUrls = ["/", "/blog", "/contacto"];
  const dynamicUrls = postsFromCMS.map(post => `/blog/${post.slug}`);
  const allUrls = [...staticUrls, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}