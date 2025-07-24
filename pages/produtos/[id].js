import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';

export default function DetalhesProduto() {
  const router = useRouter();
  const { id } = router.query;
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);

  // Dados simulados de produtos
  const produtosSimulados = {
    '1': {
      id: '1',
      nome: 'Vestido Floral de Verão',
      preco: 199.99,
      descricao: 'O incentivo ao avanço tecnológico, assim como o acompanhamento das preferências de consumo representa uma abertura para a melhoria do impacto na agilidade decisória.',
      categoria: 'Não especificada',
      tamanhos: ['P', 'M', 'G'],
      imagens: ['https://via.placeholder.com/600x800?text=Vestido+Floral']
    },
    '2': {
      id: '2',
      nome: 'Blusa de Seda Pura',
      preco: 149.90,
      descricao: 'O incentivo ao avanço tecnológico, assim como o acompanhamento das preferências de consumo representa uma abertura para a melhoria do impacto na agilidade decisória.',
      categoria: 'Não especificada',
      tamanhos: ['P', 'M', 'G'],
      imagens: ['https://via.placeholder.com/600x800?text=Blusa+Seda']
    },
    '3': {
      id: '3',
      nome: 'Jaqueta Casual Masculina com Gola Alta',
      preco: 236.49,
      descricao: 'O incentivo ao avanço tecnológico, assim como o acompanhamento das preferências de consumo representa uma abertura para a melhoria do impacto na agilidade decisória.',
      categoria: 'Não especificada',
      tamanhos: ['P', 'M', 'G'],
      imagens: ['https://via.placeholder.com/600x800?text=Jaqueta']
    },
    '4': {
      id: '4',
      nome: 'Camiseta',
      preco: 39.99,
      descricao: 'O incentivo ao avanço tecnológico, assim como o acompanhamento das preferências de consumo representa uma abertura para a melhoria do impacto na agilidade decisória.',
      categoria: 'Não especificada',
      tamanhos: ['P', 'M', 'G'],
      imagens: ['https://via.placeholder.com/600x800?text=Camiseta']
    }
  };

  useEffect(() => {
    if (id) {
      // Simular carregamento de dados
      setTimeout(() => {
        setProduto(produtosSimulados[id]);
        setCarregando(false);
      }, 500);
    }
  }, [id]);

  if (carregando) {
    return (
      <LayoutPrincipal titulo="Carregando...">
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </LayoutPrincipal>
    );
  }

  if (!produto) {
    return (
      <LayoutPrincipal titulo="Produto não encontrado">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Produto não encontrado</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">O produto que você está procurando não existe ou foi removido.</p>
          <button 
            onClick={() => router.push('/produtos')}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Voltar para produtos
          </button>
        </div>
      </LayoutPrincipal>
    );
  }

  return (
    <LayoutPrincipal 
      titulo={produto.nome} 
      botaoVoltar={{ url: '/produtos', texto: 'Voltar para produtos' }}
      botaoAcao={{
        texto: 'Editar Produto',
        url: `/produtos/${id}/editar`,
        icone: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        )
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <img 
              src={produto.imagens[0]} 
              alt={produto.nome} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{produto.nome}</h2>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">R$ {produto.preco.toFixed(2)}</p>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Categoria</h3>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 dark:text-white">{produto.categoria}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Tamanhos disponíveis</h3>
              <div className="flex space-x-2">
                {produto.tamanhos.map((tamanho) => (
                  <div key={tamanho} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-900 dark:text-white">
                    {tamanho}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Descrição</h3>
              <p className="text-gray-700 dark:text-gray-300">{produto.descricao}</p>
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              Editar Produto
            </button>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}