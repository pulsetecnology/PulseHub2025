import React from 'react';
import { usarCorTemaSeguro } from '../../hooks/usarCorTemaSeguro';

/**
 * Componente de teste para verificar se os problemas de hidratação foram resolvidos
 */
export default function TesteHidratacao() {
  const { classes, mounted } = usarCorTemaSeguro();

  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="text-lg font-medium mb-2">Teste de Hidratação</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        Status: {mounted ? 'Hidratado' : 'Renderizando no servidor'}
      </p>
      <div className={`w-4 h-4 ${classes.bg} rounded-full inline-block mr-2`}></div>
      <span className={`${classes.text} ${classes.textDark}`}>
        Cor do tema aplicada
      </span>
    </div>
  );
}