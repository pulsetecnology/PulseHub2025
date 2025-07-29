import React, { useState, useEffect } from 'react';
import FiltrosClientes from './FiltrosClientes';
import CardCliente from './CardCliente';
import ServicoClientes from '../../servicos/ServicoClientes';
import { usarCorTema } from '../../utils/coresTema';

export default function ListaClientes() {
  const { classes } = usarCorTema();
  const [clientes, setClientes] = useState([]);
  const [clientesFiltrados, setClientesFiltrados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [filtrosAtivos, setFiltrosAtivos] = useState({
    busca: '',
    cidade: '',
    status: '',
    tipo: '',
    ordenacao: 'nome',
    visualizacao: 'grid'
  });
  const [erro, setErro] = useState(null);

  const servicoClientes = new ServicoClientes();

  // Carregar clientes iniciais
  useEffect(() => {
    carregarClientes();
  }, []);

  const carregarClientes = async () => {
    try {
      setCarregando(true);
      setErro(null);
      
      // Simular delay de carregamento
      setTimeout(() => {
        const clientesCarregados = servicoClientes.listar();
        setClientes(clientesCarregados);
        aplicarFiltros(clientesCarregados, filtrosAtivos);
        setCarregando(false);
      }, 500);
    } catch (error) {
      console.error('Erro ao carregar clientes:', error);
      setErro('Erro ao carregar clientes. Tente novamente.');
      setCarregando(false);
    }
  };

  const aplicarFiltros = (clientesBase, filtros) => {
    try {
      const filtrosValidados = servicoClientes.validarFiltros(filtros);
      const clientesFiltrados = servicoClientes.filtrar(filtrosValidados);
      setClientesFiltrados(clientesFiltrados);
    } catch (error) {
      console.error('Erro ao aplicar filtros:', error);
      setClientesFiltrados(clientesBase);
    }
  };

  const handleFiltroChange = (novosFiltros) => {
    setFiltrosAtivos(novosFiltros);
    aplicarFiltros(clientes, novosFiltros);
  };

  const handleRecarregar = () => {
    carregarClientes();
  };

  if (carregando) {
    return (
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
          <div className="animate-pulse">
            <div className="flex justify-between items-center">
              <div>
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-48 mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
              </div>
              <div className="flex space-x-3">
                <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-48"></div>
                <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
                <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center items-center h-64">
          <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${classes.border}`}></div>
        </div>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="space-y-6">
        <FiltrosClientes 
          onFiltroChange={handleFiltroChange}
          totalClientes={0}
          carregando={false}
        />
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-12 text-center">
          <svg
            className="mx-auto h-12 w-12 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            Erro ao carregar clientes
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {erro}
          </p>
          <button
            onClick={handleRecarregar}
            className={`mt-4 px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors`}
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <FiltrosClientes 
        onFiltroChange={handleFiltroChange}
        totalClientes={clientesFiltrados.length}
        carregando={carregando}
      />

      {/* Lista de clientes */}
      {clientesFiltrados.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-12 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            Nenhum cliente encontrado
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {Object.values(filtrosAtivos).some(filtro => filtro && filtro !== 'nome' && filtro !== 'grid')
              ? 'Tente ajustar os filtros de busca ou limpar os filtros ativos.'
              : 'Comece adicionando seu primeiro cliente.'}
          </p>
          
          {Object.values(filtrosAtivos).some(filtro => filtro && filtro !== 'nome' && filtro !== 'grid') && (
            <button
              onClick={() => handleFiltroChange({
                busca: '',
                cidade: '',
                status: '',
                tipo: '',
                ordenacao: 'nome',
                visualizacao: filtrosAtivos.visualizacao
              })}
              className="mt-4 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Limpar todos os filtros
            </button>
          )}
          
          <div className="mt-4">
            <button
              onClick={() => window.location.href = '/clientes/novo'}
              className={`px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors flex items-center gap-2 mx-auto`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Adicionar primeiro cliente
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Estatísticas rápidas */}
          {clientes.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{clientes.length}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Ativos</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {clientes.filter(c => c.status === 'ativo').length}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Empresas</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {clientes.filter(c => c.tipo === 'pessoa_juridica').length}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pessoas</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {clientes.filter(c => c.tipo === 'pessoa_fisica').length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid/Lista de clientes */}
          <div className={
            filtrosAtivos.visualizacao === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
          }>
            {clientesFiltrados.map(cliente => (
              <CardCliente 
                key={cliente.id} 
                cliente={cliente} 
                visualizacao={filtrosAtivos.visualizacao} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}