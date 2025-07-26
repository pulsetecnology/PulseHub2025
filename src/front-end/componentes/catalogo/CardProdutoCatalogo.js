import React from 'react';
import { useRouter } from 'next/router';
import { usarCorTema } from '../../utils/coresTema';

export default function CardProdutoCatalogo({ produto, visualizacao = 'grid' }) {
  const router = useRouter();
  const { classes } = usarCorTema();

  const handleVerDetalhes = (id) => {
    router.push(`/produtos/${id}`);
  };

  const handleAdicionarCarrinho = (produto) => {
    // Implementar lógica de adicionar ao carrinho
    console.log('Adicionar ao carrinho:', produto);
  };

  if (visualizacao === 'lista') {
    return (
      <div className={`bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:${classes.borderLight} dark:hover:${classes.borderLight} overflow-hidden`}>
        <div className="flex h-56">
          {/* Imagem do produto */}
          <div className="relative w-42 h-full bg-gray-200 dark:bg-gray-700 flex-shrink-0">
            <img
              src={produto.imagens && produto.imagens[0] ? produto.imagens[0] : produto.imagem}
              alt={produto.nome}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full hidden items-center justify-center bg-gray-200 dark:bg-gray-700">
              <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            {produto.precoOriginal && produto.precoOriginal > produto.preco && (
              <div className="absolute top-1 left-1 bg-red-500 text-white px-1 py-0.5 rounded text-xs font-medium">
                {Math.round(((produto.precoOriginal - produto.preco) / produto.precoOriginal) * 100)}% OFF
              </div>
            )}
            {!produto.ativo && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-xs font-medium">Indisponível</span>
              </div>
            )}
          </div>

          {/* Conteúdo do produto */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-center h-full">
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  {produto.nome}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {produto.categoria} • {produto.fornecedor}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {produto.descricao}
                </p>

                {/* Badges de status */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {produto.destaque && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      ⭐ Destaque
                    </span>
                  )}
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${produto.ativo ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}`}>
                    {produto.ativo ? 'Ativo' : 'Inativo'}
                  </span>
                </div>

                {/* Avaliações */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(produto.avaliacoes)
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    {produto.avaliacoes} ({produto.totalAvaliacoes} avaliações)
                  </span>
                </div>

                {/* Cores e tamanhos disponíveis */}
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Cores:</span>
                    <div className="flex space-x-1">
                      {produto.cores.slice(0, 3).map((cor, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                          style={{ 
                            backgroundColor: cor.toLowerCase() === 'branco' ? '#ffffff' : 
                                           cor.toLowerCase() === 'preto' ? '#000000' :
                                           cor.toLowerCase() === 'azul' ? '#3B82F6' :
                                           cor.toLowerCase() === 'verde' ? '#10B981' :
                                           cor.toLowerCase() === 'rosa' ? '#EC4899' :
                                           cor.toLowerCase() === 'amarelo' ? '#F59E0B' :
                                           cor.toLowerCase() === 'vermelho' ? '#EF4444' :
                                           cor.toLowerCase() === 'cinza' ? '#6B7280' :
                                           '#9CA3AF'
                          }}
                          title={cor}
                        />
                      ))}
                      {produto.cores.length > 3 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          +{produto.cores.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Tamanhos:</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {produto.tamanhos.join(', ')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Preço e ações */}
              <div className="text-right ml-4 flex flex-col justify-center">
                <div className="mb-3">
                  {produto.precoOriginal && produto.precoOriginal > produto.preco && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-through">
                      R$ {produto.precoOriginal.toFixed(2).replace('.', ',')}
                    </p>
                  )}
                  <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
                    R$ {produto.preco.toFixed(2).replace('.', ',')}
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => handleVerDetalhes(produto.id)}
                    className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                  >
                    Ver Detalhes
                  </button>
                  <button
                    onClick={() => handleAdicionarCarrinho(produto)}
                    disabled={!produto.ativo}
                    className="w-full px-4 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {produto.ativo ? 'Solicitar Orçamento' : 'Indisponível'}
                  </button>
                </div>

                {produto.prazoProducao && (
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                    Produção: {produto.prazoProducao} dias
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Visualização em grid (padrão)
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 overflow-hidden">
      {/* Imagem do produto */}
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        <img
          src={produto.imagens && produto.imagens[0] ? produto.imagens[0] : produto.imagem}
          alt={produto.nome}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="w-full h-full hidden items-center justify-center bg-gray-200 dark:bg-gray-700">
          <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        
        {produto.precoOriginal && produto.precoOriginal > produto.preco && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            {Math.round(((produto.precoOriginal - produto.preco) / produto.precoOriginal) * 100)}% OFF
          </div>
        )}
        {!produto.ativo && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium">Indisponível</span>
          </div>
        )}
      </div>

      {/* Conteúdo do produto */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
            {produto.nome}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {produto.categoria} • {produto.fornecedor}
          </p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {produto.descricao}
        </p>

        {/* Badges de status */}
        <div className="flex flex-wrap gap-2 mb-3">
          {produto.destaque && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
              ⭐ Destaque
            </span>
          )}
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${produto.ativo ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}`}>
            {produto.ativo ? 'Ativo' : 'Inativo'}
          </span>
        </div>

        {/* Avaliações */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(produto.avaliacoes)
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            {produto.avaliacoes} ({produto.totalAvaliacoes})
          </span>
        </div>

        {/* Cores disponíveis */}
        <div className="flex items-center space-x-1 mb-3">
          <span className="text-xs text-gray-500 dark:text-gray-400">Cores:</span>
          <div className="flex space-x-1">
            {produto.cores.slice(0, 4).map((cor, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                style={{ 
                  backgroundColor: cor.toLowerCase() === 'branco' ? '#ffffff' : 
                                 cor.toLowerCase() === 'preto' ? '#000000' :
                                 cor.toLowerCase() === 'azul' ? '#3B82F6' :
                                 cor.toLowerCase() === 'verde' ? '#10B981' :
                                 cor.toLowerCase() === 'rosa' ? '#EC4899' :
                                 cor.toLowerCase() === 'amarelo' ? '#F59E0B' :
                                 cor.toLowerCase() === 'vermelho' ? '#EF4444' :
                                 cor.toLowerCase() === 'cinza' ? '#6B7280' :
                                 '#9CA3AF'
                }}
                title={cor}
              />
            ))}
            {produto.cores.length > 4 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                +{produto.cores.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Preço */}
        <div className="mb-4">
          {produto.precoOriginal && produto.precoOriginal > produto.preco && (
            <p className="text-sm text-gray-500 dark:text-gray-400 line-through">
              R$ {produto.precoOriginal.toFixed(2).replace('.', ',')}
            </p>
          )}
          <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
            R$ {produto.preco.toFixed(2).replace('.', ',')}
          </p>
        </div>

        {/* Ações */}
        <div className="space-y-2">
          <button
            onClick={() => handleVerDetalhes(produto.id)}
            className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
          >
            Ver Detalhes
          </button>
          <button
            onClick={() => handleAdicionarCarrinho(produto)}
            disabled={!produto.ativo}
            className="w-full px-4 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {produto.ativo ? 'Solicitar Orçamento' : 'Indisponível'}
          </button>
        </div>

        {produto.prazoProducao && (
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 text-center">
            Produção: {produto.prazoProducao} dias • Mín: {produto.quantidadeMinima || 1} un
          </p>
        )}
      </div>
    </div>
  );
}