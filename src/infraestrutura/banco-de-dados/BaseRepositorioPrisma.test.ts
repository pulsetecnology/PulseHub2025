import { BaseRepositorioPrisma } from './BaseRepositorioPrisma';
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
  // Adicione outros modelos conforme necessário
}));

class TestRepository extends BaseRepositorioPrisma<any> {
  constructor() {
    super('usuario'); // Usamos 'usuario' como um modelo de exemplo para o mock
  }
}

describe('BaseRepositorioPrisma', () => {
  let repository: TestRepository;

  beforeEach(() => {
    repository = new TestRepository();
    // Limpa os mocks antes de cada teste
    jest.clearAllMocks();
  });

  it('deve chamar findUnique ao buscar por ID', async () => {
    (prisma.usuario.findUnique as jest.Mock).mockResolvedValue({ id: '1', name: 'Test User' });
    const result = await repository.findById('1');
    expect(prisma.usuario.findUnique).toHaveBeenCalledWith({ where: { id: '1' } });
    expect(result).toEqual({ id: '1', name: 'Test User' });
  });

  it('deve chamar findMany ao buscar todos', async () => {
    (prisma.usuario.findMany as jest.Mock).mockResolvedValue([{ id: '1', name: 'Test User' }]);
    const result = await repository.findAll();
    expect(prisma.usuario.findMany).toHaveBeenCalledTimes(1);
    expect(result).toEqual([{ id: '1', name: 'Test User' }]);
  });

  it('deve chamar create ao criar um item', async () => {
    const newItem = { name: 'New User' };
    (prisma.usuario.create as jest.Mock).mockResolvedValue({ id: '2', ...newItem });
    const result = await repository.create(newItem);
    expect(prisma.usuario.create).toHaveBeenCalledWith({ data: newItem });
    expect(result).toEqual({ id: '2', ...newItem });
  });

  it('deve chamar update ao atualizar um item', async () => {
    const updatedItem = { name: 'Updated User' };
    (prisma.usuario.update as jest.Mock).mockResolvedValue({ id: '1', ...updatedItem });
    const result = await repository.update('1', updatedItem);
    expect(prisma.usuario.update).toHaveBeenCalledWith({ where: { id: '1' }, data: updatedItem });
    expect(result).toEqual({ id: '1', ...updatedItem });
  });

  it('deve chamar delete ao deletar um item', async () => {
    (prisma.usuario.delete as jest.Mock).mockResolvedValue(undefined);
    const result = await repository.delete('1');
    expect(prisma.usuario.delete).toHaveBeenCalledWith({ where: { id: '1' } });
    expect(result).toBe(true);
  });

  it('deve retornar false se a exclusão falhar', async () => {
    (prisma.usuario.delete as jest.Mock).mockRejectedValue(new Error('Erro de exclusão'));
    const result = await repository.delete('1');
    expect(result).toBe(false);
  });
});
