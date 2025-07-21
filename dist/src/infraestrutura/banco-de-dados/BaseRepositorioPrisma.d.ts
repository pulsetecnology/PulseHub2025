import { PrismaClient } from '@src/gerado/prisma';
import { IBaseRepository } from '@src/compartilhado/tipos/IRepositorioBase';
export declare abstract class BaseRepositorioPrisma<T> implements IBaseRepository<T> {
    protected prisma: PrismaClient;
    protected model: any;
    constructor(modelName: string);
    findById(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: Partial<T>): Promise<T | null>;
    delete(id: string): Promise<boolean>;
}
