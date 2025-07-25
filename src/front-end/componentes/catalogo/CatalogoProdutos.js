import React, { useState, useEffect } from 'react';
import CardProdutoCatalogo from './CardProdutoCatalogo';

export default function CatalogoProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [filtros, setFiltros] = useState({
    categoria: '',
    precoMin: '',
    precoMax: '',
    busca: ''
  });
  const [ordenacao, setOrdenacao] = useState('nome');
  const [visualizacao, setVisualizacao] = useState('grid'); // grid ou lista

  // Simular carregamento de produtos
  useEffect(() => {
    const carregarProdutos = async () => {
      setCarregando(true);
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const produtosSimulados = [
        {
          id: 1,
          nome: 'Vestido Floral Primavera',
          categoria: 'Vestidos',
          preco: 89.90,
          precoOriginal: 120.00,
          descricao: 'Vestido floral perfeito para a primavera, tecido leve e confortável.',
          imagem: '/api/placeholder/300/400',
          disponivel: true,
          estoque: 15,
          cores: ['Rosa', 'Azul', 'Verde'],
          tamanhos: ['P', 'M', 'G', 'GG'],
          fornecedor: 'Moda Feminina Ltda',
          avaliacoes: 4.5,
          totalAvaliacoes: 23
        },
        {
          id: 2,
          nome: 'Calça Jeans Skinny',
          categoria: 'Calças',
          preco: 129.90,
          descricao: 'Calça jeans skinny de alta qualidade, modelagem perfeita.',
          imagem: '/api/placeholder/300/400',
          disponivel: true,
          estoque: 8,
          cores: ['Azul Escuro', 'Azul Claro', 'Preto'],
          tamanhos: ['36', '38', '40', '42', '44'],
          fornecedor: 'Jeans & Co',
          avaliacoes: 4.2,
          totalAvaliacoes: 18
        },
        {
          id: 3,
          nome: 'Blusa Social Branca',
          categoria: 'Blusas',
          preco: 69.90,
          precoOriginal: 89.90,
          descricao: 'Blusa social elegante, ideal para ambiente corporativo.',
          imagem: '/api/placeholder/300/400',
          disponivel: true,
          estoque: 25,
          cores: ['Branco', 'Azul Claro', 'Rosa Claro'],
          tamanhos: ['P', 'M', 'G'],
          fornecedor: 'Elegance Fashion',
          avaliacoes: 4.7,
          totalAvaliacoes: 31
        },
        {
          id: 4,
          nome: 'Saia Midi Plissada',
          categoria: 'Saias',
          preco: 79.90,
          descricao: 'Saia midi plissada versátil, combina com diversas ocasiões.',
          imagem: '/api/placeholder/300/400',
          disponivel: false,
          estoque: 0,
          cores: ['Preto', 'Marinho', 'Vinho'],
          tamanhos: ['P', 'M', 'G'],
          fornecedor: 'Style Collection',
          avaliacoes: 4.3,
          totalAvaliacoes: 12
        },
        {
          id: 5,
          nome: 'Blazer Estruturado',
          categoria: 'Blazers',
          preco: 189.90,
          descricao: 'Blazer estruturado premium, corte moderno e sofisticado.',
          imagem: '/api/placeholder/300/400',
          disponivel: true,
          estoque: 5,
          cores: ['Preto', 'Marinho', 'Cinza'],
          tamanhos: ['P', 'M', 'G'],
          fornecedor: 'Executive Wear',
          avaliacoes: 4.8,
          totalAvaliacoes: 27
        },
        {
          id: 6,
          nome: 'Tênis Casual Feminino',
          categoria: 'Calçados',
          preco: 159.90,
          precoOriginal: 199.90,
          descricao: 'Tênis casual confortável para o dia a dia, design moderno.',
          imagem: '/api/placeholder/300/400',
          disponivel: true,
          estoque: 12,
          cores: ['Branco', 'Rosa', 'Preto'],
          tamanhos: ['35', '36', '37', '38', '39'],
          fornecedor: 'Comfort Shoes',
          avaliacoes: 4.4,
          totalAvaliacoes: 19
        }
      ];
      
      setProdutos(produtosSimulados);
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
    
    return matchBusca && matchCategoria && matchPrecoMin && matchPrecoMax;
  });

  // Ordenar produtos
  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
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

  const categorias = [...new Set(produtos.map(p => p.categoria))];

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
      busca: ''
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
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Busca */}
          <div>
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
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="">Todas as categorias</option>
              {categorias.map(categoria => (
                <option key={categoria} value={categoria}>{categoria}</option>
              ))}
            </select>
          </div>

          {/* Preço mínimo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Preço mínimo
            </label>
            <input
              type="number"
              value={filtros.precoMin}
              onChange={(e) => handleFiltroChange('precoMin', e.target.value)}
              placeholder="R$ 0,00"
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Preço máximo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Preço máximo
            </label>
            <input
              type="number"
              value={filtros.precoMax}
              onChange={(e) => handleFiltroChange('precoMax', e.target.value)}
              placeholder="R$ 999,99"
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={limparFiltros}
            className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            Limpar filtros
          </button>

          <div className="flex items-center space-x-4">
            {/* Ordenação */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Ordenar por:
              </label>
              <select
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value)}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
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
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Produtos ({produtosOrdenados.length})
          </h2>
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
        )}
      </div>
    </div>
  );
}