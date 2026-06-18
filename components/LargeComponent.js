export default function LargeComponent() {
  return (
    <div style={{ 
      marginTop: '40px', 
      padding: '30px', 
      backgroundColor: '#030712', 
      border: '1px solid #374151', 
      borderRadius: '12px', 
      textAlign: 'left',
      boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)'
    }}>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
        <span style={{ width: '12px', height: '12px', backgroundColor: '#ef4444', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', backgroundColor: '#eab308', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', backgroundColor: '#22c55e', borderRadius: '50%' }}></span>
      </div>
      <h3 style={{ color: '#10b981', margin: '0 0 8px 0', fontFamily: 'monospace', fontSize: '1.1rem' }}>
        $ npx next-optimization-analyser --status
      </h3>
      <p style={{ color: '#e5e7eb', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
        <strong>Módulo Lazy Loaded:</strong> Este panel informativo ha sido renderizado de manera asíncrona exclusivamente del lado del cliente. Su código JS asociado no bloqueó la interactividad inicial de la UI principal, garantizando una excelente puntuación de Lighthouse.
      </p>
    </div>
  );
}