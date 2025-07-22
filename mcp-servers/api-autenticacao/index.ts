import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { ServicoAutenticacao } from '@src/funcionalidades/autenticacao/ServicoAutenticacao';

dotenv.config();

const app = express();
const PORT = process.env.PORT_AUTH_MCP || 3001;

app.use(express.json());
app.use(cors());

const servicoAutenticacao = new ServicoAutenticacao();

// Rota de registro
app.post('/registrar', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const novoUsuario = await servicoAutenticacao.registrar({ nome, email, senha });
    if (novoUsuario) {
      res.status(201).json({ message: 'Usuário registrado com sucesso!', usuario: { id: novoUsuario.id, email: novoUsuario.email } });
    } else {
      res.status(400).json({ message: 'Erro ao registrar usuário. E-mail já em uso ou dados inválidos.' });
    }
  } catch (error) {
    console.error('Erro no registro:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota de login
app.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;
    const token = await servicoAutenticacao.autenticar(email, senha);
    if (token) {
      res.status(200).json({ message: 'Autenticação bem-sucedida!', token });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas.' });
    }
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para solicitar recuperação de senha
app.post('/recuperar-senha', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Verificar se o email existe
    const usuario = await servicoAutenticacao.buscarUsuarioPorEmail(email);
    
    if (!usuario) {
      // Por segurança, não informamos se o email existe ou não
      res.status(200).json({ 
        message: 'Se o e-mail estiver cadastrado, enviaremos instruções para recuperação de senha.' 
      });
      return;
    }
    
    // Gerar token de recuperação de senha
    const token = await servicoAutenticacao.gerarTokenRecuperacaoSenha(email);
    
    // Em um ambiente real, enviaríamos um e-mail com o link para redefinição de senha
    // Por simplicidade, apenas retornamos o token
    console.log(`Token de recuperação para ${email}: ${token}`);
    
    res.status(200).json({ 
      message: 'Se o e-mail estiver cadastrado, enviaremos instruções para recuperação de senha.',
      // Em ambiente de desenvolvimento, retornamos o token para facilitar os testes
      token: process.env.NODE_ENV === 'development' ? token : undefined
    });
  } catch (error) {
    console.error('Erro na recuperação de senha:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para redefinir senha
app.post('/redefinir-senha', async (req, res) => {
  try {
    const { senha, token } = req.body;
    
    if (!senha || !token) {
      res.status(400).json({ message: 'Senha e token são obrigatórios.' });
      return;
    }
    
    const sucesso = await servicoAutenticacao.redefinirSenha(token, senha);
    
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
const autenticarToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // Unauthorized

  try {
    const usuario = servicoAutenticacao.verificarToken(token);
    (req as any).usuario = usuario;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido ou expirado.' });
  }
};

// Rota protegida para verificar autenticação
app.get('/verificar', autenticarToken, (req, res) => {
  res.json({ 
    message: 'Autenticação válida!',
    usuario: (req as any).usuario
  });
});

app.listen(PORT, () => {
  console.log(`MCP de Autenticação rodando na porta ${PORT}`);
});

export default app;
