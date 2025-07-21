import { PrismaClient } from '@prisma/client';
import { IBaseRepository } from '../../compartilhado/tipos/IBaseRepository';
import prisma from './prismaClient';

export abstract class BasePrismaRepository<T> implements IBaseRepository<T> {
  protected prisma: PrismaClient;
  protected model: any; // Representa o modelo Prisma (e.g., prisma.user)

  constructor(modelName: string) {
    this.prisma = prisma;
    this.model = (this.prisma as any)[modelName];
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findUnique({ where: { id } });
  }

  async findAll(): Promise<T[]> {
    return this.model.findMany();
  }

  async create(item: T): Promise<T> {
    return this.model.create({ data: item });
  }

  async update(id: string, item: Partial<T>): Promise<T | null> {
    return this.model.update({
      where: { id },
      data: item,
    });
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.model.delete({ where: { id } });
      return true;
    } catch (error) {
      console.error(`Erro ao deletar item com ID ${id}:`, error);
      return false;
    }
  }
}
