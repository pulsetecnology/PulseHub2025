import React, { useState, useEffect } from 'react';
import CardProduto from './CardProduto';
import { imagensProdutosMockados } from '../../utils/imagensProdutos';

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [filtro, setFiltro] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');
  // const [statusFiltro, setStatusFiltro] = useState('');
  // const [ordenacao, setOrdenacao] = useState('nome');
  // const [visualizacao, setVisualizacao] = useState('grid'); // 'grid' ou 'lista'
  // const [paginaAtual, setPaginaAtual] = useState(1);
  // const [itensPorPagina] = useState(12);

  // Dados simulados para demonstração - Segmento de Moda
  useEffect(() => {
    const produtosSimulados = [
      {
        id: 1,
        nome: 'Vestido Floral Primavera',
        descricao: 'Vestido midi com estampa floral delicada, perfeito para ocasiões especiais',
        preco: 189.90,
        categoria: 'Roupas Femininas',
        estoque: 25,
        status: 'ativo',
        imagem: imagensProdutosMockados[1],
        sku: 'VES-001',
        dataAtualizacao: '2024-01-15',
        tamanhos: ['P', 'M', 'G', 'GG'],
        cores: ['Rosa', 'Azul', 'Verde']
      },
      {
        id: 2,
        nome: 'Tênis Esportivo Premium',
        descricao: 'Tênis de corrida com tecnologia de amortecimento avançada',
        preco: 299.90,
        categoria: 'Calçados',
        estoque: 42,
        status: 'ativo',
        imagem: imagensProdutosMockados[2],
        sku: 'TEN-002',
        dataAtualizacao: '2024-01-14',
        tamanhos: ['36', '37', '38', '39', '40', '41', '42', '43'],
        cores: ['Preto', 'Branco', 'Azul']
      },
      {
        id: 3,
        nome: 'Bolsa de Couro Clássica',
        descricao: 'Bolsa de couro legítimo com design atemporal e compartimentos organizadores',
        preco: 249.90,
        categoria: 'Acessórios',
        estoque: 18,
        status: 'ativo',
        imagem: imagensProdutosMockados[3],
        sku: 'BOL-003',
        dataAtualizacao: '2024-01-13',
        cores: ['Marrom', 'Preto', 'Caramelo']
      },
      {
        id: 4,
        nome: 'Camisa Social Masculina',
        descricao: 'Camisa social de algodão premium com corte slim fit',
        preco: 129.90,
        categoria: 'Roupas Masculinas',
        estoque: 35,
        status: 'ativo',
        imagem: imagensProdutosMockados[4],
        sku: 'CAM-004',
        dataAtualizacao: '2024-01-12',
        tamanhos: ['P', 'M', 'G', 'GG', 'XG'],
        cores: ['Branco', 'Azul Claro', 'Rosa']
      },
      {
        id: 5,
        nome: 'Jaqueta Jeans Vintage',
        descricao: 'Jaqueta jeans com lavagem especial e detalhes vintage',
        preco: 179.90,
        categoria: 'Roupas Unissex',
        estoque: 8,
        status: 'inativo',
        imagem: imagensProdutosMockados[5],
        sku: 'JAQ-005',
        dataAtualizacao: '2024-01-10',
        tamanhos: ['P', 'M', 'G', 'GG'],
        cores: ['Azul Escuro', 'Azul Claro']
      },
      {
        id: 6,
        nome: 'Sandália Feminina Elegante',
        descricao: 'Sandália de salto médio com tiras delicadas, ideal para ocasiões especiais',
        preco: 159.90,
        categoria: 'Calçados',
        estoque: 28,
        status: 'ativo',
        imagem: imagensProdutosMockados[6],
        sku: 'SAN-006',
        dataAtualizacao: '2024-01-09',
        tamanhos: ['34', '35', '36', '37', '38', '39', '40'],
        cores: ['Nude', 'Preto', 'Dourado']
      },
      {
        id: 7,
        nome: 'Relógio Masculino Clássico',
        descricao: 'Relógio de pulso com pulseira de couro e mostrador analógico',
        preco: 299.90,
        categoria: 'Acessórios',
        estoque: 15,
        status: 'ativo',
        imagem: imagensProdutosMockados[7],
        sku: 'REL-007',
        dataAtualizacao: '2024-01-08',
        cores: ['Marrom', 'Preto']
      },
      {
        id: 8,
        nome: 'Blusa Feminina Estampada',
        descricao: 'Blusa de manga longa com estampa floral moderna e tecido fluido',
        preco: 89.90,
        categoria: 'Roupas Femininas',
        estoque: 32,
        status: 'ativo',
        imagem: imagensProdutosMockados[8],
        sku: 'BLU-008',
        dataAtualizacao: '2024-01-07',
        tamanhos: ['P', 'M', 'G', 'GG'],
        cores: ['Rosa', 'Azul', 'Verde', 'Branco']
      },
      {
        id: 9,
        nome: 'Calça Jeans Masculina Slim',
        descricao: 'Calça jeans com modelagem slim fit e lavagem moderna',
        preco: 149.90,
        categoria: 'Roupas Masculinas',
        estoque: 22,
        status: 'ativo',
        imagem: imagensProdutosMockados[9],
        sku: 'CAL-009',
        dataAtualizacao: '2024-01-06',
        tamanhos: ['38', '40', '42', '44', '46'],
        cores: ['Azul Escuro', 'Azul Médio', 'Preto']
      },
      {
        id: 10,
        nome: 'Óculos de Sol Unissex',
        descricao: 'Óculos de sol com proteção UV400 e armação moderna',
        preco: 199.90,
        categoria: 'Acessórios',
        estoque: 19,
        status: 'ativo',
        imagem: imagensProdutosMockados[10],
        sku: 'OCU-010',
        dataAtualizacao: '2024-01-05',
        cores: ['Preto', 'Marrom', 'Dourado']
      },
      {
        id: 11,
        nome: 'Vestido Longo Festa',
        descricao: 'Vestido longo para festas com tecido acetinado e corte elegante',
        preco: 259.90,
        categoria: 'Roupas Femininas',
        estoque: 12,
        status: 'ativo',
        imagem: imagensProdutosMockados[11],
        sku: 'VES-011',
        dataAtualizacao: '2024-01-04',
        tamanhos: ['P', 'M', 'G', 'GG'],
        cores: ['Preto', 'Azul Marinho', 'Vinho']
      },
      {
        id: 12,
        nome: 'Sapato Social Masculino',
        descricao: 'Sapato social de couro legítimo com solado antiderrapante',
        preco: 219.90,
        categoria: 'Calçados',
        estoque: 16,
        status: 'ativo',
        imagem: imagensProdutosMockados[12],
        sku: 'SAP-012',
        dataAtualizacao: '2024-01-03',
        tamanhos: ['39', '40', '41', '42', '43', '44'],
        cores: ['Preto', 'Marrom']
      }
    ];

    // Simular carregamento
    setTimeout(() => {
      setProdutos(produtosSimulados);
      setCarregando(false);
    }, 1000);
  }, []);

  const produtosFiltrados = produtos.filter(produto => {
    const matchNome = produto.nome.toLowerCase().includes(filtro.toLowerCase());
    const matchCategoria = categoriaFiltro === '' || produto.categoria === categoriaFiltro;
    return matchNome && matchCategoria;
  });

  const categorias = [...new Set(produtos.map(produto => produto.categoria))];

  if (carregando) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho com filtros */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Meus Produtos
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Gerencie seu catálogo de produtos
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Filtro por nome */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Filtro por categoria */}
            <select
              value={categoriaFiltro}
              onChange={(e) => setCategoriaFiltro(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Todas as categorias</option>
              {categorias.map(categoria => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>

            {/* Botão adicionar produto */}
            <button
              onClick={() => window.location.href = '/produtos/novo'}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Novo Produto
            </button>
          </div>
        </div>
      </div>

      {/* Lista de produtos */}
      {produtosFiltrados.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-12 text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosFiltrados.map(produto => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </div>
  );
}