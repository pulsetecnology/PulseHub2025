import ServicoClientes from './ServicoClientes';
import { LocalStorageManager } from '../utils/localStorage';
import servicoStatusPedido from './ServicoStatusPedido';

export default class ServicoPedidos {
  constructor() {
    this.baseUrl = '/api/pedidos';
    this.servicoClientes = new ServicoClientes();
    this.pedidos = this.carregarPedidos();
  }

  carregarPedidos() {
    try {
      const pedidos = LocalStorageManager.getItem('pedidos', this.obterPedidosExemplo());
      
      // Reassociar o objeto cliente completo a cada pedido
      return pedidos.map(pedido => {
        const cliente = this.servicoClientes.obterPorId(pedido.clienteId);
        return { ...pedido, cliente: cliente || {} }; // Garante que cliente não seja undefined
      });
    } catch (error) {
      console.error('Erro ao carregar pedidos:', error);
      return this.obterPedidosExemplo();
    }
  }

  salvarPedidos() {
    const resultado = LocalStorageManager.setItem('pedidos', this.pedidos, 50);
    if (resultado !== this.pedidos) {
      // Se os dados foram reduzidos, atualizar a instância local
      this.pedidos = resultado || [];
    }
  }

  obterPedidosExemplo() {
    return [
      {
        id: '1',
        numero: 'PED-001',
        clienteId: '1',
        cliente: {
          id: '1',
          razaoSocial: 'João Silva Ltda.',
          emailComercial: 'joao.silva@email.com',
          telefoneComercial: '(11) 99999-9999'
        },
        itens: [
          {
            produtoId: '1',
            produto: {
              id: '1',
              nome: 'Camiseta Polo Azul',
              sku: 'CAM-001'
            },
            quantidade: 2,
            precoUnitario: 89.90,
            subtotal: 179.80
          }
        ],
        subtotal: 179.80,
        desconto: 0,
        frete: 15.00,
        total: 194.80,
        status: 'pendente',
        observacoes: 'Entrega urgente',
        dataCreacao: '2024-01-15T10:30:00Z',
        dataAtualizacao: '2024-01-15T10:30:00Z'
      },
      {
        id: '2',
        numero: 'PED-002',
        clienteId: '2',
        cliente: {
          id: '2',
          razaoSocial: 'Maria Santos ME',
          emailComercial: 'maria.santos@email.com',
          telefoneComercial: '(11) 88888-8888'
        },
        itens: [
          {
            produtoId: '2',
            produto: {
              id: '2',
              nome: 'Calça Jeans Feminina',
              sku: 'CAL-002'
            },
            quantidade: 1,
            precoUnitario: 129.90,
            subtotal: 129.90
          },
          {
            produtoId: '3',
            produto: {
              id: '3',
              nome: 'Blusa Social Branca',
              sku: 'BLU-003'
            },
            quantidade: 2,
            precoUnitario: 79.90,
            subtotal: 159.80
          }
        ],
        subtotal: 289.70,
        desconto: 29.00,
        frete: 12.00,
        total: 272.70,
        status: 'em_analise',
        observacoes: '',
        dataCreacao: '2024-01-14T14:20:00Z',
        dataAtualizacao: '2024-01-14T16:45:00Z'
      }
    ];
  }

  async listar(filtros = {}) {
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 300));

    let pedidosFiltrados = [...this.pedidos];

    // Aplicar filtros
    if (filtros.status) {
      pedidosFiltrados = pedidosFiltrados.filter(pedido => 
        pedido.status === filtros.status
      );
    }

    if (filtros.clienteId) {
      pedidosFiltrados = pedidosFiltrados.filter(pedido => 
        pedido.clienteId === filtros.clienteId
      );
    }

    if (filtros.dataInicio) {
      pedidosFiltrados = pedidosFiltrados.filter(pedido => 
        new Date(pedido.dataCreacao) >= new Date(filtros.dataInicio)
      );
    }

    if (filtros.dataFim) {
      pedidosFiltrados = pedidosFiltrados.filter(pedido => 
        new Date(pedido.dataCreacao) <= new Date(filtros.dataFim)
      );
    }

    if (filtros.busca) {
      const termoBusca = filtros.busca.toLowerCase();
      pedidosFiltrados = pedidosFiltrados.filter(pedido => 
        pedido.numero.toLowerCase().includes(termoBusca) ||
        (pedido.cliente.nomeFantasia && pedido.cliente.nomeFantasia.toLowerCase().includes(termoBusca)) ||
        (pedido.cliente.razaoSocial && pedido.cliente.razaoSocial.toLowerCase().includes(termoBusca)) ||
        (pedido.cliente.nome && pedido.cliente.nome.toLowerCase().includes(termoBusca)) ||
        (pedido.cliente.emailComercial && pedido.cliente.emailComercial.toLowerCase().includes(termoBusca)) ||
        (pedido.cliente.email && pedido.cliente.email.toLowerCase().includes(termoBusca))
      );
    }

    return pedidosFiltrados;
  }

  async obterPorId(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const pedido = this.pedidos.find(p => p.id === id);
    if (!pedido) {
      throw new Error('Pedido não encontrado');
    }
    
    return pedido;
  }

  async criar(dadosPedido) {
    await new Promise(resolve => setTimeout(resolve, 500));

    // Validações
    if (!dadosPedido.clienteId) {
      throw new Error('Cliente é obrigatório');
    }

    if (!dadosPedido.itens || dadosPedido.itens.length === 0) {
      throw new Error('Pedido deve ter pelo menos um item');
    }

    // Gerar ID e número do pedido
    const novoId = (Math.max(...this.pedidos.map(p => parseInt(p.id || 0)), 0) + 1).toString();
    const numeroSequencial = this.pedidos.length + 1;
    const numero = `PED-${numeroSequencial.toString().padStart(3, '0')}`;

    const clienteAssociado = this.servicoClientes.obterPorId(dadosPedido.clienteId);
    if (!clienteAssociado) {
      throw new Error('Cliente associado ao pedido não encontrado.');
    }

    const novoPedido = {
      id: novoId,
      numero,
      cliente: clienteAssociado, // Adiciona o objeto cliente completo
      ...dadosPedido,
      dataCreacao: new Date().toISOString(),
      dataAtualizacao: new Date().toISOString()
    };

    this.pedidos.push(novoPedido);
    this.salvarPedidos();

    // Se o pedido foi criado com status 'pendente', processar notificações
    if (novoPedido.status === 'pendente') {
      await servicoStatusPedido.processarMudancaStatus(
        novoPedido,
        'pendente',
        'rascunho'
      );
    }

    return novoPedido;
  }

  async atualizar(id, dadosAtualizacao) {
    await new Promise(resolve => setTimeout(resolve, 400));

    const index = this.pedidos.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('Pedido não encontrado');
    }

    console.log('📝 ServicoPedidos.atualizar - Dados recebidos:', dadosAtualizacao);
    console.log('📝 Status antes:', this.pedidos[index].status);

    const pedidoAtualizado = {
      ...this.pedidos[index],
      ...dadosAtualizacao,
      dataAtualizacao: new Date().toISOString()
    };

    console.log('📝 Status depois:', pedidoAtualizado.status);

    this.pedidos[index] = pedidoAtualizado;
    this.salvarPedidos();

    console.log('💾 Pedido salvo no localStorage com status:', pedidoAtualizado.status);
    return pedidoAtualizado;
  }

  async excluir(id) {
    await new Promise(resolve => setTimeout(resolve, 300));

    const index = this.pedidos.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('Pedido não encontrado');
    }

    this.pedidos.splice(index, 1);
    this.salvarPedidos();

    return true;
  }

  async atualizarStatus(id, novoStatus) {
    // Obter pedido atual para verificar status anterior
    const pedidoAtual = await this.obterPorId(id);
    if (!pedidoAtual) {
      throw new Error('Pedido não encontrado');
    }
    
    const statusAnterior = pedidoAtual.status;
    
    // Processar mudança de status com lógica automática e notificações
    const resultado = await servicoStatusPedido.processarMudancaStatus(
      pedidoAtual,
      novoStatus,
      statusAnterior
    );
    
    if (!resultado.sucesso) {
      throw new Error(resultado.erro || 'Erro ao processar mudança de status');
    }
    
    // Atualizar o pedido com o status final (pode ser diferente do solicitado devido à lógica automática)
    const pedidoAtualizado = await this.atualizar(id, { 
      status: resultado.statusFinal,
      dataUltimaAlteracao: new Date().toISOString()
    });
    
    console.log(`📊 Status atualizado: ${statusAnterior} → ${resultado.statusFinal}`);
    
    return pedidoAtualizado;
  }

  // Métodos para estatísticas
  async obterEstatisticas() {
    await new Promise(resolve => setTimeout(resolve, 200));

    const total = this.pedidos.length;
    const pendentes = this.pedidos.filter(p => p.status === 'pendente').length;
    const aprovados = this.pedidos.filter(p => p.status === 'aprovado').length;
    const cancelados = this.pedidos.filter(p => p.status === 'cancelado').length;
    
    const valorTotal = this.pedidos.reduce((total, pedido) => total + pedido.total, 0);
    const ticketMedio = total > 0 ? valorTotal / total : 0;

    return {
      total,
      pendentes,
      aprovados,
      cancelados,
      valorTotal,
      ticketMedio
    };
  }

  // Validações
  validarPedido(pedido) {
    const erros = [];

    if (!pedido.clienteId) {
      erros.push('Cliente é obrigatório');
    }

    if (!pedido.itens || pedido.itens.length === 0) {
      erros.push('Pedido deve ter pelo menos um item');
    }

    if (pedido.itens) {
      pedido.itens.forEach((item, index) => {
        if (!item.produtoId) {
          erros.push(`Item ${index + 1}: Produto é obrigatório`);
        }
        if (!item.quantidade || item.quantidade <= 0) {
          erros.push(`Item ${index + 1}: Quantidade deve ser maior que zero`);
        }
        if (!item.precoUnitario || item.precoUnitario <= 0) {
          erros.push(`Item ${index + 1}: Preço unitário deve ser maior que zero`);
        }
      });
    }

    return erros;
  }

  // Status disponíveis
  obterStatusDisponiveis() {
    return [
      { valor: 'rascunho', label: 'Rascunho', cor: 'gray' },
      { valor: 'pendente', label: 'Pendente', cor: 'yellow' },
      { valor: 'em_analise', label: 'Em Análise', cor: 'orange' },
      { valor: 'aprovado', label: 'Aprovado', cor: 'green' },
      { valor: 'recusado', label: 'Recusado', cor: 'red' },
      { valor: 'em_producao', label: 'Em Produção', cor: 'blue' },
      { valor: 'enviado', label: 'Enviado', cor: 'purple' },
      { valor: 'entregue', label: 'Entregue', cor: 'green' },
      { valor: 'cancelado', label: 'Cancelado', cor: 'red' }
    ];
  }

  obterCorStatus(status) {
    const statusInfo = this.obterStatusDisponiveis().find(s => s.valor === status);
    return statusInfo ? statusInfo.cor : 'gray';
  }

  limparDados() {
    localStorage.removeItem('pedidos');
    this.pedidos = this.obterPedidosExemplo(); // Recarrega com exemplos limpos
  }
}