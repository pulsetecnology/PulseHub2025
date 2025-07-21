import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { ServicoAutenticacao } from '../../src/funcionalidades/autenticacao/ServicoAutenticacao';

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

// Middleware de autenticação (exemplo básico)
const autenticarToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // Unauthorized

  // Aqui você precisaria de uma chave secreta para verificar o token
  // Por simplicidade, vamos apenas passar para o próximo middleware
  // Em um ambiente real, você usaria jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => { ... });
  next();
};

// Exemplo de rota protegida
app.get('/protegido', autenticarToken, (req, res) => {
  res.json({ message: 'Você acessou uma rota protegida!' });
});

app.listen(PORT, () => {
  console.log(`MCP de Autenticação rodando na porta ${PORT}`);
});