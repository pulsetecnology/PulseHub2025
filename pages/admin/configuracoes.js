import React, { useState, useEffect } from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';

export default function ConfiguracoesAdministrativas() {
  const [configuracoes, setConfiguracoes] = useState({
    sistema: {
      nomeEmpresa: 'PulseHub',
      emailContato: 'contato@pulsehub.com',
      telefoneContato: '+55 11 99999-9999',
      enderecoEmpresa: 'São Paulo, SP - Brasil',
      logoUrl: '',
      temaEscuroPadrao: false
    },
    comissoes: {
      taxaPadraoFornecedor: 10,
      taxaPadraoRepresentante: 5,
      limiteMaximoComissao: 25,
      permitirComissaoNegativa: false
    },
    pedidos: {
      statusPadrao: 'pendente',
      tempoLimiteAprovacao: 48,
      permitirCancelamento: true,
      notificarMudancaStatus: true
    },
    notificacoes: {
      emailAtivo: true,
      notificacaoInApp: true,
      frequenciaResumo: 'diario',
      horarioEnvioResumo: '08:00'
    },
    seguranca: {
      tempoExpiracaoSessao: 24,
      tentativasLoginMax: 5,
      bloqueioTemporario: 30,
      exigirSenhaForte: true,
      autenticacaoDoisFatores: false
    }
  });

  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [abaSelecionada, setAbaSelecionada] = useState('sistema');

  useEffect(() => {
    // Simular carregamento das configurações
    setTimeout(() => {
      setCarregando(false);
    }, 1000);
  }, []);

  const handleSalvarConfiguracoes = async () => {
    setSalvando(true);
    
    // Simular salvamento
    setTimeout(() => {
      setSalvando(false);
      setMensagem('Configurações salvas com sucesso!');
      setTimeout(() => setMensagem(''), 3000);
    }, 1500);
  };

  const handleAlterarConfiguracao = (categoria, campo, valor) => {
    setConfiguracoes(prev => ({
      ...prev,
      [categoria]: {
        ...prev[categoria],
        [campo]: valor
      }
    }));
  };

  const abas = [
    { id: 'sistema', nome: 'Sistema', icone: '⚙️' },
    { id: 'comissoes', nome: 'Comissões', icone: '💰' },
    { id: 'pedidos', nome: 'Pedidos', icone: '📋' },
    { id: 'notificacoes', nome: 'Notificações', icone: '🔔' },
    { id: 'seguranca', nome: 'Segurança', icone: '🔒' }
  ];

  if (carregando) {
    return (
      <LayoutPrincipal titulo="Configurações do Sistema" subtitulo="Carregando configurações...">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      </LayoutPrincipal>
    );
  }

  return (
    <LayoutPrincipal 
      titulo="Configurações do Sistema" 
      subtitulo="Gerencie as configurações gerais da plataforma"
    >
      {/* Mensagem de Sucesso */}
      {mensagem && (
        <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
          {mensagem}
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        {/* Abas */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            {abas.map((aba) => (
              <button
                key={aba.id}
                onClick={() => setAbaSelecionada(aba.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  abaSelecionada === aba.id
                    ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <span className="mr-2">{aba.icone}</span>
                {aba.nome}
              </button>
            ))}
          </nav>
        </div>

        {/* Conteúdo das Abas */}
        <div className="p-6">
          {/* Aba Sistema */}
          {abaSelecionada === 'sistema' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Configurações Gerais do Sistema
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome da Empresa
                  </label>
                  <input
                    type="text"
                    value={configuracoes.sistema.nomeEmpresa}
                    onChange={(e) => handleAlterarConfiguracao('sistema', 'nomeEmpresa', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email de Contato
                  </label>
                  <input
                    type="email"
                    value={configuracoes.sistema.emailContato}
                    onChange={(e) => handleAlterarConfiguracao('sistema', 'emailContato', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telefone de Contato
                  </label>
                  <input
                    type="tel"
                    value={configuracoes.sistema.telefoneContato}
                    onChange={(e) => handleAlterarConfiguracao('sistema', 'telefoneContato', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Endereço da Empresa
                  </label>
                  <input
                    type="text"
                    value={configuracoes.sistema.enderecoEmpresa}
                    onChange={(e) => handleAlterarConfiguracao('sistema', 'enderecoEmpresa', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="temaEscuro"
                  checked={configuracoes.sistema.temaEscuroPadrao}
                  onChange={(e) => handleAlterarConfiguracao('sistema', 'temaEscuroPadrao', e.target.checked)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="temaEscuro" className="ml-2 block text-sm text-gray-900 dark:text-white">
                  Tema escuro como padrão para novos usuários
                </label>
              </div>
            </div>
          )}

          {/* Aba Comissões */}
          {abaSelecionada === 'comissoes' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Configurações de Comissões
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Taxa Padrão Fornecedor (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={configuracoes.comissoes.taxaPadraoFornecedor}
                    onChange={(e) => handleAlterarConfiguracao('comissoes', 'taxaPadraoFornecedor', parseFloat(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Taxa Padrão Representante (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={configuracoes.comissoes.taxaPadraoRepresentante}
                    onChange={(e) => handleAlterarConfiguracao('comissoes', 'taxaPadraoRepresentante', parseFloat(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Limite Máximo de Comissão (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={configuracoes.comissoes.limiteMaximoComissao}
                    onChange={(e) => handleAlterarConfiguracao('comissoes', 'limiteMaximoComissao', parseFloat(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="comissaoNegativa"
                  checked={configuracoes.comissoes.permitirComissaoNegativa}
                  onChange={(e) => handleAlterarConfiguracao('comissoes', 'permitirComissaoNegativa', e.target.checked)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="comissaoNegativa" className="ml-2 block text-sm text-gray-900 dark:text-white">
                  Permitir comissões negativas (descontos)
                </label>
              </div>
            </div>
          )}

          {/* Aba Pedidos */}
          {abaSelecionada === 'pedidos' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Configurações de Pedidos
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Status Padrão de Novos Pedidos
                  </label>
                  <select
                    value={configuracoes.pedidos.statusPadrao}
                    onChange={(e) => handleAlterarConfiguracao('pedidos', 'statusPadrao', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="pendente">Pendente</option>
                    <option value="aprovado">Aprovado</option>
                    <option value="em_analise">Em Análise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tempo Limite para Aprovação (horas)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="168"
                    value={configuracoes.pedidos.tempoLimiteAprovacao}
                    onChange={(e) => handleAlterarConfiguracao('pedidos', 'tempoLimiteAprovacao', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="permitirCancelamento"
                    checked={configuracoes.pedidos.permitirCancelamento}
                    onChange={(e) => handleAlterarConfiguracao('pedidos', 'permitirCancelamento', e.target.checked)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="permitirCancelamento" className="ml-2 block text-sm text-gray-900 dark:text-white">
                    Permitir cancelamento de pedidos pelos representantes
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="notificarMudancaStatus"
                    checked={configuracoes.pedidos.notificarMudancaStatus}
                    onChange={(e) => handleAlterarConfiguracao('pedidos', 'notificarMudancaStatus', e.target.checked)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="notificarMudancaStatus" className="ml-2 block text-sm text-gray-900 dark:text-white">
                    Notificar automaticamente mudanças de status
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Aba Notificações */}
          {abaSelecionada === 'notificacoes' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Configurações de Notificações
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="emailAtivo"
                    checked={configuracoes.notificacoes.emailAtivo}
                    onChange={(e) => handleAlterarConfiguracao('notificacoes', 'emailAtivo', e.target.checked)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="emailAtivo" className="ml-2 block text-sm text-gray-900 dark:text-white">
                    Ativar notificações por email
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="notificacaoInApp"
                    checked={configuracoes.notificacoes.notificacaoInApp}
                    onChange={(e) => handleAlterarConfiguracao('notificacoes', 'notificacaoInApp', e.target.checked)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="notificacaoInApp" className="ml-2 block text-sm text-gray-900 dark:text-white">
                    Ativar notificações no aplicativo
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Frequência do Resumo
                  </label>
                  <select
                    value={configuracoes.notificacoes.frequenciaResumo}
                    onChange={(e) => handleAlterarConfiguracao('notificacoes', 'frequenciaResumo', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="diario">Diário</option>
                    <option value="semanal">Semanal</option>
                    <option value="mensal">Mensal</option>
                    <option value="desabilitado">Desabilitado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Horário de Envio do Resumo
                  </label>
                  <input
                    type="time"
                    value={configuracoes.notificacoes.horarioEnvioResumo}
                    onChange={(e) => handleAlterarConfiguracao('notificacoes', 'horarioEnvioResumo', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Aba Segurança */}
          {abaSelecionada === 'seguranca' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Configurações de Segurança
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tempo de Expiração da Sessão (horas)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="168"
                    value={configuracoes.seguranca.tempoExpiracaoSessao}
                    onChange={(e) => handleAlterarConfiguracao('seguranca', 'tempoExpiracaoSessao', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Máximo de Tentativas de Login
                  </label>
                  <input
                    type="number"
                    min="3"
                    max="10"
                    value={configuracoes.seguranca.tentativasLoginMax}
                    onChange={(e) => handleAlterarConfiguracao('seguranca', 'tentativasLoginMax', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tempo de Bloqueio Temporário (minutos)
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="1440"
                    value={configuracoes.seguranca.bloqueioTemporario}
                    onChange={(e) => handleAlterarConfiguracao('seguranca', 'bloqueioTemporario', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="senhaForte"
                    checked={configuracoes.seguranca.exigirSenhaForte}
                    onChange={(e) => handleAlterarConfiguracao('seguranca', 'exigirSenhaForte', e.target.checked)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="senhaForte" className="ml-2 block text-sm text-gray-900 dark:text-white">
                    Exigir senhas fortes (maiúscula, minúscula, número, símbolo)
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="doisFatores"
                    checked={configuracoes.seguranca.autenticacaoDoisFatores}
                    onChange={(e) => handleAlterarConfiguracao('seguranca', 'autenticacaoDoisFatores', e.target.checked)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="doisFatores" className="ml-2 block text-sm text-gray-900 dark:text-white">
                    Habilitar autenticação de dois fatores (2FA)
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Botões de Ação */}
        <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 flex justify-end space-x-3">
          <button
            type="button"
            className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSalvarConfiguracoes}
            disabled={salvando}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            {salvando && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            )}
            {salvando ? 'Salvando...' : 'Salvar Configurações'}
          </button>
        </div>
      </div>
    </LayoutPrincipal>
  );
}