import React, { useState, useEffect } from 'react';

export default function NotificacoesAdmin() {
  const [notificacoes, setNotificacoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [filtroTipo, setFiltroTipo] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('');

  useEffect(() => {
    // Simular carregamento de notificações
    setTimeout(() => {
      setNotificacoes([
        {
          id: 1,
          tipo: 'sistema',
          titulo: 'Backup automático concluído',
          mensagem: 'O backup diário do sistema foi concluído com sucesso às 02:00.',
          status: 'lida',
          prioridade: 'baixa',
          timestamp: '2024-01-15T02:00:00Z',
          usuario: 'Sistema'
        },
        {
          id: 2,
          tipo: 'seguranca',
          titulo: 'Tentativas de login suspeitas detectadas',
          mensagem: 'Foram detectadas 5 tentativas de login falhadas para o usuário admin@exemplo.com.',
          status: 'nao_lida',
          prioridade: 'alta',
          timestamp: '2024-01-15T10:30:00Z',
          usuario: 'Sistema de Segurança'
        },
        {
          id: 3,
          tipo: 'usuario',
          titulo: 'Novo fornecedor aguardando aprovação',
          mensagem: 'Moda Elegante Ltda se cadastrou e aguarda aprovação administrativa.',
          status: 'nao_lida',
          prioridade: 'media',
          timestamp: '2024-01-15T09:15:00Z',
          usuario: 'Sistema'
        },
        {
          id: 4,
          tipo: 'pedido',
          titulo: 'Pedido de alto valor criado',
          mensagem: 'Pedido PED-2024-156 no valor de R$ 45.000 foi criado e requer atenção.',
          status: 'nao_lida',
          prioridade: 'alta',
          timestamp: '2024-01-15T11:45:00Z',
          usuario: 'Sistema'
        },
        {
          id: 5,
          tipo: 'sistema',
          titulo: 'Atualização de sistema disponível',
          mensagem: 'Nova versão 2.1.3 disponível com correções de segurança.',
          status: 'lida',
          prioridade: 'media',
          timestamp: '2024-01-14T16:20:00Z',
          usuario: 'Sistema'
        }
      ]);
      setCarregando(false);
    }, 1000);
  }, []);

  const notificacoesFiltradas = notificacoes.filter(notificacao => {
    const matchTipo = filtroTipo === '' || notificacao.tipo === filtroTipo;
    const matchStatus = filtroStatus === '' || notificacao.status === filtroStatus;
    return matchTipo && matchStatus;
  });

  const formatarTempo = (timestamp) => {
    const agora = new Date();
    const data = new Date(timestamp);
    const diffMs = agora - data;
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 60) return `${diffMins}min atrás`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h atrás`;
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getIconeNotificacao = (tipo) => {
    switch (tipo) {
      case 'sistema':
        return (
          <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'seguranca':
        return (
          <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      case 'usuario':
        return (
          <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        );
      case 'pedido':
        return (
          <svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        );
      default:
        return (
          <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getCorPrioridade = (prioridade) => {
    switch (prioridade) {
      case 'alta':
        return 'border-l-red-500 bg-red-50 dark:bg-red-900/20';
      case 'media':
        return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'baixa':
        return 'border-l-green-500 bg-green-50 dark:bg-green-900/20';
      default:
        return 'border-l-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const handleMarcarComoLida = (notificacaoId) => {
    setNotificacoes(notificacoes.map(notificacao =>
      notificacao.id === notificacaoId
        ? { ...notificacao, status: 'lida' }
        : notificacao
    ));
  };

  const handleMarcarTodasComoLidas = () => {
    setNotificacoes(notificacoes.map(notificacao => ({
      ...notificacao,
      status: 'lida'
    })));
  };

  const tiposNotificacao = [
    { value: 'sistema', label: 'Sistema' },
    { value: 'seguranca', label: 'Segurança' },
    { value: 'usuario', label: 'Usuário' },
    { value: 'pedido', label: 'Pedido' }
  ];

  const statusOptions = [
    { value: 'nao_lida', label: 'Não Lida' },
    { value: 'lida', label: 'Lida' }
  ];

  const naoLidas = notificacoes.filter(n => n.status === 'nao_lida').length;

  if (carregando) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
            <svg className="h-5 w-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h8v-2H4v2zM4 11h10V9H4v2zM4 7h12V5H4v2z" />
            </svg>
            Notificações Administrativas
            {naoLidas > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {naoLidas}
              </span>
            )}
          </h3>
          
          {naoLidas > 0 && (
            <button
              onClick={handleMarcarTodasComoLidas}
              className="text-sm text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Marcar todas como lidas
            </button>
          )}
        </div>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">Todos os tipos</option>
            {tiposNotificacao.map(tipo => (
              <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
            ))}
          </select>

          <select
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">Todos os status</option>
            {statusOptions.map(status => (
              <option key={status.value} value={status.value}>{status.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Lista de Notificações */}
      <div className="max-h-96 overflow-y-auto">
        {notificacoesFiltradas.length === 0 ? (
          <div className="p-6 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h8v-2H4v2zM4 11h10V9H4v2zM4 7h12V5H4v2z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              Nenhuma notificação encontrada
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Tente ajustar os filtros de busca.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {notificacoesFiltradas.map((notificacao) => (
              <div
                key={notificacao.id}
                className={`p-4 border-l-4 ${getCorPrioridade(notificacao.prioridade)} ${
                  notificacao.status === 'nao_lida' ? 'font-medium' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      {getIconeNotificacao(notificacao.tipo)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                          {notificacao.titulo}
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {formatarTempo(notificacao.timestamp)}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {notificacao.mensagem}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Por: {notificacao.usuario}
                        </span>
                        {notificacao.status === 'nao_lida' && (
                          <button
                            onClick={() => handleMarcarComoLida(notificacao.id)}
                            className="text-xs text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                          >
                            Marcar como lida
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}