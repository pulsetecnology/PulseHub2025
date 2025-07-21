import request from 'supertest';
import { ServicoAutenticacao } from '../../src/funcionalidades/autenticacao/ServicoAutenticacao';
import { mock } from 'jest-mock-extended';

// Mock do ServicoAutenticacao
jest.mock('../../src/funcionalidades/autenticacao/ServicoAutenticacao');

const mockServicoAutenticacao = mock<ServicoAutenticacao>();

// Mockar a instância do ServicoAutenticacao para que os testes usem o mock
jest.mocked(ServicoAutenticacao).mockImplementation(() => mockServicoAutenticacao);

// Importar o app *depois* de mockar o serviço para garantir que o mock seja usado
import app from './index'; // Assumindo que o index.ts exporta o app

describe('API de Autenticação (MCP)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Resetar mocks para cada teste
    mockServicoAutenticacao.registrar.mockReset();
    mockServicoAutenticacao.autenticar.mockReset();
  });

  describe('POST /registrar', () => {
    it('deve registrar um novo usuário e retornar 201', async () => {
      mockServicoAutenticacao.registrar.mockResolvedValue({ id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'hashed_senha' });

      const res = await request(app)
        .post('/registrar')
        .send({
          nome: 'Teste',
          email: 'teste@example.com',
          senha: 'senha123',
        });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('message', 'Usuário registrado com sucesso!');
      expect(mockServicoAutenticacao.registrar).toHaveBeenCalledTimes(1);
    });

    it('deve retornar 400 se o registro falhar (e-mail já em uso)', async () => {
      mockServicoAutenticacao.registrar.mockResolvedValue(null);

      const res = await request(app)
        .post('/registrar')
        .send({
          nome: 'Teste',
          email: 'teste@example.com',
          senha: 'senha123',
        });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('message', 'Erro ao registrar usuário. E-mail já em uso ou dados inválidos.');
      expect(mockServicoAutenticacao.registrar).toHaveBeenCalledTimes(1);
    });

    it('deve retornar 500 para erro interno do servidor no registro', async () => {
      mockServicoAutenticacao.registrar.mockRejectedValue(new Error('Erro de banco de dados'));

      const res = await request(app)
        .post('/registrar')
        .send({
          nome: 'Teste',
          email: 'teste@example.com',
          senha: 'senha123',
        });

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('POST /login', () => {
    it('deve autenticar o usuário e retornar um token 200', async () => {
      mockServicoAutenticacao.autenticar.mockResolvedValue('mocked_jwt_token');

      const res = await request(app)
        .post('/login')
        .send({
          email: 'teste@example.com',
          senha: 'senha123',
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('token', 'mocked_jwt_token');
      expect(mockServicoAutenticacao.autenticar).toHaveBeenCalledTimes(1);
    });

    it('deve retornar 401 para credenciais inválidas no login', async () => {
      mockServicoAutenticacao.autenticar.mockResolvedValue(null);

      const res = await request(app)
        .post('/login')
        .send({
          email: 'teste@example.com',
          senha: 'senhaInvalida',
        });

      expect(res.statusCode).toEqual(401);
      expect(res.body).toHaveProperty('message', 'Credenciais inválidas.');
      expect(mockServicoAutenticacao.autenticar).toHaveBeenCalledTimes(1);
    });

    it('deve retornar 500 para erro interno do servidor no login', async () => {
      mockServicoAutenticacao.autenticar.mockRejectedValue(new Error('Erro de rede'));

      const res = await request(app)
        .post('/login')
        .send({
          email: 'teste@example.com',
          senha: 'senha123',
        });

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Erro interno do servidor.');
    });
  });

  describe('GET /protegido', () => {
    it('deve retornar 200 para rota protegida com token válido (mocked)', async () => {
      // Neste teste, o middleware de autenticação é mockado para simplesmente chamar next()
      // Em um teste de integração real, você passaria um token JWT válido.
      const res = await request(app)
        .get('/protegido')
        .set('Authorization', 'Bearer algum_token_valido');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Você acessou uma rota protegida!');
    });

    it('deve retornar 401 para rota protegida sem token', async () => {
      const res = await request(app)
        .get('/protegido');

      expect(res.statusCode).toEqual(401);
    });
  });
});
