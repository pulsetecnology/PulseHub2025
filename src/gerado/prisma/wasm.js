
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  email: 'email',
  senha: 'senha',
  papel: 'papel',
  ativo: 'ativo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FornecedorScalarFieldEnum = {
  id: 'id',
  usuarioId: 'usuarioId',
  razaoSocial: 'razaoSocial',
  nomeFantasia: 'nomeFantasia',
  cnpj: 'cnpj',
  inscricaoEstadual: 'inscricaoEstadual',
  telefone: 'telefone',
  segmento: 'segmento',
  endereco: 'endereco',
  configuracoes: 'configuracoes',
  ativo: 'ativo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProdutoScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  descricao: 'descricao',
  precoBase: 'precoBase',
  fornecedorId: 'fornecedorId',
  categoria: 'categoria',
  ativo: 'ativo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RepresentanteScalarFieldEnum = {
  id: 'id',
  usuarioId: 'usuarioId',
  cpf: 'cpf',
  telefone: 'telefone',
  regiao: 'regiao',
  especialidades: 'especialidades',
  endereco: 'endereco',
  configuracoes: 'configuracoes',
  avaliacaoMedia: 'avaliacaoMedia',
  ativo: 'ativo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VarianteProdutoScalarFieldEnum = {
  id: 'id',
  sku: 'sku',
  preco: 'preco',
  estoque: 'estoque',
  atributos: 'atributos',
  productId: 'productId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VinculacaoScalarFieldEnum = {
  id: 'id',
  fornecedorId: 'fornecedorId',
  representanteId: 'representanteId',
  status: 'status',
  comissaoPercent: 'comissaoPercent',
  precoEspecial: 'precoEspecial',
  acessoRelatorios: 'acessoRelatorios',
  configuracoes: 'configuracoes',
  dataVinculacao: 'dataVinculacao',
  dataInativacao: 'dataInativacao',
  motivoInativacao: 'motivoInativacao',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PedidoScalarFieldEnum = {
  id: 'id',
  clienteId: 'clienteId',
  representanteId: 'representanteId',
  dataPedido: 'dataPedido',
  status: 'status',
  valorTotal: 'valorTotal',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ConviteScalarFieldEnum = {
  id: 'id',
  remetenteId: 'remetenteId',
  destinatarioId: 'destinatarioId',
  tipoRemetente: 'tipoRemetente',
  fornecedorId: 'fornecedorId',
  representanteId: 'representanteId',
  status: 'status',
  mensagem: 'mensagem',
  comissaoPercent: 'comissaoPercent',
  configuracoes: 'configuracoes',
  dataEnvio: 'dataEnvio',
  dataResposta: 'dataResposta',
  motivoRecusa: 'motivoRecusa',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ItemPedidoScalarFieldEnum = {
  id: 'id',
  produtoId: 'produtoId',
  varianteId: 'varianteId',
  quantidade: 'quantidade',
  precoUnitario: 'precoUnitario',
  desconto: 'desconto',
  valorTotal: 'valorTotal',
  observacoes: 'observacoes',
  pedidoId: 'pedidoId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ComissaoScalarFieldEnum = {
  id: 'id',
  vinculacaoId: 'vinculacaoId',
  representanteId: 'representanteId',
  pedidoId: 'pedidoId',
  percentual: 'percentual',
  valorCalculado: 'valorCalculado',
  status: 'status',
  dataEfetivacao: 'dataEfetivacao',
  dataPagamento: 'dataPagamento',
  observacoes: 'observacoes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClienteScalarFieldEnum = {
  id: 'id',
  razaoSocial: 'razaoSocial',
  nomeFantasia: 'nomeFantasia',
  cnpj: 'cnpj',
  inscricaoEstadual: 'inscricaoEstadual',
  telefoneComercial: 'telefoneComercial',
  emailComercial: 'emailComercial',
  cep: 'cep',
  rua: 'rua',
  numero: 'numero',
  complemento: 'complemento',
  bairro: 'bairro',
  cidade: 'cidade',
  estado: 'estado',
  nomeContato: 'nomeContato',
  emailContato: 'emailContato',
  telefoneContato: 'telefoneContato',
  limiteCredito: 'limiteCredito',
  condicoesPagamento: 'condicoesPagamento',
  representanteId: 'representanteId',
  ativo: 'ativo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NotificacaoScalarFieldEnum = {
  id: 'id',
  destinatarioId: 'destinatarioId',
  titulo: 'titulo',
  mensagem: 'mensagem',
  tipo: 'tipo',
  prioridade: 'prioridade',
  dataEnvio: 'dataEnvio',
  lida: 'lida',
  dataLeitura: 'dataLeitura',
  metadados: 'metadados',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.PapelUsuario = exports.$Enums.PapelUsuario = {
  ADMINISTRADOR: 'ADMINISTRADOR',
  FORNECEDOR: 'FORNECEDOR',
  REPRESENTANTE: 'REPRESENTANTE',
  CLIENTE: 'CLIENTE'
};

exports.StatusVinculacao = exports.$Enums.StatusVinculacao = {
  ATIVO: 'ATIVO',
  INATIVO: 'INATIVO',
  SUSPENSO: 'SUSPENSO',
  PENDENTE: 'PENDENTE'
};

exports.StatusPedido = exports.$Enums.StatusPedido = {
  EM_ABERTO: 'EM_ABERTO',
  EM_ANALISE: 'EM_ANALISE',
  APROVADO: 'APROVADO',
  RECUSADO: 'RECUSADO',
  CANCELADO: 'CANCELADO'
};

exports.TipoConvite = exports.$Enums.TipoConvite = {
  FORNECEDOR: 'FORNECEDOR',
  REPRESENTANTE: 'REPRESENTANTE'
};

exports.StatusConvite = exports.$Enums.StatusConvite = {
  PENDENTE: 'PENDENTE',
  ACEITO: 'ACEITO',
  RECUSADO: 'RECUSADO',
  EXPIRADO: 'EXPIRADO'
};

exports.StatusComissao = exports.$Enums.StatusComissao = {
  PENDENTE: 'PENDENTE',
  APROVADA: 'APROVADA',
  PAGA: 'PAGA',
  CANCELADA: 'CANCELADA'
};

exports.TipoNotificacao = exports.$Enums.TipoNotificacao = {
  CONVITE_VINCULACAO: 'CONVITE_VINCULACAO',
  VINCULACAO_ACEITA: 'VINCULACAO_ACEITA',
  VINCULACAO_RECUSADA: 'VINCULACAO_RECUSADA',
  NOVO_PEDIDO: 'NOVO_PEDIDO',
  COMISSAO_DISPONIVEL: 'COMISSAO_DISPONIVEL',
  SISTEMA: 'SISTEMA',
  PROMOCAO: 'PROMOCAO'
};

exports.PrioridadeNotificacao = exports.$Enums.PrioridadeNotificacao = {
  BAIXA: 'BAIXA',
  NORMAL: 'NORMAL',
  ALTA: 'ALTA',
  URGENTE: 'URGENTE'
};

exports.Prisma.ModelName = {
  Usuario: 'Usuario',
  Fornecedor: 'Fornecedor',
  Produto: 'Produto',
  Representante: 'Representante',
  VarianteProduto: 'VarianteProduto',
  Vinculacao: 'Vinculacao',
  Pedido: 'Pedido',
  Convite: 'Convite',
  ItemPedido: 'ItemPedido',
  Comissao: 'Comissao',
  Cliente: 'Cliente',
  Notificacao: 'Notificacao'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
