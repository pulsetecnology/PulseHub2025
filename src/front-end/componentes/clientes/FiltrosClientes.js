import React, { useState, useEffect, useCallback } from 'react';
import { usarCorTema } from '../../utils/coresTema';

export default function FiltrosClientes({ onFiltroChange, totalClientes, carregando = false }) {
  const { classes } = usarCorTema();
  const [filtros, setFiltros] = useState({
    busca: '',
    cidade: '',
    status: '',
    tipo: '',
    ordenacao: 'nome',
    visualizacao: 'grid'
  });
  const [mostrarFiltrosAvancados, setMostrarFiltrosAvancados] = useState(false);

  // Debounce para busca
  const [buscaDebounce, setBuscaDebounce] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setBuscaDebounce(filtros.busca);
    }, 300);

    return () => clearTimeout(timer);
  }, [filtros.busca]);

  // Callback para mudanças de filtro
  const handleFiltroChange = useCallback((novosFiltros) => {
    const filtrosAtualizados = { ...filtros, ...novosFiltros };
    setFiltros(filtrosAtualizados);
    onFiltroChange(filtrosAtualizados);
  }, [filtros, onFiltroChange]);

  // Efeito para aplicar busca com debounce
  useEffect(() => {
    if (buscaDebounce !== filtros.busca) {
      handleFiltroChange({ busca: buscaDebounce });
    }
  }, [buscaDebounce]);

  const cidades = [
    'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 
    'Brasília', 'Fortaleza', 'Curitiba', 'Recife', 'Porto Alegre', 'Manaus'
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Meus Clientes ({totalClientes})
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Gerencie sua base de clientes
            </p>
          </div>
          
          {/* Botão adicionar cliente - sempre visível no mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => window.location.href = '/clientes/novo'}
              className={`w-full px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors flex items-center justify-center gap-2`}
              disabled={carregando}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Novo Cliente
            </button>
          </div>
        </div>
        
        {/* Filtros principais - sempre visíveis */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
            {/* Busca genérica */}
            <div className="relative flex-1 max-w-md">
              <label htmlFor="busca-clientes" className="sr-only">
                Buscar clientes por nome, email ou contato
              </label>
              <input
                id="busca-clientes"
                type="text"
                placeholder="Buscar clientes..."
                value={filtros.busca}
                onChange={(e) => setFiltros(prev => ({ ...prev, busca: e.target.value }))}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                disabled={carregando}
                aria-describedby="busca-clientes-desc"
              />
              <div id="busca-clientes-desc" className="sr-only">
                Digite para buscar clientes por nome, razão social, email ou contato
              </div>
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Botão Mais Filtros */}
            <button
              onClick={() => setMostrarFiltrosAvancados(!mostrarFiltrosAvancados)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
              disabled={carregando}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              Mais filtros
              <svg 
                className={`h-4 w-4 transition-transform ${mostrarFiltrosAvancados ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Controles principais */}
          <div className="flex items-center gap-3">
            {/* Ordenação */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                Ordenar:
              </label>
              <select
                value={filtros.ordenacao}
                onChange={(e) => handleFiltroChange({ ordenacao: e.target.value })}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm min-w-[140px]"
                disabled={carregando}
              >
                <option value="nome">Nome</option>
                <option value="data_cadastro">Data de cadastro</option>
                <option value="ultima_compra">Última compra</option>
              </select>
            </div>

            {/* Toggle de visualização */}
            <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => handleFiltroChange({ visualizacao: 'grid' })}
                className={`p-2 rounded ${filtros.visualizacao === 'grid' 
                  ? 'bg-white dark:bg-gray-600 shadow' 
                  : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                } transition-colors`}
                title="Visualização em grade"
                disabled={carregando}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => handleFiltroChange({ visualizacao: 'lista' })}
                className={`p-2 rounded ${filtros.visualizacao === 'lista' 
                  ? 'bg-white dark:bg-gray-600 shadow' 
                  : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                } transition-colors`}
                title="Visualização em lista"
                disabled={carregando}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Botão Novo Cliente - desktop */}
            <div className="hidden sm:block">
              <button
                onClick={() => window.location.href = '/clientes/novo'}
                className={`px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors flex items-center gap-2 whitespace-nowrap`}
                disabled={carregando}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Novo Cliente
              </button>
            </div>
          </div>
        </div>

        {/* Filtros avançados - expansível */}
        {mostrarFiltrosAvancados && (
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* Filtro por cidade */}
              <div>
                <label htmlFor="filtro-cidade" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Cidade
                </label>
                <select
                  id="filtro-cidade"
                  value={filtros.cidade}
                  onChange={(e) => handleFiltroChange({ cidade: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  disabled={carregando}
                  aria-label="Filtrar clientes por cidade"
                >
                  <option value="">Todas as cidades</option>
                  {cidades.map(cidade => (
                    <option key={cidade} value={cidade}>
                      {cidade}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtro por status */}
              <div>
                <label htmlFor="filtro-status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Status
                </label>
                <select
                  id="filtro-status"
                  value={filtros.status}
                  onChange={(e) => handleFiltroChange({ status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  disabled={carregando}
                >
                  <option value="">Todos os status</option>
                  <option value="ativo">Ativo</option>
                  <option value="inativo">Inativo</option>
                </select>
              </div>

              {/* Filtro por tipo */}
              <div>
                <label htmlFor="filtro-tipo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Tipo
                </label>
                <select
                  id="filtro-tipo"
                  value={filtros.tipo}
                  onChange={(e) => handleFiltroChange({ tipo: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  disabled={carregando}
                >
                  <option value="">Todos os tipos</option>
                  <option value="pessoa_fisica">Pessoa Física</option>
                  <option value="pessoa_juridica">Pessoa Jurídica</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Indicador de filtros ativos */}
      {(filtros.busca || filtros.cidade || filtros.status || filtros.tipo) && (
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Filtros ativos:</span>
          {filtros.busca && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Busca: "{filtros.busca}"
              <button
                onClick={() => handleFiltroChange({ busca: '' })}
                className="ml-1 text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100"
              >
                ×
              </button>
            </span>
          )}
          {filtros.cidade && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Cidade: {filtros.cidade}
              <button
                onClick={() => handleFiltroChange({ cidade: '' })}
                className="ml-1 text-green-600 hover:text-green-800 dark:text-green-300 dark:hover:text-green-100"
              >
                ×
              </button>
            </span>
          )}
          {filtros.status && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
              Status: {filtros.status === 'ativo' ? 'Ativo' : 'Inativo'}
              <button
                onClick={() => handleFiltroChange({ status: '' })}
                className="ml-1 text-yellow-600 hover:text-yellow-800 dark:text-yellow-300 dark:hover:text-yellow-100"
              >
                ×
              </button>
            </span>
          )}
          {filtros.tipo && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              Tipo: {filtros.tipo === 'pessoa_fisica' ? 'Pessoa Física' : 'Pessoa Jurídica'}
              <button
                onClick={() => handleFiltroChange({ tipo: '' })}
                className="ml-1 text-purple-600 hover:text-purple-800 dark:text-purple-300 dark:hover:text-purple-100"
              >
                ×
              </button>
            </span>
          )}
          <button
            onClick={() => handleFiltroChange({ busca: '', cidade: '', status: '', tipo: '' })}
            className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
          >
            Limpar todos
          </button>
        </div>
      )}
    </div>
  );
}