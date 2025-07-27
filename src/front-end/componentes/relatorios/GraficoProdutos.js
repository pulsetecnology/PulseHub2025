import React from 'react';
import { usarCorTema } from '../../utils/coresTema';

export default function GraficoProdutos({ dados }) {
  const { classes } = usarCorTema();

  if (!dados) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
          <p>Nenhum dado disponível</p>
        </div>
      </div>
    );
  }

  // Configuração de cores para cada status
  const coresStatus = {
    pendente: { bg: 'bg-yellow-500', text: 'text-yellow-700', label: 'Pendente' },
    aprovado: { bg: 'bg-green-500', text: 'text-green-700', label: 'Aprovado' },
    cancelado: { bg: 'bg-red-500', text: 'text-red-700', label: 'Cancelado' },
    outros: { bg: 'bg-gray-500', text: 'text-gray-700', label: 'Outros' }
  };

  // Calcular total e percentuais
  const total = Object.values(dados).reduce((sum, valor) => sum + valor, 0);
  
  if (total === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          </svg>
          <p>Nenhum pedido encontrado</p>
        </div>
      </div>
    );
  }

  const dadosComPercentual = Object.entries(dados)
    .filter(([, valor]) => valor > 0)
    .map(([status, valor]) => ({
      status,
      valor,
      percentual: (valor / total) * 100,
      config: coresStatus[status] || coresStatus.outros
    }));

  return (
    <div className="h-64">
      {/* Gráfico de rosca simples */}
      <div className="flex items-center justify-center h-40">
        <div className="relative w-32 h-32">
          {/* Círculo de fundo */}
          <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Segmentos do gráfico */}
          {dadosComPercentual.map((item, index) => {
            const raio = 60;
            const circunferencia = 2 * Math.PI * raio;
            const offset = circunferencia - (item.percentual / 100) * circunferencia;
            const rotacao = dadosComPercentual
              .slice(0, index)
              .reduce((acc, prev) => acc + (prev.percentual / 100) * 360, 0);

            return (
              <svg
                key={item.status}
                className="absolute inset-0 w-full h-full transform"
                style={{ transform: `rotate(${rotacao - 90}deg)` }}
              >
                <circle
                  cx="64"
                  cy="64"
                  r={raio}
                  fill="none"
                  stroke={item.config.bg.replace('bg-', '')}
                  strokeWidth="8"
                  strokeDasharray={circunferencia}
                  strokeDashoffset={offset}
                  className="transition-all duration-300"
                />
              </svg>
            );
          })}
          
          {/* Centro com total */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{total}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Total</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legenda */}
      <div className="mt-4 space-y-2">
        {dadosComPercentual.map((item) => (
          <div key={item.status} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${item.config.bg}`}></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {item.config.label}
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {item.valor}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                ({item.percentual.toFixed(1)}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}