import { NextResponse } from 'next/server';

// Rotas que não precisam de autenticação
const rotasPublicas = ['/login', '/registrar', '/recuperar-senha'];

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
    const url = new URL('/painel', request.url);
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

// Configurar quais rotas o middleware deve ser executado
export const config = {
  matcher: [
    // Rotas que precisam de autenticação
    '/painel',
    '/produtos/:path*',
    '/categorias/:path*',
    '/pedidos/:path*',
    '/revendedores/:path*',
    // Incluir explicitamente a rota de login para redirecionar usuários autenticados
    '/login',
    // Excluir rotas públicas e arquivos estáticos
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};