import React, { useState, useEffect } from 'react';
import FiltrosCatalogo from './FiltrosCatalogo';
import CardProdutoCatalogo from './CardProdutoCatalogo';
import ServicoProdutos from '../../servicos/ServicoProdutos';
import { usarCorTema } from '../../utils/coresTema';

export default function CatalogoProdutos() {
  const { classes } = usarCorTema();
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [filtrosAtivos, setFiltrosAtivos] = useState({
    busca: '',
    categoria: '',
    precoMin: '',
    precoMax: '',
    disponivel: '',
    ordenacao: 'nome',
    visualizacao: 'grid'
  });
  const [erro, setErro] = useState(null);

  const servicoProdutos = new ServicoProdutos();

  // Carregar produtos iniciais
  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    try {
      setCarregando(true);
      setErro(null);
      
      // Simular delay de carregamento
      setTimeout(() => {
        const produtosCarregados = servicoProdutos.listar();
        setProdutos(produtosCarregados);
        aplicarFiltros(produtosCarregados, filtrosAtivos);
        setCarregando(false);
      }, 500);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      setErro('Erro ao carregar catálogo. Tente novamente.');
      setCarregando(false);
    }
  };

  const aplicarFiltros = (produtosBase, filtros) => {
    try {
      let produtosFiltrados = [...produtosBase];

      // Filtro por busca
      if (filtros.busca) {
        const termoBusca = filtros.busca.toLowerCase().trim();
        produtosFiltrados = produtosFiltrados.filter(produto => 
          produto.nome.toLowerCase().includes(termoBusca) ||
          produto.descricao.toLowerCase().includes(termoBusca) ||
          produto.sku.toLowerCase().includes(termoBusca)
        );
      }

      // Filtro por categoria
      if (filtros.categoria) {
        produtosFiltrados = produtosFiltrados.filter(produto => 
          produto.categoria === filtros.categoria
        );
      }

      // Filtro por preço mínimo
      if (filtros.precoMin) {
        produtosFiltrados = produtosFiltrados.filter(produto => 
          produto.preco >= parseFloat(filtros.precoMin)
        );
      }

      // Filtro por preço máximo
      if (filtros.precoMax) {
        produtosFiltrados = produtosFiltrados.filter(produto => 
          produto.preco <= parseFloat(filtros.precoMax)
        );
      }

      // Filtro por disponibilidade
      if (filtros.disponivel) {
        produtosFiltrados = produtosFiltrados.filter(produto => 
          filtros.disponivel === 'sim' ? produto.disponivel : !produto.disponivel
        );
      }

      // Ordenação
      produtosFiltrados = ordenarProdutos(produtosFiltrados, filtros.ordenacao);

      setProdutosFiltrados(produtosFiltrados);
    } catch (error) {
      console.error('Erro ao aplicar filtros:', error);
      setProdutosFiltrados(produtosBase);
    }
  };

  const ordenarProdutos = (produtos, criterio) => {
    return [...produtos].sort((a, b) => {
      switch (criterio) {
        case 'nome':
          return a.nome.localeCompare(b.nome);
        case 'preco_asc':
          return a.preco - b.preco;
        case 'preco_desc':
          return b.preco - a.preco;
        case 'categoria':
          return a.categoria.localeCompare(b.categoria);
        case 'disponibilidade':
          return b.disponivel - a.disponivel;
        default:
          return 0;
      }
    });
  };

  const handleFiltroChange = (novosFiltros) => {
    setFiltrosAtivos(novosFiltros);
    aplicarFiltros(produtos, novosFiltros);
  };

  const handleRecarregar = () => {
    carregarProdutos();
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
        <FiltrosCatalogo 
          onFiltroChange={handleFiltroChange}
          totalProdutos={0}
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
            Erro ao carregar catálogo
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
      <FiltrosCatalogo 
        onFiltroChange={handleFiltroChange}
        totalProdutos={produtosFiltrados.length}
        carregando={carregando}
      />

      {/* Catálogo de produtos */}
      {produtosFiltrados.length === 0 ? (
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
            {Object.values(filtrosAtivos).some(filtro => filtro && filtro !== 'nome' && filtro !== 'grid')
              ? 'Tente ajustar os filtros de busca ou limpar os filtros ativos.'
              : 'Não há produtos disponíveis no catálogo no momento.'}
          </p>
          
          {Object.values(filtrosAtivos).some(filtro => filtro && filtro !== 'nome' && filtro !== 'grid') && (
            <button
              onClick={() => handleFiltroChange({
                busca: '',
                categoria: '',
                precoMin: '',
                precoMax: '',
                disponivel: '',
                ordenacao: 'nome',
                visualizacao: filtrosAtivos.visualizacao
              })}
              className="mt-4 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Limpar todos os filtros
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Estatísticas rápidas */}
          {produtos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{produtos.length}</p>
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
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Disponíveis</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {produtos.filter(p => p.disponivel).length}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Categorias</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {[...new Set(produtos.map(p => p.categoria))].length}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Preço médio</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(produtos.reduce((acc, p) => acc + p.preco, 0) / produtos.length)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid/Lista de produtos */}
          <div className={
            filtrosAtivos.visualizacao === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }>
            {produtosFiltrados.map(produto => (
              <CardProdutoCatalogo 
                key={produto.id} 
                produto={produto} 
                visualizacao={filtrosAtivos.visualizacao} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}