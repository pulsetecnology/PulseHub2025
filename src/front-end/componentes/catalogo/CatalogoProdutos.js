import React, { useState, useEffect } from 'react';
import CardProdutoCatalogo from './CardProdutoCatalogo';
import ServicoProdutos from '../../servicos/ServicoProdutos';
import { obterPapelUsuario, PAPEIS } from '../../utils/papelUsuario';
import InputPreco from '../comum/InputPreco';

export default function CatalogoProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [filtros, setFiltros] = useState({
    categoria: '',
    precoMin: '',
    precoMax: '',
    busca: '',
    fornecedor: ''
  });
  const [ordenacao, setOrdenacao] = useState('nome');
  const [visualizacao, setVisualizacao] = useState('grid'); // grid ou lista
  const [agruparPorFornecedor, setAgruparPorFornecedor] = useState(false);
  const [filtrosVisiveis, setFiltrosVisiveis] = useState(false);
  const [papelUsuario, setPapelUsuario] = useState(PAPEIS.REPRESENTANTE);

  // Carregar produtos reais do ServicoProdutos
  useEffect(() => {
    const carregarProdutos = async () => {
      setCarregando(true);
      
      // Obter papel do usuário
      const papel = obterPapelUsuario();
      setPapelUsuario(papel);
      
      // Simular delay de carregamento
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Carregar produtos do serviço
      let produtosCarregados = ServicoProdutos.filtrar({});
      
      // Filtrar produtos baseado no papel do usuário
      if (papel === PAPEIS.FORNECEDOR) {
        // Fornecedor vê apenas seus próprios produtos
        const usuarioAtual = JSON.parse(localStorage.getItem('usuario') || '{}');
        produtosCarregados = produtosCarregados.filter(produto => 
          produto.fornecedor === usuarioAtual.nome || produto.fornecedor === usuarioAtual.empresa
        );
      }
      // Representantes e Administradores veem todos os produtos
      
      // Converter formato para compatibilidade com o catálogo
      const produtosFormatados = produtosCarregados.map(produto => ({
        ...produto,
        avaliacoes: produto.avaliacoes || 4.0 + Math.random() * 1, // Simular avaliações
        totalAvaliacoes: produto.totalAvaliacoes || Math.floor(Math.random() * 50) + 5,
        cores: produto.cores || ['Padrão'],
        tamanhos: produto.tamanhos || ['Único']
      }));
      
      setProdutos(produtosFormatados);
      setCarregando(false);
    };

    carregarProdutos();
  }, []);

  // Filtrar produtos
  const produtosFiltrados = produtos.filter(produto => {
    const matchBusca = produto.nome.toLowerCase().includes(filtros.busca.toLowerCase()) ||
                      produto.descricao.toLowerCase().includes(filtros.busca.toLowerCase());
    const matchCategoria = !filtros.categoria || produto.categoria === filtros.categoria;
    const matchPrecoMin = !filtros.precoMin || produto.preco >= parseFloat(filtros.precoMin);
    const matchPrecoMax = !filtros.precoMax || produto.preco <= parseFloat(filtros.precoMax);
    const matchFornecedor = !filtros.fornecedor || produto.fornecedor === filtros.fornecedor;
    
    return matchBusca && matchCategoria && matchPrecoMin && matchPrecoMax && matchFornecedor;
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
      case 'avaliacao':
        return b.avaliacoes - a.avaliacoes;
      default:
        return 0;
    }
  });

  const produtosAgrupados = produtosOrdenados.reduce((acc, produto) => {
    const fornecedor = produto.fornecedor || 'Outros';
    if (!acc[fornecedor]) {
      acc[fornecedor] = [];
    }
    acc[fornecedor].push(produto);
    return acc;
  }, {});

  const categorias = ServicoProdutos.obterCategorias();
  const fornecedores = ServicoProdutos.obterFornecedores();

  const handleFiltroChange = (campo, valor) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const limparFiltros = () => {
    setFiltros({
      categoria: '',
      precoMin: '',
      precoMax: '',
      busca: '',
      fornecedor: ''
    });
  };

  if (carregando) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Barra de busca e filtros */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Filtros</h2>
          <button 
            onClick={() => setFiltrosVisiveis(!filtrosVisiveis)}
            className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
          >
            {filtrosVisiveis ? 'Ocultar Filtros' : 'Mostrar Filtros'}
          </button>
        </div>

        {filtrosVisiveis && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            {/* Busca */}
            <div className="md:col-span-1 lg:col-span-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Buscar produtos
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={filtros.busca}
                  onChange={(e) => handleFiltroChange('busca', e.target.value)}
                  placeholder="Nome ou descrição..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Categoria */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Categoria
              </label>
              <select
                value={filtros.categoria}
                onChange={(e) => handleFiltroChange('categoria', e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Todas</option>
                {categorias.map(categoria => (
                  <option key={categoria} value={categoria}>{categoria}</option>
                ))}
              </select>
            </div>

            {/* Fornecedor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Fornecedor
              </label>
              <select
                value={filtros.fornecedor}
                onChange={(e) => handleFiltroChange('fornecedor', e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Todos</option>
                {fornecedores.map(fornecedor => (
                  <option key={fornecedor} value={fornecedor}>{fornecedor}</option>
                ))}
              </select>
            </div>

            {/* Preço */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preço Mín.
                </label>
                <InputPreco
                  value={filtros.precoMin}
                  onChange={(valor) => handleFiltroChange('precoMin', valor)}
                  placeholder="0,00"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preço Máx.
                </label>
                <InputPreco
                  value={filtros.precoMax}
                  onChange={(valor) => handleFiltroChange('precoMax', valor)}
                  placeholder="1.000,00"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Botões de ação */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={limparFiltros}
            className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            Limpar filtros
          </button>

          <div className="flex items-center space-x-4">
            {/* Agrupar por Fornecedor */}
            <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                checked={agruparPorFornecedor}
                onChange={(e) => setAgruparPorFornecedor(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2">Agrupar por fornecedor</span>
            </label>

            {/* Ordenação */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Ordenar por:
              </label>
              <select
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value)}
                className="px-3 py-1 pr-10 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
              >
                <option value="nome">Nome</option>
                <option value="preco-asc">Menor preço</option>
                <option value="preco-desc">Maior preço</option>
                <option value="avaliacao">Melhor avaliação</option>
              </select>
            </div>

            {/* Visualização */}
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
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              {papelUsuario === PAPEIS.FORNECEDOR ? 'Meus Produtos no Catálogo' : 'Catálogo de Produtos'} ({produtosOrdenados.length})
            </h2>
            {papelUsuario === PAPEIS.FORNECEDOR && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Visualização de como seus produtos aparecem para os representantes
              </p>
            )}
          </div>
          {filtros.busca && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Resultados para "{filtros.busca}"
            </p>
          )}
        </div>

        {produtosOrdenados.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              Nenhum produto encontrado
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Tente ajustar os filtros ou buscar por outros termos.
            </p>
          </div>
        ) : (
          agruparPorFornecedor ? (
            Object.keys(produtosAgrupados).map(fornecedor => (
              <div key={fornecedor} className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 border-b pb-2">{fornecedor}</h2>
                <div className={
                  visualizacao === 'grid' 
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                    : 'space-y-4'
                }>
                  {produtosAgrupados[fornecedor].map(produto => (
                    <CardProdutoCatalogo 
                      key={produto.id} 
                      produto={produto} 
                      visualizacao={visualizacao}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className={
              visualizacao === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-4'
            }>
              {produtosOrdenados.map(produto => (
                <CardProdutoCatalogo 
                  key={produto.id} 
                  produto={produto} 
                  visualizacao={visualizacao}
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
