/**
 * Script de Limpeza de Dados - Preparação para Vinculação Fornecedor-Representante
 * 
 * Este script remove todos os dados existentes (produtos, clientes, categorias, pedidos, notificações)
 * mantendo apenas os usuários (fornecedores e representantes) para começar com uma base limpa
 * para a implementação do sistema de vinculações.
 */

import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

/**
 * Classe responsável pela limpeza segura dos dados
 */
export class LimpezaDados {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', `limpeza-${new Date().toISOString().split('T')[0]}.log`);
    this.backupDir = path.join(process.cwd(), 'backups', `backup-${Date.now()}`);
  }

  /**
   * Executa a limpeza completa dos dados
   */
  async executarLimpeza() {
    try {
      this.log('=== INICIANDO LIMPEZA DE DADOS ===');
      this.log(`Data/Hora: ${new Date().toISOString()}`);
      
      // Verificar se estamos em ambiente de desenvolvimento
      if (process.env.NODE_ENV === 'production') {
        throw new Error('ERRO: Limpeza não permitida em ambiente de produção!');
      }

      // Criar diretórios necessários
      await this.criarDiretorios();

      // Fazer backup antes da limpeza
      await this.criarBackup();

      // Executar limpeza em ordem específica (devido às foreign keys)
      await this.limparNotificacoes();
      await this.limparItensPedido();
      await this.limparPedidos();
      await this.limparProdutos();
      await this.limparCategorias();
      await this.limparClientes();
      
      // Resetar sequences/auto_increment
      await this.resetarSequences();

      this.log('=== LIMPEZA CONCLUÍDA COM SUCESSO ===');
      
      return {
        sucesso: true,
        mensagem: 'Limpeza executada com sucesso',
        backup: this.backupDir,
        log: this.logFile
      };

    } catch (error) {
      this.log(`ERRO: ${error.message}`);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }

  /**
   * Cria os diretórios necessários para logs e backups
   */
  async criarDiretorios() {
    const dirs = [
      path.dirname(this.logFile),
      this.backupDir
    ];

    for (const dir of dirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        this.log(`Diretório criado: ${dir}`);
      }
    }
  }

  /**
   * Cria backup dos dados antes da limpeza
   */
  async criarBackup() {
    this.log('Criando backup dos dados...');
    
    try {
      // Backup de notificações
      const notificacoes = await prisma.notificacao.findMany();
      await this.salvarBackup('notificacoes.json', notificacoes);
      this.log(`Backup: ${notificacoes.length} notificações`);

      // Backup de itens de pedido
      const itensPedido = await prisma.itemPedido.findMany();
      await this.salvarBackup('itens-pedido.json', itensPedido);
      this.log(`Backup: ${itensPedido.length} itens de pedido`);

      // Backup de pedidos
      const pedidos = await prisma.pedido.findMany();
      await this.salvarBackup('pedidos.json', pedidos);
      this.log(`Backup: ${pedidos.length} pedidos`);

      // Backup de produtos
      const produtos = await prisma.produto.findMany();
      await this.salvarBackup('produtos.json', produtos);
      this.log(`Backup: ${produtos.length} produtos`);

      // Backup de categorias
      const categorias = await prisma.categoria.findMany();
      await this.salvarBackup('categorias.json', categorias);
      this.log(`Backup: ${categorias.length} categorias`);

      // Backup de clientes
      const clientes = await prisma.cliente.findMany();
      await this.salvarBackup('clientes.json', clientes);
      this.log(`Backup: ${clientes.length} clientes`);

      this.log('Backup concluído com sucesso');

    } catch (error) {
      this.log(`Erro ao criar backup: ${error.message}`);
      throw new Error(`Falha no backup: ${error.message}`);
    }
  }

  /**
   * Salva dados de backup em arquivo JSON
   */
  async salvarBackup(nomeArquivo, dados) {
    const caminhoArquivo = path.join(this.backupDir, nomeArquivo);
    fs.writeFileSync(caminhoArquivo, JSON.stringify(dados, null, 2));
  }

  /**
   * Remove todas as notificações
   */
  async limparNotificacoes() {
    this.log('Removendo notificações...');
    
    try {
      const resultado = await prisma.notificacao.deleteMany({});
      this.log(`Removidas ${resultado.count} notificações`);
    } catch (error) {
      this.log(`Erro ao remover notificações: ${error.message}`);
      throw error;
    }
  }

  /**
   * Remove todos os itens de pedido
   */
  async limparItensPedido() {
    this.log('Removendo itens de pedido...');
    
    try {
      const resultado = await prisma.itemPedido.deleteMany({});
      this.log(`Removidos ${resultado.count} itens de pedido`);
    } catch (error) {
      this.log(`Erro ao remover itens de pedido: ${error.message}`);
      throw error;
    }
  }

  /**
   * Remove todos os pedidos
   */
  async limparPedidos() {
    this.log('Removendo pedidos...');
    
    try {
      const resultado = await prisma.pedido.deleteMany({});
      this.log(`Removidos ${resultado.count} pedidos`);
    } catch (error) {
      this.log(`Erro ao remover pedidos: ${error.message}`);
      throw error;
    }
  }

  /**
   * Remove todos os produtos
   */
  async limparProdutos() {
    this.log('Removendo produtos...');
    
    try {
      const resultado = await prisma.produto.deleteMany({});
      this.log(`Removidos ${resultado.count} produtos`);
    } catch (error) {
      this.log(`Erro ao remover produtos: ${error.message}`);
      throw error;
    }
  }

  /**
   * Remove todas as categorias
   */
  async limparCategorias() {
    this.log('Removendo categorias...');
    
    try {
      const resultado = await prisma.categoria.deleteMany({});
      this.log(`Removidas ${resultado.count} categorias`);
    } catch (error) {
      this.log(`Erro ao remover categorias: ${error.message}`);
      throw error;
    }
  }

  /**
   * Remove todos os clientes
   */
  async limparClientes() {
    this.log('Removendo clientes...');
    
    try {
      const resultado = await prisma.cliente.deleteMany({});
      this.log(`Removidos ${resultado.count} clientes`);
    } catch (error) {
      this.log(`Erro ao remover clientes: ${error.message}`);
      throw error;
    }
  }

  /**
   * Reseta as sequences/auto_increment das tabelas
   */
  async resetarSequences() {
    this.log('Resetando sequences das tabelas...');
    
    try {
      // Para PostgreSQL
      if (process.env.DATABASE_URL?.includes('postgresql')) {
        await prisma.$executeRaw`ALTER SEQUENCE "Notificacao_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "Pedido_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "ItemPedido_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "Produto_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "Categoria_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "Cliente_id_seq" RESTART WITH 1`;
      }
      // Para MySQL
      else if (process.env.DATABASE_URL?.includes('mysql')) {
        await prisma.$executeRaw`ALTER TABLE Notificacao AUTO_INCREMENT = 1`;
        await prisma.$executeRaw`ALTER TABLE Pedido AUTO_INCREMENT = 1`;
        await prisma.$executeRaw`ALTER TABLE ItemPedido AUTO_INCREMENT = 1`;
        await prisma.$executeRaw`ALTER TABLE Produto AUTO_INCREMENT = 1`;
        await prisma.$executeRaw`ALTER TABLE Categoria AUTO_INCREMENT = 1`;
        await prisma.$executeRaw`ALTER TABLE Cliente AUTO_INCREMENT = 1`;
      }
      
      this.log('Sequences resetadas com sucesso');
    } catch (error) {
      this.log(`Aviso: Não foi possível resetar sequences: ${error.message}`);
      // Não falha a operação, apenas registra o aviso
    }
  }

  /**
   * Registra mensagem no log
   */
  log(mensagem) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${mensagem}`;
    
    console.log(logMessage);
    
    // Salvar no arquivo de log
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Erro ao escrever no log:', error.message);
    }
  }

  /**
   * Verifica se existem dados para limpar
   */
  async verificarDados() {
    try {
      const contadores = {
        notificacoes: await prisma.notificacao.count(),
        pedidos: await prisma.pedido.count(),
        itensPedido: await prisma.itemPedido.count(),
        produtos: await prisma.produto.count(),
        categorias: await prisma.categoria.count(),
        clientes: await prisma.cliente.count(),
        usuarios: await prisma.usuario.count()
      };

      return contadores;
    } catch (error) {
      throw new Error(`Erro ao verificar dados: ${error.message}`);
    }
  }

  /**
   * Restaura dados do backup (em caso de necessidade)
   */
  async restaurarBackup(caminhoBackup) {
    this.log(`Iniciando restauração do backup: ${caminhoBackup}`);
    
    try {
      // Implementar lógica de restauração se necessário
      // Por enquanto, apenas registra a tentativa
      this.log('Funcionalidade de restauração não implementada ainda');
      
      return {
        sucesso: false,
        mensagem: 'Restauração não implementada'
      };
    } catch (error) {
      this.log(`Erro na restauração: ${error.message}`);
      throw error;
    }
  }
}

/**
 * Função utilitária para executar limpeza
 */
export async function executarLimpezaDados() {
  const limpeza = new LimpezaDados();
  return await limpeza.executarLimpeza();
}

/**
 * Função utilitária para verificar dados
 */
export async function verificarDadosExistentes() {
  const limpeza = new LimpezaDados();
  return await limpeza.verificarDados();
}

// Exportar classe principal
export default LimpezaDados;