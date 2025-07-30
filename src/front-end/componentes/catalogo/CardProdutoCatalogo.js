import React, { useState } from 'react';
import { usarCorTema } from '../../utils/coresTema';
import ServicoCarrinho from '../../servicos/ServicoCarrinho';
import servicoNotificacoes from '../../servicos/ServicoNotificacoes';

// Instância singleton do serviço de carrinho
const servicoCarrinho = new ServicoCarrinho();

export default function CardProdutoCatalogo({ produto, visualizacao = 'grid' }) {
  const { classes } = usarCorTema();
  const [adicionando, setAdicionando] = useState(false);

  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor || 0);
  };

  const getStatusColor = (disponivel) => {
    return disponivel 
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  };

  const handleAdicionarCarrinho = async () => {
    try {
      setAdicionando(true);
      
      // Verificar se produto tem opções obrigatórias
      const temCores = produto.cores && produto.cores.length > 0;
      const temTamanhos = produto.tamanhos && produto.tamanhos.length > 0;
      
      if (temCores || temTamanhos) {
        // Se tem opções, redirecionar para página de detalhes
        window.location.href = `/produtos/${produto.id}`;
        return;
      }
      
      // Se não tem opções, adicionar diretamente
      await servicoCarrinho.adicionarProduto(produto.id, 1);
      
      // Notificação de sucesso
      servicoNotificacoes.notificarSucesso(
        'Produto adicionado!',
        `${produto.nome} foi adicionado ao carrinho com sucesso`
      );
      
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
      servicoNotificacoes.adicionarNotificacao({
        tipo: 'erro',
        titulo: 'Erro ao adicionar produto',
        mensagem: error.message || 'Não foi possível adicionar o produto ao carrinho',
        cor: 'red'
      });
    } finally {
      setAdicionando(false);
    }
  };

  const handleVerDetalhes = () => {
    window.location.href = `/produtos/${produto.id}`;
  };

  if (visualizacao === 'lista') {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex-shrink-0">
              <img
                src={produto.imagens[0] || '/placeholder-produto.svg'}
                alt={produto.nome}
                className="w-16 h-16 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white truncate">
                  {produto.nome}
                </h3>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(produto.disponivel)}`}>
                  {produto.disponivel ? 'Disponível' : 'Indisponível'}
                </span>
              </div>
              
              <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span>SKU: {produto.sku}</span>
                <span>•</span>
                <span>{produto.categoria}</span>
                <span>•</span>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {formatarMoeda(produto.preco)}
                </span>
              </div>
              
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {produto.descricao}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={handleVerDetalhes}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              title="Ver detalhes"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
            
            {produto.disponivel && (
              <button
                onClick={handleAdicionarCarrinho}
                disabled={adicionando}
                className={`px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                title="Adicionar ao carrinho"
              >
                {adicionando ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adicionando...
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                    Adicionar
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Visualização em grid
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Imagem do produto */}
      <div className="relative">
        <img
          src={produto.imagens[0] || '/placeholder-produto.svg'}
          alt={produto.nome}
          className="w-full h-48 object-cover"
        />
        
        {/* Badge de disponibilidade */}
        <div className="absolute top-2 right-2">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(produto.disponivel)}`}>
            {produto.disponivel ? 'Disponível' : 'Indisponível'}
          </span>
        </div>

        {/* Badge de categoria */}
        <div className="absolute top-2 left-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
            {produto.categoria}
          </span>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white line-clamp-2">
              {produto.nome}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              SKU: {produto.sku}
            </p>
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {produto.descricao}
        </p>

        {/* Preço */}
        <div className="mt-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatarMoeda(produto.preco)}
          </span>
        </div>

        {/* Ações */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={handleVerDetalhes}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center gap-1"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Ver detalhes
          </button>
          
          {produto.disponivel ? (
            <button
              onClick={handleAdicionarCarrinho}
              disabled={adicionando}
              className={`px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors flex items-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {adicionando ? (
                <>
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adicionando...
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  Adicionar
                </>
              )}
            </button>
          ) : (
            <span className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm">
              Indisponível
            </span>
          )}
        </div>
      </div>
    </div>
  );
}