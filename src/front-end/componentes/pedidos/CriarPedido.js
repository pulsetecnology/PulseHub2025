import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ServicoProdutos from '../../servicos/ServicoProdutos';
import ServicoClientes from '../../servicos/ServicoClientes';
import ServicoPedidos from '../../servicos/ServicoPedidos';
import { usarCorTema } from '../../utils/coresTema';
import Modal from '../comum/Modal';
import BotaoCarregando from '../comum/BotaoCarregando';

export default function CriarPedido() {
  const router = useRouter();
  const { classes } = usarCorTema();
  const [etapaAtual, setEtapaAtual] = useState(1);
  const [carregando, setCarregando] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [erros, setErros] = useState({});

  // Estado do pedido
  const [pedido, setPedido] = useState({
    clienteId: '',
    observacoes: '',
    itens: [],
    desconto: 0,
    frete: 0
  });

  // Estados auxiliares
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState(1);
  const [mostrarResumo, setMostrarResumo] = useState(false);

  const servicoProdutos = new ServicoProdutos();
  const servicoClientes = new ServicoClientes();
  const servicoPedidos = new ServicoPedidos();

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      const [produtosData, clientesData] = await Promise.all([
        servicoProdutos.listar(),
        servicoClientes.listar()
      ]);
      setProdutos(produtosData);
      setClientes(clientesData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  const validarEtapa = (etapa) => {
    const novosErros = {};

    switch (etapa) {
      case 1:
        if (!pedido.clienteId) {
          novosErros.clienteId = 'Selecione um cliente';
        }
        break;
      case 2:
        if (pedido.itens.length === 0) {
          novosErros.itens = 'Adicione pelo menos um produto';
        }
        break;
      case 3:
        // Validações finais
        if (!pedido.clienteId) novosErros.clienteId = 'Cliente é obrigatório';
        if (pedido.itens.length === 0) novosErros.itens = 'Adicione produtos';
        break;
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const proximaEtapa = () => {
    if (validarEtapa(etapaAtual)) {
      setEtapaAtual(etapaAtual + 1);
    }
  };

  const etapaAnterior = () => {
    setEtapaAtual(etapaAtual - 1);
  };

  const selecionarCliente = (cliente) => {
    setPedido({ ...pedido, clienteId: cliente.id });
    setClienteSelecionado(cliente);
    setErros({ ...erros, clienteId: null });
  };

  const adicionarProduto = () => {
    if (!produtoSelecionado || quantidadeProduto <= 0) return;

    const produto = produtos.find(p => p.id === produtoSelecionado);
    if (!produto) return;

    const itemExistente = pedido.itens.find(item => item.produtoId === produto.id);
    
    if (itemExistente) {
      // Atualizar quantidade do item existente
      const novosItens = pedido.itens.map(item =>
        item.produtoId === produto.id
          ? { ...item, quantidade: item.quantidade + quantidadeProduto }
          : item
      );
      setPedido({ ...pedido, itens: novosItens });
    } else {
      // Adicionar novo item
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
    setErros({ ...erros, itens: null });
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

  const finalizarPedido = async () => {
    if (!validarEtapa(3)) return;

    setCarregando(true);
    try {
      const totais = calcularTotais();
      const novoPedido = {
        ...pedido,
        ...totais,
        status: 'rascunho',
        dataCreacao: new Date().toISOString()
      };

      await servicoPedidos.criar(novoPedido);
      router.push('/pedidos?sucesso=criado');
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      setErros({ geral: 'Erro ao criar pedido. Tente novamente.' });
    } finally {
      setCarregando(false);
    }
  };

  const renderEtapa1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Selecionar Cliente
        </h3>
        
        {erros.clienteId && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <p className="text-sm text-red-600 dark:text-red-400">{erros.clienteId}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientes.map((cliente) => (
            <div
              key={cliente.id}
              onClick={() => selecionarCliente(cliente)}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                pedido.clienteId === cliente.id
                  ? `${classes.bg} border-transparent text-white`
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <h4 className="font-medium">{cliente.nome}</h4>
              <p className="text-sm opacity-75">{cliente.email}</p>
              <p className="text-sm opacity-75">{cliente.telefone}</p>
            </div>
          ))}
        </div>

        {clientes.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              Nenhum cliente encontrado.
            </p>
            <button
              onClick={() => router.push('/clientes/novo')}
              className={`mt-2 ${classes.text} ${classes.textDark} hover:underline`}
            >
              Criar novo cliente
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderEtapa2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Adicionar Produtos
        </h3>

        {/* Formulário para adicionar produto */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Produto
              </label>
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
                className={`w-full px-4 py-2 ${classes.bg} text-white rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>

        {erros.itens && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <p className="text-sm text-red-600 dark:text-red-400">{erros.itens}</p>
          </div>
        )}

        {/* Lista de produtos adicionados */}
        {pedido.itens.length > 0 && (
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    Produto
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
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {pedido.itens.map((item) => (
                  <tr key={item.produtoId}>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                      {item.produto.nome}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                      R$ {item.precoUnitario.toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        min="1"
                        value={item.quantidade}
                        onChange={(e) => atualizarQuantidade(item.produtoId, parseInt(e.target.value) || 0)}
                        className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                      R$ {item.subtotal.toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => removerProduto(item.produtoId)}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );

  const renderEtapa3 = () => {
    const totais = calcularTotais();

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Finalizar Pedido
          </h3>

          {/* Resumo do cliente */}
          {clienteSelecionado && (
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Cliente</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {clienteSelecionado.nome} - {clienteSelecionado.email}
              </p>
            </div>
          )}

          {/* Ajustes finais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Desconto (R$)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={pedido.desconto}
                onChange={(e) => setPedido({ ...pedido, desconto: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Frete (R$)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={pedido.frete}
                onChange={(e) => setPedido({ ...pedido, frete: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Observações
            </label>
            <textarea
              value={pedido.observacoes}
              onChange={(e) => setPedido({ ...pedido, observacoes: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Observações sobre o pedido..."
            />
          </div>

          {/* Resumo financeiro */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Resumo Financeiro</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                <span className="text-gray-900 dark:text-white">R$ {totais.subtotal.toFixed(2)}</span>
              </div>
              {totais.desconto > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Desconto:</span>
                  <span className="text-red-600 dark:text-red-400">- R$ {totais.desconto.toFixed(2)}</span>
                </div>
              )}
              {totais.frete > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Frete:</span>
                  <span className="text-gray-900 dark:text-white">R$ {totais.frete.toFixed(2)}</span>
                </div>
              )}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <div className="flex justify-between font-medium">
                  <span className="text-gray-900 dark:text-white">Total:</span>
                  <span className={`${classes.text} ${classes.textDark}`}>R$ {totais.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {erros.geral && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
              <p className="text-sm text-red-600 dark:text-red-400">{erros.geral}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const etapas = [
    { numero: 1, titulo: 'Cliente', descricao: 'Selecionar cliente' },
    { numero: 2, titulo: 'Produtos', descricao: 'Adicionar produtos' },
    { numero: 3, titulo: 'Finalizar', descricao: 'Revisar e finalizar' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Indicador de progresso */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {etapas.map((etapa, index) => (
            <div key={etapa.numero} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                etapaAtual >= etapa.numero
                  ? `${classes.bg} ${classes.border} text-white`
                  : 'border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400'
              }`}>
                {etapaAtual > etapa.numero ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  etapa.numero
                )}
              </div>
              <div className="ml-3">
                <p className={`text-sm font-medium ${
                  etapaAtual >= etapa.numero
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {etapa.titulo}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {etapa.descricao}
                </p>
              </div>
              {index < etapas.length - 1 && (
                <div className={`flex-1 h-0.5 mx-4 ${
                  etapaAtual > etapa.numero
                    ? classes.bg
                    : 'bg-gray-300 dark:bg-gray-600'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Conteúdo da etapa atual */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        {etapaAtual === 1 && renderEtapa1()}
        {etapaAtual === 2 && renderEtapa2()}
        {etapaAtual === 3 && renderEtapa3()}
      </div>

      {/* Botões de navegação */}
      <div className="flex justify-between">
        <button
          onClick={etapaAnterior}
          disabled={etapaAtual === 1}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Anterior
        </button>

        <div className="space-x-2">
          {etapaAtual < 3 ? (
            <button
              onClick={proximaEtapa}
              className={`px-4 py-2 ${classes.bg} text-white rounded-md hover:opacity-90`}
            >
              Próximo
            </button>
          ) : (
            <BotaoCarregando
              onClick={finalizarPedido}
              carregando={carregando}
              className={`px-6 py-2 ${classes.bg} text-white rounded-md hover:opacity-90`}
            >
              Finalizar Pedido
            </BotaoCarregando>
          )}
        </div>
      </div>
    </div>
  );
}