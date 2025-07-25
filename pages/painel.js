import React, { useState, useEffect } from 'react';
import LayoutPrincipal from '../src/front-end/componentes/layout/LayoutPrincipal';
import CardEstatistica from '../src/front-end/componentes/dashboard/CardEstatistica';
import CardAcaoRapida from '../src/front-end/componentes/dashboard/CardAcaoRapida';

export default function Painel() {
  const [pedidosRecentes, setPedidosRecentes] = useState([]);
  const [produtosBaixoEstoque, setProdutosBaixoEstoque] = useState([]);
  const [carregandoDados, setCarregandoDados] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setPedidosRecentes([
        {
          id: 1,
          numero: 'PED-2024-001',
          cliente: 'Tech Solutions Ltda',
          representante: 'João Silva',
          valor: 15420.50,
          status: 'pendente',
          data: '2024-01-15'
        },
        {
          id: 2,
          numero: 'PED-2024-002',
          cliente: 'Inovação Digital',
          representante: 'Maria Santos',
          valor: 8750.00,
          status: 'aprovado',
          data: '2024-01-14'
        },
        {
          id: 3,
          numero: 'PED-2024-003',
          cliente: 'StartUp Tech',
          representante: 'Carlos Oliveira',
          valor: 12300.75,
          status: 'em_producao',
          data: '2024-01-13'
        }
      ]);

      setProdutosBaixoEstoque([
        { id: 1, nome: 'Jaqueta Jeans Vintage', estoque: 8, minimo: 15 },
        { id: 2, nome: 'Bolsa de Couro Clássica', estoque: 18, minimo: 25 },
        { id: 3, nome: 'Vestido Floral Primavera (Tam P)', estoque: 5, minimo: 12 }
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

  const getStatusPedido = (status) => {
    const statusMap = {
      'pendente': { label: 'Pendente', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' },
      'aprovado': { label: 'Aprovado', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' },
      'em_producao': { label: 'Em Produção', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' },
      'enviado': { label: 'Enviado', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' },
      'entregue': { label: 'Entregue', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300' }
    };
    return statusMap[status] || statusMap.pendente;
  };

  // Dados simulados para o dashboard - Segmento de Moda
  const estatisticas = [
    {
      titulo: 'Produtos no Catálogo',
      valor: '247',
      variacao: 12,
      cor: 'purple',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      titulo: 'Pedidos Este Mês',
      valor: '89',
      variacao: 18,
      cor: 'green',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      titulo: 'Faturamento Mensal',
      valor: 'R$ 42.850',
      variacao: 22,
      cor: 'purple',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      titulo: 'Representantes Ativos',
      valor: '31',
      variacao: 5,
      cor: 'orange',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    }
  ];

  const acoesRapidas = [
    {
      titulo: 'Nova Coleção',
      descricao: 'Cadastre produtos da nova coleção',
      url: '/produtos/novo',
      cor: 'purple',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      titulo: 'Gerenciar Pedidos',
      descricao: 'Acompanhe pedidos e entregas',
      url: '/pedidos',
      cor: 'green',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      titulo: 'Representantes',
      descricao: 'Gerencie sua rede de representantes',
      url: '/representantes',
      cor: 'white',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
        </svg>
      )
    }
  ];

  return (
    <LayoutPrincipal titulo="Painel do Fornecedor" subtitulo="Gerencie seus produtos, pedidos e revendedores em um só lugar">
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

      {/* Seção de Pedidos Recentes e Produtos com Baixo Estoque */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Pedidos Recentes */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <svg className="h-5 w-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Pedidos Recentes
            </h3>
          </div>
          <div className="p-6">
            {carregandoDados ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
              </div>
            ) : pedidosRecentes.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                Nenhum pedido recente
              </p>
            ) : (
              <div className="space-y-4">
                {pedidosRecentes.map(pedido => {
                  const statusInfo = getStatusPedido(pedido.status);
                  return (
                    <div key={pedido.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {pedido.numero}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
                            {statusInfo.label}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {pedido.cliente} • {pedido.representante}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                            {formatarPreco(pedido.valor)}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {formatarData(pedido.data)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => window.location.href = '/pedidos'}
                    className="w-full text-center text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                  >
                    Ver todos os pedidos →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Produtos com Baixo Estoque */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <svg className="h-5 w-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Estoque Baixo
            </h3>
          </div>
          <div className="p-6">
            {carregandoDados ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-600"></div>
              </div>
            ) : produtosBaixoEstoque.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                Todos os produtos com estoque adequado
              </p>
            ) : (
              <div className="space-y-4">
                {produtosBaixoEstoque.map(produto => (
                  <div key={produto.id} className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">
                        {produto.nome}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm text-orange-600 dark:text-orange-400">
                          Estoque: {produto.estoque} unidades
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Mín: {produto.minimo}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => window.location.href = '/produtos'}
                    className="w-full text-center text-sm text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium"
                  >
                    Gerenciar estoque →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Atividade Recente */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
        Atividade Recente
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <p className="text-gray-500 dark:text-gray-400 text-center">Nenhuma atividade recente para exibir.</p>
        </div>
      </div>
    </LayoutPrincipal>
  );
}