import { ServicoAutenticacao } from '../servicos/ServicoAutenticacao';

/**
 * Verifica se o usuário está autenticado
 * @returns {boolean} true se o usuário estiver autenticado, false caso contrário
 */
export function verificarAutenticacao() {
  // Verificar se estamos no lado do cliente
  if (typeof window === 'undefined') {
    return false;
  }
  
  const servicoAutenticacao = new ServicoAutenticacao();
  return servicoAutenticacao.estaAutenticado();
}

/**
 * Redireciona para a página de login se o usuário não estiver autenticado
 * @returns {boolean} true se o usuário estiver autenticado, false caso contrário
 */
export function redirecionarSeNaoAutenticado() {
  // Verificar se estamos no lado do cliente
  if (typeof window === 'undefined') {
    return false;
  }
  
  const autenticado = verificarAutenticacao();
  
  if (!autenticado) {
    window.location.href = '/login';
    return false;
  }
  
  return true;
}

/**
 * Redireciona para o painel se o usuário já estiver autenticado
 * @returns {boolean} true se o usuário não estiver autenticado, false caso contrário
 */
export function redirecionarSeAutenticado() {
  // Verificar se estamos no lado do cliente
  if (typeof window === 'undefined') {
    return true;
  }
  
  const autenticado = verificarAutenticacao();
  
  if (autenticado) {
    window.location.href = '/painel';
    return false;
  }
  
  return true;
}