export default function PaginaSimples() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h1 style={{ color: '#2563eb' }}>PulseHub</h1>
      <p>Esta é uma página simples para testar o Next.js.</p>
      <div style={{ 
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f3f4f6',
        borderRadius: '8px'
      }}>
        <h2>Navegação</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>
            <a href="/login" style={{ color: '#2563eb', textDecoration: 'none' }}>Login</a>
          </li>
          <li style={{ margin: '10px 0' }}>
            <a href="/registrar" style={{ color: '#2563eb', textDecoration: 'none' }}>Registrar</a>
          </li>
          <li style={{ margin: '10px 0' }}>
            <a href="/recuperar-senha" style={{ color: '#2563eb', textDecoration: 'none' }}>Recuperar Senha</a>
          </li>
        </ul>
      </div>
    </div>
  );
}