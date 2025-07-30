import React, { useState, useEffect } from 'react';
import servicoNotificacoes from '../../servicos/ServicoNotificacoes';
import { usarCorTemaSeguro } from '../../hooks/usarCorTemaSeguro';

export default function CentroNotificacoes() {
  const [notificacoes, setNotificacoes] = useState([]);
  const [aberto, setAberto] = useState(false);
  const { classes, mounted } = usarCorTemaSeguro();

  useEffect(() => {
    // Carregar notificações iniciais
    setNotificacoes(servicoNotificacoes.obterNotificacoes());

    // Adicionar listener para atualizações
    const handleAtualizacao = (novasNotificacoes) => {
      setNotificacoes(novasNotificacoes);
    };

    servicoNotificacoes.adicionarListener(handleAtualizacao);

    return () => {
      servicoNotificacoes.removerListener(handleAtualizacao);
    };
  }, []);

  const naoLidas = mounted ? servicoNotificacoes.contarNaoLidas() : 0;

  const formatarTempo = (timestamp) => {
    const agora = new Date();
    const data = new Date(timestamp);
    const diffMs = agora - data;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHoras = Math.floor(diffMs / 3600000);
    const diffDias = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Agora';
    if (diffMins < 60) return `${diffMins}min`;
    if (diffHoras < 24) return `${diffHoras}h`;
    return `${diffDias}d`;
  };

  const getCorNotificacao = (cor) => {
    const cores = {
      blue: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
      green: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800',
      yellow: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800',
      red: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800',
      gray: 'bg-gray-50 border-gray-200 dark:bg-gray-900/20 dark:border-gray-800'
    };
    return cores[cor] || cores.gray;
  };

  const handleMarcarComoLida = (id) => {
    servicoNotificacoes.marcarComoLida(id);
  };

  const handleRemover = (id) => {
    servicoNotificacoes.removerNotificacao(id);
  };

  const handleMarcarTodasLidas = () => {
    servicoNotificacoes.marcarTodasComoLidas();
  };

  const handleLimparTodas = () => {
    servicoNotificacoes.limparTodas();
  };

  const handleAcao = (acao) => {
    if (acao && acao.url) {
      window.location.href = acao.url;
    }
  };

  return (
    <div className="relative">
      {/* Botão de notificações */}
      <button
        onClick={() => setAberto(!aberto)}
        className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        
        {/* Badge de contagem */}
        {naoLidas > 0 && (
          <span className={`absolute -top-1 -right-1 ${classes.bg} text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`}>
            {naoLidas > 9 ? '9+' : naoLidas}
          </span>
        )}
      </button>

      {/* Dropdown de notificações */}
      {aberto && (
        <>
          {/* Overlay para fechar */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setAberto(false)}
          />
          
          {/* Panel de notificações */}
          <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Notificações
                </h3>
                <div className="flex items-center space-x-2">
                  {naoLidas > 0 && (
                    <button
                      onClick={handleMarcarTodasLidas}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      Marcar todas como lidas
                    </button>
                  )}
                  {notificacoes.length > 0 && (
                    <button
                      onClick={handleLimparTodas}
                      className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                    >
                      Limpar todas
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Lista de notificações */}
            <div className="max-h-96 overflow-y-auto">
              {!mounted ? (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <div className="animate-pulse">Carregando...</div>
                </div>
              ) : notificacoes.length === 0 ? (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-3.5-3.5a1.5 1.5 0 010-2.12L20 8h-5M9 17H4l3.5-3.5a1.5 1.5 0 000-2.12L4 8h5m6 9a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>Nenhuma notificação</p>
                </div>
              ) : (
                notificacoes.map((notificacao) => (
                  <div
                    key={notificacao.id}
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${
                      !notificacao.lida ? 'bg-blue-50 dark:bg-blue-900/10' : ''
                    } hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors`}
                  >
                    <div className="flex items-start space-x-3">
                      {/* Ícone */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm ${getCorNotificacao(notificacao.cor)}`}>
                        {notificacao.icone}
                      </div>

                      {/* Conteúdo */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {notificacao.titulo}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {formatarTempo(notificacao.timestamp)}
                            </span>
                            {!notificacao.lida && (
                              <div className={`w-2 h-2 ${classes.bg} rounded-full`} />
                            )}
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {notificacao.mensagem}
                        </p>

                        {/* Ações */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-2">
                            {notificacao.acao && (
                              <button
                                onClick={() => handleAcao(notificacao.acao)}
                                className={`text-xs ${classes.text} ${classes.textDark} hover:underline`}
                              >
                                {notificacao.acao.texto}
                              </button>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            {!notificacao.lida && (
                              <button
                                onClick={() => handleMarcarComoLida(notificacao.id)}
                                className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                                title="Marcar como lida"
                              >
                                ✓
                              </button>
                            )}
                            <button
                              onClick={() => handleRemover(notificacao.id)}
                              className="text-xs text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                              title="Remover"
                            >
                              ×
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}