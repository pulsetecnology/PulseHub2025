import React, { useState, useEffect } from 'react';
import ServicoPedidos from '../../servicos/ServicoPedidos';
import ServicoClientes from '../../servicos/ServicoClientes';
import ServicoProdutos from '../../servicos/ServicoProdutos';
import { usarCorTema } from '../../utils/coresTema';
import GraficoVendas from './GraficoVendas';
import GraficoProdutos from './GraficoProdutos';
import GraficoClientes from './GraficoClientes';
import CardEstatistica from './CardEstatistica';
import FiltrosPeriodo from './FiltrosPeriodo';

export default function Dashboard() {
  const { classes } = usarCorTema();
  const [carregando, setCarregando] = useState(true);
  const [periodo, setPeriodo] = useState('30dias');
  const [estatisticas, setEstatisticas] = useState({
    vendas: {},
    pedidos: {},
    clientes: {},
    produtos: {}
  });

  const servicoPedidos = new ServicoPedidos();
  const servicoClientes = new ServicoClientes();
  const servicoProdutos = new ServicoProdutos();

  useEffect(() => {
    carregarDados();
  }, [periodo]);

  const carregarDados = async () => {
    setCarregando(true);
    try {
      const [pedidos, clientes, produtos] = await Promise.all([
        servicoPedidos.listar(),
        servicoClientes.listar(),
        servicoProdutos.listar()
      ]);

      // Filtrar dados por período
      const dataLimite = obterDataLimite(periodo);
      const pedidosFiltrados = pedidos.filter(pedido => 
        new Date(pedido.dataCreacao) >= dataLimite
      );

      // Calcular estatísticas
      const estatisticasCalculadas = {
        vendas: calcularEstatisticasVendas(pedidosFiltrados),
        pedidos: calcularEstatisticasPedidos(pedidosFiltrados),
        clientes: calcularEstatisticasClientes(clientes, pedidosFiltrados),
        produtos: calcularEstatisticasProdutos(produtos, pedidosFiltrados)
      };

      setEstatisticas(estatisticasCalculadas);
    } catch (error) {
      console.error('Erro ao carregar dados do dashboard:', error);
    } finally {
      setCarregando(false);
    }
  };

  const obterDataLimite = (periodo) => {
    const agora = new Date();
    switch (periodo) {
      case '7dias':
        return new Date(agora.getTime() - 7 * 24 * 60 * 60 * 1000);
      case '30dias':
        return new Date(agora.getTime() - 30 * 24 * 60 * 60 * 1000);
      case '90dias':
        return new Date(agora.getTime() - 90 * 24 * 60 * 60 * 1000);
      case '1ano':
        return new Date(agora.getTime() - 365 * 24 * 60 * 60 * 1000);
      default:
        return new Date(agora.getTime() - 30 * 24 * 60 * 60 * 1000);
    }
  };

  const calcularEstatisticasVendas = (pedidos) => {
    const pedidosAprovados = pedidos.filter(p => p.status === 'aprovado' || p.status === 'entregue');
    
    const faturamento = pedidosAprovados.reduce((total, pedido) => total + pedido.total, 0);
    const ticketMedio = pedidosAprovados.length > 0 ? faturamento / pedidosAprovados.length : 0;
    
    // Calcular crescimento (simulado)
    const crescimentoFaturamento = Math.random() * 20 - 10; // -10% a +10%
    const crescimentoTicket = Math.random() * 15 - 7.5; // -7.5% a +7.5%

    // Dados para gráfico de vendas por dia
    const vendasPorDia = {};
    pedidosAprovados.forEach(pedido => {
      const data = new Date(pedido.dataCreacao).toISOString().split('T')[0];
      vendasPorDia[data] = (vendasPorDia[data] || 0) + pedido.total;
    });

    return {
      faturamento,
      ticketMedio,
      crescimentoFaturamento,
      crescimentoTicket,
      vendasPorDia
    };
  };

  const calcularEstatisticasPedidos = (pedidos) => {
    const total = pedidos.length;
    const pendentes = pedidos.filter(p => p.status === 'pendente').length;
    const aprovados = pedidos.filter(p => p.status === 'aprovado').length;
    const cancelados = pedidos.filter(p => p.status === 'cancelado').length;
    
    const taxaAprovacao = total > 0 ? (aprovados / total) * 100 : 0;
    const taxaCancelamento = total > 0 ? (cancelados / total) * 100 : 0;

    // Distribuição por status
    const distribuicaoStatus = {
      pendente: pendentes,
      aprovado: aprovados,
      cancelado: cancelados,
      outros: total - pendentes - aprovados - cancelados
    };

    return {
      total,
      pendentes,
      aprovados,
      cancelados,
      taxaAprovacao,
      taxaCancelamento,
      distribuicaoStatus
    };
  };

  const calcularEstatisticasClientes = (clientes, pedidos) => {
    const totalClientes = clientes.length;
    const clientesAtivos = clientes.filter(c => c.status === 'ativo').length;
    
    // Clientes que fizeram pedidos no período
    const clientesComPedidos = new Set(pedidos.map(p => p.clienteId)).size;
    const taxaEngajamento = totalClientes > 0 ? (clientesComPedidos / totalClientes) * 100 : 0;

    // Novos clientes (simulado - últimos 30 dias)
    const novosClientes = Math.floor(totalClientes * 0.1); // 10% são novos

    return {
      total: totalClientes,
      ativos: clientesAtivos,
      comPedidos: clientesComPedidos,
      novos: novosClientes,
      taxaEngajamento
    };
  };

  const calcularEstatisticasProdutos = (produtos, pedidos) => {
    const totalProdutos = produtos.length;
    
    // Produtos mais vendidos
    const vendasPorProduto = {};
    pedidos.forEach(pedido => {
      pedido.itens.forEach(item => {
        const produtoId = item.produtoId;
        vendasPorProduto[produtoId] = (vendasPorProduto[produtoId] || 0) + item.quantidade;
      });
    });

    const produtosMaisVendidos = Object.entries(vendasPorProduto)
      .map(([produtoId, quantidade]) => {
        const produto = produtos.find(p => p.id === produtoId);
        return produto ? { produto, quantidade } : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.quantidade - a.quantidade)
      .slice(0, 5);

    // Produtos com baixo estoque (simulado)
    const produtosBaixoEstoque = produtos.filter(p => Math.random() < 0.2).length; // 20% com baixo estoque

    return {
      total: totalProdutos,
      maisVendidos: produtosMaisVendidos,
      baixoEstoque: produtosBaixoEstoque
    };
  };

  if (carregando) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filtros de período */}
      <FiltrosPeriodo periodo={periodo} onChange={setPeriodo} />

      {/* Cards de estatísticas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CardEstatistica
          titulo="Faturamento"
          valor={`R$ ${estatisticas.vendas.faturamento?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || '0,00'}`}
          crescimento={estatisticas.vendas.crescimentoFaturamento}
          icone="💰"
          cor="green"
        />
        
        <CardEstatistica
          titulo="Pedidos"
          valor={estatisticas.pedidos.total?.toString() || '0'}
          crescimento={5.2}
          icone="📦"
          cor="blue"
        />
        
        <CardEstatistica
          titulo="Ticket Médio"
          valor={`R$ ${estatisticas.vendas.ticketMedio?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || '0,00'}`}
          crescimento={estatisticas.vendas.crescimentoTicket}
          icone="🎯"
          cor="purple"
        />
        
        <CardEstatistica
          titulo="Clientes Ativos"
          valor={estatisticas.clientes.ativos?.toString() || '0'}
          crescimento={2.8}
          icone="👥"
          cor="orange"
        />
      </div>

      {/* Gráficos principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Vendas por Período
          </h3>
          <GraficoVendas dados={estatisticas.vendas.vendasPorDia} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Status dos Pedidos
          </h3>
          <GraficoProdutos dados={estatisticas.pedidos.distribuicaoStatus} />
        </div>
      </div>

      {/* Seção de produtos e clientes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Produtos mais vendidos */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Produtos Mais Vendidos
          </h3>
          <div className="space-y-3">
            {estatisticas.produtos.maisVendidos?.map((item, index) => (
              <div key={item.produto.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-white ${
                    index === 0 ? 'bg-yellow-500' : 
                    index === 1 ? 'bg-gray-400' : 
                    index === 2 ? 'bg-orange-600' : 'bg-gray-300'
                  }`}>
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {item.produto.nome}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.produto.categoria}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {item.quantidade} vendas
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    R$ {item.produto.preco.toFixed(2)}
                  </p>
                </div>
              </div>
            )) || (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                Nenhum produto vendido no período
              </p>
            )}
          </div>
        </div>

        {/* Estatísticas de clientes */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Estatísticas de Clientes
          </h3>
          <GraficoClientes dados={estatisticas.clientes} />
        </div>
      </div>

      {/* Alertas e notificações */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Alertas e Notificações
        </h3>
        <div className="space-y-3">
          {estatisticas.pedidos.pendentes > 0 && (
            <div className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Você tem {estatisticas.pedidos.pendentes} pedidos pendentes de aprovação
                </p>
              </div>
            </div>
          )}

          {estatisticas.produtos.baixoEstoque > 0 && (
            <div className="flex items-center p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-800 dark:text-red-200">
                  {estatisticas.produtos.baixoEstoque} produtos com estoque baixo
                </p>
              </div>
            </div>
          )}

          {estatisticas.clientes.novos > 0 && (
            <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-800 dark:text-green-200">
                  {estatisticas.clientes.novos} novos clientes cadastrados
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}