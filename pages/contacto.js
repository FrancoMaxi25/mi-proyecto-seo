import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Consultoría Técnica y Auditorías SEO | Contáctanos</title>
        <meta name="description" content="Solicita una auditoría de software para analizar cuellos de botella." />
      </Head>

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <nav className="navbar">
          <div className="navbar-brand">SEO_LAB.NEXT</div>
          <div className="navbar-links">
            <Link href="/" style={{ color: 'var(--muted-text)' }}>Inicio</Link>
            <Link href="/blog" style={{ color: 'var(--muted-text)' }}>Blog Técnico</Link>
            <Link href="/contacto" style={{ color: 'var(--accent)', fontWeight: '600' }}>Contacto</Link>
          </div>
        </nav>

        <main style={{ flex: 1, maxWidth: '1100px', width: '100%', margin: '0 auto', padding: '50px 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginTop: '20px' }}>
            
            <div>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Hablemos de tu Proyecto</h1>
              <p style={{ color: 'var(--muted-text)', lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '30px' }}>
                ¿Tienes problemas de rendimiento o baja tasa de indexación orgánica? Nuestro laboratorio puede auditar tu código base sin costo.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--muted-text)' }}>
                <div>📍 <strong>Dirección:</strong> Av. Tecsup 140, Lima - Perú</div>
                <div>✉️ <strong>Correo:</strong> soporte@seo-next-sitio.com</div>
                <div>📞 <strong>Teléfono:</strong> +51 999 888 777</div>
              </div>
            </div>

            <div className="card">
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div className="form-group">
                  <label className="form-label">Nombre Completo</label>
                  <input type="text" placeholder="Ej. Frankois Maxi" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Correo Institucional</label>
                  <input type="email" placeholder="frankois@tecsup.edu.pe" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Mensaje o Requerimiento</label>
                  <textarea rows="4" placeholder="Describe brevemente los problemas detectados en Lighthouse..." className="form-input" style={{ resize: 'none' }}></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Enviar Solicitud de Auditoría
                </button>
              </form>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}