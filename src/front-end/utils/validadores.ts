/**
 * Valida se um email está em formato válido
 * @param email Email a ser validado
 * @returns true se o email for válido, false caso contrário
 */
export function validarEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Valida se uma senha atende aos requisitos mínimos
 * @param senha Senha a ser validada
 * @returns true se a senha for válida, false caso contrário
 */
export function validarSenha(senha: string): boolean {
  return senha.length >= 6;
}