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

    // Primeiro, tentar buscar usuário no banco de dados Prisma
    const usuario = await prisma.usuario.findUnique({
      where: { email },
      include: {
        fornecedor: true,
        representante: true
      }
    });

    console.log('Usuário encontrado no Prisma:', usuario ? 'Sim' : 'Não');

    // Se encontrou no Prisma, usar autenticação do Prisma
    if (usuario) {
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

      console.log('Login bem-sucedido no Prisma para:', email);

      return res.status(200).json({
        message: 'Login realizado com sucesso',
        token,
        usuario: dadosUsuario
      });
    }

    // Se não encontrou no Prisma, tentar no MCP de autenticação (usuários de desenvolvimento)
    console.log('Tentando autenticação no MCP de desenvolvimento...');
    
    try {
      const http = require('http');
      const authMcpUrl = process.env.NEXT_PUBLIC_AUTH_API_URL || 'http://localhost:3001';
      
      const postData = JSON.stringify({ email, senha });
      
      const options = {
        hostname: 'localhost',
        port: 3001,
        path: '/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        }
      };

      const mcpResponse = await new Promise((resolve, reject) => {
        const req = http.request(options, (res) => {
          let data = '';
          res.on('data', (chunk) => {
            data += chunk;
          });
          res.on('end', () => {
            try {
              const jsonData = JSON.parse(data);
              resolve({ ok: res.statusCode === 200, data: jsonData, status: res.statusCode });
            } catch (e) {
              reject(e);
            }
          });
        });
        
        req.on('error', (e) => {
          reject(e);
        });
        
        req.write(postData);
        req.end();
      });

      if (mcpResponse.ok) {
        console.log('Login bem-sucedido no MCP para:', email);
        
        return res.status(200).json({
          message: 'Login realizado com sucesso (desenvolvimento)',
          token: mcpResponse.data.token,
          usuario: mcpResponse.data.usuario
        });
      } else {
        console.log('Falha na autenticação no MCP, status:', mcpResponse.status);
      }
    } catch (mcpError) {
      console.log('Erro ao conectar com MCP:', mcpError.message);
    }

    // Se não encontrou em nenhum lugar
    return res.status(401).json({ message: 'Credenciais inválidas' });

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