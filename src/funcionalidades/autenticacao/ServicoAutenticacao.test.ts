import { ServicoAutenticacao } from './ServicoAutenticacao';
import { RepositorioUsuarioPrisma } from '@src/infraestrutura/banco-de-dados/RepositorioUsuarioPrisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Mock do RepositorioUsuarioPrisma
jest.mock('../../infraestrutura/banco-de-dados/RepositorioUsuarioPrisma');

// Mock do bcrypt
jest.mock('bcryptjs', () => ({
  hash: jest.fn((password) => Promise.resolve(`hashed_${password}`)),
  compare: jest.fn((password, hash) => Promise.resolve(hash === `hashed_${password}`)),
}));

// Mock do jsonwebtoken
jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(() => 'mocked_jwt_token'),
}));

describe('ServicoAutenticacao', () => {
  let servicoAutenticacao: ServicoAutenticacao;
  let mockRepositorioUsuario: jest.Mocked<RepositorioUsuarioPrisma>;

  beforeEach(() => {
    servicoAutenticacao = new ServicoAutenticacao();
    mockRepositorioUsuario = new RepositorioUsuarioPrisma() as jest.Mocked<RepositorioUsuarioPrisma>;
    jest.clearAllMocks();

    // Configura variáveis de ambiente para os testes
    process.env.JWT_SECRET = 'test_secret';
    process.env.JWT_EXPIRES_IN = '1h';
  });

  afterEach(() => {
    // Limpa variáveis de ambiente após os testes
    delete process.env.JWT_SECRET;
    delete process.env.JWT_EXPIRES_IN;
  });

  describe('registrar', () => {
    it('deve registrar um novo usuário com sucesso', async () => {
      mockRepositorioUsuario.findByEmail.mockResolvedValue(null);
      mockRepositorioUsuario.create.mockResolvedValue({ id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'hashed_senha123' });

      const usuario = { nome: 'Teste', email: 'teste@example.com', senha: 'senha123' };
      const resultado = await servicoAutenticacao.registrar(usuario);

      expect(mockRepositorioUsuario.findByEmail).toHaveBeenCalledWith(usuario.email);
      expect(bcrypt.hash).toHaveBeenCalledWith(usuario.senha, 10);
      expect(mockRepositorioUsuario.create).toHaveBeenCalledWith({ ...usuario, senha: 'hashed_senha123' });
      expect(resultado).toEqual({ id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'hashed_senha123' });
    });

    it('não deve registrar um usuário se o e-mail já existe', async () => {
      mockRepositorioUsuario.findByEmail.mockResolvedValue({ id: '1', nome: 'Existente', email: 'teste@example.com', senha: 'hashed_senhaExistente' });

      const usuario = { nome: 'Teste', email: 'teste@example.com', senha: 'senha123' };
      const resultado = await servicoAutenticacao.registrar(usuario);

      expect(mockRepositorioUsuario.findByEmail).toHaveBeenCalledWith(usuario.email);
      expect(mockRepositorioUsuario.create).not.toHaveBeenCalled();
      expect(resultado).toBeNull();
    });
  });

  describe('autenticar', () => {
    it('deve autenticar um usuário com sucesso e retornar um token', async () => {
      const usuarioExistente = { id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'hashed_senha123' };
      mockRepositorioUsuario.findByEmail.mockResolvedValue(usuarioExistente);

      const resultado = await servicoAutenticacao.autenticar('teste@example.com', 'senha123');

      expect(mockRepositorioUsuario.findByEmail).toHaveBeenCalledWith('teste@example.com');
      expect(bcrypt.compare).toHaveBeenCalledWith('senha123', 'hashed_senha123');
      expect(jwt.sign).toHaveBeenCalledWith({ id: usuarioExistente.id, email: usuarioExistente.email }, 'test_secret', { expiresIn: '1h' });
      expect(resultado).toBe('mocked_jwt_token');
    });

    it('não deve autenticar se o usuário não for encontrado', async () => {
      mockRepositorioUsuario.findByEmail.mockResolvedValue(null);

      const resultado = await servicoAutenticacao.autenticar('naoexiste@example.com', 'senha123');

      expect(mockRepositorioUsuario.findByEmail).toHaveBeenCalledWith('naoexiste@example.com');
      expect(bcrypt.compare).not.toHaveBeenCalled();
      expect(jwt.sign).not.toHaveBeenCalled();
      expect(resultado).toBeNull();
    });

    it('não deve autenticar se a senha for inválida', async () => {
      const usuarioExistente = { id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'hashed_senhaCorreta' };
      mockRepositorioUsuario.findByEmail.mockResolvedValue(usuarioExistente);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      const resultado = await servicoAutenticacao.autenticar('teste@example.com', 'senhaInvalida');

      expect(mockRepositorioUsuario.findByEmail).toHaveBeenCalledWith('teste@example.com');
      expect(bcrypt.compare).toHaveBeenCalledWith('senhaInvalida', 'hashed_senhaCorreta');
      expect(jwt.sign).not.toHaveBeenCalled();
      expect(resultado).toBeNull();
    });
  });
});
