import { RepositorioNotificacaoPrisma } from './RepositorioNotificacaoPrisma';
import prisma from './prismaClient';

// Mock do PrismaClient para evitar conexão real com o banco de dados durante os testes
jest.mock('./prismaClient', () => ({
  notificacao: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe('RepositorioNotificacaoPrisma', () => {
  let repository: RepositorioNotificacaoPrisma;

  beforeEach(() => {
    repository = new RepositorioNotificacaoPrisma();
    jest.clearAllMocks();
  });

  const mockNotificacao = {
    id: 'notif1',
    destinatarioId: 'user1',
    mensagem: 'Sua encomenda chegou!',
    dataEnvio: new Date(),
    lida: false,
    tipo: 'entrega',
  };

  it('deve chamar create no modelo Prisma', async () => {
    (prisma.notificacao.create as jest.Mock).mockResolvedValue(mockNotificacao);
    const newNotificacao = { destinatarioId: 'user2', mensagem: 'Nova mensagem', tipo: 'chat' };
    const result = await repository.create(newNotificacao as any);
    expect(prisma.notificacao.create).toHaveBeenCalledWith({ data: newNotificacao });
    expect(result).toEqual(mockNotificacao);
  });

  it('deve chamar findUnique no modelo Prisma', async () => {
    (prisma.notificacao.findUnique as jest.Mock).mockResolvedValue(mockNotificacao);
    const result = await repository.findById('notif1');
    expect(prisma.notificacao.findUnique).toHaveBeenCalledWith({ where: { id: 'notif1' } });
    expect(result).toEqual(mockNotificacao);
  });

  it('deve chamar findMany no modelo Prisma', async () => {
    (prisma.notificacao.findMany as jest.Mock).mockResolvedValue([mockNotificacao]);
    const result = await repository.findAll();
    expect(prisma.notificacao.findMany).toHaveBeenCalledTimes(1);
    expect(result).toEqual([mockNotificacao]);
  });

  it('deve chamar update no modelo Prisma', async () => {
    const updatedData = { lida: true };
    const updatedNotificacao = { ...mockNotificacao, ...updatedData };
    (prisma.notificacao.update as jest.Mock).mockResolvedValue(updatedNotificacao);
    const result = await repository.update('notif1', updatedData as any);
    expect(prisma.notificacao.update).toHaveBeenCalledWith({ where: { id: 'notif1' }, data: updatedData });
    expect(result).toEqual(updatedNotificacao);
  });

  it('deve chamar delete no modelo Prisma', async () => {
    (prisma.notificacao.delete as jest.Mock).mockResolvedValue(undefined);
    const result = await repository.delete('notif1');
    expect(prisma.notificacao.delete).toHaveBeenCalledWith({ where: { id: 'notif1' } });
    expect(result).toBe(true);
  });
});
