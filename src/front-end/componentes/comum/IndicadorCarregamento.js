import React from 'react';

const IndicadorCarregamento = ({ 
  tamanho = 'medio', 
  cor = 'azul', 
  texto = null,
  className = '' 
}) => {
  const obterTamanho = () => {
    switch (tamanho) {
      case 'pequeno':
        return 'h-4 w-4';
      case 'grande':
        return 'h-8 w-8';
      case 'extra-grande':
        return 'h-12 w-12';
      default:
        return 'h-6 w-6';
    }
  };

  const obterCor = () => {
    switch (cor) {
      case 'branco':
        return 'text-white';
      case 'cinza':
        return 'text-gray-600';
      case 'verde':
        return 'text-green-600';
      case 'vermelho':
        return 'text-red-600';
      default:
        return 'text-blue-600';
    }
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg 
        className={`animate-spin ${obterTamanho()} ${obterCor()}`} 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {texto && (
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          {texto}
        </span>
      )}
    </div>
  );
};

export default IndicadorCarregamento;