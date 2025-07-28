import React, { useState, useEffect } from 'react';

export default function InputPreco({ value, onChange, placeholder = "0,00", className = "", ...props }) {
  const [valorInterno, setValorInterno] = useState('');
  const [inicializado, setInicializado] = useState(false);

  // Inicializar apenas uma vez com o valor inicial
  useEffect(() => {
    if (!inicializado) {
      if (value && parseFloat(value) > 0) {
        const valorFormatado = parseFloat(value).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        setValorInterno(valorFormatado);
      } else {
        setValorInterno('');
      }
      setInicializado(true);
    }
  }, [value, inicializado]);

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
    const valorDigitado = e.target.value;
    const valorFormatado = formatarPreco(valorDigitado);
    
    // Atualizar valor interno
    setValorInterno(valorFormatado);
    
    // Converte de volta para número para salvar no estado
    const valorNumerico = valorFormatado.replace(',', '.');
    
    onChange(valorNumerico);
  };

  return (
    <div className="relative">
      <span className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400">
        R$
      </span>
      <input
        type="text"
        value={valorInterno}
        onChange={handleChange}
        placeholder={placeholder}
        className={`pl-10 ${className}`}
        {...props}
      />
    </div>
  );
}