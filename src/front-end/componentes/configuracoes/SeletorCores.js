import React, { useState, useEffect } from 'react';
import { CORES_DISPONIVEIS, obterCorTema, definirCorTema } from '../../utils/coresTema';

export default function SeletorCores({ onCorAlterada }) {
  const [corSelecionada, setCorSelecionada] = useState('purple');

  useEffect(() => {
    const corAtual = obterCorTema();
    setCorSelecionada(corAtual);
  }, []);

  const alterarCor = (novaCor) => {
    setCorSelecionada(novaCor);
    definirCorTema(novaCor);
    
    // Notificar o componente pai sobre a mudança
    if (onCorAlterada) {
      onCorAlterada(novaCor);
    }
    
    // Recarregar a página para aplicar as novas cores
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          Cor do Tema
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Escolha a cor principal da interface
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {Object.entries(CORES_DISPONIVEIS).map(([chave, cor]) => (
          <button
            key={chave}
            onClick={() => alterarCor(chave)}
            className={`
              relative p-3 rounded-lg border-2 transition-all duration-200
              ${corSelecionada === chave 
                ? 'border-gray-400 ring-2 ring-offset-2 ring-gray-400' 
                : 'border-gray-200 hover:border-gray-300'
              }
            `}
            title={cor.nome}
          >
            <div className="flex flex-col items-center space-y-2">
              <div 
                className={`w-8 h-8 rounded-full ${cor.classes.bg}`}
              />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {cor.nome}
              </span>
            </div>
            
            {corSelecionada === chave && (
              <div className="absolute top-1 right-1">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
          Prévia da Cor Selecionada
        </h4>
        <div className="flex items-center space-x-4">
          <div className={`px-4 py-2 rounded-lg ${CORES_DISPONIVEIS[corSelecionada].classes.bgLight} ${CORES_DISPONIVEIS[corSelecionada].classes.bgLightDark}`}>
            <span className={`text-sm font-medium ${CORES_DISPONIVEIS[corSelecionada].classes.textLight} ${CORES_DISPONIVEIS[corSelecionada].classes.textLightDark}`}>
              Fundo claro
            </span>
          </div>
          <div className={`px-4 py-2 rounded-lg ${CORES_DISPONIVEIS[corSelecionada].classes.bg} text-white`}>
            <span className="text-sm font-medium">
              Cor principal
            </span>
          </div>
          <div className={`px-4 py-2 rounded-lg border-2 ${CORES_DISPONIVEIS[corSelecionada].classes.border}`}>
            <span className={`text-sm font-medium ${CORES_DISPONIVEIS[corSelecionada].classes.text}`}>
              Borda e texto
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}