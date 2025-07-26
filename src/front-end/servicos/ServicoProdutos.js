import ServicoCategorias from './ServicoCategorias';

// Serviço para gerenciar produtos com persistência local
class ServicoProdutos {
  constructor() {
    this.STORAGE_KEY = 'pulsehub_produtos';
    this.inicializarDados();
  }

  inicializarDados() {
    // Verificar se já existem dados no localStorage
    const dadosExistentes = this.obterTodos();
    
    // Verificar se as imagens estão quebradas e recriar se necessário
    
    // Se não existir dados, criar produtos iniciais
    if (dadosExistentes.length === 0 || !dadosExistentes[0].imagens || dadosExistentes[0].imagens[0].includes('/api/placeholder')) {
      const produtosIniciais = [
        {
          id: 1,
          nome: 'Vestido Floral Primavera',
          categoria: 'Vestidos',
          preco: 89.90,
          precoOriginal: 120.00,
          descricao: 'Vestido floral perfeito para a primavera, tecido leve e confortável.',
          ativo: true,
          destaque: false,
          sku: 'VES-001',
          cores: ['Rosa', 'Azul', 'Verde'],
          tamanhos: ['P', 'M', 'G', 'GG'],
          imagens: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop&crop=center'],
          fornecedor: 'Moda Feminina Ltda',
          prazoProducao: 15, // dias para produção
          quantidadeMinima: 10, // quantidade mínima por pedido
          especificacoesTecnicas: {
            material: '100% Viscose',
            cuidados: 'Lavar à mão, não usar alvejante',
            origem: 'Nacional'
          },
          dataAtualizacao: new Date().toISOString(),
          dataCriacao: new Date().toISOString()
        },
        {
          id: 2,
          nome: 'Calça Jeans Skinny',
          categoria: 'Calças',
          preco: 129.90,
          descricao: 'Calça jeans skinny de alta qualidade, modelagem perfeita.',
          ativo: true,
          destaque: true,
          sku: 'CAL-002',
          cores: ['Azul Escuro', 'Azul Claro', 'Preto'],
          tamanhos: ['36', '38', '40', '42', '44'],
          imagens: ['https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=600&fit=crop&crop=center'],
          fornecedor: 'Jeans & Co',
          prazoProducao: 20,
          quantidadeMinima: 5,
          especificacoesTecnicas: {
            material: '98% Algodão, 2% Elastano',
            cuidados: 'Lavar em água fria, secar à sombra',
            origem: 'Nacional'
          },
          dataAtualizacao: new Date().toISOString(),
          dataCriacao: new Date().toISOString()
        },
        {
          id: 3,
          nome: 'Blusa Social Branca',
          categoria: 'Blusas',
          preco: 69.90,
          precoOriginal: 89.90,
          descricao: 'Blusa social elegante, ideal para ambiente corporativo.',
          ativo: true,
          destaque: false,
          sku: 'BLU-003',
          cores: ['Branco', 'Azul Claro', 'Rosa Claro'],
          tamanhos: ['P', 'M', 'G'],
          imagens: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop&crop=center'],
          fornecedor: 'Elegance Fashion',
          prazoProducao: 12,
          quantidadeMinima: 8,
          especificacoesTecnicas: {
            material: '100% Poliéster',
            cuidados: 'Lavar a máquina até 30°C, passar morno',
            origem: 'Nacional'
          },
          dataAtualizacao: new Date().toISOString(),
          dataCriacao: new Date().toISOString()
        }
      ];
      
      this.salvarTodos(produtosIniciais);
    }
  }

  // Obter todos os produtos
  obterTodos() {
    if (typeof window === 'undefined') return [];
    
    try {
      const dados = localStorage.getItem(this.STORAGE_KEY);
      return dados ? JSON.parse(dados) : [];
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      return [];
    }
  }

  // Obter produto por ID
  obterPorId(id) {
    const produtos = this.obterTodos();
    return produtos.find(produto => produto.id === parseInt(id));
  }

  // Salvar todos os produtos
  salvarTodos(produtos) {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(produtos));
    } catch (error) {
      console.error('Erro ao salvar produtos:', error);
    }
  }

  // Criar novo produto
  criar(dadosProduto) {
    const produtos = this.obterTodos();
    const novoId = Math.max(...produtos.map(p => p.id), 0) + 1;
    
    const novoProduto = {
      id: novoId,
      ...dadosProduto,
      preco: parseFloat(dadosProduto.preco),
      precoOriginal: dadosProduto.precoOriginal ? parseFloat(dadosProduto.precoOriginal) : null,
      prazoProducao: parseInt(dadosProduto.prazoProducao) || 15,
      quantidadeMinima: parseInt(dadosProduto.quantidadeMinima) || 1,
      ativo: dadosProduto.ativo !== undefined ? dadosProduto.ativo : true,
      destaque: dadosProduto.destaque !== undefined ? dadosProduto.destaque : false,
      especificacoesTecnicas: dadosProduto.especificacoesTecnicas || {},
      fornecedor: 'Minha Empresa', // Seria obtido do usuário logado
      dataCriacao: new Date().toISOString(),
      dataAtualizacao: new Date().toISOString()
    };
    
    produtos.push(novoProduto);
    this.salvarTodos(produtos);
    
    return novoProduto;
  }

  // Atualizar produto existente
  atualizar(id, dadosProduto) {
    const produtos = this.obterTodos();
    const index = produtos.findIndex(produto => produto.id === parseInt(id));
    
    if (index === -1) {
      throw new Error('Produto não encontrado');
    }
    
    const produtoAtualizado = {
      ...produtos[index],
      ...dadosProduto,
      id: parseInt(id), // Manter o ID original
      preco: parseFloat(dadosProduto.preco),
      precoOriginal: dadosProduto.precoOriginal ? parseFloat(dadosProduto.precoOriginal) : null,
      prazoProducao: parseInt(dadosProduto.prazoProducao) || produtos[index].prazoProducao,
      quantidadeMinima: parseInt(dadosProduto.quantidadeMinima) || produtos[index].quantidadeMinima,
      ativo: dadosProduto.ativo !== undefined ? dadosProduto.ativo : produtos[index].ativo,
      destaque: dadosProduto.destaque !== undefined ? dadosProduto.destaque : produtos[index].destaque,
      especificacoesTecnicas: dadosProduto.especificacoesTecnicas || produtos[index].especificacoesTecnicas,
      dataAtualizacao: new Date().toISOString()
    };
    
    produtos[index] = produtoAtualizado;
    this.salvarTodos(produtos);
    
    return produtoAtualizado;
  }

  // Excluir produto
  excluir(id) {
    const produtos = this.obterTodos();
    const produtosFiltrados = produtos.filter(produto => produto.id !== parseInt(id));
    
    if (produtos.length === produtosFiltrados.length) {
      throw new Error('Produto não encontrado');
    }
    
    this.salvarTodos(produtosFiltrados);
    return true;
  }

  // Filtrar produtos
  filtrar(filtros = {}) {
    let produtos = this.obterTodos();
    
    if (filtros.busca) {
      const busca = filtros.busca.toLowerCase();
      produtos = produtos.filter(produto => 
        produto.nome.toLowerCase().includes(busca) ||
        produto.descricao.toLowerCase().includes(busca) ||
        produto.sku.toLowerCase().includes(busca)
      );
    }
    
    if (filtros.categoria) {
      produtos = produtos.filter(produto => produto.categoria === filtros.categoria);
    }
    
    if (filtros.status) {
      produtos = produtos.filter(produto => produto.status === filtros.status);
    }
    
    if (filtros.precoMin) {
      produtos = produtos.filter(produto => produto.preco >= parseFloat(filtros.precoMin));
    }
    
    if (filtros.precoMax) {
      produtos = produtos.filter(produto => produto.preco <= parseFloat(filtros.precoMax));
    }
    
    // Ordenação
    if (filtros.ordenacao) {
      switch (filtros.ordenacao) {
        case 'nome':
          produtos.sort((a, b) => a.nome.localeCompare(b.nome));
          break;
        case 'preco-asc':
          produtos.sort((a, b) => a.preco - b.preco);
          break;
        case 'preco-desc':
          produtos.sort((a, b) => b.preco - a.preco);
          break;
        case 'avaliacao':
          produtos.sort((a, b) => b.avaliacoes - a.avaliacoes);
          break;
        case 'data':
          produtos.sort((a, b) => new Date(b.dataAtualizacao) - new Date(a.dataAtualizacao));
          break;
      }
    }
    
    return produtos;
  }

  // Obter categorias únicas (agora usa o ServicoCategorias)
  obterCategorias() {
    return ServicoCategorias.obterNomes();
  }

  // Validar SKU único
  validarSKU(sku, idExcluir = null) {
    const produtos = this.obterTodos();
    return !produtos.some(produto => 
      produto.sku === sku && produto.id !== idExcluir
    );
  }

  // Converter imagem para base64 (para persistir localmente)
  async converterImagemParaBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // Processar upload de imagens
  async processarImagens(imagens) {
    const imagensProcessadas = [];
    
    for (const imagem of imagens) {
      if (typeof imagem === 'string') {
        // Se já é uma string (URL ou base64), manter como está
        imagensProcessadas.push(imagem);
      } else if (imagem instanceof File) {
        // Se é um arquivo, converter para base64
        try {
          const base64 = await this.converterImagemParaBase64(imagem);
          imagensProcessadas.push(base64);
        } catch (error) {
          console.error('Erro ao processar imagem:', error);
        }
      }
    }
    
    return imagensProcessadas;
  }

  // Resetar dados (útil para desenvolvimento)
  resetarDados() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.inicializarDados();
  }

  // Limpar localStorage (útil para desenvolvimento)
  limparDados() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

// Exportar instância única (singleton)
export default new ServicoProdutos();