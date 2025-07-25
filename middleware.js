import { NextResponse } from 'next/server';

// Rotas que não precisam de autenticação
const rotasPublicas = ['/login', '/registrar', '/recuperar-senha'];

// Função para decodificar o papel do usuário do token (simulação)
// Nota: No middleware, não temos acesso ao localStorage, então analisamos apenas o token
function obterPapelUsuario(token) {
  // Em um cenário real, você decodificaria o JWT aqui
  // Por enquanto, vamos simular baseado no conteúdo do token
  
  // Debug apenas em desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    console.log('Token no middleware:', token);
  }
  
  // Verificar se o token contém o papel diretamente (formato: simulado-PAPEL-hash-timestamp-random)
  const partes = token.split('-');
  if (partes.length >= 2 && partes[0] === 'simulado') {
    const papel = partes[1];
    if (process.env.NODE_ENV === 'development') {
      console.log('Papel extraído do token:', papel);
    }
    
    if (papel === 'ADMINISTRADOR') {
      return 'ADMINISTRADOR';
    } else if (papel === 'FORNECEDOR') {
      return 'FORNECEDOR';
    } else if (papel === 'REPRESENTANTE') {
      return 'REPRESENTANTE';
    }
  }
  
  // Fallback: verificar se o token contém palavras-chave
  if (token.includes('ADMINISTRADOR')) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Papel detectado (fallback): ADMINISTRADOR');
    }
    return 'ADMINISTRADOR';
  } else if (token.includes('FORNECEDOR')) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Papel detectado (fallback): FORNECEDOR');
    }
    return 'FORNECEDOR';
  } else if (token.includes('REPRESENTANTE')) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Papel detectado (fallback): REPRESENTANTE');
    }
    return 'REPRESENTANTE';
  }
  
  // Fallback adicional: verificar palavras-chave mais genéricas
  if (token.includes('admin')) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Papel detectado (fallback 2): ADMINISTRADOR');
    }
    return 'ADMINISTRADOR';
  } else if (token.includes('fornecedor')) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Papel detectado (fallback 2): FORNECEDOR');
    }
    return 'FORNECEDOR';
  } else if (token.includes('representante')) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Papel detectado (fallback 2): REPRESENTANTE');
    }
    return 'REPRESENTANTE';
  }
  
  // Padrão para representante se não conseguir determinar
  if (process.env.NODE_ENV === 'development') {
    console.log('Papel padrão: REPRESENTANTE');
  }
  return 'REPRESENTANTE';
}

// Função para obter a URL do painel baseado no papel do usuário
function obterUrlPainel(papel) {
  switch (papel) {
    case 'ADMINISTRADOR':
      return '/admin';
    case 'FORNECEDOR':
      return '/painel';
    case 'REPRESENTANTE':
      return '/painel-representante';
    default:
      return '/painel';
  }
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value;
  
  // Caso 1: Usuário não autenticado tentando acessar rota protegida
  if (!rotasPublicas.includes(pathname) && !token) {
    const url = new URL('/login', request.url);
    return NextResponse.redirect(url);
  }
  
  // Caso 2: Usuário autenticado tentando acessar página de login
  if (pathname === '/login' && token) {
    const papel = obterPapelUsuario(token);
    const urlPainel = obterUrlPainel(papel);
    if (process.env.NODE_ENV === 'development') {
      console.log(`Redirecionando de /login para ${urlPainel} (papel: ${papel})`);
    }
    const url = new URL(urlPainel, request.url);
    return NextResponse.redirect(url);
  }
  
  // Caso 3: Redirecionar /painel para o painel específico do usuário
  if (pathname === '/painel' && token) {
    const papel = obterPapelUsuario(token);
    const urlPainel = obterUrlPainel(papel);
    if (process.env.NODE_ENV === 'development') {
      console.log(`Verificando redirecionamento de /painel: papel=${papel}, url=${urlPainel}`);
    }
    
    // Se não for o painel padrão, redirecionar
    if (urlPainel !== '/painel') {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Redirecionando de /painel para ${urlPainel}`);
      }
      const url = new URL(urlPainel, request.url);
      return NextResponse.redirect(url);
    }
  }
  
  return NextResponse.next();
}

// Configurar quais rotas o middleware deve ser executado
export const config = {
  matcher: [
    // Rotas que precisam de autenticação
    '/painel',
    '/painel-representante',
    '/admin/:path*',
    '/produtos/:path*',
    '/categorias/:path*',
    '/pedidos/:path*',
    '/revendedores/:path*',
    '/clientes/:path*',
    // Incluir explicitamente a rota de login para redirecionar usuários autenticados
    '/login',
    // Excluir rotas públicas e arquivos estáticos
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};