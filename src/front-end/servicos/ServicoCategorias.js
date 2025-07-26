// Serviço para gerenciar categorias de produtos
class ServicoCategorias {
  constructor() {
    this.STORAGE_KEY = 'pulsehub_categorias';
    this.inicializarDados();
  }

  inicializarDados() {
    const dadosExistentes = this.obterTodas();
    
    // Se não existir dados, criar categorias iniciais
    if (dadosExistentes.length === 0) {
      const categoriasIniciais = [
        {
          id: 1,
          nome: 'Vestidos',
          descricao: 'Vestidos femininos diversos',
          ativa: true,
          dataCriacao: new Date().toISOString(),
          dataAtualizacao: new Date().toISOString()
        },
        {
          id: 2,
          nome: 'Calças',
          descricao: 'Calças femininas e masculinas',
          ativa: true,
          dataCriacao: new Date().toISOString(),
          dataAtualizacao: new Date().toISOString()
        },
        {
          id: 3,
          nome: 'Blusas',
          descricao: 'Blusas e camisetas',
          ativa: true,
          dataCriacao: new Date().toISOString(),
          dataAtualizacao: new Date().toISOString()
        },
        {
          id: 4,
          nome: 'Saias',
          descricao: 'Saias de diversos modelos',
          ativa: true,
          dataCriacao: new Date().toISOString(),
          dataAtualizacao: new Date().toISOString()
        },
        {
          id: 5,
          nome: 'Blazers',
          descricao: 'Blazers e casacos',
          ativa: true,
          dataCriacao: new Date().toISOString(),
          dataAtualizacao: new Date().toISOString()
        },
        {
          id: 6,
          nome: 'Calçados',
          descricao: 'Sapatos, tênis e sandálias',
          ativa: true,
          dataCriacao: new Date().toISOString(),
          dataAtualizacao: new Date().toISOString()
        },
        {
          id: 7,
          nome: 'Acessórios',
          descricao: 'Bolsas, cintos e acessórios',
          ativa: true,
          dataCriacao: new Date().toISOString(),
          dataAtualizacao: new Date().toISOString()
        }
      ];
      
      this.salvarTodas(categoriasIniciais);
    }
  }

  // Obter todas as categorias
  obterTodas() {
    if (typeof window === 'undefined') return [];
    
    try {
      const dados = localStorage.getItem(this.STORAGE_KEY);
      return dados ? JSON.parse(dados) : [];
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
      return [];
    }
  }

  // Obter apenas categorias ativas
  obterAtivas() {
    return this.obterTodas().filter(categoria => categoria.ativa);
  }

  // Obter categoria por ID
  obterPorId(id) {
    const categorias = this.obterTodas();
    return categorias.find(categoria => categoria.id === parseInt(id));
  }

  // Salvar todas as categorias
  salvarTodas(categorias) {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(categorias));
    } catch (error) {
      console.error('Erro ao salvar categorias:', error);
    }
  }

  // Criar nova categoria
  criar(dadosCategoria) {
    const categorias = this.obterTodas();
    
    // Verificar se já existe categoria com o mesmo nome
    const categoriaExistente = categorias.find(cat => 
      cat.nome.toLowerCase() === dadosCategoria.nome.toLowerCase()
    );
    
    if (categoriaExistente) {
      throw new Error('Já existe uma categoria com este nome');
    }
    
    const novoId = Math.max(...categorias.map(c => c.id), 0) + 1;
    
    const novaCategoria = {
      id: novoId,
      nome: dadosCategoria.nome.trim(),
      descricao: dadosCategoria.descricao?.trim() || '',
      ativa: dadosCategoria.ativa !== undefined ? dadosCategoria.ativa : true,
      dataCriacao: new Date().toISOString(),
      dataAtualizacao: new Date().toISOString()
    };
    
    categorias.push(novaCategoria);
    this.salvarTodas(categorias);
    
    return novaCategoria;
  }

  // Atualizar categoria existente
  atualizar(id, dadosCategoria) {
    const categorias = this.obterTodas();
    const index = categorias.findIndex(categoria => categoria.id === parseInt(id));
    
    if (index === -1) {
      throw new Error('Categoria não encontrada');
    }
    
    // Verificar se já existe outra categoria com o mesmo nome
    const categoriaExistente = categorias.find(cat => 
      cat.nome.toLowerCase() === dadosCategoria.nome.toLowerCase() && 
      cat.id !== parseInt(id)
    );
    
    if (categoriaExistente) {
      throw new Error('Já existe uma categoria com este nome');
    }
    
    const categoriaAtualizada = {
      ...categorias[index],
      nome: dadosCategoria.nome.trim(),
      descricao: dadosCategoria.descricao?.trim() || categorias[index].descricao,
      ativa: dadosCategoria.ativa !== undefined ? dadosCategoria.ativa : categorias[index].ativa,
      dataAtualizacao: new Date().toISOString()
    };
    
    categorias[index] = categoriaAtualizada;
    this.salvarTodas(categorias);
    
    return categoriaAtualizada;
  }

  // Excluir categoria (soft delete - marca como inativa)
  excluir(id) {
    const categorias = this.obterTodas();
    const index = categorias.findIndex(categoria => categoria.id === parseInt(id));
    
    if (index === -1) {
      throw new Error('Categoria não encontrada');
    }
    
    // Marcar como inativa ao invés de excluir
    categorias[index].ativa = false;
    categorias[index].dataAtualizacao = new Date().toISOString();
    
    this.salvarTodas(categorias);
    
    return categorias[index];
  }

  // Reativar categoria
  reativar(id) {
    const categorias = this.obterTodas();
    const index = categorias.findIndex(categoria => categoria.id === parseInt(id));
    
    if (index === -1) {
      throw new Error('Categoria não encontrada');
    }
    
    categorias[index].ativa = true;
    categorias[index].dataAtualizacao = new Date().toISOString();
    
    this.salvarTodas(categorias);
    
    return categorias[index];
  }

  // Obter nomes das categorias ativas (para compatibilidade)
  obterNomes() {
    return this.obterAtivas().map(categoria => categoria.nome);
  }

  // Filtrar categorias
  filtrar(filtros = {}) {
    let categorias = this.obterTodas();
    
    if (filtros.busca) {
      const busca = filtros.busca.toLowerCase();
      categorias = categorias.filter(categoria =>
        categoria.nome.toLowerCase().includes(busca) ||
        categoria.descricao.toLowerCase().includes(busca)
      );
    }
    
    if (filtros.ativa !== undefined) {
      categorias = categorias.filter(categoria => categoria.ativa === filtros.ativa);
    }
    
    // Ordenação
    if (filtros.ordenacao) {
      categorias.sort((a, b) => {
        switch (filtros.ordenacao) {
          case 'nome':
            return a.nome.localeCompare(b.nome);
          case 'data':
            return new Date(b.dataAtualizacao) - new Date(a.dataAtualizacao);
          default:
            return 0;
        }
      });
    }
    
    return categorias;
  }

  // Resetar dados (útil para desenvolvimento)
  resetarDados() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.inicializarDados();
  }

  // Limpar dados
  limparDados() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

// Exportar instância única (singleton)
export default new ServicoCategorias();