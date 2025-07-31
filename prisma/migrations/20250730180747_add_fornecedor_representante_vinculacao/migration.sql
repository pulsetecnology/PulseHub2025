-- CreateEnum
CREATE TYPE "PapelUsuario" AS ENUM ('ADMINISTRADOR', 'FORNECEDOR', 'REPRESENTANTE', 'CLIENTE');

-- CreateEnum
CREATE TYPE "StatusVinculacao" AS ENUM ('ATIVO', 'INATIVO', 'SUSPENSO', 'PENDENTE');

-- CreateEnum
CREATE TYPE "StatusPedido" AS ENUM ('EM_ABERTO', 'EM_ANALISE', 'APROVADO', 'RECUSADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "TipoConvite" AS ENUM ('FORNECEDOR', 'REPRESENTANTE');

-- CreateEnum
CREATE TYPE "StatusConvite" AS ENUM ('PENDENTE', 'ACEITO', 'RECUSADO', 'EXPIRADO');

-- CreateEnum
CREATE TYPE "StatusComissao" AS ENUM ('PENDENTE', 'APROVADA', 'PAGA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "TipoNotificacao" AS ENUM ('CONVITE_VINCULACAO', 'VINCULACAO_ACEITA', 'VINCULACAO_RECUSADA', 'NOVO_PEDIDO', 'COMISSAO_DISPONIVEL', 'SISTEMA', 'PROMOCAO');

-- CreateEnum
CREATE TYPE "PrioridadeNotificacao" AS ENUM ('BAIXA', 'NORMAL', 'ALTA', 'URGENTE');

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "papel" "PapelUsuario" NOT NULL DEFAULT 'CLIENTE',
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fornecedores" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "nomeFantasia" TEXT,
    "cnpj" TEXT NOT NULL,
    "inscricaoEstadual" TEXT,
    "telefone" TEXT,
    "segmento" TEXT NOT NULL,
    "endereco" JSONB,
    "configuracoes" JSONB,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fornecedores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "precoBase" DOUBLE PRECISION NOT NULL,
    "fornecedorId" TEXT,
    "categoria" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "representantes" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "cpf" TEXT,
    "telefone" TEXT,
    "regiao" TEXT NOT NULL,
    "especialidades" TEXT[],
    "endereco" JSONB,
    "configuracoes" JSONB,
    "avaliacaoMedia" DOUBLE PRECISION DEFAULT 0.0,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "representantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variantes_produto" (
    "id" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "estoque" INTEGER NOT NULL,
    "atributos" JSONB NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "variantes_produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vinculacoes" (
    "id" TEXT NOT NULL,
    "fornecedorId" TEXT NOT NULL,
    "representanteId" TEXT NOT NULL,
    "status" "StatusVinculacao" NOT NULL DEFAULT 'ATIVO',
    "comissaoPercent" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "precoEspecial" BOOLEAN NOT NULL DEFAULT false,
    "acessoRelatorios" BOOLEAN NOT NULL DEFAULT true,
    "configuracoes" JSONB,
    "dataVinculacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataInativacao" TIMESTAMP(3),
    "motivoInativacao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vinculacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidos" (
    "id" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "representanteId" TEXT,
    "dataPedido" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "StatusPedido" NOT NULL DEFAULT 'EM_ABERTO',
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "convites" (
    "id" TEXT NOT NULL,
    "remetenteId" TEXT NOT NULL,
    "destinatarioId" TEXT NOT NULL,
    "tipoRemetente" "TipoConvite" NOT NULL,
    "fornecedorId" TEXT,
    "representanteId" TEXT,
    "status" "StatusConvite" NOT NULL DEFAULT 'PENDENTE',
    "mensagem" TEXT,
    "comissaoPercent" DOUBLE PRECISION DEFAULT 5.0,
    "configuracoes" JSONB,
    "dataEnvio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataResposta" TIMESTAMP(3),
    "motivoRecusa" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "convites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itens_pedido" (
    "id" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,
    "varianteId" TEXT,
    "quantidade" INTEGER NOT NULL,
    "precoUnitario" DOUBLE PRECISION NOT NULL,
    "desconto" DOUBLE PRECISION DEFAULT 0.0,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "observacoes" TEXT,
    "pedidoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "itens_pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comissoes" (
    "id" TEXT NOT NULL,
    "vinculacaoId" TEXT NOT NULL,
    "representanteId" TEXT NOT NULL,
    "pedidoId" TEXT NOT NULL,
    "percentual" DOUBLE PRECISION NOT NULL,
    "valorCalculado" DOUBLE PRECISION NOT NULL,
    "status" "StatusComissao" NOT NULL DEFAULT 'PENDENTE',
    "dataEfetivacao" TIMESTAMP(3),
    "dataPagamento" TIMESTAMP(3),
    "observacoes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comissoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "nomeFantasia" TEXT,
    "cnpj" TEXT NOT NULL,
    "inscricaoEstadual" TEXT,
    "telefoneComercial" TEXT,
    "emailComercial" TEXT NOT NULL,
    "cep" TEXT,
    "rua" TEXT,
    "numero" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "nomeContato" TEXT,
    "emailContato" TEXT,
    "telefoneContato" TEXT,
    "limiteCredito" DOUBLE PRECISION DEFAULT 0.00,
    "condicoesPagamento" TEXT,
    "representanteId" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificacoes" (
    "id" TEXT NOT NULL,
    "destinatarioId" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "tipo" "TipoNotificacao" NOT NULL,
    "prioridade" "PrioridadeNotificacao" NOT NULL DEFAULT 'NORMAL',
    "dataEnvio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lida" BOOLEAN NOT NULL DEFAULT false,
    "dataLeitura" TIMESTAMP(3),
    "metadados" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notificacoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "fornecedores_usuarioId_key" ON "fornecedores"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "fornecedores_cnpj_key" ON "fornecedores"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "representantes_usuarioId_key" ON "representantes"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "representantes_cpf_key" ON "representantes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "variantes_produto_sku_key" ON "variantes_produto"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "vinculacoes_fornecedorId_representanteId_key" ON "vinculacoes"("fornecedorId", "representanteId");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cnpj_key" ON "clientes"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_emailComercial_key" ON "clientes"("emailComercial");

-- AddForeignKey
ALTER TABLE "fornecedores" ADD CONSTRAINT "fornecedores_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "fornecedores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "representantes" ADD CONSTRAINT "representantes_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variantes_produto" ADD CONSTRAINT "variantes_produto_productId_fkey" FOREIGN KEY ("productId") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vinculacoes" ADD CONSTRAINT "vinculacoes_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "fornecedores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vinculacoes" ADD CONSTRAINT "vinculacoes_representanteId_fkey" FOREIGN KEY ("representanteId") REFERENCES "representantes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_representanteId_fkey" FOREIGN KEY ("representanteId") REFERENCES "representantes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "convites" ADD CONSTRAINT "convites_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "fornecedores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "convites" ADD CONSTRAINT "convites_representanteId_fkey" FOREIGN KEY ("representanteId") REFERENCES "representantes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itens_pedido" ADD CONSTRAINT "itens_pedido_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itens_pedido" ADD CONSTRAINT "itens_pedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comissoes" ADD CONSTRAINT "comissoes_vinculacaoId_fkey" FOREIGN KEY ("vinculacaoId") REFERENCES "vinculacoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comissoes" ADD CONSTRAINT "comissoes_representanteId_fkey" FOREIGN KEY ("representanteId") REFERENCES "representantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comissoes" ADD CONSTRAINT "comissoes_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificacoes" ADD CONSTRAINT "notificacoes_destinatarioId_fkey" FOREIGN KEY ("destinatarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
