import React, { useState } from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import ListaProdutos from '../../src/front-end/componentes/produtos/ListaProdutos';

export default function Produtos() {
  // Dados simulados de produtos
  const [produtos] = useState([
    {
      id: '1',
      nome: 'Vestido Floral de Verão',
      preco: 199.99,
      imagem: 'https://via.placeholder.com/300x300?text=Vestido+Floral'
    },
    {
      id: '2',
      nome: 'Blusa de Seda Pura',
      preco: 149.90,
      imagem: 'https://via.placeholder.com/300x300?text=Blusa+Seda'
    },
    {
      id: '3',
      nome: 'Jaqueta Casual Masculina com Gola Alta',
      preco: 236.49,
      imagem: 'https://via.placeholder.com/300x300?text=Jaqueta'
    },
    {
      id: '4',
      nome: 'Camiseta',
      preco: 39.99,
      imagem: 'https://via.placeholder.com/300x300?text=Camiseta'
    }
  ]);

  const [busca, setBusca] = useState('');

  const produtosFiltrados = produtos.filter(produto => 
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <LayoutPrincipal 
      titulo="Meus Produtos" 
      subtitulo="Gerencie seu catálogo de produtos"
      botaoAcao={{
        texto: 'Novo Produto',
        url: '/produtos/novo',
        icone: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        )
      }}
    >
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-96 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <button className="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
          Filtros
        </button>
      </div>

      <ListaProdutos produtos={produtosFiltrados} />
    </LayoutPrincipal>
  );
}