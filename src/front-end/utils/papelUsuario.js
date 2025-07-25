/**
 * Utilitários para gerenciar papéis de usuário
 */

// Tipos de papel disponíveis
export const PAPEIS = {
  ADMINISTRADOR: 'ADMINISTRADOR',
  FORNECEDOR: 'FORNECEDOR',
  REPRESENTANTE: 'REPRESENTANTE'
};

// Mapeamento de emails para papéis (para usuários de demonstração)
const EMAILS_DEMO = {
  'admin@pulsehub.com': PAPEIS.ADMINISTRADOR,
  'fornecedor@exemplo.com': PAPEIS.FORNECEDOR,
  'representante@exemplo.com': PAPEIS.REPRESENTANTE,
  // Compatibilidade com usuários antigos
  'admin@exemplo.com': PAPEIS.ADMINISTRADOR
};

/**
 * Obtém o papel do usuário baseado no token ou localStorage
 * @param {string} token - Token JWT (opcional)
 * @returns {string} Papel do usuário
 */
export function obterPapelUsuario(token = null) {
  // Tentar obter do localStorage primeiro (mais confiável)
  if (typeof window !== 'undefined') {
    try {
      const usuarioJson = localStorage.getItem('usuario');
      if (usuarioJson) {
        const usuario = JSON.parse(usuarioJson);
        if (usuario.papel) {
          return usuario.papel;
        }
        
        // Se não tem papel mas tem email, verificar se é um usuário demo
        if (usuario.email && EMAILS_DEMO[usuario.email]) {
          return EMAILS_DEMO[usuario.email];
        }
      }
    } catch (erro) {
      console.error('Erro ao obter papel do usuário do localStorage:', erro);
    }
  }
  
  // Se não conseguiu do localStorage, tentar analisar o token
  if (token) {
    if (token.includes('admin') || token.includes('ADMINISTRADOR')) {
      return PAPEIS.ADMINISTRADOR;
    } else if (token.includes('fornecedor') || token.includes('FORNECEDOR')) {
      return PAPEIS.FORNECEDOR;
    } else if (token.includes('representante') || token.includes('REPRESENTANTE')) {
      return PAPEIS.REPRESENTANTE;
    }
  }
  
  // Padrão para representante se não conseguir determinar
  return PAPEIS.REPRESENTANTE;
}

/**
 * Obtém a URL do painel baseado no papel do usuário
 * @param {string} papel - Papel do usuário
 * @returns {string} URL do painel
 */
export function obterUrlPainel(papel) {
  switch (papel) {
    case PAPEIS.ADMINISTRADOR:
      return '/admin';
    case PAPEIS.FORNECEDOR:
      return '/painel';
    case PAPEIS.REPRESENTANTE:
      return '/painel-representante';
    default:
      return '/painel';
  }
}

/**
 * Verifica se o usuário tem um papel específico
 * @param {string} papelRequerido - Papel requerido
 * @param {string} token - Token JWT (opcional)
 * @returns {boolean} True se o usuário tem o papel requerido
 */
export function temPapel(papelRequerido, token = null) {
  const papelAtual = obterPapelUsuario(token);
  return papelAtual === papelRequerido;
}

/**
 * Verifica se o usuário é administrador
 * @param {string} token - Token JWT (opcional)
 * @returns {boolean} True se o usuário é administrador
 */
export function ehAdministrador(token = null) {
  return temPapel(PAPEIS.ADMINISTRADOR, token);
}

/**
 * Verifica se o usuário é fornecedor
 * @param {string} token - Token JWT (opcional)
 * @returns {boolean} True se o usuário é fornecedor
 */
export function ehFornecedor(token = null) {
  return temPapel(PAPEIS.FORNECEDOR, token);
}

/**
 * Verifica se o usuário é representante
 * @param {string} token - Token JWT (opcional)
 * @returns {boolean} True se o usuário é representante
 */
export function ehRepresentante(token = null) {
  return temPapel(PAPEIS.REPRESENTANTE, token);
}

/**
 * Obtém o nome amigável do papel
 * @param {string} papel - Papel do usuário
 * @returns {string} Nome amigável do papel
 */
export function obterNomePapel(papel) {
  switch (papel) {
    case PAPEIS.ADMINISTRADOR:
      return 'Administrador';
    case PAPEIS.FORNECEDOR:
      return 'Fornecedor';
    case PAPEIS.REPRESENTANTE:
      return 'Representante';
    default:
      return 'Usuário';
  }
}

/**
 * Obtém a cor associada ao papel (para UI)
 * @param {string} papel - Papel do usuário
 * @returns {string} Classe CSS da cor
 */
export function obterCorPapel(papel) {
  switch (papel) {
    case PAPEIS.ADMINISTRADOR:
      return 'purple';
    case PAPEIS.FORNECEDOR:
      return 'blue';
    case PAPEIS.REPRESENTANTE:
      return 'orange';
    default:
      return 'gray';
  }
}