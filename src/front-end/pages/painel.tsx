import React from 'react';
import LayoutAutenticado from '../componentes/layout/LayoutAutenticado';

export default function Painel() {
  return (
    <LayoutAutenticado titulo="Painel de Controle">
      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Bem-vindo ao PulseHub B2B
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Selecione uma opção no menu para começar.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2">
              Gerenciar Produtos
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Cadastre, edite e gerencie seu catálogo de produtos.
            </p>
            <a 
              href="/produtos" 
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Acessar →
            </a>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">
              Pedidos
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Visualize e gerencie os pedidos realizados.
            </p>
            <a 
              href="/pedidos" 
              className="text-green-600 dark:text-green-400 font-medium hover:underline"
            >
              Acessar →
            </a>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-2">
              Clientes
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Gerencie seus clientes e representantes.
            </p>
            <a 
              href="/clientes" 
              className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
            >
              Acessar →
            </a>
          </div>
        </div>
      </div>
    </LayoutAutenticado>
  );
}