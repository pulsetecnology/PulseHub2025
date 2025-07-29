import React, { useState, useEffect } from 'react';
import CardProduto from './CardProduto';
import ServicoProdutos from '../../servicos/ServicoProdutos';
import { usarCorTema } from '../../utils/coresTema';

export default function ListaProdutos() {
  const { classes } = usarCorTema();
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [filtro, setFiltro] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');
  const [visualizacao, setVisualizacao] = useState('grid'); // 'grid' ou 'lista'
  const [ordenacao, setOrdenacao] = useState('data'); // 'nome', 'preco-asc', 'preco-desc', 'data'
  const [mostrarFiltrosAvancados, setMostrarFiltrosAvancados] = useState(false);
  // const [statusFiltro, setStatusFiltro] = useState('');
  // const [ordenacao, setOrdenacao] = useState('nome');
  // const [visualizacao, setVisualizacao] = useState('grid'); // 'grid' ou 'lista'
  // const [paginaAtual, setPaginaAtual] = useState(1);
  // const [itensPorPagina] = useState(12);

  const servicoProdutos = new ServicoProdutos();

  // Carregar produtos do serviço
  useEffect(() => {
    const carregarProdutos = () => {
      setCarregando(true);
      
      // Simular delay de carregamento
      setTimeout(() => {
        const produtosCarregados = servicoProdutos.filtrar({
          busca: filtro,
          categoria: categoriaFiltro,
          ordenacao: 'data' // Ordenar por data de atualização
        });
        
        setProdutos(produtosCarregados);
        setCarregando(false);
      }, 500);
    };

    carregarProdutos();
  }, [filtro, categoriaFiltro]);

  const produtosFiltrados = produtos.filter(produto => {
    const matchNome = produto.nome.toLowerCase().includes(filtro.toLowerCase());
    const matchCategoria = categoriaFiltro === '' || produto.categoria === categoriaFiltro;
    return matchNome && matchCategoria;
  });

  // Ordenar produtos (produtos em destaque sempre primeiro)
  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    // Primeiro critério: produtos em destaque
    if (a.destaque && !b.destaque) return -1;
    if (!a.destaque && b.destaque) return 1;
    
    // Segundo critério: ordenação selecionada
    switch (ordenacao) {
      case 'nome':
        return a.nome.localeCompare(b.nome);
      case 'preco-asc':
        return a.preco - b.preco;
      case 'preco-desc':
        return b.preco - a.preco;
      case 'data':
        return new Date(b.dataAtualizacao) - new Date(a.dataAtualizacao);
      default:
        return 0;
    }
  });

  const categorias = servicoProdutos.obterCategorias();

  if (carregando) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${classes.border}`}></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho com filtros */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Meus Produtos ({produtosOrdenados.length})
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gerencie seu catálogo de produtos
              </p>
            </div>
            
            {/* Botão Novo Produto - mobile */}
            <div className="sm:hidden">
              <button
                onClick={() => window.location.href = '/produtos/novo'}
                className={`w-full px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors flex items-center justify-center gap-2`}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Novo Produto
              </button>
            </div>
          </div>

          {/* Filtros principais - sempre visíveis */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
              {/* Busca genérica */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={filtro}
                  onChange={(e) => setFiltro(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
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
                  value={ordenacao}
                  onChange={(e) => setOrdenacao(e.target.value)}
                  className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm min-w-[140px]"
                >
                  <option value="data">Mais recentes</option>
                  <option value="nome">Nome</option>
                  <option value="preco-asc">Menor preço</option>
                  <option value="preco-desc">Maior preço</option>
                </select>
              </div>

              {/* Toggle de visualização */}
              <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setVisualizacao('grid')}
                  className={`p-2 rounded ${visualizacao === 'grid' 
                    ? 'bg-white dark:bg-gray-600 shadow' 
                    : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                  } transition-colors`}
                  title="Visualização em grade"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setVisualizacao('lista')}
                  className={`p-2 rounded ${visualizacao === 'lista' 
                    ? 'bg-white dark:bg-gray-600 shadow' 
                    : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                  } transition-colors`}
                  title="Visualização em lista"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Botão Novo Produto - desktop */}
              <div className="hidden sm:block">
                <button
                  onClick={() => window.location.href = '/produtos/novo'}
                  className={`px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors flex items-center gap-2 whitespace-nowrap`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Novo Produto
                </button>
              </div>
            </div>
          </div>

          {/* Filtros avançados - expansível */}
          {mostrarFiltrosAvancados && (
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {/* Filtro por categoria */}
                <div>
                  <label htmlFor="filtro-categoria" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Categoria
                  </label>
                  <select
                    id="filtro-categoria"
                    value={categoriaFiltro}
                    onChange={(e) => setCategoriaFiltro(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Todas as categorias</option>
                    {categorias.map(categoria => (
                      <option key={categoria} value={categoria}>
                        {categoria}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Indicador de filtros ativos */}
          {(filtro || categoriaFiltro) && (
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Filtros ativos:</span>
              {filtro && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Busca: "{filtro}"
                  <button
                    onClick={() => setFiltro('')}
                    className="ml-1 text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100"
                  >
                    ×
                  </button>
                </span>
              )}
              {categoriaFiltro && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Categoria: {categoriaFiltro}
                  <button
                    onClick={() => setCategoriaFiltro('')}
                    className="ml-1 text-green-600 hover:text-green-800 dark:text-green-300 dark:hover:text-green-100"
                  >
                    ×
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setFiltro('');
                  setCategoriaFiltro('');
                }}
                className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
              >
                Limpar todos
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lista de produtos */}
      {produtosOrdenados.length === 0 ? (
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
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            Nenhum produto encontrado
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {filtro || categoriaFiltro 
              ? 'Tente ajustar os filtros de busca.' 
              : 'Comece adicionando seu primeiro produto.'}
          </p>
        </div>
      ) : (
        <div className={
          visualizacao === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
        }>
          {produtosOrdenados.map(produto => (
            <CardProduto key={produto.id} produto={produto} visualizacao={visualizacao} />
          ))}
        </div>
      )}
    </div>
  );
}
