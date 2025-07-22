/**
 * Formata um valor monetário para o formato brasileiro (R$)
 * @param valor Valor a ser formatado
 * @returns String formatada no padrão brasileiro
 */
export function formatarMoeda(valor: number): string {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

/**
 * Formata uma data para o formato brasileiro (DD/MM/YYYY)
 * @param data Data a ser formatada
 * @returns String formatada no padrão brasileiro
 */
export function formatarData(data: Date): string {
  return data.toLocaleDateString('pt-BR');
}

/**
 * Formata uma data e hora para o formato brasileiro (DD/MM/YYYY HH:MM)
 * @param data Data a ser formatada
 * @returns String formatada no padrão brasileiro
 */
export function formatarDataHora(data: Date): string {
  return data.toLocaleString('pt-BR');
}

/**
 * Formata um CPF (XXX.XXX.XXX-XX)
 * @param cpf CPF a ser formatado (apenas números)
 * @returns String formatada
 */
export function formatarCPF(cpf: string): string {
  const cpfLimpo = cpf.replace(/\D/g, '');
  
  if (cpfLimpo.length !== 11) {
    return cpf;
  }
  
  return cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

/**
 * Formata um CNPJ (XX.XXX.XXX/XXXX-XX)
 * @param cnpj CNPJ a ser formatado (apenas números)
 * @returns String formatada
 */
export function formatarCNPJ(cnpj: string): string {
  const cnpjLimpo = cnpj.replace(/\D/g, '');
  
  if (cnpjLimpo.length !== 14) {
    return cnpj;
  }
  
  return cnpjLimpo.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

/**
 * Formata um CPF ou CNPJ automaticamente
 * @param documento CPF ou CNPJ a ser formatado (apenas números)
 * @returns String formatada
 */
export function formatarDocumento(documento: string): string {
  const docLimpo = documento.replace(/\D/g, '');
  
  if (docLimpo.length === 11) {
    return formatarCPF(docLimpo);
  } else if (docLimpo.length === 14) {
    return formatarCNPJ(docLimpo);
  }
  
  return documento;
}

/**
 * Formata um telefone (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
 * @param telefone Telefone a ser formatado (apenas números)
 * @returns String formatada
 */
export function formatarTelefone(telefone: string): string {
  const telefoneLimpo = telefone.replace(/\D/g, '');
  
  if (telefoneLimpo.length === 11) {
    return telefoneLimpo.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (telefoneLimpo.length === 10) {
    return telefoneLimpo.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  
  return telefone;
}

/**
 * Trunca um texto para o tamanho máximo especificado
 * @param texto Texto a ser truncado
 * @param tamanhoMaximo Tamanho máximo do texto
 * @returns Texto truncado com "..." no final se necessário
 */
export function truncarTexto(texto: string, tamanhoMaximo: number): string {
  if (texto.length <= tamanhoMaximo) {
    return texto;
  }
  
  return texto.substring(0, tamanhoMaximo) + '...';
}