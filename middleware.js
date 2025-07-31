import { NextResponse } from 'next/server';

// Rotas que não precisam de autenticação
const rotasPublicas = ['/login', '/registrar', '/recuperar-senha'];

// Função para decodificar o papel do usuário do token
function obterPapelUsuario(token) {
  // Debug apenas em desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    console.log('Token no middleware:', token);
  }
  
  try {
    // Primeiro, tentar decodificar como JWT real
    if (token.startsWith('eyJ')) { // JWT tokens começam com 'eyJ'
      if (process.env.NODE_ENV === 'development') {
        console.log('Detectado token JWT, tentando decodificar...');
      }
      
      // Decodificar o payload do JWT (sem verificar assinatura no middleware por performance)
      const payload = JSON.parse(atob(token.split('.')[1]));
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Payload decodificado:', payload);
      }
      
      if (payload.papel) {
        if (process.env.NODE_ENV === 'development') {
          console.log('Papel extraído do JWT:', payload.papel);
        }
        return payload.papel;
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.log('Papel não encontrado no payload JWT');
        }
      }
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.log('Token não é JWT (não começa com eyJ)');
      }
    }
    
    // Fallback: verificar se é token simulado ou auth (formato: simulado-PAPEL-hash ou auth-PAPEL-hash)
    const partes = token.split('-');
    if (partes.length >= 2 && (partes[0] === 'simulado' || partes[0] === 'auth')) {
      const papel = partes[1];
      if (process.env.NODE_ENV === 'development') {
        console.log(`Papel extraído do token ${partes[0]}:`, papel);
      }
      
      if (['ADMINISTRADOR', 'FORNECEDOR', 'REPRESENTANTE'].includes(papel)) {
        return papel;
      }
    }
    
    // Fallback adicional: verificar se o token contém palavras-chave
    if (token.includes('ADMINISTRADOR') || token.includes('admin')) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Papel detectado (fallback): ADMINISTRADOR');
      }
      return 'ADMINISTRADOR';
    } else if (token.includes('FORNECEDOR') || token.includes('fornecedor')) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Papel detectado (fallback): FORNECEDOR');
      }
      return 'FORNECEDOR';
    } else if (token.includes('REPRESENTANTE') || token.includes('representante')) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Papel detectado (fallback): REPRESENTANTE');
      }
      return 'REPRESENTANTE';
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Erro ao decodificar token:', error);
    }
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