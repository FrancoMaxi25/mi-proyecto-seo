const BASE_URL = "https://mi-proyecto-seo-maxi.onrender.com";

export default async function handler(req, res) {
  // Simulación avanzada de colección de posts inyectados dinámicamente desde un CMS
  const postsFromCMS = [
    { slug: "introduccion-a-nextjs-y-ssr" },
    { slug: "guia-de-seo-avanzado-para-desarrolladores" },
    { slug: "optimizacion-critica-de-imagenes-con-webp" },
  ];

  // Rutas maestras fijas de la plataforma
  const staticUrls = ["/", "/blog", "/contacto"];

  // Formateo de slugs dinámicos
  const dynamicUrls = postsFromCMS.map(post => `/blog/${post.slug}`);

  // Consolidación de matriz global de rastreo
  const allUrls = [...staticUrls, ...dynamicUrls];

  // Generación exacta del estándar XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("")}
  </urlset>`;

  // Configuración de cabeceras MIME y flujo de salida
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}