import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  try {
    switch (method) {
      case 'GET':
        return await listarClientes(req, res);
      case 'POST':
        return await criarCliente(req, res);
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).json({ message: `Método ${method} não permitido` });
    }
  } catch (error) {
    console.error('Erro na API de clientes:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}

async function listarClientes(req, res) {
  try {
    const { fornecedorId, representanteId, status, tipo } = req.query;
    
    let whereClause = {};
    
    if (fornecedorId) {
      whereClause.fornecedorId = fornecedorId;
    }
    
    if (representanteId) {
      whereClause.representanteId = representanteId;
    }
    
    if (status) {
      whereClause.status = status;
    }
    
    if (tipo) {
      whereClause.tipo = tipo;
    }
    
    const clientes = await prisma.cliente.findMany({
      where: whereClause,
      include: {
        fornecedor: {
          select: {
            id: true,
            nome: true,
            email: true
          }
        },
        representante: {
          select: {
            id: true,
            nome: true,
            email: true
          }
        },
        acessos: {
          include: {
            fornecedor: {
              select: {
                id: true,
                nome: true
              }
            },
            representante: {
              select: {
                id: true,
                nome: true
              }
            }
          }
        }
      },
      orderBy: {
        razaoSocial: 'asc'
      }
    });
    
    return res.status(200).json(clientes);
  } catch (error) {
    console.error('Erro ao listar clientes:', error);
    return res.status(500).json({ message: 'Erro ao listar clientes' });
  }
}

async function criarCliente(req, res) {
  try {
    const dadosCliente = req.body;
    
    // Validações básicas
    if (!dadosCliente.razaoSocial) {
      return res.status(400).json({ message: 'Razão social é obrigatória' });
    }
    
    if (!dadosCliente.emailComercial) {
      return res.status(400).json({ message: 'Email comercial é obrigatório' });
    }
    
    // Verificar se já existe cliente com mesmo CNPJ (se fornecido)
    if (dadosCliente.cnpj) {
      const clienteExistente = await prisma.cliente.findFirst({
        where: { cnpj: dadosCliente.cnpj }
      });
      
      if (clienteExistente) {
        return res.status(400).json({ message: 'Já existe um cliente com este CNPJ' });
      }
    }
    
    // Criar cliente
    const novoCliente = await prisma.cliente.create({
      data: {
        ...dadosCliente,
        status: dadosCliente.status || 'ativo',
        tipo: dadosCliente.tipo || 'pessoa_juridica',
        totalCompras: 0,
        valorTotal: 0.0
      },
      include: {
        fornecedor: {
          select: {
            id: true,
            nome: true,
            email: true
          }
        },
        representante: {
          select: {
            id: true,
            nome: true,
            email: true
          }
        }
      }
    });
    
    return res.status(201).json(novoCliente);
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    return res.status(500).json({ message: 'Erro ao criar cliente' });
  }
}