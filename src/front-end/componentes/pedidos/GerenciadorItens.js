import React, { useState, useMemo, useCallback } from 'react';
import { usarCorTema } from '../../utils/coresTema';
import { useValidacao, validacoesItem } from '../../hooks/useValidacao';
import MensagemErro from '../comum/MensagemErro';
import ModalConfirmacao from '../comum/ModalConfirmacao';

export default function GerenciadorItens({ 
  itens = [], 
  produtos = [], 
  onItensChange, 
  readonly = false 
}) {
  const { classes } = usarCorTema();
  const { erros, validarCampo, marcarComoTocado } = useValidacao(validacoesItem);
  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState(1);
  const [buscaProduto, setBuscaProduto] = useState('');
  const [erroEstoque, setErroEstoque] = useState('');
  const [mostrarModalRemover, setMostrarModalRemover] = useState(false);
  const [itemParaRemover, setItemParaRemover] = useState(null);

  const formatarPreco = useCallback((preco) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  }, []);

  const produtosFiltrados = useMemo(() => {
    if (!buscaProduto.trim()) return [];
    
    const termo = buscaProduto.toLowerCase();
    return produtos.filter(produto => {
      return (
        produto.nome.toLowerCase().includes(termo) ||
        produto.sku?.toLowerCase().includes(termo) ||
        produto.descricao?.toLowerCase().includes(termo) ||
        produto.categoria?.toLowerCase().includes(termo)
      );
    }).slice(0, 10); // Limitar a 10 resultados para performance
  }, [produtos, buscaProduto]);

  const adicionarProduto = () => {
    if (!produtoSelecionado || quantidadeProduto <= 0) return;

    const produto = produtos.find(p => p.id === parseInt(produtoSelecionado));
    if (!produto) return;

    // Validar estoque
    if (produto.estoque !== undefined && produto.estoque < quantidadeProduto) {
      setErroEstoque(`Estoque insuficiente. Disponível: ${produto.estoque} unidades`);
      return;
    }
    
    // Limpar erro de estoque se passou na validação
    setErroEstoque('');

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
    setItemParaRemover(produtoId);
    setMostrarModalRemover(true);
  };

  const confirmarRemocao = () => {
    const novosItens = itens.filter(item => item.produtoId !== itemParaRemover);
    onItensChange(novosItens);
    setMostrarModalRemover(false);
    setItemParaRemover(null);
  };

  const atualizarQuantidade = (produtoId, novaQuantidade) => {
    const campoId = `quantidade_${produtoId}`;
    
    if (novaQuantidade <= 0) {
      removerProduto(produtoId);
      return;
    }

    // Validar quantidade
    const valido = validarCampo(campoId, novaQuantidade);
    
    if (valido) {
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
    }
  };

  const calcularSubtotal = useMemo(() => {
    return itens.reduce((total, item) => total + item.subtotal, 0);
  }, [itens]);

  const obterProdutosRelacionados = useMemo(() => {
    if (itens.length === 0) return [];
    
    // Obter categorias dos produtos já no pedido
    const categoriasNoPedido = [...new Set(
      itens.map(item => item.produto?.categoria).filter(Boolean)
    )];
    
    // Encontrar produtos da mesma categoria que não estão no pedido
    const produtosNoPedido = new Set(itens.map(item => item.produtoId));
    
    return produtos
      .filter(produto => 
        !produtosNoPedido.has(produto.id) && 
        categoriasNoPedido.includes(produto.categoria) &&
        produto.estoque > 0
      )
      .slice(0, 3); // Limitar a 3 sugestões
  }, [itens, produtos]);

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
            Subtotal: {formatarPreco(calcularSubtotal)}
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
              <label htmlFor="busca-produto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Produto
              </label>
              <div className="relative">
                <input
                  id="busca-produto"
                  type="text"
                  placeholder="Buscar produto..."
                  value={buscaProduto}
                  onChange={(e) => setBuscaProduto(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-describedby="busca-produto-help"
                  aria-expanded={buscaProduto.length > 0}
                  aria-haspopup="listbox"
                  role="combobox"
                />
                {buscaProduto && (
                  <div 
                    className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-auto"
                    role="listbox"
                    aria-label="Resultados da busca de produtos"
                  >
                    {produtosFiltrados.length > 0 ? (
                      produtosFiltrados.map((produto) => (
                        <button
                          key={produto.id}
                          onClick={() => {
                            setProdutoSelecionado(produto.id.toString());
                            setBuscaProduto(produto.nome);
                          }}
                          className="w-full px-3 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center space-x-3 transition-colors"
                        >
                          {/* Imagem do produto */}
                          <div className="flex-shrink-0 w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
                            {produto.imagem ? (
                              <img 
                                src={produto.imagem} 
                                alt={produto.nome}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                            ) : null}
                            <div className={`w-full h-full flex items-center justify-center ${produto.imagem ? 'hidden' : 'flex'}`}>
                              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Informações do produto */}
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 dark:text-white truncate">
                              {produto.nome}
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                              {produto.sku && (
                                <span>SKU: {produto.sku}</span>
                              )}
                              {produto.categoria && (
                                <>
                                  {produto.sku && <span>•</span>}
                                  <span>{produto.categoria}</span>
                                </>
                              )}
                            </div>
                            {produto.descricao && (
                              <div className="text-sm text-gray-600 dark:text-gray-300 truncate">
                                {produto.descricao}
                              </div>
                            )}
                            {/* Indicador de estoque */}
                            <div className="flex items-center mt-1">
                              {produto.estoque > 0 ? (
                                <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                                  {produto.estoque} em estoque
                                </div>
                              ) : (
                                <div className="flex items-center text-xs text-red-600 dark:text-red-400">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                                  Sem estoque
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* Preço */}
                          <div className="flex-shrink-0 text-right">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {formatarPreco(produto.preco)}
                            </div>
                            {produto.precoPromocional && produto.precoPromocional < produto.preco && (
                              <div className="text-xs text-gray-500 dark:text-gray-400 line-through">
                                {formatarPreco(produto.precoPromocional)}
                              </div>
                            )}
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
              <label htmlFor="quantidade-produto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Quantidade
              </label>
              <input
                id="quantidade-produto"
                type="number"
                min="1"
                value={quantidadeProduto}
                onChange={(e) => setQuantidadeProduto(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-describedby="quantidade-help"
              />
              <div id="quantidade-help" className="sr-only">
                Digite a quantidade desejada do produto
              </div>
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
          <table className="w-full min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-2 sm:px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Produto
                </th>
                <th className="hidden sm:table-cell px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  SKU
                </th>
                <th className="hidden md:table-cell px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Preço Unit.
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Qtd.
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subtotal
                </th>
                {!readonly && (
                  <th className="px-2 sm:px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    Ações
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {itens.map((item) => (
                <tr key={item.produtoId} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-2 sm:px-4 py-3">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden mr-3">
                        {item.produto?.imagem ? (
                          <img 
                            src={item.produto.imagem} 
                            alt={item.produto.nome}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className={`w-full h-full flex items-center justify-center ${item.produto?.imagem ? 'hidden' : 'flex'}`}>
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.produto?.nome || item.produtoId}
                        </div>
                        {item.produto?.descricao && (
                          <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                            {item.produto.descricao}
                          </div>
                        )}
                        {item.produto?.categoria && (
                          <div className="text-xs text-gray-400 dark:text-gray-500">
                            {item.produto.categoria}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="hidden sm:table-cell px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    {item.produto?.sku || '-'}
                  </td>
                  <td className="hidden md:table-cell px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                    {formatarPreco(item.precoUnitario)}
                  </td>
                  <td className="px-2 sm:px-4 py-3">
                    {readonly ? (
                      <span className="text-sm text-gray-900 dark:text-white">
                        {item.quantidade}
                      </span>
                    ) : (
                      <div>
                        <input
                          type="number"
                          min="1"
                          value={item.quantidade}
                          onChange={(e) => atualizarQuantidade(item.produtoId, parseInt(e.target.value) || 0)}
                          onBlur={() => marcarComoTocado(`quantidade_${item.produtoId}`)}
                          className={`w-20 px-2 py-1 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm ${
                            erros[`quantidade_${item.produtoId}`] 
                              ? 'border-red-500 dark:border-red-400' 
                              : 'border-gray-300 dark:border-gray-600'
                          }`}
                        />
                        <MensagemErro erro={erros[`quantidade_${item.produtoId}`]} />
                      </div>
                    )}
                  </td>
                  <td className="px-2 sm:px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">
                    <div className="flex flex-col">
                      <span>{formatarPreco(item.subtotal)}</span>
                      <span className="md:hidden text-xs text-gray-500 dark:text-gray-400">
                        {formatarPreco(item.precoUnitario)} cada
                      </span>
                    </div>
                  </td>
                  {!readonly && (
                    <td className="px-2 sm:px-4 py-3">
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

      {/* Produtos Relacionados */}
      {!readonly && obterProdutosRelacionados.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center">
            <svg className="h-4 w-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Produtos Relacionados
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {obterProdutosRelacionados.map((produto) => (
              <div key={produto.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
                    {produto.imagem ? (
                      <img 
                        src={produto.imagem} 
                        alt={produto.nome}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {produto.nome}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {formatarPreco(produto.preco)}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setProdutoSelecionado(produto.id.toString());
                      setBuscaProduto(produto.nome);
                      setQuantidadeProduto(1);
                    }}
                    className={`px-2 py-1 text-xs ${classes.bg} text-white rounded hover:opacity-90 transition-colors`}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}