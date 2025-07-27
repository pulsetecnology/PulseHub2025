import React from 'react';

export default function BotaoCarregando({ 
  children, 
  carregando = false, 
  onClick, 
  disabled = false, 
  className = '', 
  tipo = 'button',
  ...props 
}) {
  const isDisabled = carregando || disabled;

  return (
    <button
      type={tipo}
      onClick={onClick}
      disabled={isDisabled}
      className={`relative inline-flex items-center justify-center ${className} ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      {...props}
    >
      {carregando && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="animate-spin h-5 w-5 text-current" 
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
        </div>
      )}
      
      <span className={carregando ? 'opacity-0' : ''}>
        {children}
      </span>
    </button>
  );
}