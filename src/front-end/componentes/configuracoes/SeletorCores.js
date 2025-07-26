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
    
    
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-6 gap-px">
        {Object.entries(CORES_DISPONIVEIS).map(([chave, cor]) => (
          <button
            key={chave}
            onClick={() => alterarCor(chave)}
            className={`
              relative w-8 h-8 transition-all duration-200 flex items-center justify-center rounded-md
            `}
            title={cor.nome}
          >
            <div 
              className={`w-full h-full ${cor.classes.bg} rounded-md`}
            />
            
            {corSelecionada === chave && (
              <div className="absolute">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      
    </div>
  );
}