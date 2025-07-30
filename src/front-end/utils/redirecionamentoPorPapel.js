/**
 * Utilitário para redirecionamento baseado no papel do usuário
 */

/**
 * Obtém a URL do painel baseado no papel do usuário
 * @param {string} papel - Papel do usuário (ADMINISTRADOR, FORNECEDOR, REPRESENTANTE)
 * @returns {string} URL do painel correspondente
 */
export function obterUrlPainel(papel) {
  switch (papel) {
    case 'ADMINISTRADOR':
      return '/admin';
    case 'FORNECEDOR':
      return '/painel';
    case 'REPRESENTANTE':
      return '/painel-representante';
    default:
      console.warn(`Papel desconhecido: ${papel}. Redirecionando para painel padrão.`);
      return '/painel';
  }
}

/**
 * Redireciona o usuário para o painel correto baseado no seu papel
 * @param {string} papel - Papel do usuário
 * @param {boolean} replace - Se deve usar replace ao invés de href (padrão: false)
 */
export function redirecionarParaPainel(papel, replace = false) {
  const url = obterUrlPainel(papel);
  
  if (replace && window.location.replace) {
    window.location.replace(url);
  } else {
    window.location.href = url;
  }
}

/**
 * Obtém o papel do usuário do localStorage
 * @returns {string|null} Papel do usuário ou null se não encontrado
 */
export function obterPapelUsuario() {
  try {
    const usuarioStr = localStorage.getItem('usuario');
    if (usuarioStr) {
      const usuario = JSON.parse(usuarioStr);
      return usuario.papel || null;
    }
  } catch (error) {
    console.error('Erro ao obter papel do usuário:', error);
  }
  return null;
}

/**
 * Redireciona automaticamente baseado no usuário logado
 * @param {boolean} replace - Se deve usar replace ao invés de href (padrão: false)
 */
export function redirecionarAutomatico(replace = false) {
  const papel = obterPapelUsuario();
  if (papel) {
    redirecionarParaPainel(papel, replace);
  } else {
    console.warn('Papel do usuário não encontrado. Redirecionando para painel padrão.');
    const url = '/painel';
    if (replace && window.location.replace) {
      window.location.replace(url);
    } else {
      window.location.href = url;
    }
  }
}

/**
 * Verifica se o usuário tem permissão para acessar uma rota específica
 * @param {string} rota - Rota que o usuário está tentando acessar
 * @param {string} papel - Papel do usuário
 * @returns {boolean} true se o usuário tem permissão, false caso contrário
 */
export function verificarPermissaoRota(rota, papel) {
  // Rotas administrativas
  if (rota.startsWith('/admin')) {
    return papel === 'ADMINISTRADOR';
  }
  
  // Rota do painel de representante
  if (rota === '/painel-representante') {
    return papel === 'REPRESENTANTE';
  }
  
  // Rota do painel principal (fornecedores)
  if (rota === '/painel') {
    return papel === 'FORNECEDOR' || papel === 'ADMINISTRADOR';
  }
  
  // Outras rotas são acessíveis por todos os usuários autenticados
  return true;
}

/**
 * Redireciona para a página de acesso negado se o usuário não tiver permissão
 * @param {string} rota - Rota que o usuário está tentando acessar
 * @returns {boolean} true se o usuário tem permissão, false caso contrário
 */
export function verificarERedirecionarPermissao(rota) {
  const papel = obterPapelUsuario();
  
  if (!papel) {
    window.location.href = '/login';
    return false;
  }
  
  if (!verificarPermissaoRota(rota, papel)) {
    // Redirecionar para o painel correto do usuário
    redirecionarParaPainel(papel, true);
    return false;
  }
  
  return true;
}