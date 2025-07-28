import React, { useState, useEffect } from 'react';
import IndicadorCarregamento from './IndicadorCarregamento';

const StatusAutoSave = ({ 
  salvandoAuto, 
  ultimoSalvamento, 
  erro, 
  formatarUltimoSalvamento,
  className = '' 
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (erro) {
    return (
      <div className={`flex items-center text-red-600 dark:text-red-400 text-sm ${className}`}>
        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        Erro ao salvar
      </div>
    );
  }

  if (salvandoAuto) {
    return (
      <div className={`flex items-center text-blue-600 dark:text-blue-400 text-sm ${className}`}>
        <IndicadorCarregamento tamanho="pequeno" cor="azul" />
        <span className="ml-2">Salvando...</span>
      </div>
    );
  }

  if (ultimoSalvamento) {
    return (
      <div className={`flex items-center text-green-600 dark:text-green-400 text-sm ${className}`}>
        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        {formatarUltimoSalvamento()}
      </div>
    );
  }

  return null;
};

export default StatusAutoSave;