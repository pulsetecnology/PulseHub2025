import React, { useState, useEffect } from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import CardEstatistica from '../../src/front-end/componentes/dashboard/CardEstatistica';
import CardAcaoRapida from '../../src/front-end/componentes/dashboard/CardAcaoRapida';
import NotificacoesAdmin from '../../src/front-end/componentes/admin/NotificacoesAdmin';

export default function PainelAdministrativo() {
  const [estatisticasGerais, setEstatisticasGerais] = useState([]);
  const [atividadeRecente, setAtividadeRecente] = useState([]);
  const [carregandoDados, setCarregandoDados] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados administrativos
    setTimeout(() => {
      setEstatisticasGerais([
        {
          titulo: 'Total de Usuários',
          valor: '1.247',
          variacao: 12,
          cor: 'purple',
          icone: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          )
        },
        {
          titulo: 'Fornecedores Ativos',
          valor: '89',
          variacao: 8,
          cor: 'green',
          icone: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 104 0 2 2 0 00-4 0zm6 0a2 2 0 104 0 2 2 0 00-4 0z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          titulo: 'Representantes Ativos',
          valor: '342',
          variacao: 15,
          cor: 'blue',
          icone: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
          )
        },
        {
          titulo: 'Transações Hoje',
          valor: 'R$ 127.5K',
          variacao: 22,
          cor: 'orange',
          icone: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
          )
        }
      ]);

      setAtividadeRecente([
        {
          id: 1,
          tipo: 'usuario_criado',
          descricao: 'Novo fornecedor cadastrado: Moda Elegante Ltda',
          usuario: 'Sistema',
          timestamp: '2024-01-15T10:30:00Z'
        },
        {
          id: 2,
          tipo: 'pedido_aprovado',
          descricao: 'Pedido PED-2024-156 aprovado automaticamente',
          usuario: 'Sistema',
          timestamp: '2024-01-15T10:15:00Z'
        },
        {
          id: 3,
          tipo: 'configuracao_alterada',
          descricao: 'Limite de comissão alterado para 15%',
          usuario: 'Admin João',
          timestamp: '2024-01-15T09:45:00Z'
        }
      ]);

      setCarregandoDados(false);
    }, 1000);
  }, []);

  const formatarTempo = (timestamp) => {
    const agora = new Date();
    const data = new Date(timestamp);
    const diffMs = agora - data;
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 60) return `${diffMins}min atrás`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h atrás`;
    return data.toLocaleDateString('pt-BR');
  };

  const getIconeAtividade = (tipo) => {
    switch (tipo) {
      case 'usuario_criado':
        return (
          <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        );
      case 'pedido_aprovado':
        return (
          <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'configuracao_alterada':
        return (
          <svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return (
          <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const acoesRapidas = [
    {
      titulo: 'Gerenciar Usuários',
      descricao: 'Adicionar, editar ou desativar usuários do sistema',
      url: '/admin/usuarios',
      cor: 'purple',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    },
    {
      titulo: 'Configurações',
      descricao: 'Ajustar configurações gerais do sistema',
      url: '/admin/configuracoes',
      cor: 'blue',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      titulo: 'Relatórios',
      descricao: 'Visualizar relatórios e análises do sistema',
      url: '/admin/relatorios',
      cor: 'green',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      )
    }
  ];

  return (
    <LayoutPrincipal 
      titulo="Painel Administrativo" 
      subtitulo="Gerencie usuários, configurações e monitore o sistema"
    >
      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {estatisticasGerais.map((estatistica, index) => (
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
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ações Administrativas</h2>
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

      {/* Grid com Atividade Recente e Notificações */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Atividade Recente */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Atividade Recente do Sistema
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              {carregandoDados ? (
                <div className="flex justify-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
                </div>
              ) : atividadeRecente.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                  Nenhuma atividade recente
                </p>
              ) : (
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {atividadeRecente.map(atividade => (
                    <div key={atividade.id} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex-shrink-0 mt-1">
                        {getIconeAtividade(atividade.tipo)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {atividade.descricao}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Por: {atividade.usuario}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {formatarTempo(atividade.timestamp)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Notificações Administrativas */}
        <div>
          <NotificacoesAdmin />
        </div>
      </div>
    </LayoutPrincipal>
  );
}