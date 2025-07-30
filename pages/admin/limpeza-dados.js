/**
 * Página de Limpeza de Dados
 * 
 * Interface administrativa para executar a limpeza completa dos dados
 * preparando o sistema para a implementação das vinculações.
 */

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';

const LimpezaDados = () => {
  const router = useRouter();
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);
  const [executando, setExecutando] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(null);
  const [motivo, setMotivo] = useState('');
  const [confirmacao, setConfirmacao] = useState('');
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      setLoading(true);
      setErro(null);
      
      const response = await fetch('/api/admin/limpeza', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // TODO: Adicionar token de autenticação
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.mensagem || 'Erro ao carregar dados');
      }

      const data = await response.json();
      setDados(data);
      
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      setErro(error.message);
    } finally {
      setLoading(false);
    }
  };

  const executarLimpeza = async () => {
    if (!motivo.trim() || motivo.trim().length < 10) {
      setErro('Motivo deve ter pelo menos 10 caracteres');
      return;
    }

    if (confirmacao !== 'CONFIRMAR LIMPEZA') {
      setErro('Digite exatamente "CONFIRMAR LIMPEZA" para confirmar');
      return;
    }

    try {
      setExecutando(true);
      setErro(null);
      setResultado(null);
      
      const response = await fetch('/api/admin/limpeza', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          confirmar: true,
          motivo: motivo.trim()
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.mensagem || 'Erro ao executar limpeza');
      }

      setResultado(data);
      setMostrarConfirmacao(false);
      setMotivo('');
      setConfirmacao('');
      
      // Recarregar dados após limpeza
      await carregarDados();
      
    } catch (error) {
      console.error('Erro ao executar limpeza:', error);
      setErro(error.message);
    } finally {
      setExecutando(false);
    }
  };

  const iniciarLimpeza = () => {
    if (!dados?.resumo?.temDadosParaLimpar) {
      setErro('Não há dados para limpar');
      return;
    }
    
    setMostrarConfirmacao(true);
    setErro(null);
  };

  const cancelarLimpeza = () => {
    setMostrarConfirmacao(false);
    setMotivo('');
    setConfirmacao('');
    setErro(null);
  };

  if (loading) {
    return (
      <LayoutPrincipal>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Carregando dados...</span>
        </div>
      </LayoutPrincipal>
    );
  }

  return (
    <LayoutPrincipal>
      <Head>
        <title>Limpeza de Dados - PulseHub Admin</title>
        <meta name="description" content="Limpeza de dados para preparação do sistema de vinculações" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Limpeza de Dados
            </h1>
            <p className="text-gray-600">
              Preparação para implementação do sistema de vinculação Fornecedor-Representante
            </p>
          </div>

          {/* Alertas */}
          {erro && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Erro</h3>
                  <p className="text-sm text-red-700 mt-1">{erro}</p>
                </div>
              </div>
            </div>
          )}

          {resultado && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Limpeza Concluída</h3>
                  <p className="text-sm text-green-700 mt-1">{resultado.mensagem}</p>
                  <div className="mt-2 text-xs text-green-600">
                    <p>Registros removidos: {resultado.estatisticas?.removidos?.total || 0}</p>
                    <p>Backup salvo em: {resultado.resultado?.backup}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Aviso de Ambiente */}
          <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Atenção</h3>
                <p className="text-sm text-yellow-700 mt-1">
                  Esta operação remove TODOS os dados (produtos, clientes, categorias, pedidos, notificações) 
                  mantendo apenas os usuários. Ambiente atual: <strong>{dados?.ambiente}</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Estatísticas Atuais */}
          {dados && (
            <div className="mb-8 bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Dados Atuais no Sistema</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{dados.dados.produtos}</div>
                    <div className="text-sm text-gray-500">Produtos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{dados.dados.clientes}</div>
                    <div className="text-sm text-gray-500">Clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{dados.dados.pedidos}</div>
                    <div className="text-sm text-gray-500">Pedidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{dados.dados.categorias}</div>
                    <div className="text-sm text-gray-500">Categorias</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{dados.dados.notificacoes}</div>
                    <div className="text-sm text-gray-500">Notificações</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">{dados.dados.itensPedido}</div>
                    <div className="text-sm text-gray-500">Itens de Pedido</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-600">{dados.dados.usuarios}</div>
                    <div className="text-sm text-gray-500">Usuários (mantidos)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{dados.resumo.totalRegistros}</div>
                    <div className="text-sm text-gray-500">Total a Remover</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Ações */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Ações de Limpeza</h2>
            </div>
            <div className="p-6">
              {!mostrarConfirmacao ? (
                <div className="space-y-4">
                  <button
                    onClick={carregarDados}
                    disabled={loading}
                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {loading ? 'Carregando...' : 'Atualizar Dados'}
                  </button>
                  
                  <button
                    onClick={iniciarLimpeza}
                    disabled={!dados?.resumo?.temDadosParaLimpar || executando}
                    className="w-full sm:w-auto ml-0 sm:ml-3 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {dados?.resumo?.temDadosParaLimpar ? 'Executar Limpeza' : 'Nenhum Dado para Limpar'}
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="motivo" className="block text-sm font-medium text-gray-700 mb-2">
                      Motivo da Limpeza *
                    </label>
                    <textarea
                      id="motivo"
                      value={motivo}
                      onChange={(e) => setMotivo(e.target.value)}
                      placeholder="Descreva o motivo para executar a limpeza de dados (mínimo 10 caracteres)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      required
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Caracteres: {motivo.length}/10 (mínimo)
                    </p>
                  </div>

                  <div>
                    <label htmlFor="confirmacao" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirmação *
                    </label>
                    <input
                      type="text"
                      id="confirmacao"
                      value={confirmacao}
                      onChange={(e) => setConfirmacao(e.target.value)}
                      placeholder='Digite exatamente: CONFIRMAR LIMPEZA'
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Digite exatamente "CONFIRMAR LIMPEZA" para confirmar
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={executarLimpeza}
                      disabled={executando || motivo.trim().length < 10 || confirmacao !== 'CONFIRMAR LIMPEZA'}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {executando ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white inline" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Executando Limpeza...
                        </>
                      ) : (
                        'Confirmar e Executar'
                      )}
                    </button>
                    
                    <button
                      onClick={cancelarLimpeza}
                      disabled={executando}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Informações Importantes</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-1.5 w-1.5 bg-gray-400 rounded-full mt-2 mr-3"></span>
                Esta operação é <strong>irreversível</strong> e remove todos os dados listados acima
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-1.5 w-1.5 bg-gray-400 rounded-full mt-2 mr-3"></span>
                Um backup completo é criado automaticamente antes da limpeza
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-1.5 w-1.5 bg-gray-400 rounded-full mt-2 mr-3"></span>
                Os usuários (fornecedores e representantes) são mantidos no sistema
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-1.5 w-1.5 bg-gray-400 rounded-full mt-2 mr-3"></span>
                Esta limpeza prepara o sistema para a implementação das vinculações
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-1.5 w-1.5 bg-gray-400 rounded-full mt-2 mr-3"></span>
                Operação disponível apenas em ambiente de desenvolvimento
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default LimpezaDados;