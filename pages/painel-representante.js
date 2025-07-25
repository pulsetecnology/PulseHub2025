import React, { useState, useEffect } from 'react';
import LayoutPrincipal from '../src/front-end/componentes/layout/LayoutPrincipal';
import CardEstatistica from '../src/front-end/componentes/dashboard/CardEstatistica';
import CardAcaoRapida from '../src/front-end/componentes/dashboard/CardAcaoRapida';

export default function PainelRepresentante() {
  const [clientesRecentes, setClientesRecentes] = useState([]);
  const [pedidosPendentes, setPedidosPendentes] = useState([]);
  const [carregandoDados, setCarregandoDados] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setClientesRecentes([
        {
          id: 1,
          nome: 'Tech Solutions Ltda',
          ultimoContato: '2024-01-15',
          status: 'ativo',
          potencial: 'alto'
        },
        {
          id: 2,
          nome: 'Inovação Digital',
          ultimoContato: '2024-01-14',
          status: 'prospecto',
          potencial: 'medio'
        },
        {
          id: 3,
          nome: 'StartUp Tech',
          ultimoContato: '2024-01-13',
          status: 'ativo',
          potencial: 'alto'
        }
      ]);

      setPedidosPendentes([
        { id: 1, numero: 'PED-2024-001', cliente: 'Tech Solutions Ltda', valor: 15420.50, dias: 2 },
        { id: 2, numero: 'PED-2024-003', cliente: 'StartUp Tech', valor: 12300.75, dias: 3 },
        { id: 3, numero: 'PED-2024-007', cliente: 'Consultoria Empresarial', valor: 8900.00, dias: 1 }
      ]);

      setCarregandoDados(false);
    }, 1000);
  }, []);

  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ativo':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'prospecto':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'inativo':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getPotencialColor = (potencial) => {
    switch (potencial) {
      case 'alto':
        return 'text-green-600 dark:text-green-400';
      case 'medio':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'baixo':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  // Dados simulados para o dashboard do representante
  const estatisticas = [
    {
      titulo: 'Clientes Ativos',
      valor: '42',
      variacao: 8,
      cor: 'green',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    },
    {
      titulo: 'Pedidos Este Mês',
      valor: '18',
      variacao: 22,
      cor: 'purple',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      titulo: 'Comissões Acumuladas',
      valor: 'R$ 8.750',
      variacao: 18,
      cor: 'green',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Meta do Mês',
      valor: '72%',
      variacao: 5,
      cor: 'orange',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const acoesRapidas = [
    {
      titulo: 'Novo Cliente',
      descricao: 'Cadastre um novo cliente em sua carteira',
      url: '/clientes/novo',
      cor: 'green',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
        </svg>
      )
    },
    {
      titulo: 'Criar Pedido',
      descricao: 'Crie um novo pedido para seus clientes',
      url: '/pedidos/novo',
      cor: 'purple',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      titulo: 'Ver Catálogo',
      descricao: 'Explore os produtos disponíveis',
      url: '/catalogo',
      cor: 'white',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <LayoutPrincipal titulo="Painel do Representante" subtitulo="Gerencie seus clientes, pedidos e acompanhe suas metas">
      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {estatisticas.map((estatistica, index) => (
          <CardEstatistica
            key={index}
            titulo={estatistica.titulo}
            valor={estatistica.valor}
            variacao={estatistica.variacao}
            icone={estatistica.icone}
            cor={estatistica.cor}
          />
        ))}
      </div>

      {/* Ações Rápidas */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ações Rápidas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {acoesRapidas.map((acao, index) => (
          <CardAcaoRapida
            key={index}
            titulo={acao.titulo}
            descricao={acao.descricao}
            icone={acao.icone}
            url={acao.url}
            cor={acao.cor}
          />
        ))}
      </div>

      {/* Seção de Clientes Recentes e Pedidos Pendentes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Clientes Recentes */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <svg className="h-5 w-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Clientes Recentes
            </h3>
          </div>
          <div className="p-6">
            {carregandoDados ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
              </div>
            ) : clientesRecentes.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                Nenhum cliente recente
              </p>
            ) : (
              <div className="space-y-4">
                {clientesRecentes.map(cliente => (
                  <div key={cliente.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {cliente.nome}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cliente.status)}`}>
                          {cliente.status.charAt(0).toUpperCase() + cliente.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          Último contato: {formatarData(cliente.ultimoContato)}
                        </span>
                        <span className={`text-xs font-medium capitalize ${getPotencialColor(cliente.potencial)}`}>
                          Potencial {cliente.potencial}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => window.location.href = '/clientes'}
                    className="w-full text-center text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                  >
                    Ver todos os clientes →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pedidos Pendentes */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <svg className="h-5 w-5 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pedidos Pendentes
            </h3>
          </div>
          <div className="p-6">
            {carregandoDados ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-600"></div>
              </div>
            ) : pedidosPendentes.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                Nenhum pedido pendente
              </p>
            ) : (
              <div className="space-y-4">
                {pedidosPendentes.map(pedido => (
                  <div key={pedido.id} className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {pedido.numero}
                        </span>
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                          {formatarPreco(pedido.valor)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {pedido.cliente}
                        </span>
                        <span className="text-xs text-yellow-600 dark:text-yellow-400">
                          {pedido.dias} {pedido.dias === 1 ? 'dia' : 'dias'} pendente
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => window.location.href = '/pedidos'}
                    className="w-full text-center text-sm text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium"
                  >
                    Ver todos os pedidos →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Metas e Performance */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
        Performance do Mês
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">72%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Meta Atingida</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">R$ 45.2K</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Vendas no Mês</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">18</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Novos Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}