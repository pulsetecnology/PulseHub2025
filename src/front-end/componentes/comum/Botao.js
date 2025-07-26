import React from 'react';
import { usarCorTema } from '../../utils/coresTema';

export default function Botao({ 
  children, 
  onClick, 
  tipo = 'primario', 
  tamanho = 'md', 
  disabled = false, 
  className = '',
  ...props 
}) {
  const { classes } = usarCorTema();

  const getTipoClasses = (tipo) => {
    switch (tipo) {
      case 'primario':
        return `${classes.bg} text-white ${classes.bgHover} focus:${classes.ring}`;
      case 'secundario':
        return `border-2 ${classes.border} ${classes.text} hover:${classes.bgLight} hover:${classes.bgLightDark} focus:${classes.ring}`;
      case 'outline':
        return `border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-gray-500`;
      case 'perigo':
        return 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';
      case 'sucesso':
        return 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500';
      default:
        return `${classes.bg} text-white ${classes.bgHover} focus:${classes.ring}`;
    }
  };

  const getTamanhoClasses = (tamanho) => {
    switch (tamanho) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'md':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-6 py-3 text-base';
      case 'xl':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-4 py-2 text-sm';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        font-medium rounded-md
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${getTipoClasses(tipo)}
        ${getTamanhoClasses(tamanho)}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}