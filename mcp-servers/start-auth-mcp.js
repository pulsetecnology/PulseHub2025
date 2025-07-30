// Script para iniciar o MCP de Autenticação
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

console.log('Iniciando o MCP de Autenticação...');

const app = express();
const PORT = process.env.PORT_AUTH_MCP || 3001;

app.use(express.json());
app.use(cors());

// Chave secreta para assinar tokens JWT
const JWT_SECRET = process.env.JWT_SECRET || 'chave-secreta-temporaria';

// Banco de dados simulado para usuários
const usuarios = {
  'admin@pulsehub.com': { 
    id: 'user-admin', 
    nome: 'Carlos Oliveira', 
    email: 'admin@pulsehub.com', 
    senha: bcrypt.hashSync('admin123', 10),
    papel: 'ADMINISTRADOR'
  },
  'fornecedor@exemplo.com': { 
    id: 'user-fornecedor', 
    nome: 'João Silva', 
    email: 'fornecedor@exemplo.com', 
    senha: bcrypt.hashSync('fornecedor123', 10),
    papel: 'FORNECEDOR'
  },
  'representante@exemplo.com': { 
    id: 'user-representante', 
    nome: 'Maria Santos', 
    email: 'representante@exemplo.com', 
    senha: bcrypt.hashSync('representante123', 10),
    papel: 'REPRESENTANTE'
  }
};

// Tokens de recuperação de senha
const tokensRecuperacao = {};

// Função para gerar um token JWT
const gerarToken = (usuario) => {
  return jwt.sign(
    { 
      id: usuario.id, 
      email: usuario.email,
      nome: usuario.nome,
      papel: usuario.papel
    }, 
    JWT_SECRET, 
    { expiresIn: '24h' }
  );
};

// Função para verificar um token JWT
const verificarToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Token inválido ou expirado');
  }
};

// Função para buscar um usuário por email
const buscarUsuarioPorEmail = (email) => {
  return usuarios[email] || null;
};

// Função para registrar um novo usuário
const registrarUsuario = (nome, email, senha) => {
  // Verificar se o email já está em uso
  if (usuarios[email]) {
    return null;
  }
  
  // Criar novo usuário
  const id = `user-${Math.random().toString(36).substring(2, 9)}`;
  const hashSenha = bcrypt.hashSync(senha, 10);
  
  const novoUsuario = {
    id,
    nome,
    email,
    senha: hashSenha,
    papel: 'REPRESENTANTE' // Papel padrão para novos usuários
  };
  
  // Adicionar ao "banco de dados"
  usuarios[email] = novoUsuario;
  
  // Retornar usuário sem a senha
  const { senha: _, ...usuarioSemSenha } = novoUsuario;
  return usuarioSemSenha;
};

// Função para autenticar um usuário
const autenticarUsuario = (email, senha) => {
  const usuario = usuarios[email];
  
  if (!usuario) {
    return null;
  }
  
  const senhaValida = bcrypt.compareSync(senha, usuario.senha);
  
  if (!senhaValida) {
    return null;
  }
  
  return gerarToken(usuario);
};

// Função para gerar um token de recuperação de senha
const gerarTokenRecuperacao = (email) => {
  const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  
  // Armazenar token com expiração de 1 hora
  const expiracao = new Date();
  expiracao.setHours(expiracao.getHours() + 1);
  
  tokensRecuperacao[token] = { email, expiracao };
  
  return token;
};

// Função para redefinir a senha
const redefinirSenha = (token, novaSenha) => {
  const recuperacao = tokensRecuperacao[token];
  
  if (!recuperacao) {
    return false;
  }
  
  const agora = new Date();
  if (agora > recuperacao.expiracao) {
    delete tokensRecuperacao[token];
    return false;
  }
  
  const usuario = usuarios[recuperacao.email];
  if (!usuario) {
    delete tokensRecuperacao[token];
    return false;
  }
  
  // Atualizar senha
  usuario.senha = bcrypt.hashSync(novaSenha, 10);
  
  // Remover token usado
  delete tokensRecuperacao[token];
  
  return true;
};

// Função para registrar usuário com papel específico (para desenvolvimento)
const registrarUsuarioComPapel = (nome, email, senha, papel) => {
  // Verificar se o email já está em uso
  if (usuarios[email]) {
    return null;
  }
  
  // Criar novo usuário
  const id = `user-${Math.random().toString(36).substring(2, 9)}`;
  const hashSenha = bcrypt.hashSync(senha, 10);
  
  const novoUsuario = {
    id,
    nome,
    email,
    senha: hashSenha,
    papel: papel || 'REPRESENTANTE' // Papel padrão
  };
  
  // Adicionar ao "banco de dados"
  usuarios[email] = novoUsuario;
  
  // Retornar usuário sem a senha
  const { senha: _, ...usuarioSemSenha } = novoUsuario;
  return usuarioSemSenha;
};

// Rota de registro
app.post('/registrar', (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    
    if (!nome || !email || !senha) {
      return res.status(400).json({ message: 'Nome, email e senha são obrigatórios.' });
    }
    
    const novoUsuario = registrarUsuario(nome, email, senha);
    
    if (novoUsuario) {
      res.status(201).json({ 
        message: 'Usuário registrado com sucesso!', 
        usuario: { id: novoUsuario.id, email: novoUsuario.email, nome: novoUsuario.nome } 
      });
    } else {
      res.status(400).json({ message: 'Erro ao registrar usuário. E-mail já em uso.' });
    }
  } catch (error) {
    console.error('Erro no registro:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota especial para criar usuários de desenvolvimento
app.post('/dev/criar-usuario', (req, res) => {
  try {
    const { nome, email, senha, papel } = req.body;
    
    if (!nome || !email || !senha || !papel) {
      return res.status(400).json({ message: 'Nome, email, senha e papel são obrigatórios.' });
    }
    
    // Validar papel
    const papeisValidos = ['ADMINISTRADOR', 'FORNECEDOR', 'REPRESENTANTE'];
    if (!papeisValidos.includes(papel)) {
      return res.status(400).json({ message: 'Papel inválido. Use: ADMINISTRADOR, FORNECEDOR ou REPRESENTANTE' });
    }
    
    const novoUsuario = registrarUsuarioComPapel(nome, email, senha, papel);
    
    if (novoUsuario) {
      res.status(201).json({ 
        message: 'Usuário de desenvolvimento criado com sucesso!', 
        usuario: novoUsuario
      });
    } else {
      res.status(400).json({ message: 'Erro ao criar usuário. E-mail já em uso.' });
    }
  } catch (error) {
    console.error('Erro ao criar usuário de desenvolvimento:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para listar todos os usuários (apenas para desenvolvimento)
app.get('/dev/usuarios', (req, res) => {
  try {
    const usuariosLista = Object.values(usuarios).map(usuario => {
      const { senha, ...usuarioSemSenha } = usuario;
      return usuarioSemSenha;
    });
    
    res.status(200).json({ usuarios: usuariosLista });
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para deletar usuário (apenas para desenvolvimento)
app.delete('/dev/usuarios/:email', (req, res) => {
  try {
    const { email } = req.params;
    
    if (usuarios[email]) {
      delete usuarios[email];
      res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota de login
app.post('/login', (req, res) => {
  try {
    const { email, senha } = req.body;
    
    if (!email || !senha) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
    }
    
    const token = autenticarUsuario(email, senha);
    
    if (token) {
      const usuario = buscarUsuarioPorEmail(email);
      res.status(200).json({ 
        message: 'Autenticação bem-sucedida!', 
        token,
        usuario: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          papel: usuario.papel
        }
      });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas.' });
    }
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para solicitar recuperação de senha
app.post('/recuperar-senha', (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: 'Email é obrigatório.' });
    }

    // Verificar se o email existe
    const usuario = buscarUsuarioPorEmail(email);

    // Por segurança, sempre retornamos a mesma mensagem
    const mensagem = 'Se o e-mail estiver cadastrado, enviaremos instruções para recuperação de senha.';

    if (!usuario) {
      return res.status(200).json({ message: mensagem });
    }

    // Gerar token de recuperação de senha
    const token = gerarTokenRecuperacao(email);

    // Em um ambiente real, enviaríamos um e-mail com o link para redefinição de senha
    console.log(`Token de recuperação para ${email}: ${token}`);

    res.status(200).json({
      message: mensagem,
      // Em ambiente de desenvolvimento, retornamos o token para facilitar os testes
      token: process.env.NODE_ENV === 'development' ? token : undefined
    });
  } catch (error) {
    console.error('Erro na recuperação de senha:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para redefinir senha
app.post('/redefinir-senha', (req, res) => {
  try {
    const { senha, token } = req.body;

    if (!senha || !token) {
      return res.status(400).json({ message: 'Senha e token são obrigatórios.' });
    }

    const sucesso = redefinirSenha(token, senha);

    if (sucesso) {
      res.status(200).json({ message: 'Senha redefinida com sucesso!' });
    } else {
      res.status(400).json({ message: 'Token inválido ou expirado.' });
    }
  } catch (error) {
    console.error('Erro na redefinição de senha:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Middleware de autenticação
const autenticarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido.' });
  }

  try {
    const usuario = verificarToken(token);
    req.usuario = usuario;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido ou expirado.' });
  }
};

// Rota para login com Google
app.post('/login-google', (req, res) => {
  try {
    // Em um cenário real, aqui seria implementada a validação do token do Google
    // Por enquanto, vamos simular uma resposta bem-sucedida
    
    // Gerar um token JWT
    const token = jwt.sign(
      { 
        id: `google-user-${Math.random().toString(36).substring(2, 9)}`,
        nome: 'Usuário Google',
        email: 'usuario@gmail.com',
        papel: 'REPRESENTANTE',
        provider: 'google'
      }, 
      JWT_SECRET, 
      { expiresIn: '24h' }
    );
    
    res.status(200).json({
      message: 'Autenticação com Google bem-sucedida!',
      token,
      usuario: {
        id: `google-user-${Math.random().toString(36).substring(2, 9)}`,
        nome: 'Usuário Google',
        email: 'usuario@gmail.com',
        papel: 'REPRESENTANTE',
        fotoUrl: 'https://lh3.googleusercontent.com/a/default-user'
      }
    });
  } catch (error) {
    console.error('Erro no login com Google:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota pública para verificar se o servidor está online
// Rota pública para verificar se o servidor está online
app.get('/verificar', (req, res) => {
  res.json({
    message: 'Servidor de autenticação online!',
    timestamp: new Date().toISOString(),
    status: 'healthy'
  });
});

// Rota para verificar token e retornar informações do usuário
app.get('/verificar-token', (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }
    
    const token = authHeader.substring(7); // Remove 'Bearer '
    const decoded = verificarToken(token);
    
    // Buscar informações completas do usuário
    const usuario = buscarUsuarioPorEmail(decoded.email);
    
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    
    // Retornar dados do usuário sem a senha
    const { senha, ...usuarioSemSenha } = usuario;
    
    res.json({
      message: 'Token válido',
      usuario: usuarioSemSenha
    });
  } catch (error) {
    console.error('Erro na verificação do token:', error);
    res.status(401).json({ message: 'Token inválido ou expirado' });
  }
});

// Rota protegida para verificar autenticação
app.get('/usuario', autenticarToken, (req, res) => {
  res.json({
    message: 'Autenticação válida!',
    usuario: req.usuario
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`MCP de Autenticação rodando na porta ${PORT}`);
});