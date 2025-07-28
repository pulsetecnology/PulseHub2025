export default class ServicoClientes {
  constructor() {
    this.clientes = [];
    if (typeof window !== 'undefined') {
      this.clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    }
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
}
