import React from 'react';
import { usarCorTema } from '../../utils/coresTema';

export default function GraficoClientes({ dados }) {
  const { classes } = usarCorTema();

  if (!dados) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p>Nenhum dado de clientes disponível</p>
        </div>
      </div>
    );
  }

  const metricas = [
    {
      label: 'Total de Clientes',
      valor: dados.total || 0,
      icone: '👥',
      cor: 'blue'
    },
    {
      label: 'Clientes Ativos',
      valor: dados.ativos || 0,
      icone: '✅',
      cor: 'green'
    },
    {
      label: 'Com Pedidos',
      valor: dados.comPedidos || 0,
      icone: '🛒',
      cor: 'purple'
    },
    {
      label: 'Novos Clientes',
      valor: dados.novos || 0,
      icone: '🆕',
      cor: 'orange'
    }
  ];

  const coresConfig = {
    blue: 'bg-blue-500 text-blue-700',
    green: 'bg-green-500 text-green-700',
    purple: 'bg-purple-500 text-purple-700',
    orange: 'bg-orange-500 text-orange-700'
  };

  return (
    <div className="h-64">
      {/* Métricas em cards */}
      <div className="grid grid-cols-2 gap-4 h-full">
        {metricas.map((metrica, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
          >
            <div className="text-2xl mb-2">{metrica.icone}</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {metrica.valor}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {metrica.label}
            </div>
          </div>
        ))}
      </div>

      {/* Barra de progresso para taxa de engajamento */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Taxa de Engajamento
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {dados.taxaEngajamento?.toFixed(1) || 0}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`${classes.bg} h-2 rounded-full transition-all duration-300`}
            style={{ width: `${Math.min(dados.taxaEngajamento || 0, 100)}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Comparação visual */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Ativos vs Total</span>
          <div className="flex items-center space-x-2">
            <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ 
                  width: `${dados.total > 0 ? (dados.ativos / dados.total) * 100 : 0}%` 
                }}
              ></div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {dados.total > 0 ? ((dados.ativos / dados.total) * 100).toFixed(0) : 0}%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Com Pedidos vs Ativos</span>
          <div className="flex items-center space-x-2">
            <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-purple-500 h-2 rounded-full"
                style={{ 
                  width: `${dados.ativos > 0 ? (dados.comPedidos / dados.ativos) * 100 : 0}%` 
                }}
              ></div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {dados.ativos > 0 ? ((dados.comPedidos / dados.ativos) * 100).toFixed(0) : 0}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}