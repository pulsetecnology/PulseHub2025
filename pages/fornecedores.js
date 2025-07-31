import React, { useState, useEffect } from 'react';
import LayoutPrincipal from '../src/front-end/componentes/layout/LayoutPrincipal';
import ServicoVinculacoesReal from '../src/front-end/servicos/ServicoVinculacoesReal';
import { obterPapelUsuario, PAPEIS } from '../src/front-end/utils/papelUsuario';
import { usarCorTema } from '../src/front-end/utils/coresTema';

export default function FornecedoresPage() {
  const [vinculacoes, setVinculacoes] = useState([]);
  const [convitesRecebidos, setConvitesRecebidos] = useState([]);
  const [fornecedoresDisponiveis, setFornecedoresDisponiveis] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [abaSelecionada, setAbaSelecionada] = useState('vinculacoes');
  const [filtros, setFiltros] = useState({ busca: '', segmento: '' });
  const [mostrarModalConvite, setMostrarModalConvite] = useState(false);
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState(null);
  const [mensagemConvite, setMensagemConvite] = useState('');
  const [servicoVinculacoes, setServicoVinculacoes] = useState(null);
  
  const { classes } = usarCorTema();
  const papelUsuario = obterPapelUsuario();

  useEffect(() => {
    // Inicializar serviço apenas no cliente
    if (typeof window !== 'undefined') {
      setServicoVinculacoes(ServicoVinculacoesReal);
      carregarDados(ServicoVinculacoesReal);
    }
  }, []);

  const carregarDados = async (servico = servicoVinculacoes) => {
    if (!servico) return;
    
    setCarregando(true);
    
    // Simular ID do usuário logado (usando ID real do primeiro representante)
    const usuarioId = '41b1c52e-09b3-495c-9499-621552d0a20b';
    
    // Carregar cada API independentemente para evitar que uma falha impeça as outras
    const promises = [
      // Carregar vinculações do representante
      servico.obterVinculacoesPorRepresentante(usuarioId)
        .then(data => setVinculacoes(data))
        .catch(error => {
          console.error('Erro ao carregar vinculações:', error);
          setVinculacoes([]);
        }),
      
      // Carregar convites recebidos
      servico.obterConvitesRecebidos(usuarioId)
        .then(data => setConvitesRecebidos(data))
        .catch(error => {
          console.error('Erro ao carregar convites:', error);
          setConvitesRecebidos([]);
        }),
      
      // Carregar fornecedores disponíveis
      servico.buscarFornecedoresDisponiveis()
        .then(data => setFornecedoresDisponiveis(data))
        .catch(error => {
          console.error('Erro ao carregar fornecedores:', error);
          setFornecedoresDisponiveis([]);
        })
    ];
    
    await Promise.allSettled(promises);
    setCarregando(false);
  };

  const handleEnviarConvite = async (fornecedor) => {
    if (!servicoVinculacoes) return;
    
    try {
      const dadosConvite = {
        tipo: 'representante_para_fornecedor',
        remetenteId: '41b1c52e-09b3-495c-9499-621552d0a20b',
        remetenteNome: 'Representante 1',
        destinatarioId: fornecedor.id,
        destinatarioNome: fornecedor.nomeFantasia || fornecedor.razaoSocial || fornecedor.nome,
        destinatarioEmail: fornecedor.usuario?.email || fornecedor.email,
        mensagem: mensagemConvite || 'Tenho interesse em representar seus produtos em minha região.'
      };
      
      await servicoVinculacoes.enviarConvite(dadosConvite);
      setMostrarModalConvite(false);
      setFornecedorSelecionado(null);
      setMensagemConvite('');
      
      // Recarregar dados
      carregarDados();
      
    } catch (error) {
      console.error('Erro ao enviar convite:', error);
      alert(error.message || 'Erro ao enviar convite');
    }
  };

  const handleResponderConvite = async (conviteId, acao) => {
    if (!servicoVinculacoes) return;
    
    try {
      if (acao === 'aceitar') {
        await servicoVinculacoes.aceitarConvite(conviteId);
      } else {
        await servicoVinculacoes.recusarConvite(conviteId);
      }
      carregarDados();
    } catch (error) {
      console.error('Erro ao responder convite:', error);
      alert(error.message || 'Erro ao responder convite');
    }
  };

  const vinculacoesFiltradas = vinculacoes.filter(vinculacao => {
    const matchBusca = !filtros.busca || 
      vinculacao.fornecedorNome.toLowerCase().includes(filtros.busca.toLowerCase());
    
    return matchBusca;
  });

  const fornecedoresFiltrados = fornecedoresDisponiveis.filter(fornecedor => {
    const nome = fornecedor.nomeFantasia || fornecedor.razaoSocial || fornecedor.nome || '';
    const email = fornecedor.usuario?.email || fornecedor.email || '';
    const segmento = fornecedor.segmento || '';
    
    const matchBusca = !filtros.busca || 
      nome.toLowerCase().includes(filtros.busca.toLowerCase()) ||
      email.toLowerCase().includes(filtros.busca.toLowerCase()) ||
      segmento.toLowerCase().includes(filtros.busca.toLowerCase());
    
    const matchSegmento = !filtros.segmento || fornecedor.segmento === filtros.segmento;
    
    return matchBusca && matchSegmento;
  });

  if (papelUsuario !== PAPEIS.REPRESENTANTE && papelUsuario !== PAPEIS.ADMINISTRADOR) {
    return (
      <LayoutPrincipal titulo="Acesso Negado">
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            Esta página é exclusiva para representantes.
          </p>
        </div>
      </LayoutPrincipal>
    );
  }

  return (
    <LayoutPrincipal 
      titulo="Fornecedores" 
      subtitulo="Gerencie suas parcerias com fornecedores e explore novas oportunidades"
    >
      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Fornecedores Vinculados</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{vinculacoes.length}</p>
            </div>
            <div className={`p-3 ${classes.bgLight} ${classes.bgLightDark} rounded-full`}>
              <svg className={`h-6 w-6 ${classes.text} ${classes.textDark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Convites Pendentes</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{convitesRecebidos.length}</p>
            </div>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full">
              <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Vendas Realizadas</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                R$ {vinculacoes.reduce((total, v) => total + v.estatisticas.valorTotalVendas, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pedidos Realizados</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {vinculacoes.reduce((total, v) => total + v.estatisticas.pedidosRealizados, 0)}
              </p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Navegação por abas */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setAbaSelecionada('vinculacoes')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                abaSelecionada === 'vinculacoes'
                  ? `${classes.border} ${classes.text} ${classes.textDark}`
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Fornecedores Vinculados ({vinculacoes.length})
            </button>
            <button
              onClick={() => setAbaSelecionada('convites')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                abaSelecionada === 'convites'
                  ? `${classes.border} ${classes.text} ${classes.textDark}`
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Convites Recebidos ({convitesRecebidos.length})
            </button>
            <button
              onClick={() => setAbaSelecionada('buscar')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                abaSelecionada === 'buscar'
                  ? `${classes.border} ${classes.text} ${classes.textDark}`
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Buscar Fornecedores
            </button>
          </nav>
        </div>

        {/* Filtros */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar por nome, email ou segmento..."
                value={filtros.busca}
                onChange={(e) => setFiltros(prev => ({ ...prev, busca: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            {abaSelecionada === 'buscar' && (
              <div>
                <select
                  value={filtros.segmento}
                  onChange={(e) => setFiltros(prev => ({ ...prev, segmento: e.target.value }))}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Todos os segmentos</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Eletrônicos">Eletrônicos</option>
                  <option value="Casa & Jardim">Casa & Jardim</option>
                  <option value="Moda">Moda</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Conteúdo das abas */}
        <div className="p-6">
          {carregando ? (
            <div className="flex justify-center py-12">
              <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${classes.border}`}></div>
            </div>
          ) : (
            <>
              {/* Aba Vinculações */}
              {abaSelecionada === 'vinculacoes' && (
                <div className="space-y-4">
                  {vinculacoesFiltradas.length === 0 ? (
                    <div className="text-center py-12">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Nenhum fornecedor vinculado</h3>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {filtros.busca ? 'Tente ajustar os filtros de busca.' : 'Comece buscando fornecedores para estabelecer parcerias.'}
                      </p>
                    </div>
                  ) : (
                    vinculacoesFiltradas.map(vinculacao => (
                      <div key={vinculacao.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {vinculacao.fornecedorNome}
                              </h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                vinculacao.status === 'ativo' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              }`}>
                                {vinculacao.status === 'ativo' ? 'Ativo' : 'Inativo'}
                              </span>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Pedidos Realizados</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                  {vinculacao.estatisticas.pedidosRealizados}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Valor Total Vendas</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                  R$ {vinculacao.estatisticas.valorTotalVendas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Vinculado em</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                  {new Date(vinculacao.dataVinculacao).toLocaleDateString('pt-BR')}
                                </p>
                              </div>
                            </div>
                            
                            {vinculacao.configuracoes.comissaoPersonalizada && (
                              <div className="mb-2">
                                <span className="text-xs text-gray-500 dark:text-gray-400">Comissão: </span>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                  {vinculacao.configuracoes.comissaoPersonalizada}%
                                </span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex gap-2">
                            <button
                              onClick={() => window.location.href = '/catalogo'}
                              className={`px-3 py-2 text-sm font-medium text-white ${classes.bg} ${classes.bgHover} rounded-lg transition-colors`}
                            >
                              Ver Produtos
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Aba Convites */}
              {abaSelecionada === 'convites' && (
                <div className="space-y-4">
                  {convitesRecebidos.length === 0 ? (
                    <div className="text-center py-12">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Nenhum convite pendente</h3>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Você não possui convites de fornecedores no momento.
                      </p>
                    </div>
                  ) : (
                    convitesRecebidos.map(convite => (
                      <div key={convite.id} className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                              Convite de {convite.remetenteNome}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                              {convite.mensagem}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                              <span>Enviado em: {new Date(convite.dataEnvio).toLocaleDateString('pt-BR')}</span>
                              <span>Expira em: {new Date(convite.dataExpiracao).toLocaleDateString('pt-BR')}</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleResponderConvite(convite.id, 'aceitar')}
                              className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                            >
                              Aceitar
                            </button>
                            <button
                              onClick={() => handleResponderConvite(convite.id, 'recusar')}
                              className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors"
                            >
                              Recusar
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Aba Buscar */}
              {abaSelecionada === 'buscar' && (
                <div className="space-y-4">
                  {fornecedoresFiltrados.length === 0 ? (
                    <div className="text-center py-12">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Nenhum fornecedor encontrado</h3>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Tente ajustar os filtros de busca.
                      </p>
                    </div>
                  ) : (
                    fornecedoresFiltrados.map(fornecedor => (
                      <div key={fornecedor.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {fornecedor.nomeFantasia || fornecedor.razaoSocial || fornecedor.nome}
                              </h3>
                              <div className="flex items-center gap-1">
                                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                  {fornecedor.avaliacaoMedia || '4.5'}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                              {fornecedor.usuario?.email || fornecedor.email} • {fornecedor.telefone}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                              🏢 {fornecedor.segmento} • {fornecedor._count?.vinculacoes || fornecedor.representantesAtivos || 0} representantes ativos
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {(fornecedor._count?.produtos > 0 ? 
                                [`${fornecedor._count.produtos} produtos`] : 
                                (fornecedor.produtos || ['Produtos disponíveis'])
                              ).map((produto, index) => (
                                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs font-medium">
                                  {produto}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <button
                              onClick={() => {
                                setFornecedorSelecionado(fornecedor);
                                setMostrarModalConvite(true);
                              }}
                              className={`px-4 py-2 text-sm font-medium text-white ${classes.bg} ${classes.bgHover} rounded-lg transition-colors`}
                            >
                              Solicitar Parceria
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Modal de Convite */}
      {mostrarModalConvite && fornecedorSelecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Solicitar Parceria com {fornecedorSelecionado.nome}
              </h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensagem da Solicitação
                </label>
                <textarea
                  value={mensagemConvite}
                  onChange={(e) => setMensagemConvite(e.target.value)}
                  placeholder="Descreva seu interesse em representar os produtos desta empresa..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setMostrarModalConvite(false);
                    setFornecedorSelecionado(null);
                    setMensagemConvite('');
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => handleEnviarConvite(fornecedorSelecionado)}
                  className={`px-4 py-2 text-sm font-medium text-white ${classes.bg} ${classes.bgHover} rounded-lg transition-colors`}
                >
                  Enviar Solicitação
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </LayoutPrincipal>
  );
}