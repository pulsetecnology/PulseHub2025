import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ServicoProdutos from '../../servicos/ServicoProdutos';
import ServicoCategorias from '../../servicos/ServicoCategorias';
import InputPreco from '../comum/InputPreco';
import { usarCorTema } from '../../utils/coresTema';

export default function FormularioProduto({ produto = null }) {
  const router = useRouter();
  const isEdicao = !!produto;
  const { classes } = usarCorTema();
  
  const [dadosProduto, setDadosProduto] = useState({
    nome: '',
    categoria: '',
    preco: '',
    precoOriginal: '',
    descricao: '',
    ativo: true,
    destaque: false,
    sku: '',
    cores: [],
    tamanhos: [],
    imagens: [],
    prazoProducao: '15',
    quantidadeMinima: '1',
    especificacoesTecnicas: {
      material: '',
      cuidados: '',
      origem: 'Nacional'
    }
  });
  
  const [novaImagem, setNovaImagem] = useState('');
  const [novaCor, setNovaCor] = useState('');
  const [novoTamanho, setNovoTamanho] = useState('');
  const [salvando, setSalvando] = useState(false);
  const [erros, setErros] = useState({});
  const [categorias, setCategorias] = useState([]);

  // Carregar categorias
  useEffect(() => {
    const categoriasCarregadas = ServicoCategorias.obterAtivas();
    setCategorias(categoriasCarregadas);
  }, []);

  // Carregar dados do produto se estiver editando
  useEffect(() => {
    if (produto) {
      setDadosProduto({
        nome: produto.nome || '',
        categoria: produto.categoria || '',
        preco: produto.preco?.toString() || '',
        precoOriginal: produto.precoOriginal?.toString() || '',
        descricao: produto.descricao || '',
        ativo: produto.ativo !== undefined ? produto.ativo : true,
        destaque: produto.destaque !== undefined ? produto.destaque : false,
        sku: produto.sku || '',
        cores: produto.cores || [],
        tamanhos: produto.tamanhos || [],
        imagens: produto.imagens || [],
        prazoProducao: produto.prazoProducao?.toString() || '15',
        quantidadeMinima: produto.quantidadeMinima?.toString() || '1',
        especificacoesTecnicas: produto.especificacoesTecnicas || {
          material: '',
          cuidados: '',
          origem: 'Nacional'
        }
      });
    }
  }, [produto]);



  const handleInputChange = (campo, valor) => {
    setDadosProduto(prev => ({
      ...prev,
      [campo]: valor
    }));
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (erros[campo]) {
      setErros(prev => ({
        ...prev,
        [campo]: null
      }));
    }
  };

  const adicionarImagem = () => {
    if (novaImagem.trim()) {
      setDadosProduto(prev => ({
        ...prev,
        imagens: [...prev.imagens, novaImagem.trim()]
      }));
      setNovaImagem('');
    }
  };

  const removerImagem = (index) => {
    setDadosProduto(prev => ({
      ...prev,
      imagens: prev.imagens.filter((_, i) => i !== index)
    }));
  };

  const adicionarCor = () => {
    if (novaCor.trim() && !dadosProduto.cores.includes(novaCor.trim())) {
      setDadosProduto(prev => ({
        ...prev,
        cores: [...prev.cores, novaCor.trim()]
      }));
      setNovaCor('');
    }
  };

  const removerCor = (cor) => {
    setDadosProduto(prev => ({
      ...prev,
      cores: prev.cores.filter(c => c !== cor)
    }));
  };

  const adicionarTamanho = () => {
    if (novoTamanho.trim() && !dadosProduto.tamanhos.includes(novoTamanho.trim())) {
      setDadosProduto(prev => ({
        ...prev,
        tamanhos: [...prev.tamanhos, novoTamanho.trim()]
      }));
      setNovoTamanho('');
    }
  };

  const removerTamanho = (tamanho) => {
    setDadosProduto(prev => ({
      ...prev,
      tamanhos: prev.tamanhos.filter(t => t !== tamanho)
    }));
  };

  const validarFormulario = () => {
    const novosErros = {};

    if (!dadosProduto.nome.trim()) {
      novosErros.nome = 'Nome é obrigatório';
    }

    if (!dadosProduto.categoria) {
      novosErros.categoria = 'Categoria é obrigatória';
    }

    if (!dadosProduto.preco || parseFloat(dadosProduto.preco) <= 0) {
      novosErros.preco = 'Preço deve ser maior que zero';
    }

    if (!dadosProduto.descricao.trim()) {
      novosErros.descricao = 'Descrição é obrigatória';
    }

    if (!dadosProduto.prazoProducao || parseInt(dadosProduto.prazoProducao) < 1) {
      novosErros.prazoProducao = 'Prazo de produção deve ser pelo menos 1 dia';
    }

    if (!dadosProduto.quantidadeMinima || parseInt(dadosProduto.quantidadeMinima) < 1) {
      novosErros.quantidadeMinima = 'Quantidade mínima deve ser pelo menos 1';
    }

    if (!dadosProduto.sku.trim()) {
      novosErros.sku = 'SKU é obrigatório';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validarFormulario()) {
      return;
    }

    setSalvando(true);

    try {
      // Processar imagens antes de salvar
      const imagensProcessadas = await ServicoProdutos.processarImagens(dadosProduto.imagens);
      
      const dadosParaSalvar = {
        ...dadosProduto,
        imagens: imagensProcessadas
      };
      
      if (isEdicao) {
        // Atualizar produto existente
        await ServicoProdutos.atualizar(produto.id, dadosParaSalvar);
        console.log('Produto atualizado com sucesso!');
      } else {
        // Criar novo produto
        await ServicoProdutos.criar(dadosParaSalvar);
        console.log('Produto criado com sucesso!');
      }
      
      // Redirecionar para a lista de produtos
      router.push('/produtos');
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
      alert('Erro ao salvar produto: ' + error.message);
    } finally {
      setSalvando(false);
    }
  };

  const handleUploadImagem = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Validar tipo de arquivo
        if (!file.type.startsWith('image/')) {
          alert('Por favor, selecione apenas arquivos de imagem.');
          return;
        }
        
        // Validar tamanho (máximo 5MB)
        if (file.size > 5 * 1024 * 1024) {
          alert('A imagem deve ter no máximo 5MB.');
          return;
        }
        
        // Converter para base64 e adicionar à lista
        const base64 = await ServicoProdutos.converterImagemParaBase64(file);
        setDadosProduto(prev => ({
          ...prev,
          imagens: [...prev.imagens, base64]
        }));
      } catch (error) {
        console.error('Erro ao processar imagem:', error);
        alert('Erro ao processar imagem. Tente novamente.');
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Botão voltar */}
      <button
        onClick={() => router.push('/produtos')}
        className="flex items-center text-purple-600 hover:text-purple-700 transition-colors mb-6"
      >
        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Voltar para Produtos
      </button>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna principal - Informações básicas */}
          <div className="lg:col-span-2 space-y-6">
            {/* Informações básicas */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Informações Básicas
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome do Produto *
                  </label>
                  <input
                    type="text"
                    value={dadosProduto.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                      erros.nome ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Ex: Vestido Floral Primavera"
                  />
                  {erros.nome && (
                    <p className="mt-1 text-sm text-red-600">{erros.nome}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    SKU *
                  </label>
                  <input
                    type="text"
                    value={dadosProduto.sku}
                    onChange={(e) => handleInputChange('sku', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                      erros.sku ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Ex: VES-001"
                  />
                  {erros.sku && (
                    <p className="mt-1 text-sm text-red-600">{erros.sku}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Categoria *
                  </label>
                  <select
                    value={dadosProduto.categoria}
                    onChange={(e) => handleInputChange('categoria', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                      erros.categoria ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    <option value="">Selecione uma categoria</option>
                    {categorias.map(categoria => (
                      <option key={categoria.id} value={categoria.nome}>{categoria.nome}</option>
                    ))}
                  </select>
                  <div className="mt-2">
                    <a 
                      href="/categorias" 
                      target="_blank"
                      className="text-sm text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                    >
                      Gerenciar categorias →
                    </a>
                  </div>
                  {erros.categoria && (
                    <p className="mt-1 text-sm text-red-600">{erros.categoria}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Status
                  </label>
                  <select
                    value={dadosProduto.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                    <option value="rascunho">Rascunho</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Descrição *
                </label>
                <textarea
                  value={dadosProduto.descricao}
                  onChange={(e) => handleInputChange('descricao', e.target.value)}
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                    erros.descricao ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Descreva o produto detalhadamente..."
                />
                {erros.descricao && (
                  <p className="mt-1 text-sm text-red-600">{erros.descricao}</p>
                )}
              </div>
            </div>

            {/* Preços e produção */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Preços e Produção
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Preço *
                  </label>
                  <InputPreco
                    value={dadosProduto.preco}
                    onChange={(valor) => handleInputChange('preco', valor)}
                    className={`w-full pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                      erros.preco ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="0,00"
                  />
                  {erros.preco && (
                    <p className="mt-1 text-sm text-red-600">{erros.preco}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Preço Original
                  </label>
                  <InputPreco
                    value={dadosProduto.precoOriginal}
                    onChange={(valor) => handleInputChange('precoOriginal', valor)}
                    className="w-full pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="0,00"
                  />
                  <p className="mt-1 text-xs text-gray-500">Para mostrar desconto</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Prazo de Produção (dias) *
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={dadosProduto.prazoProducao}
                    onChange={(e) => handleInputChange('prazoProducao', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                      erros.prazoProducao ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="15"
                  />
                  {erros.prazoProducao && (
                    <p className="mt-1 text-sm text-red-600">{erros.prazoProducao}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Quantidade Mínima por Pedido *
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={dadosProduto.quantidadeMinima}
                    onChange={(e) => handleInputChange('quantidadeMinima', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                      erros.quantidadeMinima ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="1"
                  />
                  {erros.quantidadeMinima && (
                    <p className="mt-1 text-sm text-red-600">{erros.quantidadeMinima}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Variantes */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Variantes do Produto
              </h3>
              
              {/* Cores */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cores Disponíveis
                </label>
                <div className="flex items-center space-x-2 mb-3">
                  <input
                    type="text"
                    value={novaCor}
                    onChange={(e) => setNovaCor(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Ex: Azul, Vermelho, Verde..."
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), adicionarCor())}
                  />
                  <button
                    type="button"
                    onClick={adicionarCor}
                    className={`px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors`}
                  >
                    Adicionar
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dadosProduto.cores.map((cor, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm"
                    >
                      {cor}
                      <button
                        type="button"
                        onClick={() => removerCor(cor)}
                        className="ml-2 text-purple-600 hover:text-purple-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Tamanhos */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tamanhos Disponíveis
                </label>
                <div className="flex items-center space-x-2 mb-3">
                  <input
                    type="text"
                    value={novoTamanho}
                    onChange={(e) => setNovoTamanho(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Ex: P, M, G, 36, 38..."
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), adicionarTamanho())}
                  />
                  <button
                    type="button"
                    onClick={adicionarTamanho}
                    className={`px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors`}
                  >
                    Adicionar
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dadosProduto.tamanhos.map((tamanho, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tamanho}
                      <button
                        type="button"
                        onClick={() => removerTamanho(tamanho)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Imagens */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Imagens do Produto
              </h3>
              
              {/* Upload de imagem */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Adicionar Imagem
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUploadImagem}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              {/* URL da imagem */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Ou URL da Imagem
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="url"
                    value={novaImagem}
                    onChange={(e) => setNovaImagem(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="https://exemplo.com/imagem.jpg"
                  />
                  <button
                    type="button"
                    onClick={adicionarImagem}
                    className={`px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors`}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Lista de imagens */}
              <div className="space-y-3">
                {dadosProduto.imagens.map((imagem, index) => (
                  <div key={index} className="relative">
                    <img
                      src={imagem}
                      alt={`Produto ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-32 hidden items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg">
                      <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <button
                      type="button"
                      onClick={() => removerImagem(index)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
                
                {dadosProduto.imagens.length === 0 && (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    <svg className="mx-auto h-12 w-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Nenhuma imagem adicionada</p>
                  </div>
                )}
              </div>
            </div>

            {/* Especificações Técnicas */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Especificações Técnicas
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Material
                  </label>
                  <input
                    type="text"
                    value={dadosProduto.especificacoesTecnicas.material}
                    onChange={(e) => handleInputChange('especificacoesTecnicas', {
                      ...dadosProduto.especificacoesTecnicas,
                      material: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Ex: 100% Algodão, Poliéster..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Origem
                  </label>
                  <select
                    value={dadosProduto.especificacoesTecnicas.origem}
                    onChange={(e) => handleInputChange('especificacoesTecnicas', {
                      ...dadosProduto.especificacoesTecnicas,
                      origem: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="Nacional">Nacional</option>
                    <option value="Importado">Importado</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cuidados e Instruções
                </label>
                <textarea
                  value={dadosProduto.especificacoesTecnicas.cuidados}
                  onChange={(e) => handleInputChange('especificacoesTecnicas', {
                    ...dadosProduto.especificacoesTecnicas,
                    cuidados: e.target.value
                  })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Ex: Lavar à mão, não usar alvejante, secar à sombra..."
                />
              </div>

              <div className="mt-4 space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={dadosProduto.ativo}
                    onChange={(e) => handleInputChange('ativo', e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Produto ativo para venda
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={dadosProduto.destaque}
                    onChange={(e) => handleInputChange('destaque', e.target.checked)}
                    className="rounded border-gray-300 text-yellow-600 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    ⭐ Produto em destaque (aparece primeiro no catálogo)
                  </span>
                </label>
              </div>
            </div>

            {/* Ações */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={salvando}
                  className={`w-full px-4 py-3 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
                >
                  {salvando ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {isEdicao ? 'Atualizando...' : 'Salvando...'}
                    </>
                  ) : (
                    <>
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {isEdicao ? 'Atualizar Produto' : 'Salvar Produto'}
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => router.push('/produtos')}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}