import React from 'react';

export default function InputPreco({ value, onChange, placeholder = "0,00", className = "", ...props }) {
  const formatarPreco = (valor) => {
    // Remove tudo que não é dígito
    const apenasNumeros = valor.replace(/\D/g, '');
    
    // Se vazio, retorna vazio
    if (!apenasNumeros) return '';
    
    // Converte para número e divide por 100 para ter as casas decimais
    const numero = parseInt(apenasNumeros) / 100;
    
    // Formata com vírgula como separador decimal
    return numero.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleChange = (e) => {
    const valorFormatado = formatarPreco(e.target.value);
    
    // Converte de volta para número para salvar no estado
    const valorNumerico = valorFormatado.replace(',', '.');
    
    onChange(valorNumerico);
  };

  const valorExibido = value ? formatarPreco(value.toString().replace('.', '')) : '';

  return (
    <div className="relative">
      <span className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400">
        R$
      </span>
      <input
        type="text"
        value={valorExibido}
        onChange={handleChange}
        placeholder={placeholder}
        className={`pl-10 ${className}`}
        {...props}
      />
    </div>
  );
}