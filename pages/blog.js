import Head from "next/head";
import Link from "next/link";

const BASE_URL = "https://mi-proyecto-seo-maxi.onrender.com";

// Intercepta la petición: si la pide Google como sitemap, devuelve XML estructurado
export async function getServerSideProps({ req, res }) {
  const userAgent = req.headers["user-agent"] || "";
  const urlPath = req.url || "";

  if (urlPath.includes("sitemap") || userAgent.includes("Googlebot") || req.headers["accept"]?.includes("xml")) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/blog</loc>
  </url>
</urlset>`;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return { props: {} };
  }

  return {
    props: {},
  };
}

export default function Blog() {
  const articulosSimulados = [
    { title: "Introducción a Next.js y SSR", date: "Junio 15, 2026", desc: "Conceptos clave del Server-Side Rendering y cómo cambia las reglas del SEO moderno.", tag: "Arquitectura" },
    { title: "Guía de SEO Avanzado para Desarrolladores", date: "Junio 10, 2026", desc: "Aprende el uso semántico correcto de etiquetas meta y Open Graph para previsualizaciones.", tag: "Marketing" },
    { title: "Optimización Crítica de Imágenes con WebP", date: "Mayo 28, 2026", desc: "Cómo reducir el peso total de tus recursos estáticos en más del 70% sin perder resolución.", tag: "Rendimiento" }
  ];

  return (
    <>
      <Head>
        <title>Artículos Técnicos Avanzados | Blog de Optimización</title>
        <meta name="description" content="Explora artículos especializados escritos por desarrolladores sobre optimización de plataformas web." />
        
        {/* Etiquetas Open Graph exigidas por el profesor */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Artículos Técnicos Avanzados | Blog de Optimización" />
        <meta property="og:description" content="Explora artículos especializados escritos por desarrolladores sobre optimización de plataformas web." />
        <meta property="og:url" content="https://mi-proyecto-seo-maxi.onrender.com/blog" />
      </Head>

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <nav className="navbar">
          <div className="navbar-brand">SEO_LAB.NEXT</div>
          <div className="navbar-links">
            <Link href="/" style={{ color: 'var(--muted-text)' }}>Inicio</Link>
            <Link href="/blog" style={{ color: 'var(--accent)', fontWeight: '600' }}>Blog Técnico</Link>
            <Link href="/contacto" style={{ color: 'var(--muted-text)' }}>Contacto</Link>
          </div>
        </nav>

        <main style={{ flex: 1, maxWidth: '1000px', width: '100%', margin: '0 auto', padding: '50px 20px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Publicaciones Científicas</h1>
          <p style={{ color: 'var(--muted-text)', marginBottom: '40px' }}>Artículos e investigaciones sobre optimización de aplicaciones modernas en la nube.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {articulosSimulados.map((art, idx) => (
              <article key={idx} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 'bold' }}>{art.tag}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--muted-text)' }}>{art.date}</span>
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{art.title}</h2>
                <p style={{ color: 'var(--muted-text)', marginBottom: '20px' }}>{art.desc}</p>
                <Link href="#" style={{ color: 'var(--accent)', fontWeight: '600' }}>
                  Leer artículo completo ➔
                </Link>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}