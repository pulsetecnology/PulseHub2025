import { PrismaCommissionRepository } from './PrismaCommissionRepository';
import prisma from './prismaClient';

// Mock do PrismaClient para evitar conexão real com o banco de dados durante os testes
jest.mock('./prismaClient', () => ({
  commission: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe('PrismaCommissionRepository', () => {
  let repository: PrismaCommissionRepository;

  beforeEach(() => {
    repository = new PrismaCommissionRepository();
    jest.clearAllMocks();
  });

  const mockCommission = {
    id: 'comm1',
    representanteId: 'rep1',
    pedidoId: 'ped1',
    percentual: 10.0,
    valorCalculado: 100.0,
    dataEfetivacao: new Date(),
  };

  it('deve chamar create no modelo Prisma', async () => {
    (prisma.commission.create as jest.Mock).mockResolvedValue(mockCommission);
    const newCommission = { representanteId: 'rep1', pedidoId: 'ped1', percentual: 10.0, valorCalculado: 100.0, dataEfetivacao: new Date() };
    const result = await repository.create(newCommission as any);
    expect(prisma.commission.create).toHaveBeenCalledWith({ data: newCommission });
    expect(result).toEqual(mockCommission);
  });

  it('deve chamar findUnique no modelo Prisma', async () => {
    (prisma.commission.findUnique as jest.Mock).mockResolvedValue(mockCommission);
    const result = await repository.findById('comm1');
    expect(prisma.commission.findUnique).toHaveBeenCalledWith({ where: { id: 'comm1' } });
    expect(result).toEqual(mockCommission);
  });

  it('deve chamar findMany no modelo Prisma', async () => {
    (prisma.commission.findMany as jest.Mock).mockResolvedValue([mockCommission]);
    const result = await repository.findAll();
    expect(prisma.commission.findMany).toHaveBeenCalledTimes(1);
    expect(result).toEqual([mockCommission]);
  });

  it('deve chamar update no modelo Prisma', async () => {
    const updatedData = { percentual: 12.0 };
    const updatedCommission = { ...mockCommission, ...updatedData };
    (prisma.commission.update as jest.Mock).mockResolvedValue(updatedCommission);
    const result = await repository.update('comm1', updatedData as any);
    expect(prisma.commission.update).toHaveBeenCalledWith({ where: { id: 'comm1' }, data: updatedData });
    expect(result).toEqual(updatedCommission);
  });

  it('deve chamar delete no modelo Prisma', async () => {
    (prisma.commission.delete as jest.Mock).mockResolvedValue(undefined);
    const result = await repository.delete('comm1');
    expect(prisma.commission.delete).toHaveBeenCalledWith({ where: { id: 'comm1' } });
    expect(result).toBe(true);
  });
});
