import { PrismaClient } from '../../../src/gerado/prisma';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ message: 'Token é obrigatório' });
    }

    // Extrair email do token (formato: auth-papel-emailBase64-timestamp-random)
    const tokenParts = token.split('-');
    if (tokenParts.length < 5 || tokenParts[0] !== 'auth') {
      return res.status(401).json({ message: 'Token inválido' });
    }

    const emailBase64 = tokenParts[2];
    const email = atob(emailBase64 + '=='); // Adicionar padding se necessário

    // Buscar usuário no banco
    const usuario = await prisma.usuario.findUnique({
      where: { email },
      include: {
        fornecedor: true,
        representante: true
      }
    });

    if (!usuario) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    // Preparar dados do usuário
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

    res.status(200).json({
      valido: true,
      usuario: dadosUsuario
    });

  } catch (error) {
    console.error('Erro na verificação do token:', error);
    res.status(401).json({ 
      valido: false,
      message: 'Token inválido'
    });
  } finally {
    await prisma.$disconnect();
  }
}