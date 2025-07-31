const { PrismaClient } = require('../src/gerado/prisma');

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed do banco de dados...');

  // Limpar dados existentes (opcional)
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
      papel: 'ADMINISTRADOR',
    },
  });

  const fornecedoresData = [
    { nome: 'Fornecedor 1', email: 'fornecedor1@exemplo.com', senha: 'senha123', papel: 'FORNECEDOR' },
    { nome: 'Fornecedor 2', email: 'fornecedor2@exemplo.com', senha: 'senha123', papel: 'FORNECEDOR' },
    { nome: 'Fornecedor 3', email: 'fornecedor3@exemplo.com', senha: 'senha123', papel: 'FORNECEDOR' },
  ];

  const representantesData = [
    { nome: 'Representante 1', email: 'rep1@exemplo.com', senha: 'senha123', papel: 'REPRESENTANTE' },
    { nome: 'Representante 2', email: 'rep2@exemplo.com', senha: 'senha123', papel: 'REPRESENTANTE' },
    { nome: 'Representante 3', email: 'rep3@exemplo.com', senha: 'senha123', papel: 'REPRESENTANTE' },
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
  const produtos = [];
  
  // Produtos do Fornecedor 1 (Eletrônicos)
  const produto1 = await prisma.produto.create({
    data: {
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
          }
        ]
      }
    },
    include: { variantes: true }
  });
  produtos.push(produto1);
  
  // Produtos do Fornecedor 2 (Móveis)
  const produto2 = await prisma.produto.create({
    data: {
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
          }
        ]
      }
    },
    include: { variantes: true }
  });
  produtos.push(produto2);
  
  // Produtos do Fornecedor 3 (Alimentos)
  const produto3 = await prisma.produto.create({
    data: {
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
          }
        ]
      }
    },
    include: { variantes: true }
  });
  produtos.push(produto3);

  console.log(`Criados ${produtos.length} produtos`);
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
    }
  ];

  const clientes = await Promise.all(
    clientesData.map(data => prisma.cliente.create({ data }))
  );

  console.log(`Criados ${clientes.length} clientes`);
  return clientes;
}

async function criarVinculacoes(fornecedores, representantes) {
  const vinculacoesData = [
    {
      fornecedorId: fornecedores[0].id,
      representanteId: representantes[0].id,
      comissaoPercent: 5.0,
      precoEspecial: true,
      acessoRelatorios: true
    },
    {
      fornecedorId: fornecedores[1].id,
      representanteId: representantes[1].id,
      comissaoPercent: 6.0,
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
  const pedido1 = await prisma.pedido.create({
    data: {
      clienteId: clientes[0].id,
      representanteId: representantes[0].id,
      status: 'APROVADO',
      valorTotal: 1999.99,
      itens: {
        create: [
          {
            produtoId: produtos[0].id,
            varianteId: produtos[0].variantes[0].id,
            quantidade: 1,
            precoUnitario: 1999.99,
            valorTotal: 1999.99
          }
        ]
      }
    },
    include: { itens: true }
  });

  console.log('Criado 1 pedido');
  return [pedido1];
}

async function criarComissoes(pedidos, vinculacoes) {
  const comissao1 = await prisma.comissao.create({
    data: {
      vinculacaoId: vinculacoes[0].id,
      representanteId: vinculacoes[0].representanteId,
      pedidoId: pedidos[0].id,
      percentual: 5.0,
      valorCalculado: 99.99,
      status: 'APROVADA',
      dataEfetivacao: new Date()
    }
  });

  console.log('Criada 1 comissão');
  return [comissao1];
}

async function criarConvites(fornecedores, representantes) {
  const convite1 = await prisma.convite.create({
    data: {
      remetenteId: fornecedores[1].usuarioId,
      destinatarioId: representantes[2].usuarioId,
      tipoRemetente: 'FORNECEDOR',
      fornecedorId: fornecedores[1].id,
      status: 'PENDENTE',
      mensagem: 'Gostaria de convidá-lo para ser representante dos nossos produtos.',
      comissaoPercent: 5.5
    }
  });

  console.log('Criado 1 convite');
  return [convite1];
}

async function criarNotificacoes(usuarios) {
  const notificacoes = [];
  
  for (const usuario of usuarios) {
    const notificacao = await prisma.notificacao.create({
      data: {
        destinatarioId: usuario.id,
        titulo: 'Bem-vindo ao PulseHub',
        mensagem: 'Seja bem-vindo à plataforma PulseHub!',
        tipo: 'SISTEMA',
        prioridade: 'NORMAL'
      }
    });
    notificacoes.push(notificacao);
  }

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