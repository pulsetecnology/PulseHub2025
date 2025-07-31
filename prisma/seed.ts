import { PrismaClient } from '../src/gerado/prisma';
import { PapelUsuario } from '../src/gerado/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed do banco de dados...');

  // Limpar dados existentes (opcional - remova em produção)
  await limparDados();

  // Criar usuários
  const usuarios = await criarUsuarios();
  
  // Criar fornecedores
  const fornecedores = await criarFornecedores(usuarios.fornecedores);
  
  // Criar representantes
  const representantes = await criarRepresentantes(usuarios.representantes);
  
  // Criar produtos
  const produtos = await criarProdutos(fornecedores);
  
  // Criar clientes
  const clientes = await criarClientes();
  
  // Criar vinculações entre fornecedores e representantes
  const vinculacoes = await criarVinculacoes(fornecedores, representantes);
  
  // Criar pedidos
  const pedidos = await criarPedidos(clientes, representantes, produtos);
  
  // Criar comissões
  await criarComissoes(pedidos, vinculacoes);
  
  // Criar convites pendentes
  await criarConvites(fornecedores, representantes);
  
  // Criar notificações
  await criarNotificacoes(usuarios.todos);

  console.log('Seed concluído com sucesso!');
}

async function limparDados() {
  // Ordem de exclusão é importante devido às restrições de chave estrangeira
  await prisma.notificacao.deleteMany();
  await prisma.comissao.deleteMany();
  await prisma.itemPedido.deleteMany();
  await prisma.pedido.deleteMany();
  await prisma.convite.deleteMany();
  await prisma.vinculacao.deleteMany();
  await prisma.varianteProduto.deleteMany();
  await prisma.produto.deleteMany();
  await prisma.cliente.deleteMany();
  await prisma.fornecedor.deleteMany();
  await prisma.representante.deleteMany();
  await prisma.usuario.deleteMany();
  
  console.log('Dados existentes removidos.');
}

async function criarUsuarios() {
  const admin = await prisma.usuario.create({
    data: {
      nome: 'Administrador',
      email: 'admin@pulsehub.com',
      senha: 'senha123', // Em produção, use hash
      papel: PapelUsuario.ADMINISTRADOR,
    },
  });

  const fornecedoresData = [
    { nome: 'Fornecedor 1', email: 'fornecedor1@exemplo.com', senha: 'senha123', papel: PapelUsuario.FORNECEDOR },
    { nome: 'Fornecedor 2', email: 'fornecedor2@exemplo.com', senha: 'senha123', papel: PapelUsuario.FORNECEDOR },
    { nome: 'Fornecedor 3', email: 'fornecedor3@exemplo.com', senha: 'senha123', papel: PapelUsuario.FORNECEDOR },
  ];

  const representantesData = [
    { nome: 'Representante 1', email: 'rep1@exemplo.com', senha: 'senha123', papel: PapelUsuario.REPRESENTANTE },
    { nome: 'Representante 2', email: 'rep2@exemplo.com', senha: 'senha123', papel: PapelUsuario.REPRESENTANTE },
    { nome: 'Representante 3', email: 'rep3@exemplo.com', senha: 'senha123', papel: PapelUsuario.REPRESENTANTE },
  ];

  const fornecedores = await Promise.all(
    fornecedoresData.map(data => prisma.usuario.create({ data }))
  );

  const representantes = await Promise.all(
    representantesData.map(data => prisma.usuario.create({ data }))
  );

  console.log(`Criados ${fornecedores.length} usuários fornecedores e ${representantes.length} usuários representantes`);
  
  return { 
    admin, 
    fornecedores, 
    representantes,
    todos: [admin, ...fornecedores, ...representantes]
  };
}

async function criarFornecedores(usuariosFornecedores) {
  const fornecedoresData = [
    {
      usuarioId: usuariosFornecedores[0].id,
      razaoSocial: 'Empresa Fornecedora 1 LTDA',
      nomeFantasia: 'Fornecedor 1',
      cnpj: '12345678000101',
      inscricaoEstadual: '123456789',
      telefone: '(11) 1234-5678',
      segmento: 'Eletrônicos',
      endereco: {
        cep: '01234-567',
        rua: 'Rua dos Fornecedores',
        numero: '123',
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP'
      }
    },
    {
      usuarioId: usuariosFornecedores[1].id,
      razaoSocial: 'Empresa Fornecedora 2 LTDA',
      nomeFantasia: 'Fornecedor 2',
      cnpj: '23456789000102',
      inscricaoEstadual: '234567890',
      telefone: '(11) 2345-6789',
      segmento: 'Móveis',
      endereco: {
        cep: '02345-678',
        rua: 'Avenida dos Móveis',
        numero: '456',
        bairro: 'Vila Industrial',
        cidade: 'São Paulo',
        estado: 'SP'
      }
    },
    {
      usuarioId: usuariosFornecedores[2].id,
      razaoSocial: 'Empresa Fornecedora 3 LTDA',
      nomeFantasia: 'Fornecedor 3',
      cnpj: '34567890000103',
      inscricaoEstadual: '345678901',
      telefone: '(11) 3456-7890',
      segmento: 'Alimentos',
      endereco: {
        cep: '03456-789',
        rua: 'Rua dos Alimentos',
        numero: '789',
        bairro: 'Mercado',
        cidade: 'São Paulo',
        estado: 'SP'
      }
    }
  ];

  const fornecedores = await Promise.all(
    fornecedoresData.map(data => prisma.fornecedor.create({ data }))
  );

  console.log(`Criados ${fornecedores.length} fornecedores`);
  return fornecedores;
}

async function criarRepresentantes(usuariosRepresentantes) {
  const representantesData = [
    {
      usuarioId: usuariosRepresentantes[0].id,
      cpf: '12345678901',
      telefone: '(11) 91234-5678',
      regiao: 'Sudeste',
      especialidades: ['Eletrônicos', 'Informática'],
      endereco: {
        cep: '04567-890',
        rua: 'Rua dos Representantes',
        numero: '101',
        bairro: 'Vila Comercial',
        cidade: 'São Paulo',
        estado: 'SP'
      },
      avaliacaoMedia: 4.8
    },
    {
      usuarioId: usuariosRepresentantes[1].id,
      cpf: '23456789012',
      telefone: '(11) 92345-6789',
      regiao: 'Sul',
      especialidades: ['Móveis', 'Decoração'],
      endereco: {
        cep: '05678-901',
        rua: 'Avenida dos Vendedores',
        numero: '202',
        bairro: 'Centro',
        cidade: 'Curitiba',
        estado: 'PR'
      },
      avaliacaoMedia: 4.5
    },
    {
      usuarioId: usuariosRepresentantes[2].id,
      cpf: '34567890123',
      telefone: '(11) 93456-7890',
      regiao: 'Nordeste',
      especialidades: ['Alimentos', 'Bebidas'],
      endereco: {
        cep: '06789-012',
        rua: 'Rua do Comércio',
        numero: '303',
        bairro: 'Mercado',
        cidade: 'Recife',
        estado: 'PE'
      },
      avaliacaoMedia: 4.2
    }
  ];

  const representantes = await Promise.all(
    representantesData.map(data => prisma.representante.create({ data }))
  );

  console.log(`Criados ${representantes.length} representantes`);
  return representantes;
}

async function criarProdutos(fornecedores) {
  const produtosData = [];
  
  // Produtos do Fornecedor 1 (Eletrônicos)
  produtosData.push(
    {
      nome: 'Smartphone XYZ',
      descricao: 'Smartphone de última geração com câmera de alta resolução',
      precoBase: 1999.99,
      fornecedorId: fornecedores[0].id,
      categoria: 'Smartphones',
      variantes: {
        create: [
          {
            sku: 'SMRTXYZ-PRETO',
            preco: 1999.99,
            estoque: 50,
            atributos: { cor: 'Preto', armazenamento: '128GB' }
          },
          {
            sku: 'SMRTXYZ-BRANCO',
            preco: 1999.99,
            estoque: 30,
            atributos: { cor: 'Branco', armazenamento: '128GB' }
          },
          {
            sku: 'SMRTXYZ-PRETO-256',
            preco: 2299.99,
            estoque: 25,
            atributos: { cor: 'Preto', armazenamento: '256GB' }
          }
        ]
      }
    },
    {
      nome: 'Notebook Ultra',
      descricao: 'Notebook leve e potente para trabalho e entretenimento',
      precoBase: 4500.00,
      fornecedorId: fornecedores[0].id,
      categoria: 'Notebooks',
      variantes: {
        create: [
          {
            sku: 'NTBULTRA-8GB',
            preco: 4500.00,
            estoque: 20,
            atributos: { ram: '8GB', processador: 'i5', armazenamento: '512GB SSD' }
          },
          {
            sku: 'NTBULTRA-16GB',
            preco: 5200.00,
            estoque: 15,
            atributos: { ram: '16GB', processador: 'i7', armazenamento: '512GB SSD' }
          }
        ]
      }
    }
  );
  
  // Produtos do Fornecedor 2 (Móveis)
  produtosData.push(
    {
      nome: 'Sofá Conforto',
      descricao: 'Sofá de 3 lugares com tecido premium',
      precoBase: 2500.00,
      fornecedorId: fornecedores[1].id,
      categoria: 'Sala de Estar',
      variantes: {
        create: [
          {
            sku: 'SOFA3L-CINZA',
            preco: 2500.00,
            estoque: 10,
            atributos: { cor: 'Cinza', material: 'Tecido' }
          },
          {
            sku: 'SOFA3L-BEGE',
            preco: 2500.00,
            estoque: 8,
            atributos: { cor: 'Bege', material: 'Tecido' }
          },
          {
            sku: 'SOFA3L-PRETO',
            preco: 2700.00,
            estoque: 5,
            atributos: { cor: 'Preto', material: 'Couro sintético' }
          }
        ]
      }
    },
    {
      nome: 'Mesa de Jantar',
      descricao: 'Mesa de jantar para 6 pessoas em madeira maciça',
      precoBase: 1800.00,
      fornecedorId: fornecedores[1].id,
      categoria: 'Sala de Jantar',
      variantes: {
        create: [
          {
            sku: 'MESAJAN-NATURAL',
            preco: 1800.00,
            estoque: 12,
            atributos: { acabamento: 'Natural', formato: 'Retangular' }
          },
          {
            sku: 'MESAJAN-TABACO',
            preco: 1800.00,
            estoque: 10,
            atributos: { acabamento: 'Tabaco', formato: 'Retangular' }
          }
        ]
      }
    }
  );
  
  // Produtos do Fornecedor 3 (Alimentos)
  produtosData.push(
    {
      nome: 'Café Premium',
      descricao: 'Café gourmet torrado e moído',
      precoBase: 39.90,
      fornecedorId: fornecedores[2].id,
      categoria: 'Bebidas',
      variantes: {
        create: [
          {
            sku: 'CAFE-250G',
            preco: 39.90,
            estoque: 100,
            atributos: { peso: '250g', torra: 'Média' }
          },
          {
            sku: 'CAFE-500G',
            preco: 69.90,
            estoque: 80,
            atributos: { peso: '500g', torra: 'Média' }
          },
          {
            sku: 'CAFE-1KG',
            preco: 129.90,
            estoque: 50,
            atributos: { peso: '1kg', torra: 'Média' }
          }
        ]
      }
    },
    {
      nome: 'Azeite Extra Virgem',
      descricao: 'Azeite de oliva extra virgem importado',
      precoBase: 59.90,
      fornecedorId: fornecedores[2].id,
      categoria: 'Condimentos',
      variantes: {
        create: [
          {
            sku: 'AZEITE-500ML',
            preco: 59.90,
            estoque: 60,
            atributos: { volume: '500ml', acidez: '0.2%' }
          },
          {
            sku: 'AZEITE-1L',
            preco: 99.90,
            estoque: 40,
            atributos: { volume: '1L', acidez: '0.2%' }
          }
        ]
      }
    }
  );

  const produtos = await Promise.all(
    produtosData.map(data => prisma.produto.create({
      data,
      include: {
        variantes: true
      }
    }))
  );

  console.log(`Criados ${produtos.length} produtos com ${produtos.reduce((acc, p) => acc + p.variantes.length, 0)} variantes`);
  return produtos;
}

async function criarClientes() {
  const clientesData = [
    {
      razaoSocial: 'Empresa Cliente 1 LTDA',
      nomeFantasia: 'Cliente 1',
      cnpj: '45678901000104',
      inscricaoEstadual: '456789012',
      telefoneComercial: '(11) 4567-8901',
      emailComercial: 'contato@cliente1.com',
      cep: '07890-123',
      rua: 'Rua dos Clientes',
      numero: '1000',
      bairro: 'Centro Comercial',
      cidade: 'São Paulo',
      estado: 'SP',
      nomeContato: 'João Silva',
      emailContato: 'joao@cliente1.com',
      telefoneContato: '(11) 94567-8901',
      limiteCredito: 10000.00,
      condicoesPagamento: '30 dias'
    },
    {
      razaoSocial: 'Empresa Cliente 2 LTDA',
      nomeFantasia: 'Cliente 2',
      cnpj: '56789012000105',
      inscricaoEstadual: '567890123',
      telefoneComercial: '(11) 5678-9012',
      emailComercial: 'contato@cliente2.com',
      cep: '08901-234',
      rua: 'Avenida Comercial',
      numero: '2000',
      bairro: 'Vila Empresarial',
      cidade: 'Campinas',
      estado: 'SP',
      nomeContato: 'Maria Oliveira',
      emailContato: 'maria@cliente2.com',
      telefoneContato: '(11) 95678-9012',
      limiteCredito: 15000.00,
      condicoesPagamento: '45 dias'
    },
    {
      razaoSocial: 'Empresa Cliente 3 LTDA',
      nomeFantasia: 'Cliente 3',
      cnpj: '67890123000106',
      inscricaoEstadual: '678901234',
      telefoneComercial: '(11) 6789-0123',
      emailComercial: 'contato@cliente3.com',
      cep: '09012-345',
      rua: 'Rua do Comércio',
      numero: '3000',
      bairro: 'Distrito Industrial',
      cidade: 'Ribeirão Preto',
      estado: 'SP',
      nomeContato: 'Carlos Santos',
      emailContato: 'carlos@cliente3.com',
      telefoneContato: '(11) 96789-0123',
      limiteCredito: 20000.00,
      condicoesPagamento: '60 dias'
    }
  ];

  const clientes = await Promise.all(
    clientesData.map(data => prisma.cliente.create({ data }))
  );

  console.log(`Criados ${clientes.length} clientes`);
  return clientes;
}

async function criarVinculacoes(fornecedores, representantes) {
  // Criar algumas vinculações entre fornecedores e representantes
  const vinculacoesData = [
    {
      fornecedorId: fornecedores[0].id,
      representanteId: representantes[0].id,
      comissaoPercent: 5.0,
      precoEspecial: true,
      acessoRelatorios: true,
      configuracoes: {
        limitePedidosSemAprovacao: 5000.00,
        descontoMaximo: 10.0
      }
    },
    {
      fornecedorId: fornecedores[0].id,
      representanteId: representantes[1].id,
      comissaoPercent: 4.5,
      precoEspecial: false,
      acessoRelatorios: true
    },
    {
      fornecedorId: fornecedores[1].id,
      representanteId: representantes[0].id,
      comissaoPercent: 6.0,
      precoEspecial: true,
      acessoRelatorios: true
    },
    {
      fornecedorId: fornecedores[2].id,
      representanteId: representantes[2].id,
      comissaoPercent: 7.0,
      precoEspecial: true,
      acessoRelatorios: true
    }
  ];

  const vinculacoes = await Promise.all(
    vinculacoesData.map(data => prisma.vinculacao.create({ data }))
  );

  console.log(`Criadas ${vinculacoes.length} vinculações`);
  return vinculacoes;
}

async function criarPedidos(clientes, representantes, produtos) {
  // Função auxiliar para obter variantes aleatórias de produtos
  const obterVariantesAleatorias = (produtos, quantidade) => {
    const resultado = [];
    const produtosDisponiveis = [...produtos];
    
    for (let i = 0; i < quantidade; i++) {
      if (produtosDisponiveis.length === 0) break;
      
      const indexProduto = Math.floor(Math.random() * produtosDisponiveis.length);
      const produto = produtosDisponiveis[indexProduto];
      
      if (produto.variantes.length > 0) {
        const indexVariante = Math.floor(Math.random() * produto.variantes.length);
        const variante = produto.variantes[indexVariante];
        
        resultado.push({
          produto,
          variante
        });
      }
      
      // Remover o produto para não repetir
      produtosDisponiveis.splice(indexProduto, 1);
    }
    
    return resultado;
  };

  const pedidosData = [];
  
  // Pedido 1 - Cliente 1, Representante 1
  const itensPedido1 = obterVariantesAleatorias(produtos, 2);
  const valorTotalPedido1 = itensPedido1.reduce((total, item) => {
    return total + (item.variante.preco * 2); // 2 unidades de cada
  }, 0);
  
  pedidosData.push({
    clienteId: clientes[0].id,
    representanteId: representantes[0].id,
    dataPedido: new Date(),
    status: 'APROVADO',
    valorTotal: valorTotalPedido1,
    itens: {
      create: itensPedido1.map(item => ({
        produtoId: item.produto.id,
        varianteId: item.variante.id,
        quantidade: 2,
        precoUnitario: item.variante.preco,
        valorTotal: item.variante.preco * 2
      }))
    }
  });
  
  // Pedido 2 - Cliente 2, Representante 2
  const itensPedido2 = obterVariantesAleatorias(produtos, 3);
  const valorTotalPedido2 = itensPedido2.reduce((total, item) => {
    return total + (item.variante.preco * 1); // 1 unidade de cada
  }, 0);
  
  pedidosData.push({
    clienteId: clientes[1].id,
    representanteId: representantes[1].id,
    dataPedido: new Date(Date.now() - 86400000), // 1 dia atrás
    status: 'EM_ANALISE',
    valorTotal: valorTotalPedido2,
    itens: {
      create: itensPedido2.map(item => ({
        produtoId: item.produto.id,
        varianteId: item.variante.id,
        quantidade: 1,
        precoUnitario: item.variante.preco,
        valorTotal: item.variante.preco * 1
      }))
    }
  });
  
  // Pedido 3 - Cliente 3, Representante 3
  const itensPedido3 = obterVariantesAleatorias(produtos, 4);
  const valorTotalPedido3 = itensPedido3.reduce((total, item) => {
    return total + (item.variante.preco * 3); // 3 unidades de cada
  }, 0);
  
  pedidosData.push({
    clienteId: clientes[2].id,
    representanteId: representantes[2].id,
    dataPedido: new Date(Date.now() - 172800000), // 2 dias atrás
    status: 'APROVADO',
    valorTotal: valorTotalPedido3,
    itens: {
      create: itensPedido3.map(item => ({
        produtoId: item.produto.id,
        varianteId: item.variante.id,
        quantidade: 3,
        precoUnitario: item.variante.preco,
        valorTotal: item.variante.preco * 3
      }))
    }
  });

  const pedidos = await Promise.all(
    pedidosData.map(data => prisma.pedido.create({
      data,
      include: {
        itens: true
      }
    }))
  );

  console.log(`Criados ${pedidos.length} pedidos com ${pedidos.reduce((acc, p) => acc + p.itens.length, 0)} itens`);
  return pedidos;
}

async function criarComissoes(pedidos, vinculacoes) {
  const comissoesData = [];
  
  // Para cada pedido, criar comissão se houver vinculação entre fornecedor e representante
  for (const pedido of pedidos) {
    if (!pedido.representanteId) continue;
    
    // Obter os fornecedores dos produtos no pedido
    const fornecedoresIds = new Set();
    for (const item of pedido.itens) {
      const produto = await prisma.produto.findUnique({
        where: { id: item.produtoId },
        select: { fornecedorId: true }
      });
      
      if (produto?.fornecedorId) {
        fornecedoresIds.add(produto.fornecedorId);
      }
    }
    
    // Para cada fornecedor, verificar se existe vinculação com o representante
    for (const fornecedorId of fornecedoresIds) {
      const vinculacao = vinculacoes.find(v => 
        v.fornecedorId === fornecedorId && 
        v.representanteId === pedido.representanteId
      );
      
      if (vinculacao) {
        // Calcular valor da comissão (simplificado)
        const itensFornecedor = await prisma.itemPedido.findMany({
          where: {
            pedidoId: pedido.id,
            produto: {
              fornecedorId
            }
          }
        });
        
        const valorItens = itensFornecedor.reduce((total, item) => total + item.valorTotal, 0);
        const valorComissao = valorItens * (vinculacao.comissaoPercent / 100);
        
        comissoesData.push({
          vinculacaoId: vinculacao.id,
          representanteId: pedido.representanteId,
          pedidoId: pedido.id,
          percentual: vinculacao.comissaoPercent,
          valorCalculado: valorComissao,
          status: pedido.status === 'APROVADO' ? 'APROVADA' : 'PENDENTE',
          dataEfetivacao: pedido.status === 'APROVADO' ? new Date() : null
        });
      }
    }
  }

  const comissoes = await Promise.all(
    comissoesData.map(data => prisma.comissao.create({ data }))
  );

  console.log(`Criadas ${comissoes.length} comissões`);
  return comissoes;
}

async function criarConvites(fornecedores, representantes) {
  // Criar alguns convites pendentes
  const convitesData = [
    {
      remetenteId: fornecedores[1].id,
      destinatarioId: representantes[2].id,
      tipoRemetente: 'FORNECEDOR',
      fornecedorId: fornecedores[1].id,
      status: 'PENDENTE',
      mensagem: 'Gostaria de convidá-lo para ser representante dos nossos produtos de móveis.',
      comissaoPercent: 5.5,
      configuracoes: {
        limitePedidosSemAprovacao: 3000.00,
        descontoMaximo: 8.0
      }
    },
    {
      remetenteId: representantes[1].id,
      destinatarioId: fornecedores[2].id,
      tipoRemetente: 'REPRESENTANTE',
      representanteId: representantes[1].id,
      status: 'PENDENTE',
      mensagem: 'Tenho interesse em representar seus produtos alimentícios na região Sul.',
      comissaoPercent: 6.0
    }
  ];

  const convites = await Promise.all(
    convitesData.map(data => prisma.convite.create({ data }))
  );

  console.log(`Criados ${convites.length} convites pendentes`);
  return convites;
}

async function criarNotificacoes(usuarios) {
  const notificacoesData = [];
  
  // Notificações para todos os usuários
  for (const usuario of usuarios) {
    notificacoesData.push({
      destinatarioId: usuario.id,
      titulo: 'Bem-vindo ao PulseHub',
      mensagem: 'Seja bem-vindo à plataforma PulseHub! Estamos felizes em tê-lo conosco.',
      tipo: 'SISTEMA',
      prioridade: 'NORMAL',
      lida: true,
      dataLeitura: new Date(Date.now() - 86400000) // 1 dia atrás
    });
    
    notificacoesData.push({
      destinatarioId: usuario.id,
      titulo: 'Novidades na plataforma',
      mensagem: 'Confira as novas funcionalidades disponíveis na plataforma.',
      tipo: 'SISTEMA',
      prioridade: 'BAIXA',
      lida: false
    });
  }
  
  // Notificações específicas para representantes
  const representantes = usuarios.filter(u => u.papel === 'REPRESENTANTE');
  for (const representante of representantes) {
    notificacoesData.push({
      destinatarioId: representante.id,
      titulo: 'Novo convite de vinculação',
      mensagem: 'Você recebeu um novo convite de vinculação de um fornecedor.',
      tipo: 'CONVITE_VINCULACAO',
      prioridade: 'ALTA',
      lida: false,
      metadados: {
        conviteId: '12345', // ID fictício
        fornecedorNome: 'Fornecedor XYZ'
      }
    });
  }
  
  // Notificações específicas para fornecedores
  const fornecedores = usuarios.filter(u => u.papel === 'FORNECEDOR');
  for (const fornecedor of fornecedores) {
    notificacoesData.push({
      destinatarioId: fornecedor.id,
      titulo: 'Novo pedido registrado',
      mensagem: 'Um novo pedido foi registrado para seus produtos.',
      tipo: 'NOVO_PEDIDO',
      prioridade: 'ALTA',
      lida: false,
      metadados: {
        pedidoId: '67890', // ID fictício
        valorTotal: 1500.00
      }
    });
  }

  const notificacoes = await Promise.all(
    notificacoesData.map(data => prisma.notificacao.create({ data }))
  );

  console.log(`Criadas ${notificacoes.length} notificações`);
  return notificacoes;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });