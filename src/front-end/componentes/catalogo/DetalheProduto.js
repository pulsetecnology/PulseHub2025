import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ServicoProdutos from '../../servicos/ServicoProdutos';
import ModalImagem from '../comum/ModalImagem';
import { usarCorTema } from '../../utils/coresTema';

export default function DetalheProduto({ produtoId, produto: produtoProp }) {
  const router = useRouter();
  const { classes } = usarCorTema();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [imagemSelecionada, setImagemSelecionada] = useState(0);
  const [corSelecionada, setCorSelecionada] = useState('');
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState('');
  const [modalImagemAberto, setModalImagemAberto] = useState(false);
  const [quantidade, setQuantidade] = useState(1);

  useEffect(() => {
    if (produtoProp) {
      // Se o produto foi passado como prop, usar diretamente
      const produtoCompleto = {
        ...produtoProp,
        descricaoCompleta: produtoProp.descricao + `
          
          Características:
          • SKU: ${produtoProp.sku}
          • Categoria: ${produtoProp.categoria}
          • Fornecedor: ${produtoProp.fornecedor || 'Minha Empresa'}
          • Status: ${produtoProp.ativo ? 'Ativo' : 'Inativo'}
          
          Este produto faz parte do nosso catálogo premium com qualidade garantida.
        `,
        cores: produtoProp.cores?.map(cor => ({ nome: cor, codigo: '#6B7280' })) || [],
        tamanhos: produtoProp.tamanhos?.map(tamanho => ({ nome: tamanho, disponivel: produtoProp.ativo })) || [],
        comentarios: [],
        especificacoes: {
          'SKU': produtoProp.sku,
          'Categoria': produtoProp.categoria,
          'Prazo de Produção': `${produtoProp.prazoProducao || 15} dias`,
          'Quantidade Mínima': `${produtoProp.quantidadeMinima || 1} unidades`,
          'Status': produtoProp.ativo ? 'Ativo' : 'Inativo',
          'Material': produtoProp.especificacoesTecnicas?.material || 'Não informado',
          'Origem': produtoProp.especificacoesTecnicas?.origem || 'Nacional',
          'Fornecedor': produtoProp.fornecedor || 'Minha Empresa',
          'Última Atualização': new Date(produtoProp.dataAtualizacao).toLocaleDateString('pt-BR')
        }
      };
      
      setProduto(produtoCompleto);
      setCorSelecionada(produtoCompleto.cores[0]?.nome || '');
      setTamanhoSelecionado(produtoCompleto.tamanhos.find(t => t.disponivel)?.nome || '');
      setCarregando(false);
    } else if (produtoId) {
      // Fallback para buscar produto por ID (caso não tenha sido passado como prop)
      setCarregando(true);
      // Implementar busca por ID se necessário
      setCarregando(false);
    }
  }, [produtoId, produtoProp]);

  const handleAdicionarCarrinho = () => {
    if (!corSelecionada || !tamanhoSelecionado) {
      alert('Por favor, selecione cor e tamanho');
      return;
    }
    
    const item = {
      produto: produto,
      cor: corSelecionada,
      tamanho: tamanhoSelecionado,
      quantidade: quantidade
    };
    
    console.log('Adicionar ao carrinho:', item);
    // Implementar lógica de adicionar ao carrinho
  };

  if (carregando) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${classes.border}`}></div>
      </div>
    );
  }

  if (!produto) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Produto não encontrado</h2>
        <button
          onClick={() => router.back()}
          className={`mt-4 px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors`}
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <li>
            <button onClick={() => router.push('/catalogo')} className={`hover:${classes.text}`}>
              Catálogo
            </button>
          </li>
          <li>/</li>
          <li>
            <button onClick={() => router.push(`/catalogo?categoria=${produto.categoria}`)} className={`hover:${classes.text}`}>
              {produto.categoria}
            </button>
          </li>
          <li>/</li>
          <li className="text-gray-900 dark:text-white">{produto.nome}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Galeria de imagens */}
        <div className="space-y-4">
          {/* Imagem principal */}
          <div 
            className="relative bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setModalImagemAberto(true)}
          >
            <img
              src={produto.imagens[imagemSelecionada]}
              alt={produto.nome}
              className="w-full h-[500px] object-cover transition-transform group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-[500px] hidden items-center justify-center bg-gray-200 dark:bg-gray-700">
              <svg className="h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            {/* Indicador de zoom */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              🔍 Clique para ampliar
            </div>
          </div>

          {/* Miniaturas */}
          <div className="grid grid-cols-4 gap-2">
            {produto.imagens.map((imagem, index) => (
              <button
                key={index}
                onClick={() => setImagemSelecionada(index)}
                className={`aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden border-2 ${
                  imagemSelecionada === index 
                    ? classes.border 
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img
                  src={imagem}
                  alt={`${produto.nome} ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Informações do produto */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {produto.nome}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {produto.categoria} • {produto.fornecedor}
            </p>
          </div>

          {/* Avaliações */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${
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
            <span className="text-lg text-gray-600 dark:text-gray-400">
              {produto.avaliacoes} ({produto.totalAvaliacoes} avaliações)
            </span>
          </div>

          {/* Preço */}
          <div>
            {produto.precoOriginal && produto.precoOriginal > produto.preco && (
              <p className="text-lg text-gray-500 dark:text-gray-400 line-through">
                R$ {produto.precoOriginal.toFixed(2).replace('.', ',')}
              </p>
            )}
            <p className={`text-3xl font-bold ${classes.text} ${classes.textDark}`}>
              R$ {produto.preco.toFixed(2).replace('.', ',')}
            </p>
            {produto.precoOriginal && produto.precoOriginal > produto.preco && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Economia de R$ {(produto.precoOriginal - produto.preco).toFixed(2).replace('.', ',')} 
                ({Math.round(((produto.precoOriginal - produto.preco) / produto.precoOriginal) * 100)}% OFF)
              </p>
            )}
          </div>

          {/* Descrição */}
          <div>
            <p className="text-gray-600 dark:text-gray-400">
              {produto.descricao}
            </p>
          </div>

          {/* Seleção de cor */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Cor: {corSelecionada}
            </h3>
            <div className="flex space-x-3">
              {produto.cores.map((cor) => (
                <button
                  key={cor.nome}
                  onClick={() => setCorSelecionada(cor.nome)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    corSelecionada === cor.nome 
                      ? `${classes.border} ring-2 ${classes.ring}` 
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  style={{ backgroundColor: cor.codigo }}
                  title={cor.nome}
                />
              ))}
            </div>
          </div>

          {/* Seleção de tamanho */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Tamanho: {tamanhoSelecionado}
            </h3>
            <div className="flex space-x-2">
              {produto.tamanhos.map((tamanho) => (
                <button
                  key={tamanho.nome}
                  onClick={() => tamanho.disponivel && setTamanhoSelecionado(tamanho.nome)}
                  disabled={!tamanho.disponivel}
                  className={`px-4 py-2 border rounded-lg ${
                    tamanhoSelecionado === tamanho.nome
                      ? `${classes.border} ${classes.bgLight} dark:${classes.bgLightDark} ${classes.text}`
                      : tamanho.disponivel
                      ? `border-gray-300 dark:border-gray-600 hover:${classes.border}`
                      : 'border-gray-200 dark:border-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {tamanho.nome}
                </button>
              ))}
            </div>
          </div>

          {/* Quantidade */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Quantidade
            </h3>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                className="w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                -
              </button>
              <span className="text-lg font-medium w-12 text-center">{quantidade}</span>
              <button
                onClick={() => setQuantidade(Math.min(produto.estoque, quantidade + 1))}
                className="w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                +
              </button>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({produto.estoque} disponíveis)
              </span>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="space-y-3">
            <button
              onClick={handleAdicionarCarrinho}
              disabled={!produto.ativo || !corSelecionada || !tamanhoSelecionado}
              className={`w-full px-6 py-3 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium`}
            >
              {produto.ativo ? 'Solicitar Orçamento' : 'Produto Indisponível'}
            </button>
            <button
              onClick={() => router.back()}
              className="w-full px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Voltar ao Catálogo
            </button>
          </div>

          {produto.ativo && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
              <p className="text-blue-800 dark:text-blue-400 text-sm">
                🏭 Produção sob demanda • Prazo: {produto.prazoProducao || 15} dias • Mínimo: {produto.quantidadeMinima || 1} unidades
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Abas de informações */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8 px-6">
            <button className={`py-4 px-1 border-b-2 ${classes.border} ${classes.text} font-medium text-sm`}>
              Descrição
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
              Especificações
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
              Avaliações ({produto.totalAvaliacoes})
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            <div className="whitespace-pre-line text-gray-600 dark:text-gray-400">
              {produto.descricaoCompleta}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de imagem */}
      <ModalImagem
        isOpen={modalImagemAberto}
        onClose={() => setModalImagemAberto(false)}
        imagemSrc={produto.imagens[imagemSelecionada]}
        imagemAlt={produto.nome}
      />
    </div>
  );
}
