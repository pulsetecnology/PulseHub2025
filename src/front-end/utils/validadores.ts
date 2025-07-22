/**
 * Valida se um email está em formato válido
 * @param email Email a ser validado
 * @returns true se o email for válido, false caso contrário
 */
export function validarEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

/**
 * Valida se um CPF é válido (incluindo dígitos verificadores)
 * @param cpf CPF a ser validado (pode conter pontuação)
 * @returns true se o CPF for válido, false caso contrário
 */
export function validarCPF(cpf: string): boolean {
  const cpfLimpo = cpf.replace(/\D/g, '');
  
  if (cpfLimpo.length !== 11) {
    return false;
  }
  
  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cpfLimpo)) {
    return false;
  }
  
  // Validação do primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
  }
  
  let resto = soma % 11;
  let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;
  
  if (parseInt(cpfLimpo.charAt(9)) !== digitoVerificador1) {
    return false;
  }
  
  // Validação do segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpfLimpo.charAt(i)) * (11 - i);
  }
  
  resto = soma % 11;
  let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;
  
  return parseInt(cpfLimpo.charAt(10)) === digitoVerificador2;
}

/**
 * Valida se um CNPJ é válido (incluindo dígitos verificadores)
 * @param cnpj CNPJ a ser validado (pode conter pontuação)
 * @returns true se o CNPJ for válido, false caso contrário
 */
export function validarCNPJ(cnpj: string): boolean {
  const cnpjLimpo = cnpj.replace(/\D/g, '');
  
  if (cnpjLimpo.length !== 14) {
    return false;
  }
  
  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cnpjLimpo)) {
    return false;
  }
  
  // Validação do primeiro dígito verificador
  let tamanho = cnpjLimpo.length - 2;
  let numeros = cnpjLimpo.substring(0, tamanho);
  const digitos = cnpjLimpo.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(0))) {
    return false;
  }
  
  // Validação do segundo dígito verificador
  tamanho = tamanho + 1;
  numeros = cnpjLimpo.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  
  return resultado === parseInt(digitos.charAt(1));
}

/**
 * Valida se uma senha atende aos requisitos mínimos de segurança
 * @param senha Senha a ser validada
 * @returns true se a senha for válida, false caso contrário
 */
export function validarSenha(senha: string): boolean {
  // Pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(senha);
}

/**
 * Valida se um telefone está em formato válido
 * @param telefone Telefone a ser validado (pode conter pontuação)
 * @returns true se o telefone for válido, false caso contrário
 */
export function validarTelefone(telefone: string): boolean {
  const telefoneLimpo = telefone.replace(/\D/g, '');
  return telefoneLimpo.length >= 10 && telefoneLimpo.length <= 11;
}

/**
 * Valida se um CEP está em formato válido
 * @param cep CEP a ser validado (pode conter pontuação)
 * @returns true se o CEP for válido, false caso contrário
 */
export function validarCEP(cep: string): boolean {
  const cepLimpo = cep.replace(/\D/g, '');
  return cepLimpo.length === 8;
}