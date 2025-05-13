
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
 * Model lomba
 * 
 */
export type lomba = $Result.DefaultSelection<Prisma.$lombaPayload>
/**
 * Model sertifikat
 * 
 */
export type sertifikat = $Result.DefaultSelection<Prisma.$sertifikatPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model juri
 * 
 */
export type juri = $Result.DefaultSelection<Prisma.$juriPayload>
/**
 * Model penilaian
 * 
 */
export type penilaian = $Result.DefaultSelection<Prisma.$penilaianPayload>
/**
 * Model peserta
 * 
 */
export type peserta = $Result.DefaultSelection<Prisma.$pesertaPayload>
/**
 * Model pesertalomba
 * 
 */
export type pesertalomba = $Result.DefaultSelection<Prisma.$pesertalombaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  PESERTA: 'PESERTA',
  USERS: 'USERS',
  JURI: 'JURI',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Jenis_lomba: {
  INDIVIDU: 'INDIVIDU',
  TIM: 'TIM'
};

export type Jenis_lomba = (typeof Jenis_lomba)[keyof typeof Jenis_lomba]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Jenis_lomba = $Enums.Jenis_lomba

export const Jenis_lomba: typeof $Enums.Jenis_lomba

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Lombas
 * const lombas = await prisma.lomba.findMany()
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
   * // Fetch zero or more Lombas
   * const lombas = await prisma.lomba.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.lomba`: Exposes CRUD operations for the **lomba** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lombas
    * const lombas = await prisma.lomba.findMany()
    * ```
    */
  get lomba(): Prisma.lombaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sertifikat`: Exposes CRUD operations for the **sertifikat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sertifikats
    * const sertifikats = await prisma.sertifikat.findMany()
    * ```
    */
  get sertifikat(): Prisma.sertifikatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.juri`: Exposes CRUD operations for the **juri** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Juris
    * const juris = await prisma.juri.findMany()
    * ```
    */
  get juri(): Prisma.juriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penilaian`: Exposes CRUD operations for the **penilaian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penilaians
    * const penilaians = await prisma.penilaian.findMany()
    * ```
    */
  get penilaian(): Prisma.penilaianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peserta`: Exposes CRUD operations for the **peserta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pesertas
    * const pesertas = await prisma.peserta.findMany()
    * ```
    */
  get peserta(): Prisma.pesertaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pesertalomba`: Exposes CRUD operations for the **pesertalomba** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pesertalombas
    * const pesertalombas = await prisma.pesertalomba.findMany()
    * ```
    */
  get pesertalomba(): Prisma.pesertalombaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    lomba: 'lomba',
    sertifikat: 'sertifikat',
    users: 'users',
    admin: 'admin',
    juri: 'juri',
    penilaian: 'penilaian',
    peserta: 'peserta',
    pesertalomba: 'pesertalomba'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "lomba" | "sertifikat" | "users" | "admin" | "juri" | "penilaian" | "peserta" | "pesertalomba"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      lomba: {
        payload: Prisma.$lombaPayload<ExtArgs>
        fields: Prisma.lombaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lombaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lombaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lombaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lombaPayload>
          }
          findFirst: {
            args: Prisma.lombaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lombaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lombaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lombaPayload>
          }
          findMany: {
            args: Prisma.lombaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lombaPayload>[]
          }
          create: {
            args: Prisma.lombaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lombaPayload>
          }
          createMany: {
            args: Prisma.lombaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lombaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lombaPayload>[]
          }
          delete: {
            args: Prisma.lombaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lombaPayload>
          }
          update: {
            args: Prisma.lombaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lombaPayload>
          }
          deleteMany: {
            args: Prisma.lombaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lombaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lombaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lombaPayload>[]
          }
          upsert: {
            args: Prisma.lombaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lombaPayload>
          }
          aggregate: {
            args: Prisma.LombaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLomba>
          }
          groupBy: {
            args: Prisma.lombaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LombaGroupByOutputType>[]
          }
          count: {
            args: Prisma.lombaCountArgs<ExtArgs>
            result: $Utils.Optional<LombaCountAggregateOutputType> | number
          }
        }
      }
      sertifikat: {
        payload: Prisma.$sertifikatPayload<ExtArgs>
        fields: Prisma.sertifikatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sertifikatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sertifikatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sertifikatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sertifikatPayload>
          }
          findFirst: {
            args: Prisma.sertifikatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sertifikatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sertifikatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sertifikatPayload>
          }
          findMany: {
            args: Prisma.sertifikatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sertifikatPayload>[]
          }
          create: {
            args: Prisma.sertifikatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sertifikatPayload>
          }
          createMany: {
            args: Prisma.sertifikatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sertifikatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sertifikatPayload>[]
          }
          delete: {
            args: Prisma.sertifikatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sertifikatPayload>
          }
          update: {
            args: Prisma.sertifikatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sertifikatPayload>
          }
          deleteMany: {
            args: Prisma.sertifikatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sertifikatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sertifikatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sertifikatPayload>[]
          }
          upsert: {
            args: Prisma.sertifikatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sertifikatPayload>
          }
          aggregate: {
            args: Prisma.SertifikatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSertifikat>
          }
          groupBy: {
            args: Prisma.sertifikatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SertifikatGroupByOutputType>[]
          }
          count: {
            args: Prisma.sertifikatCountArgs<ExtArgs>
            result: $Utils.Optional<SertifikatCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      juri: {
        payload: Prisma.$juriPayload<ExtArgs>
        fields: Prisma.juriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.juriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.juriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juriPayload>
          }
          findFirst: {
            args: Prisma.juriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.juriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juriPayload>
          }
          findMany: {
            args: Prisma.juriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juriPayload>[]
          }
          create: {
            args: Prisma.juriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juriPayload>
          }
          createMany: {
            args: Prisma.juriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.juriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juriPayload>[]
          }
          delete: {
            args: Prisma.juriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juriPayload>
          }
          update: {
            args: Prisma.juriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juriPayload>
          }
          deleteMany: {
            args: Prisma.juriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.juriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.juriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juriPayload>[]
          }
          upsert: {
            args: Prisma.juriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juriPayload>
          }
          aggregate: {
            args: Prisma.JuriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJuri>
          }
          groupBy: {
            args: Prisma.juriGroupByArgs<ExtArgs>
            result: $Utils.Optional<JuriGroupByOutputType>[]
          }
          count: {
            args: Prisma.juriCountArgs<ExtArgs>
            result: $Utils.Optional<JuriCountAggregateOutputType> | number
          }
        }
      }
      penilaian: {
        payload: Prisma.$penilaianPayload<ExtArgs>
        fields: Prisma.penilaianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.penilaianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penilaianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.penilaianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penilaianPayload>
          }
          findFirst: {
            args: Prisma.penilaianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penilaianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.penilaianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penilaianPayload>
          }
          findMany: {
            args: Prisma.penilaianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penilaianPayload>[]
          }
          create: {
            args: Prisma.penilaianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penilaianPayload>
          }
          createMany: {
            args: Prisma.penilaianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.penilaianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penilaianPayload>[]
          }
          delete: {
            args: Prisma.penilaianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penilaianPayload>
          }
          update: {
            args: Prisma.penilaianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penilaianPayload>
          }
          deleteMany: {
            args: Prisma.penilaianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.penilaianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.penilaianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penilaianPayload>[]
          }
          upsert: {
            args: Prisma.penilaianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penilaianPayload>
          }
          aggregate: {
            args: Prisma.PenilaianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenilaian>
          }
          groupBy: {
            args: Prisma.penilaianGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenilaianGroupByOutputType>[]
          }
          count: {
            args: Prisma.penilaianCountArgs<ExtArgs>
            result: $Utils.Optional<PenilaianCountAggregateOutputType> | number
          }
        }
      }
      peserta: {
        payload: Prisma.$pesertaPayload<ExtArgs>
        fields: Prisma.pesertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pesertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pesertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>
          }
          findFirst: {
            args: Prisma.pesertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pesertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>
          }
          findMany: {
            args: Prisma.pesertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>[]
          }
          create: {
            args: Prisma.pesertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>
          }
          createMany: {
            args: Prisma.pesertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pesertaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>[]
          }
          delete: {
            args: Prisma.pesertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>
          }
          update: {
            args: Prisma.pesertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>
          }
          deleteMany: {
            args: Prisma.pesertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pesertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pesertaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>[]
          }
          upsert: {
            args: Prisma.pesertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>
          }
          aggregate: {
            args: Prisma.PesertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeserta>
          }
          groupBy: {
            args: Prisma.pesertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PesertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.pesertaCountArgs<ExtArgs>
            result: $Utils.Optional<PesertaCountAggregateOutputType> | number
          }
        }
      }
      pesertalomba: {
        payload: Prisma.$pesertalombaPayload<ExtArgs>
        fields: Prisma.pesertalombaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pesertalombaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertalombaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pesertalombaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertalombaPayload>
          }
          findFirst: {
            args: Prisma.pesertalombaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertalombaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pesertalombaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertalombaPayload>
          }
          findMany: {
            args: Prisma.pesertalombaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertalombaPayload>[]
          }
          create: {
            args: Prisma.pesertalombaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertalombaPayload>
          }
          createMany: {
            args: Prisma.pesertalombaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pesertalombaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertalombaPayload>[]
          }
          delete: {
            args: Prisma.pesertalombaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertalombaPayload>
          }
          update: {
            args: Prisma.pesertalombaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertalombaPayload>
          }
          deleteMany: {
            args: Prisma.pesertalombaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pesertalombaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pesertalombaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertalombaPayload>[]
          }
          upsert: {
            args: Prisma.pesertalombaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertalombaPayload>
          }
          aggregate: {
            args: Prisma.PesertalombaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePesertalomba>
          }
          groupBy: {
            args: Prisma.pesertalombaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PesertalombaGroupByOutputType>[]
          }
          count: {
            args: Prisma.pesertalombaCountArgs<ExtArgs>
            result: $Utils.Optional<PesertalombaCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    lomba?: lombaOmit
    sertifikat?: sertifikatOmit
    users?: usersOmit
    admin?: adminOmit
    juri?: juriOmit
    penilaian?: penilaianOmit
    peserta?: pesertaOmit
    pesertalomba?: pesertalombaOmit
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
    | 'updateManyAndReturn'
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
   * Count Type LombaCountOutputType
   */

  export type LombaCountOutputType = {
    juri: number
    pesertalomba: number
    sertifikat: number
  }

  export type LombaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juri?: boolean | LombaCountOutputTypeCountJuriArgs
    pesertalomba?: boolean | LombaCountOutputTypeCountPesertalombaArgs
    sertifikat?: boolean | LombaCountOutputTypeCountSertifikatArgs
  }

  // Custom InputTypes
  /**
   * LombaCountOutputType without action
   */
  export type LombaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LombaCountOutputType
     */
    select?: LombaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LombaCountOutputType without action
   */
  export type LombaCountOutputTypeCountJuriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: juriWhereInput
  }

  /**
   * LombaCountOutputType without action
   */
  export type LombaCountOutputTypeCountPesertalombaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pesertalombaWhereInput
  }

  /**
   * LombaCountOutputType without action
   */
  export type LombaCountOutputTypeCountSertifikatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sertifikatWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    juri: number
    peserta: number
    admin: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juri?: boolean | UsersCountOutputTypeCountJuriArgs
    peserta?: boolean | UsersCountOutputTypeCountPesertaArgs
    admin?: boolean | UsersCountOutputTypeCountAdminArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountJuriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: juriWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPesertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pesertaWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
  }


  /**
   * Count Type JuriCountOutputType
   */

  export type JuriCountOutputType = {
    penilaian: number
  }

  export type JuriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penilaian?: boolean | JuriCountOutputTypeCountPenilaianArgs
  }

  // Custom InputTypes
  /**
   * JuriCountOutputType without action
   */
  export type JuriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuriCountOutputType
     */
    select?: JuriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JuriCountOutputType without action
   */
  export type JuriCountOutputTypeCountPenilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penilaianWhereInput
  }


  /**
   * Count Type PesertaCountOutputType
   */

  export type PesertaCountOutputType = {
    pesertalomba: number
  }

  export type PesertaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesertalomba?: boolean | PesertaCountOutputTypeCountPesertalombaArgs
  }

  // Custom InputTypes
  /**
   * PesertaCountOutputType without action
   */
  export type PesertaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaCountOutputType
     */
    select?: PesertaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PesertaCountOutputType without action
   */
  export type PesertaCountOutputTypeCountPesertalombaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pesertalombaWhereInput
  }


  /**
   * Count Type PesertalombaCountOutputType
   */

  export type PesertalombaCountOutputType = {
    penilaian: number
  }

  export type PesertalombaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penilaian?: boolean | PesertalombaCountOutputTypeCountPenilaianArgs
  }

  // Custom InputTypes
  /**
   * PesertalombaCountOutputType without action
   */
  export type PesertalombaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertalombaCountOutputType
     */
    select?: PesertalombaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PesertalombaCountOutputType without action
   */
  export type PesertalombaCountOutputTypeCountPenilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penilaianWhereInput
  }


  /**
   * Models
   */

  /**
   * Model lomba
   */

  export type AggregateLomba = {
    _count: LombaCountAggregateOutputType | null
    _min: LombaMinAggregateOutputType | null
    _max: LombaMaxAggregateOutputType | null
  }

  export type LombaMinAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    jenis_lomba: $Enums.Jenis_lomba | null
    lokasi: string | null
    nama: string | null
    url: string | null
    bataswaktu: Date | null
    deskripsi: string | null
  }

  export type LombaMaxAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    jenis_lomba: $Enums.Jenis_lomba | null
    lokasi: string | null
    nama: string | null
    url: string | null
    bataswaktu: Date | null
    deskripsi: string | null
  }

  export type LombaCountAggregateOutputType = {
    id: number
    tanggal: number
    jenis_lomba: number
    lokasi: number
    nama: number
    url: number
    bataswaktu: number
    deskripsi: number
    _all: number
  }


  export type LombaMinAggregateInputType = {
    id?: true
    tanggal?: true
    jenis_lomba?: true
    lokasi?: true
    nama?: true
    url?: true
    bataswaktu?: true
    deskripsi?: true
  }

  export type LombaMaxAggregateInputType = {
    id?: true
    tanggal?: true
    jenis_lomba?: true
    lokasi?: true
    nama?: true
    url?: true
    bataswaktu?: true
    deskripsi?: true
  }

  export type LombaCountAggregateInputType = {
    id?: true
    tanggal?: true
    jenis_lomba?: true
    lokasi?: true
    nama?: true
    url?: true
    bataswaktu?: true
    deskripsi?: true
    _all?: true
  }

  export type LombaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lomba to aggregate.
     */
    where?: lombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lombas to fetch.
     */
    orderBy?: lombaOrderByWithRelationInput | lombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lombas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lombas
    **/
    _count?: true | LombaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LombaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LombaMaxAggregateInputType
  }

  export type GetLombaAggregateType<T extends LombaAggregateArgs> = {
        [P in keyof T & keyof AggregateLomba]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLomba[P]>
      : GetScalarType<T[P], AggregateLomba[P]>
  }




  export type lombaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lombaWhereInput
    orderBy?: lombaOrderByWithAggregationInput | lombaOrderByWithAggregationInput[]
    by: LombaScalarFieldEnum[] | LombaScalarFieldEnum
    having?: lombaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LombaCountAggregateInputType | true
    _min?: LombaMinAggregateInputType
    _max?: LombaMaxAggregateInputType
  }

  export type LombaGroupByOutputType = {
    id: string
    tanggal: Date
    jenis_lomba: $Enums.Jenis_lomba
    lokasi: string
    nama: string
    url: string
    bataswaktu: Date
    deskripsi: string | null
    _count: LombaCountAggregateOutputType | null
    _min: LombaMinAggregateOutputType | null
    _max: LombaMaxAggregateOutputType | null
  }

  type GetLombaGroupByPayload<T extends lombaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LombaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LombaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LombaGroupByOutputType[P]>
            : GetScalarType<T[P], LombaGroupByOutputType[P]>
        }
      >
    >


  export type lombaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    jenis_lomba?: boolean
    lokasi?: boolean
    nama?: boolean
    url?: boolean
    bataswaktu?: boolean
    deskripsi?: boolean
    juri?: boolean | lomba$juriArgs<ExtArgs>
    pesertalomba?: boolean | lomba$pesertalombaArgs<ExtArgs>
    sertifikat?: boolean | lomba$sertifikatArgs<ExtArgs>
    _count?: boolean | LombaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lomba"]>

  export type lombaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    jenis_lomba?: boolean
    lokasi?: boolean
    nama?: boolean
    url?: boolean
    bataswaktu?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["lomba"]>

  export type lombaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    jenis_lomba?: boolean
    lokasi?: boolean
    nama?: boolean
    url?: boolean
    bataswaktu?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["lomba"]>

  export type lombaSelectScalar = {
    id?: boolean
    tanggal?: boolean
    jenis_lomba?: boolean
    lokasi?: boolean
    nama?: boolean
    url?: boolean
    bataswaktu?: boolean
    deskripsi?: boolean
  }

  export type lombaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "jenis_lomba" | "lokasi" | "nama" | "url" | "bataswaktu" | "deskripsi", ExtArgs["result"]["lomba"]>
  export type lombaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juri?: boolean | lomba$juriArgs<ExtArgs>
    pesertalomba?: boolean | lomba$pesertalombaArgs<ExtArgs>
    sertifikat?: boolean | lomba$sertifikatArgs<ExtArgs>
    _count?: boolean | LombaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type lombaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type lombaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $lombaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lomba"
    objects: {
      juri: Prisma.$juriPayload<ExtArgs>[]
      pesertalomba: Prisma.$pesertalombaPayload<ExtArgs>[]
      sertifikat: Prisma.$sertifikatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: Date
      jenis_lomba: $Enums.Jenis_lomba
      lokasi: string
      nama: string
      url: string
      bataswaktu: Date
      deskripsi: string | null
    }, ExtArgs["result"]["lomba"]>
    composites: {}
  }

  type lombaGetPayload<S extends boolean | null | undefined | lombaDefaultArgs> = $Result.GetResult<Prisma.$lombaPayload, S>

  type lombaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lombaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LombaCountAggregateInputType | true
    }

  export interface lombaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lomba'], meta: { name: 'lomba' } }
    /**
     * Find zero or one Lomba that matches the filter.
     * @param {lombaFindUniqueArgs} args - Arguments to find a Lomba
     * @example
     * // Get one Lomba
     * const lomba = await prisma.lomba.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lombaFindUniqueArgs>(args: SelectSubset<T, lombaFindUniqueArgs<ExtArgs>>): Prisma__lombaClient<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lomba that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lombaFindUniqueOrThrowArgs} args - Arguments to find a Lomba
     * @example
     * // Get one Lomba
     * const lomba = await prisma.lomba.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lombaFindUniqueOrThrowArgs>(args: SelectSubset<T, lombaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lombaClient<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lomba that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lombaFindFirstArgs} args - Arguments to find a Lomba
     * @example
     * // Get one Lomba
     * const lomba = await prisma.lomba.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lombaFindFirstArgs>(args?: SelectSubset<T, lombaFindFirstArgs<ExtArgs>>): Prisma__lombaClient<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lomba that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lombaFindFirstOrThrowArgs} args - Arguments to find a Lomba
     * @example
     * // Get one Lomba
     * const lomba = await prisma.lomba.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lombaFindFirstOrThrowArgs>(args?: SelectSubset<T, lombaFindFirstOrThrowArgs<ExtArgs>>): Prisma__lombaClient<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lombas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lombaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lombas
     * const lombas = await prisma.lomba.findMany()
     * 
     * // Get first 10 Lombas
     * const lombas = await prisma.lomba.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lombaWithIdOnly = await prisma.lomba.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lombaFindManyArgs>(args?: SelectSubset<T, lombaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lomba.
     * @param {lombaCreateArgs} args - Arguments to create a Lomba.
     * @example
     * // Create one Lomba
     * const Lomba = await prisma.lomba.create({
     *   data: {
     *     // ... data to create a Lomba
     *   }
     * })
     * 
     */
    create<T extends lombaCreateArgs>(args: SelectSubset<T, lombaCreateArgs<ExtArgs>>): Prisma__lombaClient<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lombas.
     * @param {lombaCreateManyArgs} args - Arguments to create many Lombas.
     * @example
     * // Create many Lombas
     * const lomba = await prisma.lomba.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lombaCreateManyArgs>(args?: SelectSubset<T, lombaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lombas and returns the data saved in the database.
     * @param {lombaCreateManyAndReturnArgs} args - Arguments to create many Lombas.
     * @example
     * // Create many Lombas
     * const lomba = await prisma.lomba.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lombas and only return the `id`
     * const lombaWithIdOnly = await prisma.lomba.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lombaCreateManyAndReturnArgs>(args?: SelectSubset<T, lombaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lomba.
     * @param {lombaDeleteArgs} args - Arguments to delete one Lomba.
     * @example
     * // Delete one Lomba
     * const Lomba = await prisma.lomba.delete({
     *   where: {
     *     // ... filter to delete one Lomba
     *   }
     * })
     * 
     */
    delete<T extends lombaDeleteArgs>(args: SelectSubset<T, lombaDeleteArgs<ExtArgs>>): Prisma__lombaClient<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lomba.
     * @param {lombaUpdateArgs} args - Arguments to update one Lomba.
     * @example
     * // Update one Lomba
     * const lomba = await prisma.lomba.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lombaUpdateArgs>(args: SelectSubset<T, lombaUpdateArgs<ExtArgs>>): Prisma__lombaClient<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lombas.
     * @param {lombaDeleteManyArgs} args - Arguments to filter Lombas to delete.
     * @example
     * // Delete a few Lombas
     * const { count } = await prisma.lomba.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lombaDeleteManyArgs>(args?: SelectSubset<T, lombaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lombas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lombaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lombas
     * const lomba = await prisma.lomba.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lombaUpdateManyArgs>(args: SelectSubset<T, lombaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lombas and returns the data updated in the database.
     * @param {lombaUpdateManyAndReturnArgs} args - Arguments to update many Lombas.
     * @example
     * // Update many Lombas
     * const lomba = await prisma.lomba.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lombas and only return the `id`
     * const lombaWithIdOnly = await prisma.lomba.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends lombaUpdateManyAndReturnArgs>(args: SelectSubset<T, lombaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lomba.
     * @param {lombaUpsertArgs} args - Arguments to update or create a Lomba.
     * @example
     * // Update or create a Lomba
     * const lomba = await prisma.lomba.upsert({
     *   create: {
     *     // ... data to create a Lomba
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lomba we want to update
     *   }
     * })
     */
    upsert<T extends lombaUpsertArgs>(args: SelectSubset<T, lombaUpsertArgs<ExtArgs>>): Prisma__lombaClient<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lombas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lombaCountArgs} args - Arguments to filter Lombas to count.
     * @example
     * // Count the number of Lombas
     * const count = await prisma.lomba.count({
     *   where: {
     *     // ... the filter for the Lombas we want to count
     *   }
     * })
    **/
    count<T extends lombaCountArgs>(
      args?: Subset<T, lombaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LombaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lomba.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LombaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LombaAggregateArgs>(args: Subset<T, LombaAggregateArgs>): Prisma.PrismaPromise<GetLombaAggregateType<T>>

    /**
     * Group by Lomba.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lombaGroupByArgs} args - Group by arguments.
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
      T extends lombaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lombaGroupByArgs['orderBy'] }
        : { orderBy?: lombaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lombaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLombaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lomba model
   */
  readonly fields: lombaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lomba.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lombaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    juri<T extends lomba$juriArgs<ExtArgs> = {}>(args?: Subset<T, lomba$juriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pesertalomba<T extends lomba$pesertalombaArgs<ExtArgs> = {}>(args?: Subset<T, lomba$pesertalombaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sertifikat<T extends lomba$sertifikatArgs<ExtArgs> = {}>(args?: Subset<T, lomba$sertifikatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sertifikatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the lomba model
   */
  interface lombaFieldRefs {
    readonly id: FieldRef<"lomba", 'String'>
    readonly tanggal: FieldRef<"lomba", 'DateTime'>
    readonly jenis_lomba: FieldRef<"lomba", 'Jenis_lomba'>
    readonly lokasi: FieldRef<"lomba", 'String'>
    readonly nama: FieldRef<"lomba", 'String'>
    readonly url: FieldRef<"lomba", 'String'>
    readonly bataswaktu: FieldRef<"lomba", 'DateTime'>
    readonly deskripsi: FieldRef<"lomba", 'String'>
  }
    

  // Custom InputTypes
  /**
   * lomba findUnique
   */
  export type lombaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lomba
     */
    select?: lombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lomba
     */
    omit?: lombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lombaInclude<ExtArgs> | null
    /**
     * Filter, which lomba to fetch.
     */
    where: lombaWhereUniqueInput
  }

  /**
   * lomba findUniqueOrThrow
   */
  export type lombaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lomba
     */
    select?: lombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lomba
     */
    omit?: lombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lombaInclude<ExtArgs> | null
    /**
     * Filter, which lomba to fetch.
     */
    where: lombaWhereUniqueInput
  }

  /**
   * lomba findFirst
   */
  export type lombaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lomba
     */
    select?: lombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lomba
     */
    omit?: lombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lombaInclude<ExtArgs> | null
    /**
     * Filter, which lomba to fetch.
     */
    where?: lombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lombas to fetch.
     */
    orderBy?: lombaOrderByWithRelationInput | lombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lombas.
     */
    cursor?: lombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lombas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lombas.
     */
    distinct?: LombaScalarFieldEnum | LombaScalarFieldEnum[]
  }

  /**
   * lomba findFirstOrThrow
   */
  export type lombaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lomba
     */
    select?: lombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lomba
     */
    omit?: lombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lombaInclude<ExtArgs> | null
    /**
     * Filter, which lomba to fetch.
     */
    where?: lombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lombas to fetch.
     */
    orderBy?: lombaOrderByWithRelationInput | lombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lombas.
     */
    cursor?: lombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lombas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lombas.
     */
    distinct?: LombaScalarFieldEnum | LombaScalarFieldEnum[]
  }

  /**
   * lomba findMany
   */
  export type lombaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lomba
     */
    select?: lombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lomba
     */
    omit?: lombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lombaInclude<ExtArgs> | null
    /**
     * Filter, which lombas to fetch.
     */
    where?: lombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lombas to fetch.
     */
    orderBy?: lombaOrderByWithRelationInput | lombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lombas.
     */
    cursor?: lombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lombas.
     */
    skip?: number
    distinct?: LombaScalarFieldEnum | LombaScalarFieldEnum[]
  }

  /**
   * lomba create
   */
  export type lombaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lomba
     */
    select?: lombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lomba
     */
    omit?: lombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lombaInclude<ExtArgs> | null
    /**
     * The data needed to create a lomba.
     */
    data: XOR<lombaCreateInput, lombaUncheckedCreateInput>
  }

  /**
   * lomba createMany
   */
  export type lombaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lombas.
     */
    data: lombaCreateManyInput | lombaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lomba createManyAndReturn
   */
  export type lombaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lomba
     */
    select?: lombaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lomba
     */
    omit?: lombaOmit<ExtArgs> | null
    /**
     * The data used to create many lombas.
     */
    data: lombaCreateManyInput | lombaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lomba update
   */
  export type lombaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lomba
     */
    select?: lombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lomba
     */
    omit?: lombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lombaInclude<ExtArgs> | null
    /**
     * The data needed to update a lomba.
     */
    data: XOR<lombaUpdateInput, lombaUncheckedUpdateInput>
    /**
     * Choose, which lomba to update.
     */
    where: lombaWhereUniqueInput
  }

  /**
   * lomba updateMany
   */
  export type lombaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lombas.
     */
    data: XOR<lombaUpdateManyMutationInput, lombaUncheckedUpdateManyInput>
    /**
     * Filter which lombas to update
     */
    where?: lombaWhereInput
    /**
     * Limit how many lombas to update.
     */
    limit?: number
  }

  /**
   * lomba updateManyAndReturn
   */
  export type lombaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lomba
     */
    select?: lombaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lomba
     */
    omit?: lombaOmit<ExtArgs> | null
    /**
     * The data used to update lombas.
     */
    data: XOR<lombaUpdateManyMutationInput, lombaUncheckedUpdateManyInput>
    /**
     * Filter which lombas to update
     */
    where?: lombaWhereInput
    /**
     * Limit how many lombas to update.
     */
    limit?: number
  }

  /**
   * lomba upsert
   */
  export type lombaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lomba
     */
    select?: lombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lomba
     */
    omit?: lombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lombaInclude<ExtArgs> | null
    /**
     * The filter to search for the lomba to update in case it exists.
     */
    where: lombaWhereUniqueInput
    /**
     * In case the lomba found by the `where` argument doesn't exist, create a new lomba with this data.
     */
    create: XOR<lombaCreateInput, lombaUncheckedCreateInput>
    /**
     * In case the lomba was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lombaUpdateInput, lombaUncheckedUpdateInput>
  }

  /**
   * lomba delete
   */
  export type lombaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lomba
     */
    select?: lombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lomba
     */
    omit?: lombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lombaInclude<ExtArgs> | null
    /**
     * Filter which lomba to delete.
     */
    where: lombaWhereUniqueInput
  }

  /**
   * lomba deleteMany
   */
  export type lombaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lombas to delete
     */
    where?: lombaWhereInput
    /**
     * Limit how many lombas to delete.
     */
    limit?: number
  }

  /**
   * lomba.juri
   */
  export type lomba$juriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriInclude<ExtArgs> | null
    where?: juriWhereInput
    orderBy?: juriOrderByWithRelationInput | juriOrderByWithRelationInput[]
    cursor?: juriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuriScalarFieldEnum | JuriScalarFieldEnum[]
  }

  /**
   * lomba.pesertalomba
   */
  export type lomba$pesertalombaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaInclude<ExtArgs> | null
    where?: pesertalombaWhereInput
    orderBy?: pesertalombaOrderByWithRelationInput | pesertalombaOrderByWithRelationInput[]
    cursor?: pesertalombaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesertalombaScalarFieldEnum | PesertalombaScalarFieldEnum[]
  }

  /**
   * lomba.sertifikat
   */
  export type lomba$sertifikatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sertifikat
     */
    select?: sertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sertifikat
     */
    omit?: sertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sertifikatInclude<ExtArgs> | null
    where?: sertifikatWhereInput
    orderBy?: sertifikatOrderByWithRelationInput | sertifikatOrderByWithRelationInput[]
    cursor?: sertifikatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SertifikatScalarFieldEnum | SertifikatScalarFieldEnum[]
  }

  /**
   * lomba without action
   */
  export type lombaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lomba
     */
    select?: lombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lomba
     */
    omit?: lombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lombaInclude<ExtArgs> | null
  }


  /**
   * Model sertifikat
   */

  export type AggregateSertifikat = {
    _count: SertifikatCountAggregateOutputType | null
    _min: SertifikatMinAggregateOutputType | null
    _max: SertifikatMaxAggregateOutputType | null
  }

  export type SertifikatMinAggregateOutputType = {
    id: string | null
    url: string | null
    lomba_id: string | null
  }

  export type SertifikatMaxAggregateOutputType = {
    id: string | null
    url: string | null
    lomba_id: string | null
  }

  export type SertifikatCountAggregateOutputType = {
    id: number
    url: number
    lomba_id: number
    _all: number
  }


  export type SertifikatMinAggregateInputType = {
    id?: true
    url?: true
    lomba_id?: true
  }

  export type SertifikatMaxAggregateInputType = {
    id?: true
    url?: true
    lomba_id?: true
  }

  export type SertifikatCountAggregateInputType = {
    id?: true
    url?: true
    lomba_id?: true
    _all?: true
  }

  export type SertifikatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sertifikat to aggregate.
     */
    where?: sertifikatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sertifikats to fetch.
     */
    orderBy?: sertifikatOrderByWithRelationInput | sertifikatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sertifikatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sertifikats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sertifikats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sertifikats
    **/
    _count?: true | SertifikatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SertifikatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SertifikatMaxAggregateInputType
  }

  export type GetSertifikatAggregateType<T extends SertifikatAggregateArgs> = {
        [P in keyof T & keyof AggregateSertifikat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSertifikat[P]>
      : GetScalarType<T[P], AggregateSertifikat[P]>
  }




  export type sertifikatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sertifikatWhereInput
    orderBy?: sertifikatOrderByWithAggregationInput | sertifikatOrderByWithAggregationInput[]
    by: SertifikatScalarFieldEnum[] | SertifikatScalarFieldEnum
    having?: sertifikatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SertifikatCountAggregateInputType | true
    _min?: SertifikatMinAggregateInputType
    _max?: SertifikatMaxAggregateInputType
  }

  export type SertifikatGroupByOutputType = {
    id: string
    url: string
    lomba_id: string
    _count: SertifikatCountAggregateOutputType | null
    _min: SertifikatMinAggregateOutputType | null
    _max: SertifikatMaxAggregateOutputType | null
  }

  type GetSertifikatGroupByPayload<T extends sertifikatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SertifikatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SertifikatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SertifikatGroupByOutputType[P]>
            : GetScalarType<T[P], SertifikatGroupByOutputType[P]>
        }
      >
    >


  export type sertifikatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    lomba_id?: boolean
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sertifikat"]>

  export type sertifikatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    lomba_id?: boolean
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sertifikat"]>

  export type sertifikatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    lomba_id?: boolean
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sertifikat"]>

  export type sertifikatSelectScalar = {
    id?: boolean
    url?: boolean
    lomba_id?: boolean
  }

  export type sertifikatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "lomba_id", ExtArgs["result"]["sertifikat"]>
  export type sertifikatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
  }
  export type sertifikatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
  }
  export type sertifikatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
  }

  export type $sertifikatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sertifikat"
    objects: {
      lomba: Prisma.$lombaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      lomba_id: string
    }, ExtArgs["result"]["sertifikat"]>
    composites: {}
  }

  type sertifikatGetPayload<S extends boolean | null | undefined | sertifikatDefaultArgs> = $Result.GetResult<Prisma.$sertifikatPayload, S>

  type sertifikatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sertifikatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SertifikatCountAggregateInputType | true
    }

  export interface sertifikatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sertifikat'], meta: { name: 'sertifikat' } }
    /**
     * Find zero or one Sertifikat that matches the filter.
     * @param {sertifikatFindUniqueArgs} args - Arguments to find a Sertifikat
     * @example
     * // Get one Sertifikat
     * const sertifikat = await prisma.sertifikat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sertifikatFindUniqueArgs>(args: SelectSubset<T, sertifikatFindUniqueArgs<ExtArgs>>): Prisma__sertifikatClient<$Result.GetResult<Prisma.$sertifikatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sertifikat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sertifikatFindUniqueOrThrowArgs} args - Arguments to find a Sertifikat
     * @example
     * // Get one Sertifikat
     * const sertifikat = await prisma.sertifikat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sertifikatFindUniqueOrThrowArgs>(args: SelectSubset<T, sertifikatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sertifikatClient<$Result.GetResult<Prisma.$sertifikatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sertifikat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sertifikatFindFirstArgs} args - Arguments to find a Sertifikat
     * @example
     * // Get one Sertifikat
     * const sertifikat = await prisma.sertifikat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sertifikatFindFirstArgs>(args?: SelectSubset<T, sertifikatFindFirstArgs<ExtArgs>>): Prisma__sertifikatClient<$Result.GetResult<Prisma.$sertifikatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sertifikat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sertifikatFindFirstOrThrowArgs} args - Arguments to find a Sertifikat
     * @example
     * // Get one Sertifikat
     * const sertifikat = await prisma.sertifikat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sertifikatFindFirstOrThrowArgs>(args?: SelectSubset<T, sertifikatFindFirstOrThrowArgs<ExtArgs>>): Prisma__sertifikatClient<$Result.GetResult<Prisma.$sertifikatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sertifikats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sertifikatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sertifikats
     * const sertifikats = await prisma.sertifikat.findMany()
     * 
     * // Get first 10 Sertifikats
     * const sertifikats = await prisma.sertifikat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sertifikatWithIdOnly = await prisma.sertifikat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sertifikatFindManyArgs>(args?: SelectSubset<T, sertifikatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sertifikatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sertifikat.
     * @param {sertifikatCreateArgs} args - Arguments to create a Sertifikat.
     * @example
     * // Create one Sertifikat
     * const Sertifikat = await prisma.sertifikat.create({
     *   data: {
     *     // ... data to create a Sertifikat
     *   }
     * })
     * 
     */
    create<T extends sertifikatCreateArgs>(args: SelectSubset<T, sertifikatCreateArgs<ExtArgs>>): Prisma__sertifikatClient<$Result.GetResult<Prisma.$sertifikatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sertifikats.
     * @param {sertifikatCreateManyArgs} args - Arguments to create many Sertifikats.
     * @example
     * // Create many Sertifikats
     * const sertifikat = await prisma.sertifikat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sertifikatCreateManyArgs>(args?: SelectSubset<T, sertifikatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sertifikats and returns the data saved in the database.
     * @param {sertifikatCreateManyAndReturnArgs} args - Arguments to create many Sertifikats.
     * @example
     * // Create many Sertifikats
     * const sertifikat = await prisma.sertifikat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sertifikats and only return the `id`
     * const sertifikatWithIdOnly = await prisma.sertifikat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sertifikatCreateManyAndReturnArgs>(args?: SelectSubset<T, sertifikatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sertifikatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sertifikat.
     * @param {sertifikatDeleteArgs} args - Arguments to delete one Sertifikat.
     * @example
     * // Delete one Sertifikat
     * const Sertifikat = await prisma.sertifikat.delete({
     *   where: {
     *     // ... filter to delete one Sertifikat
     *   }
     * })
     * 
     */
    delete<T extends sertifikatDeleteArgs>(args: SelectSubset<T, sertifikatDeleteArgs<ExtArgs>>): Prisma__sertifikatClient<$Result.GetResult<Prisma.$sertifikatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sertifikat.
     * @param {sertifikatUpdateArgs} args - Arguments to update one Sertifikat.
     * @example
     * // Update one Sertifikat
     * const sertifikat = await prisma.sertifikat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sertifikatUpdateArgs>(args: SelectSubset<T, sertifikatUpdateArgs<ExtArgs>>): Prisma__sertifikatClient<$Result.GetResult<Prisma.$sertifikatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sertifikats.
     * @param {sertifikatDeleteManyArgs} args - Arguments to filter Sertifikats to delete.
     * @example
     * // Delete a few Sertifikats
     * const { count } = await prisma.sertifikat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sertifikatDeleteManyArgs>(args?: SelectSubset<T, sertifikatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sertifikats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sertifikatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sertifikats
     * const sertifikat = await prisma.sertifikat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sertifikatUpdateManyArgs>(args: SelectSubset<T, sertifikatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sertifikats and returns the data updated in the database.
     * @param {sertifikatUpdateManyAndReturnArgs} args - Arguments to update many Sertifikats.
     * @example
     * // Update many Sertifikats
     * const sertifikat = await prisma.sertifikat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sertifikats and only return the `id`
     * const sertifikatWithIdOnly = await prisma.sertifikat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sertifikatUpdateManyAndReturnArgs>(args: SelectSubset<T, sertifikatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sertifikatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sertifikat.
     * @param {sertifikatUpsertArgs} args - Arguments to update or create a Sertifikat.
     * @example
     * // Update or create a Sertifikat
     * const sertifikat = await prisma.sertifikat.upsert({
     *   create: {
     *     // ... data to create a Sertifikat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sertifikat we want to update
     *   }
     * })
     */
    upsert<T extends sertifikatUpsertArgs>(args: SelectSubset<T, sertifikatUpsertArgs<ExtArgs>>): Prisma__sertifikatClient<$Result.GetResult<Prisma.$sertifikatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sertifikats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sertifikatCountArgs} args - Arguments to filter Sertifikats to count.
     * @example
     * // Count the number of Sertifikats
     * const count = await prisma.sertifikat.count({
     *   where: {
     *     // ... the filter for the Sertifikats we want to count
     *   }
     * })
    **/
    count<T extends sertifikatCountArgs>(
      args?: Subset<T, sertifikatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SertifikatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sertifikat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SertifikatAggregateArgs>(args: Subset<T, SertifikatAggregateArgs>): Prisma.PrismaPromise<GetSertifikatAggregateType<T>>

    /**
     * Group by Sertifikat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sertifikatGroupByArgs} args - Group by arguments.
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
      T extends sertifikatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sertifikatGroupByArgs['orderBy'] }
        : { orderBy?: sertifikatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sertifikatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSertifikatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sertifikat model
   */
  readonly fields: sertifikatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sertifikat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sertifikatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lomba<T extends lombaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lombaDefaultArgs<ExtArgs>>): Prisma__lombaClient<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the sertifikat model
   */
  interface sertifikatFieldRefs {
    readonly id: FieldRef<"sertifikat", 'String'>
    readonly url: FieldRef<"sertifikat", 'String'>
    readonly lomba_id: FieldRef<"sertifikat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sertifikat findUnique
   */
  export type sertifikatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sertifikat
     */
    select?: sertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sertifikat
     */
    omit?: sertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sertifikatInclude<ExtArgs> | null
    /**
     * Filter, which sertifikat to fetch.
     */
    where: sertifikatWhereUniqueInput
  }

  /**
   * sertifikat findUniqueOrThrow
   */
  export type sertifikatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sertifikat
     */
    select?: sertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sertifikat
     */
    omit?: sertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sertifikatInclude<ExtArgs> | null
    /**
     * Filter, which sertifikat to fetch.
     */
    where: sertifikatWhereUniqueInput
  }

  /**
   * sertifikat findFirst
   */
  export type sertifikatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sertifikat
     */
    select?: sertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sertifikat
     */
    omit?: sertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sertifikatInclude<ExtArgs> | null
    /**
     * Filter, which sertifikat to fetch.
     */
    where?: sertifikatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sertifikats to fetch.
     */
    orderBy?: sertifikatOrderByWithRelationInput | sertifikatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sertifikats.
     */
    cursor?: sertifikatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sertifikats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sertifikats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sertifikats.
     */
    distinct?: SertifikatScalarFieldEnum | SertifikatScalarFieldEnum[]
  }

  /**
   * sertifikat findFirstOrThrow
   */
  export type sertifikatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sertifikat
     */
    select?: sertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sertifikat
     */
    omit?: sertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sertifikatInclude<ExtArgs> | null
    /**
     * Filter, which sertifikat to fetch.
     */
    where?: sertifikatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sertifikats to fetch.
     */
    orderBy?: sertifikatOrderByWithRelationInput | sertifikatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sertifikats.
     */
    cursor?: sertifikatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sertifikats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sertifikats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sertifikats.
     */
    distinct?: SertifikatScalarFieldEnum | SertifikatScalarFieldEnum[]
  }

  /**
   * sertifikat findMany
   */
  export type sertifikatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sertifikat
     */
    select?: sertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sertifikat
     */
    omit?: sertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sertifikatInclude<ExtArgs> | null
    /**
     * Filter, which sertifikats to fetch.
     */
    where?: sertifikatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sertifikats to fetch.
     */
    orderBy?: sertifikatOrderByWithRelationInput | sertifikatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sertifikats.
     */
    cursor?: sertifikatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sertifikats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sertifikats.
     */
    skip?: number
    distinct?: SertifikatScalarFieldEnum | SertifikatScalarFieldEnum[]
  }

  /**
   * sertifikat create
   */
  export type sertifikatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sertifikat
     */
    select?: sertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sertifikat
     */
    omit?: sertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sertifikatInclude<ExtArgs> | null
    /**
     * The data needed to create a sertifikat.
     */
    data: XOR<sertifikatCreateInput, sertifikatUncheckedCreateInput>
  }

  /**
   * sertifikat createMany
   */
  export type sertifikatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sertifikats.
     */
    data: sertifikatCreateManyInput | sertifikatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sertifikat createManyAndReturn
   */
  export type sertifikatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sertifikat
     */
    select?: sertifikatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sertifikat
     */
    omit?: sertifikatOmit<ExtArgs> | null
    /**
     * The data used to create many sertifikats.
     */
    data: sertifikatCreateManyInput | sertifikatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sertifikatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sertifikat update
   */
  export type sertifikatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sertifikat
     */
    select?: sertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sertifikat
     */
    omit?: sertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sertifikatInclude<ExtArgs> | null
    /**
     * The data needed to update a sertifikat.
     */
    data: XOR<sertifikatUpdateInput, sertifikatUncheckedUpdateInput>
    /**
     * Choose, which sertifikat to update.
     */
    where: sertifikatWhereUniqueInput
  }

  /**
   * sertifikat updateMany
   */
  export type sertifikatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sertifikats.
     */
    data: XOR<sertifikatUpdateManyMutationInput, sertifikatUncheckedUpdateManyInput>
    /**
     * Filter which sertifikats to update
     */
    where?: sertifikatWhereInput
    /**
     * Limit how many sertifikats to update.
     */
    limit?: number
  }

  /**
   * sertifikat updateManyAndReturn
   */
  export type sertifikatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sertifikat
     */
    select?: sertifikatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sertifikat
     */
    omit?: sertifikatOmit<ExtArgs> | null
    /**
     * The data used to update sertifikats.
     */
    data: XOR<sertifikatUpdateManyMutationInput, sertifikatUncheckedUpdateManyInput>
    /**
     * Filter which sertifikats to update
     */
    where?: sertifikatWhereInput
    /**
     * Limit how many sertifikats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sertifikatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sertifikat upsert
   */
  export type sertifikatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sertifikat
     */
    select?: sertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sertifikat
     */
    omit?: sertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sertifikatInclude<ExtArgs> | null
    /**
     * The filter to search for the sertifikat to update in case it exists.
     */
    where: sertifikatWhereUniqueInput
    /**
     * In case the sertifikat found by the `where` argument doesn't exist, create a new sertifikat with this data.
     */
    create: XOR<sertifikatCreateInput, sertifikatUncheckedCreateInput>
    /**
     * In case the sertifikat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sertifikatUpdateInput, sertifikatUncheckedUpdateInput>
  }

  /**
   * sertifikat delete
   */
  export type sertifikatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sertifikat
     */
    select?: sertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sertifikat
     */
    omit?: sertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sertifikatInclude<ExtArgs> | null
    /**
     * Filter which sertifikat to delete.
     */
    where: sertifikatWhereUniqueInput
  }

  /**
   * sertifikat deleteMany
   */
  export type sertifikatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sertifikats to delete
     */
    where?: sertifikatWhereInput
    /**
     * Limit how many sertifikats to delete.
     */
    limit?: number
  }

  /**
   * sertifikat without action
   */
  export type sertifikatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sertifikat
     */
    select?: sertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sertifikat
     */
    omit?: sertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sertifikatInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nama: string | null
    role: $Enums.Role | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nama: string | null
    role: $Enums.Role | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nama: number
    role: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nama?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nama?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nama?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    password: string
    nama: string
    role: $Enums.Role
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nama?: boolean
    role?: boolean
    juri?: boolean | users$juriArgs<ExtArgs>
    peserta?: boolean | users$pesertaArgs<ExtArgs>
    admin?: boolean | users$adminArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nama?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nama?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nama?: boolean
    role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nama" | "role", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juri?: boolean | users$juriArgs<ExtArgs>
    peserta?: boolean | users$pesertaArgs<ExtArgs>
    admin?: boolean | users$adminArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      juri: Prisma.$juriPayload<ExtArgs>[]
      peserta: Prisma.$pesertaPayload<ExtArgs>[]
      admin: Prisma.$adminPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      nama: string
      role: $Enums.Role
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    juri<T extends users$juriArgs<ExtArgs> = {}>(args?: Subset<T, users$juriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    peserta<T extends users$pesertaArgs<ExtArgs> = {}>(args?: Subset<T, users$pesertaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admin<T extends users$adminArgs<ExtArgs> = {}>(args?: Subset<T, users$adminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly nama: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.juri
   */
  export type users$juriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriInclude<ExtArgs> | null
    where?: juriWhereInput
    orderBy?: juriOrderByWithRelationInput | juriOrderByWithRelationInput[]
    cursor?: juriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuriScalarFieldEnum | JuriScalarFieldEnum[]
  }

  /**
   * users.peserta
   */
  export type users$pesertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    where?: pesertaWhereInput
    orderBy?: pesertaOrderByWithRelationInput | pesertaOrderByWithRelationInput[]
    cursor?: pesertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesertaScalarFieldEnum | PesertaScalarFieldEnum[]
  }

  /**
   * users.admin
   */
  export type users$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    where?: adminWhereInput
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    cursor?: adminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    users_id: string | null
    created_at: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    users_id: string | null
    created_at: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    users_id: number
    created_at: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    users_id?: true
    created_at?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    users_id?: true
    created_at?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    users_id?: true
    created_at?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    users_id: string
    created_at: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    users_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type adminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    users_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type adminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    users_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    users_id?: boolean
    created_at?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "users_id" | "created_at", ExtArgs["result"]["admin"]>
  export type adminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type adminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type adminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      users_id: string
      created_at: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminCreateManyAndReturnArgs>(args?: SelectSubset<T, adminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends adminUpdateManyAndReturnArgs>(args: SelectSubset<T, adminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'String'>
    readonly users_id: FieldRef<"admin", 'String'>
    readonly created_at: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin createManyAndReturn
   */
  export type adminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin updateManyAndReturn
   */
  export type adminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
  }


  /**
   * Model juri
   */

  export type AggregateJuri = {
    _count: JuriCountAggregateOutputType | null
    _min: JuriMinAggregateOutputType | null
    _max: JuriMaxAggregateOutputType | null
  }

  export type JuriMinAggregateOutputType = {
    id: string | null
    nama: string | null
    lomba_id: string | null
    created_at: Date | null
    users_id: string | null
  }

  export type JuriMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    lomba_id: string | null
    created_at: Date | null
    users_id: string | null
  }

  export type JuriCountAggregateOutputType = {
    id: number
    nama: number
    lomba_id: number
    created_at: number
    users_id: number
    _all: number
  }


  export type JuriMinAggregateInputType = {
    id?: true
    nama?: true
    lomba_id?: true
    created_at?: true
    users_id?: true
  }

  export type JuriMaxAggregateInputType = {
    id?: true
    nama?: true
    lomba_id?: true
    created_at?: true
    users_id?: true
  }

  export type JuriCountAggregateInputType = {
    id?: true
    nama?: true
    lomba_id?: true
    created_at?: true
    users_id?: true
    _all?: true
  }

  export type JuriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which juri to aggregate.
     */
    where?: juriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of juris to fetch.
     */
    orderBy?: juriOrderByWithRelationInput | juriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: juriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` juris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` juris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned juris
    **/
    _count?: true | JuriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JuriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JuriMaxAggregateInputType
  }

  export type GetJuriAggregateType<T extends JuriAggregateArgs> = {
        [P in keyof T & keyof AggregateJuri]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJuri[P]>
      : GetScalarType<T[P], AggregateJuri[P]>
  }




  export type juriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: juriWhereInput
    orderBy?: juriOrderByWithAggregationInput | juriOrderByWithAggregationInput[]
    by: JuriScalarFieldEnum[] | JuriScalarFieldEnum
    having?: juriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JuriCountAggregateInputType | true
    _min?: JuriMinAggregateInputType
    _max?: JuriMaxAggregateInputType
  }

  export type JuriGroupByOutputType = {
    id: string
    nama: string
    lomba_id: string
    created_at: Date
    users_id: string
    _count: JuriCountAggregateOutputType | null
    _min: JuriMinAggregateOutputType | null
    _max: JuriMaxAggregateOutputType | null
  }

  type GetJuriGroupByPayload<T extends juriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JuriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JuriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JuriGroupByOutputType[P]>
            : GetScalarType<T[P], JuriGroupByOutputType[P]>
        }
      >
    >


  export type juriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    lomba_id?: boolean
    created_at?: boolean
    users_id?: boolean
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    penilaian?: boolean | juri$penilaianArgs<ExtArgs>
    _count?: boolean | JuriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juri"]>

  export type juriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    lomba_id?: boolean
    created_at?: boolean
    users_id?: boolean
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juri"]>

  export type juriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    lomba_id?: boolean
    created_at?: boolean
    users_id?: boolean
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juri"]>

  export type juriSelectScalar = {
    id?: boolean
    nama?: boolean
    lomba_id?: boolean
    created_at?: boolean
    users_id?: boolean
  }

  export type juriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "lomba_id" | "created_at" | "users_id", ExtArgs["result"]["juri"]>
  export type juriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    penilaian?: boolean | juri$penilaianArgs<ExtArgs>
    _count?: boolean | JuriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type juriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type juriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $juriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "juri"
    objects: {
      lomba: Prisma.$lombaPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
      penilaian: Prisma.$penilaianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      lomba_id: string
      created_at: Date
      users_id: string
    }, ExtArgs["result"]["juri"]>
    composites: {}
  }

  type juriGetPayload<S extends boolean | null | undefined | juriDefaultArgs> = $Result.GetResult<Prisma.$juriPayload, S>

  type juriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<juriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JuriCountAggregateInputType | true
    }

  export interface juriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['juri'], meta: { name: 'juri' } }
    /**
     * Find zero or one Juri that matches the filter.
     * @param {juriFindUniqueArgs} args - Arguments to find a Juri
     * @example
     * // Get one Juri
     * const juri = await prisma.juri.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends juriFindUniqueArgs>(args: SelectSubset<T, juriFindUniqueArgs<ExtArgs>>): Prisma__juriClient<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Juri that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {juriFindUniqueOrThrowArgs} args - Arguments to find a Juri
     * @example
     * // Get one Juri
     * const juri = await prisma.juri.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends juriFindUniqueOrThrowArgs>(args: SelectSubset<T, juriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__juriClient<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juri that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juriFindFirstArgs} args - Arguments to find a Juri
     * @example
     * // Get one Juri
     * const juri = await prisma.juri.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends juriFindFirstArgs>(args?: SelectSubset<T, juriFindFirstArgs<ExtArgs>>): Prisma__juriClient<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juri that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juriFindFirstOrThrowArgs} args - Arguments to find a Juri
     * @example
     * // Get one Juri
     * const juri = await prisma.juri.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends juriFindFirstOrThrowArgs>(args?: SelectSubset<T, juriFindFirstOrThrowArgs<ExtArgs>>): Prisma__juriClient<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Juris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Juris
     * const juris = await prisma.juri.findMany()
     * 
     * // Get first 10 Juris
     * const juris = await prisma.juri.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const juriWithIdOnly = await prisma.juri.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends juriFindManyArgs>(args?: SelectSubset<T, juriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Juri.
     * @param {juriCreateArgs} args - Arguments to create a Juri.
     * @example
     * // Create one Juri
     * const Juri = await prisma.juri.create({
     *   data: {
     *     // ... data to create a Juri
     *   }
     * })
     * 
     */
    create<T extends juriCreateArgs>(args: SelectSubset<T, juriCreateArgs<ExtArgs>>): Prisma__juriClient<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Juris.
     * @param {juriCreateManyArgs} args - Arguments to create many Juris.
     * @example
     * // Create many Juris
     * const juri = await prisma.juri.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends juriCreateManyArgs>(args?: SelectSubset<T, juriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Juris and returns the data saved in the database.
     * @param {juriCreateManyAndReturnArgs} args - Arguments to create many Juris.
     * @example
     * // Create many Juris
     * const juri = await prisma.juri.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Juris and only return the `id`
     * const juriWithIdOnly = await prisma.juri.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends juriCreateManyAndReturnArgs>(args?: SelectSubset<T, juriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Juri.
     * @param {juriDeleteArgs} args - Arguments to delete one Juri.
     * @example
     * // Delete one Juri
     * const Juri = await prisma.juri.delete({
     *   where: {
     *     // ... filter to delete one Juri
     *   }
     * })
     * 
     */
    delete<T extends juriDeleteArgs>(args: SelectSubset<T, juriDeleteArgs<ExtArgs>>): Prisma__juriClient<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Juri.
     * @param {juriUpdateArgs} args - Arguments to update one Juri.
     * @example
     * // Update one Juri
     * const juri = await prisma.juri.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends juriUpdateArgs>(args: SelectSubset<T, juriUpdateArgs<ExtArgs>>): Prisma__juriClient<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Juris.
     * @param {juriDeleteManyArgs} args - Arguments to filter Juris to delete.
     * @example
     * // Delete a few Juris
     * const { count } = await prisma.juri.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends juriDeleteManyArgs>(args?: SelectSubset<T, juriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Juris
     * const juri = await prisma.juri.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends juriUpdateManyArgs>(args: SelectSubset<T, juriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juris and returns the data updated in the database.
     * @param {juriUpdateManyAndReturnArgs} args - Arguments to update many Juris.
     * @example
     * // Update many Juris
     * const juri = await prisma.juri.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Juris and only return the `id`
     * const juriWithIdOnly = await prisma.juri.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends juriUpdateManyAndReturnArgs>(args: SelectSubset<T, juriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Juri.
     * @param {juriUpsertArgs} args - Arguments to update or create a Juri.
     * @example
     * // Update or create a Juri
     * const juri = await prisma.juri.upsert({
     *   create: {
     *     // ... data to create a Juri
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Juri we want to update
     *   }
     * })
     */
    upsert<T extends juriUpsertArgs>(args: SelectSubset<T, juriUpsertArgs<ExtArgs>>): Prisma__juriClient<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Juris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juriCountArgs} args - Arguments to filter Juris to count.
     * @example
     * // Count the number of Juris
     * const count = await prisma.juri.count({
     *   where: {
     *     // ... the filter for the Juris we want to count
     *   }
     * })
    **/
    count<T extends juriCountArgs>(
      args?: Subset<T, juriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JuriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Juri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JuriAggregateArgs>(args: Subset<T, JuriAggregateArgs>): Prisma.PrismaPromise<GetJuriAggregateType<T>>

    /**
     * Group by Juri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juriGroupByArgs} args - Group by arguments.
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
      T extends juriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: juriGroupByArgs['orderBy'] }
        : { orderBy?: juriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, juriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJuriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the juri model
   */
  readonly fields: juriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for juri.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__juriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lomba<T extends lombaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lombaDefaultArgs<ExtArgs>>): Prisma__lombaClient<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    penilaian<T extends juri$penilaianArgs<ExtArgs> = {}>(args?: Subset<T, juri$penilaianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penilaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the juri model
   */
  interface juriFieldRefs {
    readonly id: FieldRef<"juri", 'String'>
    readonly nama: FieldRef<"juri", 'String'>
    readonly lomba_id: FieldRef<"juri", 'String'>
    readonly created_at: FieldRef<"juri", 'DateTime'>
    readonly users_id: FieldRef<"juri", 'String'>
  }
    

  // Custom InputTypes
  /**
   * juri findUnique
   */
  export type juriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriInclude<ExtArgs> | null
    /**
     * Filter, which juri to fetch.
     */
    where: juriWhereUniqueInput
  }

  /**
   * juri findUniqueOrThrow
   */
  export type juriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriInclude<ExtArgs> | null
    /**
     * Filter, which juri to fetch.
     */
    where: juriWhereUniqueInput
  }

  /**
   * juri findFirst
   */
  export type juriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriInclude<ExtArgs> | null
    /**
     * Filter, which juri to fetch.
     */
    where?: juriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of juris to fetch.
     */
    orderBy?: juriOrderByWithRelationInput | juriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for juris.
     */
    cursor?: juriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` juris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` juris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of juris.
     */
    distinct?: JuriScalarFieldEnum | JuriScalarFieldEnum[]
  }

  /**
   * juri findFirstOrThrow
   */
  export type juriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriInclude<ExtArgs> | null
    /**
     * Filter, which juri to fetch.
     */
    where?: juriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of juris to fetch.
     */
    orderBy?: juriOrderByWithRelationInput | juriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for juris.
     */
    cursor?: juriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` juris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` juris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of juris.
     */
    distinct?: JuriScalarFieldEnum | JuriScalarFieldEnum[]
  }

  /**
   * juri findMany
   */
  export type juriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriInclude<ExtArgs> | null
    /**
     * Filter, which juris to fetch.
     */
    where?: juriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of juris to fetch.
     */
    orderBy?: juriOrderByWithRelationInput | juriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing juris.
     */
    cursor?: juriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` juris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` juris.
     */
    skip?: number
    distinct?: JuriScalarFieldEnum | JuriScalarFieldEnum[]
  }

  /**
   * juri create
   */
  export type juriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriInclude<ExtArgs> | null
    /**
     * The data needed to create a juri.
     */
    data: XOR<juriCreateInput, juriUncheckedCreateInput>
  }

  /**
   * juri createMany
   */
  export type juriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many juris.
     */
    data: juriCreateManyInput | juriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * juri createManyAndReturn
   */
  export type juriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * The data used to create many juris.
     */
    data: juriCreateManyInput | juriCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * juri update
   */
  export type juriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriInclude<ExtArgs> | null
    /**
     * The data needed to update a juri.
     */
    data: XOR<juriUpdateInput, juriUncheckedUpdateInput>
    /**
     * Choose, which juri to update.
     */
    where: juriWhereUniqueInput
  }

  /**
   * juri updateMany
   */
  export type juriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update juris.
     */
    data: XOR<juriUpdateManyMutationInput, juriUncheckedUpdateManyInput>
    /**
     * Filter which juris to update
     */
    where?: juriWhereInput
    /**
     * Limit how many juris to update.
     */
    limit?: number
  }

  /**
   * juri updateManyAndReturn
   */
  export type juriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * The data used to update juris.
     */
    data: XOR<juriUpdateManyMutationInput, juriUncheckedUpdateManyInput>
    /**
     * Filter which juris to update
     */
    where?: juriWhereInput
    /**
     * Limit how many juris to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * juri upsert
   */
  export type juriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriInclude<ExtArgs> | null
    /**
     * The filter to search for the juri to update in case it exists.
     */
    where: juriWhereUniqueInput
    /**
     * In case the juri found by the `where` argument doesn't exist, create a new juri with this data.
     */
    create: XOR<juriCreateInput, juriUncheckedCreateInput>
    /**
     * In case the juri was found with the provided `where` argument, update it with this data.
     */
    update: XOR<juriUpdateInput, juriUncheckedUpdateInput>
  }

  /**
   * juri delete
   */
  export type juriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriInclude<ExtArgs> | null
    /**
     * Filter which juri to delete.
     */
    where: juriWhereUniqueInput
  }

  /**
   * juri deleteMany
   */
  export type juriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which juris to delete
     */
    where?: juriWhereInput
    /**
     * Limit how many juris to delete.
     */
    limit?: number
  }

  /**
   * juri.penilaian
   */
  export type juri$penilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianInclude<ExtArgs> | null
    where?: penilaianWhereInput
    orderBy?: penilaianOrderByWithRelationInput | penilaianOrderByWithRelationInput[]
    cursor?: penilaianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * juri without action
   */
  export type juriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juri
     */
    select?: juriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juri
     */
    omit?: juriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juriInclude<ExtArgs> | null
  }


  /**
   * Model penilaian
   */

  export type AggregatePenilaian = {
    _count: PenilaianCountAggregateOutputType | null
    _avg: PenilaianAvgAggregateOutputType | null
    _sum: PenilaianSumAggregateOutputType | null
    _min: PenilaianMinAggregateOutputType | null
    _max: PenilaianMaxAggregateOutputType | null
  }

  export type PenilaianAvgAggregateOutputType = {
    nilai_penilaian: Decimal | null
  }

  export type PenilaianSumAggregateOutputType = {
    nilai_penilaian: Decimal | null
  }

  export type PenilaianMinAggregateOutputType = {
    juri_id: string | null
    pesertalomba_id: string | null
    pesertalomba_id1: string | null
    pesertalomba_id_pesetalomba: string | null
    status_penilaian: string | null
    nilai_penilaian: Decimal | null
    deskripsi_penilaian: string | null
  }

  export type PenilaianMaxAggregateOutputType = {
    juri_id: string | null
    pesertalomba_id: string | null
    pesertalomba_id1: string | null
    pesertalomba_id_pesetalomba: string | null
    status_penilaian: string | null
    nilai_penilaian: Decimal | null
    deskripsi_penilaian: string | null
  }

  export type PenilaianCountAggregateOutputType = {
    juri_id: number
    pesertalomba_id: number
    pesertalomba_id1: number
    pesertalomba_id_pesetalomba: number
    status_penilaian: number
    nilai_penilaian: number
    deskripsi_penilaian: number
    _all: number
  }


  export type PenilaianAvgAggregateInputType = {
    nilai_penilaian?: true
  }

  export type PenilaianSumAggregateInputType = {
    nilai_penilaian?: true
  }

  export type PenilaianMinAggregateInputType = {
    juri_id?: true
    pesertalomba_id?: true
    pesertalomba_id1?: true
    pesertalomba_id_pesetalomba?: true
    status_penilaian?: true
    nilai_penilaian?: true
    deskripsi_penilaian?: true
  }

  export type PenilaianMaxAggregateInputType = {
    juri_id?: true
    pesertalomba_id?: true
    pesertalomba_id1?: true
    pesertalomba_id_pesetalomba?: true
    status_penilaian?: true
    nilai_penilaian?: true
    deskripsi_penilaian?: true
  }

  export type PenilaianCountAggregateInputType = {
    juri_id?: true
    pesertalomba_id?: true
    pesertalomba_id1?: true
    pesertalomba_id_pesetalomba?: true
    status_penilaian?: true
    nilai_penilaian?: true
    deskripsi_penilaian?: true
    _all?: true
  }

  export type PenilaianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penilaian to aggregate.
     */
    where?: penilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penilaians to fetch.
     */
    orderBy?: penilaianOrderByWithRelationInput | penilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: penilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penilaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned penilaians
    **/
    _count?: true | PenilaianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenilaianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenilaianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenilaianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenilaianMaxAggregateInputType
  }

  export type GetPenilaianAggregateType<T extends PenilaianAggregateArgs> = {
        [P in keyof T & keyof AggregatePenilaian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenilaian[P]>
      : GetScalarType<T[P], AggregatePenilaian[P]>
  }




  export type penilaianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penilaianWhereInput
    orderBy?: penilaianOrderByWithAggregationInput | penilaianOrderByWithAggregationInput[]
    by: PenilaianScalarFieldEnum[] | PenilaianScalarFieldEnum
    having?: penilaianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenilaianCountAggregateInputType | true
    _avg?: PenilaianAvgAggregateInputType
    _sum?: PenilaianSumAggregateInputType
    _min?: PenilaianMinAggregateInputType
    _max?: PenilaianMaxAggregateInputType
  }

  export type PenilaianGroupByOutputType = {
    juri_id: string
    pesertalomba_id: string
    pesertalomba_id1: string
    pesertalomba_id_pesetalomba: string
    status_penilaian: string
    nilai_penilaian: Decimal | null
    deskripsi_penilaian: string | null
    _count: PenilaianCountAggregateOutputType | null
    _avg: PenilaianAvgAggregateOutputType | null
    _sum: PenilaianSumAggregateOutputType | null
    _min: PenilaianMinAggregateOutputType | null
    _max: PenilaianMaxAggregateOutputType | null
  }

  type GetPenilaianGroupByPayload<T extends penilaianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenilaianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenilaianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenilaianGroupByOutputType[P]>
            : GetScalarType<T[P], PenilaianGroupByOutputType[P]>
        }
      >
    >


  export type penilaianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    juri_id?: boolean
    pesertalomba_id?: boolean
    pesertalomba_id1?: boolean
    pesertalomba_id_pesetalomba?: boolean
    status_penilaian?: boolean
    nilai_penilaian?: boolean
    deskripsi_penilaian?: boolean
    juri?: boolean | juriDefaultArgs<ExtArgs>
    pesertalomba?: boolean | pesertalombaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penilaian"]>

  export type penilaianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    juri_id?: boolean
    pesertalomba_id?: boolean
    pesertalomba_id1?: boolean
    pesertalomba_id_pesetalomba?: boolean
    status_penilaian?: boolean
    nilai_penilaian?: boolean
    deskripsi_penilaian?: boolean
    juri?: boolean | juriDefaultArgs<ExtArgs>
    pesertalomba?: boolean | pesertalombaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penilaian"]>

  export type penilaianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    juri_id?: boolean
    pesertalomba_id?: boolean
    pesertalomba_id1?: boolean
    pesertalomba_id_pesetalomba?: boolean
    status_penilaian?: boolean
    nilai_penilaian?: boolean
    deskripsi_penilaian?: boolean
    juri?: boolean | juriDefaultArgs<ExtArgs>
    pesertalomba?: boolean | pesertalombaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penilaian"]>

  export type penilaianSelectScalar = {
    juri_id?: boolean
    pesertalomba_id?: boolean
    pesertalomba_id1?: boolean
    pesertalomba_id_pesetalomba?: boolean
    status_penilaian?: boolean
    nilai_penilaian?: boolean
    deskripsi_penilaian?: boolean
  }

  export type penilaianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"juri_id" | "pesertalomba_id" | "pesertalomba_id1" | "pesertalomba_id_pesetalomba" | "status_penilaian" | "nilai_penilaian" | "deskripsi_penilaian", ExtArgs["result"]["penilaian"]>
  export type penilaianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juri?: boolean | juriDefaultArgs<ExtArgs>
    pesertalomba?: boolean | pesertalombaDefaultArgs<ExtArgs>
  }
  export type penilaianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juri?: boolean | juriDefaultArgs<ExtArgs>
    pesertalomba?: boolean | pesertalombaDefaultArgs<ExtArgs>
  }
  export type penilaianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juri?: boolean | juriDefaultArgs<ExtArgs>
    pesertalomba?: boolean | pesertalombaDefaultArgs<ExtArgs>
  }

  export type $penilaianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "penilaian"
    objects: {
      juri: Prisma.$juriPayload<ExtArgs>
      pesertalomba: Prisma.$pesertalombaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      juri_id: string
      pesertalomba_id: string
      pesertalomba_id1: string
      pesertalomba_id_pesetalomba: string
      status_penilaian: string
      nilai_penilaian: Prisma.Decimal | null
      deskripsi_penilaian: string | null
    }, ExtArgs["result"]["penilaian"]>
    composites: {}
  }

  type penilaianGetPayload<S extends boolean | null | undefined | penilaianDefaultArgs> = $Result.GetResult<Prisma.$penilaianPayload, S>

  type penilaianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<penilaianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenilaianCountAggregateInputType | true
    }

  export interface penilaianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['penilaian'], meta: { name: 'penilaian' } }
    /**
     * Find zero or one Penilaian that matches the filter.
     * @param {penilaianFindUniqueArgs} args - Arguments to find a Penilaian
     * @example
     * // Get one Penilaian
     * const penilaian = await prisma.penilaian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends penilaianFindUniqueArgs>(args: SelectSubset<T, penilaianFindUniqueArgs<ExtArgs>>): Prisma__penilaianClient<$Result.GetResult<Prisma.$penilaianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Penilaian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {penilaianFindUniqueOrThrowArgs} args - Arguments to find a Penilaian
     * @example
     * // Get one Penilaian
     * const penilaian = await prisma.penilaian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends penilaianFindUniqueOrThrowArgs>(args: SelectSubset<T, penilaianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__penilaianClient<$Result.GetResult<Prisma.$penilaianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penilaian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penilaianFindFirstArgs} args - Arguments to find a Penilaian
     * @example
     * // Get one Penilaian
     * const penilaian = await prisma.penilaian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends penilaianFindFirstArgs>(args?: SelectSubset<T, penilaianFindFirstArgs<ExtArgs>>): Prisma__penilaianClient<$Result.GetResult<Prisma.$penilaianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penilaian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penilaianFindFirstOrThrowArgs} args - Arguments to find a Penilaian
     * @example
     * // Get one Penilaian
     * const penilaian = await prisma.penilaian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends penilaianFindFirstOrThrowArgs>(args?: SelectSubset<T, penilaianFindFirstOrThrowArgs<ExtArgs>>): Prisma__penilaianClient<$Result.GetResult<Prisma.$penilaianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penilaians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penilaianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penilaians
     * const penilaians = await prisma.penilaian.findMany()
     * 
     * // Get first 10 Penilaians
     * const penilaians = await prisma.penilaian.findMany({ take: 10 })
     * 
     * // Only select the `juri_id`
     * const penilaianWithJuri_idOnly = await prisma.penilaian.findMany({ select: { juri_id: true } })
     * 
     */
    findMany<T extends penilaianFindManyArgs>(args?: SelectSubset<T, penilaianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penilaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Penilaian.
     * @param {penilaianCreateArgs} args - Arguments to create a Penilaian.
     * @example
     * // Create one Penilaian
     * const Penilaian = await prisma.penilaian.create({
     *   data: {
     *     // ... data to create a Penilaian
     *   }
     * })
     * 
     */
    create<T extends penilaianCreateArgs>(args: SelectSubset<T, penilaianCreateArgs<ExtArgs>>): Prisma__penilaianClient<$Result.GetResult<Prisma.$penilaianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penilaians.
     * @param {penilaianCreateManyArgs} args - Arguments to create many Penilaians.
     * @example
     * // Create many Penilaians
     * const penilaian = await prisma.penilaian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends penilaianCreateManyArgs>(args?: SelectSubset<T, penilaianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Penilaians and returns the data saved in the database.
     * @param {penilaianCreateManyAndReturnArgs} args - Arguments to create many Penilaians.
     * @example
     * // Create many Penilaians
     * const penilaian = await prisma.penilaian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Penilaians and only return the `juri_id`
     * const penilaianWithJuri_idOnly = await prisma.penilaian.createManyAndReturn({
     *   select: { juri_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends penilaianCreateManyAndReturnArgs>(args?: SelectSubset<T, penilaianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penilaianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Penilaian.
     * @param {penilaianDeleteArgs} args - Arguments to delete one Penilaian.
     * @example
     * // Delete one Penilaian
     * const Penilaian = await prisma.penilaian.delete({
     *   where: {
     *     // ... filter to delete one Penilaian
     *   }
     * })
     * 
     */
    delete<T extends penilaianDeleteArgs>(args: SelectSubset<T, penilaianDeleteArgs<ExtArgs>>): Prisma__penilaianClient<$Result.GetResult<Prisma.$penilaianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Penilaian.
     * @param {penilaianUpdateArgs} args - Arguments to update one Penilaian.
     * @example
     * // Update one Penilaian
     * const penilaian = await prisma.penilaian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends penilaianUpdateArgs>(args: SelectSubset<T, penilaianUpdateArgs<ExtArgs>>): Prisma__penilaianClient<$Result.GetResult<Prisma.$penilaianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penilaians.
     * @param {penilaianDeleteManyArgs} args - Arguments to filter Penilaians to delete.
     * @example
     * // Delete a few Penilaians
     * const { count } = await prisma.penilaian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends penilaianDeleteManyArgs>(args?: SelectSubset<T, penilaianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penilaians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penilaianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penilaians
     * const penilaian = await prisma.penilaian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends penilaianUpdateManyArgs>(args: SelectSubset<T, penilaianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penilaians and returns the data updated in the database.
     * @param {penilaianUpdateManyAndReturnArgs} args - Arguments to update many Penilaians.
     * @example
     * // Update many Penilaians
     * const penilaian = await prisma.penilaian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Penilaians and only return the `juri_id`
     * const penilaianWithJuri_idOnly = await prisma.penilaian.updateManyAndReturn({
     *   select: { juri_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends penilaianUpdateManyAndReturnArgs>(args: SelectSubset<T, penilaianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penilaianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Penilaian.
     * @param {penilaianUpsertArgs} args - Arguments to update or create a Penilaian.
     * @example
     * // Update or create a Penilaian
     * const penilaian = await prisma.penilaian.upsert({
     *   create: {
     *     // ... data to create a Penilaian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penilaian we want to update
     *   }
     * })
     */
    upsert<T extends penilaianUpsertArgs>(args: SelectSubset<T, penilaianUpsertArgs<ExtArgs>>): Prisma__penilaianClient<$Result.GetResult<Prisma.$penilaianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penilaians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penilaianCountArgs} args - Arguments to filter Penilaians to count.
     * @example
     * // Count the number of Penilaians
     * const count = await prisma.penilaian.count({
     *   where: {
     *     // ... the filter for the Penilaians we want to count
     *   }
     * })
    **/
    count<T extends penilaianCountArgs>(
      args?: Subset<T, penilaianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenilaianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penilaian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenilaianAggregateArgs>(args: Subset<T, PenilaianAggregateArgs>): Prisma.PrismaPromise<GetPenilaianAggregateType<T>>

    /**
     * Group by Penilaian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penilaianGroupByArgs} args - Group by arguments.
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
      T extends penilaianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: penilaianGroupByArgs['orderBy'] }
        : { orderBy?: penilaianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, penilaianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenilaianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the penilaian model
   */
  readonly fields: penilaianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for penilaian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__penilaianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    juri<T extends juriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, juriDefaultArgs<ExtArgs>>): Prisma__juriClient<$Result.GetResult<Prisma.$juriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pesertalomba<T extends pesertalombaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pesertalombaDefaultArgs<ExtArgs>>): Prisma__pesertalombaClient<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the penilaian model
   */
  interface penilaianFieldRefs {
    readonly juri_id: FieldRef<"penilaian", 'String'>
    readonly pesertalomba_id: FieldRef<"penilaian", 'String'>
    readonly pesertalomba_id1: FieldRef<"penilaian", 'String'>
    readonly pesertalomba_id_pesetalomba: FieldRef<"penilaian", 'String'>
    readonly status_penilaian: FieldRef<"penilaian", 'String'>
    readonly nilai_penilaian: FieldRef<"penilaian", 'Decimal'>
    readonly deskripsi_penilaian: FieldRef<"penilaian", 'String'>
  }
    

  // Custom InputTypes
  /**
   * penilaian findUnique
   */
  export type penilaianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianInclude<ExtArgs> | null
    /**
     * Filter, which penilaian to fetch.
     */
    where: penilaianWhereUniqueInput
  }

  /**
   * penilaian findUniqueOrThrow
   */
  export type penilaianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianInclude<ExtArgs> | null
    /**
     * Filter, which penilaian to fetch.
     */
    where: penilaianWhereUniqueInput
  }

  /**
   * penilaian findFirst
   */
  export type penilaianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianInclude<ExtArgs> | null
    /**
     * Filter, which penilaian to fetch.
     */
    where?: penilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penilaians to fetch.
     */
    orderBy?: penilaianOrderByWithRelationInput | penilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penilaians.
     */
    cursor?: penilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penilaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penilaians.
     */
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * penilaian findFirstOrThrow
   */
  export type penilaianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianInclude<ExtArgs> | null
    /**
     * Filter, which penilaian to fetch.
     */
    where?: penilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penilaians to fetch.
     */
    orderBy?: penilaianOrderByWithRelationInput | penilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penilaians.
     */
    cursor?: penilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penilaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penilaians.
     */
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * penilaian findMany
   */
  export type penilaianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianInclude<ExtArgs> | null
    /**
     * Filter, which penilaians to fetch.
     */
    where?: penilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penilaians to fetch.
     */
    orderBy?: penilaianOrderByWithRelationInput | penilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing penilaians.
     */
    cursor?: penilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penilaians.
     */
    skip?: number
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * penilaian create
   */
  export type penilaianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianInclude<ExtArgs> | null
    /**
     * The data needed to create a penilaian.
     */
    data: XOR<penilaianCreateInput, penilaianUncheckedCreateInput>
  }

  /**
   * penilaian createMany
   */
  export type penilaianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many penilaians.
     */
    data: penilaianCreateManyInput | penilaianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * penilaian createManyAndReturn
   */
  export type penilaianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * The data used to create many penilaians.
     */
    data: penilaianCreateManyInput | penilaianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * penilaian update
   */
  export type penilaianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianInclude<ExtArgs> | null
    /**
     * The data needed to update a penilaian.
     */
    data: XOR<penilaianUpdateInput, penilaianUncheckedUpdateInput>
    /**
     * Choose, which penilaian to update.
     */
    where: penilaianWhereUniqueInput
  }

  /**
   * penilaian updateMany
   */
  export type penilaianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update penilaians.
     */
    data: XOR<penilaianUpdateManyMutationInput, penilaianUncheckedUpdateManyInput>
    /**
     * Filter which penilaians to update
     */
    where?: penilaianWhereInput
    /**
     * Limit how many penilaians to update.
     */
    limit?: number
  }

  /**
   * penilaian updateManyAndReturn
   */
  export type penilaianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * The data used to update penilaians.
     */
    data: XOR<penilaianUpdateManyMutationInput, penilaianUncheckedUpdateManyInput>
    /**
     * Filter which penilaians to update
     */
    where?: penilaianWhereInput
    /**
     * Limit how many penilaians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * penilaian upsert
   */
  export type penilaianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianInclude<ExtArgs> | null
    /**
     * The filter to search for the penilaian to update in case it exists.
     */
    where: penilaianWhereUniqueInput
    /**
     * In case the penilaian found by the `where` argument doesn't exist, create a new penilaian with this data.
     */
    create: XOR<penilaianCreateInput, penilaianUncheckedCreateInput>
    /**
     * In case the penilaian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<penilaianUpdateInput, penilaianUncheckedUpdateInput>
  }

  /**
   * penilaian delete
   */
  export type penilaianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianInclude<ExtArgs> | null
    /**
     * Filter which penilaian to delete.
     */
    where: penilaianWhereUniqueInput
  }

  /**
   * penilaian deleteMany
   */
  export type penilaianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penilaians to delete
     */
    where?: penilaianWhereInput
    /**
     * Limit how many penilaians to delete.
     */
    limit?: number
  }

  /**
   * penilaian without action
   */
  export type penilaianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianInclude<ExtArgs> | null
  }


  /**
   * Model peserta
   */

  export type AggregatePeserta = {
    _count: PesertaCountAggregateOutputType | null
    _min: PesertaMinAggregateOutputType | null
    _max: PesertaMaxAggregateOutputType | null
  }

  export type PesertaMinAggregateOutputType = {
    id: string | null
    nama: string | null
    users_id: string | null
    created_at: Date | null
  }

  export type PesertaMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    users_id: string | null
    created_at: Date | null
  }

  export type PesertaCountAggregateOutputType = {
    id: number
    nama: number
    users_id: number
    created_at: number
    _all: number
  }


  export type PesertaMinAggregateInputType = {
    id?: true
    nama?: true
    users_id?: true
    created_at?: true
  }

  export type PesertaMaxAggregateInputType = {
    id?: true
    nama?: true
    users_id?: true
    created_at?: true
  }

  export type PesertaCountAggregateInputType = {
    id?: true
    nama?: true
    users_id?: true
    created_at?: true
    _all?: true
  }

  export type PesertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peserta to aggregate.
     */
    where?: pesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesertas to fetch.
     */
    orderBy?: pesertaOrderByWithRelationInput | pesertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pesertas
    **/
    _count?: true | PesertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesertaMaxAggregateInputType
  }

  export type GetPesertaAggregateType<T extends PesertaAggregateArgs> = {
        [P in keyof T & keyof AggregatePeserta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeserta[P]>
      : GetScalarType<T[P], AggregatePeserta[P]>
  }




  export type pesertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pesertaWhereInput
    orderBy?: pesertaOrderByWithAggregationInput | pesertaOrderByWithAggregationInput[]
    by: PesertaScalarFieldEnum[] | PesertaScalarFieldEnum
    having?: pesertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesertaCountAggregateInputType | true
    _min?: PesertaMinAggregateInputType
    _max?: PesertaMaxAggregateInputType
  }

  export type PesertaGroupByOutputType = {
    id: string
    nama: string
    users_id: string
    created_at: Date
    _count: PesertaCountAggregateOutputType | null
    _min: PesertaMinAggregateOutputType | null
    _max: PesertaMaxAggregateOutputType | null
  }

  type GetPesertaGroupByPayload<T extends pesertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PesertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesertaGroupByOutputType[P]>
            : GetScalarType<T[P], PesertaGroupByOutputType[P]>
        }
      >
    >


  export type pesertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    users_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    pesertalomba?: boolean | peserta$pesertalombaArgs<ExtArgs>
    _count?: boolean | PesertaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peserta"]>

  export type pesertaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    users_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peserta"]>

  export type pesertaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    users_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peserta"]>

  export type pesertaSelectScalar = {
    id?: boolean
    nama?: boolean
    users_id?: boolean
    created_at?: boolean
  }

  export type pesertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "users_id" | "created_at", ExtArgs["result"]["peserta"]>
  export type pesertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    pesertalomba?: boolean | peserta$pesertalombaArgs<ExtArgs>
    _count?: boolean | PesertaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pesertaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type pesertaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $pesertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "peserta"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      pesertalomba: Prisma.$pesertalombaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      users_id: string
      created_at: Date
    }, ExtArgs["result"]["peserta"]>
    composites: {}
  }

  type pesertaGetPayload<S extends boolean | null | undefined | pesertaDefaultArgs> = $Result.GetResult<Prisma.$pesertaPayload, S>

  type pesertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pesertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PesertaCountAggregateInputType | true
    }

  export interface pesertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['peserta'], meta: { name: 'peserta' } }
    /**
     * Find zero or one Peserta that matches the filter.
     * @param {pesertaFindUniqueArgs} args - Arguments to find a Peserta
     * @example
     * // Get one Peserta
     * const peserta = await prisma.peserta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pesertaFindUniqueArgs>(args: SelectSubset<T, pesertaFindUniqueArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peserta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pesertaFindUniqueOrThrowArgs} args - Arguments to find a Peserta
     * @example
     * // Get one Peserta
     * const peserta = await prisma.peserta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pesertaFindUniqueOrThrowArgs>(args: SelectSubset<T, pesertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peserta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertaFindFirstArgs} args - Arguments to find a Peserta
     * @example
     * // Get one Peserta
     * const peserta = await prisma.peserta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pesertaFindFirstArgs>(args?: SelectSubset<T, pesertaFindFirstArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peserta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertaFindFirstOrThrowArgs} args - Arguments to find a Peserta
     * @example
     * // Get one Peserta
     * const peserta = await prisma.peserta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pesertaFindFirstOrThrowArgs>(args?: SelectSubset<T, pesertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pesertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pesertas
     * const pesertas = await prisma.peserta.findMany()
     * 
     * // Get first 10 Pesertas
     * const pesertas = await prisma.peserta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pesertaWithIdOnly = await prisma.peserta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pesertaFindManyArgs>(args?: SelectSubset<T, pesertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peserta.
     * @param {pesertaCreateArgs} args - Arguments to create a Peserta.
     * @example
     * // Create one Peserta
     * const Peserta = await prisma.peserta.create({
     *   data: {
     *     // ... data to create a Peserta
     *   }
     * })
     * 
     */
    create<T extends pesertaCreateArgs>(args: SelectSubset<T, pesertaCreateArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pesertas.
     * @param {pesertaCreateManyArgs} args - Arguments to create many Pesertas.
     * @example
     * // Create many Pesertas
     * const peserta = await prisma.peserta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pesertaCreateManyArgs>(args?: SelectSubset<T, pesertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pesertas and returns the data saved in the database.
     * @param {pesertaCreateManyAndReturnArgs} args - Arguments to create many Pesertas.
     * @example
     * // Create many Pesertas
     * const peserta = await prisma.peserta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pesertas and only return the `id`
     * const pesertaWithIdOnly = await prisma.peserta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pesertaCreateManyAndReturnArgs>(args?: SelectSubset<T, pesertaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Peserta.
     * @param {pesertaDeleteArgs} args - Arguments to delete one Peserta.
     * @example
     * // Delete one Peserta
     * const Peserta = await prisma.peserta.delete({
     *   where: {
     *     // ... filter to delete one Peserta
     *   }
     * })
     * 
     */
    delete<T extends pesertaDeleteArgs>(args: SelectSubset<T, pesertaDeleteArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peserta.
     * @param {pesertaUpdateArgs} args - Arguments to update one Peserta.
     * @example
     * // Update one Peserta
     * const peserta = await prisma.peserta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pesertaUpdateArgs>(args: SelectSubset<T, pesertaUpdateArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pesertas.
     * @param {pesertaDeleteManyArgs} args - Arguments to filter Pesertas to delete.
     * @example
     * // Delete a few Pesertas
     * const { count } = await prisma.peserta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pesertaDeleteManyArgs>(args?: SelectSubset<T, pesertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pesertas
     * const peserta = await prisma.peserta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pesertaUpdateManyArgs>(args: SelectSubset<T, pesertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesertas and returns the data updated in the database.
     * @param {pesertaUpdateManyAndReturnArgs} args - Arguments to update many Pesertas.
     * @example
     * // Update many Pesertas
     * const peserta = await prisma.peserta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pesertas and only return the `id`
     * const pesertaWithIdOnly = await prisma.peserta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pesertaUpdateManyAndReturnArgs>(args: SelectSubset<T, pesertaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Peserta.
     * @param {pesertaUpsertArgs} args - Arguments to update or create a Peserta.
     * @example
     * // Update or create a Peserta
     * const peserta = await prisma.peserta.upsert({
     *   create: {
     *     // ... data to create a Peserta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peserta we want to update
     *   }
     * })
     */
    upsert<T extends pesertaUpsertArgs>(args: SelectSubset<T, pesertaUpsertArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pesertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertaCountArgs} args - Arguments to filter Pesertas to count.
     * @example
     * // Count the number of Pesertas
     * const count = await prisma.peserta.count({
     *   where: {
     *     // ... the filter for the Pesertas we want to count
     *   }
     * })
    **/
    count<T extends pesertaCountArgs>(
      args?: Subset<T, pesertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peserta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PesertaAggregateArgs>(args: Subset<T, PesertaAggregateArgs>): Prisma.PrismaPromise<GetPesertaAggregateType<T>>

    /**
     * Group by Peserta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertaGroupByArgs} args - Group by arguments.
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
      T extends pesertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pesertaGroupByArgs['orderBy'] }
        : { orderBy?: pesertaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pesertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the peserta model
   */
  readonly fields: pesertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for peserta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pesertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pesertalomba<T extends peserta$pesertalombaArgs<ExtArgs> = {}>(args?: Subset<T, peserta$pesertalombaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the peserta model
   */
  interface pesertaFieldRefs {
    readonly id: FieldRef<"peserta", 'String'>
    readonly nama: FieldRef<"peserta", 'String'>
    readonly users_id: FieldRef<"peserta", 'String'>
    readonly created_at: FieldRef<"peserta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * peserta findUnique
   */
  export type pesertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * Filter, which peserta to fetch.
     */
    where: pesertaWhereUniqueInput
  }

  /**
   * peserta findUniqueOrThrow
   */
  export type pesertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * Filter, which peserta to fetch.
     */
    where: pesertaWhereUniqueInput
  }

  /**
   * peserta findFirst
   */
  export type pesertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * Filter, which peserta to fetch.
     */
    where?: pesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesertas to fetch.
     */
    orderBy?: pesertaOrderByWithRelationInput | pesertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pesertas.
     */
    cursor?: pesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pesertas.
     */
    distinct?: PesertaScalarFieldEnum | PesertaScalarFieldEnum[]
  }

  /**
   * peserta findFirstOrThrow
   */
  export type pesertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * Filter, which peserta to fetch.
     */
    where?: pesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesertas to fetch.
     */
    orderBy?: pesertaOrderByWithRelationInput | pesertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pesertas.
     */
    cursor?: pesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pesertas.
     */
    distinct?: PesertaScalarFieldEnum | PesertaScalarFieldEnum[]
  }

  /**
   * peserta findMany
   */
  export type pesertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * Filter, which pesertas to fetch.
     */
    where?: pesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesertas to fetch.
     */
    orderBy?: pesertaOrderByWithRelationInput | pesertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pesertas.
     */
    cursor?: pesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesertas.
     */
    skip?: number
    distinct?: PesertaScalarFieldEnum | PesertaScalarFieldEnum[]
  }

  /**
   * peserta create
   */
  export type pesertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * The data needed to create a peserta.
     */
    data: XOR<pesertaCreateInput, pesertaUncheckedCreateInput>
  }

  /**
   * peserta createMany
   */
  export type pesertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pesertas.
     */
    data: pesertaCreateManyInput | pesertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * peserta createManyAndReturn
   */
  export type pesertaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * The data used to create many pesertas.
     */
    data: pesertaCreateManyInput | pesertaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * peserta update
   */
  export type pesertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * The data needed to update a peserta.
     */
    data: XOR<pesertaUpdateInput, pesertaUncheckedUpdateInput>
    /**
     * Choose, which peserta to update.
     */
    where: pesertaWhereUniqueInput
  }

  /**
   * peserta updateMany
   */
  export type pesertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pesertas.
     */
    data: XOR<pesertaUpdateManyMutationInput, pesertaUncheckedUpdateManyInput>
    /**
     * Filter which pesertas to update
     */
    where?: pesertaWhereInput
    /**
     * Limit how many pesertas to update.
     */
    limit?: number
  }

  /**
   * peserta updateManyAndReturn
   */
  export type pesertaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * The data used to update pesertas.
     */
    data: XOR<pesertaUpdateManyMutationInput, pesertaUncheckedUpdateManyInput>
    /**
     * Filter which pesertas to update
     */
    where?: pesertaWhereInput
    /**
     * Limit how many pesertas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * peserta upsert
   */
  export type pesertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * The filter to search for the peserta to update in case it exists.
     */
    where: pesertaWhereUniqueInput
    /**
     * In case the peserta found by the `where` argument doesn't exist, create a new peserta with this data.
     */
    create: XOR<pesertaCreateInput, pesertaUncheckedCreateInput>
    /**
     * In case the peserta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pesertaUpdateInput, pesertaUncheckedUpdateInput>
  }

  /**
   * peserta delete
   */
  export type pesertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * Filter which peserta to delete.
     */
    where: pesertaWhereUniqueInput
  }

  /**
   * peserta deleteMany
   */
  export type pesertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pesertas to delete
     */
    where?: pesertaWhereInput
    /**
     * Limit how many pesertas to delete.
     */
    limit?: number
  }

  /**
   * peserta.pesertalomba
   */
  export type peserta$pesertalombaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaInclude<ExtArgs> | null
    where?: pesertalombaWhereInput
    orderBy?: pesertalombaOrderByWithRelationInput | pesertalombaOrderByWithRelationInput[]
    cursor?: pesertalombaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesertalombaScalarFieldEnum | PesertalombaScalarFieldEnum[]
  }

  /**
   * peserta without action
   */
  export type pesertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
  }


  /**
   * Model pesertalomba
   */

  export type AggregatePesertalomba = {
    _count: PesertalombaCountAggregateOutputType | null
    _avg: PesertalombaAvgAggregateOutputType | null
    _sum: PesertalombaSumAggregateOutputType | null
    _min: PesertalombaMinAggregateOutputType | null
    _max: PesertalombaMaxAggregateOutputType | null
  }

  export type PesertalombaAvgAggregateOutputType = {
    id: number | null
  }

  export type PesertalombaSumAggregateOutputType = {
    id: number | null
  }

  export type PesertalombaMinAggregateOutputType = {
    id: number | null
    peserta_id: string | null
    lomba_id: string | null
    id_pesertalomba: string | null
    submit: string | null
    submission_time: Date | null
  }

  export type PesertalombaMaxAggregateOutputType = {
    id: number | null
    peserta_id: string | null
    lomba_id: string | null
    id_pesertalomba: string | null
    submit: string | null
    submission_time: Date | null
  }

  export type PesertalombaCountAggregateOutputType = {
    id: number
    peserta_id: number
    lomba_id: number
    id_pesertalomba: number
    submit: number
    submission_time: number
    _all: number
  }


  export type PesertalombaAvgAggregateInputType = {
    id?: true
  }

  export type PesertalombaSumAggregateInputType = {
    id?: true
  }

  export type PesertalombaMinAggregateInputType = {
    id?: true
    peserta_id?: true
    lomba_id?: true
    id_pesertalomba?: true
    submit?: true
    submission_time?: true
  }

  export type PesertalombaMaxAggregateInputType = {
    id?: true
    peserta_id?: true
    lomba_id?: true
    id_pesertalomba?: true
    submit?: true
    submission_time?: true
  }

  export type PesertalombaCountAggregateInputType = {
    id?: true
    peserta_id?: true
    lomba_id?: true
    id_pesertalomba?: true
    submit?: true
    submission_time?: true
    _all?: true
  }

  export type PesertalombaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pesertalomba to aggregate.
     */
    where?: pesertalombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesertalombas to fetch.
     */
    orderBy?: pesertalombaOrderByWithRelationInput | pesertalombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pesertalombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesertalombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesertalombas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pesertalombas
    **/
    _count?: true | PesertalombaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PesertalombaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PesertalombaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesertalombaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesertalombaMaxAggregateInputType
  }

  export type GetPesertalombaAggregateType<T extends PesertalombaAggregateArgs> = {
        [P in keyof T & keyof AggregatePesertalomba]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePesertalomba[P]>
      : GetScalarType<T[P], AggregatePesertalomba[P]>
  }




  export type pesertalombaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pesertalombaWhereInput
    orderBy?: pesertalombaOrderByWithAggregationInput | pesertalombaOrderByWithAggregationInput[]
    by: PesertalombaScalarFieldEnum[] | PesertalombaScalarFieldEnum
    having?: pesertalombaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesertalombaCountAggregateInputType | true
    _avg?: PesertalombaAvgAggregateInputType
    _sum?: PesertalombaSumAggregateInputType
    _min?: PesertalombaMinAggregateInputType
    _max?: PesertalombaMaxAggregateInputType
  }

  export type PesertalombaGroupByOutputType = {
    id: number
    peserta_id: string
    lomba_id: string
    id_pesertalomba: string
    submit: string | null
    submission_time: Date | null
    _count: PesertalombaCountAggregateOutputType | null
    _avg: PesertalombaAvgAggregateOutputType | null
    _sum: PesertalombaSumAggregateOutputType | null
    _min: PesertalombaMinAggregateOutputType | null
    _max: PesertalombaMaxAggregateOutputType | null
  }

  type GetPesertalombaGroupByPayload<T extends pesertalombaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PesertalombaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesertalombaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesertalombaGroupByOutputType[P]>
            : GetScalarType<T[P], PesertalombaGroupByOutputType[P]>
        }
      >
    >


  export type pesertalombaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peserta_id?: boolean
    lomba_id?: boolean
    id_pesertalomba?: boolean
    submit?: boolean
    submission_time?: boolean
    penilaian?: boolean | pesertalomba$penilaianArgs<ExtArgs>
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
    peserta?: boolean | pesertaDefaultArgs<ExtArgs>
    _count?: boolean | PesertalombaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesertalomba"]>

  export type pesertalombaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peserta_id?: boolean
    lomba_id?: boolean
    id_pesertalomba?: boolean
    submit?: boolean
    submission_time?: boolean
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
    peserta?: boolean | pesertaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesertalomba"]>

  export type pesertalombaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peserta_id?: boolean
    lomba_id?: boolean
    id_pesertalomba?: boolean
    submit?: boolean
    submission_time?: boolean
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
    peserta?: boolean | pesertaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesertalomba"]>

  export type pesertalombaSelectScalar = {
    id?: boolean
    peserta_id?: boolean
    lomba_id?: boolean
    id_pesertalomba?: boolean
    submit?: boolean
    submission_time?: boolean
  }

  export type pesertalombaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "peserta_id" | "lomba_id" | "id_pesertalomba" | "submit" | "submission_time", ExtArgs["result"]["pesertalomba"]>
  export type pesertalombaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penilaian?: boolean | pesertalomba$penilaianArgs<ExtArgs>
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
    peserta?: boolean | pesertaDefaultArgs<ExtArgs>
    _count?: boolean | PesertalombaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pesertalombaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
    peserta?: boolean | pesertaDefaultArgs<ExtArgs>
  }
  export type pesertalombaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lomba?: boolean | lombaDefaultArgs<ExtArgs>
    peserta?: boolean | pesertaDefaultArgs<ExtArgs>
  }

  export type $pesertalombaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pesertalomba"
    objects: {
      penilaian: Prisma.$penilaianPayload<ExtArgs>[]
      lomba: Prisma.$lombaPayload<ExtArgs>
      peserta: Prisma.$pesertaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      peserta_id: string
      lomba_id: string
      id_pesertalomba: string
      submit: string | null
      submission_time: Date | null
    }, ExtArgs["result"]["pesertalomba"]>
    composites: {}
  }

  type pesertalombaGetPayload<S extends boolean | null | undefined | pesertalombaDefaultArgs> = $Result.GetResult<Prisma.$pesertalombaPayload, S>

  type pesertalombaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pesertalombaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PesertalombaCountAggregateInputType | true
    }

  export interface pesertalombaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pesertalomba'], meta: { name: 'pesertalomba' } }
    /**
     * Find zero or one Pesertalomba that matches the filter.
     * @param {pesertalombaFindUniqueArgs} args - Arguments to find a Pesertalomba
     * @example
     * // Get one Pesertalomba
     * const pesertalomba = await prisma.pesertalomba.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pesertalombaFindUniqueArgs>(args: SelectSubset<T, pesertalombaFindUniqueArgs<ExtArgs>>): Prisma__pesertalombaClient<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pesertalomba that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pesertalombaFindUniqueOrThrowArgs} args - Arguments to find a Pesertalomba
     * @example
     * // Get one Pesertalomba
     * const pesertalomba = await prisma.pesertalomba.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pesertalombaFindUniqueOrThrowArgs>(args: SelectSubset<T, pesertalombaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pesertalombaClient<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pesertalomba that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertalombaFindFirstArgs} args - Arguments to find a Pesertalomba
     * @example
     * // Get one Pesertalomba
     * const pesertalomba = await prisma.pesertalomba.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pesertalombaFindFirstArgs>(args?: SelectSubset<T, pesertalombaFindFirstArgs<ExtArgs>>): Prisma__pesertalombaClient<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pesertalomba that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertalombaFindFirstOrThrowArgs} args - Arguments to find a Pesertalomba
     * @example
     * // Get one Pesertalomba
     * const pesertalomba = await prisma.pesertalomba.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pesertalombaFindFirstOrThrowArgs>(args?: SelectSubset<T, pesertalombaFindFirstOrThrowArgs<ExtArgs>>): Prisma__pesertalombaClient<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pesertalombas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertalombaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pesertalombas
     * const pesertalombas = await prisma.pesertalomba.findMany()
     * 
     * // Get first 10 Pesertalombas
     * const pesertalombas = await prisma.pesertalomba.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pesertalombaWithIdOnly = await prisma.pesertalomba.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pesertalombaFindManyArgs>(args?: SelectSubset<T, pesertalombaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pesertalomba.
     * @param {pesertalombaCreateArgs} args - Arguments to create a Pesertalomba.
     * @example
     * // Create one Pesertalomba
     * const Pesertalomba = await prisma.pesertalomba.create({
     *   data: {
     *     // ... data to create a Pesertalomba
     *   }
     * })
     * 
     */
    create<T extends pesertalombaCreateArgs>(args: SelectSubset<T, pesertalombaCreateArgs<ExtArgs>>): Prisma__pesertalombaClient<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pesertalombas.
     * @param {pesertalombaCreateManyArgs} args - Arguments to create many Pesertalombas.
     * @example
     * // Create many Pesertalombas
     * const pesertalomba = await prisma.pesertalomba.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pesertalombaCreateManyArgs>(args?: SelectSubset<T, pesertalombaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pesertalombas and returns the data saved in the database.
     * @param {pesertalombaCreateManyAndReturnArgs} args - Arguments to create many Pesertalombas.
     * @example
     * // Create many Pesertalombas
     * const pesertalomba = await prisma.pesertalomba.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pesertalombas and only return the `id`
     * const pesertalombaWithIdOnly = await prisma.pesertalomba.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pesertalombaCreateManyAndReturnArgs>(args?: SelectSubset<T, pesertalombaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pesertalomba.
     * @param {pesertalombaDeleteArgs} args - Arguments to delete one Pesertalomba.
     * @example
     * // Delete one Pesertalomba
     * const Pesertalomba = await prisma.pesertalomba.delete({
     *   where: {
     *     // ... filter to delete one Pesertalomba
     *   }
     * })
     * 
     */
    delete<T extends pesertalombaDeleteArgs>(args: SelectSubset<T, pesertalombaDeleteArgs<ExtArgs>>): Prisma__pesertalombaClient<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pesertalomba.
     * @param {pesertalombaUpdateArgs} args - Arguments to update one Pesertalomba.
     * @example
     * // Update one Pesertalomba
     * const pesertalomba = await prisma.pesertalomba.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pesertalombaUpdateArgs>(args: SelectSubset<T, pesertalombaUpdateArgs<ExtArgs>>): Prisma__pesertalombaClient<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pesertalombas.
     * @param {pesertalombaDeleteManyArgs} args - Arguments to filter Pesertalombas to delete.
     * @example
     * // Delete a few Pesertalombas
     * const { count } = await prisma.pesertalomba.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pesertalombaDeleteManyArgs>(args?: SelectSubset<T, pesertalombaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesertalombas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertalombaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pesertalombas
     * const pesertalomba = await prisma.pesertalomba.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pesertalombaUpdateManyArgs>(args: SelectSubset<T, pesertalombaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesertalombas and returns the data updated in the database.
     * @param {pesertalombaUpdateManyAndReturnArgs} args - Arguments to update many Pesertalombas.
     * @example
     * // Update many Pesertalombas
     * const pesertalomba = await prisma.pesertalomba.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pesertalombas and only return the `id`
     * const pesertalombaWithIdOnly = await prisma.pesertalomba.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pesertalombaUpdateManyAndReturnArgs>(args: SelectSubset<T, pesertalombaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pesertalomba.
     * @param {pesertalombaUpsertArgs} args - Arguments to update or create a Pesertalomba.
     * @example
     * // Update or create a Pesertalomba
     * const pesertalomba = await prisma.pesertalomba.upsert({
     *   create: {
     *     // ... data to create a Pesertalomba
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pesertalomba we want to update
     *   }
     * })
     */
    upsert<T extends pesertalombaUpsertArgs>(args: SelectSubset<T, pesertalombaUpsertArgs<ExtArgs>>): Prisma__pesertalombaClient<$Result.GetResult<Prisma.$pesertalombaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pesertalombas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertalombaCountArgs} args - Arguments to filter Pesertalombas to count.
     * @example
     * // Count the number of Pesertalombas
     * const count = await prisma.pesertalomba.count({
     *   where: {
     *     // ... the filter for the Pesertalombas we want to count
     *   }
     * })
    **/
    count<T extends pesertalombaCountArgs>(
      args?: Subset<T, pesertalombaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesertalombaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pesertalomba.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertalombaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PesertalombaAggregateArgs>(args: Subset<T, PesertalombaAggregateArgs>): Prisma.PrismaPromise<GetPesertalombaAggregateType<T>>

    /**
     * Group by Pesertalomba.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertalombaGroupByArgs} args - Group by arguments.
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
      T extends pesertalombaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pesertalombaGroupByArgs['orderBy'] }
        : { orderBy?: pesertalombaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pesertalombaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesertalombaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pesertalomba model
   */
  readonly fields: pesertalombaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pesertalomba.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pesertalombaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penilaian<T extends pesertalomba$penilaianArgs<ExtArgs> = {}>(args?: Subset<T, pesertalomba$penilaianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penilaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lomba<T extends lombaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lombaDefaultArgs<ExtArgs>>): Prisma__lombaClient<$Result.GetResult<Prisma.$lombaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    peserta<T extends pesertaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pesertaDefaultArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pesertalomba model
   */
  interface pesertalombaFieldRefs {
    readonly id: FieldRef<"pesertalomba", 'Int'>
    readonly peserta_id: FieldRef<"pesertalomba", 'String'>
    readonly lomba_id: FieldRef<"pesertalomba", 'String'>
    readonly id_pesertalomba: FieldRef<"pesertalomba", 'String'>
    readonly submit: FieldRef<"pesertalomba", 'String'>
    readonly submission_time: FieldRef<"pesertalomba", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pesertalomba findUnique
   */
  export type pesertalombaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaInclude<ExtArgs> | null
    /**
     * Filter, which pesertalomba to fetch.
     */
    where: pesertalombaWhereUniqueInput
  }

  /**
   * pesertalomba findUniqueOrThrow
   */
  export type pesertalombaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaInclude<ExtArgs> | null
    /**
     * Filter, which pesertalomba to fetch.
     */
    where: pesertalombaWhereUniqueInput
  }

  /**
   * pesertalomba findFirst
   */
  export type pesertalombaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaInclude<ExtArgs> | null
    /**
     * Filter, which pesertalomba to fetch.
     */
    where?: pesertalombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesertalombas to fetch.
     */
    orderBy?: pesertalombaOrderByWithRelationInput | pesertalombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pesertalombas.
     */
    cursor?: pesertalombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesertalombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesertalombas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pesertalombas.
     */
    distinct?: PesertalombaScalarFieldEnum | PesertalombaScalarFieldEnum[]
  }

  /**
   * pesertalomba findFirstOrThrow
   */
  export type pesertalombaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaInclude<ExtArgs> | null
    /**
     * Filter, which pesertalomba to fetch.
     */
    where?: pesertalombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesertalombas to fetch.
     */
    orderBy?: pesertalombaOrderByWithRelationInput | pesertalombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pesertalombas.
     */
    cursor?: pesertalombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesertalombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesertalombas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pesertalombas.
     */
    distinct?: PesertalombaScalarFieldEnum | PesertalombaScalarFieldEnum[]
  }

  /**
   * pesertalomba findMany
   */
  export type pesertalombaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaInclude<ExtArgs> | null
    /**
     * Filter, which pesertalombas to fetch.
     */
    where?: pesertalombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesertalombas to fetch.
     */
    orderBy?: pesertalombaOrderByWithRelationInput | pesertalombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pesertalombas.
     */
    cursor?: pesertalombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesertalombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesertalombas.
     */
    skip?: number
    distinct?: PesertalombaScalarFieldEnum | PesertalombaScalarFieldEnum[]
  }

  /**
   * pesertalomba create
   */
  export type pesertalombaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaInclude<ExtArgs> | null
    /**
     * The data needed to create a pesertalomba.
     */
    data: XOR<pesertalombaCreateInput, pesertalombaUncheckedCreateInput>
  }

  /**
   * pesertalomba createMany
   */
  export type pesertalombaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pesertalombas.
     */
    data: pesertalombaCreateManyInput | pesertalombaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pesertalomba createManyAndReturn
   */
  export type pesertalombaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * The data used to create many pesertalombas.
     */
    data: pesertalombaCreateManyInput | pesertalombaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pesertalomba update
   */
  export type pesertalombaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaInclude<ExtArgs> | null
    /**
     * The data needed to update a pesertalomba.
     */
    data: XOR<pesertalombaUpdateInput, pesertalombaUncheckedUpdateInput>
    /**
     * Choose, which pesertalomba to update.
     */
    where: pesertalombaWhereUniqueInput
  }

  /**
   * pesertalomba updateMany
   */
  export type pesertalombaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pesertalombas.
     */
    data: XOR<pesertalombaUpdateManyMutationInput, pesertalombaUncheckedUpdateManyInput>
    /**
     * Filter which pesertalombas to update
     */
    where?: pesertalombaWhereInput
    /**
     * Limit how many pesertalombas to update.
     */
    limit?: number
  }

  /**
   * pesertalomba updateManyAndReturn
   */
  export type pesertalombaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * The data used to update pesertalombas.
     */
    data: XOR<pesertalombaUpdateManyMutationInput, pesertalombaUncheckedUpdateManyInput>
    /**
     * Filter which pesertalombas to update
     */
    where?: pesertalombaWhereInput
    /**
     * Limit how many pesertalombas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pesertalomba upsert
   */
  export type pesertalombaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaInclude<ExtArgs> | null
    /**
     * The filter to search for the pesertalomba to update in case it exists.
     */
    where: pesertalombaWhereUniqueInput
    /**
     * In case the pesertalomba found by the `where` argument doesn't exist, create a new pesertalomba with this data.
     */
    create: XOR<pesertalombaCreateInput, pesertalombaUncheckedCreateInput>
    /**
     * In case the pesertalomba was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pesertalombaUpdateInput, pesertalombaUncheckedUpdateInput>
  }

  /**
   * pesertalomba delete
   */
  export type pesertalombaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaInclude<ExtArgs> | null
    /**
     * Filter which pesertalomba to delete.
     */
    where: pesertalombaWhereUniqueInput
  }

  /**
   * pesertalomba deleteMany
   */
  export type pesertalombaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pesertalombas to delete
     */
    where?: pesertalombaWhereInput
    /**
     * Limit how many pesertalombas to delete.
     */
    limit?: number
  }

  /**
   * pesertalomba.penilaian
   */
  export type pesertalomba$penilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penilaian
     */
    select?: penilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penilaian
     */
    omit?: penilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penilaianInclude<ExtArgs> | null
    where?: penilaianWhereInput
    orderBy?: penilaianOrderByWithRelationInput | penilaianOrderByWithRelationInput[]
    cursor?: penilaianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * pesertalomba without action
   */
  export type pesertalombaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesertalomba
     */
    select?: pesertalombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesertalomba
     */
    omit?: pesertalombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertalombaInclude<ExtArgs> | null
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


  export const LombaScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    jenis_lomba: 'jenis_lomba',
    lokasi: 'lokasi',
    nama: 'nama',
    url: 'url',
    bataswaktu: 'bataswaktu',
    deskripsi: 'deskripsi'
  };

  export type LombaScalarFieldEnum = (typeof LombaScalarFieldEnum)[keyof typeof LombaScalarFieldEnum]


  export const SertifikatScalarFieldEnum: {
    id: 'id',
    url: 'url',
    lomba_id: 'lomba_id'
  };

  export type SertifikatScalarFieldEnum = (typeof SertifikatScalarFieldEnum)[keyof typeof SertifikatScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nama: 'nama',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    users_id: 'users_id',
    created_at: 'created_at'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const JuriScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    lomba_id: 'lomba_id',
    created_at: 'created_at',
    users_id: 'users_id'
  };

  export type JuriScalarFieldEnum = (typeof JuriScalarFieldEnum)[keyof typeof JuriScalarFieldEnum]


  export const PenilaianScalarFieldEnum: {
    juri_id: 'juri_id',
    pesertalomba_id: 'pesertalomba_id',
    pesertalomba_id1: 'pesertalomba_id1',
    pesertalomba_id_pesetalomba: 'pesertalomba_id_pesetalomba',
    status_penilaian: 'status_penilaian',
    nilai_penilaian: 'nilai_penilaian',
    deskripsi_penilaian: 'deskripsi_penilaian'
  };

  export type PenilaianScalarFieldEnum = (typeof PenilaianScalarFieldEnum)[keyof typeof PenilaianScalarFieldEnum]


  export const PesertaScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    users_id: 'users_id',
    created_at: 'created_at'
  };

  export type PesertaScalarFieldEnum = (typeof PesertaScalarFieldEnum)[keyof typeof PesertaScalarFieldEnum]


  export const PesertalombaScalarFieldEnum: {
    id: 'id',
    peserta_id: 'peserta_id',
    lomba_id: 'lomba_id',
    id_pesertalomba: 'id_pesertalomba',
    submit: 'submit',
    submission_time: 'submission_time'
  };

  export type PesertalombaScalarFieldEnum = (typeof PesertalombaScalarFieldEnum)[keyof typeof PesertalombaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Jenis_lomba'
   */
  export type EnumJenis_lombaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Jenis_lomba'>
    


  /**
   * Reference to a field of type 'Jenis_lomba[]'
   */
  export type ListEnumJenis_lombaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Jenis_lomba[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type lombaWhereInput = {
    AND?: lombaWhereInput | lombaWhereInput[]
    OR?: lombaWhereInput[]
    NOT?: lombaWhereInput | lombaWhereInput[]
    id?: StringFilter<"lomba"> | string
    tanggal?: DateTimeFilter<"lomba"> | Date | string
    jenis_lomba?: EnumJenis_lombaFilter<"lomba"> | $Enums.Jenis_lomba
    lokasi?: StringFilter<"lomba"> | string
    nama?: StringFilter<"lomba"> | string
    url?: StringFilter<"lomba"> | string
    bataswaktu?: DateTimeFilter<"lomba"> | Date | string
    deskripsi?: StringNullableFilter<"lomba"> | string | null
    juri?: JuriListRelationFilter
    pesertalomba?: PesertalombaListRelationFilter
    sertifikat?: SertifikatListRelationFilter
  }

  export type lombaOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    jenis_lomba?: SortOrder
    lokasi?: SortOrder
    nama?: SortOrder
    url?: SortOrder
    bataswaktu?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    juri?: juriOrderByRelationAggregateInput
    pesertalomba?: pesertalombaOrderByRelationAggregateInput
    sertifikat?: sertifikatOrderByRelationAggregateInput
  }

  export type lombaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: lombaWhereInput | lombaWhereInput[]
    OR?: lombaWhereInput[]
    NOT?: lombaWhereInput | lombaWhereInput[]
    tanggal?: DateTimeFilter<"lomba"> | Date | string
    jenis_lomba?: EnumJenis_lombaFilter<"lomba"> | $Enums.Jenis_lomba
    lokasi?: StringFilter<"lomba"> | string
    nama?: StringFilter<"lomba"> | string
    url?: StringFilter<"lomba"> | string
    bataswaktu?: DateTimeFilter<"lomba"> | Date | string
    deskripsi?: StringNullableFilter<"lomba"> | string | null
    juri?: JuriListRelationFilter
    pesertalomba?: PesertalombaListRelationFilter
    sertifikat?: SertifikatListRelationFilter
  }, "id">

  export type lombaOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    jenis_lomba?: SortOrder
    lokasi?: SortOrder
    nama?: SortOrder
    url?: SortOrder
    bataswaktu?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    _count?: lombaCountOrderByAggregateInput
    _max?: lombaMaxOrderByAggregateInput
    _min?: lombaMinOrderByAggregateInput
  }

  export type lombaScalarWhereWithAggregatesInput = {
    AND?: lombaScalarWhereWithAggregatesInput | lombaScalarWhereWithAggregatesInput[]
    OR?: lombaScalarWhereWithAggregatesInput[]
    NOT?: lombaScalarWhereWithAggregatesInput | lombaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"lomba"> | string
    tanggal?: DateTimeWithAggregatesFilter<"lomba"> | Date | string
    jenis_lomba?: EnumJenis_lombaWithAggregatesFilter<"lomba"> | $Enums.Jenis_lomba
    lokasi?: StringWithAggregatesFilter<"lomba"> | string
    nama?: StringWithAggregatesFilter<"lomba"> | string
    url?: StringWithAggregatesFilter<"lomba"> | string
    bataswaktu?: DateTimeWithAggregatesFilter<"lomba"> | Date | string
    deskripsi?: StringNullableWithAggregatesFilter<"lomba"> | string | null
  }

  export type sertifikatWhereInput = {
    AND?: sertifikatWhereInput | sertifikatWhereInput[]
    OR?: sertifikatWhereInput[]
    NOT?: sertifikatWhereInput | sertifikatWhereInput[]
    id?: StringFilter<"sertifikat"> | string
    url?: StringFilter<"sertifikat"> | string
    lomba_id?: StringFilter<"sertifikat"> | string
    lomba?: XOR<LombaScalarRelationFilter, lombaWhereInput>
  }

  export type sertifikatOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    lomba_id?: SortOrder
    lomba?: lombaOrderByWithRelationInput
  }

  export type sertifikatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sertifikatWhereInput | sertifikatWhereInput[]
    OR?: sertifikatWhereInput[]
    NOT?: sertifikatWhereInput | sertifikatWhereInput[]
    url?: StringFilter<"sertifikat"> | string
    lomba_id?: StringFilter<"sertifikat"> | string
    lomba?: XOR<LombaScalarRelationFilter, lombaWhereInput>
  }, "id">

  export type sertifikatOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    lomba_id?: SortOrder
    _count?: sertifikatCountOrderByAggregateInput
    _max?: sertifikatMaxOrderByAggregateInput
    _min?: sertifikatMinOrderByAggregateInput
  }

  export type sertifikatScalarWhereWithAggregatesInput = {
    AND?: sertifikatScalarWhereWithAggregatesInput | sertifikatScalarWhereWithAggregatesInput[]
    OR?: sertifikatScalarWhereWithAggregatesInput[]
    NOT?: sertifikatScalarWhereWithAggregatesInput | sertifikatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sertifikat"> | string
    url?: StringWithAggregatesFilter<"sertifikat"> | string
    lomba_id?: StringWithAggregatesFilter<"sertifikat"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    nama?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    juri?: JuriListRelationFilter
    peserta?: PesertaListRelationFilter
    admin?: AdminListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    role?: SortOrder
    juri?: juriOrderByRelationAggregateInput
    peserta?: pesertaOrderByRelationAggregateInput
    admin?: adminOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    nama?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    juri?: JuriListRelationFilter
    peserta?: PesertaListRelationFilter
    admin?: AdminListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    nama?: StringWithAggregatesFilter<"users"> | string
    role?: EnumRoleWithAggregatesFilter<"users"> | $Enums.Role
  }

  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: UuidFilter<"admin"> | string
    users_id?: UuidFilter<"admin"> | string
    created_at?: DateTimeFilter<"admin"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    users_id?: SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    users_id?: UuidFilter<"admin"> | string
    created_at?: DateTimeFilter<"admin"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    users_id?: SortOrder
    created_at?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"admin"> | string
    users_id?: UuidWithAggregatesFilter<"admin"> | string
    created_at?: DateTimeWithAggregatesFilter<"admin"> | Date | string
  }

  export type juriWhereInput = {
    AND?: juriWhereInput | juriWhereInput[]
    OR?: juriWhereInput[]
    NOT?: juriWhereInput | juriWhereInput[]
    id?: UuidFilter<"juri"> | string
    nama?: StringFilter<"juri"> | string
    lomba_id?: StringFilter<"juri"> | string
    created_at?: DateTimeFilter<"juri"> | Date | string
    users_id?: UuidFilter<"juri"> | string
    lomba?: XOR<LombaScalarRelationFilter, lombaWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    penilaian?: PenilaianListRelationFilter
  }

  export type juriOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    lomba_id?: SortOrder
    created_at?: SortOrder
    users_id?: SortOrder
    lomba?: lombaOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    penilaian?: penilaianOrderByRelationAggregateInput
  }

  export type juriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: juriWhereInput | juriWhereInput[]
    OR?: juriWhereInput[]
    NOT?: juriWhereInput | juriWhereInput[]
    nama?: StringFilter<"juri"> | string
    lomba_id?: StringFilter<"juri"> | string
    created_at?: DateTimeFilter<"juri"> | Date | string
    users_id?: UuidFilter<"juri"> | string
    lomba?: XOR<LombaScalarRelationFilter, lombaWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    penilaian?: PenilaianListRelationFilter
  }, "id">

  export type juriOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    lomba_id?: SortOrder
    created_at?: SortOrder
    users_id?: SortOrder
    _count?: juriCountOrderByAggregateInput
    _max?: juriMaxOrderByAggregateInput
    _min?: juriMinOrderByAggregateInput
  }

  export type juriScalarWhereWithAggregatesInput = {
    AND?: juriScalarWhereWithAggregatesInput | juriScalarWhereWithAggregatesInput[]
    OR?: juriScalarWhereWithAggregatesInput[]
    NOT?: juriScalarWhereWithAggregatesInput | juriScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"juri"> | string
    nama?: StringWithAggregatesFilter<"juri"> | string
    lomba_id?: StringWithAggregatesFilter<"juri"> | string
    created_at?: DateTimeWithAggregatesFilter<"juri"> | Date | string
    users_id?: UuidWithAggregatesFilter<"juri"> | string
  }

  export type penilaianWhereInput = {
    AND?: penilaianWhereInput | penilaianWhereInput[]
    OR?: penilaianWhereInput[]
    NOT?: penilaianWhereInput | penilaianWhereInput[]
    juri_id?: UuidFilter<"penilaian"> | string
    pesertalomba_id?: UuidFilter<"penilaian"> | string
    pesertalomba_id1?: StringFilter<"penilaian"> | string
    pesertalomba_id_pesetalomba?: StringFilter<"penilaian"> | string
    status_penilaian?: StringFilter<"penilaian"> | string
    nilai_penilaian?: DecimalNullableFilter<"penilaian"> | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: StringNullableFilter<"penilaian"> | string | null
    juri?: XOR<JuriScalarRelationFilter, juriWhereInput>
    pesertalomba?: XOR<PesertalombaScalarRelationFilter, pesertalombaWhereInput>
  }

  export type penilaianOrderByWithRelationInput = {
    juri_id?: SortOrder
    pesertalomba_id?: SortOrder
    pesertalomba_id1?: SortOrder
    pesertalomba_id_pesetalomba?: SortOrder
    status_penilaian?: SortOrder
    nilai_penilaian?: SortOrderInput | SortOrder
    deskripsi_penilaian?: SortOrderInput | SortOrder
    juri?: juriOrderByWithRelationInput
    pesertalomba?: pesertalombaOrderByWithRelationInput
  }

  export type penilaianWhereUniqueInput = Prisma.AtLeast<{
    juri_id_pesertalomba_id_pesertalomba_id1_pesertalomba_id_pesetalomba?: penilaianJuri_idPesertalomba_idPesertalomba_id1Pesertalomba_id_pesetalombaCompoundUniqueInput
    AND?: penilaianWhereInput | penilaianWhereInput[]
    OR?: penilaianWhereInput[]
    NOT?: penilaianWhereInput | penilaianWhereInput[]
    juri_id?: UuidFilter<"penilaian"> | string
    pesertalomba_id?: UuidFilter<"penilaian"> | string
    pesertalomba_id1?: StringFilter<"penilaian"> | string
    pesertalomba_id_pesetalomba?: StringFilter<"penilaian"> | string
    status_penilaian?: StringFilter<"penilaian"> | string
    nilai_penilaian?: DecimalNullableFilter<"penilaian"> | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: StringNullableFilter<"penilaian"> | string | null
    juri?: XOR<JuriScalarRelationFilter, juriWhereInput>
    pesertalomba?: XOR<PesertalombaScalarRelationFilter, pesertalombaWhereInput>
  }, "juri_id_pesertalomba_id_pesertalomba_id1_pesertalomba_id_pesetalomba">

  export type penilaianOrderByWithAggregationInput = {
    juri_id?: SortOrder
    pesertalomba_id?: SortOrder
    pesertalomba_id1?: SortOrder
    pesertalomba_id_pesetalomba?: SortOrder
    status_penilaian?: SortOrder
    nilai_penilaian?: SortOrderInput | SortOrder
    deskripsi_penilaian?: SortOrderInput | SortOrder
    _count?: penilaianCountOrderByAggregateInput
    _avg?: penilaianAvgOrderByAggregateInput
    _max?: penilaianMaxOrderByAggregateInput
    _min?: penilaianMinOrderByAggregateInput
    _sum?: penilaianSumOrderByAggregateInput
  }

  export type penilaianScalarWhereWithAggregatesInput = {
    AND?: penilaianScalarWhereWithAggregatesInput | penilaianScalarWhereWithAggregatesInput[]
    OR?: penilaianScalarWhereWithAggregatesInput[]
    NOT?: penilaianScalarWhereWithAggregatesInput | penilaianScalarWhereWithAggregatesInput[]
    juri_id?: UuidWithAggregatesFilter<"penilaian"> | string
    pesertalomba_id?: UuidWithAggregatesFilter<"penilaian"> | string
    pesertalomba_id1?: StringWithAggregatesFilter<"penilaian"> | string
    pesertalomba_id_pesetalomba?: StringWithAggregatesFilter<"penilaian"> | string
    status_penilaian?: StringWithAggregatesFilter<"penilaian"> | string
    nilai_penilaian?: DecimalNullableWithAggregatesFilter<"penilaian"> | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: StringNullableWithAggregatesFilter<"penilaian"> | string | null
  }

  export type pesertaWhereInput = {
    AND?: pesertaWhereInput | pesertaWhereInput[]
    OR?: pesertaWhereInput[]
    NOT?: pesertaWhereInput | pesertaWhereInput[]
    id?: UuidFilter<"peserta"> | string
    nama?: StringFilter<"peserta"> | string
    users_id?: UuidFilter<"peserta"> | string
    created_at?: DateTimeFilter<"peserta"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    pesertalomba?: PesertalombaListRelationFilter
  }

  export type pesertaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    users_id?: SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
    pesertalomba?: pesertalombaOrderByRelationAggregateInput
  }

  export type pesertaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: pesertaWhereInput | pesertaWhereInput[]
    OR?: pesertaWhereInput[]
    NOT?: pesertaWhereInput | pesertaWhereInput[]
    nama?: StringFilter<"peserta"> | string
    users_id?: UuidFilter<"peserta"> | string
    created_at?: DateTimeFilter<"peserta"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    pesertalomba?: PesertalombaListRelationFilter
  }, "id">

  export type pesertaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    users_id?: SortOrder
    created_at?: SortOrder
    _count?: pesertaCountOrderByAggregateInput
    _max?: pesertaMaxOrderByAggregateInput
    _min?: pesertaMinOrderByAggregateInput
  }

  export type pesertaScalarWhereWithAggregatesInput = {
    AND?: pesertaScalarWhereWithAggregatesInput | pesertaScalarWhereWithAggregatesInput[]
    OR?: pesertaScalarWhereWithAggregatesInput[]
    NOT?: pesertaScalarWhereWithAggregatesInput | pesertaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"peserta"> | string
    nama?: StringWithAggregatesFilter<"peserta"> | string
    users_id?: UuidWithAggregatesFilter<"peserta"> | string
    created_at?: DateTimeWithAggregatesFilter<"peserta"> | Date | string
  }

  export type pesertalombaWhereInput = {
    AND?: pesertalombaWhereInput | pesertalombaWhereInput[]
    OR?: pesertalombaWhereInput[]
    NOT?: pesertalombaWhereInput | pesertalombaWhereInput[]
    id?: IntFilter<"pesertalomba"> | number
    peserta_id?: UuidFilter<"pesertalomba"> | string
    lomba_id?: StringFilter<"pesertalomba"> | string
    id_pesertalomba?: StringFilter<"pesertalomba"> | string
    submit?: StringNullableFilter<"pesertalomba"> | string | null
    submission_time?: DateTimeNullableFilter<"pesertalomba"> | Date | string | null
    penilaian?: PenilaianListRelationFilter
    lomba?: XOR<LombaScalarRelationFilter, lombaWhereInput>
    peserta?: XOR<PesertaScalarRelationFilter, pesertaWhereInput>
  }

  export type pesertalombaOrderByWithRelationInput = {
    id?: SortOrder
    peserta_id?: SortOrder
    lomba_id?: SortOrder
    id_pesertalomba?: SortOrder
    submit?: SortOrderInput | SortOrder
    submission_time?: SortOrderInput | SortOrder
    penilaian?: penilaianOrderByRelationAggregateInput
    lomba?: lombaOrderByWithRelationInput
    peserta?: pesertaOrderByWithRelationInput
  }

  export type pesertalombaWhereUniqueInput = Prisma.AtLeast<{
    peserta_id_lomba_id_id_pesertalomba?: pesertalombaPeserta_idLomba_idId_pesertalombaCompoundUniqueInput
    AND?: pesertalombaWhereInput | pesertalombaWhereInput[]
    OR?: pesertalombaWhereInput[]
    NOT?: pesertalombaWhereInput | pesertalombaWhereInput[]
    id?: IntFilter<"pesertalomba"> | number
    peserta_id?: UuidFilter<"pesertalomba"> | string
    lomba_id?: StringFilter<"pesertalomba"> | string
    id_pesertalomba?: StringFilter<"pesertalomba"> | string
    submit?: StringNullableFilter<"pesertalomba"> | string | null
    submission_time?: DateTimeNullableFilter<"pesertalomba"> | Date | string | null
    penilaian?: PenilaianListRelationFilter
    lomba?: XOR<LombaScalarRelationFilter, lombaWhereInput>
    peserta?: XOR<PesertaScalarRelationFilter, pesertaWhereInput>
  }, "peserta_id_lomba_id_id_pesertalomba">

  export type pesertalombaOrderByWithAggregationInput = {
    id?: SortOrder
    peserta_id?: SortOrder
    lomba_id?: SortOrder
    id_pesertalomba?: SortOrder
    submit?: SortOrderInput | SortOrder
    submission_time?: SortOrderInput | SortOrder
    _count?: pesertalombaCountOrderByAggregateInput
    _avg?: pesertalombaAvgOrderByAggregateInput
    _max?: pesertalombaMaxOrderByAggregateInput
    _min?: pesertalombaMinOrderByAggregateInput
    _sum?: pesertalombaSumOrderByAggregateInput
  }

  export type pesertalombaScalarWhereWithAggregatesInput = {
    AND?: pesertalombaScalarWhereWithAggregatesInput | pesertalombaScalarWhereWithAggregatesInput[]
    OR?: pesertalombaScalarWhereWithAggregatesInput[]
    NOT?: pesertalombaScalarWhereWithAggregatesInput | pesertalombaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pesertalomba"> | number
    peserta_id?: UuidWithAggregatesFilter<"pesertalomba"> | string
    lomba_id?: StringWithAggregatesFilter<"pesertalomba"> | string
    id_pesertalomba?: StringWithAggregatesFilter<"pesertalomba"> | string
    submit?: StringNullableWithAggregatesFilter<"pesertalomba"> | string | null
    submission_time?: DateTimeNullableWithAggregatesFilter<"pesertalomba"> | Date | string | null
  }

  export type lombaCreateInput = {
    id: string
    tanggal: Date | string
    jenis_lomba: $Enums.Jenis_lomba
    lokasi: string
    nama: string
    url: string
    bataswaktu: Date | string
    deskripsi?: string | null
    juri?: juriCreateNestedManyWithoutLombaInput
    pesertalomba?: pesertalombaCreateNestedManyWithoutLombaInput
    sertifikat?: sertifikatCreateNestedManyWithoutLombaInput
  }

  export type lombaUncheckedCreateInput = {
    id: string
    tanggal: Date | string
    jenis_lomba: $Enums.Jenis_lomba
    lokasi: string
    nama: string
    url: string
    bataswaktu: Date | string
    deskripsi?: string | null
    juri?: juriUncheckedCreateNestedManyWithoutLombaInput
    pesertalomba?: pesertalombaUncheckedCreateNestedManyWithoutLombaInput
    sertifikat?: sertifikatUncheckedCreateNestedManyWithoutLombaInput
  }

  export type lombaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_lomba?: EnumJenis_lombaFieldUpdateOperationsInput | $Enums.Jenis_lomba
    lokasi?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bataswaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    juri?: juriUpdateManyWithoutLombaNestedInput
    pesertalomba?: pesertalombaUpdateManyWithoutLombaNestedInput
    sertifikat?: sertifikatUpdateManyWithoutLombaNestedInput
  }

  export type lombaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_lomba?: EnumJenis_lombaFieldUpdateOperationsInput | $Enums.Jenis_lomba
    lokasi?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bataswaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    juri?: juriUncheckedUpdateManyWithoutLombaNestedInput
    pesertalomba?: pesertalombaUncheckedUpdateManyWithoutLombaNestedInput
    sertifikat?: sertifikatUncheckedUpdateManyWithoutLombaNestedInput
  }

  export type lombaCreateManyInput = {
    id: string
    tanggal: Date | string
    jenis_lomba: $Enums.Jenis_lomba
    lokasi: string
    nama: string
    url: string
    bataswaktu: Date | string
    deskripsi?: string | null
  }

  export type lombaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_lomba?: EnumJenis_lombaFieldUpdateOperationsInput | $Enums.Jenis_lomba
    lokasi?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bataswaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type lombaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_lomba?: EnumJenis_lombaFieldUpdateOperationsInput | $Enums.Jenis_lomba
    lokasi?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bataswaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sertifikatCreateInput = {
    id: string
    url: string
    lomba: lombaCreateNestedOneWithoutSertifikatInput
  }

  export type sertifikatUncheckedCreateInput = {
    id: string
    url: string
    lomba_id: string
  }

  export type sertifikatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    lomba?: lombaUpdateOneRequiredWithoutSertifikatNestedInput
  }

  export type sertifikatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    lomba_id?: StringFieldUpdateOperationsInput | string
  }

  export type sertifikatCreateManyInput = {
    id: string
    url: string
    lomba_id: string
  }

  export type sertifikatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type sertifikatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    lomba_id?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    id?: string
    email: string
    password: string
    nama: string
    role?: $Enums.Role
    juri?: juriCreateNestedManyWithoutUsersInput
    peserta?: pesertaCreateNestedManyWithoutUsersInput
    admin?: adminCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    nama: string
    role?: $Enums.Role
    juri?: juriUncheckedCreateNestedManyWithoutUsersInput
    peserta?: pesertaUncheckedCreateNestedManyWithoutUsersInput
    admin?: adminUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    juri?: juriUpdateManyWithoutUsersNestedInput
    peserta?: pesertaUpdateManyWithoutUsersNestedInput
    admin?: adminUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    juri?: juriUncheckedUpdateManyWithoutUsersNestedInput
    peserta?: pesertaUncheckedUpdateManyWithoutUsersNestedInput
    admin?: adminUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    password: string
    nama: string
    role?: $Enums.Role
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type adminCreateInput = {
    id?: string
    created_at?: Date | string
    users: usersCreateNestedOneWithoutAdminInput
  }

  export type adminUncheckedCreateInput = {
    id?: string
    users_id: string
    created_at?: Date | string
  }

  export type adminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    users_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateManyInput = {
    id?: string
    users_id: string
    created_at?: Date | string
  }

  export type adminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    users_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type juriCreateInput = {
    id?: string
    nama: string
    created_at?: Date | string
    lomba: lombaCreateNestedOneWithoutJuriInput
    users: usersCreateNestedOneWithoutJuriInput
    penilaian?: penilaianCreateNestedManyWithoutJuriInput
  }

  export type juriUncheckedCreateInput = {
    id?: string
    nama: string
    lomba_id: string
    created_at?: Date | string
    users_id: string
    penilaian?: penilaianUncheckedCreateNestedManyWithoutJuriInput
  }

  export type juriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lomba?: lombaUpdateOneRequiredWithoutJuriNestedInput
    users?: usersUpdateOneRequiredWithoutJuriNestedInput
    penilaian?: penilaianUpdateManyWithoutJuriNestedInput
  }

  export type juriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    lomba_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_id?: StringFieldUpdateOperationsInput | string
    penilaian?: penilaianUncheckedUpdateManyWithoutJuriNestedInput
  }

  export type juriCreateManyInput = {
    id?: string
    nama: string
    lomba_id: string
    created_at?: Date | string
    users_id: string
  }

  export type juriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type juriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    lomba_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_id?: StringFieldUpdateOperationsInput | string
  }

  export type penilaianCreateInput = {
    status_penilaian: string
    nilai_penilaian?: Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: string | null
    juri: juriCreateNestedOneWithoutPenilaianInput
    pesertalomba: pesertalombaCreateNestedOneWithoutPenilaianInput
  }

  export type penilaianUncheckedCreateInput = {
    juri_id: string
    pesertalomba_id: string
    pesertalomba_id1: string
    pesertalomba_id_pesetalomba: string
    status_penilaian: string
    nilai_penilaian?: Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: string | null
  }

  export type penilaianUpdateInput = {
    status_penilaian?: StringFieldUpdateOperationsInput | string
    nilai_penilaian?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: NullableStringFieldUpdateOperationsInput | string | null
    juri?: juriUpdateOneRequiredWithoutPenilaianNestedInput
    pesertalomba?: pesertalombaUpdateOneRequiredWithoutPenilaianNestedInput
  }

  export type penilaianUncheckedUpdateInput = {
    juri_id?: StringFieldUpdateOperationsInput | string
    pesertalomba_id?: StringFieldUpdateOperationsInput | string
    pesertalomba_id1?: StringFieldUpdateOperationsInput | string
    pesertalomba_id_pesetalomba?: StringFieldUpdateOperationsInput | string
    status_penilaian?: StringFieldUpdateOperationsInput | string
    nilai_penilaian?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type penilaianCreateManyInput = {
    juri_id: string
    pesertalomba_id: string
    pesertalomba_id1: string
    pesertalomba_id_pesetalomba: string
    status_penilaian: string
    nilai_penilaian?: Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: string | null
  }

  export type penilaianUpdateManyMutationInput = {
    status_penilaian?: StringFieldUpdateOperationsInput | string
    nilai_penilaian?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type penilaianUncheckedUpdateManyInput = {
    juri_id?: StringFieldUpdateOperationsInput | string
    pesertalomba_id?: StringFieldUpdateOperationsInput | string
    pesertalomba_id1?: StringFieldUpdateOperationsInput | string
    pesertalomba_id_pesetalomba?: StringFieldUpdateOperationsInput | string
    status_penilaian?: StringFieldUpdateOperationsInput | string
    nilai_penilaian?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pesertaCreateInput = {
    id?: string
    nama: string
    created_at?: Date | string
    users: usersCreateNestedOneWithoutPesertaInput
    pesertalomba?: pesertalombaCreateNestedManyWithoutPesertaInput
  }

  export type pesertaUncheckedCreateInput = {
    id?: string
    nama: string
    users_id: string
    created_at?: Date | string
    pesertalomba?: pesertalombaUncheckedCreateNestedManyWithoutPesertaInput
  }

  export type pesertaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutPesertaNestedInput
    pesertalomba?: pesertalombaUpdateManyWithoutPesertaNestedInput
  }

  export type pesertaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    users_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pesertalomba?: pesertalombaUncheckedUpdateManyWithoutPesertaNestedInput
  }

  export type pesertaCreateManyInput = {
    id?: string
    nama: string
    users_id: string
    created_at?: Date | string
  }

  export type pesertaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pesertaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    users_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pesertalombaCreateInput = {
    id?: number
    id_pesertalomba: string
    submit?: string | null
    submission_time?: Date | string | null
    penilaian?: penilaianCreateNestedManyWithoutPesertalombaInput
    lomba: lombaCreateNestedOneWithoutPesertalombaInput
    peserta: pesertaCreateNestedOneWithoutPesertalombaInput
  }

  export type pesertalombaUncheckedCreateInput = {
    id?: number
    peserta_id: string
    lomba_id: string
    id_pesertalomba: string
    submit?: string | null
    submission_time?: Date | string | null
    penilaian?: penilaianUncheckedCreateNestedManyWithoutPesertalombaInput
  }

  export type pesertalombaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pesertalomba?: StringFieldUpdateOperationsInput | string
    submit?: NullableStringFieldUpdateOperationsInput | string | null
    submission_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    penilaian?: penilaianUpdateManyWithoutPesertalombaNestedInput
    lomba?: lombaUpdateOneRequiredWithoutPesertalombaNestedInput
    peserta?: pesertaUpdateOneRequiredWithoutPesertalombaNestedInput
  }

  export type pesertalombaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    peserta_id?: StringFieldUpdateOperationsInput | string
    lomba_id?: StringFieldUpdateOperationsInput | string
    id_pesertalomba?: StringFieldUpdateOperationsInput | string
    submit?: NullableStringFieldUpdateOperationsInput | string | null
    submission_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    penilaian?: penilaianUncheckedUpdateManyWithoutPesertalombaNestedInput
  }

  export type pesertalombaCreateManyInput = {
    id?: number
    peserta_id: string
    lomba_id: string
    id_pesertalomba: string
    submit?: string | null
    submission_time?: Date | string | null
  }

  export type pesertalombaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pesertalomba?: StringFieldUpdateOperationsInput | string
    submit?: NullableStringFieldUpdateOperationsInput | string | null
    submission_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pesertalombaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    peserta_id?: StringFieldUpdateOperationsInput | string
    lomba_id?: StringFieldUpdateOperationsInput | string
    id_pesertalomba?: StringFieldUpdateOperationsInput | string
    submit?: NullableStringFieldUpdateOperationsInput | string | null
    submission_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumJenis_lombaFilter<$PrismaModel = never> = {
    equals?: $Enums.Jenis_lomba | EnumJenis_lombaFieldRefInput<$PrismaModel>
    in?: $Enums.Jenis_lomba[] | ListEnumJenis_lombaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jenis_lomba[] | ListEnumJenis_lombaFieldRefInput<$PrismaModel>
    not?: NestedEnumJenis_lombaFilter<$PrismaModel> | $Enums.Jenis_lomba
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

  export type JuriListRelationFilter = {
    every?: juriWhereInput
    some?: juriWhereInput
    none?: juriWhereInput
  }

  export type PesertalombaListRelationFilter = {
    every?: pesertalombaWhereInput
    some?: pesertalombaWhereInput
    none?: pesertalombaWhereInput
  }

  export type SertifikatListRelationFilter = {
    every?: sertifikatWhereInput
    some?: sertifikatWhereInput
    none?: sertifikatWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type juriOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pesertalombaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sertifikatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lombaCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    jenis_lomba?: SortOrder
    lokasi?: SortOrder
    nama?: SortOrder
    url?: SortOrder
    bataswaktu?: SortOrder
    deskripsi?: SortOrder
  }

  export type lombaMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    jenis_lomba?: SortOrder
    lokasi?: SortOrder
    nama?: SortOrder
    url?: SortOrder
    bataswaktu?: SortOrder
    deskripsi?: SortOrder
  }

  export type lombaMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    jenis_lomba?: SortOrder
    lokasi?: SortOrder
    nama?: SortOrder
    url?: SortOrder
    bataswaktu?: SortOrder
    deskripsi?: SortOrder
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

  export type EnumJenis_lombaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Jenis_lomba | EnumJenis_lombaFieldRefInput<$PrismaModel>
    in?: $Enums.Jenis_lomba[] | ListEnumJenis_lombaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jenis_lomba[] | ListEnumJenis_lombaFieldRefInput<$PrismaModel>
    not?: NestedEnumJenis_lombaWithAggregatesFilter<$PrismaModel> | $Enums.Jenis_lomba
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenis_lombaFilter<$PrismaModel>
    _max?: NestedEnumJenis_lombaFilter<$PrismaModel>
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

  export type LombaScalarRelationFilter = {
    is?: lombaWhereInput
    isNot?: lombaWhereInput
  }

  export type sertifikatCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    lomba_id?: SortOrder
  }

  export type sertifikatMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    lomba_id?: SortOrder
  }

  export type sertifikatMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    lomba_id?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PesertaListRelationFilter = {
    every?: pesertaWhereInput
    some?: pesertaWhereInput
    none?: pesertaWhereInput
  }

  export type AdminListRelationFilter = {
    every?: adminWhereInput
    some?: adminWhereInput
    none?: adminWhereInput
  }

  export type pesertaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    role?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    role?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    users_id?: SortOrder
    created_at?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    users_id?: SortOrder
    created_at?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    users_id?: SortOrder
    created_at?: SortOrder
  }

  export type PenilaianListRelationFilter = {
    every?: penilaianWhereInput
    some?: penilaianWhereInput
    none?: penilaianWhereInput
  }

  export type penilaianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type juriCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    lomba_id?: SortOrder
    created_at?: SortOrder
    users_id?: SortOrder
  }

  export type juriMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    lomba_id?: SortOrder
    created_at?: SortOrder
    users_id?: SortOrder
  }

  export type juriMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    lomba_id?: SortOrder
    created_at?: SortOrder
    users_id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type JuriScalarRelationFilter = {
    is?: juriWhereInput
    isNot?: juriWhereInput
  }

  export type PesertalombaScalarRelationFilter = {
    is?: pesertalombaWhereInput
    isNot?: pesertalombaWhereInput
  }

  export type penilaianJuri_idPesertalomba_idPesertalomba_id1Pesertalomba_id_pesetalombaCompoundUniqueInput = {
    juri_id: string
    pesertalomba_id: string
    pesertalomba_id1: string
    pesertalomba_id_pesetalomba: string
  }

  export type penilaianCountOrderByAggregateInput = {
    juri_id?: SortOrder
    pesertalomba_id?: SortOrder
    pesertalomba_id1?: SortOrder
    pesertalomba_id_pesetalomba?: SortOrder
    status_penilaian?: SortOrder
    nilai_penilaian?: SortOrder
    deskripsi_penilaian?: SortOrder
  }

  export type penilaianAvgOrderByAggregateInput = {
    nilai_penilaian?: SortOrder
  }

  export type penilaianMaxOrderByAggregateInput = {
    juri_id?: SortOrder
    pesertalomba_id?: SortOrder
    pesertalomba_id1?: SortOrder
    pesertalomba_id_pesetalomba?: SortOrder
    status_penilaian?: SortOrder
    nilai_penilaian?: SortOrder
    deskripsi_penilaian?: SortOrder
  }

  export type penilaianMinOrderByAggregateInput = {
    juri_id?: SortOrder
    pesertalomba_id?: SortOrder
    pesertalomba_id1?: SortOrder
    pesertalomba_id_pesetalomba?: SortOrder
    status_penilaian?: SortOrder
    nilai_penilaian?: SortOrder
    deskripsi_penilaian?: SortOrder
  }

  export type penilaianSumOrderByAggregateInput = {
    nilai_penilaian?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type pesertaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    users_id?: SortOrder
    created_at?: SortOrder
  }

  export type pesertaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    users_id?: SortOrder
    created_at?: SortOrder
  }

  export type pesertaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    users_id?: SortOrder
    created_at?: SortOrder
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

  export type PesertaScalarRelationFilter = {
    is?: pesertaWhereInput
    isNot?: pesertaWhereInput
  }

  export type pesertalombaPeserta_idLomba_idId_pesertalombaCompoundUniqueInput = {
    peserta_id: string
    lomba_id: string
    id_pesertalomba: string
  }

  export type pesertalombaCountOrderByAggregateInput = {
    id?: SortOrder
    peserta_id?: SortOrder
    lomba_id?: SortOrder
    id_pesertalomba?: SortOrder
    submit?: SortOrder
    submission_time?: SortOrder
  }

  export type pesertalombaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pesertalombaMaxOrderByAggregateInput = {
    id?: SortOrder
    peserta_id?: SortOrder
    lomba_id?: SortOrder
    id_pesertalomba?: SortOrder
    submit?: SortOrder
    submission_time?: SortOrder
  }

  export type pesertalombaMinOrderByAggregateInput = {
    id?: SortOrder
    peserta_id?: SortOrder
    lomba_id?: SortOrder
    id_pesertalomba?: SortOrder
    submit?: SortOrder
    submission_time?: SortOrder
  }

  export type pesertalombaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type juriCreateNestedManyWithoutLombaInput = {
    create?: XOR<juriCreateWithoutLombaInput, juriUncheckedCreateWithoutLombaInput> | juriCreateWithoutLombaInput[] | juriUncheckedCreateWithoutLombaInput[]
    connectOrCreate?: juriCreateOrConnectWithoutLombaInput | juriCreateOrConnectWithoutLombaInput[]
    createMany?: juriCreateManyLombaInputEnvelope
    connect?: juriWhereUniqueInput | juriWhereUniqueInput[]
  }

  export type pesertalombaCreateNestedManyWithoutLombaInput = {
    create?: XOR<pesertalombaCreateWithoutLombaInput, pesertalombaUncheckedCreateWithoutLombaInput> | pesertalombaCreateWithoutLombaInput[] | pesertalombaUncheckedCreateWithoutLombaInput[]
    connectOrCreate?: pesertalombaCreateOrConnectWithoutLombaInput | pesertalombaCreateOrConnectWithoutLombaInput[]
    createMany?: pesertalombaCreateManyLombaInputEnvelope
    connect?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
  }

  export type sertifikatCreateNestedManyWithoutLombaInput = {
    create?: XOR<sertifikatCreateWithoutLombaInput, sertifikatUncheckedCreateWithoutLombaInput> | sertifikatCreateWithoutLombaInput[] | sertifikatUncheckedCreateWithoutLombaInput[]
    connectOrCreate?: sertifikatCreateOrConnectWithoutLombaInput | sertifikatCreateOrConnectWithoutLombaInput[]
    createMany?: sertifikatCreateManyLombaInputEnvelope
    connect?: sertifikatWhereUniqueInput | sertifikatWhereUniqueInput[]
  }

  export type juriUncheckedCreateNestedManyWithoutLombaInput = {
    create?: XOR<juriCreateWithoutLombaInput, juriUncheckedCreateWithoutLombaInput> | juriCreateWithoutLombaInput[] | juriUncheckedCreateWithoutLombaInput[]
    connectOrCreate?: juriCreateOrConnectWithoutLombaInput | juriCreateOrConnectWithoutLombaInput[]
    createMany?: juriCreateManyLombaInputEnvelope
    connect?: juriWhereUniqueInput | juriWhereUniqueInput[]
  }

  export type pesertalombaUncheckedCreateNestedManyWithoutLombaInput = {
    create?: XOR<pesertalombaCreateWithoutLombaInput, pesertalombaUncheckedCreateWithoutLombaInput> | pesertalombaCreateWithoutLombaInput[] | pesertalombaUncheckedCreateWithoutLombaInput[]
    connectOrCreate?: pesertalombaCreateOrConnectWithoutLombaInput | pesertalombaCreateOrConnectWithoutLombaInput[]
    createMany?: pesertalombaCreateManyLombaInputEnvelope
    connect?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
  }

  export type sertifikatUncheckedCreateNestedManyWithoutLombaInput = {
    create?: XOR<sertifikatCreateWithoutLombaInput, sertifikatUncheckedCreateWithoutLombaInput> | sertifikatCreateWithoutLombaInput[] | sertifikatUncheckedCreateWithoutLombaInput[]
    connectOrCreate?: sertifikatCreateOrConnectWithoutLombaInput | sertifikatCreateOrConnectWithoutLombaInput[]
    createMany?: sertifikatCreateManyLombaInputEnvelope
    connect?: sertifikatWhereUniqueInput | sertifikatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumJenis_lombaFieldUpdateOperationsInput = {
    set?: $Enums.Jenis_lomba
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type juriUpdateManyWithoutLombaNestedInput = {
    create?: XOR<juriCreateWithoutLombaInput, juriUncheckedCreateWithoutLombaInput> | juriCreateWithoutLombaInput[] | juriUncheckedCreateWithoutLombaInput[]
    connectOrCreate?: juriCreateOrConnectWithoutLombaInput | juriCreateOrConnectWithoutLombaInput[]
    upsert?: juriUpsertWithWhereUniqueWithoutLombaInput | juriUpsertWithWhereUniqueWithoutLombaInput[]
    createMany?: juriCreateManyLombaInputEnvelope
    set?: juriWhereUniqueInput | juriWhereUniqueInput[]
    disconnect?: juriWhereUniqueInput | juriWhereUniqueInput[]
    delete?: juriWhereUniqueInput | juriWhereUniqueInput[]
    connect?: juriWhereUniqueInput | juriWhereUniqueInput[]
    update?: juriUpdateWithWhereUniqueWithoutLombaInput | juriUpdateWithWhereUniqueWithoutLombaInput[]
    updateMany?: juriUpdateManyWithWhereWithoutLombaInput | juriUpdateManyWithWhereWithoutLombaInput[]
    deleteMany?: juriScalarWhereInput | juriScalarWhereInput[]
  }

  export type pesertalombaUpdateManyWithoutLombaNestedInput = {
    create?: XOR<pesertalombaCreateWithoutLombaInput, pesertalombaUncheckedCreateWithoutLombaInput> | pesertalombaCreateWithoutLombaInput[] | pesertalombaUncheckedCreateWithoutLombaInput[]
    connectOrCreate?: pesertalombaCreateOrConnectWithoutLombaInput | pesertalombaCreateOrConnectWithoutLombaInput[]
    upsert?: pesertalombaUpsertWithWhereUniqueWithoutLombaInput | pesertalombaUpsertWithWhereUniqueWithoutLombaInput[]
    createMany?: pesertalombaCreateManyLombaInputEnvelope
    set?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    disconnect?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    delete?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    connect?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    update?: pesertalombaUpdateWithWhereUniqueWithoutLombaInput | pesertalombaUpdateWithWhereUniqueWithoutLombaInput[]
    updateMany?: pesertalombaUpdateManyWithWhereWithoutLombaInput | pesertalombaUpdateManyWithWhereWithoutLombaInput[]
    deleteMany?: pesertalombaScalarWhereInput | pesertalombaScalarWhereInput[]
  }

  export type sertifikatUpdateManyWithoutLombaNestedInput = {
    create?: XOR<sertifikatCreateWithoutLombaInput, sertifikatUncheckedCreateWithoutLombaInput> | sertifikatCreateWithoutLombaInput[] | sertifikatUncheckedCreateWithoutLombaInput[]
    connectOrCreate?: sertifikatCreateOrConnectWithoutLombaInput | sertifikatCreateOrConnectWithoutLombaInput[]
    upsert?: sertifikatUpsertWithWhereUniqueWithoutLombaInput | sertifikatUpsertWithWhereUniqueWithoutLombaInput[]
    createMany?: sertifikatCreateManyLombaInputEnvelope
    set?: sertifikatWhereUniqueInput | sertifikatWhereUniqueInput[]
    disconnect?: sertifikatWhereUniqueInput | sertifikatWhereUniqueInput[]
    delete?: sertifikatWhereUniqueInput | sertifikatWhereUniqueInput[]
    connect?: sertifikatWhereUniqueInput | sertifikatWhereUniqueInput[]
    update?: sertifikatUpdateWithWhereUniqueWithoutLombaInput | sertifikatUpdateWithWhereUniqueWithoutLombaInput[]
    updateMany?: sertifikatUpdateManyWithWhereWithoutLombaInput | sertifikatUpdateManyWithWhereWithoutLombaInput[]
    deleteMany?: sertifikatScalarWhereInput | sertifikatScalarWhereInput[]
  }

  export type juriUncheckedUpdateManyWithoutLombaNestedInput = {
    create?: XOR<juriCreateWithoutLombaInput, juriUncheckedCreateWithoutLombaInput> | juriCreateWithoutLombaInput[] | juriUncheckedCreateWithoutLombaInput[]
    connectOrCreate?: juriCreateOrConnectWithoutLombaInput | juriCreateOrConnectWithoutLombaInput[]
    upsert?: juriUpsertWithWhereUniqueWithoutLombaInput | juriUpsertWithWhereUniqueWithoutLombaInput[]
    createMany?: juriCreateManyLombaInputEnvelope
    set?: juriWhereUniqueInput | juriWhereUniqueInput[]
    disconnect?: juriWhereUniqueInput | juriWhereUniqueInput[]
    delete?: juriWhereUniqueInput | juriWhereUniqueInput[]
    connect?: juriWhereUniqueInput | juriWhereUniqueInput[]
    update?: juriUpdateWithWhereUniqueWithoutLombaInput | juriUpdateWithWhereUniqueWithoutLombaInput[]
    updateMany?: juriUpdateManyWithWhereWithoutLombaInput | juriUpdateManyWithWhereWithoutLombaInput[]
    deleteMany?: juriScalarWhereInput | juriScalarWhereInput[]
  }

  export type pesertalombaUncheckedUpdateManyWithoutLombaNestedInput = {
    create?: XOR<pesertalombaCreateWithoutLombaInput, pesertalombaUncheckedCreateWithoutLombaInput> | pesertalombaCreateWithoutLombaInput[] | pesertalombaUncheckedCreateWithoutLombaInput[]
    connectOrCreate?: pesertalombaCreateOrConnectWithoutLombaInput | pesertalombaCreateOrConnectWithoutLombaInput[]
    upsert?: pesertalombaUpsertWithWhereUniqueWithoutLombaInput | pesertalombaUpsertWithWhereUniqueWithoutLombaInput[]
    createMany?: pesertalombaCreateManyLombaInputEnvelope
    set?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    disconnect?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    delete?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    connect?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    update?: pesertalombaUpdateWithWhereUniqueWithoutLombaInput | pesertalombaUpdateWithWhereUniqueWithoutLombaInput[]
    updateMany?: pesertalombaUpdateManyWithWhereWithoutLombaInput | pesertalombaUpdateManyWithWhereWithoutLombaInput[]
    deleteMany?: pesertalombaScalarWhereInput | pesertalombaScalarWhereInput[]
  }

  export type sertifikatUncheckedUpdateManyWithoutLombaNestedInput = {
    create?: XOR<sertifikatCreateWithoutLombaInput, sertifikatUncheckedCreateWithoutLombaInput> | sertifikatCreateWithoutLombaInput[] | sertifikatUncheckedCreateWithoutLombaInput[]
    connectOrCreate?: sertifikatCreateOrConnectWithoutLombaInput | sertifikatCreateOrConnectWithoutLombaInput[]
    upsert?: sertifikatUpsertWithWhereUniqueWithoutLombaInput | sertifikatUpsertWithWhereUniqueWithoutLombaInput[]
    createMany?: sertifikatCreateManyLombaInputEnvelope
    set?: sertifikatWhereUniqueInput | sertifikatWhereUniqueInput[]
    disconnect?: sertifikatWhereUniqueInput | sertifikatWhereUniqueInput[]
    delete?: sertifikatWhereUniqueInput | sertifikatWhereUniqueInput[]
    connect?: sertifikatWhereUniqueInput | sertifikatWhereUniqueInput[]
    update?: sertifikatUpdateWithWhereUniqueWithoutLombaInput | sertifikatUpdateWithWhereUniqueWithoutLombaInput[]
    updateMany?: sertifikatUpdateManyWithWhereWithoutLombaInput | sertifikatUpdateManyWithWhereWithoutLombaInput[]
    deleteMany?: sertifikatScalarWhereInput | sertifikatScalarWhereInput[]
  }

  export type lombaCreateNestedOneWithoutSertifikatInput = {
    create?: XOR<lombaCreateWithoutSertifikatInput, lombaUncheckedCreateWithoutSertifikatInput>
    connectOrCreate?: lombaCreateOrConnectWithoutSertifikatInput
    connect?: lombaWhereUniqueInput
  }

  export type lombaUpdateOneRequiredWithoutSertifikatNestedInput = {
    create?: XOR<lombaCreateWithoutSertifikatInput, lombaUncheckedCreateWithoutSertifikatInput>
    connectOrCreate?: lombaCreateOrConnectWithoutSertifikatInput
    upsert?: lombaUpsertWithoutSertifikatInput
    connect?: lombaWhereUniqueInput
    update?: XOR<XOR<lombaUpdateToOneWithWhereWithoutSertifikatInput, lombaUpdateWithoutSertifikatInput>, lombaUncheckedUpdateWithoutSertifikatInput>
  }

  export type juriCreateNestedManyWithoutUsersInput = {
    create?: XOR<juriCreateWithoutUsersInput, juriUncheckedCreateWithoutUsersInput> | juriCreateWithoutUsersInput[] | juriUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: juriCreateOrConnectWithoutUsersInput | juriCreateOrConnectWithoutUsersInput[]
    createMany?: juriCreateManyUsersInputEnvelope
    connect?: juriWhereUniqueInput | juriWhereUniqueInput[]
  }

  export type pesertaCreateNestedManyWithoutUsersInput = {
    create?: XOR<pesertaCreateWithoutUsersInput, pesertaUncheckedCreateWithoutUsersInput> | pesertaCreateWithoutUsersInput[] | pesertaUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: pesertaCreateOrConnectWithoutUsersInput | pesertaCreateOrConnectWithoutUsersInput[]
    createMany?: pesertaCreateManyUsersInputEnvelope
    connect?: pesertaWhereUniqueInput | pesertaWhereUniqueInput[]
  }

  export type adminCreateNestedManyWithoutUsersInput = {
    create?: XOR<adminCreateWithoutUsersInput, adminUncheckedCreateWithoutUsersInput> | adminCreateWithoutUsersInput[] | adminUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: adminCreateOrConnectWithoutUsersInput | adminCreateOrConnectWithoutUsersInput[]
    createMany?: adminCreateManyUsersInputEnvelope
    connect?: adminWhereUniqueInput | adminWhereUniqueInput[]
  }

  export type juriUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<juriCreateWithoutUsersInput, juriUncheckedCreateWithoutUsersInput> | juriCreateWithoutUsersInput[] | juriUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: juriCreateOrConnectWithoutUsersInput | juriCreateOrConnectWithoutUsersInput[]
    createMany?: juriCreateManyUsersInputEnvelope
    connect?: juriWhereUniqueInput | juriWhereUniqueInput[]
  }

  export type pesertaUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<pesertaCreateWithoutUsersInput, pesertaUncheckedCreateWithoutUsersInput> | pesertaCreateWithoutUsersInput[] | pesertaUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: pesertaCreateOrConnectWithoutUsersInput | pesertaCreateOrConnectWithoutUsersInput[]
    createMany?: pesertaCreateManyUsersInputEnvelope
    connect?: pesertaWhereUniqueInput | pesertaWhereUniqueInput[]
  }

  export type adminUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<adminCreateWithoutUsersInput, adminUncheckedCreateWithoutUsersInput> | adminCreateWithoutUsersInput[] | adminUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: adminCreateOrConnectWithoutUsersInput | adminCreateOrConnectWithoutUsersInput[]
    createMany?: adminCreateManyUsersInputEnvelope
    connect?: adminWhereUniqueInput | adminWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type juriUpdateManyWithoutUsersNestedInput = {
    create?: XOR<juriCreateWithoutUsersInput, juriUncheckedCreateWithoutUsersInput> | juriCreateWithoutUsersInput[] | juriUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: juriCreateOrConnectWithoutUsersInput | juriCreateOrConnectWithoutUsersInput[]
    upsert?: juriUpsertWithWhereUniqueWithoutUsersInput | juriUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: juriCreateManyUsersInputEnvelope
    set?: juriWhereUniqueInput | juriWhereUniqueInput[]
    disconnect?: juriWhereUniqueInput | juriWhereUniqueInput[]
    delete?: juriWhereUniqueInput | juriWhereUniqueInput[]
    connect?: juriWhereUniqueInput | juriWhereUniqueInput[]
    update?: juriUpdateWithWhereUniqueWithoutUsersInput | juriUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: juriUpdateManyWithWhereWithoutUsersInput | juriUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: juriScalarWhereInput | juriScalarWhereInput[]
  }

  export type pesertaUpdateManyWithoutUsersNestedInput = {
    create?: XOR<pesertaCreateWithoutUsersInput, pesertaUncheckedCreateWithoutUsersInput> | pesertaCreateWithoutUsersInput[] | pesertaUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: pesertaCreateOrConnectWithoutUsersInput | pesertaCreateOrConnectWithoutUsersInput[]
    upsert?: pesertaUpsertWithWhereUniqueWithoutUsersInput | pesertaUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: pesertaCreateManyUsersInputEnvelope
    set?: pesertaWhereUniqueInput | pesertaWhereUniqueInput[]
    disconnect?: pesertaWhereUniqueInput | pesertaWhereUniqueInput[]
    delete?: pesertaWhereUniqueInput | pesertaWhereUniqueInput[]
    connect?: pesertaWhereUniqueInput | pesertaWhereUniqueInput[]
    update?: pesertaUpdateWithWhereUniqueWithoutUsersInput | pesertaUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: pesertaUpdateManyWithWhereWithoutUsersInput | pesertaUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: pesertaScalarWhereInput | pesertaScalarWhereInput[]
  }

  export type adminUpdateManyWithoutUsersNestedInput = {
    create?: XOR<adminCreateWithoutUsersInput, adminUncheckedCreateWithoutUsersInput> | adminCreateWithoutUsersInput[] | adminUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: adminCreateOrConnectWithoutUsersInput | adminCreateOrConnectWithoutUsersInput[]
    upsert?: adminUpsertWithWhereUniqueWithoutUsersInput | adminUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: adminCreateManyUsersInputEnvelope
    set?: adminWhereUniqueInput | adminWhereUniqueInput[]
    disconnect?: adminWhereUniqueInput | adminWhereUniqueInput[]
    delete?: adminWhereUniqueInput | adminWhereUniqueInput[]
    connect?: adminWhereUniqueInput | adminWhereUniqueInput[]
    update?: adminUpdateWithWhereUniqueWithoutUsersInput | adminUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: adminUpdateManyWithWhereWithoutUsersInput | adminUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: adminScalarWhereInput | adminScalarWhereInput[]
  }

  export type juriUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<juriCreateWithoutUsersInput, juriUncheckedCreateWithoutUsersInput> | juriCreateWithoutUsersInput[] | juriUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: juriCreateOrConnectWithoutUsersInput | juriCreateOrConnectWithoutUsersInput[]
    upsert?: juriUpsertWithWhereUniqueWithoutUsersInput | juriUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: juriCreateManyUsersInputEnvelope
    set?: juriWhereUniqueInput | juriWhereUniqueInput[]
    disconnect?: juriWhereUniqueInput | juriWhereUniqueInput[]
    delete?: juriWhereUniqueInput | juriWhereUniqueInput[]
    connect?: juriWhereUniqueInput | juriWhereUniqueInput[]
    update?: juriUpdateWithWhereUniqueWithoutUsersInput | juriUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: juriUpdateManyWithWhereWithoutUsersInput | juriUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: juriScalarWhereInput | juriScalarWhereInput[]
  }

  export type pesertaUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<pesertaCreateWithoutUsersInput, pesertaUncheckedCreateWithoutUsersInput> | pesertaCreateWithoutUsersInput[] | pesertaUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: pesertaCreateOrConnectWithoutUsersInput | pesertaCreateOrConnectWithoutUsersInput[]
    upsert?: pesertaUpsertWithWhereUniqueWithoutUsersInput | pesertaUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: pesertaCreateManyUsersInputEnvelope
    set?: pesertaWhereUniqueInput | pesertaWhereUniqueInput[]
    disconnect?: pesertaWhereUniqueInput | pesertaWhereUniqueInput[]
    delete?: pesertaWhereUniqueInput | pesertaWhereUniqueInput[]
    connect?: pesertaWhereUniqueInput | pesertaWhereUniqueInput[]
    update?: pesertaUpdateWithWhereUniqueWithoutUsersInput | pesertaUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: pesertaUpdateManyWithWhereWithoutUsersInput | pesertaUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: pesertaScalarWhereInput | pesertaScalarWhereInput[]
  }

  export type adminUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<adminCreateWithoutUsersInput, adminUncheckedCreateWithoutUsersInput> | adminCreateWithoutUsersInput[] | adminUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: adminCreateOrConnectWithoutUsersInput | adminCreateOrConnectWithoutUsersInput[]
    upsert?: adminUpsertWithWhereUniqueWithoutUsersInput | adminUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: adminCreateManyUsersInputEnvelope
    set?: adminWhereUniqueInput | adminWhereUniqueInput[]
    disconnect?: adminWhereUniqueInput | adminWhereUniqueInput[]
    delete?: adminWhereUniqueInput | adminWhereUniqueInput[]
    connect?: adminWhereUniqueInput | adminWhereUniqueInput[]
    update?: adminUpdateWithWhereUniqueWithoutUsersInput | adminUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: adminUpdateManyWithWhereWithoutUsersInput | adminUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: adminScalarWhereInput | adminScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutAdminInput = {
    create?: XOR<usersCreateWithoutAdminInput, usersUncheckedCreateWithoutAdminInput>
    connectOrCreate?: usersCreateOrConnectWithoutAdminInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<usersCreateWithoutAdminInput, usersUncheckedCreateWithoutAdminInput>
    connectOrCreate?: usersCreateOrConnectWithoutAdminInput
    upsert?: usersUpsertWithoutAdminInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAdminInput, usersUpdateWithoutAdminInput>, usersUncheckedUpdateWithoutAdminInput>
  }

  export type lombaCreateNestedOneWithoutJuriInput = {
    create?: XOR<lombaCreateWithoutJuriInput, lombaUncheckedCreateWithoutJuriInput>
    connectOrCreate?: lombaCreateOrConnectWithoutJuriInput
    connect?: lombaWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutJuriInput = {
    create?: XOR<usersCreateWithoutJuriInput, usersUncheckedCreateWithoutJuriInput>
    connectOrCreate?: usersCreateOrConnectWithoutJuriInput
    connect?: usersWhereUniqueInput
  }

  export type penilaianCreateNestedManyWithoutJuriInput = {
    create?: XOR<penilaianCreateWithoutJuriInput, penilaianUncheckedCreateWithoutJuriInput> | penilaianCreateWithoutJuriInput[] | penilaianUncheckedCreateWithoutJuriInput[]
    connectOrCreate?: penilaianCreateOrConnectWithoutJuriInput | penilaianCreateOrConnectWithoutJuriInput[]
    createMany?: penilaianCreateManyJuriInputEnvelope
    connect?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
  }

  export type penilaianUncheckedCreateNestedManyWithoutJuriInput = {
    create?: XOR<penilaianCreateWithoutJuriInput, penilaianUncheckedCreateWithoutJuriInput> | penilaianCreateWithoutJuriInput[] | penilaianUncheckedCreateWithoutJuriInput[]
    connectOrCreate?: penilaianCreateOrConnectWithoutJuriInput | penilaianCreateOrConnectWithoutJuriInput[]
    createMany?: penilaianCreateManyJuriInputEnvelope
    connect?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
  }

  export type lombaUpdateOneRequiredWithoutJuriNestedInput = {
    create?: XOR<lombaCreateWithoutJuriInput, lombaUncheckedCreateWithoutJuriInput>
    connectOrCreate?: lombaCreateOrConnectWithoutJuriInput
    upsert?: lombaUpsertWithoutJuriInput
    connect?: lombaWhereUniqueInput
    update?: XOR<XOR<lombaUpdateToOneWithWhereWithoutJuriInput, lombaUpdateWithoutJuriInput>, lombaUncheckedUpdateWithoutJuriInput>
  }

  export type usersUpdateOneRequiredWithoutJuriNestedInput = {
    create?: XOR<usersCreateWithoutJuriInput, usersUncheckedCreateWithoutJuriInput>
    connectOrCreate?: usersCreateOrConnectWithoutJuriInput
    upsert?: usersUpsertWithoutJuriInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutJuriInput, usersUpdateWithoutJuriInput>, usersUncheckedUpdateWithoutJuriInput>
  }

  export type penilaianUpdateManyWithoutJuriNestedInput = {
    create?: XOR<penilaianCreateWithoutJuriInput, penilaianUncheckedCreateWithoutJuriInput> | penilaianCreateWithoutJuriInput[] | penilaianUncheckedCreateWithoutJuriInput[]
    connectOrCreate?: penilaianCreateOrConnectWithoutJuriInput | penilaianCreateOrConnectWithoutJuriInput[]
    upsert?: penilaianUpsertWithWhereUniqueWithoutJuriInput | penilaianUpsertWithWhereUniqueWithoutJuriInput[]
    createMany?: penilaianCreateManyJuriInputEnvelope
    set?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    disconnect?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    delete?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    connect?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    update?: penilaianUpdateWithWhereUniqueWithoutJuriInput | penilaianUpdateWithWhereUniqueWithoutJuriInput[]
    updateMany?: penilaianUpdateManyWithWhereWithoutJuriInput | penilaianUpdateManyWithWhereWithoutJuriInput[]
    deleteMany?: penilaianScalarWhereInput | penilaianScalarWhereInput[]
  }

  export type penilaianUncheckedUpdateManyWithoutJuriNestedInput = {
    create?: XOR<penilaianCreateWithoutJuriInput, penilaianUncheckedCreateWithoutJuriInput> | penilaianCreateWithoutJuriInput[] | penilaianUncheckedCreateWithoutJuriInput[]
    connectOrCreate?: penilaianCreateOrConnectWithoutJuriInput | penilaianCreateOrConnectWithoutJuriInput[]
    upsert?: penilaianUpsertWithWhereUniqueWithoutJuriInput | penilaianUpsertWithWhereUniqueWithoutJuriInput[]
    createMany?: penilaianCreateManyJuriInputEnvelope
    set?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    disconnect?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    delete?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    connect?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    update?: penilaianUpdateWithWhereUniqueWithoutJuriInput | penilaianUpdateWithWhereUniqueWithoutJuriInput[]
    updateMany?: penilaianUpdateManyWithWhereWithoutJuriInput | penilaianUpdateManyWithWhereWithoutJuriInput[]
    deleteMany?: penilaianScalarWhereInput | penilaianScalarWhereInput[]
  }

  export type juriCreateNestedOneWithoutPenilaianInput = {
    create?: XOR<juriCreateWithoutPenilaianInput, juriUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: juriCreateOrConnectWithoutPenilaianInput
    connect?: juriWhereUniqueInput
  }

  export type pesertalombaCreateNestedOneWithoutPenilaianInput = {
    create?: XOR<pesertalombaCreateWithoutPenilaianInput, pesertalombaUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: pesertalombaCreateOrConnectWithoutPenilaianInput
    connect?: pesertalombaWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type juriUpdateOneRequiredWithoutPenilaianNestedInput = {
    create?: XOR<juriCreateWithoutPenilaianInput, juriUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: juriCreateOrConnectWithoutPenilaianInput
    upsert?: juriUpsertWithoutPenilaianInput
    connect?: juriWhereUniqueInput
    update?: XOR<XOR<juriUpdateToOneWithWhereWithoutPenilaianInput, juriUpdateWithoutPenilaianInput>, juriUncheckedUpdateWithoutPenilaianInput>
  }

  export type pesertalombaUpdateOneRequiredWithoutPenilaianNestedInput = {
    create?: XOR<pesertalombaCreateWithoutPenilaianInput, pesertalombaUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: pesertalombaCreateOrConnectWithoutPenilaianInput
    upsert?: pesertalombaUpsertWithoutPenilaianInput
    connect?: pesertalombaWhereUniqueInput
    update?: XOR<XOR<pesertalombaUpdateToOneWithWhereWithoutPenilaianInput, pesertalombaUpdateWithoutPenilaianInput>, pesertalombaUncheckedUpdateWithoutPenilaianInput>
  }

  export type usersCreateNestedOneWithoutPesertaInput = {
    create?: XOR<usersCreateWithoutPesertaInput, usersUncheckedCreateWithoutPesertaInput>
    connectOrCreate?: usersCreateOrConnectWithoutPesertaInput
    connect?: usersWhereUniqueInput
  }

  export type pesertalombaCreateNestedManyWithoutPesertaInput = {
    create?: XOR<pesertalombaCreateWithoutPesertaInput, pesertalombaUncheckedCreateWithoutPesertaInput> | pesertalombaCreateWithoutPesertaInput[] | pesertalombaUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: pesertalombaCreateOrConnectWithoutPesertaInput | pesertalombaCreateOrConnectWithoutPesertaInput[]
    createMany?: pesertalombaCreateManyPesertaInputEnvelope
    connect?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
  }

  export type pesertalombaUncheckedCreateNestedManyWithoutPesertaInput = {
    create?: XOR<pesertalombaCreateWithoutPesertaInput, pesertalombaUncheckedCreateWithoutPesertaInput> | pesertalombaCreateWithoutPesertaInput[] | pesertalombaUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: pesertalombaCreateOrConnectWithoutPesertaInput | pesertalombaCreateOrConnectWithoutPesertaInput[]
    createMany?: pesertalombaCreateManyPesertaInputEnvelope
    connect?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutPesertaNestedInput = {
    create?: XOR<usersCreateWithoutPesertaInput, usersUncheckedCreateWithoutPesertaInput>
    connectOrCreate?: usersCreateOrConnectWithoutPesertaInput
    upsert?: usersUpsertWithoutPesertaInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPesertaInput, usersUpdateWithoutPesertaInput>, usersUncheckedUpdateWithoutPesertaInput>
  }

  export type pesertalombaUpdateManyWithoutPesertaNestedInput = {
    create?: XOR<pesertalombaCreateWithoutPesertaInput, pesertalombaUncheckedCreateWithoutPesertaInput> | pesertalombaCreateWithoutPesertaInput[] | pesertalombaUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: pesertalombaCreateOrConnectWithoutPesertaInput | pesertalombaCreateOrConnectWithoutPesertaInput[]
    upsert?: pesertalombaUpsertWithWhereUniqueWithoutPesertaInput | pesertalombaUpsertWithWhereUniqueWithoutPesertaInput[]
    createMany?: pesertalombaCreateManyPesertaInputEnvelope
    set?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    disconnect?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    delete?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    connect?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    update?: pesertalombaUpdateWithWhereUniqueWithoutPesertaInput | pesertalombaUpdateWithWhereUniqueWithoutPesertaInput[]
    updateMany?: pesertalombaUpdateManyWithWhereWithoutPesertaInput | pesertalombaUpdateManyWithWhereWithoutPesertaInput[]
    deleteMany?: pesertalombaScalarWhereInput | pesertalombaScalarWhereInput[]
  }

  export type pesertalombaUncheckedUpdateManyWithoutPesertaNestedInput = {
    create?: XOR<pesertalombaCreateWithoutPesertaInput, pesertalombaUncheckedCreateWithoutPesertaInput> | pesertalombaCreateWithoutPesertaInput[] | pesertalombaUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: pesertalombaCreateOrConnectWithoutPesertaInput | pesertalombaCreateOrConnectWithoutPesertaInput[]
    upsert?: pesertalombaUpsertWithWhereUniqueWithoutPesertaInput | pesertalombaUpsertWithWhereUniqueWithoutPesertaInput[]
    createMany?: pesertalombaCreateManyPesertaInputEnvelope
    set?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    disconnect?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    delete?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    connect?: pesertalombaWhereUniqueInput | pesertalombaWhereUniqueInput[]
    update?: pesertalombaUpdateWithWhereUniqueWithoutPesertaInput | pesertalombaUpdateWithWhereUniqueWithoutPesertaInput[]
    updateMany?: pesertalombaUpdateManyWithWhereWithoutPesertaInput | pesertalombaUpdateManyWithWhereWithoutPesertaInput[]
    deleteMany?: pesertalombaScalarWhereInput | pesertalombaScalarWhereInput[]
  }

  export type penilaianCreateNestedManyWithoutPesertalombaInput = {
    create?: XOR<penilaianCreateWithoutPesertalombaInput, penilaianUncheckedCreateWithoutPesertalombaInput> | penilaianCreateWithoutPesertalombaInput[] | penilaianUncheckedCreateWithoutPesertalombaInput[]
    connectOrCreate?: penilaianCreateOrConnectWithoutPesertalombaInput | penilaianCreateOrConnectWithoutPesertalombaInput[]
    createMany?: penilaianCreateManyPesertalombaInputEnvelope
    connect?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
  }

  export type lombaCreateNestedOneWithoutPesertalombaInput = {
    create?: XOR<lombaCreateWithoutPesertalombaInput, lombaUncheckedCreateWithoutPesertalombaInput>
    connectOrCreate?: lombaCreateOrConnectWithoutPesertalombaInput
    connect?: lombaWhereUniqueInput
  }

  export type pesertaCreateNestedOneWithoutPesertalombaInput = {
    create?: XOR<pesertaCreateWithoutPesertalombaInput, pesertaUncheckedCreateWithoutPesertalombaInput>
    connectOrCreate?: pesertaCreateOrConnectWithoutPesertalombaInput
    connect?: pesertaWhereUniqueInput
  }

  export type penilaianUncheckedCreateNestedManyWithoutPesertalombaInput = {
    create?: XOR<penilaianCreateWithoutPesertalombaInput, penilaianUncheckedCreateWithoutPesertalombaInput> | penilaianCreateWithoutPesertalombaInput[] | penilaianUncheckedCreateWithoutPesertalombaInput[]
    connectOrCreate?: penilaianCreateOrConnectWithoutPesertalombaInput | penilaianCreateOrConnectWithoutPesertalombaInput[]
    createMany?: penilaianCreateManyPesertalombaInputEnvelope
    connect?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type penilaianUpdateManyWithoutPesertalombaNestedInput = {
    create?: XOR<penilaianCreateWithoutPesertalombaInput, penilaianUncheckedCreateWithoutPesertalombaInput> | penilaianCreateWithoutPesertalombaInput[] | penilaianUncheckedCreateWithoutPesertalombaInput[]
    connectOrCreate?: penilaianCreateOrConnectWithoutPesertalombaInput | penilaianCreateOrConnectWithoutPesertalombaInput[]
    upsert?: penilaianUpsertWithWhereUniqueWithoutPesertalombaInput | penilaianUpsertWithWhereUniqueWithoutPesertalombaInput[]
    createMany?: penilaianCreateManyPesertalombaInputEnvelope
    set?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    disconnect?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    delete?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    connect?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    update?: penilaianUpdateWithWhereUniqueWithoutPesertalombaInput | penilaianUpdateWithWhereUniqueWithoutPesertalombaInput[]
    updateMany?: penilaianUpdateManyWithWhereWithoutPesertalombaInput | penilaianUpdateManyWithWhereWithoutPesertalombaInput[]
    deleteMany?: penilaianScalarWhereInput | penilaianScalarWhereInput[]
  }

  export type lombaUpdateOneRequiredWithoutPesertalombaNestedInput = {
    create?: XOR<lombaCreateWithoutPesertalombaInput, lombaUncheckedCreateWithoutPesertalombaInput>
    connectOrCreate?: lombaCreateOrConnectWithoutPesertalombaInput
    upsert?: lombaUpsertWithoutPesertalombaInput
    connect?: lombaWhereUniqueInput
    update?: XOR<XOR<lombaUpdateToOneWithWhereWithoutPesertalombaInput, lombaUpdateWithoutPesertalombaInput>, lombaUncheckedUpdateWithoutPesertalombaInput>
  }

  export type pesertaUpdateOneRequiredWithoutPesertalombaNestedInput = {
    create?: XOR<pesertaCreateWithoutPesertalombaInput, pesertaUncheckedCreateWithoutPesertalombaInput>
    connectOrCreate?: pesertaCreateOrConnectWithoutPesertalombaInput
    upsert?: pesertaUpsertWithoutPesertalombaInput
    connect?: pesertaWhereUniqueInput
    update?: XOR<XOR<pesertaUpdateToOneWithWhereWithoutPesertalombaInput, pesertaUpdateWithoutPesertalombaInput>, pesertaUncheckedUpdateWithoutPesertalombaInput>
  }

  export type penilaianUncheckedUpdateManyWithoutPesertalombaNestedInput = {
    create?: XOR<penilaianCreateWithoutPesertalombaInput, penilaianUncheckedCreateWithoutPesertalombaInput> | penilaianCreateWithoutPesertalombaInput[] | penilaianUncheckedCreateWithoutPesertalombaInput[]
    connectOrCreate?: penilaianCreateOrConnectWithoutPesertalombaInput | penilaianCreateOrConnectWithoutPesertalombaInput[]
    upsert?: penilaianUpsertWithWhereUniqueWithoutPesertalombaInput | penilaianUpsertWithWhereUniqueWithoutPesertalombaInput[]
    createMany?: penilaianCreateManyPesertalombaInputEnvelope
    set?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    disconnect?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    delete?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    connect?: penilaianWhereUniqueInput | penilaianWhereUniqueInput[]
    update?: penilaianUpdateWithWhereUniqueWithoutPesertalombaInput | penilaianUpdateWithWhereUniqueWithoutPesertalombaInput[]
    updateMany?: penilaianUpdateManyWithWhereWithoutPesertalombaInput | penilaianUpdateManyWithWhereWithoutPesertalombaInput[]
    deleteMany?: penilaianScalarWhereInput | penilaianScalarWhereInput[]
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

  export type NestedEnumJenis_lombaFilter<$PrismaModel = never> = {
    equals?: $Enums.Jenis_lomba | EnumJenis_lombaFieldRefInput<$PrismaModel>
    in?: $Enums.Jenis_lomba[] | ListEnumJenis_lombaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jenis_lomba[] | ListEnumJenis_lombaFieldRefInput<$PrismaModel>
    not?: NestedEnumJenis_lombaFilter<$PrismaModel> | $Enums.Jenis_lomba
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

  export type NestedEnumJenis_lombaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Jenis_lomba | EnumJenis_lombaFieldRefInput<$PrismaModel>
    in?: $Enums.Jenis_lomba[] | ListEnumJenis_lombaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jenis_lomba[] | ListEnumJenis_lombaFieldRefInput<$PrismaModel>
    not?: NestedEnumJenis_lombaWithAggregatesFilter<$PrismaModel> | $Enums.Jenis_lomba
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenis_lombaFilter<$PrismaModel>
    _max?: NestedEnumJenis_lombaFilter<$PrismaModel>
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type juriCreateWithoutLombaInput = {
    id?: string
    nama: string
    created_at?: Date | string
    users: usersCreateNestedOneWithoutJuriInput
    penilaian?: penilaianCreateNestedManyWithoutJuriInput
  }

  export type juriUncheckedCreateWithoutLombaInput = {
    id?: string
    nama: string
    created_at?: Date | string
    users_id: string
    penilaian?: penilaianUncheckedCreateNestedManyWithoutJuriInput
  }

  export type juriCreateOrConnectWithoutLombaInput = {
    where: juriWhereUniqueInput
    create: XOR<juriCreateWithoutLombaInput, juriUncheckedCreateWithoutLombaInput>
  }

  export type juriCreateManyLombaInputEnvelope = {
    data: juriCreateManyLombaInput | juriCreateManyLombaInput[]
    skipDuplicates?: boolean
  }

  export type pesertalombaCreateWithoutLombaInput = {
    id?: number
    id_pesertalomba: string
    submit?: string | null
    submission_time?: Date | string | null
    penilaian?: penilaianCreateNestedManyWithoutPesertalombaInput
    peserta: pesertaCreateNestedOneWithoutPesertalombaInput
  }

  export type pesertalombaUncheckedCreateWithoutLombaInput = {
    id?: number
    peserta_id: string
    id_pesertalomba: string
    submit?: string | null
    submission_time?: Date | string | null
    penilaian?: penilaianUncheckedCreateNestedManyWithoutPesertalombaInput
  }

  export type pesertalombaCreateOrConnectWithoutLombaInput = {
    where: pesertalombaWhereUniqueInput
    create: XOR<pesertalombaCreateWithoutLombaInput, pesertalombaUncheckedCreateWithoutLombaInput>
  }

  export type pesertalombaCreateManyLombaInputEnvelope = {
    data: pesertalombaCreateManyLombaInput | pesertalombaCreateManyLombaInput[]
    skipDuplicates?: boolean
  }

  export type sertifikatCreateWithoutLombaInput = {
    id: string
    url: string
  }

  export type sertifikatUncheckedCreateWithoutLombaInput = {
    id: string
    url: string
  }

  export type sertifikatCreateOrConnectWithoutLombaInput = {
    where: sertifikatWhereUniqueInput
    create: XOR<sertifikatCreateWithoutLombaInput, sertifikatUncheckedCreateWithoutLombaInput>
  }

  export type sertifikatCreateManyLombaInputEnvelope = {
    data: sertifikatCreateManyLombaInput | sertifikatCreateManyLombaInput[]
    skipDuplicates?: boolean
  }

  export type juriUpsertWithWhereUniqueWithoutLombaInput = {
    where: juriWhereUniqueInput
    update: XOR<juriUpdateWithoutLombaInput, juriUncheckedUpdateWithoutLombaInput>
    create: XOR<juriCreateWithoutLombaInput, juriUncheckedCreateWithoutLombaInput>
  }

  export type juriUpdateWithWhereUniqueWithoutLombaInput = {
    where: juriWhereUniqueInput
    data: XOR<juriUpdateWithoutLombaInput, juriUncheckedUpdateWithoutLombaInput>
  }

  export type juriUpdateManyWithWhereWithoutLombaInput = {
    where: juriScalarWhereInput
    data: XOR<juriUpdateManyMutationInput, juriUncheckedUpdateManyWithoutLombaInput>
  }

  export type juriScalarWhereInput = {
    AND?: juriScalarWhereInput | juriScalarWhereInput[]
    OR?: juriScalarWhereInput[]
    NOT?: juriScalarWhereInput | juriScalarWhereInput[]
    id?: UuidFilter<"juri"> | string
    nama?: StringFilter<"juri"> | string
    lomba_id?: StringFilter<"juri"> | string
    created_at?: DateTimeFilter<"juri"> | Date | string
    users_id?: UuidFilter<"juri"> | string
  }

  export type pesertalombaUpsertWithWhereUniqueWithoutLombaInput = {
    where: pesertalombaWhereUniqueInput
    update: XOR<pesertalombaUpdateWithoutLombaInput, pesertalombaUncheckedUpdateWithoutLombaInput>
    create: XOR<pesertalombaCreateWithoutLombaInput, pesertalombaUncheckedCreateWithoutLombaInput>
  }

  export type pesertalombaUpdateWithWhereUniqueWithoutLombaInput = {
    where: pesertalombaWhereUniqueInput
    data: XOR<pesertalombaUpdateWithoutLombaInput, pesertalombaUncheckedUpdateWithoutLombaInput>
  }

  export type pesertalombaUpdateManyWithWhereWithoutLombaInput = {
    where: pesertalombaScalarWhereInput
    data: XOR<pesertalombaUpdateManyMutationInput, pesertalombaUncheckedUpdateManyWithoutLombaInput>
  }

  export type pesertalombaScalarWhereInput = {
    AND?: pesertalombaScalarWhereInput | pesertalombaScalarWhereInput[]
    OR?: pesertalombaScalarWhereInput[]
    NOT?: pesertalombaScalarWhereInput | pesertalombaScalarWhereInput[]
    id?: IntFilter<"pesertalomba"> | number
    peserta_id?: UuidFilter<"pesertalomba"> | string
    lomba_id?: StringFilter<"pesertalomba"> | string
    id_pesertalomba?: StringFilter<"pesertalomba"> | string
    submit?: StringNullableFilter<"pesertalomba"> | string | null
    submission_time?: DateTimeNullableFilter<"pesertalomba"> | Date | string | null
  }

  export type sertifikatUpsertWithWhereUniqueWithoutLombaInput = {
    where: sertifikatWhereUniqueInput
    update: XOR<sertifikatUpdateWithoutLombaInput, sertifikatUncheckedUpdateWithoutLombaInput>
    create: XOR<sertifikatCreateWithoutLombaInput, sertifikatUncheckedCreateWithoutLombaInput>
  }

  export type sertifikatUpdateWithWhereUniqueWithoutLombaInput = {
    where: sertifikatWhereUniqueInput
    data: XOR<sertifikatUpdateWithoutLombaInput, sertifikatUncheckedUpdateWithoutLombaInput>
  }

  export type sertifikatUpdateManyWithWhereWithoutLombaInput = {
    where: sertifikatScalarWhereInput
    data: XOR<sertifikatUpdateManyMutationInput, sertifikatUncheckedUpdateManyWithoutLombaInput>
  }

  export type sertifikatScalarWhereInput = {
    AND?: sertifikatScalarWhereInput | sertifikatScalarWhereInput[]
    OR?: sertifikatScalarWhereInput[]
    NOT?: sertifikatScalarWhereInput | sertifikatScalarWhereInput[]
    id?: StringFilter<"sertifikat"> | string
    url?: StringFilter<"sertifikat"> | string
    lomba_id?: StringFilter<"sertifikat"> | string
  }

  export type lombaCreateWithoutSertifikatInput = {
    id: string
    tanggal: Date | string
    jenis_lomba: $Enums.Jenis_lomba
    lokasi: string
    nama: string
    url: string
    bataswaktu: Date | string
    deskripsi?: string | null
    juri?: juriCreateNestedManyWithoutLombaInput
    pesertalomba?: pesertalombaCreateNestedManyWithoutLombaInput
  }

  export type lombaUncheckedCreateWithoutSertifikatInput = {
    id: string
    tanggal: Date | string
    jenis_lomba: $Enums.Jenis_lomba
    lokasi: string
    nama: string
    url: string
    bataswaktu: Date | string
    deskripsi?: string | null
    juri?: juriUncheckedCreateNestedManyWithoutLombaInput
    pesertalomba?: pesertalombaUncheckedCreateNestedManyWithoutLombaInput
  }

  export type lombaCreateOrConnectWithoutSertifikatInput = {
    where: lombaWhereUniqueInput
    create: XOR<lombaCreateWithoutSertifikatInput, lombaUncheckedCreateWithoutSertifikatInput>
  }

  export type lombaUpsertWithoutSertifikatInput = {
    update: XOR<lombaUpdateWithoutSertifikatInput, lombaUncheckedUpdateWithoutSertifikatInput>
    create: XOR<lombaCreateWithoutSertifikatInput, lombaUncheckedCreateWithoutSertifikatInput>
    where?: lombaWhereInput
  }

  export type lombaUpdateToOneWithWhereWithoutSertifikatInput = {
    where?: lombaWhereInput
    data: XOR<lombaUpdateWithoutSertifikatInput, lombaUncheckedUpdateWithoutSertifikatInput>
  }

  export type lombaUpdateWithoutSertifikatInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_lomba?: EnumJenis_lombaFieldUpdateOperationsInput | $Enums.Jenis_lomba
    lokasi?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bataswaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    juri?: juriUpdateManyWithoutLombaNestedInput
    pesertalomba?: pesertalombaUpdateManyWithoutLombaNestedInput
  }

  export type lombaUncheckedUpdateWithoutSertifikatInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_lomba?: EnumJenis_lombaFieldUpdateOperationsInput | $Enums.Jenis_lomba
    lokasi?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bataswaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    juri?: juriUncheckedUpdateManyWithoutLombaNestedInput
    pesertalomba?: pesertalombaUncheckedUpdateManyWithoutLombaNestedInput
  }

  export type juriCreateWithoutUsersInput = {
    id?: string
    nama: string
    created_at?: Date | string
    lomba: lombaCreateNestedOneWithoutJuriInput
    penilaian?: penilaianCreateNestedManyWithoutJuriInput
  }

  export type juriUncheckedCreateWithoutUsersInput = {
    id?: string
    nama: string
    lomba_id: string
    created_at?: Date | string
    penilaian?: penilaianUncheckedCreateNestedManyWithoutJuriInput
  }

  export type juriCreateOrConnectWithoutUsersInput = {
    where: juriWhereUniqueInput
    create: XOR<juriCreateWithoutUsersInput, juriUncheckedCreateWithoutUsersInput>
  }

  export type juriCreateManyUsersInputEnvelope = {
    data: juriCreateManyUsersInput | juriCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type pesertaCreateWithoutUsersInput = {
    id?: string
    nama: string
    created_at?: Date | string
    pesertalomba?: pesertalombaCreateNestedManyWithoutPesertaInput
  }

  export type pesertaUncheckedCreateWithoutUsersInput = {
    id?: string
    nama: string
    created_at?: Date | string
    pesertalomba?: pesertalombaUncheckedCreateNestedManyWithoutPesertaInput
  }

  export type pesertaCreateOrConnectWithoutUsersInput = {
    where: pesertaWhereUniqueInput
    create: XOR<pesertaCreateWithoutUsersInput, pesertaUncheckedCreateWithoutUsersInput>
  }

  export type pesertaCreateManyUsersInputEnvelope = {
    data: pesertaCreateManyUsersInput | pesertaCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type adminCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
  }

  export type adminUncheckedCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
  }

  export type adminCreateOrConnectWithoutUsersInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutUsersInput, adminUncheckedCreateWithoutUsersInput>
  }

  export type adminCreateManyUsersInputEnvelope = {
    data: adminCreateManyUsersInput | adminCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type juriUpsertWithWhereUniqueWithoutUsersInput = {
    where: juriWhereUniqueInput
    update: XOR<juriUpdateWithoutUsersInput, juriUncheckedUpdateWithoutUsersInput>
    create: XOR<juriCreateWithoutUsersInput, juriUncheckedCreateWithoutUsersInput>
  }

  export type juriUpdateWithWhereUniqueWithoutUsersInput = {
    where: juriWhereUniqueInput
    data: XOR<juriUpdateWithoutUsersInput, juriUncheckedUpdateWithoutUsersInput>
  }

  export type juriUpdateManyWithWhereWithoutUsersInput = {
    where: juriScalarWhereInput
    data: XOR<juriUpdateManyMutationInput, juriUncheckedUpdateManyWithoutUsersInput>
  }

  export type pesertaUpsertWithWhereUniqueWithoutUsersInput = {
    where: pesertaWhereUniqueInput
    update: XOR<pesertaUpdateWithoutUsersInput, pesertaUncheckedUpdateWithoutUsersInput>
    create: XOR<pesertaCreateWithoutUsersInput, pesertaUncheckedCreateWithoutUsersInput>
  }

  export type pesertaUpdateWithWhereUniqueWithoutUsersInput = {
    where: pesertaWhereUniqueInput
    data: XOR<pesertaUpdateWithoutUsersInput, pesertaUncheckedUpdateWithoutUsersInput>
  }

  export type pesertaUpdateManyWithWhereWithoutUsersInput = {
    where: pesertaScalarWhereInput
    data: XOR<pesertaUpdateManyMutationInput, pesertaUncheckedUpdateManyWithoutUsersInput>
  }

  export type pesertaScalarWhereInput = {
    AND?: pesertaScalarWhereInput | pesertaScalarWhereInput[]
    OR?: pesertaScalarWhereInput[]
    NOT?: pesertaScalarWhereInput | pesertaScalarWhereInput[]
    id?: UuidFilter<"peserta"> | string
    nama?: StringFilter<"peserta"> | string
    users_id?: UuidFilter<"peserta"> | string
    created_at?: DateTimeFilter<"peserta"> | Date | string
  }

  export type adminUpsertWithWhereUniqueWithoutUsersInput = {
    where: adminWhereUniqueInput
    update: XOR<adminUpdateWithoutUsersInput, adminUncheckedUpdateWithoutUsersInput>
    create: XOR<adminCreateWithoutUsersInput, adminUncheckedCreateWithoutUsersInput>
  }

  export type adminUpdateWithWhereUniqueWithoutUsersInput = {
    where: adminWhereUniqueInput
    data: XOR<adminUpdateWithoutUsersInput, adminUncheckedUpdateWithoutUsersInput>
  }

  export type adminUpdateManyWithWhereWithoutUsersInput = {
    where: adminScalarWhereInput
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyWithoutUsersInput>
  }

  export type adminScalarWhereInput = {
    AND?: adminScalarWhereInput | adminScalarWhereInput[]
    OR?: adminScalarWhereInput[]
    NOT?: adminScalarWhereInput | adminScalarWhereInput[]
    id?: UuidFilter<"admin"> | string
    users_id?: UuidFilter<"admin"> | string
    created_at?: DateTimeFilter<"admin"> | Date | string
  }

  export type usersCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    nama: string
    role?: $Enums.Role
    juri?: juriCreateNestedManyWithoutUsersInput
    peserta?: pesertaCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    nama: string
    role?: $Enums.Role
    juri?: juriUncheckedCreateNestedManyWithoutUsersInput
    peserta?: pesertaUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAdminInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAdminInput, usersUncheckedCreateWithoutAdminInput>
  }

  export type usersUpsertWithoutAdminInput = {
    update: XOR<usersUpdateWithoutAdminInput, usersUncheckedUpdateWithoutAdminInput>
    create: XOR<usersCreateWithoutAdminInput, usersUncheckedCreateWithoutAdminInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAdminInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAdminInput, usersUncheckedUpdateWithoutAdminInput>
  }

  export type usersUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    juri?: juriUpdateManyWithoutUsersNestedInput
    peserta?: pesertaUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    juri?: juriUncheckedUpdateManyWithoutUsersNestedInput
    peserta?: pesertaUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type lombaCreateWithoutJuriInput = {
    id: string
    tanggal: Date | string
    jenis_lomba: $Enums.Jenis_lomba
    lokasi: string
    nama: string
    url: string
    bataswaktu: Date | string
    deskripsi?: string | null
    pesertalomba?: pesertalombaCreateNestedManyWithoutLombaInput
    sertifikat?: sertifikatCreateNestedManyWithoutLombaInput
  }

  export type lombaUncheckedCreateWithoutJuriInput = {
    id: string
    tanggal: Date | string
    jenis_lomba: $Enums.Jenis_lomba
    lokasi: string
    nama: string
    url: string
    bataswaktu: Date | string
    deskripsi?: string | null
    pesertalomba?: pesertalombaUncheckedCreateNestedManyWithoutLombaInput
    sertifikat?: sertifikatUncheckedCreateNestedManyWithoutLombaInput
  }

  export type lombaCreateOrConnectWithoutJuriInput = {
    where: lombaWhereUniqueInput
    create: XOR<lombaCreateWithoutJuriInput, lombaUncheckedCreateWithoutJuriInput>
  }

  export type usersCreateWithoutJuriInput = {
    id?: string
    email: string
    password: string
    nama: string
    role?: $Enums.Role
    peserta?: pesertaCreateNestedManyWithoutUsersInput
    admin?: adminCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutJuriInput = {
    id?: string
    email: string
    password: string
    nama: string
    role?: $Enums.Role
    peserta?: pesertaUncheckedCreateNestedManyWithoutUsersInput
    admin?: adminUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutJuriInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutJuriInput, usersUncheckedCreateWithoutJuriInput>
  }

  export type penilaianCreateWithoutJuriInput = {
    status_penilaian: string
    nilai_penilaian?: Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: string | null
    pesertalomba: pesertalombaCreateNestedOneWithoutPenilaianInput
  }

  export type penilaianUncheckedCreateWithoutJuriInput = {
    pesertalomba_id: string
    pesertalomba_id1: string
    pesertalomba_id_pesetalomba: string
    status_penilaian: string
    nilai_penilaian?: Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: string | null
  }

  export type penilaianCreateOrConnectWithoutJuriInput = {
    where: penilaianWhereUniqueInput
    create: XOR<penilaianCreateWithoutJuriInput, penilaianUncheckedCreateWithoutJuriInput>
  }

  export type penilaianCreateManyJuriInputEnvelope = {
    data: penilaianCreateManyJuriInput | penilaianCreateManyJuriInput[]
    skipDuplicates?: boolean
  }

  export type lombaUpsertWithoutJuriInput = {
    update: XOR<lombaUpdateWithoutJuriInput, lombaUncheckedUpdateWithoutJuriInput>
    create: XOR<lombaCreateWithoutJuriInput, lombaUncheckedCreateWithoutJuriInput>
    where?: lombaWhereInput
  }

  export type lombaUpdateToOneWithWhereWithoutJuriInput = {
    where?: lombaWhereInput
    data: XOR<lombaUpdateWithoutJuriInput, lombaUncheckedUpdateWithoutJuriInput>
  }

  export type lombaUpdateWithoutJuriInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_lomba?: EnumJenis_lombaFieldUpdateOperationsInput | $Enums.Jenis_lomba
    lokasi?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bataswaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pesertalomba?: pesertalombaUpdateManyWithoutLombaNestedInput
    sertifikat?: sertifikatUpdateManyWithoutLombaNestedInput
  }

  export type lombaUncheckedUpdateWithoutJuriInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_lomba?: EnumJenis_lombaFieldUpdateOperationsInput | $Enums.Jenis_lomba
    lokasi?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bataswaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pesertalomba?: pesertalombaUncheckedUpdateManyWithoutLombaNestedInput
    sertifikat?: sertifikatUncheckedUpdateManyWithoutLombaNestedInput
  }

  export type usersUpsertWithoutJuriInput = {
    update: XOR<usersUpdateWithoutJuriInput, usersUncheckedUpdateWithoutJuriInput>
    create: XOR<usersCreateWithoutJuriInput, usersUncheckedCreateWithoutJuriInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutJuriInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutJuriInput, usersUncheckedUpdateWithoutJuriInput>
  }

  export type usersUpdateWithoutJuriInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    peserta?: pesertaUpdateManyWithoutUsersNestedInput
    admin?: adminUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutJuriInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    peserta?: pesertaUncheckedUpdateManyWithoutUsersNestedInput
    admin?: adminUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type penilaianUpsertWithWhereUniqueWithoutJuriInput = {
    where: penilaianWhereUniqueInput
    update: XOR<penilaianUpdateWithoutJuriInput, penilaianUncheckedUpdateWithoutJuriInput>
    create: XOR<penilaianCreateWithoutJuriInput, penilaianUncheckedCreateWithoutJuriInput>
  }

  export type penilaianUpdateWithWhereUniqueWithoutJuriInput = {
    where: penilaianWhereUniqueInput
    data: XOR<penilaianUpdateWithoutJuriInput, penilaianUncheckedUpdateWithoutJuriInput>
  }

  export type penilaianUpdateManyWithWhereWithoutJuriInput = {
    where: penilaianScalarWhereInput
    data: XOR<penilaianUpdateManyMutationInput, penilaianUncheckedUpdateManyWithoutJuriInput>
  }

  export type penilaianScalarWhereInput = {
    AND?: penilaianScalarWhereInput | penilaianScalarWhereInput[]
    OR?: penilaianScalarWhereInput[]
    NOT?: penilaianScalarWhereInput | penilaianScalarWhereInput[]
    juri_id?: UuidFilter<"penilaian"> | string
    pesertalomba_id?: UuidFilter<"penilaian"> | string
    pesertalomba_id1?: StringFilter<"penilaian"> | string
    pesertalomba_id_pesetalomba?: StringFilter<"penilaian"> | string
    status_penilaian?: StringFilter<"penilaian"> | string
    nilai_penilaian?: DecimalNullableFilter<"penilaian"> | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: StringNullableFilter<"penilaian"> | string | null
  }

  export type juriCreateWithoutPenilaianInput = {
    id?: string
    nama: string
    created_at?: Date | string
    lomba: lombaCreateNestedOneWithoutJuriInput
    users: usersCreateNestedOneWithoutJuriInput
  }

  export type juriUncheckedCreateWithoutPenilaianInput = {
    id?: string
    nama: string
    lomba_id: string
    created_at?: Date | string
    users_id: string
  }

  export type juriCreateOrConnectWithoutPenilaianInput = {
    where: juriWhereUniqueInput
    create: XOR<juriCreateWithoutPenilaianInput, juriUncheckedCreateWithoutPenilaianInput>
  }

  export type pesertalombaCreateWithoutPenilaianInput = {
    id?: number
    id_pesertalomba: string
    submit?: string | null
    submission_time?: Date | string | null
    lomba: lombaCreateNestedOneWithoutPesertalombaInput
    peserta: pesertaCreateNestedOneWithoutPesertalombaInput
  }

  export type pesertalombaUncheckedCreateWithoutPenilaianInput = {
    id?: number
    peserta_id: string
    lomba_id: string
    id_pesertalomba: string
    submit?: string | null
    submission_time?: Date | string | null
  }

  export type pesertalombaCreateOrConnectWithoutPenilaianInput = {
    where: pesertalombaWhereUniqueInput
    create: XOR<pesertalombaCreateWithoutPenilaianInput, pesertalombaUncheckedCreateWithoutPenilaianInput>
  }

  export type juriUpsertWithoutPenilaianInput = {
    update: XOR<juriUpdateWithoutPenilaianInput, juriUncheckedUpdateWithoutPenilaianInput>
    create: XOR<juriCreateWithoutPenilaianInput, juriUncheckedCreateWithoutPenilaianInput>
    where?: juriWhereInput
  }

  export type juriUpdateToOneWithWhereWithoutPenilaianInput = {
    where?: juriWhereInput
    data: XOR<juriUpdateWithoutPenilaianInput, juriUncheckedUpdateWithoutPenilaianInput>
  }

  export type juriUpdateWithoutPenilaianInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lomba?: lombaUpdateOneRequiredWithoutJuriNestedInput
    users?: usersUpdateOneRequiredWithoutJuriNestedInput
  }

  export type juriUncheckedUpdateWithoutPenilaianInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    lomba_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_id?: StringFieldUpdateOperationsInput | string
  }

  export type pesertalombaUpsertWithoutPenilaianInput = {
    update: XOR<pesertalombaUpdateWithoutPenilaianInput, pesertalombaUncheckedUpdateWithoutPenilaianInput>
    create: XOR<pesertalombaCreateWithoutPenilaianInput, pesertalombaUncheckedCreateWithoutPenilaianInput>
    where?: pesertalombaWhereInput
  }

  export type pesertalombaUpdateToOneWithWhereWithoutPenilaianInput = {
    where?: pesertalombaWhereInput
    data: XOR<pesertalombaUpdateWithoutPenilaianInput, pesertalombaUncheckedUpdateWithoutPenilaianInput>
  }

  export type pesertalombaUpdateWithoutPenilaianInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pesertalomba?: StringFieldUpdateOperationsInput | string
    submit?: NullableStringFieldUpdateOperationsInput | string | null
    submission_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lomba?: lombaUpdateOneRequiredWithoutPesertalombaNestedInput
    peserta?: pesertaUpdateOneRequiredWithoutPesertalombaNestedInput
  }

  export type pesertalombaUncheckedUpdateWithoutPenilaianInput = {
    id?: IntFieldUpdateOperationsInput | number
    peserta_id?: StringFieldUpdateOperationsInput | string
    lomba_id?: StringFieldUpdateOperationsInput | string
    id_pesertalomba?: StringFieldUpdateOperationsInput | string
    submit?: NullableStringFieldUpdateOperationsInput | string | null
    submission_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateWithoutPesertaInput = {
    id?: string
    email: string
    password: string
    nama: string
    role?: $Enums.Role
    juri?: juriCreateNestedManyWithoutUsersInput
    admin?: adminCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPesertaInput = {
    id?: string
    email: string
    password: string
    nama: string
    role?: $Enums.Role
    juri?: juriUncheckedCreateNestedManyWithoutUsersInput
    admin?: adminUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPesertaInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPesertaInput, usersUncheckedCreateWithoutPesertaInput>
  }

  export type pesertalombaCreateWithoutPesertaInput = {
    id?: number
    id_pesertalomba: string
    submit?: string | null
    submission_time?: Date | string | null
    penilaian?: penilaianCreateNestedManyWithoutPesertalombaInput
    lomba: lombaCreateNestedOneWithoutPesertalombaInput
  }

  export type pesertalombaUncheckedCreateWithoutPesertaInput = {
    id?: number
    lomba_id: string
    id_pesertalomba: string
    submit?: string | null
    submission_time?: Date | string | null
    penilaian?: penilaianUncheckedCreateNestedManyWithoutPesertalombaInput
  }

  export type pesertalombaCreateOrConnectWithoutPesertaInput = {
    where: pesertalombaWhereUniqueInput
    create: XOR<pesertalombaCreateWithoutPesertaInput, pesertalombaUncheckedCreateWithoutPesertaInput>
  }

  export type pesertalombaCreateManyPesertaInputEnvelope = {
    data: pesertalombaCreateManyPesertaInput | pesertalombaCreateManyPesertaInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutPesertaInput = {
    update: XOR<usersUpdateWithoutPesertaInput, usersUncheckedUpdateWithoutPesertaInput>
    create: XOR<usersCreateWithoutPesertaInput, usersUncheckedCreateWithoutPesertaInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPesertaInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPesertaInput, usersUncheckedUpdateWithoutPesertaInput>
  }

  export type usersUpdateWithoutPesertaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    juri?: juriUpdateManyWithoutUsersNestedInput
    admin?: adminUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPesertaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    juri?: juriUncheckedUpdateManyWithoutUsersNestedInput
    admin?: adminUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type pesertalombaUpsertWithWhereUniqueWithoutPesertaInput = {
    where: pesertalombaWhereUniqueInput
    update: XOR<pesertalombaUpdateWithoutPesertaInput, pesertalombaUncheckedUpdateWithoutPesertaInput>
    create: XOR<pesertalombaCreateWithoutPesertaInput, pesertalombaUncheckedCreateWithoutPesertaInput>
  }

  export type pesertalombaUpdateWithWhereUniqueWithoutPesertaInput = {
    where: pesertalombaWhereUniqueInput
    data: XOR<pesertalombaUpdateWithoutPesertaInput, pesertalombaUncheckedUpdateWithoutPesertaInput>
  }

  export type pesertalombaUpdateManyWithWhereWithoutPesertaInput = {
    where: pesertalombaScalarWhereInput
    data: XOR<pesertalombaUpdateManyMutationInput, pesertalombaUncheckedUpdateManyWithoutPesertaInput>
  }

  export type penilaianCreateWithoutPesertalombaInput = {
    status_penilaian: string
    nilai_penilaian?: Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: string | null
    juri: juriCreateNestedOneWithoutPenilaianInput
  }

  export type penilaianUncheckedCreateWithoutPesertalombaInput = {
    juri_id: string
    status_penilaian: string
    nilai_penilaian?: Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: string | null
  }

  export type penilaianCreateOrConnectWithoutPesertalombaInput = {
    where: penilaianWhereUniqueInput
    create: XOR<penilaianCreateWithoutPesertalombaInput, penilaianUncheckedCreateWithoutPesertalombaInput>
  }

  export type penilaianCreateManyPesertalombaInputEnvelope = {
    data: penilaianCreateManyPesertalombaInput | penilaianCreateManyPesertalombaInput[]
    skipDuplicates?: boolean
  }

  export type lombaCreateWithoutPesertalombaInput = {
    id: string
    tanggal: Date | string
    jenis_lomba: $Enums.Jenis_lomba
    lokasi: string
    nama: string
    url: string
    bataswaktu: Date | string
    deskripsi?: string | null
    juri?: juriCreateNestedManyWithoutLombaInput
    sertifikat?: sertifikatCreateNestedManyWithoutLombaInput
  }

  export type lombaUncheckedCreateWithoutPesertalombaInput = {
    id: string
    tanggal: Date | string
    jenis_lomba: $Enums.Jenis_lomba
    lokasi: string
    nama: string
    url: string
    bataswaktu: Date | string
    deskripsi?: string | null
    juri?: juriUncheckedCreateNestedManyWithoutLombaInput
    sertifikat?: sertifikatUncheckedCreateNestedManyWithoutLombaInput
  }

  export type lombaCreateOrConnectWithoutPesertalombaInput = {
    where: lombaWhereUniqueInput
    create: XOR<lombaCreateWithoutPesertalombaInput, lombaUncheckedCreateWithoutPesertalombaInput>
  }

  export type pesertaCreateWithoutPesertalombaInput = {
    id?: string
    nama: string
    created_at?: Date | string
    users: usersCreateNestedOneWithoutPesertaInput
  }

  export type pesertaUncheckedCreateWithoutPesertalombaInput = {
    id?: string
    nama: string
    users_id: string
    created_at?: Date | string
  }

  export type pesertaCreateOrConnectWithoutPesertalombaInput = {
    where: pesertaWhereUniqueInput
    create: XOR<pesertaCreateWithoutPesertalombaInput, pesertaUncheckedCreateWithoutPesertalombaInput>
  }

  export type penilaianUpsertWithWhereUniqueWithoutPesertalombaInput = {
    where: penilaianWhereUniqueInput
    update: XOR<penilaianUpdateWithoutPesertalombaInput, penilaianUncheckedUpdateWithoutPesertalombaInput>
    create: XOR<penilaianCreateWithoutPesertalombaInput, penilaianUncheckedCreateWithoutPesertalombaInput>
  }

  export type penilaianUpdateWithWhereUniqueWithoutPesertalombaInput = {
    where: penilaianWhereUniqueInput
    data: XOR<penilaianUpdateWithoutPesertalombaInput, penilaianUncheckedUpdateWithoutPesertalombaInput>
  }

  export type penilaianUpdateManyWithWhereWithoutPesertalombaInput = {
    where: penilaianScalarWhereInput
    data: XOR<penilaianUpdateManyMutationInput, penilaianUncheckedUpdateManyWithoutPesertalombaInput>
  }

  export type lombaUpsertWithoutPesertalombaInput = {
    update: XOR<lombaUpdateWithoutPesertalombaInput, lombaUncheckedUpdateWithoutPesertalombaInput>
    create: XOR<lombaCreateWithoutPesertalombaInput, lombaUncheckedCreateWithoutPesertalombaInput>
    where?: lombaWhereInput
  }

  export type lombaUpdateToOneWithWhereWithoutPesertalombaInput = {
    where?: lombaWhereInput
    data: XOR<lombaUpdateWithoutPesertalombaInput, lombaUncheckedUpdateWithoutPesertalombaInput>
  }

  export type lombaUpdateWithoutPesertalombaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_lomba?: EnumJenis_lombaFieldUpdateOperationsInput | $Enums.Jenis_lomba
    lokasi?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bataswaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    juri?: juriUpdateManyWithoutLombaNestedInput
    sertifikat?: sertifikatUpdateManyWithoutLombaNestedInput
  }

  export type lombaUncheckedUpdateWithoutPesertalombaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_lomba?: EnumJenis_lombaFieldUpdateOperationsInput | $Enums.Jenis_lomba
    lokasi?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bataswaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    juri?: juriUncheckedUpdateManyWithoutLombaNestedInput
    sertifikat?: sertifikatUncheckedUpdateManyWithoutLombaNestedInput
  }

  export type pesertaUpsertWithoutPesertalombaInput = {
    update: XOR<pesertaUpdateWithoutPesertalombaInput, pesertaUncheckedUpdateWithoutPesertalombaInput>
    create: XOR<pesertaCreateWithoutPesertalombaInput, pesertaUncheckedCreateWithoutPesertalombaInput>
    where?: pesertaWhereInput
  }

  export type pesertaUpdateToOneWithWhereWithoutPesertalombaInput = {
    where?: pesertaWhereInput
    data: XOR<pesertaUpdateWithoutPesertalombaInput, pesertaUncheckedUpdateWithoutPesertalombaInput>
  }

  export type pesertaUpdateWithoutPesertalombaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutPesertaNestedInput
  }

  export type pesertaUncheckedUpdateWithoutPesertalombaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    users_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type juriCreateManyLombaInput = {
    id?: string
    nama: string
    created_at?: Date | string
    users_id: string
  }

  export type pesertalombaCreateManyLombaInput = {
    id?: number
    peserta_id: string
    id_pesertalomba: string
    submit?: string | null
    submission_time?: Date | string | null
  }

  export type sertifikatCreateManyLombaInput = {
    id: string
    url: string
  }

  export type juriUpdateWithoutLombaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutJuriNestedInput
    penilaian?: penilaianUpdateManyWithoutJuriNestedInput
  }

  export type juriUncheckedUpdateWithoutLombaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_id?: StringFieldUpdateOperationsInput | string
    penilaian?: penilaianUncheckedUpdateManyWithoutJuriNestedInput
  }

  export type juriUncheckedUpdateManyWithoutLombaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_id?: StringFieldUpdateOperationsInput | string
  }

  export type pesertalombaUpdateWithoutLombaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pesertalomba?: StringFieldUpdateOperationsInput | string
    submit?: NullableStringFieldUpdateOperationsInput | string | null
    submission_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    penilaian?: penilaianUpdateManyWithoutPesertalombaNestedInput
    peserta?: pesertaUpdateOneRequiredWithoutPesertalombaNestedInput
  }

  export type pesertalombaUncheckedUpdateWithoutLombaInput = {
    id?: IntFieldUpdateOperationsInput | number
    peserta_id?: StringFieldUpdateOperationsInput | string
    id_pesertalomba?: StringFieldUpdateOperationsInput | string
    submit?: NullableStringFieldUpdateOperationsInput | string | null
    submission_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    penilaian?: penilaianUncheckedUpdateManyWithoutPesertalombaNestedInput
  }

  export type pesertalombaUncheckedUpdateManyWithoutLombaInput = {
    id?: IntFieldUpdateOperationsInput | number
    peserta_id?: StringFieldUpdateOperationsInput | string
    id_pesertalomba?: StringFieldUpdateOperationsInput | string
    submit?: NullableStringFieldUpdateOperationsInput | string | null
    submission_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sertifikatUpdateWithoutLombaInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type sertifikatUncheckedUpdateWithoutLombaInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type sertifikatUncheckedUpdateManyWithoutLombaInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type juriCreateManyUsersInput = {
    id?: string
    nama: string
    lomba_id: string
    created_at?: Date | string
  }

  export type pesertaCreateManyUsersInput = {
    id?: string
    nama: string
    created_at?: Date | string
  }

  export type adminCreateManyUsersInput = {
    id?: string
    created_at?: Date | string
  }

  export type juriUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lomba?: lombaUpdateOneRequiredWithoutJuriNestedInput
    penilaian?: penilaianUpdateManyWithoutJuriNestedInput
  }

  export type juriUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    lomba_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    penilaian?: penilaianUncheckedUpdateManyWithoutJuriNestedInput
  }

  export type juriUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    lomba_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pesertaUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pesertalomba?: pesertalombaUpdateManyWithoutPesertaNestedInput
  }

  export type pesertaUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pesertalomba?: pesertalombaUncheckedUpdateManyWithoutPesertaNestedInput
  }

  export type pesertaUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penilaianCreateManyJuriInput = {
    pesertalomba_id: string
    pesertalomba_id1: string
    pesertalomba_id_pesetalomba: string
    status_penilaian: string
    nilai_penilaian?: Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: string | null
  }

  export type penilaianUpdateWithoutJuriInput = {
    status_penilaian?: StringFieldUpdateOperationsInput | string
    nilai_penilaian?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: NullableStringFieldUpdateOperationsInput | string | null
    pesertalomba?: pesertalombaUpdateOneRequiredWithoutPenilaianNestedInput
  }

  export type penilaianUncheckedUpdateWithoutJuriInput = {
    pesertalomba_id?: StringFieldUpdateOperationsInput | string
    pesertalomba_id1?: StringFieldUpdateOperationsInput | string
    pesertalomba_id_pesetalomba?: StringFieldUpdateOperationsInput | string
    status_penilaian?: StringFieldUpdateOperationsInput | string
    nilai_penilaian?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type penilaianUncheckedUpdateManyWithoutJuriInput = {
    pesertalomba_id?: StringFieldUpdateOperationsInput | string
    pesertalomba_id1?: StringFieldUpdateOperationsInput | string
    pesertalomba_id_pesetalomba?: StringFieldUpdateOperationsInput | string
    status_penilaian?: StringFieldUpdateOperationsInput | string
    nilai_penilaian?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pesertalombaCreateManyPesertaInput = {
    id?: number
    lomba_id: string
    id_pesertalomba: string
    submit?: string | null
    submission_time?: Date | string | null
  }

  export type pesertalombaUpdateWithoutPesertaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pesertalomba?: StringFieldUpdateOperationsInput | string
    submit?: NullableStringFieldUpdateOperationsInput | string | null
    submission_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    penilaian?: penilaianUpdateManyWithoutPesertalombaNestedInput
    lomba?: lombaUpdateOneRequiredWithoutPesertalombaNestedInput
  }

  export type pesertalombaUncheckedUpdateWithoutPesertaInput = {
    id?: IntFieldUpdateOperationsInput | number
    lomba_id?: StringFieldUpdateOperationsInput | string
    id_pesertalomba?: StringFieldUpdateOperationsInput | string
    submit?: NullableStringFieldUpdateOperationsInput | string | null
    submission_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    penilaian?: penilaianUncheckedUpdateManyWithoutPesertalombaNestedInput
  }

  export type pesertalombaUncheckedUpdateManyWithoutPesertaInput = {
    id?: IntFieldUpdateOperationsInput | number
    lomba_id?: StringFieldUpdateOperationsInput | string
    id_pesertalomba?: StringFieldUpdateOperationsInput | string
    submit?: NullableStringFieldUpdateOperationsInput | string | null
    submission_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type penilaianCreateManyPesertalombaInput = {
    juri_id: string
    status_penilaian: string
    nilai_penilaian?: Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: string | null
  }

  export type penilaianUpdateWithoutPesertalombaInput = {
    status_penilaian?: StringFieldUpdateOperationsInput | string
    nilai_penilaian?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: NullableStringFieldUpdateOperationsInput | string | null
    juri?: juriUpdateOneRequiredWithoutPenilaianNestedInput
  }

  export type penilaianUncheckedUpdateWithoutPesertalombaInput = {
    juri_id?: StringFieldUpdateOperationsInput | string
    status_penilaian?: StringFieldUpdateOperationsInput | string
    nilai_penilaian?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type penilaianUncheckedUpdateManyWithoutPesertalombaInput = {
    juri_id?: StringFieldUpdateOperationsInput | string
    status_penilaian?: StringFieldUpdateOperationsInput | string
    nilai_penilaian?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deskripsi_penilaian?: NullableStringFieldUpdateOperationsInput | string | null
  }



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