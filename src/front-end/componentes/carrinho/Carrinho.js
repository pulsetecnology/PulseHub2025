import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { usarCorTema } from '../../utils/coresTema';
import ServicoCarrinho from '../../servicos/ServicoCarrinho';
import ServicoClientes from '../../servicos/ServicoClientes';
import ServicoPedidos from '../../servicos/ServicoPedidos';
import servicoNotificacoes from '../../servicos/ServicoNotificacoes';

// Instância singleton do serviço de carrinho
const servicoCarrinho = new ServicoCarrinho();

/**
 * Componente principal do carrinho de compras
 * Permite visualizar, editar e converter carrinho em pedido
 */
export default function Carrinho({ onClose }) {
  const { classes } = usarCorTema();
  const router = useRouter();
  const [itens, setItens] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [clienteSelecionado, setClienteSelecionado] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  
  const servicoClientes = new ServicoClientes();
  const servicoPedidos = new ServicoPedidos();

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = () => {
    // Carregar itens do carrinho
    const itensCarrinho = servicoCarrinho.obterItens();
    setItens(itensCarrinho);

    // Carregar clientes
    const clientesDisponiveis = servicoClientes.listar().filter(c => c.status === 'ativo');
    setClientes(clientesDisponiveis);
  };

  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  const atualizarQuantidade = (itemId, novaQuantidade) => {
    if (servicoCarrinho.atualizarQuantidade(itemId, novaQuantidade)) {
      carregarDados();
    }
  };

  const removerItem = (itemId) => {
    if (confirm('Deseja remover este item do carrinho?')) {
      if (servicoCarrinho.removerItem(itemId)) {
        carregarDados();
      }
    }
  };

  const limparCarrinho = () => {
    if (servicoCarrinho.limparCarrinho()) {
      carregarDados();
      servicoNotificacoes.adicionarNotificacao({
        tipo: 'sucesso',
        titulo: 'Carrinho limpo',
        mensagem: 'Todos os itens foram removidos do carrinho',
        cor: '#10B981'
      });
    } else {
      servicoNotificacoes.adicionarNotificacao({
        tipo: 'erro',
        titulo: 'Erro',
        mensagem: 'Não foi possível limpar o carrinho',
        cor: '#EF4444'
      });
    }
  };

  const gerarPedido = async () => {
    if (!clienteSelecionado) {
      setErro('Selecione um cliente');
      return;
    }

    if (itens.length === 0) {
      setErro('Carrinho vazio');
      return;
    }

    setCarregando(true);
    setErro('');

    try {
      // Converter carrinho em dados de pedido
      const dadosPedido = servicoCarrinho.converterParaPedido(clienteSelecionado, observacoes);
      
      // Salvar dados do pedido temporariamente no localStorage para pré-preenchimento
      localStorage.setItem('pedido_temp_carrinho', JSON.stringify(dadosPedido));
      
      // Limpar carrinho após transferir dados
      servicoCarrinho.limparCarrinho();
      
      // Redirecionar para página de criação de pedido
      router.push('/pedidos/novo?origem=carrinho');
      
      if (onClose) onClose();
    } catch (error) {
      console.error('Erro ao preparar pedido:', error);
      setErro(error.message || 'Erro ao preparar pedido');
    } finally {
      setCarregando(false);
    }
  };

  const calcularResumo = () => {
    const subtotal = itens.reduce((total, item) => total + item.subtotal, 0);
    const totalItens = itens.reduce((total, item) => total + item.quantidade, 0);
    
    return { subtotal, totalItens };
  };

  const { subtotal, totalItens } = calcularResumo();

  if (itens.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 w-96">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Carrinho</h2>
        </div>
        
        <div className="p-4 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Carrinho vazio</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Adicione produtos ao carrinho para continuar</p>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => {
              if (onClose) onClose();
              router.push('/catalogo');
            }}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Ver Catálogo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 w-96 max-h-[80vh] overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Carrinho</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">{totalItens} itens</p>
      </div>

      <div className="p-4">
        {/* Seleção de cliente */}
        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="flex items-center mb-2">
            <svg className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100">Cliente</h3>
          </div>
          <select
            value={clienteSelecionado}
            onChange={(e) => setClienteSelecionado(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Selecione um cliente</option>
            {clientes.map((cliente) => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nomeFantasia || cliente.razaoSocial}
              </option>
            ))}
          </select>
        </div>

        {/* Lista de itens */}
        <div className="mb-4">
          <div className="flex items-center mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
            <svg className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Produtos</h3>
          </div>
          <div className="space-y-4">
            {itens.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-700 rounded">
                {/* Imagem do produto */}
                <div className="flex-shrink-0">
                  <img
                    src={item.produto.imagens?.[0] || '/placeholder-produto.svg'}
                    alt={item.produto.nome}
                    className="h-12 w-12 object-cover rounded"
                  />
                </div>
                
                {/* Informações do produto */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-medium text-gray-900 dark:text-white truncate">
                    {item.produto.nome}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatarMoeda(item.preco)}
                  </p>
                  {item.opcoes && (
                    <div className="flex space-x-1 mt-1">
                      {item.opcoes.cor && (
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">
                          {item.opcoes.cor}
                        </span>
                      )}
                      {item.opcoes.tamanho && (
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">
                          {item.opcoes.tamanho}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Controles de quantidade */}
                <div className="flex flex-col items-center space-y-1">
                  <button
                    onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                    className="w-6 h-6 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 text-xs"
                  >
                    +
                  </button>
                  <span className="text-xs font-medium">{item.quantidade}</span>
                  <button
                    onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                    className="w-6 h-6 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 text-xs"
                  >
                    -
                  </button>
                </div>
                
                {/* Preço */}
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {formatarMoeda(item.subtotal)}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatarMoeda(item.precoUnitario)} cada
                  </p>
                </div>
                
                {/* Botão remover */}
                <button
                  onClick={() => removerItem(item.id)}
                  className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                  title="Remover item"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Observações */}
        <div className="mb-4">
          <div className="flex items-center mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
            <svg className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Observações</h3>
          </div>
          <textarea
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
            rows={2}
            className="w-full px-2 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-xs"
            placeholder="Observações..."
          />
        </div>

        {/* Erro */}
        {erro && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-600 dark:text-red-400">{erro}</p>
          </div>
        )}

      </div>
      
      {/* Footer com resumo e ações */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-900 dark:text-white">Total:</span>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {formatarMoeda(subtotal)}
          </span>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={limparCarrinho}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-xs"
          >
            Limpar
          </button>
          <button
            onClick={gerarPedido}
            disabled={carregando || !clienteSelecionado}
            className={`flex-1 px-3 py-2 ${classes.bg} text-white rounded ${classes.bgHover} transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs`}
          >
            {carregando ? 'Preparando...' : 'Continuar'}
          </button>
        </div>
      </div>
    </div>
  );
}