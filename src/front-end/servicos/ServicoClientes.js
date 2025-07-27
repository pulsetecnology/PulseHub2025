export default class ServicoClientes {
  constructor() {
    this.baseUrl = '/api/clientes';
    this.clientes = this.carregarClientes();
  }

  carregarClientes() {
    try {
      const clientesSalvos = localStorage.getItem('clientes');
      return clientesSalvos ? JSON.parse(clientesSalvos) : this.obterClientesExemplo();
    } catch (error) {
      console.error('Erro ao carregar clientes:', error);
      return this.obterClientesExemplo();
    }
  }

  salvarClientes() {
    try {
      localStorage.setItem('clientes', JSON.stringify(this.clientes));
    } catch (error) {
      console.error('Erro ao salvar clientes:', error);
    }
  }

  obterClientesExemplo() {
    return [
      {
        id: '1',
        nome: 'João Silva',
        email: 'joao@email.com',
        telefone: '(11) 99999-9999',
        documento: '123.456.789-00',
        tipo: 'pessoa_fisica',
        endereco: {
          cep: '01234-567',
          logradouro: 'Rua das Flores, 123',
          bairro: 'Centro',
          cidade: 'São Paulo',
          estado: 'SP'
        },
        status: 'ativo',
        dataCreacao: '2024-01-10T08:00:00Z',
        dataAtualizacao: '2024-01-10T08:00:00Z'
      },
      {
        id: '2',
        nome: 'Maria Santos',
        email: 'maria@email.com',
        telefone: '(11) 88888-8888',
        documento: '987.654.321-00',
        tipo: 'pessoa_fisica',
        endereco: {
          cep: '09876-543',
          logradouro: 'Av. Principal, 456',
          bairro: 'Jardim',
          cidade: 'São Paulo',
          estado: 'SP'
        },
        status: 'ativo',
        dataCreacao: '2024-01-12T10:30:00Z',
        dataAtualizacao: '2024-01-12T10:30:00Z'
      },
      {
        id: '3',
        nome: 'Empresa ABC Ltda',
        email: 'contato@empresaabc.com',
        telefone: '(11) 77777-7777',
        documento: '12.345.678/0001-90',
        tipo: 'pessoa_juridica',
        endereco: {
          cep: '12345-678',
          logradouro: 'Rua Comercial, 789',
          bairro: 'Industrial',
          cidade: 'São Paulo',
          estado: 'SP'
        },
        status: 'ativo',
        dataCreacao: '2024-01-08T14:15:00Z',
        dataAtualizacao: '2024-01-08T14:15:00Z'
      }
    ];
  }

  async listar(filtros = {}) {
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 300));

    let clientesFiltrados = [...this.clientes];

    // Aplicar filtros
    if (filtros.status) {
      clientesFiltrados = clientesFiltrados.filter(cliente => 
        cliente.status === filtros.status
      );
    }

    if (filtros.tipo) {
      clientesFiltrados = clientesFiltrados.filter(cliente => 
        cliente.tipo === filtros.tipo
      );
    }

    if (filtros.busca) {
      const termoBusca = filtros.busca.toLowerCase();
      clientesFiltrados = clientesFiltrados.filter(cliente => 
        cliente.nome.toLowerCase().includes(termoBusca) ||
        cliente.email.toLowerCase().includes(termoBusca) ||
        cliente.documento.includes(termoBusca) ||
        cliente.telefone.includes(termoBusca)
      );
    }

    return clientesFiltrados;
  }

  async obterPorId(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const cliente = this.clientes.find(c => c.id === id);
    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }
    
    return cliente;
  }

  async criar(dadosCliente) {
    await new Promise(resolve => setTimeout(resolve, 500));

    // Validações
    const erros = this.validarCliente(dadosCliente);
    if (erros.length > 0) {
      throw new Error(erros.join(', '));
    }

    // Verificar se email já existe
    const emailExiste = this.clientes.some(c => c.email === dadosCliente.email);
    if (emailExiste) {
      throw new Error('Email já está em uso');
    }

    // Verificar se documento já existe
    const documentoExiste = this.clientes.some(c => c.documento === dadosCliente.documento);
    if (documentoExiste) {
      throw new Error('Documento já está em uso');
    }

    // Gerar ID
    const novoId = (Math.max(...this.clientes.map(c => parseInt(c.id))) + 1).toString();

    const novoCliente = {
      id: novoId,
      ...dadosCliente,
      status: dadosCliente.status || 'ativo',
      dataCreacao: new Date().toISOString(),
      dataAtualizacao: new Date().toISOString()
    };

    this.clientes.push(novoCliente);
    this.salvarClientes();

    return novoCliente;
  }

  async atualizar(id, dadosAtualizacao) {
    await new Promise(resolve => setTimeout(resolve, 400));

    const index = this.clientes.findIndex(c => c.id === id);
    if (index === -1) {
      throw new Error('Cliente não encontrado');
    }

    // Validações para atualização
    if (dadosAtualizacao.email) {
      const emailExiste = this.clientes.some(c => c.id !== id && c.email === dadosAtualizacao.email);
      if (emailExiste) {
        throw new Error('Email já está em uso');
      }
    }

    if (dadosAtualizacao.documento) {
      const documentoExiste = this.clientes.some(c => c.id !== id && c.documento === dadosAtualizacao.documento);
      if (documentoExiste) {
        throw new Error('Documento já está em uso');
      }
    }

    const clienteAtualizado = {
      ...this.clientes[index],
      ...dadosAtualizacao,
      dataAtualizacao: new Date().toISOString()
    };

    this.clientes[index] = clienteAtualizado;
    this.salvarClientes();

    return clienteAtualizado;
  }

  async excluir(id) {
    await new Promise(resolve => setTimeout(resolve, 300));

    const index = this.clientes.findIndex(c => c.id === id);
    if (index === -1) {
      throw new Error('Cliente não encontrado');
    }

    this.clientes.splice(index, 1);
    this.salvarClientes();

    return true;
  }

  async alterarStatus(id, novoStatus) {
    return this.atualizar(id, { status: novoStatus });
  }

  // Métodos para estatísticas
  async obterEstatisticas() {
    await new Promise(resolve => setTimeout(resolve, 200));

    const total = this.clientes.length;
    const ativos = this.clientes.filter(c => c.status === 'ativo').length;
    const inativos = this.clientes.filter(c => c.status === 'inativo').length;
    const pessoaFisica = this.clientes.filter(c => c.tipo === 'pessoa_fisica').length;
    const pessoaJuridica = this.clientes.filter(c => c.tipo === 'pessoa_juridica').length;

    return {
      total,
      ativos,
      inativos,
      pessoaFisica,
      pessoaJuridica
    };
  }

  // Validações
  validarCliente(cliente) {
    const erros = [];

    if (!cliente.nome || cliente.nome.trim().length < 2) {
      erros.push('Nome deve ter pelo menos 2 caracteres');
    }

    if (!cliente.email || !this.validarEmail(cliente.email)) {
      erros.push('Email inválido');
    }

    if (!cliente.telefone || cliente.telefone.length < 10) {
      erros.push('Telefone inválido');
    }

    if (!cliente.documento) {
      erros.push('Documento é obrigatório');
    }

    if (!cliente.tipo || !['pessoa_fisica', 'pessoa_juridica'].includes(cliente.tipo)) {
      erros.push('Tipo de cliente inválido');
    }

    // Validar documento baseado no tipo
    if (cliente.tipo === 'pessoa_fisica' && !this.validarCPF(cliente.documento)) {
      erros.push('CPF inválido');
    }

    if (cliente.tipo === 'pessoa_juridica' && !this.validarCNPJ(cliente.documento)) {
      erros.push('CNPJ inválido');
    }

    // Validar endereço se fornecido
    if (cliente.endereco) {
      if (!cliente.endereco.cep || cliente.endereco.cep.length < 8) {
        erros.push('CEP inválido');
      }
      if (!cliente.endereco.logradouro) {
        erros.push('Logradouro é obrigatório');
      }
      if (!cliente.endereco.cidade) {
        erros.push('Cidade é obrigatória');
      }
      if (!cliente.endereco.estado) {
        erros.push('Estado é obrigatório');
      }
    }

    return erros;
  }

  validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  validarCPF(cpf) {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, '');
    
    if (cpf.length !== 11) return false;
    
    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    
    // Validar dígitos verificadores
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
    
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;
    
    return true;
  }

  validarCNPJ(cnpj) {
    // Remover caracteres não numéricos
    cnpj = cnpj.replace(/[^\d]/g, '');
    
    if (cnpj.length !== 14) return false;
    
    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1{13}$/.test(cnpj)) return false;
    
    // Validar primeiro dígito verificador
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(0))) return false;
    
    // Validar segundo dígito verificador
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(1))) return false;
    
    return true;
  }

  // Formatação
  formatarDocumento(documento, tipo) {
    if (!documento) return '';
    
    const apenasNumeros = documento.replace(/[^\d]/g, '');
    
    if (tipo === 'pessoa_fisica') {
      // Formato CPF: 123.456.789-00
      return apenasNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
      // Formato CNPJ: 12.345.678/0001-90
      return apenasNumeros.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
  }

  formatarTelefone(telefone) {
    if (!telefone) return '';
    
    const apenasNumeros = telefone.replace(/[^\d]/g, '');
    
    if (apenasNumeros.length === 11) {
      // Formato celular: (11) 99999-9999
      return apenasNumeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (apenasNumeros.length === 10) {
      // Formato fixo: (11) 9999-9999
      return apenasNumeros.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    
    return telefone;
  }

  formatarCEP(cep) {
    if (!cep) return '';
    
    const apenasNumeros = cep.replace(/[^\d]/g, '');
    return apenasNumeros.replace(/(\d{5})(\d{3})/, '$1-$2');
  }
}