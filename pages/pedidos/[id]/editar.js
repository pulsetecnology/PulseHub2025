import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ServicoPedidos from '../../../src/front-end/servicos/ServicoPedidos';
import ServicoProdutos from '../../../src/front-end/servicos/ServicoProdutos';
import ServicoClientes from '../../../src/front-end/servicos/ServicoClientes';
import LayoutPrincipal from '../../../src/front-end/componentes/layout/LayoutPrincipal';
import BotaoCarregando from '../../../src/front-end/componentes/comum/BotaoCarregando';
import { usarCorTema } from '../../../src/front-end/utils/coresTema';

export default function EditarPedidoPage() {
  const router = useRouter();
  const { id } = router.query;
  const { classes } = usarCorTema();

  const [pedido, setPedido] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [erros, setErros] = useState({});
  const [salvando, setSalvando] = useState(false);

  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState(1);

  const servicoPedidos = new ServicoPedidos();
  const servicoProdutos = new ServicoProdutos();
  const servicoClientes = new ServicoClientes();

  useEffect(() => {
    const carregarDados = async () => {
      if (id) {
        try {
          const pedidoData = await servicoPedidos.obterPorId(id);
          setPedido(pedidoData);

          const produtosData = servicoProdutos.listar();
          setProdutos(produtosData);

          const clientesData = servicoClientes.listar();
          setClientes(clientesData);
        } catch (error) {
          console.error('Erro ao carregar dados do pedido:', error);
          setErros({ geral: 'Erro ao carregar dados do pedido.' });
        } finally {
          setCarregando(false);
        }
      }
    };
    carregarDados();
  }, [id]);

  const isEditDisabled = pedido && pedido.status !== 'rascunho';

  const handleInputChange = (campo, valor) => {
    setPedido(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const adicionarProduto = () => {
    if (!produtoSelecionado || quantidadeProduto <= 0) return;

    const produto = produtos.find(p => p.id === parseInt(produtoSelecionado));
    if (!produto) return;

    const itemExistente = pedido.itens.find(item => item.produtoId === produto.id);
    
    if (itemExistente) {
      const novosItens = pedido.itens.map(item =>
        item.produtoId === produto.id
          ? { ...item, quantidade: item.quantidade + quantidadeProduto }
          : item
      );
      setPedido({ ...pedido, itens: novosItens });
    } else {
      const novoItem = {
        produtoId: produto.id,
        produto: produto,
        quantidade: quantidadeProduto,
        precoUnitario: produto.preco,
        subtotal: produto.preco * quantidadeProduto
      };
      setPedido({ ...pedido, itens: [...pedido.itens, novoItem] });
    }

    setProdutoSelecionado('');
    setQuantidadeProduto(1);
  };

  const removerProduto = (produtoId) => {
    const novosItens = pedido.itens.filter(item => item.produtoId !== produtoId);
    setPedido({ ...pedido, itens: novosItens });
  };

  const atualizarQuantidade = (produtoId, novaQuantidade) => {
    if (novaQuantidade <= 0) {
      removerProduto(produtoId);
      return;
    }

    const novosItens = pedido.itens.map(item =>
      item.produtoId === produtoId
        ? { 
            ...item, 
            quantidade: novaQuantidade,
            subtotal: item.precoUnitario * novaQuantidade
          }
        : item
    );
    setPedido({ ...pedido, itens: novosItens });
  };

  const calcularTotais = () => {
    const subtotal = pedido.itens.reduce((total, item) => total + item.subtotal, 0);
    const desconto = pedido.desconto || 0;
    const frete = pedido.frete || 0;
    const total = subtotal - desconto + frete;

    return { subtotal, desconto, frete, total };
  };

  const handleSalvar = async () => {
    setSalvando(true);
    try {
      const totais = calcularTotais();
      const pedidoParaSalvar = {
        ...pedido,
        ...totais,
        status: pedido.status, // Mantém o status atual
      };
      await servicoPedidos.atualizar(pedido.id, pedidoParaSalvar);
      router.push('/pedidos');
    } catch (error) {
      console.error('Erro ao salvar pedido:', error);
      setErros({ geral: 'Erro ao salvar pedido. Tente novamente.' });
    } finally {
      setSalvando(false);
    }
  };

  const handleFinalizar = async () => {
    setSalvando(true);
    try {
      const totais = calcularTotais();
      const pedidoParaFinalizar = {
        ...pedido,
        ...totais,
        status: 'pendente', // Altera o status para pendente
      };
      await servicoPedidos.atualizar(pedido.id, pedidoParaFinalizar);
      router.push('/pedidos');
    } catch (error) {
      console.error('Erro ao finalizar pedido:', error);
      setErros({ geral: 'Erro ao finalizar pedido. Tente novamente.' });
    } finally {
      setSalvando(false);
    }
  };

  const handleExcluir = async () => {
    if (!confirm('Tem certeza que deseja excluir este pedido? Esta ação não pode ser desfeita.')) {
      return;
    }

    setSalvando(true);
    try {
      await servicoPedidos.excluir(pedido.id);
      router.push('/pedidos');
    } catch (error) {
      console.error('Erro ao excluir pedido:', error);
      setErros({ geral: 'Erro ao excluir pedido. Tente novamente.' });
    } finally {
      setSalvando(false);
    }
  };

  if (carregando) {
    return (
      <LayoutPrincipal titulo="Carregando...">
        <div className="flex items-center justify-center h-64">
          <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${classes.border}`}></div>
        </div>
      </LayoutPrincipal>
    );
  }

  if (!pedido) {
    return (
      <LayoutPrincipal titulo="Pedido não encontrado">
        <div>Pedido não encontrado.</div>
      </LayoutPrincipal>
    );
  }

  const clienteDoPedido = clientes.find(c => c.id === pedido.clienteId);

  return (
    <LayoutPrincipal
      titulo={`Editar Pedido #${pedido.numero}`}
      subtitulo="Edite os detalhes do pedido"
      botaoVoltar={{
        texto: 'Voltar para Pedidos',
        href: '/pedidos'
      }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
        {erros.geral && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <p className="text-sm text-red-600 dark:text-red-400">{erros.geral}</p>
          </div>
        )}

        {/* Informações do Pedido */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Informações do Pedido</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cliente</label>
              <select
                value={pedido.clienteId}
                onChange={(e) => handleInputChange('clienteId', e.target.value)}
                disabled={isEditDisabled}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Selecione um cliente</option>
                {clientes.map(cliente => (
                  <option key={cliente.id} value={cliente.id}>
                    {cliente.nomeFantasia || cliente.razaoSocial}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Status</label>
              <input
                type="text"
                value={pedido.status}
                disabled
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Observações</label>
              <textarea
                value={pedido.observacoes}
                onChange={(e) => handleInputChange('observacoes', e.target.value)}
                disabled={isEditDisabled}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Produtos do Pedido */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Produtos do Pedido</h3>
          {!isEditDisabled && (
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Produto</label>
                  <select
                    value={produtoSelecionado}
                    onChange={(e) => setProdutoSelecionado(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Selecione um produto</option>
                    {produtos.map((produto) => (
                      <option key={produto.id} value={produto.id}>
                        {produto.nome} - R$ {produto.preco.toFixed(2)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Quantidade</label>
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
                    className={`w-full px-4 py-2 ${classes.bg} text-white rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          )}

          {pedido.itens && pedido.itens.length > 0 ? (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Produto</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Preço Unit.</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Quantidade</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Subtotal</th>
                    {!isEditDisabled && <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Ações</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {pedido.itens.map((item) => (
                    <tr key={item.produtoId}>
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{item.produto?.nome || item.produtoId}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">R$ {item.precoUnitario.toFixed(2)}</td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          min="1"
                          value={item.quantidade}
                          onChange={(e) => atualizarQuantidade(item.produtoId, parseInt(e.target.value) || 0)}
                          disabled={isEditDisabled}
                          className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                        />
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">R$ {item.subtotal.toFixed(2)}</td>
                      {!isEditDisabled && (
                        <td className="px-4 py-3">
                          <button
                            onClick={() => removerProduto(item.produtoId)}
                            className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                          >
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
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <p>Nenhum produto adicionado ao pedido.</p>
            </div>
          )}
        </div>

        {/* Resumo Financeiro */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Resumo Financeiro</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Desconto (R$)</label>
              <input
                type="number"
                step="0.01"
                value={pedido.desconto}
                onChange={(e) => handleInputChange('desconto', parseFloat(e.target.value) || 0)}
                disabled={isEditDisabled}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Frete (R$)</label>
              <input
                type="number"
                step="0.01"
                value={pedido.frete}
                onChange={(e) => handleInputChange('frete', parseFloat(e.target.value) || 0)}
                disabled={isEditDisabled}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg flex justify-between items-center">
            <span className="text-lg font-medium text-gray-900 dark:text-white">Total do Pedido:</span>
            <span className={`text-lg font-bold ${classes.text} ${classes.textDark}`}>R$ {calcularTotais().total.toFixed(2)}</span>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex justify-between items-center mt-6">
          {/* Botão de Exclusão - só para pedidos em rascunho */}
          <div>
            {!isEditDisabled && pedido.status === 'rascunho' && (
              <BotaoCarregando
                onClick={handleExcluir}
                carregando={salvando}
                className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Excluir Pedido
              </BotaoCarregando>
            )}
          </div>

          {/* Botões principais */}
          <div className="flex gap-3">
            {!isEditDisabled && (
              <>
                <BotaoCarregando
                  onClick={handleSalvar}
                  carregando={salvando}
                  className={`px-4 py-2 text-sm border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}
                >
                  Salvar Rascunho
                </BotaoCarregando>
                {pedido.status === 'rascunho' && (
                  <BotaoCarregando
                    onClick={handleFinalizar}
                    carregando={salvando}
                    className={`px-4 py-2 text-sm ${classes.bg} text-white rounded-md hover:opacity-90 transition-colors flex items-center gap-2`}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Finalizar Pedido
                  </BotaoCarregando>
                )}
              </>
            )}
            {isEditDisabled && (
              <button
                onClick={() => router.push('/pedidos')}
                className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Voltar
              </button>
            )}
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}