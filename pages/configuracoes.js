import React from 'react';
import { useRouter } from 'next/router';
import LayoutPrincipal from '../src/front-end/componentes/layout/LayoutPrincipal';
import { usarCorTema } from '../src/front-end/utils/coresTema';

export default function Configuracoes() {
  const router = useRouter();
  const { classes } = usarCorTema();

  // A função handleCorAlterada não é mais necessária aqui, pois a seleção de cor
  // será feita na mini-modal do LayoutPrincipal e o redirecionamento será tratado lá.

  return (
    <LayoutPrincipal 
      titulo="Configurações" 
      subtitulo="Personalize sua experiência no PulseHub"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700`}>
          <div className="p-6">
            <div className={`border-b border-gray-200 dark:border-gray-700 pb-4 mb-6`}>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Aparência
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Customize a aparência da interface de acordo com suas preferências
              </p>
            </div>

            {/* O SeletorCores foi movido para a mini-modal no LayoutPrincipal */}
            <div className="text-gray-600 dark:text-gray-400">
              A seleção de cores agora é feita através do ícone de paleta no cabeçalho.
            </div>
          </div>
        </div>

        <div className={`mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700`}>
          <div className="p-6">
            <div className={`border-b border-gray-200 dark:border-gray-700 pb-4 mb-6`}>
              <h2 className="text-xl font-medium text-gray-900 dark:text-white">
                Outras Configurações
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Configurações adicionais do sistema
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Notificações por Email
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receber notificações sobre pedidos e atualizações
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:${classes.ring} rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:${classes.bg}`}></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Sidebar Recolhida por Padrão
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Iniciar com a barra lateral recolhida
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:${classes.ring} rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:${classes.bg}`}></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}