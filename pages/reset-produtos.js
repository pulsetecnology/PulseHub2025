import React from 'react';
import { useRouter } from 'next/router';
import LayoutPrincipal from '../src/front-end/componentes/layout/LayoutPrincipal';
import ServicoProdutos from '../src/front-end/servicos/ServicoProdutos';
import ServicoCategorias from '../src/front-end/servicos/ServicoCategorias';

export default function ResetProdutos() {
  const router = useRouter();

  const handleReset = () => {
    ServicoProdutos.resetarDados();
    ServicoCategorias.resetarDados();
    alert('Dados dos produtos e categorias foram resetados!');
    router.push('/produtos');
  };

  const handleLimpar = () => {
    ServicoProdutos.limparDados();
    ServicoCategorias.limparDados();
    alert('Todos os dados foram limpos!');
    router.push('/produtos');
  };

  const handleResetCategorias = () => {
    ServicoCategorias.resetarDados();
    alert('Categorias foram resetadas!');
  };

  return (
    <LayoutPrincipal 
      titulo="Reset de Produtos" 
      subtitulo="Utilitário para resetar dados de produtos"
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            🔧 Utilitários de Desenvolvimento
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <h4 className="font-medium text-yellow-800 dark:text-yellow-300 mb-2">
                ⚠️ Resetar Produtos
              </h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-3">
                Isso irá remover todos os produtos e categorias salvos e recriar os dados iniciais.
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Resetar Produtos
              </button>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="font-medium text-red-800 dark:text-red-300 mb-2">
                🗑️ Limpar Todos os Dados
              </h4>
              <p className="text-sm text-red-700 dark:text-red-400 mb-3">
                Isso irá remover TODOS os produtos e categorias salvos. Use apenas se quiser começar do zero.
              </p>
              <button
                onClick={handleLimpar}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Limpar Tudo
              </button>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="font-medium text-green-800 dark:text-green-300 mb-2">
                🏷️ Resetar Apenas Categorias
              </h4>
              <p className="text-sm text-green-700 dark:text-green-400 mb-3">
                Isso irá resetar apenas as categorias, mantendo os produtos existentes.
              </p>
              <button
                onClick={handleResetCategorias}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Resetar Categorias
              </button>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
                ℹ️ Informações
              </h4>
              <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                <li>• Os produtos e categorias são salvos no localStorage do navegador</li>
                <li>• Imagens são convertidas para base64 para persistência local</li>
                <li>• Use "Resetar" se as imagens estiverem quebradas</li>
                <li>• Use "Limpar" para começar com uma base limpa</li>
                <li>• Categorias personalizadas podem ser criadas em "Gestão de Categorias"</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => router.push('/produtos')}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Voltar para Produtos
            </button>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}