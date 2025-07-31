import { PrismaClient } from '../../../src/gerado/prisma';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { email, senha } = req.body;

    console.log('Tentativa de login:', email);

    // Validação básica
    if (!email || !senha) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    // Buscar usuário no banco de dados
    const usuario = await prisma.usuario.findUnique({
      where: { email },
      include: {
        fornecedor: true,
        representante: true
      }
    });

    console.log('Usuário encontrado:', usuario ? 'Sim' : 'Não');

    if (!usuario) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Verificar senha (comparação direta por enquanto)
    const senhaValida = senha === usuario.senha;
    console.log('Senha válida:', senhaValida);
    
    if (!senhaValida) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gerar token simples
    const token = `auth-${usuario.papel}-${btoa(usuario.email).substring(0, 8)}-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;

    // Preparar dados do usuário para resposta
    const dadosUsuario = {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      papel: usuario.papel,
      fornecedor: usuario.fornecedor ? {
        id: usuario.fornecedor.id,
        nomeFantasia: usuario.fornecedor.nomeFantasia,
        cnpj: usuario.fornecedor.cnpj,
        razaoSocial: usuario.fornecedor.razaoSocial
      } : null,
      representante: usuario.representante ? {
        id: usuario.representante.id,
        cpf: usuario.representante.cpf,
        regiao: usuario.representante.regiao
      } : null
    };

    console.log('Login bem-sucedido para:', email);

    res.status(200).json({
      message: 'Login realizado com sucesso',
      token,
      usuario: dadosUsuario
    });

  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ 
      message: 'Erro interno do servidor', 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  } finally {
    await prisma.$disconnect();
  }
}