# Estrutura do Banco de Dados - PulseHub

Este documento descreve a estrutura completa do banco de dados do PulseHub, incluindo os novos modelos para o sistema de vinculação entre fornecedores e representantes.

## Visão Geral

O banco de dados foi estruturado para suportar um sistema completo de gestão de vendas com foco na relação entre fornecedores, representantes, produtos, pedidos e comissões.

## Modelos Principais

### 1. Usuario

Tabela central que armazena todos os usuários do sistema.

```prisma
model Usuario {
  id            String         @id @default(uuid())
  nome          String
  email         String         @unique
  senha         String
  papel         PapelUsuario   @default(CLIENTE)
  ativo         Boolean        @default(true)
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt
  
  // Relacionamentos
  fornecedor    Fornecedor?
  representante Representante?
  notificacoes  Notificacao[]  @relation("NotificacoesUsuario")
}
```

**Campos:**
- `papel`: Define o tipo de usuário (ADMINISTRADOR, FORNECEDOR, REPRESENTANTE, CLIENTE)
- `ativo`: Controla se o usuário está ativo no sistema

**Relacionamentos:**
- Um usuário pode ter um perfil de fornecedor (1:1)
- Um usuário pode ter um perfil de representante (1:1)
- Um usuário pode receber múltiplas notificações (1:N)

### 2. Fornecedor

Perfil específico para usuários fornecedores.

```prisma
model Fornecedor {
  id                String        @id @default(uuid())
  usuarioId         String        @unique
  razaoSocial       String
  nomeFantasia      String?
  cnpj              String        @unique
  inscricaoEstadual String?
  telefone          String?
  segmento          String
  endereco          Json?         // {cep, rua, numero, complemento, bairro, cidade, estado}
  configuracoes     Json?         // Configurações específicas do fornecedor
  ativo             Boolean       @default(true)
  
  // Relacionamentos
  produtos          Produto[]     @relation("FornecedorProdutos")
  vinculacoes       Vinculacao[]  @relation("FornecedorVinculacoes")
  convitesEnviados  Convite[]     @relation("ConvitesFornecedor")
}
```

**Características:**
- Dados empresariais completos (CNPJ, Inscrição Estadual)
- Segmento de atuação
- Endereço em formato JSON para flexibilidade
- Configurações personalizáveis em JSON

### 3. Representante

Perfil específico para usuários representantes.

```prisma
model Representante {
  id                String        @id @default(uuid())
  usuarioId         String        @unique
  cpf               String?       @unique
  telefone          String?
  regiao            String
  especialidades    String[]      // Array de especialidades/segmentos
  endereco          Json?
  configuracoes     Json?
  avaliacaoMedia    Float?        @default(0.0)
  ativo             Boolean       @default(true)
  
  // Relacionamentos
  vinculacoes       Vinculacao[]  @relation("RepresentanteVinculacoes")
  comissoes         Comissao[]    @relation("RepresentanteComissoes")
  pedidos           Pedido[]      @relation("RepresentantePedidos")
  convitesEnviados  Convite[]     @relation("ConvitesRepresentante")
}
```

**Características:**
- Dados pessoais (CPF)
- Região de atuação
- Especialidades em array para múltiplos segmentos
- Sistema de avaliação

### 4. Vinculacao

Modelo central que conecta fornecedores e representantes.

```prisma
model Vinculacao {
  id                String            @id @default(uuid())
  fornecedorId      String
  representanteId   String
  status            StatusVinculacao  @default(ATIVO)
  comissaoPercent   Float             @default(5.0)
  precoEspecial     Boolean           @default(false)
  acessoRelatorios  Boolean           @default(true)
  configuracoes     Json?
  dataVinculacao    DateTime          @default(now())
  dataInativacao    DateTime?
  motivoInativacao  String?
  
  // Relacionamentos
  comissoes         Comissao[]        @relation("VinculacaoComissoes")
  
  @@unique([fornecedorId, representanteId])
}
```

**Características:**
- Relacionamento único entre fornecedor e representante
- Configurações específicas da parceria
- Controle de status e histórico
- Base para cálculo de comissões

### 5. Convite

Sistema de convites para estabelecer vinculações.

```prisma
model Convite {
  id                String        @id @default(uuid())
  remetenteId       String
  destinatarioId    String
  tipoRemetente     TipoConvite   // FORNECEDOR ou REPRESENTANTE
  fornecedorId      String?
  representanteId   String?
  status            StatusConvite @default(PENDENTE)
  mensagem          String?
  comissaoPercent   Float?        @default(5.0)
  configuracoes     Json?
  dataEnvio         DateTime      @default(now())
  dataResposta      DateTime?
  motivoRecusa      String?
}
```

**Características:**
- Sistema bidirecional (fornecedor pode convidar representante e vice-versa)
- Propostas de configuração da vinculação
- Histórico completo do processo

### 6. Produto

Catálogo de produtos dos fornecedores.

```prisma
model Produto {
  id            String         @id @default(uuid())
  nome          String
  descricao     String
  precoBase     Float
  fornecedorId  String?
  categoria     String?
  ativo         Boolean        @default(true)
  
  // Relacionamentos
  fornecedor    Fornecedor?    @relation("FornecedorProdutos")
  variantes     VarianteProduto[]
  itens         ItemPedido[]   @relation("ProdutoItens")
}
```

### 7. VarianteProduto

Variações de produtos (cores, tamanhos, etc.).

```prisma
model VarianteProduto {
  id        String   @id @default(uuid())
  sku       String   @unique
  preco     Float
  estoque   Int
  atributos Json     // Flexibilidade para diferentes tipos de atributos
  productId String
}
```

### 8. Pedido

Pedidos de vendas.

```prisma
model Pedido {
  id              String       @id @default(uuid())
  clienteId       String
  representanteId String?
  dataPedido      DateTime     @default(now())
  status          StatusPedido @default(EM_ABERTO)
  valorTotal      Float
  
  // Relacionamentos
  cliente         Cliente      @relation("ClientePedidos")
  representante   Representante? @relation("RepresentantePedidos")
  itens           ItemPedido[]
  comissoes       Comissao[]     @relation("PedidoComissoes")
}
```

### 9. ItemPedido

Itens individuais dos pedidos.

```prisma
model ItemPedido {
  id            String   @id @default(uuid())
  produtoId     String
  varianteId    String?
  quantidade    Int
  precoUnitario Float
  desconto      Float?   @default(0.0)
  valorTotal    Float
  observacoes   String?
  pedidoId      String
}
```

### 10. Comissao

Sistema de comissões para representantes.

```prisma
model Comissao {
  id              String        @id @default(uuid())
  vinculacaoId    String
  representanteId String
  pedidoId        String
  percentual      Float
  valorCalculado  Float
  status          StatusComissao @default(PENDENTE)
  dataEfetivacao  DateTime?
  dataPagamento   DateTime?
  observacoes     String?
}
```

**Características:**
- Vinculada à relação fornecedor-representante
- Controle de status e pagamento
- Histórico completo

### 11. Cliente

Cadastro de clientes.

```prisma
model Cliente {
  id                   String   @id @default(uuid())
  razaoSocial          String
  nomeFantasia         String?
  cnpj                 String   @unique
  // ... outros campos de endereço e contato
  representanteId      String?  // Cliente pode ter representante preferencial
  ativo                Boolean  @default(true)
  
  // Relacionamentos
  pedidos              Pedido[] @relation("ClientePedidos")
}
```

### 12. Notificacao

Sistema de notificações.

```prisma
model Notificacao {
  id             String         @id @default(uuid())
  destinatarioId String
  titulo         String
  mensagem       String
  tipo           TipoNotificacao
  prioridade     PrioridadeNotificacao @default(NORMAL)
  dataEnvio      DateTime       @default(now())
  lida           Boolean        @default(false)
  dataLeitura    DateTime?
  metadados      Json?          // Dados específicos do tipo de notificação
}
```

## Enums

### PapelUsuario
```prisma
enum PapelUsuario {
  ADMINISTRADOR
  FORNECEDOR
  REPRESENTANTE
  CLIENTE
}
```

### StatusVinculacao
```prisma
enum StatusVinculacao {
  ATIVO
  INATIVO
  SUSPENSO
  PENDENTE
}
```

### StatusConvite
```prisma
enum StatusConvite {
  PENDENTE
  ACEITO
  RECUSADO
  EXPIRADO
}
```

### StatusPedido
```prisma
enum StatusPedido {
  EM_ABERTO
  EM_ANALISE
  APROVADO
  RECUSADO
  CANCELADO
}
```

### StatusComissao
```prisma
enum StatusComissao {
  PENDENTE
  APROVADA
  PAGA
  CANCELADA
}
```

### TipoNotificacao
```prisma
enum TipoNotificacao {
  CONVITE_VINCULACAO
  VINCULACAO_ACEITA
  VINCULACAO_RECUSADA
  NOVO_PEDIDO
  COMISSAO_DISPONIVEL
  SISTEMA
  PROMOCAO
}
```

## Relacionamentos Principais

### Fluxo de Vinculação
1. **Convite**: Fornecedor ou Representante envia convite
2. **Aceitação**: Destinatário aceita o convite
3. **Vinculação**: Sistema cria vinculação ativa
4. **Operação**: Pedidos podem ser associados à vinculação
5. **Comissão**: Sistema calcula comissões baseadas na vinculação

### Fluxo de Vendas
1. **Produto**: Fornecedor cadastra produtos
2. **Pedido**: Cliente faz pedido (com ou sem representante)
3. **Comissão**: Se há representante vinculado, comissão é calculada
4. **Notificação**: Partes interessadas são notificadas

## Índices e Constraints

- **Únicos**: Email de usuário, CNPJ de fornecedor, CPF de representante
- **Compostos**: Vinculação única por fornecedor-representante
- **Cascata**: Exclusão de usuário remove perfis relacionados
- **Referencial**: Todos os relacionamentos mantêm integridade

## Considerações de Performance

- Campos JSON para flexibilidade sem impacto na estrutura
- Índices em campos de busca frequente
- Relacionamentos otimizados para consultas comuns
- Soft delete através do campo `ativo`

## Migração

Para aplicar esta estrutura:

1. Execute a migração Prisma:
   ```bash
   npx prisma migrate dev --name add_fornecedor_representante_vinculacao
   ```

2. Execute o seed para dados de exemplo:
   ```bash
   npx prisma db seed
   ```

3. Gere o cliente Prisma:
   ```bash
   npx prisma generate
   ```

Esta estrutura fornece uma base sólida e escalável para o sistema PulseHub, permitindo crescimento futuro e manutenção eficiente.