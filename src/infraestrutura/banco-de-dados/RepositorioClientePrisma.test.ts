import { RepositorioClientePrisma } from './RepositorioClientePrisma';
import prisma from './prismaClient';

// Mock do PrismaClient para evitar conexão real com o banco de dados durante os testes
jest.mock('./prismaClient', () => ({
  cliente: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe('RepositorioClientePrisma', () => {
  let repository: RepositorioClientePrisma;

  beforeEach(() => {
    repository = new RepositorioClientePrisma();
    jest.clearAllMocks();
  });

  const mockCliente = {
    id: 'cli1',
    nome: 'Cliente Teste',
    email: 'cliente@example.com',
    cpfCnpj: '12345678901',
  };

  it('deve chamar create no modelo Prisma', async () => {
    (prisma.cliente.create as jest.Mock).mockResolvedValue(mockCliente);
    const newCliente = { nome: 'Novo Cliente', email: 'novo@example.com', cpfCnpj: '11122233344' };
    const result = await repository.create(newCliente as any);
    expect(prisma.cliente.create).toHaveBeenCalledWith({ data: newCliente });
    expect(result).toEqual(mockCliente);
  });

  it('deve chamar findUnique no modelo Prisma', async () => {
    (prisma.cliente.findUnique as jest.Mock).mockResolvedValue(mockCliente);
    const result = await repository.findById('cli1');
    expect(prisma.cliente.findUnique).toHaveBeenCalledWith({ where: { id: 'cli1' } });
    expect(result).toEqual(mockCliente);
  });

  it('deve chamar findMany no modelo Prisma', async () => {
    (prisma.cliente.findMany as jest.Mock).mockResolvedValue([mockCliente]);
    const result = await repository.findAll();
    expect(prisma.cliente.findMany).toHaveBeenCalledTimes(1);
    expect(result).toEqual([mockCliente]);
  });

  it('deve chamar update no modelo Prisma', async () => {
    const updatedData = { nome: 'Cliente Atualizado' };
    const updatedCliente = { ...mockCliente, ...updatedData };
    (prisma.cliente.update as jest.Mock).mockResolvedValue(updatedCliente);
    const result = await repository.update('cli1', updatedData as any);
    expect(prisma.cliente.update).toHaveBeenCalledWith({ where: { id: 'cli1' }, data: updatedData });
    expect(result).toEqual(updatedCliente);
  });

  it('deve chamar delete no modelo Prisma', async () => {
    (prisma.cliente.delete as jest.Mock).mockResolvedValue(undefined);
    const result = await repository.delete('cli1');
    expect(prisma.cliente.delete).toHaveBeenCalledWith({ where: { id: 'cli1' } });
    expect(result).toBe(true);
  });
});
