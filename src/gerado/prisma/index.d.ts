
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Fornecedor
 * 
 */
export type Fornecedor = $Result.DefaultSelection<Prisma.$FornecedorPayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Representante
 * 
 */
export type Representante = $Result.DefaultSelection<Prisma.$RepresentantePayload>
/**
 * Model VarianteProduto
 * 
 */
export type VarianteProduto = $Result.DefaultSelection<Prisma.$VarianteProdutoPayload>
/**
 * Model Vinculacao
 * 
 */
export type Vinculacao = $Result.DefaultSelection<Prisma.$VinculacaoPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model Convite
 * 
 */
export type Convite = $Result.DefaultSelection<Prisma.$ConvitePayload>
/**
 * Model ItemPedido
 * 
 */
export type ItemPedido = $Result.DefaultSelection<Prisma.$ItemPedidoPayload>
/**
 * Model Comissao
 * 
 */
export type Comissao = $Result.DefaultSelection<Prisma.$ComissaoPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PapelUsuario: {
  ADMINISTRADOR: 'ADMINISTRADOR',
  FORNECEDOR: 'FORNECEDOR',
  REPRESENTANTE: 'REPRESENTANTE',
  CLIENTE: 'CLIENTE'
};

export type PapelUsuario = (typeof PapelUsuario)[keyof typeof PapelUsuario]


export const StatusVinculacao: {
  ATIVO: 'ATIVO',
  INATIVO: 'INATIVO',
  SUSPENSO: 'SUSPENSO',
  PENDENTE: 'PENDENTE'
};

export type StatusVinculacao = (typeof StatusVinculacao)[keyof typeof StatusVinculacao]


export const StatusPedido: {
  EM_ABERTO: 'EM_ABERTO',
  EM_ANALISE: 'EM_ANALISE',
  APROVADO: 'APROVADO',
  RECUSADO: 'RECUSADO',
  CANCELADO: 'CANCELADO'
};

export type StatusPedido = (typeof StatusPedido)[keyof typeof StatusPedido]


export const TipoConvite: {
  FORNECEDOR: 'FORNECEDOR',
  REPRESENTANTE: 'REPRESENTANTE'
};

export type TipoConvite = (typeof TipoConvite)[keyof typeof TipoConvite]


export const StatusConvite: {
  PENDENTE: 'PENDENTE',
  ACEITO: 'ACEITO',
  RECUSADO: 'RECUSADO',
  EXPIRADO: 'EXPIRADO'
};

export type StatusConvite = (typeof StatusConvite)[keyof typeof StatusConvite]


export const StatusComissao: {
  PENDENTE: 'PENDENTE',
  APROVADA: 'APROVADA',
  PAGA: 'PAGA',
  CANCELADA: 'CANCELADA'
};

export type StatusComissao = (typeof StatusComissao)[keyof typeof StatusComissao]


export const TipoNotificacao: {
  CONVITE_VINCULACAO: 'CONVITE_VINCULACAO',
  VINCULACAO_ACEITA: 'VINCULACAO_ACEITA',
  VINCULACAO_RECUSADA: 'VINCULACAO_RECUSADA',
  NOVO_PEDIDO: 'NOVO_PEDIDO',
  COMISSAO_DISPONIVEL: 'COMISSAO_DISPONIVEL',
  SISTEMA: 'SISTEMA',
  PROMOCAO: 'PROMOCAO'
};

export type TipoNotificacao = (typeof TipoNotificacao)[keyof typeof TipoNotificacao]


export const PrioridadeNotificacao: {
  BAIXA: 'BAIXA',
  NORMAL: 'NORMAL',
  ALTA: 'ALTA',
  URGENTE: 'URGENTE'
};

export type PrioridadeNotificacao = (typeof PrioridadeNotificacao)[keyof typeof PrioridadeNotificacao]

}

export type PapelUsuario = $Enums.PapelUsuario

export const PapelUsuario: typeof $Enums.PapelUsuario

export type StatusVinculacao = $Enums.StatusVinculacao

export const StatusVinculacao: typeof $Enums.StatusVinculacao

export type StatusPedido = $Enums.StatusPedido

export const StatusPedido: typeof $Enums.StatusPedido

export type TipoConvite = $Enums.TipoConvite

export const TipoConvite: typeof $Enums.TipoConvite

export type StatusConvite = $Enums.StatusConvite

export const StatusConvite: typeof $Enums.StatusConvite

export type StatusComissao = $Enums.StatusComissao

export const StatusComissao: typeof $Enums.StatusComissao

export type TipoNotificacao = $Enums.TipoNotificacao

export const TipoNotificacao: typeof $Enums.TipoNotificacao

export type PrioridadeNotificacao = $Enums.PrioridadeNotificacao

export const PrioridadeNotificacao: typeof $Enums.PrioridadeNotificacao

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.fornecedor`: Exposes CRUD operations for the **Fornecedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fornecedors
    * const fornecedors = await prisma.fornecedor.findMany()
    * ```
    */
  get fornecedor(): Prisma.FornecedorDelegate<ExtArgs>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs>;

  /**
   * `prisma.representante`: Exposes CRUD operations for the **Representante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Representantes
    * const representantes = await prisma.representante.findMany()
    * ```
    */
  get representante(): Prisma.RepresentanteDelegate<ExtArgs>;

  /**
   * `prisma.varianteProduto`: Exposes CRUD operations for the **VarianteProduto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VarianteProdutos
    * const varianteProdutos = await prisma.varianteProduto.findMany()
    * ```
    */
  get varianteProduto(): Prisma.VarianteProdutoDelegate<ExtArgs>;

  /**
   * `prisma.vinculacao`: Exposes CRUD operations for the **Vinculacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vinculacaos
    * const vinculacaos = await prisma.vinculacao.findMany()
    * ```
    */
  get vinculacao(): Prisma.VinculacaoDelegate<ExtArgs>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs>;

  /**
   * `prisma.convite`: Exposes CRUD operations for the **Convite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Convites
    * const convites = await prisma.convite.findMany()
    * ```
    */
  get convite(): Prisma.ConviteDelegate<ExtArgs>;

  /**
   * `prisma.itemPedido`: Exposes CRUD operations for the **ItemPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemPedidos
    * const itemPedidos = await prisma.itemPedido.findMany()
    * ```
    */
  get itemPedido(): Prisma.ItemPedidoDelegate<ExtArgs>;

  /**
   * `prisma.comissao`: Exposes CRUD operations for the **Comissao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comissaos
    * const comissaos = await prisma.comissao.findMany()
    * ```
    */
  get comissao(): Prisma.ComissaoDelegate<ExtArgs>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuario" | "fornecedor" | "produto" | "representante" | "varianteProduto" | "vinculacao" | "pedido" | "convite" | "itemPedido" | "comissao" | "cliente" | "notificacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Fornecedor: {
        payload: Prisma.$FornecedorPayload<ExtArgs>
        fields: Prisma.FornecedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FornecedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FornecedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          findFirst: {
            args: Prisma.FornecedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FornecedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          findMany: {
            args: Prisma.FornecedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>[]
          }
          create: {
            args: Prisma.FornecedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          createMany: {
            args: Prisma.FornecedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FornecedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>[]
          }
          delete: {
            args: Prisma.FornecedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          update: {
            args: Prisma.FornecedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          deleteMany: {
            args: Prisma.FornecedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FornecedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FornecedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          aggregate: {
            args: Prisma.FornecedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFornecedor>
          }
          groupBy: {
            args: Prisma.FornecedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FornecedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FornecedorCountArgs<ExtArgs>
            result: $Utils.Optional<FornecedorCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Representante: {
        payload: Prisma.$RepresentantePayload<ExtArgs>
        fields: Prisma.RepresentanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepresentanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepresentanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>
          }
          findFirst: {
            args: Prisma.RepresentanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepresentanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>
          }
          findMany: {
            args: Prisma.RepresentanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>[]
          }
          create: {
            args: Prisma.RepresentanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>
          }
          createMany: {
            args: Prisma.RepresentanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepresentanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>[]
          }
          delete: {
            args: Prisma.RepresentanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>
          }
          update: {
            args: Prisma.RepresentanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>
          }
          deleteMany: {
            args: Prisma.RepresentanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepresentanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RepresentanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>
          }
          aggregate: {
            args: Prisma.RepresentanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepresentante>
          }
          groupBy: {
            args: Prisma.RepresentanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepresentanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepresentanteCountArgs<ExtArgs>
            result: $Utils.Optional<RepresentanteCountAggregateOutputType> | number
          }
        }
      }
      VarianteProduto: {
        payload: Prisma.$VarianteProdutoPayload<ExtArgs>
        fields: Prisma.VarianteProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VarianteProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VarianteProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VarianteProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VarianteProdutoPayload>
          }
          findFirst: {
            args: Prisma.VarianteProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VarianteProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VarianteProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VarianteProdutoPayload>
          }
          findMany: {
            args: Prisma.VarianteProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VarianteProdutoPayload>[]
          }
          create: {
            args: Prisma.VarianteProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VarianteProdutoPayload>
          }
          createMany: {
            args: Prisma.VarianteProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VarianteProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VarianteProdutoPayload>[]
          }
          delete: {
            args: Prisma.VarianteProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VarianteProdutoPayload>
          }
          update: {
            args: Prisma.VarianteProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VarianteProdutoPayload>
          }
          deleteMany: {
            args: Prisma.VarianteProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VarianteProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VarianteProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VarianteProdutoPayload>
          }
          aggregate: {
            args: Prisma.VarianteProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVarianteProduto>
          }
          groupBy: {
            args: Prisma.VarianteProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VarianteProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VarianteProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<VarianteProdutoCountAggregateOutputType> | number
          }
        }
      }
      Vinculacao: {
        payload: Prisma.$VinculacaoPayload<ExtArgs>
        fields: Prisma.VinculacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VinculacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VinculacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculacaoPayload>
          }
          findFirst: {
            args: Prisma.VinculacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VinculacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculacaoPayload>
          }
          findMany: {
            args: Prisma.VinculacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculacaoPayload>[]
          }
          create: {
            args: Prisma.VinculacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculacaoPayload>
          }
          createMany: {
            args: Prisma.VinculacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VinculacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculacaoPayload>[]
          }
          delete: {
            args: Prisma.VinculacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculacaoPayload>
          }
          update: {
            args: Prisma.VinculacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculacaoPayload>
          }
          deleteMany: {
            args: Prisma.VinculacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VinculacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VinculacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinculacaoPayload>
          }
          aggregate: {
            args: Prisma.VinculacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVinculacao>
          }
          groupBy: {
            args: Prisma.VinculacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VinculacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VinculacaoCountArgs<ExtArgs>
            result: $Utils.Optional<VinculacaoCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      Convite: {
        payload: Prisma.$ConvitePayload<ExtArgs>
        fields: Prisma.ConviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>
          }
          findFirst: {
            args: Prisma.ConviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>
          }
          findMany: {
            args: Prisma.ConviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>[]
          }
          create: {
            args: Prisma.ConviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>
          }
          createMany: {
            args: Prisma.ConviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>[]
          }
          delete: {
            args: Prisma.ConviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>
          }
          update: {
            args: Prisma.ConviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>
          }
          deleteMany: {
            args: Prisma.ConviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>
          }
          aggregate: {
            args: Prisma.ConviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConvite>
          }
          groupBy: {
            args: Prisma.ConviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConviteCountArgs<ExtArgs>
            result: $Utils.Optional<ConviteCountAggregateOutputType> | number
          }
        }
      }
      ItemPedido: {
        payload: Prisma.$ItemPedidoPayload<ExtArgs>
        fields: Prisma.ItemPedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findFirst: {
            args: Prisma.ItemPedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findMany: {
            args: Prisma.ItemPedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          create: {
            args: Prisma.ItemPedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          createMany: {
            args: Prisma.ItemPedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemPedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          delete: {
            args: Prisma.ItemPedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          update: {
            args: Prisma.ItemPedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          deleteMany: {
            args: Prisma.ItemPedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemPedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          aggregate: {
            args: Prisma.ItemPedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemPedido>
          }
          groupBy: {
            args: Prisma.ItemPedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemPedidoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoCountAggregateOutputType> | number
          }
        }
      }
      Comissao: {
        payload: Prisma.$ComissaoPayload<ExtArgs>
        fields: Prisma.ComissaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComissaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComissaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComissaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComissaoPayload>
          }
          findFirst: {
            args: Prisma.ComissaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComissaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComissaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComissaoPayload>
          }
          findMany: {
            args: Prisma.ComissaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComissaoPayload>[]
          }
          create: {
            args: Prisma.ComissaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComissaoPayload>
          }
          createMany: {
            args: Prisma.ComissaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComissaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComissaoPayload>[]
          }
          delete: {
            args: Prisma.ComissaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComissaoPayload>
          }
          update: {
            args: Prisma.ComissaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComissaoPayload>
          }
          deleteMany: {
            args: Prisma.ComissaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComissaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComissaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComissaoPayload>
          }
          aggregate: {
            args: Prisma.ComissaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComissao>
          }
          groupBy: {
            args: Prisma.ComissaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComissaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComissaoCountArgs<ExtArgs>
            result: $Utils.Optional<ComissaoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    notificacoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificacoes?: boolean | UsuarioCountOutputTypeCountNotificacoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }


  /**
   * Count Type FornecedorCountOutputType
   */

  export type FornecedorCountOutputType = {
    produtos: number
    vinculacoes: number
    convitesEnviados: number
  }

  export type FornecedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | FornecedorCountOutputTypeCountProdutosArgs
    vinculacoes?: boolean | FornecedorCountOutputTypeCountVinculacoesArgs
    convitesEnviados?: boolean | FornecedorCountOutputTypeCountConvitesEnviadosArgs
  }

  // Custom InputTypes
  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorCountOutputType
     */
    select?: FornecedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }

  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeCountVinculacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VinculacaoWhereInput
  }

  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeCountConvitesEnviadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConviteWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    variantes: number
    itens: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variantes?: boolean | ProdutoCountOutputTypeCountVariantesArgs
    itens?: boolean | ProdutoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountVariantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VarianteProdutoWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Count Type RepresentanteCountOutputType
   */

  export type RepresentanteCountOutputType = {
    vinculacoes: number
    comissoes: number
    pedidos: number
    convitesEnviados: number
  }

  export type RepresentanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vinculacoes?: boolean | RepresentanteCountOutputTypeCountVinculacoesArgs
    comissoes?: boolean | RepresentanteCountOutputTypeCountComissoesArgs
    pedidos?: boolean | RepresentanteCountOutputTypeCountPedidosArgs
    convitesEnviados?: boolean | RepresentanteCountOutputTypeCountConvitesEnviadosArgs
  }

  // Custom InputTypes
  /**
   * RepresentanteCountOutputType without action
   */
  export type RepresentanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteCountOutputType
     */
    select?: RepresentanteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepresentanteCountOutputType without action
   */
  export type RepresentanteCountOutputTypeCountVinculacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VinculacaoWhereInput
  }

  /**
   * RepresentanteCountOutputType without action
   */
  export type RepresentanteCountOutputTypeCountComissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComissaoWhereInput
  }

  /**
   * RepresentanteCountOutputType without action
   */
  export type RepresentanteCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }

  /**
   * RepresentanteCountOutputType without action
   */
  export type RepresentanteCountOutputTypeCountConvitesEnviadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConviteWhereInput
  }


  /**
   * Count Type VinculacaoCountOutputType
   */

  export type VinculacaoCountOutputType = {
    comissoes: number
  }

  export type VinculacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comissoes?: boolean | VinculacaoCountOutputTypeCountComissoesArgs
  }

  // Custom InputTypes
  /**
   * VinculacaoCountOutputType without action
   */
  export type VinculacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinculacaoCountOutputType
     */
    select?: VinculacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VinculacaoCountOutputType without action
   */
  export type VinculacaoCountOutputTypeCountComissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComissaoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    itens: number
    comissoes: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | PedidoCountOutputTypeCountItensArgs
    comissoes?: boolean | PedidoCountOutputTypeCountComissoesArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountComissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComissaoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    pedidos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | ClienteCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    papel: $Enums.PapelUsuario | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    papel: $Enums.PapelUsuario | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    papel: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    papel?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    papel?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    papel?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    papel: $Enums.PapelUsuario
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    papel?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | Usuario$fornecedorArgs<ExtArgs>
    representante?: boolean | Usuario$representanteArgs<ExtArgs>
    notificacoes?: boolean | Usuario$notificacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    papel?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    papel?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | Usuario$fornecedorArgs<ExtArgs>
    representante?: boolean | Usuario$representanteArgs<ExtArgs>
    notificacoes?: boolean | Usuario$notificacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      fornecedor: Prisma.$FornecedorPayload<ExtArgs> | null
      representante: Prisma.$RepresentantePayload<ExtArgs> | null
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      papel: $Enums.PapelUsuario
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fornecedor<T extends Usuario$fornecedorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$fornecedorArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    representante<T extends Usuario$representanteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$representanteArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    notificacoes<T extends Usuario$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly papel: FieldRef<"Usuario", 'PapelUsuario'>
    readonly ativo: FieldRef<"Usuario", 'Boolean'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.fornecedor
   */
  export type Usuario$fornecedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    where?: FornecedorWhereInput
  }

  /**
   * Usuario.representante
   */
  export type Usuario$representanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    where?: RepresentanteWhereInput
  }

  /**
   * Usuario.notificacoes
   */
  export type Usuario$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Fornecedor
   */

  export type AggregateFornecedor = {
    _count: FornecedorCountAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  export type FornecedorMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    razaoSocial: string | null
    nomeFantasia: string | null
    cnpj: string | null
    inscricaoEstadual: string | null
    telefone: string | null
    segmento: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FornecedorMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    razaoSocial: string | null
    nomeFantasia: string | null
    cnpj: string | null
    inscricaoEstadual: string | null
    telefone: string | null
    segmento: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FornecedorCountAggregateOutputType = {
    id: number
    usuarioId: number
    razaoSocial: number
    nomeFantasia: number
    cnpj: number
    inscricaoEstadual: number
    telefone: number
    segmento: number
    endereco: number
    configuracoes: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FornecedorMinAggregateInputType = {
    id?: true
    usuarioId?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    inscricaoEstadual?: true
    telefone?: true
    segmento?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FornecedorMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    inscricaoEstadual?: true
    telefone?: true
    segmento?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FornecedorCountAggregateInputType = {
    id?: true
    usuarioId?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    inscricaoEstadual?: true
    telefone?: true
    segmento?: true
    endereco?: true
    configuracoes?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FornecedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fornecedor to aggregate.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fornecedors
    **/
    _count?: true | FornecedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FornecedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FornecedorMaxAggregateInputType
  }

  export type GetFornecedorAggregateType<T extends FornecedorAggregateArgs> = {
        [P in keyof T & keyof AggregateFornecedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFornecedor[P]>
      : GetScalarType<T[P], AggregateFornecedor[P]>
  }




  export type FornecedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FornecedorWhereInput
    orderBy?: FornecedorOrderByWithAggregationInput | FornecedorOrderByWithAggregationInput[]
    by: FornecedorScalarFieldEnum[] | FornecedorScalarFieldEnum
    having?: FornecedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FornecedorCountAggregateInputType | true
    _min?: FornecedorMinAggregateInputType
    _max?: FornecedorMaxAggregateInputType
  }

  export type FornecedorGroupByOutputType = {
    id: string
    usuarioId: string
    razaoSocial: string
    nomeFantasia: string | null
    cnpj: string
    inscricaoEstadual: string | null
    telefone: string | null
    segmento: string
    endereco: JsonValue | null
    configuracoes: JsonValue | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: FornecedorCountAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  type GetFornecedorGroupByPayload<T extends FornecedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FornecedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FornecedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
            : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
        }
      >
    >


  export type FornecedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    telefone?: boolean
    segmento?: boolean
    endereco?: boolean
    configuracoes?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    produtos?: boolean | Fornecedor$produtosArgs<ExtArgs>
    vinculacoes?: boolean | Fornecedor$vinculacoesArgs<ExtArgs>
    convitesEnviados?: boolean | Fornecedor$convitesEnviadosArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedor"]>

  export type FornecedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    telefone?: boolean
    segmento?: boolean
    endereco?: boolean
    configuracoes?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedor"]>

  export type FornecedorSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    telefone?: boolean
    segmento?: boolean
    endereco?: boolean
    configuracoes?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FornecedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    produtos?: boolean | Fornecedor$produtosArgs<ExtArgs>
    vinculacoes?: boolean | Fornecedor$vinculacoesArgs<ExtArgs>
    convitesEnviados?: boolean | Fornecedor$convitesEnviadosArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FornecedorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $FornecedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fornecedor"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      produtos: Prisma.$ProdutoPayload<ExtArgs>[]
      vinculacoes: Prisma.$VinculacaoPayload<ExtArgs>[]
      convitesEnviados: Prisma.$ConvitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      razaoSocial: string
      nomeFantasia: string | null
      cnpj: string
      inscricaoEstadual: string | null
      telefone: string | null
      segmento: string
      endereco: Prisma.JsonValue | null
      configuracoes: Prisma.JsonValue | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fornecedor"]>
    composites: {}
  }

  type FornecedorGetPayload<S extends boolean | null | undefined | FornecedorDefaultArgs> = $Result.GetResult<Prisma.$FornecedorPayload, S>

  type FornecedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FornecedorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FornecedorCountAggregateInputType | true
    }

  export interface FornecedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fornecedor'], meta: { name: 'Fornecedor' } }
    /**
     * Find zero or one Fornecedor that matches the filter.
     * @param {FornecedorFindUniqueArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FornecedorFindUniqueArgs>(args: SelectSubset<T, FornecedorFindUniqueArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Fornecedor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FornecedorFindUniqueOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FornecedorFindUniqueOrThrowArgs>(args: SelectSubset<T, FornecedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Fornecedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindFirstArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FornecedorFindFirstArgs>(args?: SelectSubset<T, FornecedorFindFirstArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Fornecedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindFirstOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FornecedorFindFirstOrThrowArgs>(args?: SelectSubset<T, FornecedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Fornecedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany()
     * 
     * // Get first 10 Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fornecedorWithIdOnly = await prisma.fornecedor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FornecedorFindManyArgs>(args?: SelectSubset<T, FornecedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Fornecedor.
     * @param {FornecedorCreateArgs} args - Arguments to create a Fornecedor.
     * @example
     * // Create one Fornecedor
     * const Fornecedor = await prisma.fornecedor.create({
     *   data: {
     *     // ... data to create a Fornecedor
     *   }
     * })
     * 
     */
    create<T extends FornecedorCreateArgs>(args: SelectSubset<T, FornecedorCreateArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Fornecedors.
     * @param {FornecedorCreateManyArgs} args - Arguments to create many Fornecedors.
     * @example
     * // Create many Fornecedors
     * const fornecedor = await prisma.fornecedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FornecedorCreateManyArgs>(args?: SelectSubset<T, FornecedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fornecedors and returns the data saved in the database.
     * @param {FornecedorCreateManyAndReturnArgs} args - Arguments to create many Fornecedors.
     * @example
     * // Create many Fornecedors
     * const fornecedor = await prisma.fornecedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fornecedors and only return the `id`
     * const fornecedorWithIdOnly = await prisma.fornecedor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FornecedorCreateManyAndReturnArgs>(args?: SelectSubset<T, FornecedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Fornecedor.
     * @param {FornecedorDeleteArgs} args - Arguments to delete one Fornecedor.
     * @example
     * // Delete one Fornecedor
     * const Fornecedor = await prisma.fornecedor.delete({
     *   where: {
     *     // ... filter to delete one Fornecedor
     *   }
     * })
     * 
     */
    delete<T extends FornecedorDeleteArgs>(args: SelectSubset<T, FornecedorDeleteArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Fornecedor.
     * @param {FornecedorUpdateArgs} args - Arguments to update one Fornecedor.
     * @example
     * // Update one Fornecedor
     * const fornecedor = await prisma.fornecedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FornecedorUpdateArgs>(args: SelectSubset<T, FornecedorUpdateArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Fornecedors.
     * @param {FornecedorDeleteManyArgs} args - Arguments to filter Fornecedors to delete.
     * @example
     * // Delete a few Fornecedors
     * const { count } = await prisma.fornecedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FornecedorDeleteManyArgs>(args?: SelectSubset<T, FornecedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fornecedors
     * const fornecedor = await prisma.fornecedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FornecedorUpdateManyArgs>(args: SelectSubset<T, FornecedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fornecedor.
     * @param {FornecedorUpsertArgs} args - Arguments to update or create a Fornecedor.
     * @example
     * // Update or create a Fornecedor
     * const fornecedor = await prisma.fornecedor.upsert({
     *   create: {
     *     // ... data to create a Fornecedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fornecedor we want to update
     *   }
     * })
     */
    upsert<T extends FornecedorUpsertArgs>(args: SelectSubset<T, FornecedorUpsertArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorCountArgs} args - Arguments to filter Fornecedors to count.
     * @example
     * // Count the number of Fornecedors
     * const count = await prisma.fornecedor.count({
     *   where: {
     *     // ... the filter for the Fornecedors we want to count
     *   }
     * })
    **/
    count<T extends FornecedorCountArgs>(
      args?: Subset<T, FornecedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FornecedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FornecedorAggregateArgs>(args: Subset<T, FornecedorAggregateArgs>): Prisma.PrismaPromise<GetFornecedorAggregateType<T>>

    /**
     * Group by Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FornecedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FornecedorGroupByArgs['orderBy'] }
        : { orderBy?: FornecedorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FornecedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFornecedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fornecedor model
   */
  readonly fields: FornecedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fornecedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FornecedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    produtos<T extends Fornecedor$produtosArgs<ExtArgs> = {}>(args?: Subset<T, Fornecedor$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany"> | Null>
    vinculacoes<T extends Fornecedor$vinculacoesArgs<ExtArgs> = {}>(args?: Subset<T, Fornecedor$vinculacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinculacaoPayload<ExtArgs>, T, "findMany"> | Null>
    convitesEnviados<T extends Fornecedor$convitesEnviadosArgs<ExtArgs> = {}>(args?: Subset<T, Fornecedor$convitesEnviadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fornecedor model
   */ 
  interface FornecedorFieldRefs {
    readonly id: FieldRef<"Fornecedor", 'String'>
    readonly usuarioId: FieldRef<"Fornecedor", 'String'>
    readonly razaoSocial: FieldRef<"Fornecedor", 'String'>
    readonly nomeFantasia: FieldRef<"Fornecedor", 'String'>
    readonly cnpj: FieldRef<"Fornecedor", 'String'>
    readonly inscricaoEstadual: FieldRef<"Fornecedor", 'String'>
    readonly telefone: FieldRef<"Fornecedor", 'String'>
    readonly segmento: FieldRef<"Fornecedor", 'String'>
    readonly endereco: FieldRef<"Fornecedor", 'Json'>
    readonly configuracoes: FieldRef<"Fornecedor", 'Json'>
    readonly ativo: FieldRef<"Fornecedor", 'Boolean'>
    readonly createdAt: FieldRef<"Fornecedor", 'DateTime'>
    readonly updatedAt: FieldRef<"Fornecedor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fornecedor findUnique
   */
  export type FornecedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor findUniqueOrThrow
   */
  export type FornecedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor findFirst
   */
  export type FornecedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor findFirstOrThrow
   */
  export type FornecedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor findMany
   */
  export type FornecedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedors to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor create
   */
  export type FornecedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Fornecedor.
     */
    data: XOR<FornecedorCreateInput, FornecedorUncheckedCreateInput>
  }

  /**
   * Fornecedor createMany
   */
  export type FornecedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fornecedors.
     */
    data: FornecedorCreateManyInput | FornecedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fornecedor createManyAndReturn
   */
  export type FornecedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Fornecedors.
     */
    data: FornecedorCreateManyInput | FornecedorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fornecedor update
   */
  export type FornecedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Fornecedor.
     */
    data: XOR<FornecedorUpdateInput, FornecedorUncheckedUpdateInput>
    /**
     * Choose, which Fornecedor to update.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor updateMany
   */
  export type FornecedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fornecedors.
     */
    data: XOR<FornecedorUpdateManyMutationInput, FornecedorUncheckedUpdateManyInput>
    /**
     * Filter which Fornecedors to update
     */
    where?: FornecedorWhereInput
  }

  /**
   * Fornecedor upsert
   */
  export type FornecedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Fornecedor to update in case it exists.
     */
    where: FornecedorWhereUniqueInput
    /**
     * In case the Fornecedor found by the `where` argument doesn't exist, create a new Fornecedor with this data.
     */
    create: XOR<FornecedorCreateInput, FornecedorUncheckedCreateInput>
    /**
     * In case the Fornecedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FornecedorUpdateInput, FornecedorUncheckedUpdateInput>
  }

  /**
   * Fornecedor delete
   */
  export type FornecedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter which Fornecedor to delete.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor deleteMany
   */
  export type FornecedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fornecedors to delete
     */
    where?: FornecedorWhereInput
  }

  /**
   * Fornecedor.produtos
   */
  export type Fornecedor$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Fornecedor.vinculacoes
   */
  export type Fornecedor$vinculacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculacao
     */
    select?: VinculacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculacaoInclude<ExtArgs> | null
    where?: VinculacaoWhereInput
    orderBy?: VinculacaoOrderByWithRelationInput | VinculacaoOrderByWithRelationInput[]
    cursor?: VinculacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VinculacaoScalarFieldEnum | VinculacaoScalarFieldEnum[]
  }

  /**
   * Fornecedor.convitesEnviados
   */
  export type Fornecedor$convitesEnviadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    where?: ConviteWhereInput
    orderBy?: ConviteOrderByWithRelationInput | ConviteOrderByWithRelationInput[]
    cursor?: ConviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConviteScalarFieldEnum | ConviteScalarFieldEnum[]
  }

  /**
   * Fornecedor without action
   */
  export type FornecedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    precoBase: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    precoBase: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    precoBase: number | null
    fornecedorId: string | null
    categoria: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    precoBase: number | null
    fornecedorId: string | null
    categoria: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    precoBase: number
    fornecedorId: number
    categoria: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    precoBase?: true
  }

  export type ProdutoSumAggregateInputType = {
    precoBase?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    precoBase?: true
    fornecedorId?: true
    categoria?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    precoBase?: true
    fornecedorId?: true
    categoria?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    precoBase?: true
    fornecedorId?: true
    categoria?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: string
    nome: string
    descricao: string
    precoBase: number
    fornecedorId: string | null
    categoria: string | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    precoBase?: boolean
    fornecedorId?: boolean
    categoria?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | Produto$fornecedorArgs<ExtArgs>
    variantes?: boolean | Produto$variantesArgs<ExtArgs>
    itens?: boolean | Produto$itensArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    precoBase?: boolean
    fornecedorId?: boolean
    categoria?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | Produto$fornecedorArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    precoBase?: boolean
    fornecedorId?: boolean
    categoria?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | Produto$fornecedorArgs<ExtArgs>
    variantes?: boolean | Produto$variantesArgs<ExtArgs>
    itens?: boolean | Produto$itensArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | Produto$fornecedorArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      fornecedor: Prisma.$FornecedorPayload<ExtArgs> | null
      variantes: Prisma.$VarianteProdutoPayload<ExtArgs>[]
      itens: Prisma.$ItemPedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string
      precoBase: number
      fornecedorId: string | null
      categoria: string | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fornecedor<T extends Produto$fornecedorArgs<ExtArgs> = {}>(args?: Subset<T, Produto$fornecedorArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    variantes<T extends Produto$variantesArgs<ExtArgs> = {}>(args?: Subset<T, Produto$variantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VarianteProdutoPayload<ExtArgs>, T, "findMany"> | Null>
    itens<T extends Produto$itensArgs<ExtArgs> = {}>(args?: Subset<T, Produto$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produto model
   */ 
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'String'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly descricao: FieldRef<"Produto", 'String'>
    readonly precoBase: FieldRef<"Produto", 'Float'>
    readonly fornecedorId: FieldRef<"Produto", 'String'>
    readonly categoria: FieldRef<"Produto", 'String'>
    readonly ativo: FieldRef<"Produto", 'Boolean'>
    readonly createdAt: FieldRef<"Produto", 'DateTime'>
    readonly updatedAt: FieldRef<"Produto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
  }

  /**
   * Produto.fornecedor
   */
  export type Produto$fornecedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    where?: FornecedorWhereInput
  }

  /**
   * Produto.variantes
   */
  export type Produto$variantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VarianteProduto
     */
    select?: VarianteProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VarianteProdutoInclude<ExtArgs> | null
    where?: VarianteProdutoWhereInput
    orderBy?: VarianteProdutoOrderByWithRelationInput | VarianteProdutoOrderByWithRelationInput[]
    cursor?: VarianteProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VarianteProdutoScalarFieldEnum | VarianteProdutoScalarFieldEnum[]
  }

  /**
   * Produto.itens
   */
  export type Produto$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Representante
   */

  export type AggregateRepresentante = {
    _count: RepresentanteCountAggregateOutputType | null
    _avg: RepresentanteAvgAggregateOutputType | null
    _sum: RepresentanteSumAggregateOutputType | null
    _min: RepresentanteMinAggregateOutputType | null
    _max: RepresentanteMaxAggregateOutputType | null
  }

  export type RepresentanteAvgAggregateOutputType = {
    avaliacaoMedia: number | null
  }

  export type RepresentanteSumAggregateOutputType = {
    avaliacaoMedia: number | null
  }

  export type RepresentanteMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    cpf: string | null
    telefone: string | null
    regiao: string | null
    avaliacaoMedia: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepresentanteMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    cpf: string | null
    telefone: string | null
    regiao: string | null
    avaliacaoMedia: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepresentanteCountAggregateOutputType = {
    id: number
    usuarioId: number
    cpf: number
    telefone: number
    regiao: number
    especialidades: number
    endereco: number
    configuracoes: number
    avaliacaoMedia: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RepresentanteAvgAggregateInputType = {
    avaliacaoMedia?: true
  }

  export type RepresentanteSumAggregateInputType = {
    avaliacaoMedia?: true
  }

  export type RepresentanteMinAggregateInputType = {
    id?: true
    usuarioId?: true
    cpf?: true
    telefone?: true
    regiao?: true
    avaliacaoMedia?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepresentanteMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    cpf?: true
    telefone?: true
    regiao?: true
    avaliacaoMedia?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepresentanteCountAggregateInputType = {
    id?: true
    usuarioId?: true
    cpf?: true
    telefone?: true
    regiao?: true
    especialidades?: true
    endereco?: true
    configuracoes?: true
    avaliacaoMedia?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RepresentanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Representante to aggregate.
     */
    where?: RepresentanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Representantes to fetch.
     */
    orderBy?: RepresentanteOrderByWithRelationInput | RepresentanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepresentanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Representantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Representantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Representantes
    **/
    _count?: true | RepresentanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepresentanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepresentanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepresentanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepresentanteMaxAggregateInputType
  }

  export type GetRepresentanteAggregateType<T extends RepresentanteAggregateArgs> = {
        [P in keyof T & keyof AggregateRepresentante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepresentante[P]>
      : GetScalarType<T[P], AggregateRepresentante[P]>
  }




  export type RepresentanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepresentanteWhereInput
    orderBy?: RepresentanteOrderByWithAggregationInput | RepresentanteOrderByWithAggregationInput[]
    by: RepresentanteScalarFieldEnum[] | RepresentanteScalarFieldEnum
    having?: RepresentanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepresentanteCountAggregateInputType | true
    _avg?: RepresentanteAvgAggregateInputType
    _sum?: RepresentanteSumAggregateInputType
    _min?: RepresentanteMinAggregateInputType
    _max?: RepresentanteMaxAggregateInputType
  }

  export type RepresentanteGroupByOutputType = {
    id: string
    usuarioId: string
    cpf: string | null
    telefone: string | null
    regiao: string
    especialidades: string[]
    endereco: JsonValue | null
    configuracoes: JsonValue | null
    avaliacaoMedia: number | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: RepresentanteCountAggregateOutputType | null
    _avg: RepresentanteAvgAggregateOutputType | null
    _sum: RepresentanteSumAggregateOutputType | null
    _min: RepresentanteMinAggregateOutputType | null
    _max: RepresentanteMaxAggregateOutputType | null
  }

  type GetRepresentanteGroupByPayload<T extends RepresentanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepresentanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepresentanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepresentanteGroupByOutputType[P]>
            : GetScalarType<T[P], RepresentanteGroupByOutputType[P]>
        }
      >
    >


  export type RepresentanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    cpf?: boolean
    telefone?: boolean
    regiao?: boolean
    especialidades?: boolean
    endereco?: boolean
    configuracoes?: boolean
    avaliacaoMedia?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vinculacoes?: boolean | Representante$vinculacoesArgs<ExtArgs>
    comissoes?: boolean | Representante$comissoesArgs<ExtArgs>
    pedidos?: boolean | Representante$pedidosArgs<ExtArgs>
    convitesEnviados?: boolean | Representante$convitesEnviadosArgs<ExtArgs>
    _count?: boolean | RepresentanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["representante"]>

  export type RepresentanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    cpf?: boolean
    telefone?: boolean
    regiao?: boolean
    especialidades?: boolean
    endereco?: boolean
    configuracoes?: boolean
    avaliacaoMedia?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["representante"]>

  export type RepresentanteSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    cpf?: boolean
    telefone?: boolean
    regiao?: boolean
    especialidades?: boolean
    endereco?: boolean
    configuracoes?: boolean
    avaliacaoMedia?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RepresentanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vinculacoes?: boolean | Representante$vinculacoesArgs<ExtArgs>
    comissoes?: boolean | Representante$comissoesArgs<ExtArgs>
    pedidos?: boolean | Representante$pedidosArgs<ExtArgs>
    convitesEnviados?: boolean | Representante$convitesEnviadosArgs<ExtArgs>
    _count?: boolean | RepresentanteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepresentanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RepresentantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Representante"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      vinculacoes: Prisma.$VinculacaoPayload<ExtArgs>[]
      comissoes: Prisma.$ComissaoPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
      convitesEnviados: Prisma.$ConvitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      cpf: string | null
      telefone: string | null
      regiao: string
      especialidades: string[]
      endereco: Prisma.JsonValue | null
      configuracoes: Prisma.JsonValue | null
      avaliacaoMedia: number | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["representante"]>
    composites: {}
  }

  type RepresentanteGetPayload<S extends boolean | null | undefined | RepresentanteDefaultArgs> = $Result.GetResult<Prisma.$RepresentantePayload, S>

  type RepresentanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RepresentanteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RepresentanteCountAggregateInputType | true
    }

  export interface RepresentanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Representante'], meta: { name: 'Representante' } }
    /**
     * Find zero or one Representante that matches the filter.
     * @param {RepresentanteFindUniqueArgs} args - Arguments to find a Representante
     * @example
     * // Get one Representante
     * const representante = await prisma.representante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepresentanteFindUniqueArgs>(args: SelectSubset<T, RepresentanteFindUniqueArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Representante that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RepresentanteFindUniqueOrThrowArgs} args - Arguments to find a Representante
     * @example
     * // Get one Representante
     * const representante = await prisma.representante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepresentanteFindUniqueOrThrowArgs>(args: SelectSubset<T, RepresentanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Representante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteFindFirstArgs} args - Arguments to find a Representante
     * @example
     * // Get one Representante
     * const representante = await prisma.representante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepresentanteFindFirstArgs>(args?: SelectSubset<T, RepresentanteFindFirstArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Representante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteFindFirstOrThrowArgs} args - Arguments to find a Representante
     * @example
     * // Get one Representante
     * const representante = await prisma.representante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepresentanteFindFirstOrThrowArgs>(args?: SelectSubset<T, RepresentanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Representantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Representantes
     * const representantes = await prisma.representante.findMany()
     * 
     * // Get first 10 Representantes
     * const representantes = await prisma.representante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const representanteWithIdOnly = await prisma.representante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepresentanteFindManyArgs>(args?: SelectSubset<T, RepresentanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Representante.
     * @param {RepresentanteCreateArgs} args - Arguments to create a Representante.
     * @example
     * // Create one Representante
     * const Representante = await prisma.representante.create({
     *   data: {
     *     // ... data to create a Representante
     *   }
     * })
     * 
     */
    create<T extends RepresentanteCreateArgs>(args: SelectSubset<T, RepresentanteCreateArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Representantes.
     * @param {RepresentanteCreateManyArgs} args - Arguments to create many Representantes.
     * @example
     * // Create many Representantes
     * const representante = await prisma.representante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepresentanteCreateManyArgs>(args?: SelectSubset<T, RepresentanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Representantes and returns the data saved in the database.
     * @param {RepresentanteCreateManyAndReturnArgs} args - Arguments to create many Representantes.
     * @example
     * // Create many Representantes
     * const representante = await prisma.representante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Representantes and only return the `id`
     * const representanteWithIdOnly = await prisma.representante.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepresentanteCreateManyAndReturnArgs>(args?: SelectSubset<T, RepresentanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Representante.
     * @param {RepresentanteDeleteArgs} args - Arguments to delete one Representante.
     * @example
     * // Delete one Representante
     * const Representante = await prisma.representante.delete({
     *   where: {
     *     // ... filter to delete one Representante
     *   }
     * })
     * 
     */
    delete<T extends RepresentanteDeleteArgs>(args: SelectSubset<T, RepresentanteDeleteArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Representante.
     * @param {RepresentanteUpdateArgs} args - Arguments to update one Representante.
     * @example
     * // Update one Representante
     * const representante = await prisma.representante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepresentanteUpdateArgs>(args: SelectSubset<T, RepresentanteUpdateArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Representantes.
     * @param {RepresentanteDeleteManyArgs} args - Arguments to filter Representantes to delete.
     * @example
     * // Delete a few Representantes
     * const { count } = await prisma.representante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepresentanteDeleteManyArgs>(args?: SelectSubset<T, RepresentanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Representantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Representantes
     * const representante = await prisma.representante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepresentanteUpdateManyArgs>(args: SelectSubset<T, RepresentanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Representante.
     * @param {RepresentanteUpsertArgs} args - Arguments to update or create a Representante.
     * @example
     * // Update or create a Representante
     * const representante = await prisma.representante.upsert({
     *   create: {
     *     // ... data to create a Representante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Representante we want to update
     *   }
     * })
     */
    upsert<T extends RepresentanteUpsertArgs>(args: SelectSubset<T, RepresentanteUpsertArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Representantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteCountArgs} args - Arguments to filter Representantes to count.
     * @example
     * // Count the number of Representantes
     * const count = await prisma.representante.count({
     *   where: {
     *     // ... the filter for the Representantes we want to count
     *   }
     * })
    **/
    count<T extends RepresentanteCountArgs>(
      args?: Subset<T, RepresentanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepresentanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Representante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepresentanteAggregateArgs>(args: Subset<T, RepresentanteAggregateArgs>): Prisma.PrismaPromise<GetRepresentanteAggregateType<T>>

    /**
     * Group by Representante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepresentanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepresentanteGroupByArgs['orderBy'] }
        : { orderBy?: RepresentanteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepresentanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepresentanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Representante model
   */
  readonly fields: RepresentanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Representante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepresentanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    vinculacoes<T extends Representante$vinculacoesArgs<ExtArgs> = {}>(args?: Subset<T, Representante$vinculacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinculacaoPayload<ExtArgs>, T, "findMany"> | Null>
    comissoes<T extends Representante$comissoesArgs<ExtArgs> = {}>(args?: Subset<T, Representante$comissoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComissaoPayload<ExtArgs>, T, "findMany"> | Null>
    pedidos<T extends Representante$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Representante$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany"> | Null>
    convitesEnviados<T extends Representante$convitesEnviadosArgs<ExtArgs> = {}>(args?: Subset<T, Representante$convitesEnviadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Representante model
   */ 
  interface RepresentanteFieldRefs {
    readonly id: FieldRef<"Representante", 'String'>
    readonly usuarioId: FieldRef<"Representante", 'String'>
    readonly cpf: FieldRef<"Representante", 'String'>
    readonly telefone: FieldRef<"Representante", 'String'>
    readonly regiao: FieldRef<"Representante", 'String'>
    readonly especialidades: FieldRef<"Representante", 'String[]'>
    readonly endereco: FieldRef<"Representante", 'Json'>
    readonly configuracoes: FieldRef<"Representante", 'Json'>
    readonly avaliacaoMedia: FieldRef<"Representante", 'Float'>
    readonly ativo: FieldRef<"Representante", 'Boolean'>
    readonly createdAt: FieldRef<"Representante", 'DateTime'>
    readonly updatedAt: FieldRef<"Representante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Representante findUnique
   */
  export type RepresentanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * Filter, which Representante to fetch.
     */
    where: RepresentanteWhereUniqueInput
  }

  /**
   * Representante findUniqueOrThrow
   */
  export type RepresentanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * Filter, which Representante to fetch.
     */
    where: RepresentanteWhereUniqueInput
  }

  /**
   * Representante findFirst
   */
  export type RepresentanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * Filter, which Representante to fetch.
     */
    where?: RepresentanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Representantes to fetch.
     */
    orderBy?: RepresentanteOrderByWithRelationInput | RepresentanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Representantes.
     */
    cursor?: RepresentanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Representantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Representantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Representantes.
     */
    distinct?: RepresentanteScalarFieldEnum | RepresentanteScalarFieldEnum[]
  }

  /**
   * Representante findFirstOrThrow
   */
  export type RepresentanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * Filter, which Representante to fetch.
     */
    where?: RepresentanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Representantes to fetch.
     */
    orderBy?: RepresentanteOrderByWithRelationInput | RepresentanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Representantes.
     */
    cursor?: RepresentanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Representantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Representantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Representantes.
     */
    distinct?: RepresentanteScalarFieldEnum | RepresentanteScalarFieldEnum[]
  }

  /**
   * Representante findMany
   */
  export type RepresentanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * Filter, which Representantes to fetch.
     */
    where?: RepresentanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Representantes to fetch.
     */
    orderBy?: RepresentanteOrderByWithRelationInput | RepresentanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Representantes.
     */
    cursor?: RepresentanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Representantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Representantes.
     */
    skip?: number
    distinct?: RepresentanteScalarFieldEnum | RepresentanteScalarFieldEnum[]
  }

  /**
   * Representante create
   */
  export type RepresentanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Representante.
     */
    data: XOR<RepresentanteCreateInput, RepresentanteUncheckedCreateInput>
  }

  /**
   * Representante createMany
   */
  export type RepresentanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Representantes.
     */
    data: RepresentanteCreateManyInput | RepresentanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Representante createManyAndReturn
   */
  export type RepresentanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Representantes.
     */
    data: RepresentanteCreateManyInput | RepresentanteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Representante update
   */
  export type RepresentanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Representante.
     */
    data: XOR<RepresentanteUpdateInput, RepresentanteUncheckedUpdateInput>
    /**
     * Choose, which Representante to update.
     */
    where: RepresentanteWhereUniqueInput
  }

  /**
   * Representante updateMany
   */
  export type RepresentanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Representantes.
     */
    data: XOR<RepresentanteUpdateManyMutationInput, RepresentanteUncheckedUpdateManyInput>
    /**
     * Filter which Representantes to update
     */
    where?: RepresentanteWhereInput
  }

  /**
   * Representante upsert
   */
  export type RepresentanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Representante to update in case it exists.
     */
    where: RepresentanteWhereUniqueInput
    /**
     * In case the Representante found by the `where` argument doesn't exist, create a new Representante with this data.
     */
    create: XOR<RepresentanteCreateInput, RepresentanteUncheckedCreateInput>
    /**
     * In case the Representante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepresentanteUpdateInput, RepresentanteUncheckedUpdateInput>
  }

  /**
   * Representante delete
   */
  export type RepresentanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * Filter which Representante to delete.
     */
    where: RepresentanteWhereUniqueInput
  }

  /**
   * Representante deleteMany
   */
  export type RepresentanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Representantes to delete
     */
    where?: RepresentanteWhereInput
  }

  /**
   * Representante.vinculacoes
   */
  export type Representante$vinculacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculacao
     */
    select?: VinculacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculacaoInclude<ExtArgs> | null
    where?: VinculacaoWhereInput
    orderBy?: VinculacaoOrderByWithRelationInput | VinculacaoOrderByWithRelationInput[]
    cursor?: VinculacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VinculacaoScalarFieldEnum | VinculacaoScalarFieldEnum[]
  }

  /**
   * Representante.comissoes
   */
  export type Representante$comissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoInclude<ExtArgs> | null
    where?: ComissaoWhereInput
    orderBy?: ComissaoOrderByWithRelationInput | ComissaoOrderByWithRelationInput[]
    cursor?: ComissaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComissaoScalarFieldEnum | ComissaoScalarFieldEnum[]
  }

  /**
   * Representante.pedidos
   */
  export type Representante$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Representante.convitesEnviados
   */
  export type Representante$convitesEnviadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    where?: ConviteWhereInput
    orderBy?: ConviteOrderByWithRelationInput | ConviteOrderByWithRelationInput[]
    cursor?: ConviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConviteScalarFieldEnum | ConviteScalarFieldEnum[]
  }

  /**
   * Representante without action
   */
  export type RepresentanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
  }


  /**
   * Model VarianteProduto
   */

  export type AggregateVarianteProduto = {
    _count: VarianteProdutoCountAggregateOutputType | null
    _avg: VarianteProdutoAvgAggregateOutputType | null
    _sum: VarianteProdutoSumAggregateOutputType | null
    _min: VarianteProdutoMinAggregateOutputType | null
    _max: VarianteProdutoMaxAggregateOutputType | null
  }

  export type VarianteProdutoAvgAggregateOutputType = {
    preco: number | null
    estoque: number | null
  }

  export type VarianteProdutoSumAggregateOutputType = {
    preco: number | null
    estoque: number | null
  }

  export type VarianteProdutoMinAggregateOutputType = {
    id: string | null
    sku: string | null
    preco: number | null
    estoque: number | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VarianteProdutoMaxAggregateOutputType = {
    id: string | null
    sku: string | null
    preco: number | null
    estoque: number | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VarianteProdutoCountAggregateOutputType = {
    id: number
    sku: number
    preco: number
    estoque: number
    atributos: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VarianteProdutoAvgAggregateInputType = {
    preco?: true
    estoque?: true
  }

  export type VarianteProdutoSumAggregateInputType = {
    preco?: true
    estoque?: true
  }

  export type VarianteProdutoMinAggregateInputType = {
    id?: true
    sku?: true
    preco?: true
    estoque?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VarianteProdutoMaxAggregateInputType = {
    id?: true
    sku?: true
    preco?: true
    estoque?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VarianteProdutoCountAggregateInputType = {
    id?: true
    sku?: true
    preco?: true
    estoque?: true
    atributos?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VarianteProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VarianteProduto to aggregate.
     */
    where?: VarianteProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VarianteProdutos to fetch.
     */
    orderBy?: VarianteProdutoOrderByWithRelationInput | VarianteProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VarianteProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VarianteProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VarianteProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VarianteProdutos
    **/
    _count?: true | VarianteProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VarianteProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VarianteProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VarianteProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VarianteProdutoMaxAggregateInputType
  }

  export type GetVarianteProdutoAggregateType<T extends VarianteProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateVarianteProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVarianteProduto[P]>
      : GetScalarType<T[P], AggregateVarianteProduto[P]>
  }




  export type VarianteProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VarianteProdutoWhereInput
    orderBy?: VarianteProdutoOrderByWithAggregationInput | VarianteProdutoOrderByWithAggregationInput[]
    by: VarianteProdutoScalarFieldEnum[] | VarianteProdutoScalarFieldEnum
    having?: VarianteProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VarianteProdutoCountAggregateInputType | true
    _avg?: VarianteProdutoAvgAggregateInputType
    _sum?: VarianteProdutoSumAggregateInputType
    _min?: VarianteProdutoMinAggregateInputType
    _max?: VarianteProdutoMaxAggregateInputType
  }

  export type VarianteProdutoGroupByOutputType = {
    id: string
    sku: string
    preco: number
    estoque: number
    atributos: JsonValue
    productId: string
    createdAt: Date
    updatedAt: Date
    _count: VarianteProdutoCountAggregateOutputType | null
    _avg: VarianteProdutoAvgAggregateOutputType | null
    _sum: VarianteProdutoSumAggregateOutputType | null
    _min: VarianteProdutoMinAggregateOutputType | null
    _max: VarianteProdutoMaxAggregateOutputType | null
  }

  type GetVarianteProdutoGroupByPayload<T extends VarianteProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VarianteProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VarianteProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VarianteProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], VarianteProdutoGroupByOutputType[P]>
        }
      >
    >


  export type VarianteProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    preco?: boolean
    estoque?: boolean
    atributos?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["varianteProduto"]>

  export type VarianteProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    preco?: boolean
    estoque?: boolean
    atributos?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["varianteProduto"]>

  export type VarianteProdutoSelectScalar = {
    id?: boolean
    sku?: boolean
    preco?: boolean
    estoque?: boolean
    atributos?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VarianteProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type VarianteProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $VarianteProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VarianteProduto"
    objects: {
      product: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sku: string
      preco: number
      estoque: number
      atributos: Prisma.JsonValue
      productId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["varianteProduto"]>
    composites: {}
  }

  type VarianteProdutoGetPayload<S extends boolean | null | undefined | VarianteProdutoDefaultArgs> = $Result.GetResult<Prisma.$VarianteProdutoPayload, S>

  type VarianteProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VarianteProdutoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VarianteProdutoCountAggregateInputType | true
    }

  export interface VarianteProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VarianteProduto'], meta: { name: 'VarianteProduto' } }
    /**
     * Find zero or one VarianteProduto that matches the filter.
     * @param {VarianteProdutoFindUniqueArgs} args - Arguments to find a VarianteProduto
     * @example
     * // Get one VarianteProduto
     * const varianteProduto = await prisma.varianteProduto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VarianteProdutoFindUniqueArgs>(args: SelectSubset<T, VarianteProdutoFindUniqueArgs<ExtArgs>>): Prisma__VarianteProdutoClient<$Result.GetResult<Prisma.$VarianteProdutoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VarianteProduto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VarianteProdutoFindUniqueOrThrowArgs} args - Arguments to find a VarianteProduto
     * @example
     * // Get one VarianteProduto
     * const varianteProduto = await prisma.varianteProduto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VarianteProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, VarianteProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VarianteProdutoClient<$Result.GetResult<Prisma.$VarianteProdutoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VarianteProduto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VarianteProdutoFindFirstArgs} args - Arguments to find a VarianteProduto
     * @example
     * // Get one VarianteProduto
     * const varianteProduto = await prisma.varianteProduto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VarianteProdutoFindFirstArgs>(args?: SelectSubset<T, VarianteProdutoFindFirstArgs<ExtArgs>>): Prisma__VarianteProdutoClient<$Result.GetResult<Prisma.$VarianteProdutoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VarianteProduto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VarianteProdutoFindFirstOrThrowArgs} args - Arguments to find a VarianteProduto
     * @example
     * // Get one VarianteProduto
     * const varianteProduto = await prisma.varianteProduto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VarianteProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, VarianteProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VarianteProdutoClient<$Result.GetResult<Prisma.$VarianteProdutoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VarianteProdutos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VarianteProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VarianteProdutos
     * const varianteProdutos = await prisma.varianteProduto.findMany()
     * 
     * // Get first 10 VarianteProdutos
     * const varianteProdutos = await prisma.varianteProduto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const varianteProdutoWithIdOnly = await prisma.varianteProduto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VarianteProdutoFindManyArgs>(args?: SelectSubset<T, VarianteProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VarianteProdutoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VarianteProduto.
     * @param {VarianteProdutoCreateArgs} args - Arguments to create a VarianteProduto.
     * @example
     * // Create one VarianteProduto
     * const VarianteProduto = await prisma.varianteProduto.create({
     *   data: {
     *     // ... data to create a VarianteProduto
     *   }
     * })
     * 
     */
    create<T extends VarianteProdutoCreateArgs>(args: SelectSubset<T, VarianteProdutoCreateArgs<ExtArgs>>): Prisma__VarianteProdutoClient<$Result.GetResult<Prisma.$VarianteProdutoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VarianteProdutos.
     * @param {VarianteProdutoCreateManyArgs} args - Arguments to create many VarianteProdutos.
     * @example
     * // Create many VarianteProdutos
     * const varianteProduto = await prisma.varianteProduto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VarianteProdutoCreateManyArgs>(args?: SelectSubset<T, VarianteProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VarianteProdutos and returns the data saved in the database.
     * @param {VarianteProdutoCreateManyAndReturnArgs} args - Arguments to create many VarianteProdutos.
     * @example
     * // Create many VarianteProdutos
     * const varianteProduto = await prisma.varianteProduto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VarianteProdutos and only return the `id`
     * const varianteProdutoWithIdOnly = await prisma.varianteProduto.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VarianteProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, VarianteProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VarianteProdutoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VarianteProduto.
     * @param {VarianteProdutoDeleteArgs} args - Arguments to delete one VarianteProduto.
     * @example
     * // Delete one VarianteProduto
     * const VarianteProduto = await prisma.varianteProduto.delete({
     *   where: {
     *     // ... filter to delete one VarianteProduto
     *   }
     * })
     * 
     */
    delete<T extends VarianteProdutoDeleteArgs>(args: SelectSubset<T, VarianteProdutoDeleteArgs<ExtArgs>>): Prisma__VarianteProdutoClient<$Result.GetResult<Prisma.$VarianteProdutoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VarianteProduto.
     * @param {VarianteProdutoUpdateArgs} args - Arguments to update one VarianteProduto.
     * @example
     * // Update one VarianteProduto
     * const varianteProduto = await prisma.varianteProduto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VarianteProdutoUpdateArgs>(args: SelectSubset<T, VarianteProdutoUpdateArgs<ExtArgs>>): Prisma__VarianteProdutoClient<$Result.GetResult<Prisma.$VarianteProdutoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VarianteProdutos.
     * @param {VarianteProdutoDeleteManyArgs} args - Arguments to filter VarianteProdutos to delete.
     * @example
     * // Delete a few VarianteProdutos
     * const { count } = await prisma.varianteProduto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VarianteProdutoDeleteManyArgs>(args?: SelectSubset<T, VarianteProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VarianteProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VarianteProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VarianteProdutos
     * const varianteProduto = await prisma.varianteProduto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VarianteProdutoUpdateManyArgs>(args: SelectSubset<T, VarianteProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VarianteProduto.
     * @param {VarianteProdutoUpsertArgs} args - Arguments to update or create a VarianteProduto.
     * @example
     * // Update or create a VarianteProduto
     * const varianteProduto = await prisma.varianteProduto.upsert({
     *   create: {
     *     // ... data to create a VarianteProduto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VarianteProduto we want to update
     *   }
     * })
     */
    upsert<T extends VarianteProdutoUpsertArgs>(args: SelectSubset<T, VarianteProdutoUpsertArgs<ExtArgs>>): Prisma__VarianteProdutoClient<$Result.GetResult<Prisma.$VarianteProdutoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VarianteProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VarianteProdutoCountArgs} args - Arguments to filter VarianteProdutos to count.
     * @example
     * // Count the number of VarianteProdutos
     * const count = await prisma.varianteProduto.count({
     *   where: {
     *     // ... the filter for the VarianteProdutos we want to count
     *   }
     * })
    **/
    count<T extends VarianteProdutoCountArgs>(
      args?: Subset<T, VarianteProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VarianteProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VarianteProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VarianteProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VarianteProdutoAggregateArgs>(args: Subset<T, VarianteProdutoAggregateArgs>): Prisma.PrismaPromise<GetVarianteProdutoAggregateType<T>>

    /**
     * Group by VarianteProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VarianteProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VarianteProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VarianteProdutoGroupByArgs['orderBy'] }
        : { orderBy?: VarianteProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VarianteProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVarianteProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VarianteProduto model
   */
  readonly fields: VarianteProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VarianteProduto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VarianteProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VarianteProduto model
   */ 
  interface VarianteProdutoFieldRefs {
    readonly id: FieldRef<"VarianteProduto", 'String'>
    readonly sku: FieldRef<"VarianteProduto", 'String'>
    readonly preco: FieldRef<"VarianteProduto", 'Float'>
    readonly estoque: FieldRef<"VarianteProduto", 'Int'>
    readonly atributos: FieldRef<"VarianteProduto", 'Json'>
    readonly productId: FieldRef<"VarianteProduto", 'String'>
    readonly createdAt: FieldRef<"VarianteProduto", 'DateTime'>
    readonly updatedAt: FieldRef<"VarianteProduto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VarianteProduto findUnique
   */
  export type VarianteProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VarianteProduto
     */
    select?: VarianteProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VarianteProdutoInclude<ExtArgs> | null
    /**
     * Filter, which VarianteProduto to fetch.
     */
    where: VarianteProdutoWhereUniqueInput
  }

  /**
   * VarianteProduto findUniqueOrThrow
   */
  export type VarianteProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VarianteProduto
     */
    select?: VarianteProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VarianteProdutoInclude<ExtArgs> | null
    /**
     * Filter, which VarianteProduto to fetch.
     */
    where: VarianteProdutoWhereUniqueInput
  }

  /**
   * VarianteProduto findFirst
   */
  export type VarianteProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VarianteProduto
     */
    select?: VarianteProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VarianteProdutoInclude<ExtArgs> | null
    /**
     * Filter, which VarianteProduto to fetch.
     */
    where?: VarianteProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VarianteProdutos to fetch.
     */
    orderBy?: VarianteProdutoOrderByWithRelationInput | VarianteProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VarianteProdutos.
     */
    cursor?: VarianteProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VarianteProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VarianteProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VarianteProdutos.
     */
    distinct?: VarianteProdutoScalarFieldEnum | VarianteProdutoScalarFieldEnum[]
  }

  /**
   * VarianteProduto findFirstOrThrow
   */
  export type VarianteProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VarianteProduto
     */
    select?: VarianteProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VarianteProdutoInclude<ExtArgs> | null
    /**
     * Filter, which VarianteProduto to fetch.
     */
    where?: VarianteProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VarianteProdutos to fetch.
     */
    orderBy?: VarianteProdutoOrderByWithRelationInput | VarianteProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VarianteProdutos.
     */
    cursor?: VarianteProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VarianteProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VarianteProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VarianteProdutos.
     */
    distinct?: VarianteProdutoScalarFieldEnum | VarianteProdutoScalarFieldEnum[]
  }

  /**
   * VarianteProduto findMany
   */
  export type VarianteProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VarianteProduto
     */
    select?: VarianteProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VarianteProdutoInclude<ExtArgs> | null
    /**
     * Filter, which VarianteProdutos to fetch.
     */
    where?: VarianteProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VarianteProdutos to fetch.
     */
    orderBy?: VarianteProdutoOrderByWithRelationInput | VarianteProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VarianteProdutos.
     */
    cursor?: VarianteProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VarianteProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VarianteProdutos.
     */
    skip?: number
    distinct?: VarianteProdutoScalarFieldEnum | VarianteProdutoScalarFieldEnum[]
  }

  /**
   * VarianteProduto create
   */
  export type VarianteProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VarianteProduto
     */
    select?: VarianteProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VarianteProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a VarianteProduto.
     */
    data: XOR<VarianteProdutoCreateInput, VarianteProdutoUncheckedCreateInput>
  }

  /**
   * VarianteProduto createMany
   */
  export type VarianteProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VarianteProdutos.
     */
    data: VarianteProdutoCreateManyInput | VarianteProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VarianteProduto createManyAndReturn
   */
  export type VarianteProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VarianteProduto
     */
    select?: VarianteProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VarianteProdutos.
     */
    data: VarianteProdutoCreateManyInput | VarianteProdutoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VarianteProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VarianteProduto update
   */
  export type VarianteProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VarianteProduto
     */
    select?: VarianteProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VarianteProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a VarianteProduto.
     */
    data: XOR<VarianteProdutoUpdateInput, VarianteProdutoUncheckedUpdateInput>
    /**
     * Choose, which VarianteProduto to update.
     */
    where: VarianteProdutoWhereUniqueInput
  }

  /**
   * VarianteProduto updateMany
   */
  export type VarianteProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VarianteProdutos.
     */
    data: XOR<VarianteProdutoUpdateManyMutationInput, VarianteProdutoUncheckedUpdateManyInput>
    /**
     * Filter which VarianteProdutos to update
     */
    where?: VarianteProdutoWhereInput
  }

  /**
   * VarianteProduto upsert
   */
  export type VarianteProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VarianteProduto
     */
    select?: VarianteProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VarianteProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the VarianteProduto to update in case it exists.
     */
    where: VarianteProdutoWhereUniqueInput
    /**
     * In case the VarianteProduto found by the `where` argument doesn't exist, create a new VarianteProduto with this data.
     */
    create: XOR<VarianteProdutoCreateInput, VarianteProdutoUncheckedCreateInput>
    /**
     * In case the VarianteProduto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VarianteProdutoUpdateInput, VarianteProdutoUncheckedUpdateInput>
  }

  /**
   * VarianteProduto delete
   */
  export type VarianteProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VarianteProduto
     */
    select?: VarianteProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VarianteProdutoInclude<ExtArgs> | null
    /**
     * Filter which VarianteProduto to delete.
     */
    where: VarianteProdutoWhereUniqueInput
  }

  /**
   * VarianteProduto deleteMany
   */
  export type VarianteProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VarianteProdutos to delete
     */
    where?: VarianteProdutoWhereInput
  }

  /**
   * VarianteProduto without action
   */
  export type VarianteProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VarianteProduto
     */
    select?: VarianteProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VarianteProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Vinculacao
   */

  export type AggregateVinculacao = {
    _count: VinculacaoCountAggregateOutputType | null
    _avg: VinculacaoAvgAggregateOutputType | null
    _sum: VinculacaoSumAggregateOutputType | null
    _min: VinculacaoMinAggregateOutputType | null
    _max: VinculacaoMaxAggregateOutputType | null
  }

  export type VinculacaoAvgAggregateOutputType = {
    comissaoPercent: number | null
  }

  export type VinculacaoSumAggregateOutputType = {
    comissaoPercent: number | null
  }

  export type VinculacaoMinAggregateOutputType = {
    id: string | null
    fornecedorId: string | null
    representanteId: string | null
    status: $Enums.StatusVinculacao | null
    comissaoPercent: number | null
    precoEspecial: boolean | null
    acessoRelatorios: boolean | null
    dataVinculacao: Date | null
    dataInativacao: Date | null
    motivoInativacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VinculacaoMaxAggregateOutputType = {
    id: string | null
    fornecedorId: string | null
    representanteId: string | null
    status: $Enums.StatusVinculacao | null
    comissaoPercent: number | null
    precoEspecial: boolean | null
    acessoRelatorios: boolean | null
    dataVinculacao: Date | null
    dataInativacao: Date | null
    motivoInativacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VinculacaoCountAggregateOutputType = {
    id: number
    fornecedorId: number
    representanteId: number
    status: number
    comissaoPercent: number
    precoEspecial: number
    acessoRelatorios: number
    configuracoes: number
    dataVinculacao: number
    dataInativacao: number
    motivoInativacao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VinculacaoAvgAggregateInputType = {
    comissaoPercent?: true
  }

  export type VinculacaoSumAggregateInputType = {
    comissaoPercent?: true
  }

  export type VinculacaoMinAggregateInputType = {
    id?: true
    fornecedorId?: true
    representanteId?: true
    status?: true
    comissaoPercent?: true
    precoEspecial?: true
    acessoRelatorios?: true
    dataVinculacao?: true
    dataInativacao?: true
    motivoInativacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VinculacaoMaxAggregateInputType = {
    id?: true
    fornecedorId?: true
    representanteId?: true
    status?: true
    comissaoPercent?: true
    precoEspecial?: true
    acessoRelatorios?: true
    dataVinculacao?: true
    dataInativacao?: true
    motivoInativacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VinculacaoCountAggregateInputType = {
    id?: true
    fornecedorId?: true
    representanteId?: true
    status?: true
    comissaoPercent?: true
    precoEspecial?: true
    acessoRelatorios?: true
    configuracoes?: true
    dataVinculacao?: true
    dataInativacao?: true
    motivoInativacao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VinculacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vinculacao to aggregate.
     */
    where?: VinculacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vinculacaos to fetch.
     */
    orderBy?: VinculacaoOrderByWithRelationInput | VinculacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VinculacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vinculacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vinculacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vinculacaos
    **/
    _count?: true | VinculacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VinculacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VinculacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VinculacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VinculacaoMaxAggregateInputType
  }

  export type GetVinculacaoAggregateType<T extends VinculacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateVinculacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVinculacao[P]>
      : GetScalarType<T[P], AggregateVinculacao[P]>
  }




  export type VinculacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VinculacaoWhereInput
    orderBy?: VinculacaoOrderByWithAggregationInput | VinculacaoOrderByWithAggregationInput[]
    by: VinculacaoScalarFieldEnum[] | VinculacaoScalarFieldEnum
    having?: VinculacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VinculacaoCountAggregateInputType | true
    _avg?: VinculacaoAvgAggregateInputType
    _sum?: VinculacaoSumAggregateInputType
    _min?: VinculacaoMinAggregateInputType
    _max?: VinculacaoMaxAggregateInputType
  }

  export type VinculacaoGroupByOutputType = {
    id: string
    fornecedorId: string
    representanteId: string
    status: $Enums.StatusVinculacao
    comissaoPercent: number
    precoEspecial: boolean
    acessoRelatorios: boolean
    configuracoes: JsonValue | null
    dataVinculacao: Date
    dataInativacao: Date | null
    motivoInativacao: string | null
    createdAt: Date
    updatedAt: Date
    _count: VinculacaoCountAggregateOutputType | null
    _avg: VinculacaoAvgAggregateOutputType | null
    _sum: VinculacaoSumAggregateOutputType | null
    _min: VinculacaoMinAggregateOutputType | null
    _max: VinculacaoMaxAggregateOutputType | null
  }

  type GetVinculacaoGroupByPayload<T extends VinculacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VinculacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VinculacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VinculacaoGroupByOutputType[P]>
            : GetScalarType<T[P], VinculacaoGroupByOutputType[P]>
        }
      >
    >


  export type VinculacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fornecedorId?: boolean
    representanteId?: boolean
    status?: boolean
    comissaoPercent?: boolean
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: boolean
    dataVinculacao?: boolean
    dataInativacao?: boolean
    motivoInativacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
    comissoes?: boolean | Vinculacao$comissoesArgs<ExtArgs>
    _count?: boolean | VinculacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vinculacao"]>

  export type VinculacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fornecedorId?: boolean
    representanteId?: boolean
    status?: boolean
    comissaoPercent?: boolean
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: boolean
    dataVinculacao?: boolean
    dataInativacao?: boolean
    motivoInativacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vinculacao"]>

  export type VinculacaoSelectScalar = {
    id?: boolean
    fornecedorId?: boolean
    representanteId?: boolean
    status?: boolean
    comissaoPercent?: boolean
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: boolean
    dataVinculacao?: boolean
    dataInativacao?: boolean
    motivoInativacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VinculacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
    comissoes?: boolean | Vinculacao$comissoesArgs<ExtArgs>
    _count?: boolean | VinculacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VinculacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
  }

  export type $VinculacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vinculacao"
    objects: {
      fornecedor: Prisma.$FornecedorPayload<ExtArgs>
      representante: Prisma.$RepresentantePayload<ExtArgs>
      comissoes: Prisma.$ComissaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fornecedorId: string
      representanteId: string
      status: $Enums.StatusVinculacao
      comissaoPercent: number
      precoEspecial: boolean
      acessoRelatorios: boolean
      configuracoes: Prisma.JsonValue | null
      dataVinculacao: Date
      dataInativacao: Date | null
      motivoInativacao: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vinculacao"]>
    composites: {}
  }

  type VinculacaoGetPayload<S extends boolean | null | undefined | VinculacaoDefaultArgs> = $Result.GetResult<Prisma.$VinculacaoPayload, S>

  type VinculacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VinculacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VinculacaoCountAggregateInputType | true
    }

  export interface VinculacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vinculacao'], meta: { name: 'Vinculacao' } }
    /**
     * Find zero or one Vinculacao that matches the filter.
     * @param {VinculacaoFindUniqueArgs} args - Arguments to find a Vinculacao
     * @example
     * // Get one Vinculacao
     * const vinculacao = await prisma.vinculacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VinculacaoFindUniqueArgs>(args: SelectSubset<T, VinculacaoFindUniqueArgs<ExtArgs>>): Prisma__VinculacaoClient<$Result.GetResult<Prisma.$VinculacaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vinculacao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VinculacaoFindUniqueOrThrowArgs} args - Arguments to find a Vinculacao
     * @example
     * // Get one Vinculacao
     * const vinculacao = await prisma.vinculacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VinculacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, VinculacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VinculacaoClient<$Result.GetResult<Prisma.$VinculacaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vinculacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculacaoFindFirstArgs} args - Arguments to find a Vinculacao
     * @example
     * // Get one Vinculacao
     * const vinculacao = await prisma.vinculacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VinculacaoFindFirstArgs>(args?: SelectSubset<T, VinculacaoFindFirstArgs<ExtArgs>>): Prisma__VinculacaoClient<$Result.GetResult<Prisma.$VinculacaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vinculacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculacaoFindFirstOrThrowArgs} args - Arguments to find a Vinculacao
     * @example
     * // Get one Vinculacao
     * const vinculacao = await prisma.vinculacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VinculacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, VinculacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VinculacaoClient<$Result.GetResult<Prisma.$VinculacaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vinculacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vinculacaos
     * const vinculacaos = await prisma.vinculacao.findMany()
     * 
     * // Get first 10 Vinculacaos
     * const vinculacaos = await prisma.vinculacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vinculacaoWithIdOnly = await prisma.vinculacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VinculacaoFindManyArgs>(args?: SelectSubset<T, VinculacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinculacaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vinculacao.
     * @param {VinculacaoCreateArgs} args - Arguments to create a Vinculacao.
     * @example
     * // Create one Vinculacao
     * const Vinculacao = await prisma.vinculacao.create({
     *   data: {
     *     // ... data to create a Vinculacao
     *   }
     * })
     * 
     */
    create<T extends VinculacaoCreateArgs>(args: SelectSubset<T, VinculacaoCreateArgs<ExtArgs>>): Prisma__VinculacaoClient<$Result.GetResult<Prisma.$VinculacaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vinculacaos.
     * @param {VinculacaoCreateManyArgs} args - Arguments to create many Vinculacaos.
     * @example
     * // Create many Vinculacaos
     * const vinculacao = await prisma.vinculacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VinculacaoCreateManyArgs>(args?: SelectSubset<T, VinculacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vinculacaos and returns the data saved in the database.
     * @param {VinculacaoCreateManyAndReturnArgs} args - Arguments to create many Vinculacaos.
     * @example
     * // Create many Vinculacaos
     * const vinculacao = await prisma.vinculacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vinculacaos and only return the `id`
     * const vinculacaoWithIdOnly = await prisma.vinculacao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VinculacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, VinculacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinculacaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vinculacao.
     * @param {VinculacaoDeleteArgs} args - Arguments to delete one Vinculacao.
     * @example
     * // Delete one Vinculacao
     * const Vinculacao = await prisma.vinculacao.delete({
     *   where: {
     *     // ... filter to delete one Vinculacao
     *   }
     * })
     * 
     */
    delete<T extends VinculacaoDeleteArgs>(args: SelectSubset<T, VinculacaoDeleteArgs<ExtArgs>>): Prisma__VinculacaoClient<$Result.GetResult<Prisma.$VinculacaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vinculacao.
     * @param {VinculacaoUpdateArgs} args - Arguments to update one Vinculacao.
     * @example
     * // Update one Vinculacao
     * const vinculacao = await prisma.vinculacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VinculacaoUpdateArgs>(args: SelectSubset<T, VinculacaoUpdateArgs<ExtArgs>>): Prisma__VinculacaoClient<$Result.GetResult<Prisma.$VinculacaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vinculacaos.
     * @param {VinculacaoDeleteManyArgs} args - Arguments to filter Vinculacaos to delete.
     * @example
     * // Delete a few Vinculacaos
     * const { count } = await prisma.vinculacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VinculacaoDeleteManyArgs>(args?: SelectSubset<T, VinculacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vinculacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vinculacaos
     * const vinculacao = await prisma.vinculacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VinculacaoUpdateManyArgs>(args: SelectSubset<T, VinculacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vinculacao.
     * @param {VinculacaoUpsertArgs} args - Arguments to update or create a Vinculacao.
     * @example
     * // Update or create a Vinculacao
     * const vinculacao = await prisma.vinculacao.upsert({
     *   create: {
     *     // ... data to create a Vinculacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vinculacao we want to update
     *   }
     * })
     */
    upsert<T extends VinculacaoUpsertArgs>(args: SelectSubset<T, VinculacaoUpsertArgs<ExtArgs>>): Prisma__VinculacaoClient<$Result.GetResult<Prisma.$VinculacaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vinculacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculacaoCountArgs} args - Arguments to filter Vinculacaos to count.
     * @example
     * // Count the number of Vinculacaos
     * const count = await prisma.vinculacao.count({
     *   where: {
     *     // ... the filter for the Vinculacaos we want to count
     *   }
     * })
    **/
    count<T extends VinculacaoCountArgs>(
      args?: Subset<T, VinculacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VinculacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vinculacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VinculacaoAggregateArgs>(args: Subset<T, VinculacaoAggregateArgs>): Prisma.PrismaPromise<GetVinculacaoAggregateType<T>>

    /**
     * Group by Vinculacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VinculacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VinculacaoGroupByArgs['orderBy'] }
        : { orderBy?: VinculacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VinculacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVinculacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vinculacao model
   */
  readonly fields: VinculacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vinculacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VinculacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fornecedor<T extends FornecedorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FornecedorDefaultArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    representante<T extends RepresentanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepresentanteDefaultArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    comissoes<T extends Vinculacao$comissoesArgs<ExtArgs> = {}>(args?: Subset<T, Vinculacao$comissoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComissaoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vinculacao model
   */ 
  interface VinculacaoFieldRefs {
    readonly id: FieldRef<"Vinculacao", 'String'>
    readonly fornecedorId: FieldRef<"Vinculacao", 'String'>
    readonly representanteId: FieldRef<"Vinculacao", 'String'>
    readonly status: FieldRef<"Vinculacao", 'StatusVinculacao'>
    readonly comissaoPercent: FieldRef<"Vinculacao", 'Float'>
    readonly precoEspecial: FieldRef<"Vinculacao", 'Boolean'>
    readonly acessoRelatorios: FieldRef<"Vinculacao", 'Boolean'>
    readonly configuracoes: FieldRef<"Vinculacao", 'Json'>
    readonly dataVinculacao: FieldRef<"Vinculacao", 'DateTime'>
    readonly dataInativacao: FieldRef<"Vinculacao", 'DateTime'>
    readonly motivoInativacao: FieldRef<"Vinculacao", 'String'>
    readonly createdAt: FieldRef<"Vinculacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Vinculacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vinculacao findUnique
   */
  export type VinculacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculacao
     */
    select?: VinculacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculacaoInclude<ExtArgs> | null
    /**
     * Filter, which Vinculacao to fetch.
     */
    where: VinculacaoWhereUniqueInput
  }

  /**
   * Vinculacao findUniqueOrThrow
   */
  export type VinculacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculacao
     */
    select?: VinculacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculacaoInclude<ExtArgs> | null
    /**
     * Filter, which Vinculacao to fetch.
     */
    where: VinculacaoWhereUniqueInput
  }

  /**
   * Vinculacao findFirst
   */
  export type VinculacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculacao
     */
    select?: VinculacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculacaoInclude<ExtArgs> | null
    /**
     * Filter, which Vinculacao to fetch.
     */
    where?: VinculacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vinculacaos to fetch.
     */
    orderBy?: VinculacaoOrderByWithRelationInput | VinculacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vinculacaos.
     */
    cursor?: VinculacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vinculacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vinculacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vinculacaos.
     */
    distinct?: VinculacaoScalarFieldEnum | VinculacaoScalarFieldEnum[]
  }

  /**
   * Vinculacao findFirstOrThrow
   */
  export type VinculacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculacao
     */
    select?: VinculacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculacaoInclude<ExtArgs> | null
    /**
     * Filter, which Vinculacao to fetch.
     */
    where?: VinculacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vinculacaos to fetch.
     */
    orderBy?: VinculacaoOrderByWithRelationInput | VinculacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vinculacaos.
     */
    cursor?: VinculacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vinculacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vinculacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vinculacaos.
     */
    distinct?: VinculacaoScalarFieldEnum | VinculacaoScalarFieldEnum[]
  }

  /**
   * Vinculacao findMany
   */
  export type VinculacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculacao
     */
    select?: VinculacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculacaoInclude<ExtArgs> | null
    /**
     * Filter, which Vinculacaos to fetch.
     */
    where?: VinculacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vinculacaos to fetch.
     */
    orderBy?: VinculacaoOrderByWithRelationInput | VinculacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vinculacaos.
     */
    cursor?: VinculacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vinculacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vinculacaos.
     */
    skip?: number
    distinct?: VinculacaoScalarFieldEnum | VinculacaoScalarFieldEnum[]
  }

  /**
   * Vinculacao create
   */
  export type VinculacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculacao
     */
    select?: VinculacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Vinculacao.
     */
    data: XOR<VinculacaoCreateInput, VinculacaoUncheckedCreateInput>
  }

  /**
   * Vinculacao createMany
   */
  export type VinculacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vinculacaos.
     */
    data: VinculacaoCreateManyInput | VinculacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vinculacao createManyAndReturn
   */
  export type VinculacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculacao
     */
    select?: VinculacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vinculacaos.
     */
    data: VinculacaoCreateManyInput | VinculacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vinculacao update
   */
  export type VinculacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculacao
     */
    select?: VinculacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Vinculacao.
     */
    data: XOR<VinculacaoUpdateInput, VinculacaoUncheckedUpdateInput>
    /**
     * Choose, which Vinculacao to update.
     */
    where: VinculacaoWhereUniqueInput
  }

  /**
   * Vinculacao updateMany
   */
  export type VinculacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vinculacaos.
     */
    data: XOR<VinculacaoUpdateManyMutationInput, VinculacaoUncheckedUpdateManyInput>
    /**
     * Filter which Vinculacaos to update
     */
    where?: VinculacaoWhereInput
  }

  /**
   * Vinculacao upsert
   */
  export type VinculacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculacao
     */
    select?: VinculacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Vinculacao to update in case it exists.
     */
    where: VinculacaoWhereUniqueInput
    /**
     * In case the Vinculacao found by the `where` argument doesn't exist, create a new Vinculacao with this data.
     */
    create: XOR<VinculacaoCreateInput, VinculacaoUncheckedCreateInput>
    /**
     * In case the Vinculacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VinculacaoUpdateInput, VinculacaoUncheckedUpdateInput>
  }

  /**
   * Vinculacao delete
   */
  export type VinculacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculacao
     */
    select?: VinculacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculacaoInclude<ExtArgs> | null
    /**
     * Filter which Vinculacao to delete.
     */
    where: VinculacaoWhereUniqueInput
  }

  /**
   * Vinculacao deleteMany
   */
  export type VinculacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vinculacaos to delete
     */
    where?: VinculacaoWhereInput
  }

  /**
   * Vinculacao.comissoes
   */
  export type Vinculacao$comissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoInclude<ExtArgs> | null
    where?: ComissaoWhereInput
    orderBy?: ComissaoOrderByWithRelationInput | ComissaoOrderByWithRelationInput[]
    cursor?: ComissaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComissaoScalarFieldEnum | ComissaoScalarFieldEnum[]
  }

  /**
   * Vinculacao without action
   */
  export type VinculacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vinculacao
     */
    select?: VinculacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinculacaoInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    valorTotal: number | null
  }

  export type PedidoSumAggregateOutputType = {
    valorTotal: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: string | null
    clienteId: string | null
    representanteId: string | null
    dataPedido: Date | null
    status: $Enums.StatusPedido | null
    valorTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: string | null
    clienteId: string | null
    representanteId: string | null
    dataPedido: Date | null
    status: $Enums.StatusPedido | null
    valorTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    clienteId: number
    representanteId: number
    dataPedido: number
    status: number
    valorTotal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    valorTotal?: true
  }

  export type PedidoSumAggregateInputType = {
    valorTotal?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    clienteId?: true
    representanteId?: true
    dataPedido?: true
    status?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    clienteId?: true
    representanteId?: true
    dataPedido?: true
    status?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    clienteId?: true
    representanteId?: true
    dataPedido?: true
    status?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: string
    clienteId: string
    representanteId: string | null
    dataPedido: Date
    status: $Enums.StatusPedido
    valorTotal: number
    createdAt: Date
    updatedAt: Date
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    representanteId?: boolean
    dataPedido?: boolean
    status?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    representante?: boolean | Pedido$representanteArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    comissoes?: boolean | Pedido$comissoesArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    representanteId?: boolean
    dataPedido?: boolean
    status?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    representante?: boolean | Pedido$representanteArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    clienteId?: boolean
    representanteId?: boolean
    dataPedido?: boolean
    status?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    representante?: boolean | Pedido$representanteArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    comissoes?: boolean | Pedido$comissoesArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    representante?: boolean | Pedido$representanteArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      representante: Prisma.$RepresentantePayload<ExtArgs> | null
      itens: Prisma.$ItemPedidoPayload<ExtArgs>[]
      comissoes: Prisma.$ComissaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clienteId: string
      representanteId: string | null
      dataPedido: Date
      status: $Enums.StatusPedido
      valorTotal: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    representante<T extends Pedido$representanteArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$representanteArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    itens<T extends Pedido$itensArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany"> | Null>
    comissoes<T extends Pedido$comissoesArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$comissoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComissaoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */ 
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'String'>
    readonly clienteId: FieldRef<"Pedido", 'String'>
    readonly representanteId: FieldRef<"Pedido", 'String'>
    readonly dataPedido: FieldRef<"Pedido", 'DateTime'>
    readonly status: FieldRef<"Pedido", 'StatusPedido'>
    readonly valorTotal: FieldRef<"Pedido", 'Float'>
    readonly createdAt: FieldRef<"Pedido", 'DateTime'>
    readonly updatedAt: FieldRef<"Pedido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
  }

  /**
   * Pedido.representante
   */
  export type Pedido$representanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    where?: RepresentanteWhereInput
  }

  /**
   * Pedido.itens
   */
  export type Pedido$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Pedido.comissoes
   */
  export type Pedido$comissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoInclude<ExtArgs> | null
    where?: ComissaoWhereInput
    orderBy?: ComissaoOrderByWithRelationInput | ComissaoOrderByWithRelationInput[]
    cursor?: ComissaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComissaoScalarFieldEnum | ComissaoScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model Convite
   */

  export type AggregateConvite = {
    _count: ConviteCountAggregateOutputType | null
    _avg: ConviteAvgAggregateOutputType | null
    _sum: ConviteSumAggregateOutputType | null
    _min: ConviteMinAggregateOutputType | null
    _max: ConviteMaxAggregateOutputType | null
  }

  export type ConviteAvgAggregateOutputType = {
    comissaoPercent: number | null
  }

  export type ConviteSumAggregateOutputType = {
    comissaoPercent: number | null
  }

  export type ConviteMinAggregateOutputType = {
    id: string | null
    remetenteId: string | null
    destinatarioId: string | null
    tipoRemetente: $Enums.TipoConvite | null
    fornecedorId: string | null
    representanteId: string | null
    status: $Enums.StatusConvite | null
    mensagem: string | null
    comissaoPercent: number | null
    dataEnvio: Date | null
    dataResposta: Date | null
    motivoRecusa: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConviteMaxAggregateOutputType = {
    id: string | null
    remetenteId: string | null
    destinatarioId: string | null
    tipoRemetente: $Enums.TipoConvite | null
    fornecedorId: string | null
    representanteId: string | null
    status: $Enums.StatusConvite | null
    mensagem: string | null
    comissaoPercent: number | null
    dataEnvio: Date | null
    dataResposta: Date | null
    motivoRecusa: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConviteCountAggregateOutputType = {
    id: number
    remetenteId: number
    destinatarioId: number
    tipoRemetente: number
    fornecedorId: number
    representanteId: number
    status: number
    mensagem: number
    comissaoPercent: number
    configuracoes: number
    dataEnvio: number
    dataResposta: number
    motivoRecusa: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConviteAvgAggregateInputType = {
    comissaoPercent?: true
  }

  export type ConviteSumAggregateInputType = {
    comissaoPercent?: true
  }

  export type ConviteMinAggregateInputType = {
    id?: true
    remetenteId?: true
    destinatarioId?: true
    tipoRemetente?: true
    fornecedorId?: true
    representanteId?: true
    status?: true
    mensagem?: true
    comissaoPercent?: true
    dataEnvio?: true
    dataResposta?: true
    motivoRecusa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConviteMaxAggregateInputType = {
    id?: true
    remetenteId?: true
    destinatarioId?: true
    tipoRemetente?: true
    fornecedorId?: true
    representanteId?: true
    status?: true
    mensagem?: true
    comissaoPercent?: true
    dataEnvio?: true
    dataResposta?: true
    motivoRecusa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConviteCountAggregateInputType = {
    id?: true
    remetenteId?: true
    destinatarioId?: true
    tipoRemetente?: true
    fornecedorId?: true
    representanteId?: true
    status?: true
    mensagem?: true
    comissaoPercent?: true
    configuracoes?: true
    dataEnvio?: true
    dataResposta?: true
    motivoRecusa?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Convite to aggregate.
     */
    where?: ConviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convites to fetch.
     */
    orderBy?: ConviteOrderByWithRelationInput | ConviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Convites
    **/
    _count?: true | ConviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConviteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConviteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConviteMaxAggregateInputType
  }

  export type GetConviteAggregateType<T extends ConviteAggregateArgs> = {
        [P in keyof T & keyof AggregateConvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConvite[P]>
      : GetScalarType<T[P], AggregateConvite[P]>
  }




  export type ConviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConviteWhereInput
    orderBy?: ConviteOrderByWithAggregationInput | ConviteOrderByWithAggregationInput[]
    by: ConviteScalarFieldEnum[] | ConviteScalarFieldEnum
    having?: ConviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConviteCountAggregateInputType | true
    _avg?: ConviteAvgAggregateInputType
    _sum?: ConviteSumAggregateInputType
    _min?: ConviteMinAggregateInputType
    _max?: ConviteMaxAggregateInputType
  }

  export type ConviteGroupByOutputType = {
    id: string
    remetenteId: string
    destinatarioId: string
    tipoRemetente: $Enums.TipoConvite
    fornecedorId: string | null
    representanteId: string | null
    status: $Enums.StatusConvite
    mensagem: string | null
    comissaoPercent: number | null
    configuracoes: JsonValue | null
    dataEnvio: Date
    dataResposta: Date | null
    motivoRecusa: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConviteCountAggregateOutputType | null
    _avg: ConviteAvgAggregateOutputType | null
    _sum: ConviteSumAggregateOutputType | null
    _min: ConviteMinAggregateOutputType | null
    _max: ConviteMaxAggregateOutputType | null
  }

  type GetConviteGroupByPayload<T extends ConviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConviteGroupByOutputType[P]>
            : GetScalarType<T[P], ConviteGroupByOutputType[P]>
        }
      >
    >


  export type ConviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    remetenteId?: boolean
    destinatarioId?: boolean
    tipoRemetente?: boolean
    fornecedorId?: boolean
    representanteId?: boolean
    status?: boolean
    mensagem?: boolean
    comissaoPercent?: boolean
    configuracoes?: boolean
    dataEnvio?: boolean
    dataResposta?: boolean
    motivoRecusa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | Convite$fornecedorArgs<ExtArgs>
    representante?: boolean | Convite$representanteArgs<ExtArgs>
  }, ExtArgs["result"]["convite"]>

  export type ConviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    remetenteId?: boolean
    destinatarioId?: boolean
    tipoRemetente?: boolean
    fornecedorId?: boolean
    representanteId?: boolean
    status?: boolean
    mensagem?: boolean
    comissaoPercent?: boolean
    configuracoes?: boolean
    dataEnvio?: boolean
    dataResposta?: boolean
    motivoRecusa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | Convite$fornecedorArgs<ExtArgs>
    representante?: boolean | Convite$representanteArgs<ExtArgs>
  }, ExtArgs["result"]["convite"]>

  export type ConviteSelectScalar = {
    id?: boolean
    remetenteId?: boolean
    destinatarioId?: boolean
    tipoRemetente?: boolean
    fornecedorId?: boolean
    representanteId?: boolean
    status?: boolean
    mensagem?: boolean
    comissaoPercent?: boolean
    configuracoes?: boolean
    dataEnvio?: boolean
    dataResposta?: boolean
    motivoRecusa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | Convite$fornecedorArgs<ExtArgs>
    representante?: boolean | Convite$representanteArgs<ExtArgs>
  }
  export type ConviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | Convite$fornecedorArgs<ExtArgs>
    representante?: boolean | Convite$representanteArgs<ExtArgs>
  }

  export type $ConvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Convite"
    objects: {
      fornecedor: Prisma.$FornecedorPayload<ExtArgs> | null
      representante: Prisma.$RepresentantePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      remetenteId: string
      destinatarioId: string
      tipoRemetente: $Enums.TipoConvite
      fornecedorId: string | null
      representanteId: string | null
      status: $Enums.StatusConvite
      mensagem: string | null
      comissaoPercent: number | null
      configuracoes: Prisma.JsonValue | null
      dataEnvio: Date
      dataResposta: Date | null
      motivoRecusa: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["convite"]>
    composites: {}
  }

  type ConviteGetPayload<S extends boolean | null | undefined | ConviteDefaultArgs> = $Result.GetResult<Prisma.$ConvitePayload, S>

  type ConviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConviteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConviteCountAggregateInputType | true
    }

  export interface ConviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Convite'], meta: { name: 'Convite' } }
    /**
     * Find zero or one Convite that matches the filter.
     * @param {ConviteFindUniqueArgs} args - Arguments to find a Convite
     * @example
     * // Get one Convite
     * const convite = await prisma.convite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConviteFindUniqueArgs>(args: SelectSubset<T, ConviteFindUniqueArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Convite that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConviteFindUniqueOrThrowArgs} args - Arguments to find a Convite
     * @example
     * // Get one Convite
     * const convite = await prisma.convite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConviteFindUniqueOrThrowArgs>(args: SelectSubset<T, ConviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Convite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteFindFirstArgs} args - Arguments to find a Convite
     * @example
     * // Get one Convite
     * const convite = await prisma.convite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConviteFindFirstArgs>(args?: SelectSubset<T, ConviteFindFirstArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Convite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteFindFirstOrThrowArgs} args - Arguments to find a Convite
     * @example
     * // Get one Convite
     * const convite = await prisma.convite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConviteFindFirstOrThrowArgs>(args?: SelectSubset<T, ConviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Convites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Convites
     * const convites = await prisma.convite.findMany()
     * 
     * // Get first 10 Convites
     * const convites = await prisma.convite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conviteWithIdOnly = await prisma.convite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConviteFindManyArgs>(args?: SelectSubset<T, ConviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Convite.
     * @param {ConviteCreateArgs} args - Arguments to create a Convite.
     * @example
     * // Create one Convite
     * const Convite = await prisma.convite.create({
     *   data: {
     *     // ... data to create a Convite
     *   }
     * })
     * 
     */
    create<T extends ConviteCreateArgs>(args: SelectSubset<T, ConviteCreateArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Convites.
     * @param {ConviteCreateManyArgs} args - Arguments to create many Convites.
     * @example
     * // Create many Convites
     * const convite = await prisma.convite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConviteCreateManyArgs>(args?: SelectSubset<T, ConviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Convites and returns the data saved in the database.
     * @param {ConviteCreateManyAndReturnArgs} args - Arguments to create many Convites.
     * @example
     * // Create many Convites
     * const convite = await prisma.convite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Convites and only return the `id`
     * const conviteWithIdOnly = await prisma.convite.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConviteCreateManyAndReturnArgs>(args?: SelectSubset<T, ConviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Convite.
     * @param {ConviteDeleteArgs} args - Arguments to delete one Convite.
     * @example
     * // Delete one Convite
     * const Convite = await prisma.convite.delete({
     *   where: {
     *     // ... filter to delete one Convite
     *   }
     * })
     * 
     */
    delete<T extends ConviteDeleteArgs>(args: SelectSubset<T, ConviteDeleteArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Convite.
     * @param {ConviteUpdateArgs} args - Arguments to update one Convite.
     * @example
     * // Update one Convite
     * const convite = await prisma.convite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConviteUpdateArgs>(args: SelectSubset<T, ConviteUpdateArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Convites.
     * @param {ConviteDeleteManyArgs} args - Arguments to filter Convites to delete.
     * @example
     * // Delete a few Convites
     * const { count } = await prisma.convite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConviteDeleteManyArgs>(args?: SelectSubset<T, ConviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Convites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Convites
     * const convite = await prisma.convite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConviteUpdateManyArgs>(args: SelectSubset<T, ConviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Convite.
     * @param {ConviteUpsertArgs} args - Arguments to update or create a Convite.
     * @example
     * // Update or create a Convite
     * const convite = await prisma.convite.upsert({
     *   create: {
     *     // ... data to create a Convite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Convite we want to update
     *   }
     * })
     */
    upsert<T extends ConviteUpsertArgs>(args: SelectSubset<T, ConviteUpsertArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Convites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteCountArgs} args - Arguments to filter Convites to count.
     * @example
     * // Count the number of Convites
     * const count = await prisma.convite.count({
     *   where: {
     *     // ... the filter for the Convites we want to count
     *   }
     * })
    **/
    count<T extends ConviteCountArgs>(
      args?: Subset<T, ConviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Convite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConviteAggregateArgs>(args: Subset<T, ConviteAggregateArgs>): Prisma.PrismaPromise<GetConviteAggregateType<T>>

    /**
     * Group by Convite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConviteGroupByArgs['orderBy'] }
        : { orderBy?: ConviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Convite model
   */
  readonly fields: ConviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Convite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fornecedor<T extends Convite$fornecedorArgs<ExtArgs> = {}>(args?: Subset<T, Convite$fornecedorArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    representante<T extends Convite$representanteArgs<ExtArgs> = {}>(args?: Subset<T, Convite$representanteArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Convite model
   */ 
  interface ConviteFieldRefs {
    readonly id: FieldRef<"Convite", 'String'>
    readonly remetenteId: FieldRef<"Convite", 'String'>
    readonly destinatarioId: FieldRef<"Convite", 'String'>
    readonly tipoRemetente: FieldRef<"Convite", 'TipoConvite'>
    readonly fornecedorId: FieldRef<"Convite", 'String'>
    readonly representanteId: FieldRef<"Convite", 'String'>
    readonly status: FieldRef<"Convite", 'StatusConvite'>
    readonly mensagem: FieldRef<"Convite", 'String'>
    readonly comissaoPercent: FieldRef<"Convite", 'Float'>
    readonly configuracoes: FieldRef<"Convite", 'Json'>
    readonly dataEnvio: FieldRef<"Convite", 'DateTime'>
    readonly dataResposta: FieldRef<"Convite", 'DateTime'>
    readonly motivoRecusa: FieldRef<"Convite", 'String'>
    readonly createdAt: FieldRef<"Convite", 'DateTime'>
    readonly updatedAt: FieldRef<"Convite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Convite findUnique
   */
  export type ConviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * Filter, which Convite to fetch.
     */
    where: ConviteWhereUniqueInput
  }

  /**
   * Convite findUniqueOrThrow
   */
  export type ConviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * Filter, which Convite to fetch.
     */
    where: ConviteWhereUniqueInput
  }

  /**
   * Convite findFirst
   */
  export type ConviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * Filter, which Convite to fetch.
     */
    where?: ConviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convites to fetch.
     */
    orderBy?: ConviteOrderByWithRelationInput | ConviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Convites.
     */
    cursor?: ConviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Convites.
     */
    distinct?: ConviteScalarFieldEnum | ConviteScalarFieldEnum[]
  }

  /**
   * Convite findFirstOrThrow
   */
  export type ConviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * Filter, which Convite to fetch.
     */
    where?: ConviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convites to fetch.
     */
    orderBy?: ConviteOrderByWithRelationInput | ConviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Convites.
     */
    cursor?: ConviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Convites.
     */
    distinct?: ConviteScalarFieldEnum | ConviteScalarFieldEnum[]
  }

  /**
   * Convite findMany
   */
  export type ConviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * Filter, which Convites to fetch.
     */
    where?: ConviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convites to fetch.
     */
    orderBy?: ConviteOrderByWithRelationInput | ConviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Convites.
     */
    cursor?: ConviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convites.
     */
    skip?: number
    distinct?: ConviteScalarFieldEnum | ConviteScalarFieldEnum[]
  }

  /**
   * Convite create
   */
  export type ConviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * The data needed to create a Convite.
     */
    data: XOR<ConviteCreateInput, ConviteUncheckedCreateInput>
  }

  /**
   * Convite createMany
   */
  export type ConviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Convites.
     */
    data: ConviteCreateManyInput | ConviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Convite createManyAndReturn
   */
  export type ConviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Convites.
     */
    data: ConviteCreateManyInput | ConviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Convite update
   */
  export type ConviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * The data needed to update a Convite.
     */
    data: XOR<ConviteUpdateInput, ConviteUncheckedUpdateInput>
    /**
     * Choose, which Convite to update.
     */
    where: ConviteWhereUniqueInput
  }

  /**
   * Convite updateMany
   */
  export type ConviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Convites.
     */
    data: XOR<ConviteUpdateManyMutationInput, ConviteUncheckedUpdateManyInput>
    /**
     * Filter which Convites to update
     */
    where?: ConviteWhereInput
  }

  /**
   * Convite upsert
   */
  export type ConviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * The filter to search for the Convite to update in case it exists.
     */
    where: ConviteWhereUniqueInput
    /**
     * In case the Convite found by the `where` argument doesn't exist, create a new Convite with this data.
     */
    create: XOR<ConviteCreateInput, ConviteUncheckedCreateInput>
    /**
     * In case the Convite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConviteUpdateInput, ConviteUncheckedUpdateInput>
  }

  /**
   * Convite delete
   */
  export type ConviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * Filter which Convite to delete.
     */
    where: ConviteWhereUniqueInput
  }

  /**
   * Convite deleteMany
   */
  export type ConviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Convites to delete
     */
    where?: ConviteWhereInput
  }

  /**
   * Convite.fornecedor
   */
  export type Convite$fornecedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    where?: FornecedorWhereInput
  }

  /**
   * Convite.representante
   */
  export type Convite$representanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    where?: RepresentanteWhereInput
  }

  /**
   * Convite without action
   */
  export type ConviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
  }


  /**
   * Model ItemPedido
   */

  export type AggregateItemPedido = {
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  export type ItemPedidoAvgAggregateOutputType = {
    quantidade: number | null
    precoUnitario: number | null
    desconto: number | null
    valorTotal: number | null
  }

  export type ItemPedidoSumAggregateOutputType = {
    quantidade: number | null
    precoUnitario: number | null
    desconto: number | null
    valorTotal: number | null
  }

  export type ItemPedidoMinAggregateOutputType = {
    id: string | null
    produtoId: string | null
    varianteId: string | null
    quantidade: number | null
    precoUnitario: number | null
    desconto: number | null
    valorTotal: number | null
    observacoes: string | null
    pedidoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemPedidoMaxAggregateOutputType = {
    id: string | null
    produtoId: string | null
    varianteId: string | null
    quantidade: number | null
    precoUnitario: number | null
    desconto: number | null
    valorTotal: number | null
    observacoes: string | null
    pedidoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemPedidoCountAggregateOutputType = {
    id: number
    produtoId: number
    varianteId: number
    quantidade: number
    precoUnitario: number
    desconto: number
    valorTotal: number
    observacoes: number
    pedidoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemPedidoAvgAggregateInputType = {
    quantidade?: true
    precoUnitario?: true
    desconto?: true
    valorTotal?: true
  }

  export type ItemPedidoSumAggregateInputType = {
    quantidade?: true
    precoUnitario?: true
    desconto?: true
    valorTotal?: true
  }

  export type ItemPedidoMinAggregateInputType = {
    id?: true
    produtoId?: true
    varianteId?: true
    quantidade?: true
    precoUnitario?: true
    desconto?: true
    valorTotal?: true
    observacoes?: true
    pedidoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemPedidoMaxAggregateInputType = {
    id?: true
    produtoId?: true
    varianteId?: true
    quantidade?: true
    precoUnitario?: true
    desconto?: true
    valorTotal?: true
    observacoes?: true
    pedidoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemPedidoCountAggregateInputType = {
    id?: true
    produtoId?: true
    varianteId?: true
    quantidade?: true
    precoUnitario?: true
    desconto?: true
    valorTotal?: true
    observacoes?: true
    pedidoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemPedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedido to aggregate.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemPedidos
    **/
    _count?: true | ItemPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type GetItemPedidoAggregateType<T extends ItemPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemPedido[P]>
      : GetScalarType<T[P], AggregateItemPedido[P]>
  }




  export type ItemPedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithAggregationInput | ItemPedidoOrderByWithAggregationInput[]
    by: ItemPedidoScalarFieldEnum[] | ItemPedidoScalarFieldEnum
    having?: ItemPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPedidoCountAggregateInputType | true
    _avg?: ItemPedidoAvgAggregateInputType
    _sum?: ItemPedidoSumAggregateInputType
    _min?: ItemPedidoMinAggregateInputType
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type ItemPedidoGroupByOutputType = {
    id: string
    produtoId: string
    varianteId: string | null
    quantidade: number
    precoUnitario: number
    desconto: number | null
    valorTotal: number
    observacoes: string | null
    pedidoId: string
    createdAt: Date
    updatedAt: Date
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  type GetItemPedidoGroupByPayload<T extends ItemPedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
        }
      >
    >


  export type ItemPedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtoId?: boolean
    varianteId?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    desconto?: boolean
    valorTotal?: boolean
    observacoes?: boolean
    pedidoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtoId?: boolean
    varianteId?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    desconto?: boolean
    valorTotal?: boolean
    observacoes?: boolean
    pedidoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectScalar = {
    id?: boolean
    produtoId?: boolean
    varianteId?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    desconto?: boolean
    valorTotal?: boolean
    observacoes?: boolean
    pedidoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemPedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type ItemPedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $ItemPedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemPedido"
    objects: {
      produto: Prisma.$ProdutoPayload<ExtArgs>
      pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      produtoId: string
      varianteId: string | null
      quantidade: number
      precoUnitario: number
      desconto: number | null
      valorTotal: number
      observacoes: string | null
      pedidoId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["itemPedido"]>
    composites: {}
  }

  type ItemPedidoGetPayload<S extends boolean | null | undefined | ItemPedidoDefaultArgs> = $Result.GetResult<Prisma.$ItemPedidoPayload, S>

  type ItemPedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemPedidoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemPedidoCountAggregateInputType | true
    }

  export interface ItemPedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemPedido'], meta: { name: 'ItemPedido' } }
    /**
     * Find zero or one ItemPedido that matches the filter.
     * @param {ItemPedidoFindUniqueArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemPedidoFindUniqueArgs>(args: SelectSubset<T, ItemPedidoFindUniqueArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ItemPedido that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemPedidoFindUniqueOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemPedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemPedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ItemPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemPedidoFindFirstArgs>(args?: SelectSubset<T, ItemPedidoFindFirstArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ItemPedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemPedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemPedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ItemPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany()
     * 
     * // Get first 10 ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemPedidoFindManyArgs>(args?: SelectSubset<T, ItemPedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ItemPedido.
     * @param {ItemPedidoCreateArgs} args - Arguments to create a ItemPedido.
     * @example
     * // Create one ItemPedido
     * const ItemPedido = await prisma.itemPedido.create({
     *   data: {
     *     // ... data to create a ItemPedido
     *   }
     * })
     * 
     */
    create<T extends ItemPedidoCreateArgs>(args: SelectSubset<T, ItemPedidoCreateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ItemPedidos.
     * @param {ItemPedidoCreateManyArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemPedidoCreateManyArgs>(args?: SelectSubset<T, ItemPedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemPedidos and returns the data saved in the database.
     * @param {ItemPedidoCreateManyAndReturnArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemPedidos and only return the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemPedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemPedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ItemPedido.
     * @param {ItemPedidoDeleteArgs} args - Arguments to delete one ItemPedido.
     * @example
     * // Delete one ItemPedido
     * const ItemPedido = await prisma.itemPedido.delete({
     *   where: {
     *     // ... filter to delete one ItemPedido
     *   }
     * })
     * 
     */
    delete<T extends ItemPedidoDeleteArgs>(args: SelectSubset<T, ItemPedidoDeleteArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ItemPedido.
     * @param {ItemPedidoUpdateArgs} args - Arguments to update one ItemPedido.
     * @example
     * // Update one ItemPedido
     * const itemPedido = await prisma.itemPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemPedidoUpdateArgs>(args: SelectSubset<T, ItemPedidoUpdateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ItemPedidos.
     * @param {ItemPedidoDeleteManyArgs} args - Arguments to filter ItemPedidos to delete.
     * @example
     * // Delete a few ItemPedidos
     * const { count } = await prisma.itemPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemPedidoDeleteManyArgs>(args?: SelectSubset<T, ItemPedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemPedidoUpdateManyArgs>(args: SelectSubset<T, ItemPedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemPedido.
     * @param {ItemPedidoUpsertArgs} args - Arguments to update or create a ItemPedido.
     * @example
     * // Update or create a ItemPedido
     * const itemPedido = await prisma.itemPedido.upsert({
     *   create: {
     *     // ... data to create a ItemPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemPedido we want to update
     *   }
     * })
     */
    upsert<T extends ItemPedidoUpsertArgs>(args: SelectSubset<T, ItemPedidoUpsertArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoCountArgs} args - Arguments to filter ItemPedidos to count.
     * @example
     * // Count the number of ItemPedidos
     * const count = await prisma.itemPedido.count({
     *   where: {
     *     // ... the filter for the ItemPedidos we want to count
     *   }
     * })
    **/
    count<T extends ItemPedidoCountArgs>(
      args?: Subset<T, ItemPedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemPedidoAggregateArgs>(args: Subset<T, ItemPedidoAggregateArgs>): Prisma.PrismaPromise<GetItemPedidoAggregateType<T>>

    /**
     * Group by ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPedidoGroupByArgs['orderBy'] }
        : { orderBy?: ItemPedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemPedido model
   */
  readonly fields: ItemPedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemPedido model
   */ 
  interface ItemPedidoFieldRefs {
    readonly id: FieldRef<"ItemPedido", 'String'>
    readonly produtoId: FieldRef<"ItemPedido", 'String'>
    readonly varianteId: FieldRef<"ItemPedido", 'String'>
    readonly quantidade: FieldRef<"ItemPedido", 'Int'>
    readonly precoUnitario: FieldRef<"ItemPedido", 'Float'>
    readonly desconto: FieldRef<"ItemPedido", 'Float'>
    readonly valorTotal: FieldRef<"ItemPedido", 'Float'>
    readonly observacoes: FieldRef<"ItemPedido", 'String'>
    readonly pedidoId: FieldRef<"ItemPedido", 'String'>
    readonly createdAt: FieldRef<"ItemPedido", 'DateTime'>
    readonly updatedAt: FieldRef<"ItemPedido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemPedido findUnique
   */
  export type ItemPedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findUniqueOrThrow
   */
  export type ItemPedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findFirst
   */
  export type ItemPedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findFirstOrThrow
   */
  export type ItemPedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findMany
   */
  export type ItemPedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedidos to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido create
   */
  export type ItemPedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemPedido.
     */
    data: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
  }

  /**
   * ItemPedido createMany
   */
  export type ItemPedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemPedido createManyAndReturn
   */
  export type ItemPedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido update
   */
  export type ItemPedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemPedido.
     */
    data: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
    /**
     * Choose, which ItemPedido to update.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido updateMany
   */
  export type ItemPedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
  }

  /**
   * ItemPedido upsert
   */
  export type ItemPedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemPedido to update in case it exists.
     */
    where: ItemPedidoWhereUniqueInput
    /**
     * In case the ItemPedido found by the `where` argument doesn't exist, create a new ItemPedido with this data.
     */
    create: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
    /**
     * In case the ItemPedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
  }

  /**
   * ItemPedido delete
   */
  export type ItemPedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter which ItemPedido to delete.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido deleteMany
   */
  export type ItemPedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedidos to delete
     */
    where?: ItemPedidoWhereInput
  }

  /**
   * ItemPedido without action
   */
  export type ItemPedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
  }


  /**
   * Model Comissao
   */

  export type AggregateComissao = {
    _count: ComissaoCountAggregateOutputType | null
    _avg: ComissaoAvgAggregateOutputType | null
    _sum: ComissaoSumAggregateOutputType | null
    _min: ComissaoMinAggregateOutputType | null
    _max: ComissaoMaxAggregateOutputType | null
  }

  export type ComissaoAvgAggregateOutputType = {
    percentual: number | null
    valorCalculado: number | null
  }

  export type ComissaoSumAggregateOutputType = {
    percentual: number | null
    valorCalculado: number | null
  }

  export type ComissaoMinAggregateOutputType = {
    id: string | null
    vinculacaoId: string | null
    representanteId: string | null
    pedidoId: string | null
    percentual: number | null
    valorCalculado: number | null
    status: $Enums.StatusComissao | null
    dataEfetivacao: Date | null
    dataPagamento: Date | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComissaoMaxAggregateOutputType = {
    id: string | null
    vinculacaoId: string | null
    representanteId: string | null
    pedidoId: string | null
    percentual: number | null
    valorCalculado: number | null
    status: $Enums.StatusComissao | null
    dataEfetivacao: Date | null
    dataPagamento: Date | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComissaoCountAggregateOutputType = {
    id: number
    vinculacaoId: number
    representanteId: number
    pedidoId: number
    percentual: number
    valorCalculado: number
    status: number
    dataEfetivacao: number
    dataPagamento: number
    observacoes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ComissaoAvgAggregateInputType = {
    percentual?: true
    valorCalculado?: true
  }

  export type ComissaoSumAggregateInputType = {
    percentual?: true
    valorCalculado?: true
  }

  export type ComissaoMinAggregateInputType = {
    id?: true
    vinculacaoId?: true
    representanteId?: true
    pedidoId?: true
    percentual?: true
    valorCalculado?: true
    status?: true
    dataEfetivacao?: true
    dataPagamento?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComissaoMaxAggregateInputType = {
    id?: true
    vinculacaoId?: true
    representanteId?: true
    pedidoId?: true
    percentual?: true
    valorCalculado?: true
    status?: true
    dataEfetivacao?: true
    dataPagamento?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComissaoCountAggregateInputType = {
    id?: true
    vinculacaoId?: true
    representanteId?: true
    pedidoId?: true
    percentual?: true
    valorCalculado?: true
    status?: true
    dataEfetivacao?: true
    dataPagamento?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ComissaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comissao to aggregate.
     */
    where?: ComissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comissaos to fetch.
     */
    orderBy?: ComissaoOrderByWithRelationInput | ComissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comissaos
    **/
    _count?: true | ComissaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComissaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComissaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComissaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComissaoMaxAggregateInputType
  }

  export type GetComissaoAggregateType<T extends ComissaoAggregateArgs> = {
        [P in keyof T & keyof AggregateComissao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComissao[P]>
      : GetScalarType<T[P], AggregateComissao[P]>
  }




  export type ComissaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComissaoWhereInput
    orderBy?: ComissaoOrderByWithAggregationInput | ComissaoOrderByWithAggregationInput[]
    by: ComissaoScalarFieldEnum[] | ComissaoScalarFieldEnum
    having?: ComissaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComissaoCountAggregateInputType | true
    _avg?: ComissaoAvgAggregateInputType
    _sum?: ComissaoSumAggregateInputType
    _min?: ComissaoMinAggregateInputType
    _max?: ComissaoMaxAggregateInputType
  }

  export type ComissaoGroupByOutputType = {
    id: string
    vinculacaoId: string
    representanteId: string
    pedidoId: string
    percentual: number
    valorCalculado: number
    status: $Enums.StatusComissao
    dataEfetivacao: Date | null
    dataPagamento: Date | null
    observacoes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ComissaoCountAggregateOutputType | null
    _avg: ComissaoAvgAggregateOutputType | null
    _sum: ComissaoSumAggregateOutputType | null
    _min: ComissaoMinAggregateOutputType | null
    _max: ComissaoMaxAggregateOutputType | null
  }

  type GetComissaoGroupByPayload<T extends ComissaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComissaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComissaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComissaoGroupByOutputType[P]>
            : GetScalarType<T[P], ComissaoGroupByOutputType[P]>
        }
      >
    >


  export type ComissaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vinculacaoId?: boolean
    representanteId?: boolean
    pedidoId?: boolean
    percentual?: boolean
    valorCalculado?: boolean
    status?: boolean
    dataEfetivacao?: boolean
    dataPagamento?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vinculacao?: boolean | VinculacaoDefaultArgs<ExtArgs>
    representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comissao"]>

  export type ComissaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vinculacaoId?: boolean
    representanteId?: boolean
    pedidoId?: boolean
    percentual?: boolean
    valorCalculado?: boolean
    status?: boolean
    dataEfetivacao?: boolean
    dataPagamento?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vinculacao?: boolean | VinculacaoDefaultArgs<ExtArgs>
    representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comissao"]>

  export type ComissaoSelectScalar = {
    id?: boolean
    vinculacaoId?: boolean
    representanteId?: boolean
    pedidoId?: boolean
    percentual?: boolean
    valorCalculado?: boolean
    status?: boolean
    dataEfetivacao?: boolean
    dataPagamento?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ComissaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vinculacao?: boolean | VinculacaoDefaultArgs<ExtArgs>
    representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type ComissaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vinculacao?: boolean | VinculacaoDefaultArgs<ExtArgs>
    representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $ComissaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comissao"
    objects: {
      vinculacao: Prisma.$VinculacaoPayload<ExtArgs>
      representante: Prisma.$RepresentantePayload<ExtArgs>
      pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vinculacaoId: string
      representanteId: string
      pedidoId: string
      percentual: number
      valorCalculado: number
      status: $Enums.StatusComissao
      dataEfetivacao: Date | null
      dataPagamento: Date | null
      observacoes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comissao"]>
    composites: {}
  }

  type ComissaoGetPayload<S extends boolean | null | undefined | ComissaoDefaultArgs> = $Result.GetResult<Prisma.$ComissaoPayload, S>

  type ComissaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ComissaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ComissaoCountAggregateInputType | true
    }

  export interface ComissaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comissao'], meta: { name: 'Comissao' } }
    /**
     * Find zero or one Comissao that matches the filter.
     * @param {ComissaoFindUniqueArgs} args - Arguments to find a Comissao
     * @example
     * // Get one Comissao
     * const comissao = await prisma.comissao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComissaoFindUniqueArgs>(args: SelectSubset<T, ComissaoFindUniqueArgs<ExtArgs>>): Prisma__ComissaoClient<$Result.GetResult<Prisma.$ComissaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Comissao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ComissaoFindUniqueOrThrowArgs} args - Arguments to find a Comissao
     * @example
     * // Get one Comissao
     * const comissao = await prisma.comissao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComissaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ComissaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComissaoClient<$Result.GetResult<Prisma.$ComissaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Comissao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComissaoFindFirstArgs} args - Arguments to find a Comissao
     * @example
     * // Get one Comissao
     * const comissao = await prisma.comissao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComissaoFindFirstArgs>(args?: SelectSubset<T, ComissaoFindFirstArgs<ExtArgs>>): Prisma__ComissaoClient<$Result.GetResult<Prisma.$ComissaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Comissao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComissaoFindFirstOrThrowArgs} args - Arguments to find a Comissao
     * @example
     * // Get one Comissao
     * const comissao = await prisma.comissao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComissaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ComissaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComissaoClient<$Result.GetResult<Prisma.$ComissaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Comissaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComissaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comissaos
     * const comissaos = await prisma.comissao.findMany()
     * 
     * // Get first 10 Comissaos
     * const comissaos = await prisma.comissao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comissaoWithIdOnly = await prisma.comissao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComissaoFindManyArgs>(args?: SelectSubset<T, ComissaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComissaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Comissao.
     * @param {ComissaoCreateArgs} args - Arguments to create a Comissao.
     * @example
     * // Create one Comissao
     * const Comissao = await prisma.comissao.create({
     *   data: {
     *     // ... data to create a Comissao
     *   }
     * })
     * 
     */
    create<T extends ComissaoCreateArgs>(args: SelectSubset<T, ComissaoCreateArgs<ExtArgs>>): Prisma__ComissaoClient<$Result.GetResult<Prisma.$ComissaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Comissaos.
     * @param {ComissaoCreateManyArgs} args - Arguments to create many Comissaos.
     * @example
     * // Create many Comissaos
     * const comissao = await prisma.comissao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComissaoCreateManyArgs>(args?: SelectSubset<T, ComissaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comissaos and returns the data saved in the database.
     * @param {ComissaoCreateManyAndReturnArgs} args - Arguments to create many Comissaos.
     * @example
     * // Create many Comissaos
     * const comissao = await prisma.comissao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comissaos and only return the `id`
     * const comissaoWithIdOnly = await prisma.comissao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComissaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ComissaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComissaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Comissao.
     * @param {ComissaoDeleteArgs} args - Arguments to delete one Comissao.
     * @example
     * // Delete one Comissao
     * const Comissao = await prisma.comissao.delete({
     *   where: {
     *     // ... filter to delete one Comissao
     *   }
     * })
     * 
     */
    delete<T extends ComissaoDeleteArgs>(args: SelectSubset<T, ComissaoDeleteArgs<ExtArgs>>): Prisma__ComissaoClient<$Result.GetResult<Prisma.$ComissaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Comissao.
     * @param {ComissaoUpdateArgs} args - Arguments to update one Comissao.
     * @example
     * // Update one Comissao
     * const comissao = await prisma.comissao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComissaoUpdateArgs>(args: SelectSubset<T, ComissaoUpdateArgs<ExtArgs>>): Prisma__ComissaoClient<$Result.GetResult<Prisma.$ComissaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Comissaos.
     * @param {ComissaoDeleteManyArgs} args - Arguments to filter Comissaos to delete.
     * @example
     * // Delete a few Comissaos
     * const { count } = await prisma.comissao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComissaoDeleteManyArgs>(args?: SelectSubset<T, ComissaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comissaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComissaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comissaos
     * const comissao = await prisma.comissao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComissaoUpdateManyArgs>(args: SelectSubset<T, ComissaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comissao.
     * @param {ComissaoUpsertArgs} args - Arguments to update or create a Comissao.
     * @example
     * // Update or create a Comissao
     * const comissao = await prisma.comissao.upsert({
     *   create: {
     *     // ... data to create a Comissao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comissao we want to update
     *   }
     * })
     */
    upsert<T extends ComissaoUpsertArgs>(args: SelectSubset<T, ComissaoUpsertArgs<ExtArgs>>): Prisma__ComissaoClient<$Result.GetResult<Prisma.$ComissaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Comissaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComissaoCountArgs} args - Arguments to filter Comissaos to count.
     * @example
     * // Count the number of Comissaos
     * const count = await prisma.comissao.count({
     *   where: {
     *     // ... the filter for the Comissaos we want to count
     *   }
     * })
    **/
    count<T extends ComissaoCountArgs>(
      args?: Subset<T, ComissaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComissaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comissao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComissaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComissaoAggregateArgs>(args: Subset<T, ComissaoAggregateArgs>): Prisma.PrismaPromise<GetComissaoAggregateType<T>>

    /**
     * Group by Comissao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComissaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComissaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComissaoGroupByArgs['orderBy'] }
        : { orderBy?: ComissaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComissaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComissaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comissao model
   */
  readonly fields: ComissaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comissao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComissaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vinculacao<T extends VinculacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VinculacaoDefaultArgs<ExtArgs>>): Prisma__VinculacaoClient<$Result.GetResult<Prisma.$VinculacaoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    representante<T extends RepresentanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepresentanteDefaultArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comissao model
   */ 
  interface ComissaoFieldRefs {
    readonly id: FieldRef<"Comissao", 'String'>
    readonly vinculacaoId: FieldRef<"Comissao", 'String'>
    readonly representanteId: FieldRef<"Comissao", 'String'>
    readonly pedidoId: FieldRef<"Comissao", 'String'>
    readonly percentual: FieldRef<"Comissao", 'Float'>
    readonly valorCalculado: FieldRef<"Comissao", 'Float'>
    readonly status: FieldRef<"Comissao", 'StatusComissao'>
    readonly dataEfetivacao: FieldRef<"Comissao", 'DateTime'>
    readonly dataPagamento: FieldRef<"Comissao", 'DateTime'>
    readonly observacoes: FieldRef<"Comissao", 'String'>
    readonly createdAt: FieldRef<"Comissao", 'DateTime'>
    readonly updatedAt: FieldRef<"Comissao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comissao findUnique
   */
  export type ComissaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoInclude<ExtArgs> | null
    /**
     * Filter, which Comissao to fetch.
     */
    where: ComissaoWhereUniqueInput
  }

  /**
   * Comissao findUniqueOrThrow
   */
  export type ComissaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoInclude<ExtArgs> | null
    /**
     * Filter, which Comissao to fetch.
     */
    where: ComissaoWhereUniqueInput
  }

  /**
   * Comissao findFirst
   */
  export type ComissaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoInclude<ExtArgs> | null
    /**
     * Filter, which Comissao to fetch.
     */
    where?: ComissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comissaos to fetch.
     */
    orderBy?: ComissaoOrderByWithRelationInput | ComissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comissaos.
     */
    cursor?: ComissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comissaos.
     */
    distinct?: ComissaoScalarFieldEnum | ComissaoScalarFieldEnum[]
  }

  /**
   * Comissao findFirstOrThrow
   */
  export type ComissaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoInclude<ExtArgs> | null
    /**
     * Filter, which Comissao to fetch.
     */
    where?: ComissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comissaos to fetch.
     */
    orderBy?: ComissaoOrderByWithRelationInput | ComissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comissaos.
     */
    cursor?: ComissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comissaos.
     */
    distinct?: ComissaoScalarFieldEnum | ComissaoScalarFieldEnum[]
  }

  /**
   * Comissao findMany
   */
  export type ComissaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoInclude<ExtArgs> | null
    /**
     * Filter, which Comissaos to fetch.
     */
    where?: ComissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comissaos to fetch.
     */
    orderBy?: ComissaoOrderByWithRelationInput | ComissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comissaos.
     */
    cursor?: ComissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comissaos.
     */
    skip?: number
    distinct?: ComissaoScalarFieldEnum | ComissaoScalarFieldEnum[]
  }

  /**
   * Comissao create
   */
  export type ComissaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Comissao.
     */
    data: XOR<ComissaoCreateInput, ComissaoUncheckedCreateInput>
  }

  /**
   * Comissao createMany
   */
  export type ComissaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comissaos.
     */
    data: ComissaoCreateManyInput | ComissaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comissao createManyAndReturn
   */
  export type ComissaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Comissaos.
     */
    data: ComissaoCreateManyInput | ComissaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comissao update
   */
  export type ComissaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Comissao.
     */
    data: XOR<ComissaoUpdateInput, ComissaoUncheckedUpdateInput>
    /**
     * Choose, which Comissao to update.
     */
    where: ComissaoWhereUniqueInput
  }

  /**
   * Comissao updateMany
   */
  export type ComissaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comissaos.
     */
    data: XOR<ComissaoUpdateManyMutationInput, ComissaoUncheckedUpdateManyInput>
    /**
     * Filter which Comissaos to update
     */
    where?: ComissaoWhereInput
  }

  /**
   * Comissao upsert
   */
  export type ComissaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Comissao to update in case it exists.
     */
    where: ComissaoWhereUniqueInput
    /**
     * In case the Comissao found by the `where` argument doesn't exist, create a new Comissao with this data.
     */
    create: XOR<ComissaoCreateInput, ComissaoUncheckedCreateInput>
    /**
     * In case the Comissao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComissaoUpdateInput, ComissaoUncheckedUpdateInput>
  }

  /**
   * Comissao delete
   */
  export type ComissaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoInclude<ExtArgs> | null
    /**
     * Filter which Comissao to delete.
     */
    where: ComissaoWhereUniqueInput
  }

  /**
   * Comissao deleteMany
   */
  export type ComissaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comissaos to delete
     */
    where?: ComissaoWhereInput
  }

  /**
   * Comissao without action
   */
  export type ComissaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comissao
     */
    select?: ComissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComissaoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    limiteCredito: number | null
  }

  export type ClienteSumAggregateOutputType = {
    limiteCredito: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    razaoSocial: string | null
    nomeFantasia: string | null
    cnpj: string | null
    inscricaoEstadual: string | null
    telefoneComercial: string | null
    emailComercial: string | null
    cep: string | null
    rua: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    nomeContato: string | null
    emailContato: string | null
    telefoneContato: string | null
    limiteCredito: number | null
    condicoesPagamento: string | null
    representanteId: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    razaoSocial: string | null
    nomeFantasia: string | null
    cnpj: string | null
    inscricaoEstadual: string | null
    telefoneComercial: string | null
    emailComercial: string | null
    cep: string | null
    rua: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    nomeContato: string | null
    emailContato: string | null
    telefoneContato: string | null
    limiteCredito: number | null
    condicoesPagamento: string | null
    representanteId: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    razaoSocial: number
    nomeFantasia: number
    cnpj: number
    inscricaoEstadual: number
    telefoneComercial: number
    emailComercial: number
    cep: number
    rua: number
    numero: number
    complemento: number
    bairro: number
    cidade: number
    estado: number
    nomeContato: number
    emailContato: number
    telefoneContato: number
    limiteCredito: number
    condicoesPagamento: number
    representanteId: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    limiteCredito?: true
  }

  export type ClienteSumAggregateInputType = {
    limiteCredito?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    inscricaoEstadual?: true
    telefoneComercial?: true
    emailComercial?: true
    cep?: true
    rua?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    nomeContato?: true
    emailContato?: true
    telefoneContato?: true
    limiteCredito?: true
    condicoesPagamento?: true
    representanteId?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    inscricaoEstadual?: true
    telefoneComercial?: true
    emailComercial?: true
    cep?: true
    rua?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    nomeContato?: true
    emailContato?: true
    telefoneContato?: true
    limiteCredito?: true
    condicoesPagamento?: true
    representanteId?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    inscricaoEstadual?: true
    telefoneComercial?: true
    emailComercial?: true
    cep?: true
    rua?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    nomeContato?: true
    emailContato?: true
    telefoneContato?: true
    limiteCredito?: true
    condicoesPagamento?: true
    representanteId?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    razaoSocial: string
    nomeFantasia: string | null
    cnpj: string
    inscricaoEstadual: string | null
    telefoneComercial: string | null
    emailComercial: string
    cep: string | null
    rua: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    nomeContato: string | null
    emailContato: string | null
    telefoneContato: string | null
    limiteCredito: number | null
    condicoesPagamento: string | null
    representanteId: string | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    telefoneComercial?: boolean
    emailComercial?: boolean
    cep?: boolean
    rua?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    nomeContato?: boolean
    emailContato?: boolean
    telefoneContato?: boolean
    limiteCredito?: boolean
    condicoesPagamento?: boolean
    representanteId?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    telefoneComercial?: boolean
    emailComercial?: boolean
    cep?: boolean
    rua?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    nomeContato?: boolean
    emailContato?: boolean
    telefoneContato?: boolean
    limiteCredito?: boolean
    condicoesPagamento?: boolean
    representanteId?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    telefoneComercial?: boolean
    emailComercial?: boolean
    cep?: boolean
    rua?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    nomeContato?: boolean
    emailContato?: boolean
    telefoneContato?: boolean
    limiteCredito?: boolean
    condicoesPagamento?: boolean
    representanteId?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      razaoSocial: string
      nomeFantasia: string | null
      cnpj: string
      inscricaoEstadual: string | null
      telefoneComercial: string | null
      emailComercial: string
      cep: string | null
      rua: string | null
      numero: string | null
      complemento: string | null
      bairro: string | null
      cidade: string | null
      estado: string | null
      nomeContato: string | null
      emailContato: string | null
      telefoneContato: string | null
      limiteCredito: number | null
      condicoesPagamento: string | null
      representanteId: string | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Cliente$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */ 
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly razaoSocial: FieldRef<"Cliente", 'String'>
    readonly nomeFantasia: FieldRef<"Cliente", 'String'>
    readonly cnpj: FieldRef<"Cliente", 'String'>
    readonly inscricaoEstadual: FieldRef<"Cliente", 'String'>
    readonly telefoneComercial: FieldRef<"Cliente", 'String'>
    readonly emailComercial: FieldRef<"Cliente", 'String'>
    readonly cep: FieldRef<"Cliente", 'String'>
    readonly rua: FieldRef<"Cliente", 'String'>
    readonly numero: FieldRef<"Cliente", 'String'>
    readonly complemento: FieldRef<"Cliente", 'String'>
    readonly bairro: FieldRef<"Cliente", 'String'>
    readonly cidade: FieldRef<"Cliente", 'String'>
    readonly estado: FieldRef<"Cliente", 'String'>
    readonly nomeContato: FieldRef<"Cliente", 'String'>
    readonly emailContato: FieldRef<"Cliente", 'String'>
    readonly telefoneContato: FieldRef<"Cliente", 'String'>
    readonly limiteCredito: FieldRef<"Cliente", 'Float'>
    readonly condicoesPagamento: FieldRef<"Cliente", 'String'>
    readonly representanteId: FieldRef<"Cliente", 'String'>
    readonly ativo: FieldRef<"Cliente", 'Boolean'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
  }

  /**
   * Cliente.pedidos
   */
  export type Cliente$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id: string | null
    destinatarioId: string | null
    titulo: string | null
    mensagem: string | null
    tipo: $Enums.TipoNotificacao | null
    prioridade: $Enums.PrioridadeNotificacao | null
    dataEnvio: Date | null
    lida: boolean | null
    dataLeitura: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id: string | null
    destinatarioId: string | null
    titulo: string | null
    mensagem: string | null
    tipo: $Enums.TipoNotificacao | null
    prioridade: $Enums.PrioridadeNotificacao | null
    dataEnvio: Date | null
    lida: boolean | null
    dataLeitura: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id: number
    destinatarioId: number
    titulo: number
    mensagem: number
    tipo: number
    prioridade: number
    dataEnvio: number
    lida: number
    dataLeitura: number
    metadados: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificacaoMinAggregateInputType = {
    id?: true
    destinatarioId?: true
    titulo?: true
    mensagem?: true
    tipo?: true
    prioridade?: true
    dataEnvio?: true
    lida?: true
    dataLeitura?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id?: true
    destinatarioId?: true
    titulo?: true
    mensagem?: true
    tipo?: true
    prioridade?: true
    dataEnvio?: true
    lida?: true
    dataLeitura?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id?: true
    destinatarioId?: true
    titulo?: true
    mensagem?: true
    tipo?: true
    prioridade?: true
    dataEnvio?: true
    lida?: true
    dataLeitura?: true
    metadados?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id: string
    destinatarioId: string
    titulo: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    prioridade: $Enums.PrioridadeNotificacao
    dataEnvio: Date
    lida: boolean
    dataLeitura: Date | null
    metadados: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    destinatarioId?: boolean
    titulo?: boolean
    mensagem?: boolean
    tipo?: boolean
    prioridade?: boolean
    dataEnvio?: boolean
    lida?: boolean
    dataLeitura?: boolean
    metadados?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    destinatarioId?: boolean
    titulo?: boolean
    mensagem?: boolean
    tipo?: boolean
    prioridade?: boolean
    dataEnvio?: boolean
    lida?: boolean
    dataLeitura?: boolean
    metadados?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectScalar = {
    id?: boolean
    destinatarioId?: boolean
    titulo?: boolean
    mensagem?: boolean
    tipo?: boolean
    prioridade?: boolean
    dataEnvio?: boolean
    lida?: boolean
    dataLeitura?: boolean
    metadados?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      destinatarioId: string
      titulo: string
      mensagem: string
      tipo: $Enums.TipoNotificacao
      prioridade: $Enums.PrioridadeNotificacao
      dataEnvio: Date
      lida: boolean
      dataLeitura: Date | null
      metadados: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacaos and returns the data saved in the database.
     * @param {NotificacaoCreateManyAndReturnArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notificacao model
   */ 
  interface NotificacaoFieldRefs {
    readonly id: FieldRef<"Notificacao", 'String'>
    readonly destinatarioId: FieldRef<"Notificacao", 'String'>
    readonly titulo: FieldRef<"Notificacao", 'String'>
    readonly mensagem: FieldRef<"Notificacao", 'String'>
    readonly tipo: FieldRef<"Notificacao", 'TipoNotificacao'>
    readonly prioridade: FieldRef<"Notificacao", 'PrioridadeNotificacao'>
    readonly dataEnvio: FieldRef<"Notificacao", 'DateTime'>
    readonly lida: FieldRef<"Notificacao", 'Boolean'>
    readonly dataLeitura: FieldRef<"Notificacao", 'DateTime'>
    readonly metadados: FieldRef<"Notificacao", 'Json'>
    readonly createdAt: FieldRef<"Notificacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Notificacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao createManyAndReturn
   */
  export type NotificacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    papel: 'papel',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const FornecedorScalarFieldEnum: {
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

  export type FornecedorScalarFieldEnum = (typeof FornecedorScalarFieldEnum)[keyof typeof FornecedorScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
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

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const RepresentanteScalarFieldEnum: {
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

  export type RepresentanteScalarFieldEnum = (typeof RepresentanteScalarFieldEnum)[keyof typeof RepresentanteScalarFieldEnum]


  export const VarianteProdutoScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    preco: 'preco',
    estoque: 'estoque',
    atributos: 'atributos',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VarianteProdutoScalarFieldEnum = (typeof VarianteProdutoScalarFieldEnum)[keyof typeof VarianteProdutoScalarFieldEnum]


  export const VinculacaoScalarFieldEnum: {
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

  export type VinculacaoScalarFieldEnum = (typeof VinculacaoScalarFieldEnum)[keyof typeof VinculacaoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    representanteId: 'representanteId',
    dataPedido: 'dataPedido',
    status: 'status',
    valorTotal: 'valorTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ConviteScalarFieldEnum: {
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

  export type ConviteScalarFieldEnum = (typeof ConviteScalarFieldEnum)[keyof typeof ConviteScalarFieldEnum]


  export const ItemPedidoScalarFieldEnum: {
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

  export type ItemPedidoScalarFieldEnum = (typeof ItemPedidoScalarFieldEnum)[keyof typeof ItemPedidoScalarFieldEnum]


  export const ComissaoScalarFieldEnum: {
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

  export type ComissaoScalarFieldEnum = (typeof ComissaoScalarFieldEnum)[keyof typeof ComissaoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
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

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
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

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PapelUsuario'
   */
  export type EnumPapelUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PapelUsuario'>
    


  /**
   * Reference to a field of type 'PapelUsuario[]'
   */
  export type ListEnumPapelUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PapelUsuario[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatusVinculacao'
   */
  export type EnumStatusVinculacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusVinculacao'>
    


  /**
   * Reference to a field of type 'StatusVinculacao[]'
   */
  export type ListEnumStatusVinculacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusVinculacao[]'>
    


  /**
   * Reference to a field of type 'StatusPedido'
   */
  export type EnumStatusPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPedido'>
    


  /**
   * Reference to a field of type 'StatusPedido[]'
   */
  export type ListEnumStatusPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPedido[]'>
    


  /**
   * Reference to a field of type 'TipoConvite'
   */
  export type EnumTipoConviteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoConvite'>
    


  /**
   * Reference to a field of type 'TipoConvite[]'
   */
  export type ListEnumTipoConviteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoConvite[]'>
    


  /**
   * Reference to a field of type 'StatusConvite'
   */
  export type EnumStatusConviteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusConvite'>
    


  /**
   * Reference to a field of type 'StatusConvite[]'
   */
  export type ListEnumStatusConviteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusConvite[]'>
    


  /**
   * Reference to a field of type 'StatusComissao'
   */
  export type EnumStatusComissaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusComissao'>
    


  /**
   * Reference to a field of type 'StatusComissao[]'
   */
  export type ListEnumStatusComissaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusComissao[]'>
    


  /**
   * Reference to a field of type 'TipoNotificacao'
   */
  export type EnumTipoNotificacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoNotificacao'>
    


  /**
   * Reference to a field of type 'TipoNotificacao[]'
   */
  export type ListEnumTipoNotificacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoNotificacao[]'>
    


  /**
   * Reference to a field of type 'PrioridadeNotificacao'
   */
  export type EnumPrioridadeNotificacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrioridadeNotificacao'>
    


  /**
   * Reference to a field of type 'PrioridadeNotificacao[]'
   */
  export type ListEnumPrioridadeNotificacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrioridadeNotificacao[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    papel?: EnumPapelUsuarioFilter<"Usuario"> | $Enums.PapelUsuario
    ativo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    fornecedor?: XOR<FornecedorNullableRelationFilter, FornecedorWhereInput> | null
    representante?: XOR<RepresentanteNullableRelationFilter, RepresentanteWhereInput> | null
    notificacoes?: NotificacaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    papel?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fornecedor?: FornecedorOrderByWithRelationInput
    representante?: RepresentanteOrderByWithRelationInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    papel?: EnumPapelUsuarioFilter<"Usuario"> | $Enums.PapelUsuario
    ativo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    fornecedor?: XOR<FornecedorNullableRelationFilter, FornecedorWhereInput> | null
    representante?: XOR<RepresentanteNullableRelationFilter, RepresentanteWhereInput> | null
    notificacoes?: NotificacaoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    papel?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    papel?: EnumPapelUsuarioWithAggregatesFilter<"Usuario"> | $Enums.PapelUsuario
    ativo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type FornecedorWhereInput = {
    AND?: FornecedorWhereInput | FornecedorWhereInput[]
    OR?: FornecedorWhereInput[]
    NOT?: FornecedorWhereInput | FornecedorWhereInput[]
    id?: StringFilter<"Fornecedor"> | string
    usuarioId?: StringFilter<"Fornecedor"> | string
    razaoSocial?: StringFilter<"Fornecedor"> | string
    nomeFantasia?: StringNullableFilter<"Fornecedor"> | string | null
    cnpj?: StringFilter<"Fornecedor"> | string
    inscricaoEstadual?: StringNullableFilter<"Fornecedor"> | string | null
    telefone?: StringNullableFilter<"Fornecedor"> | string | null
    segmento?: StringFilter<"Fornecedor"> | string
    endereco?: JsonNullableFilter<"Fornecedor">
    configuracoes?: JsonNullableFilter<"Fornecedor">
    ativo?: BoolFilter<"Fornecedor"> | boolean
    createdAt?: DateTimeFilter<"Fornecedor"> | Date | string
    updatedAt?: DateTimeFilter<"Fornecedor"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    produtos?: ProdutoListRelationFilter
    vinculacoes?: VinculacaoListRelationFilter
    convitesEnviados?: ConviteListRelationFilter
  }

  export type FornecedorOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    segmento?: SortOrder
    endereco?: SortOrderInput | SortOrder
    configuracoes?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    produtos?: ProdutoOrderByRelationAggregateInput
    vinculacoes?: VinculacaoOrderByRelationAggregateInput
    convitesEnviados?: ConviteOrderByRelationAggregateInput
  }

  export type FornecedorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId?: string
    cnpj?: string
    AND?: FornecedorWhereInput | FornecedorWhereInput[]
    OR?: FornecedorWhereInput[]
    NOT?: FornecedorWhereInput | FornecedorWhereInput[]
    razaoSocial?: StringFilter<"Fornecedor"> | string
    nomeFantasia?: StringNullableFilter<"Fornecedor"> | string | null
    inscricaoEstadual?: StringNullableFilter<"Fornecedor"> | string | null
    telefone?: StringNullableFilter<"Fornecedor"> | string | null
    segmento?: StringFilter<"Fornecedor"> | string
    endereco?: JsonNullableFilter<"Fornecedor">
    configuracoes?: JsonNullableFilter<"Fornecedor">
    ativo?: BoolFilter<"Fornecedor"> | boolean
    createdAt?: DateTimeFilter<"Fornecedor"> | Date | string
    updatedAt?: DateTimeFilter<"Fornecedor"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    produtos?: ProdutoListRelationFilter
    vinculacoes?: VinculacaoListRelationFilter
    convitesEnviados?: ConviteListRelationFilter
  }, "id" | "usuarioId" | "cnpj">

  export type FornecedorOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    segmento?: SortOrder
    endereco?: SortOrderInput | SortOrder
    configuracoes?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FornecedorCountOrderByAggregateInput
    _max?: FornecedorMaxOrderByAggregateInput
    _min?: FornecedorMinOrderByAggregateInput
  }

  export type FornecedorScalarWhereWithAggregatesInput = {
    AND?: FornecedorScalarWhereWithAggregatesInput | FornecedorScalarWhereWithAggregatesInput[]
    OR?: FornecedorScalarWhereWithAggregatesInput[]
    NOT?: FornecedorScalarWhereWithAggregatesInput | FornecedorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fornecedor"> | string
    usuarioId?: StringWithAggregatesFilter<"Fornecedor"> | string
    razaoSocial?: StringWithAggregatesFilter<"Fornecedor"> | string
    nomeFantasia?: StringNullableWithAggregatesFilter<"Fornecedor"> | string | null
    cnpj?: StringWithAggregatesFilter<"Fornecedor"> | string
    inscricaoEstadual?: StringNullableWithAggregatesFilter<"Fornecedor"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Fornecedor"> | string | null
    segmento?: StringWithAggregatesFilter<"Fornecedor"> | string
    endereco?: JsonNullableWithAggregatesFilter<"Fornecedor">
    configuracoes?: JsonNullableWithAggregatesFilter<"Fornecedor">
    ativo?: BoolWithAggregatesFilter<"Fornecedor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Fornecedor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fornecedor"> | Date | string
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: StringFilter<"Produto"> | string
    nome?: StringFilter<"Produto"> | string
    descricao?: StringFilter<"Produto"> | string
    precoBase?: FloatFilter<"Produto"> | number
    fornecedorId?: StringNullableFilter<"Produto"> | string | null
    categoria?: StringNullableFilter<"Produto"> | string | null
    ativo?: BoolFilter<"Produto"> | boolean
    createdAt?: DateTimeFilter<"Produto"> | Date | string
    updatedAt?: DateTimeFilter<"Produto"> | Date | string
    fornecedor?: XOR<FornecedorNullableRelationFilter, FornecedorWhereInput> | null
    variantes?: VarianteProdutoListRelationFilter
    itens?: ItemPedidoListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    precoBase?: SortOrder
    fornecedorId?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fornecedor?: FornecedorOrderByWithRelationInput
    variantes?: VarianteProdutoOrderByRelationAggregateInput
    itens?: ItemPedidoOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    descricao?: StringFilter<"Produto"> | string
    precoBase?: FloatFilter<"Produto"> | number
    fornecedorId?: StringNullableFilter<"Produto"> | string | null
    categoria?: StringNullableFilter<"Produto"> | string | null
    ativo?: BoolFilter<"Produto"> | boolean
    createdAt?: DateTimeFilter<"Produto"> | Date | string
    updatedAt?: DateTimeFilter<"Produto"> | Date | string
    fornecedor?: XOR<FornecedorNullableRelationFilter, FornecedorWhereInput> | null
    variantes?: VarianteProdutoListRelationFilter
    itens?: ItemPedidoListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    precoBase?: SortOrder
    fornecedorId?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Produto"> | string
    nome?: StringWithAggregatesFilter<"Produto"> | string
    descricao?: StringWithAggregatesFilter<"Produto"> | string
    precoBase?: FloatWithAggregatesFilter<"Produto"> | number
    fornecedorId?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    categoria?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    ativo?: BoolWithAggregatesFilter<"Produto"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
  }

  export type RepresentanteWhereInput = {
    AND?: RepresentanteWhereInput | RepresentanteWhereInput[]
    OR?: RepresentanteWhereInput[]
    NOT?: RepresentanteWhereInput | RepresentanteWhereInput[]
    id?: StringFilter<"Representante"> | string
    usuarioId?: StringFilter<"Representante"> | string
    cpf?: StringNullableFilter<"Representante"> | string | null
    telefone?: StringNullableFilter<"Representante"> | string | null
    regiao?: StringFilter<"Representante"> | string
    especialidades?: StringNullableListFilter<"Representante">
    endereco?: JsonNullableFilter<"Representante">
    configuracoes?: JsonNullableFilter<"Representante">
    avaliacaoMedia?: FloatNullableFilter<"Representante"> | number | null
    ativo?: BoolFilter<"Representante"> | boolean
    createdAt?: DateTimeFilter<"Representante"> | Date | string
    updatedAt?: DateTimeFilter<"Representante"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    vinculacoes?: VinculacaoListRelationFilter
    comissoes?: ComissaoListRelationFilter
    pedidos?: PedidoListRelationFilter
    convitesEnviados?: ConviteListRelationFilter
  }

  export type RepresentanteOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cpf?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    regiao?: SortOrder
    especialidades?: SortOrder
    endereco?: SortOrderInput | SortOrder
    configuracoes?: SortOrderInput | SortOrder
    avaliacaoMedia?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    vinculacoes?: VinculacaoOrderByRelationAggregateInput
    comissoes?: ComissaoOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
    convitesEnviados?: ConviteOrderByRelationAggregateInput
  }

  export type RepresentanteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId?: string
    cpf?: string
    AND?: RepresentanteWhereInput | RepresentanteWhereInput[]
    OR?: RepresentanteWhereInput[]
    NOT?: RepresentanteWhereInput | RepresentanteWhereInput[]
    telefone?: StringNullableFilter<"Representante"> | string | null
    regiao?: StringFilter<"Representante"> | string
    especialidades?: StringNullableListFilter<"Representante">
    endereco?: JsonNullableFilter<"Representante">
    configuracoes?: JsonNullableFilter<"Representante">
    avaliacaoMedia?: FloatNullableFilter<"Representante"> | number | null
    ativo?: BoolFilter<"Representante"> | boolean
    createdAt?: DateTimeFilter<"Representante"> | Date | string
    updatedAt?: DateTimeFilter<"Representante"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    vinculacoes?: VinculacaoListRelationFilter
    comissoes?: ComissaoListRelationFilter
    pedidos?: PedidoListRelationFilter
    convitesEnviados?: ConviteListRelationFilter
  }, "id" | "usuarioId" | "cpf">

  export type RepresentanteOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cpf?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    regiao?: SortOrder
    especialidades?: SortOrder
    endereco?: SortOrderInput | SortOrder
    configuracoes?: SortOrderInput | SortOrder
    avaliacaoMedia?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RepresentanteCountOrderByAggregateInput
    _avg?: RepresentanteAvgOrderByAggregateInput
    _max?: RepresentanteMaxOrderByAggregateInput
    _min?: RepresentanteMinOrderByAggregateInput
    _sum?: RepresentanteSumOrderByAggregateInput
  }

  export type RepresentanteScalarWhereWithAggregatesInput = {
    AND?: RepresentanteScalarWhereWithAggregatesInput | RepresentanteScalarWhereWithAggregatesInput[]
    OR?: RepresentanteScalarWhereWithAggregatesInput[]
    NOT?: RepresentanteScalarWhereWithAggregatesInput | RepresentanteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Representante"> | string
    usuarioId?: StringWithAggregatesFilter<"Representante"> | string
    cpf?: StringNullableWithAggregatesFilter<"Representante"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Representante"> | string | null
    regiao?: StringWithAggregatesFilter<"Representante"> | string
    especialidades?: StringNullableListFilter<"Representante">
    endereco?: JsonNullableWithAggregatesFilter<"Representante">
    configuracoes?: JsonNullableWithAggregatesFilter<"Representante">
    avaliacaoMedia?: FloatNullableWithAggregatesFilter<"Representante"> | number | null
    ativo?: BoolWithAggregatesFilter<"Representante"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Representante"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Representante"> | Date | string
  }

  export type VarianteProdutoWhereInput = {
    AND?: VarianteProdutoWhereInput | VarianteProdutoWhereInput[]
    OR?: VarianteProdutoWhereInput[]
    NOT?: VarianteProdutoWhereInput | VarianteProdutoWhereInput[]
    id?: StringFilter<"VarianteProduto"> | string
    sku?: StringFilter<"VarianteProduto"> | string
    preco?: FloatFilter<"VarianteProduto"> | number
    estoque?: IntFilter<"VarianteProduto"> | number
    atributos?: JsonFilter<"VarianteProduto">
    productId?: StringFilter<"VarianteProduto"> | string
    createdAt?: DateTimeFilter<"VarianteProduto"> | Date | string
    updatedAt?: DateTimeFilter<"VarianteProduto"> | Date | string
    product?: XOR<ProdutoRelationFilter, ProdutoWhereInput>
  }

  export type VarianteProdutoOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    preco?: SortOrder
    estoque?: SortOrder
    atributos?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProdutoOrderByWithRelationInput
  }

  export type VarianteProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: VarianteProdutoWhereInput | VarianteProdutoWhereInput[]
    OR?: VarianteProdutoWhereInput[]
    NOT?: VarianteProdutoWhereInput | VarianteProdutoWhereInput[]
    preco?: FloatFilter<"VarianteProduto"> | number
    estoque?: IntFilter<"VarianteProduto"> | number
    atributos?: JsonFilter<"VarianteProduto">
    productId?: StringFilter<"VarianteProduto"> | string
    createdAt?: DateTimeFilter<"VarianteProduto"> | Date | string
    updatedAt?: DateTimeFilter<"VarianteProduto"> | Date | string
    product?: XOR<ProdutoRelationFilter, ProdutoWhereInput>
  }, "id" | "sku">

  export type VarianteProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    preco?: SortOrder
    estoque?: SortOrder
    atributos?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VarianteProdutoCountOrderByAggregateInput
    _avg?: VarianteProdutoAvgOrderByAggregateInput
    _max?: VarianteProdutoMaxOrderByAggregateInput
    _min?: VarianteProdutoMinOrderByAggregateInput
    _sum?: VarianteProdutoSumOrderByAggregateInput
  }

  export type VarianteProdutoScalarWhereWithAggregatesInput = {
    AND?: VarianteProdutoScalarWhereWithAggregatesInput | VarianteProdutoScalarWhereWithAggregatesInput[]
    OR?: VarianteProdutoScalarWhereWithAggregatesInput[]
    NOT?: VarianteProdutoScalarWhereWithAggregatesInput | VarianteProdutoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VarianteProduto"> | string
    sku?: StringWithAggregatesFilter<"VarianteProduto"> | string
    preco?: FloatWithAggregatesFilter<"VarianteProduto"> | number
    estoque?: IntWithAggregatesFilter<"VarianteProduto"> | number
    atributos?: JsonWithAggregatesFilter<"VarianteProduto">
    productId?: StringWithAggregatesFilter<"VarianteProduto"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VarianteProduto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VarianteProduto"> | Date | string
  }

  export type VinculacaoWhereInput = {
    AND?: VinculacaoWhereInput | VinculacaoWhereInput[]
    OR?: VinculacaoWhereInput[]
    NOT?: VinculacaoWhereInput | VinculacaoWhereInput[]
    id?: StringFilter<"Vinculacao"> | string
    fornecedorId?: StringFilter<"Vinculacao"> | string
    representanteId?: StringFilter<"Vinculacao"> | string
    status?: EnumStatusVinculacaoFilter<"Vinculacao"> | $Enums.StatusVinculacao
    comissaoPercent?: FloatFilter<"Vinculacao"> | number
    precoEspecial?: BoolFilter<"Vinculacao"> | boolean
    acessoRelatorios?: BoolFilter<"Vinculacao"> | boolean
    configuracoes?: JsonNullableFilter<"Vinculacao">
    dataVinculacao?: DateTimeFilter<"Vinculacao"> | Date | string
    dataInativacao?: DateTimeNullableFilter<"Vinculacao"> | Date | string | null
    motivoInativacao?: StringNullableFilter<"Vinculacao"> | string | null
    createdAt?: DateTimeFilter<"Vinculacao"> | Date | string
    updatedAt?: DateTimeFilter<"Vinculacao"> | Date | string
    fornecedor?: XOR<FornecedorRelationFilter, FornecedorWhereInput>
    representante?: XOR<RepresentanteRelationFilter, RepresentanteWhereInput>
    comissoes?: ComissaoListRelationFilter
  }

  export type VinculacaoOrderByWithRelationInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    representanteId?: SortOrder
    status?: SortOrder
    comissaoPercent?: SortOrder
    precoEspecial?: SortOrder
    acessoRelatorios?: SortOrder
    configuracoes?: SortOrderInput | SortOrder
    dataVinculacao?: SortOrder
    dataInativacao?: SortOrderInput | SortOrder
    motivoInativacao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fornecedor?: FornecedorOrderByWithRelationInput
    representante?: RepresentanteOrderByWithRelationInput
    comissoes?: ComissaoOrderByRelationAggregateInput
  }

  export type VinculacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fornecedorId_representanteId?: VinculacaoFornecedorIdRepresentanteIdCompoundUniqueInput
    AND?: VinculacaoWhereInput | VinculacaoWhereInput[]
    OR?: VinculacaoWhereInput[]
    NOT?: VinculacaoWhereInput | VinculacaoWhereInput[]
    fornecedorId?: StringFilter<"Vinculacao"> | string
    representanteId?: StringFilter<"Vinculacao"> | string
    status?: EnumStatusVinculacaoFilter<"Vinculacao"> | $Enums.StatusVinculacao
    comissaoPercent?: FloatFilter<"Vinculacao"> | number
    precoEspecial?: BoolFilter<"Vinculacao"> | boolean
    acessoRelatorios?: BoolFilter<"Vinculacao"> | boolean
    configuracoes?: JsonNullableFilter<"Vinculacao">
    dataVinculacao?: DateTimeFilter<"Vinculacao"> | Date | string
    dataInativacao?: DateTimeNullableFilter<"Vinculacao"> | Date | string | null
    motivoInativacao?: StringNullableFilter<"Vinculacao"> | string | null
    createdAt?: DateTimeFilter<"Vinculacao"> | Date | string
    updatedAt?: DateTimeFilter<"Vinculacao"> | Date | string
    fornecedor?: XOR<FornecedorRelationFilter, FornecedorWhereInput>
    representante?: XOR<RepresentanteRelationFilter, RepresentanteWhereInput>
    comissoes?: ComissaoListRelationFilter
  }, "id" | "fornecedorId_representanteId">

  export type VinculacaoOrderByWithAggregationInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    representanteId?: SortOrder
    status?: SortOrder
    comissaoPercent?: SortOrder
    precoEspecial?: SortOrder
    acessoRelatorios?: SortOrder
    configuracoes?: SortOrderInput | SortOrder
    dataVinculacao?: SortOrder
    dataInativacao?: SortOrderInput | SortOrder
    motivoInativacao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VinculacaoCountOrderByAggregateInput
    _avg?: VinculacaoAvgOrderByAggregateInput
    _max?: VinculacaoMaxOrderByAggregateInput
    _min?: VinculacaoMinOrderByAggregateInput
    _sum?: VinculacaoSumOrderByAggregateInput
  }

  export type VinculacaoScalarWhereWithAggregatesInput = {
    AND?: VinculacaoScalarWhereWithAggregatesInput | VinculacaoScalarWhereWithAggregatesInput[]
    OR?: VinculacaoScalarWhereWithAggregatesInput[]
    NOT?: VinculacaoScalarWhereWithAggregatesInput | VinculacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vinculacao"> | string
    fornecedorId?: StringWithAggregatesFilter<"Vinculacao"> | string
    representanteId?: StringWithAggregatesFilter<"Vinculacao"> | string
    status?: EnumStatusVinculacaoWithAggregatesFilter<"Vinculacao"> | $Enums.StatusVinculacao
    comissaoPercent?: FloatWithAggregatesFilter<"Vinculacao"> | number
    precoEspecial?: BoolWithAggregatesFilter<"Vinculacao"> | boolean
    acessoRelatorios?: BoolWithAggregatesFilter<"Vinculacao"> | boolean
    configuracoes?: JsonNullableWithAggregatesFilter<"Vinculacao">
    dataVinculacao?: DateTimeWithAggregatesFilter<"Vinculacao"> | Date | string
    dataInativacao?: DateTimeNullableWithAggregatesFilter<"Vinculacao"> | Date | string | null
    motivoInativacao?: StringNullableWithAggregatesFilter<"Vinculacao"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vinculacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vinculacao"> | Date | string
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: StringFilter<"Pedido"> | string
    clienteId?: StringFilter<"Pedido"> | string
    representanteId?: StringNullableFilter<"Pedido"> | string | null
    dataPedido?: DateTimeFilter<"Pedido"> | Date | string
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    valorTotal?: FloatFilter<"Pedido"> | number
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeFilter<"Pedido"> | Date | string
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    representante?: XOR<RepresentanteNullableRelationFilter, RepresentanteWhereInput> | null
    itens?: ItemPedidoListRelationFilter
    comissoes?: ComissaoListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    representanteId?: SortOrderInput | SortOrder
    dataPedido?: SortOrder
    status?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    representante?: RepresentanteOrderByWithRelationInput
    itens?: ItemPedidoOrderByRelationAggregateInput
    comissoes?: ComissaoOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    clienteId?: StringFilter<"Pedido"> | string
    representanteId?: StringNullableFilter<"Pedido"> | string | null
    dataPedido?: DateTimeFilter<"Pedido"> | Date | string
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    valorTotal?: FloatFilter<"Pedido"> | number
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeFilter<"Pedido"> | Date | string
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    representante?: XOR<RepresentanteNullableRelationFilter, RepresentanteWhereInput> | null
    itens?: ItemPedidoListRelationFilter
    comissoes?: ComissaoListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    representanteId?: SortOrderInput | SortOrder
    dataPedido?: SortOrder
    status?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pedido"> | string
    clienteId?: StringWithAggregatesFilter<"Pedido"> | string
    representanteId?: StringNullableWithAggregatesFilter<"Pedido"> | string | null
    dataPedido?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    status?: EnumStatusPedidoWithAggregatesFilter<"Pedido"> | $Enums.StatusPedido
    valorTotal?: FloatWithAggregatesFilter<"Pedido"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
  }

  export type ConviteWhereInput = {
    AND?: ConviteWhereInput | ConviteWhereInput[]
    OR?: ConviteWhereInput[]
    NOT?: ConviteWhereInput | ConviteWhereInput[]
    id?: StringFilter<"Convite"> | string
    remetenteId?: StringFilter<"Convite"> | string
    destinatarioId?: StringFilter<"Convite"> | string
    tipoRemetente?: EnumTipoConviteFilter<"Convite"> | $Enums.TipoConvite
    fornecedorId?: StringNullableFilter<"Convite"> | string | null
    representanteId?: StringNullableFilter<"Convite"> | string | null
    status?: EnumStatusConviteFilter<"Convite"> | $Enums.StatusConvite
    mensagem?: StringNullableFilter<"Convite"> | string | null
    comissaoPercent?: FloatNullableFilter<"Convite"> | number | null
    configuracoes?: JsonNullableFilter<"Convite">
    dataEnvio?: DateTimeFilter<"Convite"> | Date | string
    dataResposta?: DateTimeNullableFilter<"Convite"> | Date | string | null
    motivoRecusa?: StringNullableFilter<"Convite"> | string | null
    createdAt?: DateTimeFilter<"Convite"> | Date | string
    updatedAt?: DateTimeFilter<"Convite"> | Date | string
    fornecedor?: XOR<FornecedorNullableRelationFilter, FornecedorWhereInput> | null
    representante?: XOR<RepresentanteNullableRelationFilter, RepresentanteWhereInput> | null
  }

  export type ConviteOrderByWithRelationInput = {
    id?: SortOrder
    remetenteId?: SortOrder
    destinatarioId?: SortOrder
    tipoRemetente?: SortOrder
    fornecedorId?: SortOrderInput | SortOrder
    representanteId?: SortOrderInput | SortOrder
    status?: SortOrder
    mensagem?: SortOrderInput | SortOrder
    comissaoPercent?: SortOrderInput | SortOrder
    configuracoes?: SortOrderInput | SortOrder
    dataEnvio?: SortOrder
    dataResposta?: SortOrderInput | SortOrder
    motivoRecusa?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fornecedor?: FornecedorOrderByWithRelationInput
    representante?: RepresentanteOrderByWithRelationInput
  }

  export type ConviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConviteWhereInput | ConviteWhereInput[]
    OR?: ConviteWhereInput[]
    NOT?: ConviteWhereInput | ConviteWhereInput[]
    remetenteId?: StringFilter<"Convite"> | string
    destinatarioId?: StringFilter<"Convite"> | string
    tipoRemetente?: EnumTipoConviteFilter<"Convite"> | $Enums.TipoConvite
    fornecedorId?: StringNullableFilter<"Convite"> | string | null
    representanteId?: StringNullableFilter<"Convite"> | string | null
    status?: EnumStatusConviteFilter<"Convite"> | $Enums.StatusConvite
    mensagem?: StringNullableFilter<"Convite"> | string | null
    comissaoPercent?: FloatNullableFilter<"Convite"> | number | null
    configuracoes?: JsonNullableFilter<"Convite">
    dataEnvio?: DateTimeFilter<"Convite"> | Date | string
    dataResposta?: DateTimeNullableFilter<"Convite"> | Date | string | null
    motivoRecusa?: StringNullableFilter<"Convite"> | string | null
    createdAt?: DateTimeFilter<"Convite"> | Date | string
    updatedAt?: DateTimeFilter<"Convite"> | Date | string
    fornecedor?: XOR<FornecedorNullableRelationFilter, FornecedorWhereInput> | null
    representante?: XOR<RepresentanteNullableRelationFilter, RepresentanteWhereInput> | null
  }, "id">

  export type ConviteOrderByWithAggregationInput = {
    id?: SortOrder
    remetenteId?: SortOrder
    destinatarioId?: SortOrder
    tipoRemetente?: SortOrder
    fornecedorId?: SortOrderInput | SortOrder
    representanteId?: SortOrderInput | SortOrder
    status?: SortOrder
    mensagem?: SortOrderInput | SortOrder
    comissaoPercent?: SortOrderInput | SortOrder
    configuracoes?: SortOrderInput | SortOrder
    dataEnvio?: SortOrder
    dataResposta?: SortOrderInput | SortOrder
    motivoRecusa?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConviteCountOrderByAggregateInput
    _avg?: ConviteAvgOrderByAggregateInput
    _max?: ConviteMaxOrderByAggregateInput
    _min?: ConviteMinOrderByAggregateInput
    _sum?: ConviteSumOrderByAggregateInput
  }

  export type ConviteScalarWhereWithAggregatesInput = {
    AND?: ConviteScalarWhereWithAggregatesInput | ConviteScalarWhereWithAggregatesInput[]
    OR?: ConviteScalarWhereWithAggregatesInput[]
    NOT?: ConviteScalarWhereWithAggregatesInput | ConviteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Convite"> | string
    remetenteId?: StringWithAggregatesFilter<"Convite"> | string
    destinatarioId?: StringWithAggregatesFilter<"Convite"> | string
    tipoRemetente?: EnumTipoConviteWithAggregatesFilter<"Convite"> | $Enums.TipoConvite
    fornecedorId?: StringNullableWithAggregatesFilter<"Convite"> | string | null
    representanteId?: StringNullableWithAggregatesFilter<"Convite"> | string | null
    status?: EnumStatusConviteWithAggregatesFilter<"Convite"> | $Enums.StatusConvite
    mensagem?: StringNullableWithAggregatesFilter<"Convite"> | string | null
    comissaoPercent?: FloatNullableWithAggregatesFilter<"Convite"> | number | null
    configuracoes?: JsonNullableWithAggregatesFilter<"Convite">
    dataEnvio?: DateTimeWithAggregatesFilter<"Convite"> | Date | string
    dataResposta?: DateTimeNullableWithAggregatesFilter<"Convite"> | Date | string | null
    motivoRecusa?: StringNullableWithAggregatesFilter<"Convite"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Convite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Convite"> | Date | string
  }

  export type ItemPedidoWhereInput = {
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    id?: StringFilter<"ItemPedido"> | string
    produtoId?: StringFilter<"ItemPedido"> | string
    varianteId?: StringNullableFilter<"ItemPedido"> | string | null
    quantidade?: IntFilter<"ItemPedido"> | number
    precoUnitario?: FloatFilter<"ItemPedido"> | number
    desconto?: FloatNullableFilter<"ItemPedido"> | number | null
    valorTotal?: FloatFilter<"ItemPedido"> | number
    observacoes?: StringNullableFilter<"ItemPedido"> | string | null
    pedidoId?: StringFilter<"ItemPedido"> | string
    createdAt?: DateTimeFilter<"ItemPedido"> | Date | string
    updatedAt?: DateTimeFilter<"ItemPedido"> | Date | string
    produto?: XOR<ProdutoRelationFilter, ProdutoWhereInput>
    pedido?: XOR<PedidoRelationFilter, PedidoWhereInput>
  }

  export type ItemPedidoOrderByWithRelationInput = {
    id?: SortOrder
    produtoId?: SortOrder
    varianteId?: SortOrderInput | SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrderInput | SortOrder
    valorTotal?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    pedidoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    produto?: ProdutoOrderByWithRelationInput
    pedido?: PedidoOrderByWithRelationInput
  }

  export type ItemPedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    produtoId?: StringFilter<"ItemPedido"> | string
    varianteId?: StringNullableFilter<"ItemPedido"> | string | null
    quantidade?: IntFilter<"ItemPedido"> | number
    precoUnitario?: FloatFilter<"ItemPedido"> | number
    desconto?: FloatNullableFilter<"ItemPedido"> | number | null
    valorTotal?: FloatFilter<"ItemPedido"> | number
    observacoes?: StringNullableFilter<"ItemPedido"> | string | null
    pedidoId?: StringFilter<"ItemPedido"> | string
    createdAt?: DateTimeFilter<"ItemPedido"> | Date | string
    updatedAt?: DateTimeFilter<"ItemPedido"> | Date | string
    produto?: XOR<ProdutoRelationFilter, ProdutoWhereInput>
    pedido?: XOR<PedidoRelationFilter, PedidoWhereInput>
  }, "id">

  export type ItemPedidoOrderByWithAggregationInput = {
    id?: SortOrder
    produtoId?: SortOrder
    varianteId?: SortOrderInput | SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrderInput | SortOrder
    valorTotal?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    pedidoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemPedidoCountOrderByAggregateInput
    _avg?: ItemPedidoAvgOrderByAggregateInput
    _max?: ItemPedidoMaxOrderByAggregateInput
    _min?: ItemPedidoMinOrderByAggregateInput
    _sum?: ItemPedidoSumOrderByAggregateInput
  }

  export type ItemPedidoScalarWhereWithAggregatesInput = {
    AND?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    OR?: ItemPedidoScalarWhereWithAggregatesInput[]
    NOT?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemPedido"> | string
    produtoId?: StringWithAggregatesFilter<"ItemPedido"> | string
    varianteId?: StringNullableWithAggregatesFilter<"ItemPedido"> | string | null
    quantidade?: IntWithAggregatesFilter<"ItemPedido"> | number
    precoUnitario?: FloatWithAggregatesFilter<"ItemPedido"> | number
    desconto?: FloatNullableWithAggregatesFilter<"ItemPedido"> | number | null
    valorTotal?: FloatWithAggregatesFilter<"ItemPedido"> | number
    observacoes?: StringNullableWithAggregatesFilter<"ItemPedido"> | string | null
    pedidoId?: StringWithAggregatesFilter<"ItemPedido"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ItemPedido"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ItemPedido"> | Date | string
  }

  export type ComissaoWhereInput = {
    AND?: ComissaoWhereInput | ComissaoWhereInput[]
    OR?: ComissaoWhereInput[]
    NOT?: ComissaoWhereInput | ComissaoWhereInput[]
    id?: StringFilter<"Comissao"> | string
    vinculacaoId?: StringFilter<"Comissao"> | string
    representanteId?: StringFilter<"Comissao"> | string
    pedidoId?: StringFilter<"Comissao"> | string
    percentual?: FloatFilter<"Comissao"> | number
    valorCalculado?: FloatFilter<"Comissao"> | number
    status?: EnumStatusComissaoFilter<"Comissao"> | $Enums.StatusComissao
    dataEfetivacao?: DateTimeNullableFilter<"Comissao"> | Date | string | null
    dataPagamento?: DateTimeNullableFilter<"Comissao"> | Date | string | null
    observacoes?: StringNullableFilter<"Comissao"> | string | null
    createdAt?: DateTimeFilter<"Comissao"> | Date | string
    updatedAt?: DateTimeFilter<"Comissao"> | Date | string
    vinculacao?: XOR<VinculacaoRelationFilter, VinculacaoWhereInput>
    representante?: XOR<RepresentanteRelationFilter, RepresentanteWhereInput>
    pedido?: XOR<PedidoRelationFilter, PedidoWhereInput>
  }

  export type ComissaoOrderByWithRelationInput = {
    id?: SortOrder
    vinculacaoId?: SortOrder
    representanteId?: SortOrder
    pedidoId?: SortOrder
    percentual?: SortOrder
    valorCalculado?: SortOrder
    status?: SortOrder
    dataEfetivacao?: SortOrderInput | SortOrder
    dataPagamento?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vinculacao?: VinculacaoOrderByWithRelationInput
    representante?: RepresentanteOrderByWithRelationInput
    pedido?: PedidoOrderByWithRelationInput
  }

  export type ComissaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ComissaoWhereInput | ComissaoWhereInput[]
    OR?: ComissaoWhereInput[]
    NOT?: ComissaoWhereInput | ComissaoWhereInput[]
    vinculacaoId?: StringFilter<"Comissao"> | string
    representanteId?: StringFilter<"Comissao"> | string
    pedidoId?: StringFilter<"Comissao"> | string
    percentual?: FloatFilter<"Comissao"> | number
    valorCalculado?: FloatFilter<"Comissao"> | number
    status?: EnumStatusComissaoFilter<"Comissao"> | $Enums.StatusComissao
    dataEfetivacao?: DateTimeNullableFilter<"Comissao"> | Date | string | null
    dataPagamento?: DateTimeNullableFilter<"Comissao"> | Date | string | null
    observacoes?: StringNullableFilter<"Comissao"> | string | null
    createdAt?: DateTimeFilter<"Comissao"> | Date | string
    updatedAt?: DateTimeFilter<"Comissao"> | Date | string
    vinculacao?: XOR<VinculacaoRelationFilter, VinculacaoWhereInput>
    representante?: XOR<RepresentanteRelationFilter, RepresentanteWhereInput>
    pedido?: XOR<PedidoRelationFilter, PedidoWhereInput>
  }, "id">

  export type ComissaoOrderByWithAggregationInput = {
    id?: SortOrder
    vinculacaoId?: SortOrder
    representanteId?: SortOrder
    pedidoId?: SortOrder
    percentual?: SortOrder
    valorCalculado?: SortOrder
    status?: SortOrder
    dataEfetivacao?: SortOrderInput | SortOrder
    dataPagamento?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ComissaoCountOrderByAggregateInput
    _avg?: ComissaoAvgOrderByAggregateInput
    _max?: ComissaoMaxOrderByAggregateInput
    _min?: ComissaoMinOrderByAggregateInput
    _sum?: ComissaoSumOrderByAggregateInput
  }

  export type ComissaoScalarWhereWithAggregatesInput = {
    AND?: ComissaoScalarWhereWithAggregatesInput | ComissaoScalarWhereWithAggregatesInput[]
    OR?: ComissaoScalarWhereWithAggregatesInput[]
    NOT?: ComissaoScalarWhereWithAggregatesInput | ComissaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comissao"> | string
    vinculacaoId?: StringWithAggregatesFilter<"Comissao"> | string
    representanteId?: StringWithAggregatesFilter<"Comissao"> | string
    pedidoId?: StringWithAggregatesFilter<"Comissao"> | string
    percentual?: FloatWithAggregatesFilter<"Comissao"> | number
    valorCalculado?: FloatWithAggregatesFilter<"Comissao"> | number
    status?: EnumStatusComissaoWithAggregatesFilter<"Comissao"> | $Enums.StatusComissao
    dataEfetivacao?: DateTimeNullableWithAggregatesFilter<"Comissao"> | Date | string | null
    dataPagamento?: DateTimeNullableWithAggregatesFilter<"Comissao"> | Date | string | null
    observacoes?: StringNullableWithAggregatesFilter<"Comissao"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Comissao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comissao"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    razaoSocial?: StringFilter<"Cliente"> | string
    nomeFantasia?: StringNullableFilter<"Cliente"> | string | null
    cnpj?: StringFilter<"Cliente"> | string
    inscricaoEstadual?: StringNullableFilter<"Cliente"> | string | null
    telefoneComercial?: StringNullableFilter<"Cliente"> | string | null
    emailComercial?: StringFilter<"Cliente"> | string
    cep?: StringNullableFilter<"Cliente"> | string | null
    rua?: StringNullableFilter<"Cliente"> | string | null
    numero?: StringNullableFilter<"Cliente"> | string | null
    complemento?: StringNullableFilter<"Cliente"> | string | null
    bairro?: StringNullableFilter<"Cliente"> | string | null
    cidade?: StringNullableFilter<"Cliente"> | string | null
    estado?: StringNullableFilter<"Cliente"> | string | null
    nomeContato?: StringNullableFilter<"Cliente"> | string | null
    emailContato?: StringNullableFilter<"Cliente"> | string | null
    telefoneContato?: StringNullableFilter<"Cliente"> | string | null
    limiteCredito?: FloatNullableFilter<"Cliente"> | number | null
    condicoesPagamento?: StringNullableFilter<"Cliente"> | string | null
    representanteId?: StringNullableFilter<"Cliente"> | string | null
    ativo?: BoolFilter<"Cliente"> | boolean
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    pedidos?: PedidoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrderInput | SortOrder
    telefoneComercial?: SortOrderInput | SortOrder
    emailComercial?: SortOrder
    cep?: SortOrderInput | SortOrder
    rua?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    nomeContato?: SortOrderInput | SortOrder
    emailContato?: SortOrderInput | SortOrder
    telefoneContato?: SortOrderInput | SortOrder
    limiteCredito?: SortOrderInput | SortOrder
    condicoesPagamento?: SortOrderInput | SortOrder
    representanteId?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    emailComercial?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    razaoSocial?: StringFilter<"Cliente"> | string
    nomeFantasia?: StringNullableFilter<"Cliente"> | string | null
    inscricaoEstadual?: StringNullableFilter<"Cliente"> | string | null
    telefoneComercial?: StringNullableFilter<"Cliente"> | string | null
    cep?: StringNullableFilter<"Cliente"> | string | null
    rua?: StringNullableFilter<"Cliente"> | string | null
    numero?: StringNullableFilter<"Cliente"> | string | null
    complemento?: StringNullableFilter<"Cliente"> | string | null
    bairro?: StringNullableFilter<"Cliente"> | string | null
    cidade?: StringNullableFilter<"Cliente"> | string | null
    estado?: StringNullableFilter<"Cliente"> | string | null
    nomeContato?: StringNullableFilter<"Cliente"> | string | null
    emailContato?: StringNullableFilter<"Cliente"> | string | null
    telefoneContato?: StringNullableFilter<"Cliente"> | string | null
    limiteCredito?: FloatNullableFilter<"Cliente"> | number | null
    condicoesPagamento?: StringNullableFilter<"Cliente"> | string | null
    representanteId?: StringNullableFilter<"Cliente"> | string | null
    ativo?: BoolFilter<"Cliente"> | boolean
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    pedidos?: PedidoListRelationFilter
  }, "id" | "cnpj" | "emailComercial">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrderInput | SortOrder
    telefoneComercial?: SortOrderInput | SortOrder
    emailComercial?: SortOrder
    cep?: SortOrderInput | SortOrder
    rua?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    nomeContato?: SortOrderInput | SortOrder
    emailContato?: SortOrderInput | SortOrder
    telefoneContato?: SortOrderInput | SortOrder
    limiteCredito?: SortOrderInput | SortOrder
    condicoesPagamento?: SortOrderInput | SortOrder
    representanteId?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    razaoSocial?: StringWithAggregatesFilter<"Cliente"> | string
    nomeFantasia?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    cnpj?: StringWithAggregatesFilter<"Cliente"> | string
    inscricaoEstadual?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    telefoneComercial?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    emailComercial?: StringWithAggregatesFilter<"Cliente"> | string
    cep?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    rua?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    numero?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    complemento?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    bairro?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    estado?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    nomeContato?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    emailContato?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    telefoneContato?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    limiteCredito?: FloatNullableWithAggregatesFilter<"Cliente"> | number | null
    condicoesPagamento?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    representanteId?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    ativo?: BoolWithAggregatesFilter<"Cliente"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    destinatarioId?: StringFilter<"Notificacao"> | string
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    tipo?: EnumTipoNotificacaoFilter<"Notificacao"> | $Enums.TipoNotificacao
    prioridade?: EnumPrioridadeNotificacaoFilter<"Notificacao"> | $Enums.PrioridadeNotificacao
    dataEnvio?: DateTimeFilter<"Notificacao"> | Date | string
    lida?: BoolFilter<"Notificacao"> | boolean
    dataLeitura?: DateTimeNullableFilter<"Notificacao"> | Date | string | null
    metadados?: JsonNullableFilter<"Notificacao">
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type NotificacaoOrderByWithRelationInput = {
    id?: SortOrder
    destinatarioId?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    prioridade?: SortOrder
    dataEnvio?: SortOrder
    lida?: SortOrder
    dataLeitura?: SortOrderInput | SortOrder
    metadados?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    destinatarioId?: StringFilter<"Notificacao"> | string
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    tipo?: EnumTipoNotificacaoFilter<"Notificacao"> | $Enums.TipoNotificacao
    prioridade?: EnumPrioridadeNotificacaoFilter<"Notificacao"> | $Enums.PrioridadeNotificacao
    dataEnvio?: DateTimeFilter<"Notificacao"> | Date | string
    lida?: BoolFilter<"Notificacao"> | boolean
    dataLeitura?: DateTimeNullableFilter<"Notificacao"> | Date | string | null
    metadados?: JsonNullableFilter<"Notificacao">
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id">

  export type NotificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    destinatarioId?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    prioridade?: SortOrder
    dataEnvio?: SortOrder
    lida?: SortOrder
    dataLeitura?: SortOrderInput | SortOrder
    metadados?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notificacao"> | string
    destinatarioId?: StringWithAggregatesFilter<"Notificacao"> | string
    titulo?: StringWithAggregatesFilter<"Notificacao"> | string
    mensagem?: StringWithAggregatesFilter<"Notificacao"> | string
    tipo?: EnumTipoNotificacaoWithAggregatesFilter<"Notificacao"> | $Enums.TipoNotificacao
    prioridade?: EnumPrioridadeNotificacaoWithAggregatesFilter<"Notificacao"> | $Enums.PrioridadeNotificacao
    dataEnvio?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
    lida?: BoolWithAggregatesFilter<"Notificacao"> | boolean
    dataLeitura?: DateTimeNullableWithAggregatesFilter<"Notificacao"> | Date | string | null
    metadados?: JsonNullableWithAggregatesFilter<"Notificacao">
    createdAt?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel?: $Enums.PapelUsuario
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor?: FornecedorCreateNestedOneWithoutUsuarioInput
    representante?: RepresentanteCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel?: $Enums.PapelUsuario
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor?: FornecedorUncheckedCreateNestedOneWithoutUsuarioInput
    representante?: RepresentanteUncheckedCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneWithoutUsuarioNestedInput
    representante?: RepresentanteUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUncheckedUpdateOneWithoutUsuarioNestedInput
    representante?: RepresentanteUncheckedUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel?: $Enums.PapelUsuario
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorCreateInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefone?: string | null
    segmento: string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFornecedorInput
    produtos?: ProdutoCreateNestedManyWithoutFornecedorInput
    vinculacoes?: VinculacaoCreateNestedManyWithoutFornecedorInput
    convitesEnviados?: ConviteCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUncheckedCreateInput = {
    id?: string
    usuarioId: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefone?: string | null
    segmento: string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    produtos?: ProdutoUncheckedCreateNestedManyWithoutFornecedorInput
    vinculacoes?: VinculacaoUncheckedCreateNestedManyWithoutFornecedorInput
    convitesEnviados?: ConviteUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    segmento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFornecedorNestedInput
    produtos?: ProdutoUpdateManyWithoutFornecedorNestedInput
    vinculacoes?: VinculacaoUpdateManyWithoutFornecedorNestedInput
    convitesEnviados?: ConviteUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    segmento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUncheckedUpdateManyWithoutFornecedorNestedInput
    vinculacoes?: VinculacaoUncheckedUpdateManyWithoutFornecedorNestedInput
    convitesEnviados?: ConviteUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorCreateManyInput = {
    id?: string
    usuarioId: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefone?: string | null
    segmento: string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FornecedorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    segmento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    segmento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoCreateInput = {
    id?: string
    nome: string
    descricao: string
    precoBase: number
    categoria?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor?: FornecedorCreateNestedOneWithoutProdutosInput
    variantes?: VarianteProdutoCreateNestedManyWithoutProductInput
    itens?: ItemPedidoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: string
    nome: string
    descricao: string
    precoBase: number
    fornecedorId?: string | null
    categoria?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variantes?: VarianteProdutoUncheckedCreateNestedManyWithoutProductInput
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBase?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneWithoutProdutosNestedInput
    variantes?: VarianteProdutoUpdateManyWithoutProductNestedInput
    itens?: ItemPedidoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBase?: FloatFieldUpdateOperationsInput | number
    fornecedorId?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantes?: VarianteProdutoUncheckedUpdateManyWithoutProductNestedInput
    itens?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: string
    nome: string
    descricao: string
    precoBase: number
    fornecedorId?: string | null
    categoria?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProdutoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBase?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBase?: FloatFieldUpdateOperationsInput | number
    fornecedorId?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepresentanteCreateInput = {
    id?: string
    cpf?: string | null
    telefone?: string | null
    regiao: string
    especialidades?: RepresentanteCreateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRepresentanteInput
    vinculacoes?: VinculacaoCreateNestedManyWithoutRepresentanteInput
    comissoes?: ComissaoCreateNestedManyWithoutRepresentanteInput
    pedidos?: PedidoCreateNestedManyWithoutRepresentanteInput
    convitesEnviados?: ConviteCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteUncheckedCreateInput = {
    id?: string
    usuarioId: string
    cpf?: string | null
    telefone?: string | null
    regiao: string
    especialidades?: RepresentanteCreateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vinculacoes?: VinculacaoUncheckedCreateNestedManyWithoutRepresentanteInput
    comissoes?: ComissaoUncheckedCreateNestedManyWithoutRepresentanteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutRepresentanteInput
    convitesEnviados?: ConviteUncheckedCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRepresentanteNestedInput
    vinculacoes?: VinculacaoUpdateManyWithoutRepresentanteNestedInput
    comissoes?: ComissaoUpdateManyWithoutRepresentanteNestedInput
    pedidos?: PedidoUpdateManyWithoutRepresentanteNestedInput
    convitesEnviados?: ConviteUpdateManyWithoutRepresentanteNestedInput
  }

  export type RepresentanteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vinculacoes?: VinculacaoUncheckedUpdateManyWithoutRepresentanteNestedInput
    comissoes?: ComissaoUncheckedUpdateManyWithoutRepresentanteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutRepresentanteNestedInput
    convitesEnviados?: ConviteUncheckedUpdateManyWithoutRepresentanteNestedInput
  }

  export type RepresentanteCreateManyInput = {
    id?: string
    usuarioId: string
    cpf?: string | null
    telefone?: string | null
    regiao: string
    especialidades?: RepresentanteCreateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepresentanteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepresentanteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VarianteProdutoCreateInput = {
    id?: string
    sku: string
    preco: number
    estoque: number
    atributos: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProdutoCreateNestedOneWithoutVariantesInput
  }

  export type VarianteProdutoUncheckedCreateInput = {
    id?: string
    sku: string
    preco: number
    estoque: number
    atributos: JsonNullValueInput | InputJsonValue
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VarianteProdutoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    estoque?: IntFieldUpdateOperationsInput | number
    atributos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProdutoUpdateOneRequiredWithoutVariantesNestedInput
  }

  export type VarianteProdutoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    estoque?: IntFieldUpdateOperationsInput | number
    atributos?: JsonNullValueInput | InputJsonValue
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VarianteProdutoCreateManyInput = {
    id?: string
    sku: string
    preco: number
    estoque: number
    atributos: JsonNullValueInput | InputJsonValue
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VarianteProdutoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    estoque?: IntFieldUpdateOperationsInput | number
    atributos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VarianteProdutoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    estoque?: IntFieldUpdateOperationsInput | number
    atributos?: JsonNullValueInput | InputJsonValue
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VinculacaoCreateInput = {
    id?: string
    status?: $Enums.StatusVinculacao
    comissaoPercent?: number
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: Date | string
    dataInativacao?: Date | string | null
    motivoInativacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorCreateNestedOneWithoutVinculacoesInput
    representante: RepresentanteCreateNestedOneWithoutVinculacoesInput
    comissoes?: ComissaoCreateNestedManyWithoutVinculacaoInput
  }

  export type VinculacaoUncheckedCreateInput = {
    id?: string
    fornecedorId: string
    representanteId: string
    status?: $Enums.StatusVinculacao
    comissaoPercent?: number
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: Date | string
    dataInativacao?: Date | string | null
    motivoInativacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comissoes?: ComissaoUncheckedCreateNestedManyWithoutVinculacaoInput
  }

  export type VinculacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusVinculacaoFieldUpdateOperationsInput | $Enums.StatusVinculacao
    comissaoPercent?: FloatFieldUpdateOperationsInput | number
    precoEspecial?: BoolFieldUpdateOperationsInput | boolean
    acessoRelatorios?: BoolFieldUpdateOperationsInput | boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInativacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoInativacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneRequiredWithoutVinculacoesNestedInput
    representante?: RepresentanteUpdateOneRequiredWithoutVinculacoesNestedInput
    comissoes?: ComissaoUpdateManyWithoutVinculacaoNestedInput
  }

  export type VinculacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    representanteId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusVinculacaoFieldUpdateOperationsInput | $Enums.StatusVinculacao
    comissaoPercent?: FloatFieldUpdateOperationsInput | number
    precoEspecial?: BoolFieldUpdateOperationsInput | boolean
    acessoRelatorios?: BoolFieldUpdateOperationsInput | boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInativacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoInativacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comissoes?: ComissaoUncheckedUpdateManyWithoutVinculacaoNestedInput
  }

  export type VinculacaoCreateManyInput = {
    id?: string
    fornecedorId: string
    representanteId: string
    status?: $Enums.StatusVinculacao
    comissaoPercent?: number
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: Date | string
    dataInativacao?: Date | string | null
    motivoInativacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VinculacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusVinculacaoFieldUpdateOperationsInput | $Enums.StatusVinculacao
    comissaoPercent?: FloatFieldUpdateOperationsInput | number
    precoEspecial?: BoolFieldUpdateOperationsInput | boolean
    acessoRelatorios?: BoolFieldUpdateOperationsInput | boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInativacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoInativacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VinculacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    representanteId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusVinculacaoFieldUpdateOperationsInput | $Enums.StatusVinculacao
    comissaoPercent?: FloatFieldUpdateOperationsInput | number
    precoEspecial?: BoolFieldUpdateOperationsInput | boolean
    acessoRelatorios?: BoolFieldUpdateOperationsInput | boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInativacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoInativacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateInput = {
    id?: string
    dataPedido?: Date | string
    status?: $Enums.StatusPedido
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    representante?: RepresentanteCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
    comissoes?: ComissaoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: string
    clienteId: string
    representanteId?: string | null
    dataPedido?: Date | string
    status?: $Enums.StatusPedido
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    comissoes?: ComissaoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    representante?: RepresentanteUpdateOneWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    comissoes?: ComissaoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    comissoes?: ComissaoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: string
    clienteId: string
    representanteId?: string | null
    dataPedido?: Date | string
    status?: $Enums.StatusPedido
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PedidoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConviteCreateInput = {
    id?: string
    remetenteId: string
    destinatarioId: string
    tipoRemetente: $Enums.TipoConvite
    status?: $Enums.StatusConvite
    mensagem?: string | null
    comissaoPercent?: number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: Date | string
    dataResposta?: Date | string | null
    motivoRecusa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor?: FornecedorCreateNestedOneWithoutConvitesEnviadosInput
    representante?: RepresentanteCreateNestedOneWithoutConvitesEnviadosInput
  }

  export type ConviteUncheckedCreateInput = {
    id?: string
    remetenteId: string
    destinatarioId: string
    tipoRemetente: $Enums.TipoConvite
    fornecedorId?: string | null
    representanteId?: string | null
    status?: $Enums.StatusConvite
    mensagem?: string | null
    comissaoPercent?: number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: Date | string
    dataResposta?: Date | string | null
    motivoRecusa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    remetenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    tipoRemetente?: EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite
    status?: EnumStatusConviteFieldUpdateOperationsInput | $Enums.StatusConvite
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    comissaoPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResposta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRecusa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneWithoutConvitesEnviadosNestedInput
    representante?: RepresentanteUpdateOneWithoutConvitesEnviadosNestedInput
  }

  export type ConviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    remetenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    tipoRemetente?: EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite
    fornecedorId?: NullableStringFieldUpdateOperationsInput | string | null
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConviteFieldUpdateOperationsInput | $Enums.StatusConvite
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    comissaoPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResposta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRecusa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConviteCreateManyInput = {
    id?: string
    remetenteId: string
    destinatarioId: string
    tipoRemetente: $Enums.TipoConvite
    fornecedorId?: string | null
    representanteId?: string | null
    status?: $Enums.StatusConvite
    mensagem?: string | null
    comissaoPercent?: number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: Date | string
    dataResposta?: Date | string | null
    motivoRecusa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    remetenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    tipoRemetente?: EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite
    status?: EnumStatusConviteFieldUpdateOperationsInput | $Enums.StatusConvite
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    comissaoPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResposta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRecusa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    remetenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    tipoRemetente?: EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite
    fornecedorId?: NullableStringFieldUpdateOperationsInput | string | null
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConviteFieldUpdateOperationsInput | $Enums.StatusConvite
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    comissaoPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResposta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRecusa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoCreateInput = {
    id?: string
    varianteId?: string | null
    quantidade: number
    precoUnitario: number
    desconto?: number | null
    valorTotal: number
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    produto: ProdutoCreateNestedOneWithoutItensInput
    pedido: PedidoCreateNestedOneWithoutItensInput
  }

  export type ItemPedidoUncheckedCreateInput = {
    id?: string
    produtoId: string
    varianteId?: string | null
    quantidade: number
    precoUnitario: number
    desconto?: number | null
    valorTotal: number
    observacoes?: string | null
    pedidoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemPedidoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    varianteId?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutItensNestedInput
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemPedidoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    produtoId?: StringFieldUpdateOperationsInput | string
    varianteId?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoCreateManyInput = {
    id?: string
    produtoId: string
    varianteId?: string | null
    quantidade: number
    precoUnitario: number
    desconto?: number | null
    valorTotal: number
    observacoes?: string | null
    pedidoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemPedidoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    varianteId?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    produtoId?: StringFieldUpdateOperationsInput | string
    varianteId?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComissaoCreateInput = {
    id?: string
    percentual: number
    valorCalculado: number
    status?: $Enums.StatusComissao
    dataEfetivacao?: Date | string | null
    dataPagamento?: Date | string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vinculacao: VinculacaoCreateNestedOneWithoutComissoesInput
    representante: RepresentanteCreateNestedOneWithoutComissoesInput
    pedido: PedidoCreateNestedOneWithoutComissoesInput
  }

  export type ComissaoUncheckedCreateInput = {
    id?: string
    vinculacaoId: string
    representanteId: string
    pedidoId: string
    percentual: number
    valorCalculado: number
    status?: $Enums.StatusComissao
    dataEfetivacao?: Date | string | null
    dataPagamento?: Date | string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComissaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusComissaoFieldUpdateOperationsInput | $Enums.StatusComissao
    dataEfetivacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vinculacao?: VinculacaoUpdateOneRequiredWithoutComissoesNestedInput
    representante?: RepresentanteUpdateOneRequiredWithoutComissoesNestedInput
    pedido?: PedidoUpdateOneRequiredWithoutComissoesNestedInput
  }

  export type ComissaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vinculacaoId?: StringFieldUpdateOperationsInput | string
    representanteId?: StringFieldUpdateOperationsInput | string
    pedidoId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusComissaoFieldUpdateOperationsInput | $Enums.StatusComissao
    dataEfetivacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComissaoCreateManyInput = {
    id?: string
    vinculacaoId: string
    representanteId: string
    pedidoId: string
    percentual: number
    valorCalculado: number
    status?: $Enums.StatusComissao
    dataEfetivacao?: Date | string | null
    dataPagamento?: Date | string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComissaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusComissaoFieldUpdateOperationsInput | $Enums.StatusComissao
    dataEfetivacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComissaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vinculacaoId?: StringFieldUpdateOperationsInput | string
    representanteId?: StringFieldUpdateOperationsInput | string
    pedidoId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusComissaoFieldUpdateOperationsInput | $Enums.StatusComissao
    dataEfetivacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefoneComercial?: string | null
    emailComercial: string
    cep?: string | null
    rua?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    nomeContato?: string | null
    emailContato?: string | null
    telefoneContato?: string | null
    limiteCredito?: number | null
    condicoesPagamento?: string | null
    representanteId?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefoneComercial?: string | null
    emailComercial: string
    cep?: string | null
    rua?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    nomeContato?: string | null
    emailContato?: string | null
    telefoneContato?: string | null
    limiteCredito?: number | null
    condicoesPagamento?: string | null
    representanteId?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneComercial?: NullableStringFieldUpdateOperationsInput | string | null
    emailComercial?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    nomeContato?: NullableStringFieldUpdateOperationsInput | string | null
    emailContato?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    limiteCredito?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoesPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneComercial?: NullableStringFieldUpdateOperationsInput | string | null
    emailComercial?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    nomeContato?: NullableStringFieldUpdateOperationsInput | string | null
    emailContato?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    limiteCredito?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoesPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefoneComercial?: string | null
    emailComercial: string
    cep?: string | null
    rua?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    nomeContato?: string | null
    emailContato?: string | null
    telefoneContato?: string | null
    limiteCredito?: number | null
    condicoesPagamento?: string | null
    representanteId?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneComercial?: NullableStringFieldUpdateOperationsInput | string | null
    emailComercial?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    nomeContato?: NullableStringFieldUpdateOperationsInput | string | null
    emailContato?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    limiteCredito?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoesPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneComercial?: NullableStringFieldUpdateOperationsInput | string | null
    emailComercial?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    nomeContato?: NullableStringFieldUpdateOperationsInput | string | null
    emailContato?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    limiteCredito?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoesPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateInput = {
    id?: string
    titulo: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    prioridade?: $Enums.PrioridadeNotificacao
    dataEnvio?: Date | string
    lida?: boolean
    dataLeitura?: Date | string | null
    metadados?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateInput = {
    id?: string
    destinatarioId: string
    titulo: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    prioridade?: $Enums.PrioridadeNotificacao
    dataEnvio?: Date | string
    lida?: boolean
    dataLeitura?: Date | string | null
    metadados?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    prioridade?: EnumPrioridadeNotificacaoFieldUpdateOperationsInput | $Enums.PrioridadeNotificacao
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadados?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    prioridade?: EnumPrioridadeNotificacaoFieldUpdateOperationsInput | $Enums.PrioridadeNotificacao
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadados?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateManyInput = {
    id?: string
    destinatarioId: string
    titulo: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    prioridade?: $Enums.PrioridadeNotificacao
    dataEnvio?: Date | string
    lida?: boolean
    dataLeitura?: Date | string | null
    metadados?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    prioridade?: EnumPrioridadeNotificacaoFieldUpdateOperationsInput | $Enums.PrioridadeNotificacao
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadados?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    prioridade?: EnumPrioridadeNotificacaoFieldUpdateOperationsInput | $Enums.PrioridadeNotificacao
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadados?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPapelUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.PapelUsuario | EnumPapelUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.PapelUsuario[] | ListEnumPapelUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.PapelUsuario[] | ListEnumPapelUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumPapelUsuarioFilter<$PrismaModel> | $Enums.PapelUsuario
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FornecedorNullableRelationFilter = {
    is?: FornecedorWhereInput | null
    isNot?: FornecedorWhereInput | null
  }

  export type RepresentanteNullableRelationFilter = {
    is?: RepresentanteWhereInput | null
    isNot?: RepresentanteWhereInput | null
  }

  export type NotificacaoListRelationFilter = {
    every?: NotificacaoWhereInput
    some?: NotificacaoWhereInput
    none?: NotificacaoWhereInput
  }

  export type NotificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    papel?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    papel?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    papel?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPapelUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PapelUsuario | EnumPapelUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.PapelUsuario[] | ListEnumPapelUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.PapelUsuario[] | ListEnumPapelUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumPapelUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.PapelUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPapelUsuarioFilter<$PrismaModel>
    _max?: NestedEnumPapelUsuarioFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ProdutoListRelationFilter = {
    every?: ProdutoWhereInput
    some?: ProdutoWhereInput
    none?: ProdutoWhereInput
  }

  export type VinculacaoListRelationFilter = {
    every?: VinculacaoWhereInput
    some?: VinculacaoWhereInput
    none?: VinculacaoWhereInput
  }

  export type ConviteListRelationFilter = {
    every?: ConviteWhereInput
    some?: ConviteWhereInput
    none?: ConviteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VinculacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FornecedorCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    telefone?: SortOrder
    segmento?: SortOrder
    endereco?: SortOrder
    configuracoes?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    telefone?: SortOrder
    segmento?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    telefone?: SortOrder
    segmento?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VarianteProdutoListRelationFilter = {
    every?: VarianteProdutoWhereInput
    some?: VarianteProdutoWhereInput
    none?: VarianteProdutoWhereInput
  }

  export type ItemPedidoListRelationFilter = {
    every?: ItemPedidoWhereInput
    some?: ItemPedidoWhereInput
    none?: ItemPedidoWhereInput
  }

  export type VarianteProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    precoBase?: SortOrder
    fornecedorId?: SortOrder
    categoria?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    precoBase?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    precoBase?: SortOrder
    fornecedorId?: SortOrder
    categoria?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    precoBase?: SortOrder
    fornecedorId?: SortOrder
    categoria?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    precoBase?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ComissaoListRelationFilter = {
    every?: ComissaoWhereInput
    some?: ComissaoWhereInput
    none?: ComissaoWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type ComissaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepresentanteCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    regiao?: SortOrder
    especialidades?: SortOrder
    endereco?: SortOrder
    configuracoes?: SortOrder
    avaliacaoMedia?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepresentanteAvgOrderByAggregateInput = {
    avaliacaoMedia?: SortOrder
  }

  export type RepresentanteMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    regiao?: SortOrder
    avaliacaoMedia?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepresentanteMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    regiao?: SortOrder
    avaliacaoMedia?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepresentanteSumOrderByAggregateInput = {
    avaliacaoMedia?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProdutoRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type VarianteProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    preco?: SortOrder
    estoque?: SortOrder
    atributos?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VarianteProdutoAvgOrderByAggregateInput = {
    preco?: SortOrder
    estoque?: SortOrder
  }

  export type VarianteProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    preco?: SortOrder
    estoque?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VarianteProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    preco?: SortOrder
    estoque?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VarianteProdutoSumOrderByAggregateInput = {
    preco?: SortOrder
    estoque?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumStatusVinculacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusVinculacao | EnumStatusVinculacaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusVinculacao[] | ListEnumStatusVinculacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusVinculacao[] | ListEnumStatusVinculacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusVinculacaoFilter<$PrismaModel> | $Enums.StatusVinculacao
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FornecedorRelationFilter = {
    is?: FornecedorWhereInput
    isNot?: FornecedorWhereInput
  }

  export type RepresentanteRelationFilter = {
    is?: RepresentanteWhereInput
    isNot?: RepresentanteWhereInput
  }

  export type VinculacaoFornecedorIdRepresentanteIdCompoundUniqueInput = {
    fornecedorId: string
    representanteId: string
  }

  export type VinculacaoCountOrderByAggregateInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    representanteId?: SortOrder
    status?: SortOrder
    comissaoPercent?: SortOrder
    precoEspecial?: SortOrder
    acessoRelatorios?: SortOrder
    configuracoes?: SortOrder
    dataVinculacao?: SortOrder
    dataInativacao?: SortOrder
    motivoInativacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VinculacaoAvgOrderByAggregateInput = {
    comissaoPercent?: SortOrder
  }

  export type VinculacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    representanteId?: SortOrder
    status?: SortOrder
    comissaoPercent?: SortOrder
    precoEspecial?: SortOrder
    acessoRelatorios?: SortOrder
    dataVinculacao?: SortOrder
    dataInativacao?: SortOrder
    motivoInativacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VinculacaoMinOrderByAggregateInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    representanteId?: SortOrder
    status?: SortOrder
    comissaoPercent?: SortOrder
    precoEspecial?: SortOrder
    acessoRelatorios?: SortOrder
    dataVinculacao?: SortOrder
    dataInativacao?: SortOrder
    motivoInativacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VinculacaoSumOrderByAggregateInput = {
    comissaoPercent?: SortOrder
  }

  export type EnumStatusVinculacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusVinculacao | EnumStatusVinculacaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusVinculacao[] | ListEnumStatusVinculacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusVinculacao[] | ListEnumStatusVinculacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusVinculacaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusVinculacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusVinculacaoFilter<$PrismaModel>
    _max?: NestedEnumStatusVinculacaoFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatusPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoFilter<$PrismaModel> | $Enums.StatusPedido
  }

  export type ClienteRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    representanteId?: SortOrder
    dataPedido?: SortOrder
    status?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    valorTotal?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    representanteId?: SortOrder
    dataPedido?: SortOrder
    status?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    representanteId?: SortOrder
    dataPedido?: SortOrder
    status?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    valorTotal?: SortOrder
  }

  export type EnumStatusPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPedidoFilter<$PrismaModel>
    _max?: NestedEnumStatusPedidoFilter<$PrismaModel>
  }

  export type EnumTipoConviteFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoConvite | EnumTipoConviteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoConvite[] | ListEnumTipoConviteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoConvite[] | ListEnumTipoConviteFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoConviteFilter<$PrismaModel> | $Enums.TipoConvite
  }

  export type EnumStatusConviteFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusConvite | EnumStatusConviteFieldRefInput<$PrismaModel>
    in?: $Enums.StatusConvite[] | ListEnumStatusConviteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusConvite[] | ListEnumStatusConviteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusConviteFilter<$PrismaModel> | $Enums.StatusConvite
  }

  export type ConviteCountOrderByAggregateInput = {
    id?: SortOrder
    remetenteId?: SortOrder
    destinatarioId?: SortOrder
    tipoRemetente?: SortOrder
    fornecedorId?: SortOrder
    representanteId?: SortOrder
    status?: SortOrder
    mensagem?: SortOrder
    comissaoPercent?: SortOrder
    configuracoes?: SortOrder
    dataEnvio?: SortOrder
    dataResposta?: SortOrder
    motivoRecusa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConviteAvgOrderByAggregateInput = {
    comissaoPercent?: SortOrder
  }

  export type ConviteMaxOrderByAggregateInput = {
    id?: SortOrder
    remetenteId?: SortOrder
    destinatarioId?: SortOrder
    tipoRemetente?: SortOrder
    fornecedorId?: SortOrder
    representanteId?: SortOrder
    status?: SortOrder
    mensagem?: SortOrder
    comissaoPercent?: SortOrder
    dataEnvio?: SortOrder
    dataResposta?: SortOrder
    motivoRecusa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConviteMinOrderByAggregateInput = {
    id?: SortOrder
    remetenteId?: SortOrder
    destinatarioId?: SortOrder
    tipoRemetente?: SortOrder
    fornecedorId?: SortOrder
    representanteId?: SortOrder
    status?: SortOrder
    mensagem?: SortOrder
    comissaoPercent?: SortOrder
    dataEnvio?: SortOrder
    dataResposta?: SortOrder
    motivoRecusa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConviteSumOrderByAggregateInput = {
    comissaoPercent?: SortOrder
  }

  export type EnumTipoConviteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoConvite | EnumTipoConviteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoConvite[] | ListEnumTipoConviteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoConvite[] | ListEnumTipoConviteFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoConviteWithAggregatesFilter<$PrismaModel> | $Enums.TipoConvite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoConviteFilter<$PrismaModel>
    _max?: NestedEnumTipoConviteFilter<$PrismaModel>
  }

  export type EnumStatusConviteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusConvite | EnumStatusConviteFieldRefInput<$PrismaModel>
    in?: $Enums.StatusConvite[] | ListEnumStatusConviteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusConvite[] | ListEnumStatusConviteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusConviteWithAggregatesFilter<$PrismaModel> | $Enums.StatusConvite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusConviteFilter<$PrismaModel>
    _max?: NestedEnumStatusConviteFilter<$PrismaModel>
  }

  export type PedidoRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ItemPedidoCountOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    varianteId?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrder
    valorTotal?: SortOrder
    observacoes?: SortOrder
    pedidoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemPedidoAvgOrderByAggregateInput = {
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrder
    valorTotal?: SortOrder
  }

  export type ItemPedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    varianteId?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrder
    valorTotal?: SortOrder
    observacoes?: SortOrder
    pedidoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemPedidoMinOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    varianteId?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrder
    valorTotal?: SortOrder
    observacoes?: SortOrder
    pedidoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemPedidoSumOrderByAggregateInput = {
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrder
    valorTotal?: SortOrder
  }

  export type EnumStatusComissaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusComissao | EnumStatusComissaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusComissao[] | ListEnumStatusComissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusComissao[] | ListEnumStatusComissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusComissaoFilter<$PrismaModel> | $Enums.StatusComissao
  }

  export type VinculacaoRelationFilter = {
    is?: VinculacaoWhereInput
    isNot?: VinculacaoWhereInput
  }

  export type ComissaoCountOrderByAggregateInput = {
    id?: SortOrder
    vinculacaoId?: SortOrder
    representanteId?: SortOrder
    pedidoId?: SortOrder
    percentual?: SortOrder
    valorCalculado?: SortOrder
    status?: SortOrder
    dataEfetivacao?: SortOrder
    dataPagamento?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComissaoAvgOrderByAggregateInput = {
    percentual?: SortOrder
    valorCalculado?: SortOrder
  }

  export type ComissaoMaxOrderByAggregateInput = {
    id?: SortOrder
    vinculacaoId?: SortOrder
    representanteId?: SortOrder
    pedidoId?: SortOrder
    percentual?: SortOrder
    valorCalculado?: SortOrder
    status?: SortOrder
    dataEfetivacao?: SortOrder
    dataPagamento?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComissaoMinOrderByAggregateInput = {
    id?: SortOrder
    vinculacaoId?: SortOrder
    representanteId?: SortOrder
    pedidoId?: SortOrder
    percentual?: SortOrder
    valorCalculado?: SortOrder
    status?: SortOrder
    dataEfetivacao?: SortOrder
    dataPagamento?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComissaoSumOrderByAggregateInput = {
    percentual?: SortOrder
    valorCalculado?: SortOrder
  }

  export type EnumStatusComissaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusComissao | EnumStatusComissaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusComissao[] | ListEnumStatusComissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusComissao[] | ListEnumStatusComissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusComissaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusComissao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusComissaoFilter<$PrismaModel>
    _max?: NestedEnumStatusComissaoFilter<$PrismaModel>
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    telefoneComercial?: SortOrder
    emailComercial?: SortOrder
    cep?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    nomeContato?: SortOrder
    emailContato?: SortOrder
    telefoneContato?: SortOrder
    limiteCredito?: SortOrder
    condicoesPagamento?: SortOrder
    representanteId?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    limiteCredito?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    telefoneComercial?: SortOrder
    emailComercial?: SortOrder
    cep?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    nomeContato?: SortOrder
    emailContato?: SortOrder
    telefoneContato?: SortOrder
    limiteCredito?: SortOrder
    condicoesPagamento?: SortOrder
    representanteId?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    telefoneComercial?: SortOrder
    emailComercial?: SortOrder
    cep?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    nomeContato?: SortOrder
    emailContato?: SortOrder
    telefoneContato?: SortOrder
    limiteCredito?: SortOrder
    condicoesPagamento?: SortOrder
    representanteId?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    limiteCredito?: SortOrder
  }

  export type EnumTipoNotificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | EnumTipoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoNotificacaoFilter<$PrismaModel> | $Enums.TipoNotificacao
  }

  export type EnumPrioridadeNotificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.PrioridadeNotificacao | EnumPrioridadeNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.PrioridadeNotificacao[] | ListEnumPrioridadeNotificacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrioridadeNotificacao[] | ListEnumPrioridadeNotificacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeNotificacaoFilter<$PrismaModel> | $Enums.PrioridadeNotificacao
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    destinatarioId?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    prioridade?: SortOrder
    dataEnvio?: SortOrder
    lida?: SortOrder
    dataLeitura?: SortOrder
    metadados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    destinatarioId?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    prioridade?: SortOrder
    dataEnvio?: SortOrder
    lida?: SortOrder
    dataLeitura?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    destinatarioId?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    prioridade?: SortOrder
    dataEnvio?: SortOrder
    lida?: SortOrder
    dataLeitura?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTipoNotificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | EnumTipoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoNotificacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoNotificacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoNotificacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoNotificacaoFilter<$PrismaModel>
  }

  export type EnumPrioridadeNotificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrioridadeNotificacao | EnumPrioridadeNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.PrioridadeNotificacao[] | ListEnumPrioridadeNotificacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrioridadeNotificacao[] | ListEnumPrioridadeNotificacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeNotificacaoWithAggregatesFilter<$PrismaModel> | $Enums.PrioridadeNotificacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadeNotificacaoFilter<$PrismaModel>
    _max?: NestedEnumPrioridadeNotificacaoFilter<$PrismaModel>
  }

  export type FornecedorCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<FornecedorCreateWithoutUsuarioInput, FornecedorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutUsuarioInput
    connect?: FornecedorWhereUniqueInput
  }

  export type RepresentanteCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<RepresentanteCreateWithoutUsuarioInput, RepresentanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutUsuarioInput
    connect?: RepresentanteWhereUniqueInput
  }

  export type NotificacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type FornecedorUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<FornecedorCreateWithoutUsuarioInput, FornecedorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutUsuarioInput
    connect?: FornecedorWhereUniqueInput
  }

  export type RepresentanteUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<RepresentanteCreateWithoutUsuarioInput, RepresentanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutUsuarioInput
    connect?: RepresentanteWhereUniqueInput
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPapelUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.PapelUsuario
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FornecedorUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FornecedorCreateWithoutUsuarioInput, FornecedorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutUsuarioInput
    upsert?: FornecedorUpsertWithoutUsuarioInput
    disconnect?: FornecedorWhereInput | boolean
    delete?: FornecedorWhereInput | boolean
    connect?: FornecedorWhereUniqueInput
    update?: XOR<XOR<FornecedorUpdateToOneWithWhereWithoutUsuarioInput, FornecedorUpdateWithoutUsuarioInput>, FornecedorUncheckedUpdateWithoutUsuarioInput>
  }

  export type RepresentanteUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<RepresentanteCreateWithoutUsuarioInput, RepresentanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutUsuarioInput
    upsert?: RepresentanteUpsertWithoutUsuarioInput
    disconnect?: RepresentanteWhereInput | boolean
    delete?: RepresentanteWhereInput | boolean
    connect?: RepresentanteWhereUniqueInput
    update?: XOR<XOR<RepresentanteUpdateToOneWithWhereWithoutUsuarioInput, RepresentanteUpdateWithoutUsuarioInput>, RepresentanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type NotificacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput | NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput | NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUsuarioInput | NotificacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type FornecedorUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FornecedorCreateWithoutUsuarioInput, FornecedorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutUsuarioInput
    upsert?: FornecedorUpsertWithoutUsuarioInput
    disconnect?: FornecedorWhereInput | boolean
    delete?: FornecedorWhereInput | boolean
    connect?: FornecedorWhereUniqueInput
    update?: XOR<XOR<FornecedorUpdateToOneWithWhereWithoutUsuarioInput, FornecedorUpdateWithoutUsuarioInput>, FornecedorUncheckedUpdateWithoutUsuarioInput>
  }

  export type RepresentanteUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<RepresentanteCreateWithoutUsuarioInput, RepresentanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutUsuarioInput
    upsert?: RepresentanteUpsertWithoutUsuarioInput
    disconnect?: RepresentanteWhereInput | boolean
    delete?: RepresentanteWhereInput | boolean
    connect?: RepresentanteWhereUniqueInput
    update?: XOR<XOR<RepresentanteUpdateToOneWithWhereWithoutUsuarioInput, RepresentanteUpdateWithoutUsuarioInput>, RepresentanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput | NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput | NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUsuarioInput | NotificacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutFornecedorInput = {
    create?: XOR<UsuarioCreateWithoutFornecedorInput, UsuarioUncheckedCreateWithoutFornecedorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFornecedorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProdutoCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<ProdutoCreateWithoutFornecedorInput, ProdutoUncheckedCreateWithoutFornecedorInput> | ProdutoCreateWithoutFornecedorInput[] | ProdutoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutFornecedorInput | ProdutoCreateOrConnectWithoutFornecedorInput[]
    createMany?: ProdutoCreateManyFornecedorInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type VinculacaoCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<VinculacaoCreateWithoutFornecedorInput, VinculacaoUncheckedCreateWithoutFornecedorInput> | VinculacaoCreateWithoutFornecedorInput[] | VinculacaoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: VinculacaoCreateOrConnectWithoutFornecedorInput | VinculacaoCreateOrConnectWithoutFornecedorInput[]
    createMany?: VinculacaoCreateManyFornecedorInputEnvelope
    connect?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
  }

  export type ConviteCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<ConviteCreateWithoutFornecedorInput, ConviteUncheckedCreateWithoutFornecedorInput> | ConviteCreateWithoutFornecedorInput[] | ConviteUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ConviteCreateOrConnectWithoutFornecedorInput | ConviteCreateOrConnectWithoutFornecedorInput[]
    createMany?: ConviteCreateManyFornecedorInputEnvelope
    connect?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<ProdutoCreateWithoutFornecedorInput, ProdutoUncheckedCreateWithoutFornecedorInput> | ProdutoCreateWithoutFornecedorInput[] | ProdutoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutFornecedorInput | ProdutoCreateOrConnectWithoutFornecedorInput[]
    createMany?: ProdutoCreateManyFornecedorInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type VinculacaoUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<VinculacaoCreateWithoutFornecedorInput, VinculacaoUncheckedCreateWithoutFornecedorInput> | VinculacaoCreateWithoutFornecedorInput[] | VinculacaoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: VinculacaoCreateOrConnectWithoutFornecedorInput | VinculacaoCreateOrConnectWithoutFornecedorInput[]
    createMany?: VinculacaoCreateManyFornecedorInputEnvelope
    connect?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
  }

  export type ConviteUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<ConviteCreateWithoutFornecedorInput, ConviteUncheckedCreateWithoutFornecedorInput> | ConviteCreateWithoutFornecedorInput[] | ConviteUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ConviteCreateOrConnectWithoutFornecedorInput | ConviteCreateOrConnectWithoutFornecedorInput[]
    createMany?: ConviteCreateManyFornecedorInputEnvelope
    connect?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateOneRequiredWithoutFornecedorNestedInput = {
    create?: XOR<UsuarioCreateWithoutFornecedorInput, UsuarioUncheckedCreateWithoutFornecedorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFornecedorInput
    upsert?: UsuarioUpsertWithoutFornecedorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFornecedorInput, UsuarioUpdateWithoutFornecedorInput>, UsuarioUncheckedUpdateWithoutFornecedorInput>
  }

  export type ProdutoUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<ProdutoCreateWithoutFornecedorInput, ProdutoUncheckedCreateWithoutFornecedorInput> | ProdutoCreateWithoutFornecedorInput[] | ProdutoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutFornecedorInput | ProdutoCreateOrConnectWithoutFornecedorInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutFornecedorInput | ProdutoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: ProdutoCreateManyFornecedorInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutFornecedorInput | ProdutoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutFornecedorInput | ProdutoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type VinculacaoUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<VinculacaoCreateWithoutFornecedorInput, VinculacaoUncheckedCreateWithoutFornecedorInput> | VinculacaoCreateWithoutFornecedorInput[] | VinculacaoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: VinculacaoCreateOrConnectWithoutFornecedorInput | VinculacaoCreateOrConnectWithoutFornecedorInput[]
    upsert?: VinculacaoUpsertWithWhereUniqueWithoutFornecedorInput | VinculacaoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: VinculacaoCreateManyFornecedorInputEnvelope
    set?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    disconnect?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    delete?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    connect?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    update?: VinculacaoUpdateWithWhereUniqueWithoutFornecedorInput | VinculacaoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: VinculacaoUpdateManyWithWhereWithoutFornecedorInput | VinculacaoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: VinculacaoScalarWhereInput | VinculacaoScalarWhereInput[]
  }

  export type ConviteUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<ConviteCreateWithoutFornecedorInput, ConviteUncheckedCreateWithoutFornecedorInput> | ConviteCreateWithoutFornecedorInput[] | ConviteUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ConviteCreateOrConnectWithoutFornecedorInput | ConviteCreateOrConnectWithoutFornecedorInput[]
    upsert?: ConviteUpsertWithWhereUniqueWithoutFornecedorInput | ConviteUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: ConviteCreateManyFornecedorInputEnvelope
    set?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    disconnect?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    delete?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    connect?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    update?: ConviteUpdateWithWhereUniqueWithoutFornecedorInput | ConviteUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: ConviteUpdateManyWithWhereWithoutFornecedorInput | ConviteUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: ConviteScalarWhereInput | ConviteScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<ProdutoCreateWithoutFornecedorInput, ProdutoUncheckedCreateWithoutFornecedorInput> | ProdutoCreateWithoutFornecedorInput[] | ProdutoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutFornecedorInput | ProdutoCreateOrConnectWithoutFornecedorInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutFornecedorInput | ProdutoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: ProdutoCreateManyFornecedorInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutFornecedorInput | ProdutoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutFornecedorInput | ProdutoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type VinculacaoUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<VinculacaoCreateWithoutFornecedorInput, VinculacaoUncheckedCreateWithoutFornecedorInput> | VinculacaoCreateWithoutFornecedorInput[] | VinculacaoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: VinculacaoCreateOrConnectWithoutFornecedorInput | VinculacaoCreateOrConnectWithoutFornecedorInput[]
    upsert?: VinculacaoUpsertWithWhereUniqueWithoutFornecedorInput | VinculacaoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: VinculacaoCreateManyFornecedorInputEnvelope
    set?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    disconnect?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    delete?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    connect?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    update?: VinculacaoUpdateWithWhereUniqueWithoutFornecedorInput | VinculacaoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: VinculacaoUpdateManyWithWhereWithoutFornecedorInput | VinculacaoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: VinculacaoScalarWhereInput | VinculacaoScalarWhereInput[]
  }

  export type ConviteUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<ConviteCreateWithoutFornecedorInput, ConviteUncheckedCreateWithoutFornecedorInput> | ConviteCreateWithoutFornecedorInput[] | ConviteUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ConviteCreateOrConnectWithoutFornecedorInput | ConviteCreateOrConnectWithoutFornecedorInput[]
    upsert?: ConviteUpsertWithWhereUniqueWithoutFornecedorInput | ConviteUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: ConviteCreateManyFornecedorInputEnvelope
    set?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    disconnect?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    delete?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    connect?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    update?: ConviteUpdateWithWhereUniqueWithoutFornecedorInput | ConviteUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: ConviteUpdateManyWithWhereWithoutFornecedorInput | ConviteUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: ConviteScalarWhereInput | ConviteScalarWhereInput[]
  }

  export type FornecedorCreateNestedOneWithoutProdutosInput = {
    create?: XOR<FornecedorCreateWithoutProdutosInput, FornecedorUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutProdutosInput
    connect?: FornecedorWhereUniqueInput
  }

  export type VarianteProdutoCreateNestedManyWithoutProductInput = {
    create?: XOR<VarianteProdutoCreateWithoutProductInput, VarianteProdutoUncheckedCreateWithoutProductInput> | VarianteProdutoCreateWithoutProductInput[] | VarianteProdutoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VarianteProdutoCreateOrConnectWithoutProductInput | VarianteProdutoCreateOrConnectWithoutProductInput[]
    createMany?: VarianteProdutoCreateManyProductInputEnvelope
    connect?: VarianteProdutoWhereUniqueInput | VarianteProdutoWhereUniqueInput[]
  }

  export type ItemPedidoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type VarianteProdutoUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<VarianteProdutoCreateWithoutProductInput, VarianteProdutoUncheckedCreateWithoutProductInput> | VarianteProdutoCreateWithoutProductInput[] | VarianteProdutoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VarianteProdutoCreateOrConnectWithoutProductInput | VarianteProdutoCreateOrConnectWithoutProductInput[]
    createMany?: VarianteProdutoCreateManyProductInputEnvelope
    connect?: VarianteProdutoWhereUniqueInput | VarianteProdutoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FornecedorUpdateOneWithoutProdutosNestedInput = {
    create?: XOR<FornecedorCreateWithoutProdutosInput, FornecedorUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutProdutosInput
    upsert?: FornecedorUpsertWithoutProdutosInput
    disconnect?: FornecedorWhereInput | boolean
    delete?: FornecedorWhereInput | boolean
    connect?: FornecedorWhereUniqueInput
    update?: XOR<XOR<FornecedorUpdateToOneWithWhereWithoutProdutosInput, FornecedorUpdateWithoutProdutosInput>, FornecedorUncheckedUpdateWithoutProdutosInput>
  }

  export type VarianteProdutoUpdateManyWithoutProductNestedInput = {
    create?: XOR<VarianteProdutoCreateWithoutProductInput, VarianteProdutoUncheckedCreateWithoutProductInput> | VarianteProdutoCreateWithoutProductInput[] | VarianteProdutoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VarianteProdutoCreateOrConnectWithoutProductInput | VarianteProdutoCreateOrConnectWithoutProductInput[]
    upsert?: VarianteProdutoUpsertWithWhereUniqueWithoutProductInput | VarianteProdutoUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VarianteProdutoCreateManyProductInputEnvelope
    set?: VarianteProdutoWhereUniqueInput | VarianteProdutoWhereUniqueInput[]
    disconnect?: VarianteProdutoWhereUniqueInput | VarianteProdutoWhereUniqueInput[]
    delete?: VarianteProdutoWhereUniqueInput | VarianteProdutoWhereUniqueInput[]
    connect?: VarianteProdutoWhereUniqueInput | VarianteProdutoWhereUniqueInput[]
    update?: VarianteProdutoUpdateWithWhereUniqueWithoutProductInput | VarianteProdutoUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VarianteProdutoUpdateManyWithWhereWithoutProductInput | VarianteProdutoUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VarianteProdutoScalarWhereInput | VarianteProdutoScalarWhereInput[]
  }

  export type ItemPedidoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type VarianteProdutoUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<VarianteProdutoCreateWithoutProductInput, VarianteProdutoUncheckedCreateWithoutProductInput> | VarianteProdutoCreateWithoutProductInput[] | VarianteProdutoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VarianteProdutoCreateOrConnectWithoutProductInput | VarianteProdutoCreateOrConnectWithoutProductInput[]
    upsert?: VarianteProdutoUpsertWithWhereUniqueWithoutProductInput | VarianteProdutoUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VarianteProdutoCreateManyProductInputEnvelope
    set?: VarianteProdutoWhereUniqueInput | VarianteProdutoWhereUniqueInput[]
    disconnect?: VarianteProdutoWhereUniqueInput | VarianteProdutoWhereUniqueInput[]
    delete?: VarianteProdutoWhereUniqueInput | VarianteProdutoWhereUniqueInput[]
    connect?: VarianteProdutoWhereUniqueInput | VarianteProdutoWhereUniqueInput[]
    update?: VarianteProdutoUpdateWithWhereUniqueWithoutProductInput | VarianteProdutoUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VarianteProdutoUpdateManyWithWhereWithoutProductInput | VarianteProdutoUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VarianteProdutoScalarWhereInput | VarianteProdutoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type RepresentanteCreateespecialidadesInput = {
    set: string[]
  }

  export type UsuarioCreateNestedOneWithoutRepresentanteInput = {
    create?: XOR<UsuarioCreateWithoutRepresentanteInput, UsuarioUncheckedCreateWithoutRepresentanteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRepresentanteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VinculacaoCreateNestedManyWithoutRepresentanteInput = {
    create?: XOR<VinculacaoCreateWithoutRepresentanteInput, VinculacaoUncheckedCreateWithoutRepresentanteInput> | VinculacaoCreateWithoutRepresentanteInput[] | VinculacaoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: VinculacaoCreateOrConnectWithoutRepresentanteInput | VinculacaoCreateOrConnectWithoutRepresentanteInput[]
    createMany?: VinculacaoCreateManyRepresentanteInputEnvelope
    connect?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
  }

  export type ComissaoCreateNestedManyWithoutRepresentanteInput = {
    create?: XOR<ComissaoCreateWithoutRepresentanteInput, ComissaoUncheckedCreateWithoutRepresentanteInput> | ComissaoCreateWithoutRepresentanteInput[] | ComissaoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: ComissaoCreateOrConnectWithoutRepresentanteInput | ComissaoCreateOrConnectWithoutRepresentanteInput[]
    createMany?: ComissaoCreateManyRepresentanteInputEnvelope
    connect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutRepresentanteInput = {
    create?: XOR<PedidoCreateWithoutRepresentanteInput, PedidoUncheckedCreateWithoutRepresentanteInput> | PedidoCreateWithoutRepresentanteInput[] | PedidoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRepresentanteInput | PedidoCreateOrConnectWithoutRepresentanteInput[]
    createMany?: PedidoCreateManyRepresentanteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type ConviteCreateNestedManyWithoutRepresentanteInput = {
    create?: XOR<ConviteCreateWithoutRepresentanteInput, ConviteUncheckedCreateWithoutRepresentanteInput> | ConviteCreateWithoutRepresentanteInput[] | ConviteUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: ConviteCreateOrConnectWithoutRepresentanteInput | ConviteCreateOrConnectWithoutRepresentanteInput[]
    createMany?: ConviteCreateManyRepresentanteInputEnvelope
    connect?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
  }

  export type VinculacaoUncheckedCreateNestedManyWithoutRepresentanteInput = {
    create?: XOR<VinculacaoCreateWithoutRepresentanteInput, VinculacaoUncheckedCreateWithoutRepresentanteInput> | VinculacaoCreateWithoutRepresentanteInput[] | VinculacaoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: VinculacaoCreateOrConnectWithoutRepresentanteInput | VinculacaoCreateOrConnectWithoutRepresentanteInput[]
    createMany?: VinculacaoCreateManyRepresentanteInputEnvelope
    connect?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
  }

  export type ComissaoUncheckedCreateNestedManyWithoutRepresentanteInput = {
    create?: XOR<ComissaoCreateWithoutRepresentanteInput, ComissaoUncheckedCreateWithoutRepresentanteInput> | ComissaoCreateWithoutRepresentanteInput[] | ComissaoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: ComissaoCreateOrConnectWithoutRepresentanteInput | ComissaoCreateOrConnectWithoutRepresentanteInput[]
    createMany?: ComissaoCreateManyRepresentanteInputEnvelope
    connect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutRepresentanteInput = {
    create?: XOR<PedidoCreateWithoutRepresentanteInput, PedidoUncheckedCreateWithoutRepresentanteInput> | PedidoCreateWithoutRepresentanteInput[] | PedidoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRepresentanteInput | PedidoCreateOrConnectWithoutRepresentanteInput[]
    createMany?: PedidoCreateManyRepresentanteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type ConviteUncheckedCreateNestedManyWithoutRepresentanteInput = {
    create?: XOR<ConviteCreateWithoutRepresentanteInput, ConviteUncheckedCreateWithoutRepresentanteInput> | ConviteCreateWithoutRepresentanteInput[] | ConviteUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: ConviteCreateOrConnectWithoutRepresentanteInput | ConviteCreateOrConnectWithoutRepresentanteInput[]
    createMany?: ConviteCreateManyRepresentanteInputEnvelope
    connect?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
  }

  export type RepresentanteUpdateespecialidadesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutRepresentanteNestedInput = {
    create?: XOR<UsuarioCreateWithoutRepresentanteInput, UsuarioUncheckedCreateWithoutRepresentanteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRepresentanteInput
    upsert?: UsuarioUpsertWithoutRepresentanteInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRepresentanteInput, UsuarioUpdateWithoutRepresentanteInput>, UsuarioUncheckedUpdateWithoutRepresentanteInput>
  }

  export type VinculacaoUpdateManyWithoutRepresentanteNestedInput = {
    create?: XOR<VinculacaoCreateWithoutRepresentanteInput, VinculacaoUncheckedCreateWithoutRepresentanteInput> | VinculacaoCreateWithoutRepresentanteInput[] | VinculacaoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: VinculacaoCreateOrConnectWithoutRepresentanteInput | VinculacaoCreateOrConnectWithoutRepresentanteInput[]
    upsert?: VinculacaoUpsertWithWhereUniqueWithoutRepresentanteInput | VinculacaoUpsertWithWhereUniqueWithoutRepresentanteInput[]
    createMany?: VinculacaoCreateManyRepresentanteInputEnvelope
    set?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    disconnect?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    delete?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    connect?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    update?: VinculacaoUpdateWithWhereUniqueWithoutRepresentanteInput | VinculacaoUpdateWithWhereUniqueWithoutRepresentanteInput[]
    updateMany?: VinculacaoUpdateManyWithWhereWithoutRepresentanteInput | VinculacaoUpdateManyWithWhereWithoutRepresentanteInput[]
    deleteMany?: VinculacaoScalarWhereInput | VinculacaoScalarWhereInput[]
  }

  export type ComissaoUpdateManyWithoutRepresentanteNestedInput = {
    create?: XOR<ComissaoCreateWithoutRepresentanteInput, ComissaoUncheckedCreateWithoutRepresentanteInput> | ComissaoCreateWithoutRepresentanteInput[] | ComissaoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: ComissaoCreateOrConnectWithoutRepresentanteInput | ComissaoCreateOrConnectWithoutRepresentanteInput[]
    upsert?: ComissaoUpsertWithWhereUniqueWithoutRepresentanteInput | ComissaoUpsertWithWhereUniqueWithoutRepresentanteInput[]
    createMany?: ComissaoCreateManyRepresentanteInputEnvelope
    set?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    disconnect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    delete?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    connect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    update?: ComissaoUpdateWithWhereUniqueWithoutRepresentanteInput | ComissaoUpdateWithWhereUniqueWithoutRepresentanteInput[]
    updateMany?: ComissaoUpdateManyWithWhereWithoutRepresentanteInput | ComissaoUpdateManyWithWhereWithoutRepresentanteInput[]
    deleteMany?: ComissaoScalarWhereInput | ComissaoScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutRepresentanteNestedInput = {
    create?: XOR<PedidoCreateWithoutRepresentanteInput, PedidoUncheckedCreateWithoutRepresentanteInput> | PedidoCreateWithoutRepresentanteInput[] | PedidoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRepresentanteInput | PedidoCreateOrConnectWithoutRepresentanteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutRepresentanteInput | PedidoUpsertWithWhereUniqueWithoutRepresentanteInput[]
    createMany?: PedidoCreateManyRepresentanteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutRepresentanteInput | PedidoUpdateWithWhereUniqueWithoutRepresentanteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutRepresentanteInput | PedidoUpdateManyWithWhereWithoutRepresentanteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ConviteUpdateManyWithoutRepresentanteNestedInput = {
    create?: XOR<ConviteCreateWithoutRepresentanteInput, ConviteUncheckedCreateWithoutRepresentanteInput> | ConviteCreateWithoutRepresentanteInput[] | ConviteUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: ConviteCreateOrConnectWithoutRepresentanteInput | ConviteCreateOrConnectWithoutRepresentanteInput[]
    upsert?: ConviteUpsertWithWhereUniqueWithoutRepresentanteInput | ConviteUpsertWithWhereUniqueWithoutRepresentanteInput[]
    createMany?: ConviteCreateManyRepresentanteInputEnvelope
    set?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    disconnect?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    delete?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    connect?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    update?: ConviteUpdateWithWhereUniqueWithoutRepresentanteInput | ConviteUpdateWithWhereUniqueWithoutRepresentanteInput[]
    updateMany?: ConviteUpdateManyWithWhereWithoutRepresentanteInput | ConviteUpdateManyWithWhereWithoutRepresentanteInput[]
    deleteMany?: ConviteScalarWhereInput | ConviteScalarWhereInput[]
  }

  export type VinculacaoUncheckedUpdateManyWithoutRepresentanteNestedInput = {
    create?: XOR<VinculacaoCreateWithoutRepresentanteInput, VinculacaoUncheckedCreateWithoutRepresentanteInput> | VinculacaoCreateWithoutRepresentanteInput[] | VinculacaoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: VinculacaoCreateOrConnectWithoutRepresentanteInput | VinculacaoCreateOrConnectWithoutRepresentanteInput[]
    upsert?: VinculacaoUpsertWithWhereUniqueWithoutRepresentanteInput | VinculacaoUpsertWithWhereUniqueWithoutRepresentanteInput[]
    createMany?: VinculacaoCreateManyRepresentanteInputEnvelope
    set?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    disconnect?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    delete?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    connect?: VinculacaoWhereUniqueInput | VinculacaoWhereUniqueInput[]
    update?: VinculacaoUpdateWithWhereUniqueWithoutRepresentanteInput | VinculacaoUpdateWithWhereUniqueWithoutRepresentanteInput[]
    updateMany?: VinculacaoUpdateManyWithWhereWithoutRepresentanteInput | VinculacaoUpdateManyWithWhereWithoutRepresentanteInput[]
    deleteMany?: VinculacaoScalarWhereInput | VinculacaoScalarWhereInput[]
  }

  export type ComissaoUncheckedUpdateManyWithoutRepresentanteNestedInput = {
    create?: XOR<ComissaoCreateWithoutRepresentanteInput, ComissaoUncheckedCreateWithoutRepresentanteInput> | ComissaoCreateWithoutRepresentanteInput[] | ComissaoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: ComissaoCreateOrConnectWithoutRepresentanteInput | ComissaoCreateOrConnectWithoutRepresentanteInput[]
    upsert?: ComissaoUpsertWithWhereUniqueWithoutRepresentanteInput | ComissaoUpsertWithWhereUniqueWithoutRepresentanteInput[]
    createMany?: ComissaoCreateManyRepresentanteInputEnvelope
    set?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    disconnect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    delete?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    connect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    update?: ComissaoUpdateWithWhereUniqueWithoutRepresentanteInput | ComissaoUpdateWithWhereUniqueWithoutRepresentanteInput[]
    updateMany?: ComissaoUpdateManyWithWhereWithoutRepresentanteInput | ComissaoUpdateManyWithWhereWithoutRepresentanteInput[]
    deleteMany?: ComissaoScalarWhereInput | ComissaoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutRepresentanteNestedInput = {
    create?: XOR<PedidoCreateWithoutRepresentanteInput, PedidoUncheckedCreateWithoutRepresentanteInput> | PedidoCreateWithoutRepresentanteInput[] | PedidoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRepresentanteInput | PedidoCreateOrConnectWithoutRepresentanteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutRepresentanteInput | PedidoUpsertWithWhereUniqueWithoutRepresentanteInput[]
    createMany?: PedidoCreateManyRepresentanteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutRepresentanteInput | PedidoUpdateWithWhereUniqueWithoutRepresentanteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutRepresentanteInput | PedidoUpdateManyWithWhereWithoutRepresentanteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ConviteUncheckedUpdateManyWithoutRepresentanteNestedInput = {
    create?: XOR<ConviteCreateWithoutRepresentanteInput, ConviteUncheckedCreateWithoutRepresentanteInput> | ConviteCreateWithoutRepresentanteInput[] | ConviteUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: ConviteCreateOrConnectWithoutRepresentanteInput | ConviteCreateOrConnectWithoutRepresentanteInput[]
    upsert?: ConviteUpsertWithWhereUniqueWithoutRepresentanteInput | ConviteUpsertWithWhereUniqueWithoutRepresentanteInput[]
    createMany?: ConviteCreateManyRepresentanteInputEnvelope
    set?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    disconnect?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    delete?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    connect?: ConviteWhereUniqueInput | ConviteWhereUniqueInput[]
    update?: ConviteUpdateWithWhereUniqueWithoutRepresentanteInput | ConviteUpdateWithWhereUniqueWithoutRepresentanteInput[]
    updateMany?: ConviteUpdateManyWithWhereWithoutRepresentanteInput | ConviteUpdateManyWithWhereWithoutRepresentanteInput[]
    deleteMany?: ConviteScalarWhereInput | ConviteScalarWhereInput[]
  }

  export type ProdutoCreateNestedOneWithoutVariantesInput = {
    create?: XOR<ProdutoCreateWithoutVariantesInput, ProdutoUncheckedCreateWithoutVariantesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutVariantesInput
    connect?: ProdutoWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProdutoUpdateOneRequiredWithoutVariantesNestedInput = {
    create?: XOR<ProdutoCreateWithoutVariantesInput, ProdutoUncheckedCreateWithoutVariantesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutVariantesInput
    upsert?: ProdutoUpsertWithoutVariantesInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutVariantesInput, ProdutoUpdateWithoutVariantesInput>, ProdutoUncheckedUpdateWithoutVariantesInput>
  }

  export type FornecedorCreateNestedOneWithoutVinculacoesInput = {
    create?: XOR<FornecedorCreateWithoutVinculacoesInput, FornecedorUncheckedCreateWithoutVinculacoesInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutVinculacoesInput
    connect?: FornecedorWhereUniqueInput
  }

  export type RepresentanteCreateNestedOneWithoutVinculacoesInput = {
    create?: XOR<RepresentanteCreateWithoutVinculacoesInput, RepresentanteUncheckedCreateWithoutVinculacoesInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutVinculacoesInput
    connect?: RepresentanteWhereUniqueInput
  }

  export type ComissaoCreateNestedManyWithoutVinculacaoInput = {
    create?: XOR<ComissaoCreateWithoutVinculacaoInput, ComissaoUncheckedCreateWithoutVinculacaoInput> | ComissaoCreateWithoutVinculacaoInput[] | ComissaoUncheckedCreateWithoutVinculacaoInput[]
    connectOrCreate?: ComissaoCreateOrConnectWithoutVinculacaoInput | ComissaoCreateOrConnectWithoutVinculacaoInput[]
    createMany?: ComissaoCreateManyVinculacaoInputEnvelope
    connect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
  }

  export type ComissaoUncheckedCreateNestedManyWithoutVinculacaoInput = {
    create?: XOR<ComissaoCreateWithoutVinculacaoInput, ComissaoUncheckedCreateWithoutVinculacaoInput> | ComissaoCreateWithoutVinculacaoInput[] | ComissaoUncheckedCreateWithoutVinculacaoInput[]
    connectOrCreate?: ComissaoCreateOrConnectWithoutVinculacaoInput | ComissaoCreateOrConnectWithoutVinculacaoInput[]
    createMany?: ComissaoCreateManyVinculacaoInputEnvelope
    connect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
  }

  export type EnumStatusVinculacaoFieldUpdateOperationsInput = {
    set?: $Enums.StatusVinculacao
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FornecedorUpdateOneRequiredWithoutVinculacoesNestedInput = {
    create?: XOR<FornecedorCreateWithoutVinculacoesInput, FornecedorUncheckedCreateWithoutVinculacoesInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutVinculacoesInput
    upsert?: FornecedorUpsertWithoutVinculacoesInput
    connect?: FornecedorWhereUniqueInput
    update?: XOR<XOR<FornecedorUpdateToOneWithWhereWithoutVinculacoesInput, FornecedorUpdateWithoutVinculacoesInput>, FornecedorUncheckedUpdateWithoutVinculacoesInput>
  }

  export type RepresentanteUpdateOneRequiredWithoutVinculacoesNestedInput = {
    create?: XOR<RepresentanteCreateWithoutVinculacoesInput, RepresentanteUncheckedCreateWithoutVinculacoesInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutVinculacoesInput
    upsert?: RepresentanteUpsertWithoutVinculacoesInput
    connect?: RepresentanteWhereUniqueInput
    update?: XOR<XOR<RepresentanteUpdateToOneWithWhereWithoutVinculacoesInput, RepresentanteUpdateWithoutVinculacoesInput>, RepresentanteUncheckedUpdateWithoutVinculacoesInput>
  }

  export type ComissaoUpdateManyWithoutVinculacaoNestedInput = {
    create?: XOR<ComissaoCreateWithoutVinculacaoInput, ComissaoUncheckedCreateWithoutVinculacaoInput> | ComissaoCreateWithoutVinculacaoInput[] | ComissaoUncheckedCreateWithoutVinculacaoInput[]
    connectOrCreate?: ComissaoCreateOrConnectWithoutVinculacaoInput | ComissaoCreateOrConnectWithoutVinculacaoInput[]
    upsert?: ComissaoUpsertWithWhereUniqueWithoutVinculacaoInput | ComissaoUpsertWithWhereUniqueWithoutVinculacaoInput[]
    createMany?: ComissaoCreateManyVinculacaoInputEnvelope
    set?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    disconnect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    delete?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    connect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    update?: ComissaoUpdateWithWhereUniqueWithoutVinculacaoInput | ComissaoUpdateWithWhereUniqueWithoutVinculacaoInput[]
    updateMany?: ComissaoUpdateManyWithWhereWithoutVinculacaoInput | ComissaoUpdateManyWithWhereWithoutVinculacaoInput[]
    deleteMany?: ComissaoScalarWhereInput | ComissaoScalarWhereInput[]
  }

  export type ComissaoUncheckedUpdateManyWithoutVinculacaoNestedInput = {
    create?: XOR<ComissaoCreateWithoutVinculacaoInput, ComissaoUncheckedCreateWithoutVinculacaoInput> | ComissaoCreateWithoutVinculacaoInput[] | ComissaoUncheckedCreateWithoutVinculacaoInput[]
    connectOrCreate?: ComissaoCreateOrConnectWithoutVinculacaoInput | ComissaoCreateOrConnectWithoutVinculacaoInput[]
    upsert?: ComissaoUpsertWithWhereUniqueWithoutVinculacaoInput | ComissaoUpsertWithWhereUniqueWithoutVinculacaoInput[]
    createMany?: ComissaoCreateManyVinculacaoInputEnvelope
    set?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    disconnect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    delete?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    connect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    update?: ComissaoUpdateWithWhereUniqueWithoutVinculacaoInput | ComissaoUpdateWithWhereUniqueWithoutVinculacaoInput[]
    updateMany?: ComissaoUpdateManyWithWhereWithoutVinculacaoInput | ComissaoUpdateManyWithWhereWithoutVinculacaoInput[]
    deleteMany?: ComissaoScalarWhereInput | ComissaoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutPedidosInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
  }

  export type RepresentanteCreateNestedOneWithoutPedidosInput = {
    create?: XOR<RepresentanteCreateWithoutPedidosInput, RepresentanteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutPedidosInput
    connect?: RepresentanteWhereUniqueInput
  }

  export type ItemPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ComissaoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ComissaoCreateWithoutPedidoInput, ComissaoUncheckedCreateWithoutPedidoInput> | ComissaoCreateWithoutPedidoInput[] | ComissaoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ComissaoCreateOrConnectWithoutPedidoInput | ComissaoCreateOrConnectWithoutPedidoInput[]
    createMany?: ComissaoCreateManyPedidoInputEnvelope
    connect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ComissaoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ComissaoCreateWithoutPedidoInput, ComissaoUncheckedCreateWithoutPedidoInput> | ComissaoCreateWithoutPedidoInput[] | ComissaoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ComissaoCreateOrConnectWithoutPedidoInput | ComissaoCreateOrConnectWithoutPedidoInput[]
    createMany?: ComissaoCreateManyPedidoInputEnvelope
    connect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
  }

  export type EnumStatusPedidoFieldUpdateOperationsInput = {
    set?: $Enums.StatusPedido
  }

  export type ClienteUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    upsert?: ClienteUpsertWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPedidosInput, ClienteUpdateWithoutPedidosInput>, ClienteUncheckedUpdateWithoutPedidosInput>
  }

  export type RepresentanteUpdateOneWithoutPedidosNestedInput = {
    create?: XOR<RepresentanteCreateWithoutPedidosInput, RepresentanteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutPedidosInput
    upsert?: RepresentanteUpsertWithoutPedidosInput
    disconnect?: RepresentanteWhereInput | boolean
    delete?: RepresentanteWhereInput | boolean
    connect?: RepresentanteWhereUniqueInput
    update?: XOR<XOR<RepresentanteUpdateToOneWithWhereWithoutPedidosInput, RepresentanteUpdateWithoutPedidosInput>, RepresentanteUncheckedUpdateWithoutPedidosInput>
  }

  export type ItemPedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ComissaoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ComissaoCreateWithoutPedidoInput, ComissaoUncheckedCreateWithoutPedidoInput> | ComissaoCreateWithoutPedidoInput[] | ComissaoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ComissaoCreateOrConnectWithoutPedidoInput | ComissaoCreateOrConnectWithoutPedidoInput[]
    upsert?: ComissaoUpsertWithWhereUniqueWithoutPedidoInput | ComissaoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ComissaoCreateManyPedidoInputEnvelope
    set?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    disconnect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    delete?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    connect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    update?: ComissaoUpdateWithWhereUniqueWithoutPedidoInput | ComissaoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ComissaoUpdateManyWithWhereWithoutPedidoInput | ComissaoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ComissaoScalarWhereInput | ComissaoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ComissaoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ComissaoCreateWithoutPedidoInput, ComissaoUncheckedCreateWithoutPedidoInput> | ComissaoCreateWithoutPedidoInput[] | ComissaoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ComissaoCreateOrConnectWithoutPedidoInput | ComissaoCreateOrConnectWithoutPedidoInput[]
    upsert?: ComissaoUpsertWithWhereUniqueWithoutPedidoInput | ComissaoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ComissaoCreateManyPedidoInputEnvelope
    set?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    disconnect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    delete?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    connect?: ComissaoWhereUniqueInput | ComissaoWhereUniqueInput[]
    update?: ComissaoUpdateWithWhereUniqueWithoutPedidoInput | ComissaoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ComissaoUpdateManyWithWhereWithoutPedidoInput | ComissaoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ComissaoScalarWhereInput | ComissaoScalarWhereInput[]
  }

  export type FornecedorCreateNestedOneWithoutConvitesEnviadosInput = {
    create?: XOR<FornecedorCreateWithoutConvitesEnviadosInput, FornecedorUncheckedCreateWithoutConvitesEnviadosInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutConvitesEnviadosInput
    connect?: FornecedorWhereUniqueInput
  }

  export type RepresentanteCreateNestedOneWithoutConvitesEnviadosInput = {
    create?: XOR<RepresentanteCreateWithoutConvitesEnviadosInput, RepresentanteUncheckedCreateWithoutConvitesEnviadosInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutConvitesEnviadosInput
    connect?: RepresentanteWhereUniqueInput
  }

  export type EnumTipoConviteFieldUpdateOperationsInput = {
    set?: $Enums.TipoConvite
  }

  export type EnumStatusConviteFieldUpdateOperationsInput = {
    set?: $Enums.StatusConvite
  }

  export type FornecedorUpdateOneWithoutConvitesEnviadosNestedInput = {
    create?: XOR<FornecedorCreateWithoutConvitesEnviadosInput, FornecedorUncheckedCreateWithoutConvitesEnviadosInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutConvitesEnviadosInput
    upsert?: FornecedorUpsertWithoutConvitesEnviadosInput
    disconnect?: FornecedorWhereInput | boolean
    delete?: FornecedorWhereInput | boolean
    connect?: FornecedorWhereUniqueInput
    update?: XOR<XOR<FornecedorUpdateToOneWithWhereWithoutConvitesEnviadosInput, FornecedorUpdateWithoutConvitesEnviadosInput>, FornecedorUncheckedUpdateWithoutConvitesEnviadosInput>
  }

  export type RepresentanteUpdateOneWithoutConvitesEnviadosNestedInput = {
    create?: XOR<RepresentanteCreateWithoutConvitesEnviadosInput, RepresentanteUncheckedCreateWithoutConvitesEnviadosInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutConvitesEnviadosInput
    upsert?: RepresentanteUpsertWithoutConvitesEnviadosInput
    disconnect?: RepresentanteWhereInput | boolean
    delete?: RepresentanteWhereInput | boolean
    connect?: RepresentanteWhereUniqueInput
    update?: XOR<XOR<RepresentanteUpdateToOneWithWhereWithoutConvitesEnviadosInput, RepresentanteUpdateWithoutConvitesEnviadosInput>, RepresentanteUncheckedUpdateWithoutConvitesEnviadosInput>
  }

  export type ProdutoCreateNestedOneWithoutItensInput = {
    create?: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensInput
    connect?: ProdutoWhereUniqueInput
  }

  export type PedidoCreateNestedOneWithoutItensInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProdutoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensInput
    upsert?: ProdutoUpsertWithoutItensInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutItensInput, ProdutoUpdateWithoutItensInput>, ProdutoUncheckedUpdateWithoutItensInput>
  }

  export type PedidoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    upsert?: PedidoUpsertWithoutItensInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItensInput, PedidoUpdateWithoutItensInput>, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type VinculacaoCreateNestedOneWithoutComissoesInput = {
    create?: XOR<VinculacaoCreateWithoutComissoesInput, VinculacaoUncheckedCreateWithoutComissoesInput>
    connectOrCreate?: VinculacaoCreateOrConnectWithoutComissoesInput
    connect?: VinculacaoWhereUniqueInput
  }

  export type RepresentanteCreateNestedOneWithoutComissoesInput = {
    create?: XOR<RepresentanteCreateWithoutComissoesInput, RepresentanteUncheckedCreateWithoutComissoesInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutComissoesInput
    connect?: RepresentanteWhereUniqueInput
  }

  export type PedidoCreateNestedOneWithoutComissoesInput = {
    create?: XOR<PedidoCreateWithoutComissoesInput, PedidoUncheckedCreateWithoutComissoesInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutComissoesInput
    connect?: PedidoWhereUniqueInput
  }

  export type EnumStatusComissaoFieldUpdateOperationsInput = {
    set?: $Enums.StatusComissao
  }

  export type VinculacaoUpdateOneRequiredWithoutComissoesNestedInput = {
    create?: XOR<VinculacaoCreateWithoutComissoesInput, VinculacaoUncheckedCreateWithoutComissoesInput>
    connectOrCreate?: VinculacaoCreateOrConnectWithoutComissoesInput
    upsert?: VinculacaoUpsertWithoutComissoesInput
    connect?: VinculacaoWhereUniqueInput
    update?: XOR<XOR<VinculacaoUpdateToOneWithWhereWithoutComissoesInput, VinculacaoUpdateWithoutComissoesInput>, VinculacaoUncheckedUpdateWithoutComissoesInput>
  }

  export type RepresentanteUpdateOneRequiredWithoutComissoesNestedInput = {
    create?: XOR<RepresentanteCreateWithoutComissoesInput, RepresentanteUncheckedCreateWithoutComissoesInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutComissoesInput
    upsert?: RepresentanteUpsertWithoutComissoesInput
    connect?: RepresentanteWhereUniqueInput
    update?: XOR<XOR<RepresentanteUpdateToOneWithWhereWithoutComissoesInput, RepresentanteUpdateWithoutComissoesInput>, RepresentanteUncheckedUpdateWithoutComissoesInput>
  }

  export type PedidoUpdateOneRequiredWithoutComissoesNestedInput = {
    create?: XOR<PedidoCreateWithoutComissoesInput, PedidoUncheckedCreateWithoutComissoesInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutComissoesInput
    upsert?: PedidoUpsertWithoutComissoesInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutComissoesInput, PedidoUpdateWithoutComissoesInput>, PedidoUncheckedUpdateWithoutComissoesInput>
  }

  export type PedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumTipoNotificacaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoNotificacao
  }

  export type EnumPrioridadeNotificacaoFieldUpdateOperationsInput = {
    set?: $Enums.PrioridadeNotificacao
  }

  export type UsuarioUpdateOneRequiredWithoutNotificacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacoesInput
    upsert?: UsuarioUpsertWithoutNotificacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutNotificacoesInput, UsuarioUpdateWithoutNotificacoesInput>, UsuarioUncheckedUpdateWithoutNotificacoesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPapelUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.PapelUsuario | EnumPapelUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.PapelUsuario[] | ListEnumPapelUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.PapelUsuario[] | ListEnumPapelUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumPapelUsuarioFilter<$PrismaModel> | $Enums.PapelUsuario
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumPapelUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PapelUsuario | EnumPapelUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.PapelUsuario[] | ListEnumPapelUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.PapelUsuario[] | ListEnumPapelUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumPapelUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.PapelUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPapelUsuarioFilter<$PrismaModel>
    _max?: NestedEnumPapelUsuarioFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumStatusVinculacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusVinculacao | EnumStatusVinculacaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusVinculacao[] | ListEnumStatusVinculacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusVinculacao[] | ListEnumStatusVinculacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusVinculacaoFilter<$PrismaModel> | $Enums.StatusVinculacao
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusVinculacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusVinculacao | EnumStatusVinculacaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusVinculacao[] | ListEnumStatusVinculacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusVinculacao[] | ListEnumStatusVinculacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusVinculacaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusVinculacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusVinculacaoFilter<$PrismaModel>
    _max?: NestedEnumStatusVinculacaoFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoFilter<$PrismaModel> | $Enums.StatusPedido
  }

  export type NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPedidoFilter<$PrismaModel>
    _max?: NestedEnumStatusPedidoFilter<$PrismaModel>
  }

  export type NestedEnumTipoConviteFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoConvite | EnumTipoConviteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoConvite[] | ListEnumTipoConviteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoConvite[] | ListEnumTipoConviteFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoConviteFilter<$PrismaModel> | $Enums.TipoConvite
  }

  export type NestedEnumStatusConviteFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusConvite | EnumStatusConviteFieldRefInput<$PrismaModel>
    in?: $Enums.StatusConvite[] | ListEnumStatusConviteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusConvite[] | ListEnumStatusConviteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusConviteFilter<$PrismaModel> | $Enums.StatusConvite
  }

  export type NestedEnumTipoConviteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoConvite | EnumTipoConviteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoConvite[] | ListEnumTipoConviteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoConvite[] | ListEnumTipoConviteFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoConviteWithAggregatesFilter<$PrismaModel> | $Enums.TipoConvite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoConviteFilter<$PrismaModel>
    _max?: NestedEnumTipoConviteFilter<$PrismaModel>
  }

  export type NestedEnumStatusConviteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusConvite | EnumStatusConviteFieldRefInput<$PrismaModel>
    in?: $Enums.StatusConvite[] | ListEnumStatusConviteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusConvite[] | ListEnumStatusConviteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusConviteWithAggregatesFilter<$PrismaModel> | $Enums.StatusConvite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusConviteFilter<$PrismaModel>
    _max?: NestedEnumStatusConviteFilter<$PrismaModel>
  }

  export type NestedEnumStatusComissaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusComissao | EnumStatusComissaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusComissao[] | ListEnumStatusComissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusComissao[] | ListEnumStatusComissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusComissaoFilter<$PrismaModel> | $Enums.StatusComissao
  }

  export type NestedEnumStatusComissaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusComissao | EnumStatusComissaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusComissao[] | ListEnumStatusComissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusComissao[] | ListEnumStatusComissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusComissaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusComissao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusComissaoFilter<$PrismaModel>
    _max?: NestedEnumStatusComissaoFilter<$PrismaModel>
  }

  export type NestedEnumTipoNotificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | EnumTipoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoNotificacaoFilter<$PrismaModel> | $Enums.TipoNotificacao
  }

  export type NestedEnumPrioridadeNotificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.PrioridadeNotificacao | EnumPrioridadeNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.PrioridadeNotificacao[] | ListEnumPrioridadeNotificacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrioridadeNotificacao[] | ListEnumPrioridadeNotificacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeNotificacaoFilter<$PrismaModel> | $Enums.PrioridadeNotificacao
  }

  export type NestedEnumTipoNotificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | EnumTipoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoNotificacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoNotificacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoNotificacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoNotificacaoFilter<$PrismaModel>
  }

  export type NestedEnumPrioridadeNotificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrioridadeNotificacao | EnumPrioridadeNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.PrioridadeNotificacao[] | ListEnumPrioridadeNotificacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrioridadeNotificacao[] | ListEnumPrioridadeNotificacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeNotificacaoWithAggregatesFilter<$PrismaModel> | $Enums.PrioridadeNotificacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadeNotificacaoFilter<$PrismaModel>
    _max?: NestedEnumPrioridadeNotificacaoFilter<$PrismaModel>
  }

  export type FornecedorCreateWithoutUsuarioInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefone?: string | null
    segmento: string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    produtos?: ProdutoCreateNestedManyWithoutFornecedorInput
    vinculacoes?: VinculacaoCreateNestedManyWithoutFornecedorInput
    convitesEnviados?: ConviteCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUncheckedCreateWithoutUsuarioInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefone?: string | null
    segmento: string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    produtos?: ProdutoUncheckedCreateNestedManyWithoutFornecedorInput
    vinculacoes?: VinculacaoUncheckedCreateNestedManyWithoutFornecedorInput
    convitesEnviados?: ConviteUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorCreateOrConnectWithoutUsuarioInput = {
    where: FornecedorWhereUniqueInput
    create: XOR<FornecedorCreateWithoutUsuarioInput, FornecedorUncheckedCreateWithoutUsuarioInput>
  }

  export type RepresentanteCreateWithoutUsuarioInput = {
    id?: string
    cpf?: string | null
    telefone?: string | null
    regiao: string
    especialidades?: RepresentanteCreateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vinculacoes?: VinculacaoCreateNestedManyWithoutRepresentanteInput
    comissoes?: ComissaoCreateNestedManyWithoutRepresentanteInput
    pedidos?: PedidoCreateNestedManyWithoutRepresentanteInput
    convitesEnviados?: ConviteCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteUncheckedCreateWithoutUsuarioInput = {
    id?: string
    cpf?: string | null
    telefone?: string | null
    regiao: string
    especialidades?: RepresentanteCreateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vinculacoes?: VinculacaoUncheckedCreateNestedManyWithoutRepresentanteInput
    comissoes?: ComissaoUncheckedCreateNestedManyWithoutRepresentanteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutRepresentanteInput
    convitesEnviados?: ConviteUncheckedCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteCreateOrConnectWithoutUsuarioInput = {
    where: RepresentanteWhereUniqueInput
    create: XOR<RepresentanteCreateWithoutUsuarioInput, RepresentanteUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacaoCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    prioridade?: $Enums.PrioridadeNotificacao
    dataEnvio?: Date | string
    lida?: boolean
    dataLeitura?: Date | string | null
    metadados?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    prioridade?: $Enums.PrioridadeNotificacao
    dataEnvio?: Date | string
    lida?: boolean
    dataLeitura?: Date | string | null
    metadados?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoCreateOrConnectWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacaoCreateManyUsuarioInputEnvelope = {
    data: NotificacaoCreateManyUsuarioInput | NotificacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FornecedorUpsertWithoutUsuarioInput = {
    update: XOR<FornecedorUpdateWithoutUsuarioInput, FornecedorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FornecedorCreateWithoutUsuarioInput, FornecedorUncheckedCreateWithoutUsuarioInput>
    where?: FornecedorWhereInput
  }

  export type FornecedorUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: FornecedorWhereInput
    data: XOR<FornecedorUpdateWithoutUsuarioInput, FornecedorUncheckedUpdateWithoutUsuarioInput>
  }

  export type FornecedorUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    segmento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUpdateManyWithoutFornecedorNestedInput
    vinculacoes?: VinculacaoUpdateManyWithoutFornecedorNestedInput
    convitesEnviados?: ConviteUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    segmento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUncheckedUpdateManyWithoutFornecedorNestedInput
    vinculacoes?: VinculacaoUncheckedUpdateManyWithoutFornecedorNestedInput
    convitesEnviados?: ConviteUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type RepresentanteUpsertWithoutUsuarioInput = {
    update: XOR<RepresentanteUpdateWithoutUsuarioInput, RepresentanteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RepresentanteCreateWithoutUsuarioInput, RepresentanteUncheckedCreateWithoutUsuarioInput>
    where?: RepresentanteWhereInput
  }

  export type RepresentanteUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: RepresentanteWhereInput
    data: XOR<RepresentanteUpdateWithoutUsuarioInput, RepresentanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type RepresentanteUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vinculacoes?: VinculacaoUpdateManyWithoutRepresentanteNestedInput
    comissoes?: ComissaoUpdateManyWithoutRepresentanteNestedInput
    pedidos?: PedidoUpdateManyWithoutRepresentanteNestedInput
    convitesEnviados?: ConviteUpdateManyWithoutRepresentanteNestedInput
  }

  export type RepresentanteUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vinculacoes?: VinculacaoUncheckedUpdateManyWithoutRepresentanteNestedInput
    comissoes?: ComissaoUncheckedUpdateManyWithoutRepresentanteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutRepresentanteNestedInput
    convitesEnviados?: ConviteUncheckedUpdateManyWithoutRepresentanteNestedInput
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutUsuarioInput, NotificacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutUsuarioInput, NotificacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type NotificacaoScalarWhereInput = {
    AND?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    OR?: NotificacaoScalarWhereInput[]
    NOT?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    destinatarioId?: StringFilter<"Notificacao"> | string
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    tipo?: EnumTipoNotificacaoFilter<"Notificacao"> | $Enums.TipoNotificacao
    prioridade?: EnumPrioridadeNotificacaoFilter<"Notificacao"> | $Enums.PrioridadeNotificacao
    dataEnvio?: DateTimeFilter<"Notificacao"> | Date | string
    lida?: BoolFilter<"Notificacao"> | boolean
    dataLeitura?: DateTimeNullableFilter<"Notificacao"> | Date | string | null
    metadados?: JsonNullableFilter<"Notificacao">
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
  }

  export type UsuarioCreateWithoutFornecedorInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel?: $Enums.PapelUsuario
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    representante?: RepresentanteCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFornecedorInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel?: $Enums.PapelUsuario
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    representante?: RepresentanteUncheckedCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFornecedorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFornecedorInput, UsuarioUncheckedCreateWithoutFornecedorInput>
  }

  export type ProdutoCreateWithoutFornecedorInput = {
    id?: string
    nome: string
    descricao: string
    precoBase: number
    categoria?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variantes?: VarianteProdutoCreateNestedManyWithoutProductInput
    itens?: ItemPedidoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutFornecedorInput = {
    id?: string
    nome: string
    descricao: string
    precoBase: number
    categoria?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variantes?: VarianteProdutoUncheckedCreateNestedManyWithoutProductInput
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutFornecedorInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutFornecedorInput, ProdutoUncheckedCreateWithoutFornecedorInput>
  }

  export type ProdutoCreateManyFornecedorInputEnvelope = {
    data: ProdutoCreateManyFornecedorInput | ProdutoCreateManyFornecedorInput[]
    skipDuplicates?: boolean
  }

  export type VinculacaoCreateWithoutFornecedorInput = {
    id?: string
    status?: $Enums.StatusVinculacao
    comissaoPercent?: number
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: Date | string
    dataInativacao?: Date | string | null
    motivoInativacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    representante: RepresentanteCreateNestedOneWithoutVinculacoesInput
    comissoes?: ComissaoCreateNestedManyWithoutVinculacaoInput
  }

  export type VinculacaoUncheckedCreateWithoutFornecedorInput = {
    id?: string
    representanteId: string
    status?: $Enums.StatusVinculacao
    comissaoPercent?: number
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: Date | string
    dataInativacao?: Date | string | null
    motivoInativacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comissoes?: ComissaoUncheckedCreateNestedManyWithoutVinculacaoInput
  }

  export type VinculacaoCreateOrConnectWithoutFornecedorInput = {
    where: VinculacaoWhereUniqueInput
    create: XOR<VinculacaoCreateWithoutFornecedorInput, VinculacaoUncheckedCreateWithoutFornecedorInput>
  }

  export type VinculacaoCreateManyFornecedorInputEnvelope = {
    data: VinculacaoCreateManyFornecedorInput | VinculacaoCreateManyFornecedorInput[]
    skipDuplicates?: boolean
  }

  export type ConviteCreateWithoutFornecedorInput = {
    id?: string
    remetenteId: string
    destinatarioId: string
    tipoRemetente: $Enums.TipoConvite
    status?: $Enums.StatusConvite
    mensagem?: string | null
    comissaoPercent?: number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: Date | string
    dataResposta?: Date | string | null
    motivoRecusa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    representante?: RepresentanteCreateNestedOneWithoutConvitesEnviadosInput
  }

  export type ConviteUncheckedCreateWithoutFornecedorInput = {
    id?: string
    remetenteId: string
    destinatarioId: string
    tipoRemetente: $Enums.TipoConvite
    representanteId?: string | null
    status?: $Enums.StatusConvite
    mensagem?: string | null
    comissaoPercent?: number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: Date | string
    dataResposta?: Date | string | null
    motivoRecusa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConviteCreateOrConnectWithoutFornecedorInput = {
    where: ConviteWhereUniqueInput
    create: XOR<ConviteCreateWithoutFornecedorInput, ConviteUncheckedCreateWithoutFornecedorInput>
  }

  export type ConviteCreateManyFornecedorInputEnvelope = {
    data: ConviteCreateManyFornecedorInput | ConviteCreateManyFornecedorInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutFornecedorInput = {
    update: XOR<UsuarioUpdateWithoutFornecedorInput, UsuarioUncheckedUpdateWithoutFornecedorInput>
    create: XOR<UsuarioCreateWithoutFornecedorInput, UsuarioUncheckedCreateWithoutFornecedorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFornecedorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFornecedorInput, UsuarioUncheckedUpdateWithoutFornecedorInput>
  }

  export type UsuarioUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    representante?: RepresentanteUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    representante?: RepresentanteUncheckedUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ProdutoUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutFornecedorInput, ProdutoUncheckedUpdateWithoutFornecedorInput>
    create: XOR<ProdutoCreateWithoutFornecedorInput, ProdutoUncheckedCreateWithoutFornecedorInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutFornecedorInput, ProdutoUncheckedUpdateWithoutFornecedorInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutFornecedorInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type ProdutoScalarWhereInput = {
    AND?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    OR?: ProdutoScalarWhereInput[]
    NOT?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    id?: StringFilter<"Produto"> | string
    nome?: StringFilter<"Produto"> | string
    descricao?: StringFilter<"Produto"> | string
    precoBase?: FloatFilter<"Produto"> | number
    fornecedorId?: StringNullableFilter<"Produto"> | string | null
    categoria?: StringNullableFilter<"Produto"> | string | null
    ativo?: BoolFilter<"Produto"> | boolean
    createdAt?: DateTimeFilter<"Produto"> | Date | string
    updatedAt?: DateTimeFilter<"Produto"> | Date | string
  }

  export type VinculacaoUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: VinculacaoWhereUniqueInput
    update: XOR<VinculacaoUpdateWithoutFornecedorInput, VinculacaoUncheckedUpdateWithoutFornecedorInput>
    create: XOR<VinculacaoCreateWithoutFornecedorInput, VinculacaoUncheckedCreateWithoutFornecedorInput>
  }

  export type VinculacaoUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: VinculacaoWhereUniqueInput
    data: XOR<VinculacaoUpdateWithoutFornecedorInput, VinculacaoUncheckedUpdateWithoutFornecedorInput>
  }

  export type VinculacaoUpdateManyWithWhereWithoutFornecedorInput = {
    where: VinculacaoScalarWhereInput
    data: XOR<VinculacaoUpdateManyMutationInput, VinculacaoUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type VinculacaoScalarWhereInput = {
    AND?: VinculacaoScalarWhereInput | VinculacaoScalarWhereInput[]
    OR?: VinculacaoScalarWhereInput[]
    NOT?: VinculacaoScalarWhereInput | VinculacaoScalarWhereInput[]
    id?: StringFilter<"Vinculacao"> | string
    fornecedorId?: StringFilter<"Vinculacao"> | string
    representanteId?: StringFilter<"Vinculacao"> | string
    status?: EnumStatusVinculacaoFilter<"Vinculacao"> | $Enums.StatusVinculacao
    comissaoPercent?: FloatFilter<"Vinculacao"> | number
    precoEspecial?: BoolFilter<"Vinculacao"> | boolean
    acessoRelatorios?: BoolFilter<"Vinculacao"> | boolean
    configuracoes?: JsonNullableFilter<"Vinculacao">
    dataVinculacao?: DateTimeFilter<"Vinculacao"> | Date | string
    dataInativacao?: DateTimeNullableFilter<"Vinculacao"> | Date | string | null
    motivoInativacao?: StringNullableFilter<"Vinculacao"> | string | null
    createdAt?: DateTimeFilter<"Vinculacao"> | Date | string
    updatedAt?: DateTimeFilter<"Vinculacao"> | Date | string
  }

  export type ConviteUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: ConviteWhereUniqueInput
    update: XOR<ConviteUpdateWithoutFornecedorInput, ConviteUncheckedUpdateWithoutFornecedorInput>
    create: XOR<ConviteCreateWithoutFornecedorInput, ConviteUncheckedCreateWithoutFornecedorInput>
  }

  export type ConviteUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: ConviteWhereUniqueInput
    data: XOR<ConviteUpdateWithoutFornecedorInput, ConviteUncheckedUpdateWithoutFornecedorInput>
  }

  export type ConviteUpdateManyWithWhereWithoutFornecedorInput = {
    where: ConviteScalarWhereInput
    data: XOR<ConviteUpdateManyMutationInput, ConviteUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type ConviteScalarWhereInput = {
    AND?: ConviteScalarWhereInput | ConviteScalarWhereInput[]
    OR?: ConviteScalarWhereInput[]
    NOT?: ConviteScalarWhereInput | ConviteScalarWhereInput[]
    id?: StringFilter<"Convite"> | string
    remetenteId?: StringFilter<"Convite"> | string
    destinatarioId?: StringFilter<"Convite"> | string
    tipoRemetente?: EnumTipoConviteFilter<"Convite"> | $Enums.TipoConvite
    fornecedorId?: StringNullableFilter<"Convite"> | string | null
    representanteId?: StringNullableFilter<"Convite"> | string | null
    status?: EnumStatusConviteFilter<"Convite"> | $Enums.StatusConvite
    mensagem?: StringNullableFilter<"Convite"> | string | null
    comissaoPercent?: FloatNullableFilter<"Convite"> | number | null
    configuracoes?: JsonNullableFilter<"Convite">
    dataEnvio?: DateTimeFilter<"Convite"> | Date | string
    dataResposta?: DateTimeNullableFilter<"Convite"> | Date | string | null
    motivoRecusa?: StringNullableFilter<"Convite"> | string | null
    createdAt?: DateTimeFilter<"Convite"> | Date | string
    updatedAt?: DateTimeFilter<"Convite"> | Date | string
  }

  export type FornecedorCreateWithoutProdutosInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefone?: string | null
    segmento: string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFornecedorInput
    vinculacoes?: VinculacaoCreateNestedManyWithoutFornecedorInput
    convitesEnviados?: ConviteCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUncheckedCreateWithoutProdutosInput = {
    id?: string
    usuarioId: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefone?: string | null
    segmento: string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vinculacoes?: VinculacaoUncheckedCreateNestedManyWithoutFornecedorInput
    convitesEnviados?: ConviteUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorCreateOrConnectWithoutProdutosInput = {
    where: FornecedorWhereUniqueInput
    create: XOR<FornecedorCreateWithoutProdutosInput, FornecedorUncheckedCreateWithoutProdutosInput>
  }

  export type VarianteProdutoCreateWithoutProductInput = {
    id?: string
    sku: string
    preco: number
    estoque: number
    atributos: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VarianteProdutoUncheckedCreateWithoutProductInput = {
    id?: string
    sku: string
    preco: number
    estoque: number
    atributos: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VarianteProdutoCreateOrConnectWithoutProductInput = {
    where: VarianteProdutoWhereUniqueInput
    create: XOR<VarianteProdutoCreateWithoutProductInput, VarianteProdutoUncheckedCreateWithoutProductInput>
  }

  export type VarianteProdutoCreateManyProductInputEnvelope = {
    data: VarianteProdutoCreateManyProductInput | VarianteProdutoCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ItemPedidoCreateWithoutProdutoInput = {
    id?: string
    varianteId?: string | null
    quantidade: number
    precoUnitario: number
    desconto?: number | null
    valorTotal: number
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pedido: PedidoCreateNestedOneWithoutItensInput
  }

  export type ItemPedidoUncheckedCreateWithoutProdutoInput = {
    id?: string
    varianteId?: string | null
    quantidade: number
    precoUnitario: number
    desconto?: number | null
    valorTotal: number
    observacoes?: string | null
    pedidoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemPedidoCreateOrConnectWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoCreateManyProdutoInputEnvelope = {
    data: ItemPedidoCreateManyProdutoInput | ItemPedidoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type FornecedorUpsertWithoutProdutosInput = {
    update: XOR<FornecedorUpdateWithoutProdutosInput, FornecedorUncheckedUpdateWithoutProdutosInput>
    create: XOR<FornecedorCreateWithoutProdutosInput, FornecedorUncheckedCreateWithoutProdutosInput>
    where?: FornecedorWhereInput
  }

  export type FornecedorUpdateToOneWithWhereWithoutProdutosInput = {
    where?: FornecedorWhereInput
    data: XOR<FornecedorUpdateWithoutProdutosInput, FornecedorUncheckedUpdateWithoutProdutosInput>
  }

  export type FornecedorUpdateWithoutProdutosInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    segmento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFornecedorNestedInput
    vinculacoes?: VinculacaoUpdateManyWithoutFornecedorNestedInput
    convitesEnviados?: ConviteUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorUncheckedUpdateWithoutProdutosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    segmento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vinculacoes?: VinculacaoUncheckedUpdateManyWithoutFornecedorNestedInput
    convitesEnviados?: ConviteUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type VarianteProdutoUpsertWithWhereUniqueWithoutProductInput = {
    where: VarianteProdutoWhereUniqueInput
    update: XOR<VarianteProdutoUpdateWithoutProductInput, VarianteProdutoUncheckedUpdateWithoutProductInput>
    create: XOR<VarianteProdutoCreateWithoutProductInput, VarianteProdutoUncheckedCreateWithoutProductInput>
  }

  export type VarianteProdutoUpdateWithWhereUniqueWithoutProductInput = {
    where: VarianteProdutoWhereUniqueInput
    data: XOR<VarianteProdutoUpdateWithoutProductInput, VarianteProdutoUncheckedUpdateWithoutProductInput>
  }

  export type VarianteProdutoUpdateManyWithWhereWithoutProductInput = {
    where: VarianteProdutoScalarWhereInput
    data: XOR<VarianteProdutoUpdateManyMutationInput, VarianteProdutoUncheckedUpdateManyWithoutProductInput>
  }

  export type VarianteProdutoScalarWhereInput = {
    AND?: VarianteProdutoScalarWhereInput | VarianteProdutoScalarWhereInput[]
    OR?: VarianteProdutoScalarWhereInput[]
    NOT?: VarianteProdutoScalarWhereInput | VarianteProdutoScalarWhereInput[]
    id?: StringFilter<"VarianteProduto"> | string
    sku?: StringFilter<"VarianteProduto"> | string
    preco?: FloatFilter<"VarianteProduto"> | number
    estoque?: IntFilter<"VarianteProduto"> | number
    atributos?: JsonFilter<"VarianteProduto">
    productId?: StringFilter<"VarianteProduto"> | string
    createdAt?: DateTimeFilter<"VarianteProduto"> | Date | string
    updatedAt?: DateTimeFilter<"VarianteProduto"> | Date | string
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutProdutoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ItemPedidoScalarWhereInput = {
    AND?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    OR?: ItemPedidoScalarWhereInput[]
    NOT?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    id?: StringFilter<"ItemPedido"> | string
    produtoId?: StringFilter<"ItemPedido"> | string
    varianteId?: StringNullableFilter<"ItemPedido"> | string | null
    quantidade?: IntFilter<"ItemPedido"> | number
    precoUnitario?: FloatFilter<"ItemPedido"> | number
    desconto?: FloatNullableFilter<"ItemPedido"> | number | null
    valorTotal?: FloatFilter<"ItemPedido"> | number
    observacoes?: StringNullableFilter<"ItemPedido"> | string | null
    pedidoId?: StringFilter<"ItemPedido"> | string
    createdAt?: DateTimeFilter<"ItemPedido"> | Date | string
    updatedAt?: DateTimeFilter<"ItemPedido"> | Date | string
  }

  export type UsuarioCreateWithoutRepresentanteInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel?: $Enums.PapelUsuario
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor?: FornecedorCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRepresentanteInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel?: $Enums.PapelUsuario
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor?: FornecedorUncheckedCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRepresentanteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRepresentanteInput, UsuarioUncheckedCreateWithoutRepresentanteInput>
  }

  export type VinculacaoCreateWithoutRepresentanteInput = {
    id?: string
    status?: $Enums.StatusVinculacao
    comissaoPercent?: number
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: Date | string
    dataInativacao?: Date | string | null
    motivoInativacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorCreateNestedOneWithoutVinculacoesInput
    comissoes?: ComissaoCreateNestedManyWithoutVinculacaoInput
  }

  export type VinculacaoUncheckedCreateWithoutRepresentanteInput = {
    id?: string
    fornecedorId: string
    status?: $Enums.StatusVinculacao
    comissaoPercent?: number
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: Date | string
    dataInativacao?: Date | string | null
    motivoInativacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comissoes?: ComissaoUncheckedCreateNestedManyWithoutVinculacaoInput
  }

  export type VinculacaoCreateOrConnectWithoutRepresentanteInput = {
    where: VinculacaoWhereUniqueInput
    create: XOR<VinculacaoCreateWithoutRepresentanteInput, VinculacaoUncheckedCreateWithoutRepresentanteInput>
  }

  export type VinculacaoCreateManyRepresentanteInputEnvelope = {
    data: VinculacaoCreateManyRepresentanteInput | VinculacaoCreateManyRepresentanteInput[]
    skipDuplicates?: boolean
  }

  export type ComissaoCreateWithoutRepresentanteInput = {
    id?: string
    percentual: number
    valorCalculado: number
    status?: $Enums.StatusComissao
    dataEfetivacao?: Date | string | null
    dataPagamento?: Date | string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vinculacao: VinculacaoCreateNestedOneWithoutComissoesInput
    pedido: PedidoCreateNestedOneWithoutComissoesInput
  }

  export type ComissaoUncheckedCreateWithoutRepresentanteInput = {
    id?: string
    vinculacaoId: string
    pedidoId: string
    percentual: number
    valorCalculado: number
    status?: $Enums.StatusComissao
    dataEfetivacao?: Date | string | null
    dataPagamento?: Date | string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComissaoCreateOrConnectWithoutRepresentanteInput = {
    where: ComissaoWhereUniqueInput
    create: XOR<ComissaoCreateWithoutRepresentanteInput, ComissaoUncheckedCreateWithoutRepresentanteInput>
  }

  export type ComissaoCreateManyRepresentanteInputEnvelope = {
    data: ComissaoCreateManyRepresentanteInput | ComissaoCreateManyRepresentanteInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutRepresentanteInput = {
    id?: string
    dataPedido?: Date | string
    status?: $Enums.StatusPedido
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
    comissoes?: ComissaoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutRepresentanteInput = {
    id?: string
    clienteId: string
    dataPedido?: Date | string
    status?: $Enums.StatusPedido
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    comissoes?: ComissaoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutRepresentanteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutRepresentanteInput, PedidoUncheckedCreateWithoutRepresentanteInput>
  }

  export type PedidoCreateManyRepresentanteInputEnvelope = {
    data: PedidoCreateManyRepresentanteInput | PedidoCreateManyRepresentanteInput[]
    skipDuplicates?: boolean
  }

  export type ConviteCreateWithoutRepresentanteInput = {
    id?: string
    remetenteId: string
    destinatarioId: string
    tipoRemetente: $Enums.TipoConvite
    status?: $Enums.StatusConvite
    mensagem?: string | null
    comissaoPercent?: number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: Date | string
    dataResposta?: Date | string | null
    motivoRecusa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor?: FornecedorCreateNestedOneWithoutConvitesEnviadosInput
  }

  export type ConviteUncheckedCreateWithoutRepresentanteInput = {
    id?: string
    remetenteId: string
    destinatarioId: string
    tipoRemetente: $Enums.TipoConvite
    fornecedorId?: string | null
    status?: $Enums.StatusConvite
    mensagem?: string | null
    comissaoPercent?: number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: Date | string
    dataResposta?: Date | string | null
    motivoRecusa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConviteCreateOrConnectWithoutRepresentanteInput = {
    where: ConviteWhereUniqueInput
    create: XOR<ConviteCreateWithoutRepresentanteInput, ConviteUncheckedCreateWithoutRepresentanteInput>
  }

  export type ConviteCreateManyRepresentanteInputEnvelope = {
    data: ConviteCreateManyRepresentanteInput | ConviteCreateManyRepresentanteInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutRepresentanteInput = {
    update: XOR<UsuarioUpdateWithoutRepresentanteInput, UsuarioUncheckedUpdateWithoutRepresentanteInput>
    create: XOR<UsuarioCreateWithoutRepresentanteInput, UsuarioUncheckedCreateWithoutRepresentanteInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRepresentanteInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRepresentanteInput, UsuarioUncheckedUpdateWithoutRepresentanteInput>
  }

  export type UsuarioUpdateWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUncheckedUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type VinculacaoUpsertWithWhereUniqueWithoutRepresentanteInput = {
    where: VinculacaoWhereUniqueInput
    update: XOR<VinculacaoUpdateWithoutRepresentanteInput, VinculacaoUncheckedUpdateWithoutRepresentanteInput>
    create: XOR<VinculacaoCreateWithoutRepresentanteInput, VinculacaoUncheckedCreateWithoutRepresentanteInput>
  }

  export type VinculacaoUpdateWithWhereUniqueWithoutRepresentanteInput = {
    where: VinculacaoWhereUniqueInput
    data: XOR<VinculacaoUpdateWithoutRepresentanteInput, VinculacaoUncheckedUpdateWithoutRepresentanteInput>
  }

  export type VinculacaoUpdateManyWithWhereWithoutRepresentanteInput = {
    where: VinculacaoScalarWhereInput
    data: XOR<VinculacaoUpdateManyMutationInput, VinculacaoUncheckedUpdateManyWithoutRepresentanteInput>
  }

  export type ComissaoUpsertWithWhereUniqueWithoutRepresentanteInput = {
    where: ComissaoWhereUniqueInput
    update: XOR<ComissaoUpdateWithoutRepresentanteInput, ComissaoUncheckedUpdateWithoutRepresentanteInput>
    create: XOR<ComissaoCreateWithoutRepresentanteInput, ComissaoUncheckedCreateWithoutRepresentanteInput>
  }

  export type ComissaoUpdateWithWhereUniqueWithoutRepresentanteInput = {
    where: ComissaoWhereUniqueInput
    data: XOR<ComissaoUpdateWithoutRepresentanteInput, ComissaoUncheckedUpdateWithoutRepresentanteInput>
  }

  export type ComissaoUpdateManyWithWhereWithoutRepresentanteInput = {
    where: ComissaoScalarWhereInput
    data: XOR<ComissaoUpdateManyMutationInput, ComissaoUncheckedUpdateManyWithoutRepresentanteInput>
  }

  export type ComissaoScalarWhereInput = {
    AND?: ComissaoScalarWhereInput | ComissaoScalarWhereInput[]
    OR?: ComissaoScalarWhereInput[]
    NOT?: ComissaoScalarWhereInput | ComissaoScalarWhereInput[]
    id?: StringFilter<"Comissao"> | string
    vinculacaoId?: StringFilter<"Comissao"> | string
    representanteId?: StringFilter<"Comissao"> | string
    pedidoId?: StringFilter<"Comissao"> | string
    percentual?: FloatFilter<"Comissao"> | number
    valorCalculado?: FloatFilter<"Comissao"> | number
    status?: EnumStatusComissaoFilter<"Comissao"> | $Enums.StatusComissao
    dataEfetivacao?: DateTimeNullableFilter<"Comissao"> | Date | string | null
    dataPagamento?: DateTimeNullableFilter<"Comissao"> | Date | string | null
    observacoes?: StringNullableFilter<"Comissao"> | string | null
    createdAt?: DateTimeFilter<"Comissao"> | Date | string
    updatedAt?: DateTimeFilter<"Comissao"> | Date | string
  }

  export type PedidoUpsertWithWhereUniqueWithoutRepresentanteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutRepresentanteInput, PedidoUncheckedUpdateWithoutRepresentanteInput>
    create: XOR<PedidoCreateWithoutRepresentanteInput, PedidoUncheckedCreateWithoutRepresentanteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutRepresentanteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutRepresentanteInput, PedidoUncheckedUpdateWithoutRepresentanteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutRepresentanteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutRepresentanteInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: StringFilter<"Pedido"> | string
    clienteId?: StringFilter<"Pedido"> | string
    representanteId?: StringNullableFilter<"Pedido"> | string | null
    dataPedido?: DateTimeFilter<"Pedido"> | Date | string
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    valorTotal?: FloatFilter<"Pedido"> | number
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeFilter<"Pedido"> | Date | string
  }

  export type ConviteUpsertWithWhereUniqueWithoutRepresentanteInput = {
    where: ConviteWhereUniqueInput
    update: XOR<ConviteUpdateWithoutRepresentanteInput, ConviteUncheckedUpdateWithoutRepresentanteInput>
    create: XOR<ConviteCreateWithoutRepresentanteInput, ConviteUncheckedCreateWithoutRepresentanteInput>
  }

  export type ConviteUpdateWithWhereUniqueWithoutRepresentanteInput = {
    where: ConviteWhereUniqueInput
    data: XOR<ConviteUpdateWithoutRepresentanteInput, ConviteUncheckedUpdateWithoutRepresentanteInput>
  }

  export type ConviteUpdateManyWithWhereWithoutRepresentanteInput = {
    where: ConviteScalarWhereInput
    data: XOR<ConviteUpdateManyMutationInput, ConviteUncheckedUpdateManyWithoutRepresentanteInput>
  }

  export type ProdutoCreateWithoutVariantesInput = {
    id?: string
    nome: string
    descricao: string
    precoBase: number
    categoria?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor?: FornecedorCreateNestedOneWithoutProdutosInput
    itens?: ItemPedidoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutVariantesInput = {
    id?: string
    nome: string
    descricao: string
    precoBase: number
    fornecedorId?: string | null
    categoria?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutVariantesInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutVariantesInput, ProdutoUncheckedCreateWithoutVariantesInput>
  }

  export type ProdutoUpsertWithoutVariantesInput = {
    update: XOR<ProdutoUpdateWithoutVariantesInput, ProdutoUncheckedUpdateWithoutVariantesInput>
    create: XOR<ProdutoCreateWithoutVariantesInput, ProdutoUncheckedCreateWithoutVariantesInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutVariantesInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutVariantesInput, ProdutoUncheckedUpdateWithoutVariantesInput>
  }

  export type ProdutoUpdateWithoutVariantesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBase?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneWithoutProdutosNestedInput
    itens?: ItemPedidoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutVariantesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBase?: FloatFieldUpdateOperationsInput | number
    fornecedorId?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type FornecedorCreateWithoutVinculacoesInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefone?: string | null
    segmento: string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFornecedorInput
    produtos?: ProdutoCreateNestedManyWithoutFornecedorInput
    convitesEnviados?: ConviteCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUncheckedCreateWithoutVinculacoesInput = {
    id?: string
    usuarioId: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefone?: string | null
    segmento: string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    produtos?: ProdutoUncheckedCreateNestedManyWithoutFornecedorInput
    convitesEnviados?: ConviteUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorCreateOrConnectWithoutVinculacoesInput = {
    where: FornecedorWhereUniqueInput
    create: XOR<FornecedorCreateWithoutVinculacoesInput, FornecedorUncheckedCreateWithoutVinculacoesInput>
  }

  export type RepresentanteCreateWithoutVinculacoesInput = {
    id?: string
    cpf?: string | null
    telefone?: string | null
    regiao: string
    especialidades?: RepresentanteCreateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRepresentanteInput
    comissoes?: ComissaoCreateNestedManyWithoutRepresentanteInput
    pedidos?: PedidoCreateNestedManyWithoutRepresentanteInput
    convitesEnviados?: ConviteCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteUncheckedCreateWithoutVinculacoesInput = {
    id?: string
    usuarioId: string
    cpf?: string | null
    telefone?: string | null
    regiao: string
    especialidades?: RepresentanteCreateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    comissoes?: ComissaoUncheckedCreateNestedManyWithoutRepresentanteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutRepresentanteInput
    convitesEnviados?: ConviteUncheckedCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteCreateOrConnectWithoutVinculacoesInput = {
    where: RepresentanteWhereUniqueInput
    create: XOR<RepresentanteCreateWithoutVinculacoesInput, RepresentanteUncheckedCreateWithoutVinculacoesInput>
  }

  export type ComissaoCreateWithoutVinculacaoInput = {
    id?: string
    percentual: number
    valorCalculado: number
    status?: $Enums.StatusComissao
    dataEfetivacao?: Date | string | null
    dataPagamento?: Date | string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    representante: RepresentanteCreateNestedOneWithoutComissoesInput
    pedido: PedidoCreateNestedOneWithoutComissoesInput
  }

  export type ComissaoUncheckedCreateWithoutVinculacaoInput = {
    id?: string
    representanteId: string
    pedidoId: string
    percentual: number
    valorCalculado: number
    status?: $Enums.StatusComissao
    dataEfetivacao?: Date | string | null
    dataPagamento?: Date | string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComissaoCreateOrConnectWithoutVinculacaoInput = {
    where: ComissaoWhereUniqueInput
    create: XOR<ComissaoCreateWithoutVinculacaoInput, ComissaoUncheckedCreateWithoutVinculacaoInput>
  }

  export type ComissaoCreateManyVinculacaoInputEnvelope = {
    data: ComissaoCreateManyVinculacaoInput | ComissaoCreateManyVinculacaoInput[]
    skipDuplicates?: boolean
  }

  export type FornecedorUpsertWithoutVinculacoesInput = {
    update: XOR<FornecedorUpdateWithoutVinculacoesInput, FornecedorUncheckedUpdateWithoutVinculacoesInput>
    create: XOR<FornecedorCreateWithoutVinculacoesInput, FornecedorUncheckedCreateWithoutVinculacoesInput>
    where?: FornecedorWhereInput
  }

  export type FornecedorUpdateToOneWithWhereWithoutVinculacoesInput = {
    where?: FornecedorWhereInput
    data: XOR<FornecedorUpdateWithoutVinculacoesInput, FornecedorUncheckedUpdateWithoutVinculacoesInput>
  }

  export type FornecedorUpdateWithoutVinculacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    segmento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFornecedorNestedInput
    produtos?: ProdutoUpdateManyWithoutFornecedorNestedInput
    convitesEnviados?: ConviteUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorUncheckedUpdateWithoutVinculacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    segmento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUncheckedUpdateManyWithoutFornecedorNestedInput
    convitesEnviados?: ConviteUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type RepresentanteUpsertWithoutVinculacoesInput = {
    update: XOR<RepresentanteUpdateWithoutVinculacoesInput, RepresentanteUncheckedUpdateWithoutVinculacoesInput>
    create: XOR<RepresentanteCreateWithoutVinculacoesInput, RepresentanteUncheckedCreateWithoutVinculacoesInput>
    where?: RepresentanteWhereInput
  }

  export type RepresentanteUpdateToOneWithWhereWithoutVinculacoesInput = {
    where?: RepresentanteWhereInput
    data: XOR<RepresentanteUpdateWithoutVinculacoesInput, RepresentanteUncheckedUpdateWithoutVinculacoesInput>
  }

  export type RepresentanteUpdateWithoutVinculacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRepresentanteNestedInput
    comissoes?: ComissaoUpdateManyWithoutRepresentanteNestedInput
    pedidos?: PedidoUpdateManyWithoutRepresentanteNestedInput
    convitesEnviados?: ConviteUpdateManyWithoutRepresentanteNestedInput
  }

  export type RepresentanteUncheckedUpdateWithoutVinculacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comissoes?: ComissaoUncheckedUpdateManyWithoutRepresentanteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutRepresentanteNestedInput
    convitesEnviados?: ConviteUncheckedUpdateManyWithoutRepresentanteNestedInput
  }

  export type ComissaoUpsertWithWhereUniqueWithoutVinculacaoInput = {
    where: ComissaoWhereUniqueInput
    update: XOR<ComissaoUpdateWithoutVinculacaoInput, ComissaoUncheckedUpdateWithoutVinculacaoInput>
    create: XOR<ComissaoCreateWithoutVinculacaoInput, ComissaoUncheckedCreateWithoutVinculacaoInput>
  }

  export type ComissaoUpdateWithWhereUniqueWithoutVinculacaoInput = {
    where: ComissaoWhereUniqueInput
    data: XOR<ComissaoUpdateWithoutVinculacaoInput, ComissaoUncheckedUpdateWithoutVinculacaoInput>
  }

  export type ComissaoUpdateManyWithWhereWithoutVinculacaoInput = {
    where: ComissaoScalarWhereInput
    data: XOR<ComissaoUpdateManyMutationInput, ComissaoUncheckedUpdateManyWithoutVinculacaoInput>
  }

  export type ClienteCreateWithoutPedidosInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefoneComercial?: string | null
    emailComercial: string
    cep?: string | null
    rua?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    nomeContato?: string | null
    emailContato?: string | null
    telefoneContato?: string | null
    limiteCredito?: number | null
    condicoesPagamento?: string | null
    representanteId?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUncheckedCreateWithoutPedidosInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefoneComercial?: string | null
    emailComercial: string
    cep?: string | null
    rua?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    nomeContato?: string | null
    emailContato?: string | null
    telefoneContato?: string | null
    limiteCredito?: number | null
    condicoesPagamento?: string | null
    representanteId?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteCreateOrConnectWithoutPedidosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
  }

  export type RepresentanteCreateWithoutPedidosInput = {
    id?: string
    cpf?: string | null
    telefone?: string | null
    regiao: string
    especialidades?: RepresentanteCreateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRepresentanteInput
    vinculacoes?: VinculacaoCreateNestedManyWithoutRepresentanteInput
    comissoes?: ComissaoCreateNestedManyWithoutRepresentanteInput
    convitesEnviados?: ConviteCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteUncheckedCreateWithoutPedidosInput = {
    id?: string
    usuarioId: string
    cpf?: string | null
    telefone?: string | null
    regiao: string
    especialidades?: RepresentanteCreateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vinculacoes?: VinculacaoUncheckedCreateNestedManyWithoutRepresentanteInput
    comissoes?: ComissaoUncheckedCreateNestedManyWithoutRepresentanteInput
    convitesEnviados?: ConviteUncheckedCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteCreateOrConnectWithoutPedidosInput = {
    where: RepresentanteWhereUniqueInput
    create: XOR<RepresentanteCreateWithoutPedidosInput, RepresentanteUncheckedCreateWithoutPedidosInput>
  }

  export type ItemPedidoCreateWithoutPedidoInput = {
    id?: string
    varianteId?: string | null
    quantidade: number
    precoUnitario: number
    desconto?: number | null
    valorTotal: number
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    produto: ProdutoCreateNestedOneWithoutItensInput
  }

  export type ItemPedidoUncheckedCreateWithoutPedidoInput = {
    id?: string
    produtoId: string
    varianteId?: string | null
    quantidade: number
    precoUnitario: number
    desconto?: number | null
    valorTotal: number
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemPedidoCreateOrConnectWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoCreateManyPedidoInputEnvelope = {
    data: ItemPedidoCreateManyPedidoInput | ItemPedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type ComissaoCreateWithoutPedidoInput = {
    id?: string
    percentual: number
    valorCalculado: number
    status?: $Enums.StatusComissao
    dataEfetivacao?: Date | string | null
    dataPagamento?: Date | string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vinculacao: VinculacaoCreateNestedOneWithoutComissoesInput
    representante: RepresentanteCreateNestedOneWithoutComissoesInput
  }

  export type ComissaoUncheckedCreateWithoutPedidoInput = {
    id?: string
    vinculacaoId: string
    representanteId: string
    percentual: number
    valorCalculado: number
    status?: $Enums.StatusComissao
    dataEfetivacao?: Date | string | null
    dataPagamento?: Date | string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComissaoCreateOrConnectWithoutPedidoInput = {
    where: ComissaoWhereUniqueInput
    create: XOR<ComissaoCreateWithoutPedidoInput, ComissaoUncheckedCreateWithoutPedidoInput>
  }

  export type ComissaoCreateManyPedidoInputEnvelope = {
    data: ComissaoCreateManyPedidoInput | ComissaoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutPedidosInput = {
    update: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPedidosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
  }

  export type ClienteUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneComercial?: NullableStringFieldUpdateOperationsInput | string | null
    emailComercial?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    nomeContato?: NullableStringFieldUpdateOperationsInput | string | null
    emailContato?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    limiteCredito?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoesPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneComercial?: NullableStringFieldUpdateOperationsInput | string | null
    emailComercial?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    nomeContato?: NullableStringFieldUpdateOperationsInput | string | null
    emailContato?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    limiteCredito?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoesPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepresentanteUpsertWithoutPedidosInput = {
    update: XOR<RepresentanteUpdateWithoutPedidosInput, RepresentanteUncheckedUpdateWithoutPedidosInput>
    create: XOR<RepresentanteCreateWithoutPedidosInput, RepresentanteUncheckedCreateWithoutPedidosInput>
    where?: RepresentanteWhereInput
  }

  export type RepresentanteUpdateToOneWithWhereWithoutPedidosInput = {
    where?: RepresentanteWhereInput
    data: XOR<RepresentanteUpdateWithoutPedidosInput, RepresentanteUncheckedUpdateWithoutPedidosInput>
  }

  export type RepresentanteUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRepresentanteNestedInput
    vinculacoes?: VinculacaoUpdateManyWithoutRepresentanteNestedInput
    comissoes?: ComissaoUpdateManyWithoutRepresentanteNestedInput
    convitesEnviados?: ConviteUpdateManyWithoutRepresentanteNestedInput
  }

  export type RepresentanteUncheckedUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vinculacoes?: VinculacaoUncheckedUpdateManyWithoutRepresentanteNestedInput
    comissoes?: ComissaoUncheckedUpdateManyWithoutRepresentanteNestedInput
    convitesEnviados?: ConviteUncheckedUpdateManyWithoutRepresentanteNestedInput
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type ComissaoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ComissaoWhereUniqueInput
    update: XOR<ComissaoUpdateWithoutPedidoInput, ComissaoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ComissaoCreateWithoutPedidoInput, ComissaoUncheckedCreateWithoutPedidoInput>
  }

  export type ComissaoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ComissaoWhereUniqueInput
    data: XOR<ComissaoUpdateWithoutPedidoInput, ComissaoUncheckedUpdateWithoutPedidoInput>
  }

  export type ComissaoUpdateManyWithWhereWithoutPedidoInput = {
    where: ComissaoScalarWhereInput
    data: XOR<ComissaoUpdateManyMutationInput, ComissaoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type FornecedorCreateWithoutConvitesEnviadosInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefone?: string | null
    segmento: string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFornecedorInput
    produtos?: ProdutoCreateNestedManyWithoutFornecedorInput
    vinculacoes?: VinculacaoCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUncheckedCreateWithoutConvitesEnviadosInput = {
    id?: string
    usuarioId: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    telefone?: string | null
    segmento: string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    produtos?: ProdutoUncheckedCreateNestedManyWithoutFornecedorInput
    vinculacoes?: VinculacaoUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorCreateOrConnectWithoutConvitesEnviadosInput = {
    where: FornecedorWhereUniqueInput
    create: XOR<FornecedorCreateWithoutConvitesEnviadosInput, FornecedorUncheckedCreateWithoutConvitesEnviadosInput>
  }

  export type RepresentanteCreateWithoutConvitesEnviadosInput = {
    id?: string
    cpf?: string | null
    telefone?: string | null
    regiao: string
    especialidades?: RepresentanteCreateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRepresentanteInput
    vinculacoes?: VinculacaoCreateNestedManyWithoutRepresentanteInput
    comissoes?: ComissaoCreateNestedManyWithoutRepresentanteInput
    pedidos?: PedidoCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteUncheckedCreateWithoutConvitesEnviadosInput = {
    id?: string
    usuarioId: string
    cpf?: string | null
    telefone?: string | null
    regiao: string
    especialidades?: RepresentanteCreateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vinculacoes?: VinculacaoUncheckedCreateNestedManyWithoutRepresentanteInput
    comissoes?: ComissaoUncheckedCreateNestedManyWithoutRepresentanteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteCreateOrConnectWithoutConvitesEnviadosInput = {
    where: RepresentanteWhereUniqueInput
    create: XOR<RepresentanteCreateWithoutConvitesEnviadosInput, RepresentanteUncheckedCreateWithoutConvitesEnviadosInput>
  }

  export type FornecedorUpsertWithoutConvitesEnviadosInput = {
    update: XOR<FornecedorUpdateWithoutConvitesEnviadosInput, FornecedorUncheckedUpdateWithoutConvitesEnviadosInput>
    create: XOR<FornecedorCreateWithoutConvitesEnviadosInput, FornecedorUncheckedCreateWithoutConvitesEnviadosInput>
    where?: FornecedorWhereInput
  }

  export type FornecedorUpdateToOneWithWhereWithoutConvitesEnviadosInput = {
    where?: FornecedorWhereInput
    data: XOR<FornecedorUpdateWithoutConvitesEnviadosInput, FornecedorUncheckedUpdateWithoutConvitesEnviadosInput>
  }

  export type FornecedorUpdateWithoutConvitesEnviadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    segmento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFornecedorNestedInput
    produtos?: ProdutoUpdateManyWithoutFornecedorNestedInput
    vinculacoes?: VinculacaoUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorUncheckedUpdateWithoutConvitesEnviadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    segmento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUncheckedUpdateManyWithoutFornecedorNestedInput
    vinculacoes?: VinculacaoUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type RepresentanteUpsertWithoutConvitesEnviadosInput = {
    update: XOR<RepresentanteUpdateWithoutConvitesEnviadosInput, RepresentanteUncheckedUpdateWithoutConvitesEnviadosInput>
    create: XOR<RepresentanteCreateWithoutConvitesEnviadosInput, RepresentanteUncheckedCreateWithoutConvitesEnviadosInput>
    where?: RepresentanteWhereInput
  }

  export type RepresentanteUpdateToOneWithWhereWithoutConvitesEnviadosInput = {
    where?: RepresentanteWhereInput
    data: XOR<RepresentanteUpdateWithoutConvitesEnviadosInput, RepresentanteUncheckedUpdateWithoutConvitesEnviadosInput>
  }

  export type RepresentanteUpdateWithoutConvitesEnviadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRepresentanteNestedInput
    vinculacoes?: VinculacaoUpdateManyWithoutRepresentanteNestedInput
    comissoes?: ComissaoUpdateManyWithoutRepresentanteNestedInput
    pedidos?: PedidoUpdateManyWithoutRepresentanteNestedInput
  }

  export type RepresentanteUncheckedUpdateWithoutConvitesEnviadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vinculacoes?: VinculacaoUncheckedUpdateManyWithoutRepresentanteNestedInput
    comissoes?: ComissaoUncheckedUpdateManyWithoutRepresentanteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutRepresentanteNestedInput
  }

  export type ProdutoCreateWithoutItensInput = {
    id?: string
    nome: string
    descricao: string
    precoBase: number
    categoria?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor?: FornecedorCreateNestedOneWithoutProdutosInput
    variantes?: VarianteProdutoCreateNestedManyWithoutProductInput
  }

  export type ProdutoUncheckedCreateWithoutItensInput = {
    id?: string
    nome: string
    descricao: string
    precoBase: number
    fornecedorId?: string | null
    categoria?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variantes?: VarianteProdutoUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProdutoCreateOrConnectWithoutItensInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
  }

  export type PedidoCreateWithoutItensInput = {
    id?: string
    dataPedido?: Date | string
    status?: $Enums.StatusPedido
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    representante?: RepresentanteCreateNestedOneWithoutPedidosInput
    comissoes?: ComissaoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutItensInput = {
    id?: string
    clienteId: string
    representanteId?: string | null
    dataPedido?: Date | string
    status?: $Enums.StatusPedido
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comissoes?: ComissaoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutItensInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
  }

  export type ProdutoUpsertWithoutItensInput = {
    update: XOR<ProdutoUpdateWithoutItensInput, ProdutoUncheckedUpdateWithoutItensInput>
    create: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutItensInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutItensInput, ProdutoUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBase?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneWithoutProdutosNestedInput
    variantes?: VarianteProdutoUpdateManyWithoutProductNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBase?: FloatFieldUpdateOperationsInput | number
    fornecedorId?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantes?: VarianteProdutoUncheckedUpdateManyWithoutProductNestedInput
  }

  export type PedidoUpsertWithoutItensInput = {
    update: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItensInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type PedidoUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    representante?: RepresentanteUpdateOneWithoutPedidosNestedInput
    comissoes?: ComissaoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comissoes?: ComissaoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type VinculacaoCreateWithoutComissoesInput = {
    id?: string
    status?: $Enums.StatusVinculacao
    comissaoPercent?: number
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: Date | string
    dataInativacao?: Date | string | null
    motivoInativacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorCreateNestedOneWithoutVinculacoesInput
    representante: RepresentanteCreateNestedOneWithoutVinculacoesInput
  }

  export type VinculacaoUncheckedCreateWithoutComissoesInput = {
    id?: string
    fornecedorId: string
    representanteId: string
    status?: $Enums.StatusVinculacao
    comissaoPercent?: number
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: Date | string
    dataInativacao?: Date | string | null
    motivoInativacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VinculacaoCreateOrConnectWithoutComissoesInput = {
    where: VinculacaoWhereUniqueInput
    create: XOR<VinculacaoCreateWithoutComissoesInput, VinculacaoUncheckedCreateWithoutComissoesInput>
  }

  export type RepresentanteCreateWithoutComissoesInput = {
    id?: string
    cpf?: string | null
    telefone?: string | null
    regiao: string
    especialidades?: RepresentanteCreateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRepresentanteInput
    vinculacoes?: VinculacaoCreateNestedManyWithoutRepresentanteInput
    pedidos?: PedidoCreateNestedManyWithoutRepresentanteInput
    convitesEnviados?: ConviteCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteUncheckedCreateWithoutComissoesInput = {
    id?: string
    usuarioId: string
    cpf?: string | null
    telefone?: string | null
    regiao: string
    especialidades?: RepresentanteCreateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vinculacoes?: VinculacaoUncheckedCreateNestedManyWithoutRepresentanteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutRepresentanteInput
    convitesEnviados?: ConviteUncheckedCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteCreateOrConnectWithoutComissoesInput = {
    where: RepresentanteWhereUniqueInput
    create: XOR<RepresentanteCreateWithoutComissoesInput, RepresentanteUncheckedCreateWithoutComissoesInput>
  }

  export type PedidoCreateWithoutComissoesInput = {
    id?: string
    dataPedido?: Date | string
    status?: $Enums.StatusPedido
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    representante?: RepresentanteCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutComissoesInput = {
    id?: string
    clienteId: string
    representanteId?: string | null
    dataPedido?: Date | string
    status?: $Enums.StatusPedido
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutComissoesInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutComissoesInput, PedidoUncheckedCreateWithoutComissoesInput>
  }

  export type VinculacaoUpsertWithoutComissoesInput = {
    update: XOR<VinculacaoUpdateWithoutComissoesInput, VinculacaoUncheckedUpdateWithoutComissoesInput>
    create: XOR<VinculacaoCreateWithoutComissoesInput, VinculacaoUncheckedCreateWithoutComissoesInput>
    where?: VinculacaoWhereInput
  }

  export type VinculacaoUpdateToOneWithWhereWithoutComissoesInput = {
    where?: VinculacaoWhereInput
    data: XOR<VinculacaoUpdateWithoutComissoesInput, VinculacaoUncheckedUpdateWithoutComissoesInput>
  }

  export type VinculacaoUpdateWithoutComissoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusVinculacaoFieldUpdateOperationsInput | $Enums.StatusVinculacao
    comissaoPercent?: FloatFieldUpdateOperationsInput | number
    precoEspecial?: BoolFieldUpdateOperationsInput | boolean
    acessoRelatorios?: BoolFieldUpdateOperationsInput | boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInativacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoInativacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneRequiredWithoutVinculacoesNestedInput
    representante?: RepresentanteUpdateOneRequiredWithoutVinculacoesNestedInput
  }

  export type VinculacaoUncheckedUpdateWithoutComissoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    representanteId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusVinculacaoFieldUpdateOperationsInput | $Enums.StatusVinculacao
    comissaoPercent?: FloatFieldUpdateOperationsInput | number
    precoEspecial?: BoolFieldUpdateOperationsInput | boolean
    acessoRelatorios?: BoolFieldUpdateOperationsInput | boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInativacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoInativacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepresentanteUpsertWithoutComissoesInput = {
    update: XOR<RepresentanteUpdateWithoutComissoesInput, RepresentanteUncheckedUpdateWithoutComissoesInput>
    create: XOR<RepresentanteCreateWithoutComissoesInput, RepresentanteUncheckedCreateWithoutComissoesInput>
    where?: RepresentanteWhereInput
  }

  export type RepresentanteUpdateToOneWithWhereWithoutComissoesInput = {
    where?: RepresentanteWhereInput
    data: XOR<RepresentanteUpdateWithoutComissoesInput, RepresentanteUncheckedUpdateWithoutComissoesInput>
  }

  export type RepresentanteUpdateWithoutComissoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRepresentanteNestedInput
    vinculacoes?: VinculacaoUpdateManyWithoutRepresentanteNestedInput
    pedidos?: PedidoUpdateManyWithoutRepresentanteNestedInput
    convitesEnviados?: ConviteUpdateManyWithoutRepresentanteNestedInput
  }

  export type RepresentanteUncheckedUpdateWithoutComissoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    regiao?: StringFieldUpdateOperationsInput | string
    especialidades?: RepresentanteUpdateespecialidadesInput | string[]
    endereco?: NullableJsonNullValueInput | InputJsonValue
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vinculacoes?: VinculacaoUncheckedUpdateManyWithoutRepresentanteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutRepresentanteNestedInput
    convitesEnviados?: ConviteUncheckedUpdateManyWithoutRepresentanteNestedInput
  }

  export type PedidoUpsertWithoutComissoesInput = {
    update: XOR<PedidoUpdateWithoutComissoesInput, PedidoUncheckedUpdateWithoutComissoesInput>
    create: XOR<PedidoCreateWithoutComissoesInput, PedidoUncheckedCreateWithoutComissoesInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutComissoesInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutComissoesInput, PedidoUncheckedUpdateWithoutComissoesInput>
  }

  export type PedidoUpdateWithoutComissoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    representante?: RepresentanteUpdateOneWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutComissoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateWithoutClienteInput = {
    id?: string
    dataPedido?: Date | string
    status?: $Enums.StatusPedido
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    representante?: RepresentanteCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
    comissoes?: ComissaoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutClienteInput = {
    id?: string
    representanteId?: string | null
    dataPedido?: Date | string
    status?: $Enums.StatusPedido
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    comissoes?: ComissaoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateManyClienteInputEnvelope = {
    data: PedidoCreateManyClienteInput | PedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutClienteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type UsuarioCreateWithoutNotificacoesInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel?: $Enums.PapelUsuario
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor?: FornecedorCreateNestedOneWithoutUsuarioInput
    representante?: RepresentanteCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutNotificacoesInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel?: $Enums.PapelUsuario
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor?: FornecedorUncheckedCreateNestedOneWithoutUsuarioInput
    representante?: RepresentanteUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutNotificacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
  }

  export type UsuarioUpsertWithoutNotificacoesInput = {
    update: XOR<UsuarioUpdateWithoutNotificacoesInput, UsuarioUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutNotificacoesInput, UsuarioUncheckedUpdateWithoutNotificacoesInput>
  }

  export type UsuarioUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneWithoutUsuarioNestedInput
    representante?: RepresentanteUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUncheckedUpdateOneWithoutUsuarioNestedInput
    representante?: RepresentanteUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type NotificacaoCreateManyUsuarioInput = {
    id?: string
    titulo: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    prioridade?: $Enums.PrioridadeNotificacao
    dataEnvio?: Date | string
    lida?: boolean
    dataLeitura?: Date | string | null
    metadados?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    prioridade?: EnumPrioridadeNotificacaoFieldUpdateOperationsInput | $Enums.PrioridadeNotificacao
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadados?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    prioridade?: EnumPrioridadeNotificacaoFieldUpdateOperationsInput | $Enums.PrioridadeNotificacao
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadados?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    prioridade?: EnumPrioridadeNotificacaoFieldUpdateOperationsInput | $Enums.PrioridadeNotificacao
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadados?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoCreateManyFornecedorInput = {
    id?: string
    nome: string
    descricao: string
    precoBase: number
    categoria?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VinculacaoCreateManyFornecedorInput = {
    id?: string
    representanteId: string
    status?: $Enums.StatusVinculacao
    comissaoPercent?: number
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: Date | string
    dataInativacao?: Date | string | null
    motivoInativacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConviteCreateManyFornecedorInput = {
    id?: string
    remetenteId: string
    destinatarioId: string
    tipoRemetente: $Enums.TipoConvite
    representanteId?: string | null
    status?: $Enums.StatusConvite
    mensagem?: string | null
    comissaoPercent?: number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: Date | string
    dataResposta?: Date | string | null
    motivoRecusa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProdutoUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBase?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantes?: VarianteProdutoUpdateManyWithoutProductNestedInput
    itens?: ItemPedidoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBase?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantes?: VarianteProdutoUncheckedUpdateManyWithoutProductNestedInput
    itens?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBase?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VinculacaoUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusVinculacaoFieldUpdateOperationsInput | $Enums.StatusVinculacao
    comissaoPercent?: FloatFieldUpdateOperationsInput | number
    precoEspecial?: BoolFieldUpdateOperationsInput | boolean
    acessoRelatorios?: BoolFieldUpdateOperationsInput | boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInativacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoInativacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    representante?: RepresentanteUpdateOneRequiredWithoutVinculacoesNestedInput
    comissoes?: ComissaoUpdateManyWithoutVinculacaoNestedInput
  }

  export type VinculacaoUncheckedUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    representanteId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusVinculacaoFieldUpdateOperationsInput | $Enums.StatusVinculacao
    comissaoPercent?: FloatFieldUpdateOperationsInput | number
    precoEspecial?: BoolFieldUpdateOperationsInput | boolean
    acessoRelatorios?: BoolFieldUpdateOperationsInput | boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInativacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoInativacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comissoes?: ComissaoUncheckedUpdateManyWithoutVinculacaoNestedInput
  }

  export type VinculacaoUncheckedUpdateManyWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    representanteId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusVinculacaoFieldUpdateOperationsInput | $Enums.StatusVinculacao
    comissaoPercent?: FloatFieldUpdateOperationsInput | number
    precoEspecial?: BoolFieldUpdateOperationsInput | boolean
    acessoRelatorios?: BoolFieldUpdateOperationsInput | boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInativacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoInativacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConviteUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    remetenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    tipoRemetente?: EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite
    status?: EnumStatusConviteFieldUpdateOperationsInput | $Enums.StatusConvite
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    comissaoPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResposta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRecusa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    representante?: RepresentanteUpdateOneWithoutConvitesEnviadosNestedInput
  }

  export type ConviteUncheckedUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    remetenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    tipoRemetente?: EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConviteFieldUpdateOperationsInput | $Enums.StatusConvite
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    comissaoPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResposta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRecusa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConviteUncheckedUpdateManyWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    remetenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    tipoRemetente?: EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConviteFieldUpdateOperationsInput | $Enums.StatusConvite
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    comissaoPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResposta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRecusa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VarianteProdutoCreateManyProductInput = {
    id?: string
    sku: string
    preco: number
    estoque: number
    atributos: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemPedidoCreateManyProdutoInput = {
    id?: string
    varianteId?: string | null
    quantidade: number
    precoUnitario: number
    desconto?: number | null
    valorTotal: number
    observacoes?: string | null
    pedidoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VarianteProdutoUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    estoque?: IntFieldUpdateOperationsInput | number
    atributos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VarianteProdutoUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    estoque?: IntFieldUpdateOperationsInput | number
    atributos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VarianteProdutoUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    estoque?: IntFieldUpdateOperationsInput | number
    atributos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoUpdateWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    varianteId?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    varianteId?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    varianteId?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VinculacaoCreateManyRepresentanteInput = {
    id?: string
    fornecedorId: string
    status?: $Enums.StatusVinculacao
    comissaoPercent?: number
    precoEspecial?: boolean
    acessoRelatorios?: boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: Date | string
    dataInativacao?: Date | string | null
    motivoInativacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComissaoCreateManyRepresentanteInput = {
    id?: string
    vinculacaoId: string
    pedidoId: string
    percentual: number
    valorCalculado: number
    status?: $Enums.StatusComissao
    dataEfetivacao?: Date | string | null
    dataPagamento?: Date | string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PedidoCreateManyRepresentanteInput = {
    id?: string
    clienteId: string
    dataPedido?: Date | string
    status?: $Enums.StatusPedido
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConviteCreateManyRepresentanteInput = {
    id?: string
    remetenteId: string
    destinatarioId: string
    tipoRemetente: $Enums.TipoConvite
    fornecedorId?: string | null
    status?: $Enums.StatusConvite
    mensagem?: string | null
    comissaoPercent?: number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: Date | string
    dataResposta?: Date | string | null
    motivoRecusa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VinculacaoUpdateWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusVinculacaoFieldUpdateOperationsInput | $Enums.StatusVinculacao
    comissaoPercent?: FloatFieldUpdateOperationsInput | number
    precoEspecial?: BoolFieldUpdateOperationsInput | boolean
    acessoRelatorios?: BoolFieldUpdateOperationsInput | boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInativacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoInativacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneRequiredWithoutVinculacoesNestedInput
    comissoes?: ComissaoUpdateManyWithoutVinculacaoNestedInput
  }

  export type VinculacaoUncheckedUpdateWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusVinculacaoFieldUpdateOperationsInput | $Enums.StatusVinculacao
    comissaoPercent?: FloatFieldUpdateOperationsInput | number
    precoEspecial?: BoolFieldUpdateOperationsInput | boolean
    acessoRelatorios?: BoolFieldUpdateOperationsInput | boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInativacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoInativacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comissoes?: ComissaoUncheckedUpdateManyWithoutVinculacaoNestedInput
  }

  export type VinculacaoUncheckedUpdateManyWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusVinculacaoFieldUpdateOperationsInput | $Enums.StatusVinculacao
    comissaoPercent?: FloatFieldUpdateOperationsInput | number
    precoEspecial?: BoolFieldUpdateOperationsInput | boolean
    acessoRelatorios?: BoolFieldUpdateOperationsInput | boolean
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataVinculacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInativacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoInativacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComissaoUpdateWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusComissaoFieldUpdateOperationsInput | $Enums.StatusComissao
    dataEfetivacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vinculacao?: VinculacaoUpdateOneRequiredWithoutComissoesNestedInput
    pedido?: PedidoUpdateOneRequiredWithoutComissoesNestedInput
  }

  export type ComissaoUncheckedUpdateWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    vinculacaoId?: StringFieldUpdateOperationsInput | string
    pedidoId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusComissaoFieldUpdateOperationsInput | $Enums.StatusComissao
    dataEfetivacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComissaoUncheckedUpdateManyWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    vinculacaoId?: StringFieldUpdateOperationsInput | string
    pedidoId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusComissaoFieldUpdateOperationsInput | $Enums.StatusComissao
    dataEfetivacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUpdateWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    comissoes?: ComissaoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    comissoes?: ComissaoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConviteUpdateWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    remetenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    tipoRemetente?: EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite
    status?: EnumStatusConviteFieldUpdateOperationsInput | $Enums.StatusConvite
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    comissaoPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResposta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRecusa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneWithoutConvitesEnviadosNestedInput
  }

  export type ConviteUncheckedUpdateWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    remetenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    tipoRemetente?: EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite
    fornecedorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConviteFieldUpdateOperationsInput | $Enums.StatusConvite
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    comissaoPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResposta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRecusa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConviteUncheckedUpdateManyWithoutRepresentanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    remetenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    tipoRemetente?: EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite
    fornecedorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConviteFieldUpdateOperationsInput | $Enums.StatusConvite
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    comissaoPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResposta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRecusa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComissaoCreateManyVinculacaoInput = {
    id?: string
    representanteId: string
    pedidoId: string
    percentual: number
    valorCalculado: number
    status?: $Enums.StatusComissao
    dataEfetivacao?: Date | string | null
    dataPagamento?: Date | string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComissaoUpdateWithoutVinculacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusComissaoFieldUpdateOperationsInput | $Enums.StatusComissao
    dataEfetivacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    representante?: RepresentanteUpdateOneRequiredWithoutComissoesNestedInput
    pedido?: PedidoUpdateOneRequiredWithoutComissoesNestedInput
  }

  export type ComissaoUncheckedUpdateWithoutVinculacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    representanteId?: StringFieldUpdateOperationsInput | string
    pedidoId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusComissaoFieldUpdateOperationsInput | $Enums.StatusComissao
    dataEfetivacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComissaoUncheckedUpdateManyWithoutVinculacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    representanteId?: StringFieldUpdateOperationsInput | string
    pedidoId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusComissaoFieldUpdateOperationsInput | $Enums.StatusComissao
    dataEfetivacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoCreateManyPedidoInput = {
    id?: string
    produtoId: string
    varianteId?: string | null
    quantidade: number
    precoUnitario: number
    desconto?: number | null
    valorTotal: number
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComissaoCreateManyPedidoInput = {
    id?: string
    vinculacaoId: string
    representanteId: string
    percentual: number
    valorCalculado: number
    status?: $Enums.StatusComissao
    dataEfetivacao?: Date | string | null
    dataPagamento?: Date | string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemPedidoUpdateWithoutPedidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    varianteId?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutPedidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    produtoId?: StringFieldUpdateOperationsInput | string
    varianteId?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    produtoId?: StringFieldUpdateOperationsInput | string
    varianteId?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComissaoUpdateWithoutPedidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusComissaoFieldUpdateOperationsInput | $Enums.StatusComissao
    dataEfetivacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vinculacao?: VinculacaoUpdateOneRequiredWithoutComissoesNestedInput
    representante?: RepresentanteUpdateOneRequiredWithoutComissoesNestedInput
  }

  export type ComissaoUncheckedUpdateWithoutPedidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    vinculacaoId?: StringFieldUpdateOperationsInput | string
    representanteId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusComissaoFieldUpdateOperationsInput | $Enums.StatusComissao
    dataEfetivacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComissaoUncheckedUpdateManyWithoutPedidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    vinculacaoId?: StringFieldUpdateOperationsInput | string
    representanteId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusComissaoFieldUpdateOperationsInput | $Enums.StatusComissao
    dataEfetivacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateManyClienteInput = {
    id?: string
    representanteId?: string | null
    dataPedido?: Date | string
    status?: $Enums.StatusPedido
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PedidoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    representante?: RepresentanteUpdateOneWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    comissoes?: ComissaoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    comissoes?: ComissaoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    representanteId?: NullableStringFieldUpdateOperationsInput | string | null
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FornecedorCountOutputTypeDefaultArgs instead
     */
    export type FornecedorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FornecedorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProdutoCountOutputTypeDefaultArgs instead
     */
    export type ProdutoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProdutoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RepresentanteCountOutputTypeDefaultArgs instead
     */
    export type RepresentanteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RepresentanteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VinculacaoCountOutputTypeDefaultArgs instead
     */
    export type VinculacaoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VinculacaoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PedidoCountOutputTypeDefaultArgs instead
     */
    export type PedidoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PedidoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClienteCountOutputTypeDefaultArgs instead
     */
    export type ClienteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FornecedorDefaultArgs instead
     */
    export type FornecedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FornecedorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProdutoDefaultArgs instead
     */
    export type ProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProdutoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RepresentanteDefaultArgs instead
     */
    export type RepresentanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RepresentanteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VarianteProdutoDefaultArgs instead
     */
    export type VarianteProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VarianteProdutoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VinculacaoDefaultArgs instead
     */
    export type VinculacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VinculacaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PedidoDefaultArgs instead
     */
    export type PedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PedidoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConviteDefaultArgs instead
     */
    export type ConviteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConviteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemPedidoDefaultArgs instead
     */
    export type ItemPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemPedidoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ComissaoDefaultArgs instead
     */
    export type ComissaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ComissaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClienteDefaultArgs instead
     */
    export type ClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificacaoDefaultArgs instead
     */
    export type NotificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificacaoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}