import React, { useState } from 'react';
import { usarCorTema } from '../../utils/coresTema';

export default function GerenciadorItens({ 
  itens = [], 
  produtos = [], 
  onItensChange, 
  readonly = false 
}) {
  const { classes } = usarCorTema();
  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState(1);
  const [buscaProduto, setBuscaProduto] = useState('');

  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(buscaProduto.toLowerCase()) ||
    produto.sku?.toLowerCase().includes(buscaProduto.toLowerCase())
  );

  const adicionarProduto = () => {
    if (!produtoSelecionado || quantidadeProduto <= 0) return;

    const produto = produtos.find(p => p.id === parseInt(produtoSelecionado));
    if (!produto) return;

    const itemExistente = itens.find(item => item.produtoId === produto.id);
    
    let novosItens;
    if (itemExistente) {
      novosItens = itens.map(item =>
        item.produtoId === produto.id
          ? { 
              ...item, 
              quantidade: item.quantidade + quantidadeProduto,
              subtotal: (item.quantidade + quantidadeProduto) * item.precoUnitario
            }
          : item
      );
    } else {
      const novoItem = {
        id: Date.now().toString(),
        produtoId: produto.id,
        produto: produto,
        quantidade: quantidadeProduto,
        precoUnitario: produto.preco,
        subtotal: produto.preco * quantidadeProduto
      };
      novosItens = [...itens, novoItem];
    }

    onItensChange(novosItens);
    setProdutoSelecionado('');
    setQuantidadeProduto(1);
    setBuscaProduto('');
  };

  const removerProduto = (produtoId) => {
    if (window.confirm('Tem certeza que deseja remover este item do pedido?')) {
      const novosItens = itens.filter(item => item.produtoId !== produtoId);
      onItensChange(novosItens);
    }
  };

  const atualizarQuantidade = (produtoId, novaQuantidade) => {
    if (novaQuantidade <= 0) {
      removerProduto(produtoId);
      return;
    }

    const novosItens = itens.map(item =>
      item.produtoId === produtoId
        ? { 
            ...item, 
            quantidade: novaQuantidade,
            subtotal: item.precoUnitario * novaQuantidade
          }
        : item
    );
    onItensChange(novosItens);
  };

  const calcularSubtotal = () => {
    return itens.reduce((total, item) => total + item.subtotal, 0);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          Itens do Pedido
        </h3>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {itens.length} {itens.length === 1 ? 'item' : 'itens'}
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            Subtotal: {formatarPreco(calcularSubtotal())}
          </span>
        </div>
      </div>

      {/* Adicionar Produto */}
      {!readonly && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
            Adicionar Produto
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Produto
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produto..."
                  value={buscaProduto}
                  onChange={(e) => setBuscaProduto(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                {buscaProduto && (
                  <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-auto">
                    {produtosFiltrados.length > 0 ? (
                      produtosFiltrados.map((produto) => (
                        <button
                          key={produto.id}
                          onClick={() => {
                            setProdutoSelecionado(produto.id.toString());
                            setBuscaProduto(produto.nome);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center justify-between"
                        >
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {produto.nome}
                            </div>
                            {produto.sku && (
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                SKU: {produto.sku}
                              </div>
                            )}
                          </div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {formatarPreco(produto.preco)}
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-gray-500 dark:text-gray-400">
                        Nenhum produto encontrado
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Quantidade
              </label>
              <input
                type="number"
                min="1"
                value={quantidadeProduto}
                onChange={(e) => setQuantidadeProduto(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={adicionarProduto}
                disabled={!produtoSelecionado}
                className={`w-full px-4 py-2 text-sm ${classes.bg} text-white rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2`}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lista de Itens */}
      {itens.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Produto
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  SKU
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Preço Unit.
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Quantidade
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subtotal
                </th>
                {!readonly && (
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    Ações
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {itens.map((item) => (
                <tr key={item.produtoId} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center mr-3">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.produto?.nome || item.produtoId}
                        </div>
                        {item.produto?.descricao && (
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {item.produto.descricao}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    {item.produto?.sku || '-'}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                    {formatarPreco(item.precoUnitario)}
                  </td>
                  <td className="px-4 py-3">
                    {readonly ? (
                      <span className="text-sm text-gray-900 dark:text-white">
                        {item.quantidade}
                      </span>
                    ) : (
                      <input
                        type="number"
                        min="1"
                        value={item.quantidade}
                        onChange={(e) => atualizarQuantidade(item.produtoId, parseInt(e.target.value) || 0)}
                        className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      />
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">
                    {formatarPreco(item.subtotal)}
                  </td>
                  {!readonly && (
                    <td className="px-4 py-3">
                      <button
                        onClick={() => removerProduto(item.produtoId)}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm flex items-center gap-1"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Remover
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
            Nenhum item no pedido
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {readonly 
              ? 'Este pedido não possui itens.' 
              : 'Comece adicionando produtos ao pedido.'
            }
          </p>
        </div>
      )}
    </div>
  );
}