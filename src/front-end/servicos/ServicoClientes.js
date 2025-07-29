export default class ServicoClientes {
  constructor() {
    this.clientes = [];
    if (typeof window !== 'undefined') {
      this.clientes = JSON.parse(localStorage.getItem('clientes')) || [];
      // Inicializar com dados de exemplo se não houver clientes
      if (this.clientes.length === 0) {
        this.inicializarDadosExemplo();
      }
    }
  }

  inicializarDadosExemplo() {
    const clientesExemplo = [
      {
        id: '1',
        razaoSocial: 'Tech Solutions Ltda',
        nomeFantasia: 'TechSol',
        cnpj: '12.345.678/0001-90',
        inscricaoEstadual: '123456789',
        telefoneComercial: '(11) 3456-7890',
        emailComercial: 'contato@techsol.com.br',
        cep: '01234-567',
        rua: 'Rua das Flores',
        numero: '123',
        complemento: 'Sala 45',
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        nomeContato: 'João Silva',
        emailContato: 'joao@techsol.com.br',
        telefoneContato: '(11) 99876-5432',
        limiteCredito: 50000.00,
        condicoesPagamento: '30 dias',
        tipo: 'pessoa_juridica',
        status: 'ativo',
        dataCadastro: new Date('2024-01-15').toISOString(),
        ultimaCompra: new Date('2024-12-01').toISOString(),
        totalCompras: 15,
        valorTotal: 125000.00,
        createdAt: new Date('2024-01-15').toISOString(),
        updatedAt: new Date('2024-12-01').toISOString(),
      },
      {
        id: '2',
        razaoSocial: 'Maria Santos',
        nomeFantasia: 'Maria Santos',
        cnpj: '',
        inscricaoEstadual: '',
        telefoneComercial: '(21) 2345-6789',
        emailComercial: 'maria.santos@email.com',
        cep: '20123-456',
        rua: 'Avenida Atlântica',
        numero: '456',
        complemento: 'Apt 201',
        bairro: 'Copacabana',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        nomeContato: 'Maria Santos',
        emailContato: 'maria.santos@email.com',
        telefoneContato: '(21) 98765-4321',
        limiteCredito: 10000.00,
        condicoesPagamento: '15 dias',
        tipo: 'pessoa_fisica',
        status: 'ativo',
        dataCadastro: new Date('2024-02-20').toISOString(),
        ultimaCompra: new Date('2024-11-15').toISOString(),
        totalCompras: 8,
        valorTotal: 35000.00,
        createdAt: new Date('2024-02-20').toISOString(),
        updatedAt: new Date('2024-11-15').toISOString(),
      },
      {
        id: '3',
        razaoSocial: 'Comércio Mineiro Ltda',
        nomeFantasia: 'ComMinas',
        cnpj: '98.765.432/0001-10',
        inscricaoEstadual: '987654321',
        telefoneComercial: '(31) 3333-4444',
        emailComercial: 'vendas@comminas.com.br',
        cep: '30123-789',
        rua: 'Rua da Liberdade',
        numero: '789',
        complemento: '',
        bairro: 'Savassi',
        cidade: 'Belo Horizonte',
        estado: 'MG',
        nomeContato: 'Carlos Oliveira',
        emailContato: 'carlos@comminas.com.br',
        telefoneContato: '(31) 99999-8888',
        limiteCredito: 75000.00,
        condicoesPagamento: '45 dias',
        tipo: 'pessoa_juridica',
        status: 'inativo',
        dataCadastro: new Date('2024-03-10').toISOString(),
        ultimaCompra: new Date('2024-08-20').toISOString(),
        totalCompras: 22,
        valorTotal: 180000.00,
        createdAt: new Date('2024-03-10').toISOString(),
        updatedAt: new Date('2024-08-20').toISOString(),
      },
      {
        id: '4',
        razaoSocial: 'Ana Costa',
        nomeFantasia: 'Ana Costa',
        cnpj: '',
        inscricaoEstadual: '',
        telefoneComercial: '(85) 2222-3333',
        emailComercial: 'ana.costa@email.com',
        cep: '60123-456',
        rua: 'Rua do Sol',
        numero: '321',
        complemento: '',
        bairro: 'Aldeota',
        cidade: 'Fortaleza',
        estado: 'CE',
        nomeContato: 'Ana Costa',
        emailContato: 'ana.costa@email.com',
        telefoneContato: '(85) 98888-7777',
        limiteCredito: 15000.00,
        condicoesPagamento: '30 dias',
        tipo: 'pessoa_fisica',
        status: 'ativo',
        dataCadastro: new Date('2024-04-05').toISOString(),
        ultimaCompra: new Date('2024-12-10').toISOString(),
        totalCompras: 12,
        valorTotal: 42000.00,
        createdAt: new Date('2024-04-05').toISOString(),
        updatedAt: new Date('2024-12-10').toISOString(),
      },
      {
        id: '5',
        razaoSocial: 'Distribuidora Sul S.A.',
        nomeFantasia: 'DistSul',
        cnpj: '11.222.333/0001-44',
        inscricaoEstadual: '112233445',
        telefoneComercial: '(51) 3344-5566',
        emailComercial: 'comercial@distsul.com.br',
        cep: '90123-456',
        rua: 'Avenida Ipiranga',
        numero: '1000',
        complemento: 'Andar 5',
        bairro: 'Centro',
        cidade: 'Porto Alegre',
        estado: 'RS',
        nomeContato: 'Roberto Lima',
        emailContato: 'roberto@distsul.com.br',
        telefoneContato: '(51) 99777-6666',
        limiteCredito: 100000.00,
        condicoesPagamento: '60 dias',
        tipo: 'pessoa_juridica',
        status: 'ativo',
        dataCadastro: new Date('2024-05-12').toISOString(),
        ultimaCompra: new Date('2024-12-05').toISOString(),
        totalCompras: 28,
        valorTotal: 250000.00,
        createdAt: new Date('2024-05-12').toISOString(),
        updatedAt: new Date('2024-12-05').toISOString(),
      }
    ];

    localStorage.setItem('clientes', JSON.stringify(clientesExemplo));
    this.clientes = clientesExemplo;
  }

  listar() {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('clientes')) || [];
    }
    const clientesSalvos = JSON.parse(localStorage.getItem('clientes')) || [];
    console.log('ServicoClientes.listar() retornou:', clientesSalvos);
    return clientesSalvos;
  }

  obterPorId(id) {
    return this.clientes.find(cliente => cliente.id === id);
  }

  adicionar(cliente) {
    let clientesAtuais = [];
    if (typeof window !== 'undefined') {
      clientesAtuais = JSON.parse(localStorage.getItem('clientes')) || [];
    }
    cliente.id = new Date().getTime().toString();
    clientesAtuais.push({
      id: cliente.id,
      razaoSocial: cliente.razaoSocial || '',
      nomeFantasia: cliente.nomeFantasia || '',
      cnpj: cliente.cnpj || '',
      inscricaoEstadual: cliente.inscricaoEstadual || '',
      telefoneComercial: cliente.telefoneComercial || '',
      emailComercial: cliente.emailComercial || '',
      cep: cliente.cep || '',
      rua: cliente.rua || '',
      numero: cliente.numero || '',
      complemento: cliente.complemento || '',
      bairro: cliente.bairro || '',
      cidade: cliente.cidade || '',
      estado: cliente.estado || '',
      nomeContato: cliente.nomeContato || '',
      emailContato: cliente.emailContato || '',
      telefoneContato: cliente.telefoneContato || '',
      limiteCredito: cliente.limiteCredito || 0.00,
      condicoesPagamento: cliente.condicoesPagamento || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    localStorage.setItem('clientes', JSON.stringify(clientesAtuais));
  }

  atualizar(clienteAtualizado) {
    let clientesAtuais = [];
    if (typeof window !== 'undefined') {
      clientesAtuais = JSON.parse(localStorage.getItem('clientes')) || [];
    }
    const index = clientesAtuais.findIndex(cliente => cliente.id === clienteAtualizado.id);
    if (index !== -1) {
      clientesAtuais[index] = {
        ...clientesAtuais[index],
        ...clienteAtualizado,
        updatedAt: new Date().toISOString(),
      };
      localStorage.setItem('clientes', JSON.stringify(clientesAtuais));
    }
  }

  excluir(id) {
    let clientesAtuais = [];
    if (typeof window !== 'undefined') {
      clientesAtuais = JSON.parse(localStorage.getItem('clientes')) || [];
    }
    this.clientes = clientesAtuais.filter(cliente => cliente.id !== id);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  salvar() {
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  limparDados() {
    localStorage.removeItem('clientes');
    // Opcional: recarregar dados de exemplo se houver
    // this.inicializarDados(); 
  }

  // Métodos de filtro
  filtrar(filtros = {}) {
    let clientesFiltrados = this.listar();

    // Filtro por busca (nome fantasia/razão social)
    if (filtros.busca) {
      const termoBusca = filtros.busca.toLowerCase().trim();
      clientesFiltrados = clientesFiltrados.filter(cliente => {
        const nomeFantasia = (cliente.nomeFantasia || '').toLowerCase();
        const razaoSocial = (cliente.razaoSocial || '').toLowerCase();
        const nomeContato = (cliente.nomeContato || '').toLowerCase();
        const email = (cliente.emailComercial || '').toLowerCase();
        
        return nomeFantasia.includes(termoBusca) || 
               razaoSocial.includes(termoBusca) ||
               nomeContato.includes(termoBusca) ||
               email.includes(termoBusca);
      });
    }

    // Filtro por cidade
    if (filtros.cidade) {
      clientesFiltrados = clientesFiltrados.filter(cliente => 
        cliente.cidade === filtros.cidade
      );
    }

    // Filtro por status
    if (filtros.status) {
      clientesFiltrados = clientesFiltrados.filter(cliente => 
        cliente.status === filtros.status
      );
    }

    // Filtro por tipo
    if (filtros.tipo) {
      clientesFiltrados = clientesFiltrados.filter(cliente => 
        cliente.tipo === filtros.tipo
      );
    }

    // Ordenação
    if (filtros.ordenacao) {
      clientesFiltrados = this.ordenar(clientesFiltrados, filtros.ordenacao);
    }

    return clientesFiltrados;
  }

  ordenar(clientes, criterio) {
    return [...clientes].sort((a, b) => {
      switch (criterio) {
        case 'nome':
          const nomeA = a.nomeFantasia || a.razaoSocial || '';
          const nomeB = b.nomeFantasia || b.razaoSocial || '';
          return nomeA.localeCompare(nomeB);
        
        case 'data_cadastro':
          return new Date(b.dataCadastro) - new Date(a.dataCadastro);
        
        case 'ultima_compra':
          const dataA = a.ultimaCompra ? new Date(a.ultimaCompra) : new Date(0);
          const dataB = b.ultimaCompra ? new Date(b.ultimaCompra) : new Date(0);
          return dataB - dataA;
        
        default:
          return 0;
      }
    });
  }

  obterCidades() {
    const clientes = this.listar();
    const cidades = [...new Set(clientes.map(cliente => cliente.cidade).filter(Boolean))];
    return cidades.sort();
  }

  obterEstatisticas() {
    const clientes = this.listar();
    
    return {
      total: clientes.length,
      ativos: clientes.filter(c => c.status === 'ativo').length,
      inativos: clientes.filter(c => c.status === 'inativo').length,
      pessoaFisica: clientes.filter(c => c.tipo === 'pessoa_fisica').length,
      pessoaJuridica: clientes.filter(c => c.tipo === 'pessoa_juridica').length,
      valorTotalCompras: clientes.reduce((total, c) => total + (c.valorTotal || 0), 0),
      totalCompras: clientes.reduce((total, c) => total + (c.totalCompras || 0), 0)
    };
  }

  // Alternar status do cliente
  alternarStatus(id) {
    let clientesAtuais = [];
    if (typeof window !== 'undefined') {
      clientesAtuais = JSON.parse(localStorage.getItem('clientes')) || [];
    }
    
    const index = clientesAtuais.findIndex(cliente => cliente.id === id);
    if (index !== -1) {
      const novoStatus = clientesAtuais[index].status === 'ativo' ? 'inativo' : 'ativo';
      clientesAtuais[index] = {
        ...clientesAtuais[index],
        status: novoStatus,
        updatedAt: new Date().toISOString(),
      };
      localStorage.setItem('clientes', JSON.stringify(clientesAtuais));
      this.clientes = clientesAtuais;
      return clientesAtuais[index];
    }
    return null;
  }

  // Validação e sanitização
  validarFiltros(filtros) {
    const filtrosLimpos = {};

    if (filtros.busca && typeof filtros.busca === 'string') {
      filtrosLimpos.busca = filtros.busca.trim().substring(0, 100);
    }

    if (filtros.cidade && typeof filtros.cidade === 'string') {
      filtrosLimpos.cidade = filtros.cidade.trim();
    }

    if (filtros.status && ['ativo', 'inativo'].includes(filtros.status)) {
      filtrosLimpos.status = filtros.status;
    }

    if (filtros.tipo && ['pessoa_fisica', 'pessoa_juridica'].includes(filtros.tipo)) {
      filtrosLimpos.tipo = filtros.tipo;
    }

    if (filtros.ordenacao && ['nome', 'data_cadastro', 'ultima_compra'].includes(filtros.ordenacao)) {
      filtrosLimpos.ordenacao = filtros.ordenacao;
    }

    return filtrosLimpos;
  }
}
