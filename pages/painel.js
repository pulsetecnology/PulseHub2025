import React from 'react';
import LayoutPrincipal from '../src/front-end/componentes/layout/LayoutPrincipal';
import CardEstatistica from '../src/front-end/componentes/dashboard/CardEstatistica';
import CardAcaoRapida from '../src/front-end/componentes/dashboard/CardAcaoRapida';

export default function Painel() {
  // Dados simulados para o dashboard
  const estatisticas = [
    {
      titulo: 'Total de Produtos',
      valor: '128',
      variacao: 12,
      cor: 'purple',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      titulo: 'Pedidos Recebidos',
      valor: '32',
      variacao: 15,
      cor: 'green',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      titulo: 'Receita Total',
      valor: 'R$ 15.420',
      variacao: 15,
      cor: 'purple',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      titulo: 'Revendedores Ativos',
      valor: '24',
      variacao: 3,
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
      titulo: 'Cadastrar Produto',
      descricao: 'Adicione novos produtos ao seu catálogo',
      url: '/produtos/novo',
      cor: 'purple',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      titulo: 'Ver Pedidos',
      descricao: 'Gerencie pedidos pendentes e histórico',
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
      titulo: 'Cadastrar Revendedor',
      descricao: 'Adicione novos parceiros de revenda',
      url: '/revendedores/novo',
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