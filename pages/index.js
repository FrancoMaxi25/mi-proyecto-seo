import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { 
  ssr: false,
  loading: () => <p style={{ color: 'var(--muted-text)', padding: '20px' }}>Cargando módulo dinámico...</p>
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Plataforma de Optimización Avanzada | Core Web Vitals</title>
        <meta name="description" content="Implementación práctica de Next.js, carga asíncrona avanzada, compresión WebP y sitemaps dinámicos." />
        <meta name="keywords" content="Next.js, Arquitectura, SEO, Web Vitals, WebP" />
      </Head>

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <nav className="navbar">
          <div className="navbar-brand">SEO_LAB.NEXT</div>
          <div className="navbar-links">
            <Link href="/" style={{ color: 'var(--accent)', fontWeight: '600' }}>Inicio</Link>
            <Link href="/blog" style={{ color: 'var(--muted-text)' }}>Blog Técnico</Link>
            <Link href="/contacto" style={{ color: 'var(--muted-text)' }}>Contacto</Link>
          </div>
        </nav>

        <main style={{ flex: 1, maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', textAlign: 'center', width: '100%' }}>
          <span style={{ backgroundColor: 'var(--border-color)', color: 'var(--accent)', padding: '6px 16px', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600' }}>Laboratorio N° 14</span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginTop: '16px', marginBottom: '16px' }}>
            Optimización de Rendimiento y SEO Estricto
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--muted-text)', maxWidth: '800px', margin: '0 auto 40px auto' }}>
            Aprende a mitigar el Largest Contentful Paint (LCP) y optimizar la indexación mediante el ecosistema nativo de Next.js.
          </p>

          <div className="card" style={{ display: 'inline-block', overflow: 'hidden', padding: '10px', marginBottom: '40px' }}>
            <Image
              src="/images/seo-image.png"
              width={750}
              height={380}
              alt="Ecosistema de optimización web avanzado en Tecsup"
              priority
              style={{ borderRadius: '8px', display: 'block' }}
            />
          </div>

          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', textAlign: 'left' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>🖼️ Formatos Next-Gen</h3>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem' }}>Conversión automática en tiempo de ejecución hacia WebP, reduciendo sustancialmente el ancho de banda requerido.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>🤖 Indexación Automatizada</h3>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem' }}>Mapeo de rutas dinámicas inyectadas directamente en un sitemap estructurado XML para motores de búsqueda.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>⚡ Code Splitting</h3>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem' }}>Postergación selectiva de la carga de scripts no críticos reduciendo drásticamente el tiempo de respuesta inicial.</p>
            </div>
          </section>

          <DynamicComponent />
        </main>
      </div>
    </>
  );
}