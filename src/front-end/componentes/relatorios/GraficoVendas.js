import React from 'react';
import { usarCorTema } from '../../utils/coresTema';

export default function GraficoVendas({ dados }) {
  const { classes } = usarCorTema();

  if (!dados || Object.keys(dados).length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <p>Nenhum dado de vendas disponível</p>
        </div>
      </div>
    );
  }

  // Preparar dados para o gráfico
  const entradas = Object.entries(dados).sort(([a], [b]) => new Date(a) - new Date(b));
  const valores = entradas.map(([, valor]) => valor);
  const valorMaximo = Math.max(...valores, 1);

  // Gerar últimos 7 dias se não houver dados suficientes
  const hoje = new Date();
  const ultimosDias = [];
  for (let i = 6; i >= 0; i--) {
    const data = new Date(hoje);
    data.setDate(data.getDate() - i);
    const dataStr = data.toISOString().split('T')[0];
    ultimosDias.push({
      data: dataStr,
      valor: dados[dataStr] || 0,
      label: data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
    });
  }

  return (
    <div className="h-64">
      {/* Gráfico de barras simples */}
      <div className="flex items-end justify-between h-48 space-x-2">
        {ultimosDias.map((item, index) => {
          const altura = valorMaximo > 0 ? (item.valor / valorMaximo) * 100 : 0;
          
          return (
            <div key={item.data} className="flex-1 flex flex-col items-center">
              <div className="flex-1 flex items-end">
                <div
                  className={`w-full ${classes.bg} rounded-t-md transition-all duration-300 hover:opacity-80 relative group`}
                  style={{ height: `${altura}%`, minHeight: altura > 0 ? '4px' : '0' }}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    R$ {item.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 text-center">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legenda de valores */}
      <div className="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>R$ 0</span>
        <span>R$ {valorMaximo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
      </div>

      {/* Resumo */}
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total</p>
          <p className="font-medium text-gray-900 dark:text-white">
            R$ {valores.reduce((a, b) => a + b, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Média</p>
          <p className="font-medium text-gray-900 dark:text-white">
            R$ {(valores.reduce((a, b) => a + b, 0) / valores.length || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Maior</p>
          <p className="font-medium text-gray-900 dark:text-white">
            R$ {valorMaximo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </div>
  );
}