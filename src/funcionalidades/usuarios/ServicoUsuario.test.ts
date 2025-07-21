import { ServicoUsuario } from './ServicoUsuario';
import { RepositorioUsuarioPrisma } from '../../infraestrutura/banco-de-dados/RepositorioUsuarioPrisma';

// Mock do RepositorioUsuarioPrisma
jest.mock('../../infraestrutura/banco-de-dados/RepositorioUsuarioPrisma');

describe('ServicoUsuario', () => {
  let servicoUsuario: ServicoUsuario;
  let mockRepositorioUsuario: jest.Mocked<RepositorioUsuarioPrisma>;

  beforeEach(() => {
    servicoUsuario = new ServicoUsuario();
    mockRepositorioUsuario = new RepositorioUsuarioPrisma() as jest.Mocked<RepositorioUsuarioPrisma>;
    jest.clearAllMocks();
  });

  describe('criarUsuario', () => {
    it('deve criar um novo usuário se o e-mail não existe', async () => {
      mockRepositorioUsuario.findByEmail.mockResolvedValue(null);
      mockRepositorioUsuario.create.mockResolvedValue({ id: '1', nome: 'Novo', email: 'novo@example.com', senha: 'senha' });

      const usuario = { nome: 'Novo', email: 'novo@example.com', senha: 'senha' };
      const resultado = await servicoUsuario.criarUsuario(usuario);

      expect(mockRepositorioUsuario.findByEmail).toHaveBeenCalledWith(usuario.email);
      expect(mockRepositorioUsuario.create).toHaveBeenCalledWith(usuario);
      expect(resultado).toEqual({ id: '1', nome: 'Novo', email: 'novo@example.com', senha: 'senha' });
    });

    it('não deve criar um usuário se o e-mail já existe', async () => {
      mockRepositorioUsuario.findByEmail.mockResolvedValue({ id: '1', nome: 'Existente', email: 'existente@example.com', senha: 'senha' });

      const usuario = { nome: 'Existente', email: 'existente@example.com', senha: 'senha' };
      const resultado = await servicoUsuario.criarUsuario(usuario);

      expect(mockRepositorioUsuario.findByEmail).toHaveBeenCalledWith(usuario.email);
      expect(mockRepositorioUsuario.create).not.toHaveBeenCalled();
      expect(resultado).toBeNull();
    });
  });

  describe('buscarUsuarioPorId', () => {
    it('deve retornar um usuário pelo ID', async () => {
      const usuario = { id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'senha' };
      mockRepositorioUsuario.findById.mockResolvedValue(usuario);

      const resultado = await servicoUsuario.buscarUsuarioPorId('1');

      expect(mockRepositorioUsuario.findById).toHaveBeenCalledWith('1');
      expect(resultado).toEqual(usuario);
    });
  });

  describe('buscarTodosUsuarios', () => {
    it('deve retornar todos os usuários', async () => {
      const usuarios = [{ id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'senha' }];
      mockRepositorioUsuario.findAll.mockResolvedValue(usuarios);

      const resultado = await servicoUsuario.buscarTodosUsuarios();

      expect(mockRepositorioUsuario.findAll).toHaveBeenCalledTimes(1);
      expect(resultado).toEqual(usuarios);
    });
  });

  describe('atualizarUsuario', () => {
    it('deve atualizar um usuário existente', async () => {
      const dadosAtualizados = { nome: 'Atualizado' };
      const usuarioAtualizado = { id: '1', nome: 'Atualizado', email: 'teste@example.com', senha: 'senha' };
      mockRepositorioUsuario.update.mockResolvedValue(usuarioAtualizado);

      const resultado = await servicoUsuario.atualizarUsuario('1', dadosAtualizados);

      expect(mockRepositorioUsuario.update).toHaveBeenCalledWith('1', dadosAtualizados);
      expect(resultado).toEqual(usuarioAtualizado);
    });
  });

  describe('deletarUsuario', () => {
    it('deve deletar um usuário existente', async () => {
      mockRepositorioUsuario.delete.mockResolvedValue(true);

      const resultado = await servicoUsuario.deletarUsuario('1');

      expect(mockRepositorioUsuario.delete).toHaveBeenCalledWith('1');
      expect(resultado).toBe(true);
    });
  });
});
