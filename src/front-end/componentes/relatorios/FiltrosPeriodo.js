import React from 'react';
import { usarCorTema } from '../../utils/coresTema';

export default function FiltrosPeriodo({ periodo, onChange }) {
  const { classes } = usarCorTema();

  const opcoesPeriodo = [
    { valor: '7dias', label: 'Últimos 7 dias' },
    { valor: '30dias', label: 'Últimos 30 dias' },
    { valor: '90dias', label: 'Últimos 90 dias' },
    { valor: '1ano', label: 'Último ano' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
          Dashboard de Relatórios
        </h2>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Período:
          </span>
          
          <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            {opcoesPeriodo.map((opcao) => (
              <button
                key={opcao.valor}
                onClick={() => onChange(opcao.valor)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  periodo === opcao.valor
                    ? `${classes.bg} text-white`
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {opcao.label}
              </button>
            ))}
          </div>
          
          {/* Botão de exportar */}
          <button
            onClick={() => {
              // Implementar exportação futuramente
              alert('Funcionalidade de exportação será implementada em breve');
            }}
            className="flex items-center space-x-2 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm">Exportar</span>
          </button>
        </div>
      </div>
    </div>
  );
}