import React, { useState, useEffect } from 'react';
import { usarCorTema } from '../../utils/coresTema';
import { mostrarSucesso } from './ContainerToast';

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
      produtoAtualizado: false,
      estoquebaixo: true,
      toast: true
    },
    sistema: {
      manutencao: true,
      atualizacoes: true,
      backup: false,
      toast: false
    },
    geral: {
      som: true,
      desktop: true,
      email: false,
      duracaoToast: 5000
    }
  });

  useEffect(() => {
    carregarPreferencias();
  }, []);

  const carregarPreferencias = () => {
    try {
      const preferenciasLocal = localStorage.getItem('preferenciasNotificacao');
      if (preferenciasLocal) {
        setPreferencias(JSON.parse(preferenciasLocal));
      }
    } catch (error) {
      console.error('Erro ao carregar preferências:', error);
    }
  };

  const salvarPreferencias = (novasPreferencias) => {
    try {
      localStorage.setItem('preferenciasNotificacao', JSON.stringify(novasPreferencias));
      setPreferencias(novasPreferencias);
      mostrarSucesso('Preferências salvas', 'Suas preferências de notificação foram atualizadas');
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
    salvarPreferencias(novasPreferencias);
  };

  const renderizarSecao = (titulo, categoria, opcoes) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
        {titulo}
      </h3>
      <div className="space-y-4">
        {Object.entries(opcoes).map(([chave, config]) => (
          <div key={chave} className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {config.label}
              </label>
              {config.descricao && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {config.descricao}
                </p>
              )}
            </div>
            <div className="flex items-center">
              {config.tipo === 'toggle' ? (
                <button
                  onClick={() => atualizarPreferencia(categoria, chave, !preferencias[categoria][chave])}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferencias[categoria][chave] ? classes.bg : 'bg-gray-200 dark:bg-gray-700'
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
                  value={preferencias[categoria][chave]}\n                  onChange={(e) => atualizarPreferencia(categoria, chave, parseInt(e.target.value))}\n                  className=\"px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm\"\n                >\n                  {config.opcoes.map((opcao) => (\n                    <option key={opcao.valor} value={opcao.valor}>\n                      {opcao.label}\n                    </option>\n                  ))}\n                </select>\n              ) : null}\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n\n  const opcoesConfiguracoes = {\n    pedidos: {\n      novoPedido: {\n        label: 'Novo Pedido',\n        descricao: 'Notificar quando um novo pedido for criado',\n        tipo: 'toggle'\n      },\n      statusAlterado: {\n        label: 'Status Alterado',\n        descricao: 'Notificar quando o status de um pedido mudar',\n        tipo: 'toggle'\n      },\n      pedidoCancelado: {\n        label: 'Pedido Cancelado',\n        descricao: 'Notificar quando um pedido for cancelado',\n        tipo: 'toggle'\n      },\n      toast: {\n        label: 'Notificações Toast',\n        descricao: 'Mostrar notificações temporárias na tela',\n        tipo: 'toggle'\n      }\n    },\n    produtos: {\n      produtoAdicionado: {\n        label: 'Produto Adicionado',\n        descricao: 'Notificar quando um novo produto for adicionado',\n        tipo: 'toggle'\n      },\n      produtoAtualizado: {\n        label: 'Produto Atualizado',\n        descricao: 'Notificar quando um produto for atualizado',\n        tipo: 'toggle'\n      },\n      estoqueB aixo: {\n        label: 'Estoque Baixo',\n        descricao: 'Notificar quando o estoque estiver baixo',\n        tipo: 'toggle'\n      },\n      toast: {\n        label: 'Notificações Toast',\n        descricao: 'Mostrar notificações temporárias na tela',\n        tipo: 'toggle'\n      }\n    },\n    sistema: {\n      manutencao: {\n        label: 'Manutenção',\n        descricao: 'Notificar sobre manutenções programadas',\n        tipo: 'toggle'\n      },\n      atualizacoes: {\n        label: 'Atualizações',\n        descricao: 'Notificar sobre atualizações do sistema',\n        tipo: 'toggle'\n      },\n      backup: {\n        label: 'Backup',\n        descricao: 'Notificar sobre backups realizados',\n        tipo: 'toggle'\n      },\n      toast: {\n        label: 'Notificações Toast',\n        descricao: 'Mostrar notificações temporárias na tela',\n        tipo: 'toggle'\n      }\n    },\n    geral: {\n      som: {\n        label: 'Som',\n        descricao: 'Reproduzir som ao receber notificações',\n        tipo: 'toggle'\n      },\n      desktop: {\n        label: 'Notificações Desktop',\n        descricao: 'Mostrar notificações do navegador',\n        tipo: 'toggle'\n      },\n      email: {\n        label: 'Email',\n        descricao: 'Enviar notificações por email',\n        tipo: 'toggle'\n      },\n      duracaoToast: {\n        label: 'Duração do Toast',\n        descricao: 'Tempo que as notificações ficam visíveis',\n        tipo: 'select',\n        opcoes: [\n          { valor: 3000, label: '3 segundos' },\n          { valor: 5000, label: '5 segundos' },\n          { valor: 7000, label: '7 segundos' },\n          { valor: 10000, label: '10 segundos' }\n        ]\n      }\n    }\n  };\n\n  const testarNotificacao = () => {\n    mostrarSucesso(\n      'Teste de Notificação',\n      'Esta é uma notificação de teste para verificar suas configurações'\n    );\n  };\n\n  const solicitarPermissaoDesktop = async () => {\n    if ('Notification' in window) {\n      const permissao = await Notification.requestPermission();\n      if (permissao === 'granted') {\n        mostrarSucesso('Permissão concedida', 'Notificações desktop foram habilitadas');\n        new Notification('PulseHub', {\n          body: 'Notificações desktop estão funcionando!',\n          icon: '/favicon.ico'\n        });\n      } else {\n        atualizarPreferencia('geral', 'desktop', false);\n      }\n    }\n  };\n\n  useEffect(() => {\n    if (preferencias.geral.desktop && 'Notification' in window && Notification.permission === 'default') {\n      solicitarPermissaoDesktop();\n    }\n  }, [preferencias.geral.desktop]);\n\n  return (\n    <div className=\"space-y-6\">\n      <div className=\"bg-white dark:bg-gray-800 rounded-lg shadow p-6\">\n        <div className=\"flex items-center justify-between mb-4\">\n          <h2 className=\"text-xl font-semibold text-gray-900 dark:text-white\">\n            Preferências de Notificação\n          </h2>\n          <button\n            onClick={testarNotificacao}\n            className={`px-4 py-2 ${classes.bg} text-white rounded-md hover:opacity-90 transition-opacity`}\n          >\n            Testar Notificação\n          </button>\n        </div>\n        <p className=\"text-gray-600 dark:text-gray-400\">\n          Configure como e quando você deseja receber notificações do sistema.\n        </p>\n      </div>\n\n      {renderizarSecao('Pedidos', 'pedidos', opcoesConfiguracoes.pedidos)}\n      {renderizarSecao('Produtos', 'produtos', opcoesConfiguracoes.produtos)}\n      {renderizarSecao('Sistema', 'sistema', opcoesConfiguracoes.sistema)}\n      {renderizarSecao('Configurações Gerais', 'geral', opcoesConfiguracoes.geral)}\n\n      {/* Informações sobre permissões */}\n      <div className=\"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4\">\n        <div className=\"flex items-start\">\n          <div className=\"flex-shrink-0\">\n            <svg className=\"h-5 w-5 text-blue-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\">\n              <path fillRule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z\" clipRule=\"evenodd\" />\n            </svg>\n          </div>\n          <div className=\"ml-3\">\n            <h3 className=\"text-sm font-medium text-blue-800 dark:text-blue-200\">\n              Sobre as Notificações\n            </h3>\n            <div className=\"mt-2 text-sm text-blue-700 dark:text-blue-300\">\n              <ul className=\"list-disc list-inside space-y-1\">\n                <li>Notificações desktop requerem permissão do navegador</li>\n                <li>Notificações por email serão implementadas em versões futuras</li>\n                <li>As configurações são salvas localmente no seu navegador</li>\n                <li>Você pode testar as configurações usando o botão \"Testar Notificação\"</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}"