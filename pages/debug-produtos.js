import React, { useState, useEffect } from 'react';
import LayoutPrincipal from '../src/front-end/componentes/layout/LayoutPrincipal';
import ServicoProdutos from '../src/front-end/servicos/ServicoProdutos';

export default function DebugProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [produtosCorrigidos, setProdutosCorrigidos] = useState(0);
  
  const servicoProdutos = new ServicoProdutos();

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = () => {
    const todosProdutos = servicoProdutos.listar();
    setProdutos(todosProdutos);
  };

  const corrigirProdutosIndisponiveis = () => {
    const todosProdutos = servicoProdutos.listar();
    let contador = 0;
    
    const produtosCorrigidos = todosProdutos.map(produto => {
      if (produto.disponivel === false || produto.disponivel === undefined) {
        contador++;
        return {
          ...produto,
          disponivel: true
        };
      }
      return produto;
    });
    
    if (contador > 0) {
      servicoProdutos.salvarTodos(produtosCorrigidos);
      setProdutosCorrigidos(contador);
      carregarProdutos();
      alert(`${contador} produtos foram corrigidos e marcados como disponíveis!`);
    } else {
      alert('Todos os produtos já estão marcados como disponíveis!');
    }
  };

  const alternarDisponibilidade = (produtoId) => {
    const produto = servicoProdutos.obterPorId(produtoId);
    if (produto) {
      const produtoAtualizado = {
        ...produto,
        disponivel: !produto.disponivel
      };
      servicoProdutos.atualizar(produtoId, produtoAtualizado);
      carregarProdutos();
    }
  };

  return (
    <LayoutPrincipal titulo="Debug - Produtos" subtitulo="Verificar e corrigir disponibilidade dos produtos">
      <div className="space-y-6">
        {/* Ações */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Ações de Correção
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={corrigirProdutosIndisponiveis}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Corrigir Produtos Indisponíveis
            </button>
            <button
              onClick={carregarProdutos}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Recarregar Lista
            </button>
          </div>
          {produtosCorrigidos > 0 && (
            <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-sm text-green-600 dark:text-green-400">
                ✅ {produtosCorrigidos} produtos foram corrigidos!
              </p>
            </div>
          )}
        </div>

        {/* Lista de produtos */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Produtos ({produtos.length})
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    SKU
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Disponível
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {produtos.map((produto) => (
                  <tr key={produto.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {produto.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {produto.nome}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {produto.sku}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        produto.disponivel 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {produto.disponivel ? 'Disponível' : 'Indisponível'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => alternarDisponibilidade(produto.id)}
                        className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                          produto.disponivel
                            ? 'bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-200'
                            : 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200'
                        }`}
                      >
                        {produto.disponivel ? 'Marcar Indisponível' : 'Marcar Disponível'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}