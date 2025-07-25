import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import { imagensProdutosMockados } from '../../src/front-end/utils/imagensProdutos';

export default function DetalheProdutoPage() {
  const router = useRouter();
  const { id } = router.query;
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (id) {
      // Simular busca do produto - Segmento de Moda
      const produtosSimulados = {
        1: {
          id: 1,
          nome: 'Vestido Floral Primavera',
          descricao: 'Vestido midi com estampa floral delicada, confeccionado em tecido fluido de alta qualidade. Perfeito para ocasiões especiais, casamentos e eventos sociais. O corte valoriza a silhueta feminina com elegância e sofisticação.',
          preco: 189.90,
          categoria: 'Roupas Femininas',
          estoque: 25,
          status: 'ativo',
          imagem: imagensProdutosMockados[1],
          sku: 'VES-001',
          dataAtualizacao: '2024-01-15',
          especificacoes: {
            'Tecido': '100% Viscose',
            'Modelagem': 'Midi com cintura marcada',
            'Fechamento': 'Zíper lateral invisível',
            'Forro': 'Forro interno em algodão',
            'Lavagem': 'Lavar à mão ou máquina ciclo delicado',
            'Origem': 'Fabricado no Brasil',
            'Coleção': 'Primavera/Verão 2024'
          },
          variantes: [
            { cor: 'Rosa', tamanho: 'P', estoque: 3 },
            { cor: 'Rosa', tamanho: 'M', estoque: 5 },
            { cor: 'Rosa', tamanho: 'G', estoque: 4 },
            { cor: 'Azul', tamanho: 'P', estoque: 2 },
            { cor: 'Azul', tamanho: 'M', estoque: 6 },
            { cor: 'Verde', tamanho: 'M', estoque: 3 },
            { cor: 'Verde', tamanho: 'G', estoque: 2 }
          ]
        },
        2: {
          id: 2,
          nome: 'Tênis Esportivo Premium',
          descricao: 'Tênis de corrida desenvolvido com tecnologia de amortecimento avançada para máximo conforto e performance. Ideal para atividades físicas e uso casual.',
          preco: 299.90,
          categoria: 'Calçados',
          estoque: 42,
          status: 'ativo',
          imagem: imagensProdutosMockados[2],
          sku: 'TEN-002',
          dataAtualizacao: '2024-01-14',
          especificacoes: {
            'Material': 'Mesh respirável + Couro sintético',
            'Solado': 'Borracha antiderrapante',
            'Amortecimento': 'Tecnologia Air Cushion',
            'Palmilha': 'EVA removível e anatômica',
            'Fechamento': 'Cadarço tradicional',
            'Peso': 'Aproximadamente 280g (tamanho 40)',
            'Indicação': 'Corrida, caminhada e uso casual'
          },
          variantes: [
            { cor: 'Preto', tamanho: '38', estoque: 5 },
            { cor: 'Preto', tamanho: '39', estoque: 6 },
            { cor: 'Preto', tamanho: '40', estoque: 8 },
            { cor: 'Branco', tamanho: '39', estoque: 4 },
            { cor: 'Branco', tamanho: '40', estoque: 7 },
            { cor: 'Azul', tamanho: '41', estoque: 3 },
            { cor: 'Azul', tamanho: '42', estoque: 9 }
          ]
        }
      };

      setTimeout(() => {
        setProduto(produtosSimulados[id] || null);
        setCarregando(false);
      }, 500);
    }
  }, [id]);

  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ativo':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'inativo':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'rascunho':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  if (carregando) {
    return (
      <LayoutPrincipal titulo="Carregando..." subtitulo="Buscando informações do produto">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      </LayoutPrincipal>
    );
  }

  if (!produto) {
    return (
      <LayoutPrincipal titulo="Produto não encontrado" subtitulo="O produto solicitado não foi encontrado">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-12 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.1-5.7-2.836" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            Produto não encontrado
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            O produto que você está procurando não existe ou foi removido.
          </p>
          <button
            onClick={() => router.push('/produtos')}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Voltar para Produtos
          </button>
        </div>
      </LayoutPrincipal>
    );
  }

  return (
    <LayoutPrincipal 
      titulo={produto.nome} 
      subtitulo={`SKU: ${produto.sku} • ${produto.categoria}`}
    >
      <div className="space-y-6">
        {/* Botão voltar */}
        <button
          onClick={() => router.push('/produtos')}
          className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
        >
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para Produtos
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna principal - Informações do produto */}
          <div className="lg:col-span-2 space-y-6">
            {/* Card principal */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {produto.nome}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      {produto.categoria} • SKU: {produto.sku}
                    </p>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(produto.status)}`}>
                    {produto.status.charAt(0).toUpperCase() + produto.status.slice(1)}
                  </span>
                </div>

                {/* Imagem do produto */}
                <div className="mb-6">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                    {produto.imagem ? (
                      <img
                        src={produto.imagem}
                        alt={produto.nome}
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="w-full h-64 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                      <svg className="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Descrição */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Descrição
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {produto.descricao}
                  </p>
                </div>

                {/* Especificações */}
                {produto.especificacoes && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Especificações
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(produto.especificacoes).map(([chave, valor]) => (
                        <div key={chave} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                          <span className="font-medium text-gray-900 dark:text-white">{chave}:</span>
                          <span className="text-gray-600 dark:text-gray-300">{valor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Variantes */}
                {produto.variantes && produto.variantes.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Variantes
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {produto.variantes.map((variante, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900 dark:text-white">
                              {variante.cor}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {variante.estoque} unidades
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Informações resumidas e ações */}
          <div className="space-y-6">
            {/* Card de preço e estoque */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Informações de Venda
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500 dark:text-gray-400">Preço</label>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {formatarPreco(produto.preco)}
                  </p>
                </div>

                <div>
                  <label className="text-sm text-gray-500 dark:text-gray-400">Estoque Total</label>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    {produto.estoque} unidades
                  </p>
                </div>

                <div>
                  <label className="text-sm text-gray-500 dark:text-gray-400">Última Atualização</label>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {formatarData(produto.dataAtualizacao)}
                  </p>
                </div>
              </div>
            </div>

            {/* Ações */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Ações
              </h3>
              
              <div className="space-y-3">
                <button
                  onClick={() => router.push(`/produtos/${produto.id}/editar`)}
                  className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Editar Produto
                </button>

                <button
                  onClick={() => {
                    // Implementar duplicação
                    console.log('Duplicar produto:', produto.id);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Duplicar
                </button>

                <button
                  onClick={() => {
                    if (confirm('Tem certeza que deseja excluir este produto?')) {
                      console.log('Excluir produto:', produto.id);
                      router.push('/produtos');
                    }
                  }}
                  className="w-full px-4 py-2 border border-red-300 text-red-700 dark:text-red-400 dark:border-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}