import React from 'react';
import { usarCorTema } from '../../utils/coresTema';

export default function CardProduto({ produto, visualizacao = 'grid' }) {
  const { classes } = usarCorTema();
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

  const getStatusAtivo = (ativo) => {
    return ativo 
      ? 'text-green-600 dark:text-green-400' 
      : 'text-red-600 dark:text-red-400';
  };

  if (visualizacao === 'lista') {
    return (
      <div className={`bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:${classes.borderLight} dark:hover:${classes.borderLight}`}>
        <div className="flex h-56">
          {/* Imagem do produto */}
          <div className="relative flex-shrink-0">
            <div className="w-40 h-full bg-gray-200 dark:bg-gray-700 rounded-l-lg overflow-hidden">
              {produto.imagens && produto.imagens.length > 0 ? (
                <>
                  <img
                    src={produto.imagens[0]}
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
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                  <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>


          </div>

          {/* Conteúdo do produto */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-center h-full">
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {produto.nome}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {produto.categoria} • SKU: {produto.sku}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                  {produto.descricao}
                </p>

                {/* Badges de status */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {produto.destaque && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      ⭐ Destaque
                    </span>
                  )}
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${produto.ativo ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}`}>
                    {produto.ativo ? 'Ativo' : 'Inativo'}
                  </span>
                </div>

                {/* Informações de produção */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>Produção: {produto.prazoProducao || 15} dias</span>
                  <span>Mín: {produto.quantidadeMinima || 1} un</span>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Atualizado em {formatarData(produto.dataAtualizacao)}
                </p>
              </div>

              <div className="flex flex-col items-end justify-center ml-4">
                {/* Preço */}
                <div className="text-right mb-4">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {formatarPreco(produto.preco)}
                  </span>
                  {produto.precoOriginal && produto.precoOriginal > produto.preco && (
                    <p className="text-sm text-gray-500 line-through">
                      {formatarPreco(produto.precoOriginal)}
                    </p>
                  )}
                </div>

                {/* Ações */}
                <div className="flex gap-2">
                  <button
                    onClick={() => window.location.href = `/produtos/${produto.id}`}
                    className={`px-3 py-1 text-sm ${classes.bg} text-white rounded ${classes.bgHover} transition-colors`}
                  >
                    Ver
                  </button>
                  <button
                    onClick={() => window.location.href = `/produtos/${produto.id}/editar`}
                    className="px-3 py-1 text-sm border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Tem certeza que deseja excluir este produto?')) {
                        console.log('Excluir produto:', produto.id);
                      }
                    }}
                    className="px-3 py-1 text-sm border border-red-300 text-red-700 dark:text-red-400 dark:border-red-600 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:${classes.borderLight} dark:hover:${classes.borderLight}`}>
      {/* Imagem do produto */}
      <div className="relative">
        <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-t-lg overflow-hidden">
          {produto.imagens && produto.imagens.length > 0 ? (
            <>
              <img
                src={produto.imagens[0]}
                alt={produto.nome}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-64 hidden items-center justify-center bg-gray-200 dark:bg-gray-700">
                <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </>
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
              <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>
        

      </div>

      {/* Conteúdo do card */}
      <div className="p-4">
        {/* Nome e categoria */}
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {produto.nome}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {produto.categoria} • SKU: {produto.sku}
          </p>
        </div>

        {/* Descrição */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
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

        {/* Preço e produção */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {formatarPreco(produto.preco)}
            </span>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Produção</p>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {produto.prazoProducao || 15} dias
            </p>
          </div>
        </div>

        {/* Informações de produção */}
        <div className="mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Qtd. Mínima:</span>
            <span className="text-gray-900 dark:text-white">{produto.quantidadeMinima || 1} un</span>
          </div>
        </div>

        {/* Data de atualização */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Atualizado em {formatarData(produto.dataAtualizacao)}
          </p>
        </div>

        {/* Ações */}
        <div className="flex gap-2">
          <button
            onClick={() => window.location.href = `/produtos/${produto.id}`}
            className={`flex-1 px-3 py-2 text-sm ${classes.bg} text-white rounded-md ${classes.bgHover} transition-colors`}
          >
            Ver Detalhes
          </button>
          <button
            onClick={() => window.location.href = `/produtos/${produto.id}/editar`}
            className="px-3 py-2 text-sm border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => {
              if (confirm('Tem certeza que deseja excluir este produto?')) {
                // Implementar lógica de exclusão
                console.log('Excluir produto:', produto.id);
              }
            }}
            className="px-3 py-2 text-sm border border-red-300 text-red-700 dark:text-red-400 dark:border-red-600 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}