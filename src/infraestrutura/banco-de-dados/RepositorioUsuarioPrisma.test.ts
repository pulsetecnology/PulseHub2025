import { RepositorioUsuarioPrisma } from './RepositorioUsuarioPrisma';
import prisma from './prismaClient';

// Mock do PrismaClient para evitar conexão real com o banco de dados durante os testes
jest.mock('./prismaClient', () => ({
  usuario: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe('RepositorioUsuarioPrisma', () => {
  let repository: RepositorioUsuarioPrisma;

  beforeEach(() => {
    repository = new RepositorioUsuarioPrisma();
    jest.clearAllMocks();
  });

  it('deve chamar findByEmail no modelo Prisma', async () => {
    const mockUser = { id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'hashedpassword' };
    (prisma.usuario.findUnique as jest.Mock).mockResolvedValue(mockUser);

    const result = await repository.findByEmail('teste@example.com');

    expect(prisma.usuario.findUnique).toHaveBeenCalledWith({ where: { email: 'teste@example.com' } });
    expect(result).toEqual(mockUser);
  });

  it('deve retornar null se o usuário não for encontrado por email', async () => {
    (prisma.usuario.findUnique as jest.Mock).mockResolvedValue(null);

    const result = await repository.findByEmail('naoexiste@example.com');

    expect(prisma.usuario.findUnique).toHaveBeenCalledWith({ where: { email: 'naoexiste@example.com' } });
    expect(result).toBeNull();
  });

  // Testes para os métodos herdados de BasePrismaRepository
  it('deve chamar findUnique ao buscar por ID', async () => {
    const mockUser = { id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'hashedpassword' };
    (prisma.usuario.findUnique as jest.Mock).mockResolvedValue(mockUser);
    const result = await repository.findById('1');
    expect(prisma.usuario.findUnique).toHaveBeenCalledWith({ where: { id: '1' } });
    expect(result).toEqual(mockUser);
  });

  it('deve chamar findAll ao buscar todos', async () => {
    const mockUsers = [{ id: '1', nome: 'Teste', email: 'teste@example.com', senha: 'hashedpassword' }];
    (prisma.usuario.findMany as jest.Mock).mockResolvedValue(mockUsers);
    const result = await repository.findAll();
    expect(prisma.usuario.findMany).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockUsers);
  });

  it('deve chamar create ao criar um item', async () => {
    const newUser = { nome: 'Novo Usuário', email: 'novo@example.com', senha: 'newpassword' };
    const createdUser = { id: '2', ...newUser };
    (prisma.usuario.create as jest.Mock).mockResolvedValue(createdUser);
    const result = await repository.create(newUser as any);
    expect(prisma.usuario.create).toHaveBeenCalledWith({ data: newUser });
    expect(result).toEqual(createdUser);
  });

  it('deve chamar update ao atualizar um item', async () => {
    const updatedData = { nome: 'Usuário Atualizado' };
    const updatedUser = { id: '1', nome: 'Usuário Atualizado', email: 'teste@example.com', senha: 'hashedpassword' };
    (prisma.usuario.update as jest.Mock).mockResolvedValue(updatedUser);
    const result = await repository.update('1', updatedData as any);
    expect(prisma.usuario.update).toHaveBeenCalledWith({ where: { id: '1' }, data: updatedData });
    expect(result).toEqual(updatedUser);
  });

  it('deve chamar delete ao deletar um item', async () => {
    (prisma.usuario.delete as jest.Mock).mockResolvedValue(undefined);
    const result = await repository.delete('1');
    expect(prisma.usuario.delete).toHaveBeenCalledWith({ where: { id: '1' } });
    expect(result).toBe(true);
  });
});
