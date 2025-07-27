import React, { useState, useEffect } from 'react';
import { usarCorTema } from '../../utils/coresTema';
import servicoNotificacoes from '../../servicos/ServicoNotificacoes';

export default function PreferenciasNotificacao() {
  const { classes } = usarCorTema();
  
  const [preferencias, setPreferencias] = useState({
    pedidos: {
      novoPedido: true,
      statusAlterado: true,
      pedidoCancelado: true,
      toast: true
    },
    produtos: {
      produtoAdicionado: false,
      produtoAtualizado: true,
      estoqueBaixo: true,
      toast: true
    },
    sistema: {
      manutencao: true,
      atualizacoes: true,
      backup: false,
      toast: true
    },
    geral: {
      som: true,
      desktop: false,
      email: true,
      duracaoToast: 5000
    }
  });

  // Carregar preferências do localStorage
  useEffect(() => {
    const preferenciasSalvas = localStorage.getItem('preferenciasNotificacao');
    if (preferenciasSalvas) {
      try {
        setPreferencias(JSON.parse(preferenciasSalvas));
      } catch (error) {
        console.error('Erro ao carregar preferências:', error);
      }
    }
  }, []);

  // Salvar preferências no localStorage
  const salvarPreferencias = (novasPreferencias) => {
    try {
      localStorage.setItem('preferenciasNotificacao', JSON.stringify(novasPreferencias));
    } catch (error) {
      console.error('Erro ao salvar preferências:', error);
    }
  };

  const atualizarPreferencia = (categoria, chave, valor) => {
    const novasPreferencias = {
      ...preferencias,
      [categoria]: {
        ...preferencias[categoria],
        [chave]: valor
      }
    };
    
    setPreferencias(novasPreferencias);
    salvarPreferencias(novasPreferencias);
  };

  const renderizarSecao = (titulo, categoria, configuracoes) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
        {titulo}
      </h3>
      <div className="space-y-4">
        {Object.entries(configuracoes).map(([chave, config]) => (
          <div key={chave} className="flex items-center justify-between">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-900 dark:text-white">
                {config.label}
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {config.descricao}
              </p>
            </div>
            <div className="ml-4">
              {config.tipo === 'toggle' ? (
                <button
                  onClick={() => atualizarPreferencia(categoria, chave, !preferencias[categoria][chave])}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferencias[categoria][chave] 
                      ? `${classes.bg}` 
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferencias[categoria][chave] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              ) : config.tipo === 'select' ? (
                <select
                  value={preferencias[categoria][chave]}
                  onChange={(e) => atualizarPreferencia(categoria, chave, parseInt(e.target.value))}
                  className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                >
                  {config.opcoes.map((opcao) => (
                    <option key={opcao.valor} value={opcao.valor}>
                      {opcao.label}
                    </option>
                  ))}
                </select>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const opcoesConfiguracoes = {
    pedidos: {
      novoPedido: {
        label: 'Novo Pedido',
        descricao: 'Notificar quando um novo pedido for criado',
        tipo: 'toggle'
      },
      statusAlterado: {
        label: 'Status Alterado',
        descricao: 'Notificar quando o status de um pedido mudar',
        tipo: 'toggle'
      },
      pedidoCancelado: {
        label: 'Pedido Cancelado',
        descricao: 'Notificar quando um pedido for cancelado',
        tipo: 'toggle'
      },
      toast: {
        label: 'Notificações Toast',
        descricao: 'Mostrar notificações temporárias na tela',
        tipo: 'toggle'
      }
    },
    produtos: {
      produtoAdicionado: {
        label: 'Produto Adicionado',
        descricao: 'Notificar quando um novo produto for adicionado',
        tipo: 'toggle'
      },
      produtoAtualizado: {
        label: 'Produto Atualizado',
        descricao: 'Notificar quando um produto for atualizado',
        tipo: 'toggle'
      },
      estoqueBaixo: {
        label: 'Estoque Baixo',
        descricao: 'Notificar quando o estoque estiver baixo',
        tipo: 'toggle'
      },
      toast: {
        label: 'Notificações Toast',
        descricao: 'Mostrar notificações temporárias na tela',
        tipo: 'toggle'
      }
    },
    sistema: {
      manutencao: {
        label: 'Manutenção',
        descricao: 'Notificar sobre manutenções programadas',
        tipo: 'toggle'
      },
      atualizacoes: {
        label: 'Atualizações',
        descricao: 'Notificar sobre atualizações do sistema',
        tipo: 'toggle'
      },
      backup: {
        label: 'Backup',
        descricao: 'Notificar sobre backups realizados',
        tipo: 'toggle'
      },
      toast: {
        label: 'Notificações Toast',
        descricao: 'Mostrar notificações temporárias na tela',
        tipo: 'toggle'
      }
    },
    geral: {
      som: {
        label: 'Som',
        descricao: 'Reproduzir som ao receber notificações',
        tipo: 'toggle'
      },
      desktop: {
        label: 'Notificações Desktop',
        descricao: 'Mostrar notificações do navegador',
        tipo: 'toggle'
      },
      email: {
        label: 'Email',
        descricao: 'Enviar notificações por email',
        tipo: 'toggle'
      },
      duracaoToast: {
        label: 'Duração do Toast',
        descricao: 'Tempo que as notificações ficam visíveis',
        tipo: 'select',
        opcoes: [
          { valor: 3000, label: '3 segundos' },
          { valor: 5000, label: '5 segundos' },
          { valor: 7000, label: '7 segundos' },
          { valor: 10000, label: '10 segundos' }
        ]
      }
    }
  };

  const testarNotificacao = () => {
    servicoNotificacoes.notificarSucesso(
      'Teste de Notificação',
      'Esta é uma notificação de teste para verificar suas configurações'
    );
  };

  const solicitarPermissaoDesktop = async () => {
    if ('Notification' in window) {
      const permissao = await Notification.requestPermission();
      if (permissao === 'granted') {
        servicoNotificacoes.notificarSucesso('Permissão concedida', 'Notificações desktop foram habilitadas');
        new Notification('PulseHub', {
          body: 'Notificações desktop estão funcionando!',
          icon: '/favicon.ico'
        });
      } else {
        atualizarPreferencia('geral', 'desktop', false);
      }
    }
  };

  useEffect(() => {
    if (preferencias.geral.desktop && 'Notification' in window && Notification.permission === 'default') {
      solicitarPermissaoDesktop();
    }
  }, [preferencias.geral.desktop]);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Preferências de Notificação
          </h2>
          <button
            onClick={testarNotificacao}
            className={`px-4 py-2 ${classes.bg} text-white rounded-md hover:opacity-90 transition-opacity`}
          >
            Testar Notificação
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Configure como e quando você deseja receber notificações do sistema.
        </p>
      </div>

      {renderizarSecao('Pedidos', 'pedidos', opcoesConfiguracoes.pedidos)}
      {renderizarSecao('Produtos', 'produtos', opcoesConfiguracoes.produtos)}
      {renderizarSecao('Sistema', 'sistema', opcoesConfiguracoes.sistema)}
      {renderizarSecao('Configurações Gerais', 'geral', opcoesConfiguracoes.geral)}

      {/* Informações sobre permissões */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Sobre as Notificações
            </h3>
            <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
              <ul className="list-disc list-inside space-y-1">
                <li>Notificações desktop requerem permissão do navegador</li>
                <li>Notificações por email serão implementadas em versões futuras</li>
                <li>As configurações são salvas localmente no seu navegador</li>
                <li>Você pode testar as configurações usando o botão "Testar Notificação"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}