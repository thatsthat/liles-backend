
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
 * Model Actuacio
 * 
 */
export type Actuacio = $Result.DefaultSelection<Prisma.$ActuacioPayload>
/**
 * Model Castell
 * 
 */
export type Castell = $Result.DefaultSelection<Prisma.$CastellPayload>
/**
 * Model Usuari
 * 
 */
export type Usuari = $Result.DefaultSelection<Prisma.$UsuariPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Resultat: {
  Carregat: 'Carregat',
  Descarregat: 'Descarregat',
  Intent: 'Intent',
  IntentDesmuntat: 'IntentDesmuntat'
};

export type Resultat = (typeof Resultat)[keyof typeof Resultat]

}

export type Resultat = $Enums.Resultat

export const Resultat: typeof $Enums.Resultat

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Actuacios
 * const actuacios = await prisma.actuacio.findMany()
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
   * // Fetch zero or more Actuacios
   * const actuacios = await prisma.actuacio.findMany()
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
   * `prisma.actuacio`: Exposes CRUD operations for the **Actuacio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actuacios
    * const actuacios = await prisma.actuacio.findMany()
    * ```
    */
  get actuacio(): Prisma.ActuacioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.castell`: Exposes CRUD operations for the **Castell** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Castells
    * const castells = await prisma.castell.findMany()
    * ```
    */
  get castell(): Prisma.CastellDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuari`: Exposes CRUD operations for the **Usuari** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuaris
    * const usuaris = await prisma.usuari.findMany()
    * ```
    */
  get usuari(): Prisma.UsuariDelegate<ExtArgs, ClientOptions>;
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
    Actuacio: 'Actuacio',
    Castell: 'Castell',
    Usuari: 'Usuari'
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
      modelProps: "actuacio" | "castell" | "usuari"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Actuacio: {
        payload: Prisma.$ActuacioPayload<ExtArgs>
        fields: Prisma.ActuacioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActuacioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActuacioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>
          }
          findFirst: {
            args: Prisma.ActuacioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActuacioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>
          }
          findMany: {
            args: Prisma.ActuacioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>[]
          }
          create: {
            args: Prisma.ActuacioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>
          }
          createMany: {
            args: Prisma.ActuacioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActuacioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>[]
          }
          delete: {
            args: Prisma.ActuacioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>
          }
          update: {
            args: Prisma.ActuacioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>
          }
          deleteMany: {
            args: Prisma.ActuacioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActuacioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActuacioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>[]
          }
          upsert: {
            args: Prisma.ActuacioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>
          }
          aggregate: {
            args: Prisma.ActuacioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActuacio>
          }
          groupBy: {
            args: Prisma.ActuacioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActuacioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActuacioCountArgs<ExtArgs>
            result: $Utils.Optional<ActuacioCountAggregateOutputType> | number
          }
        }
      }
      Castell: {
        payload: Prisma.$CastellPayload<ExtArgs>
        fields: Prisma.CastellFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CastellFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CastellFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>
          }
          findFirst: {
            args: Prisma.CastellFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CastellFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>
          }
          findMany: {
            args: Prisma.CastellFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>[]
          }
          create: {
            args: Prisma.CastellCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>
          }
          createMany: {
            args: Prisma.CastellCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CastellCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>[]
          }
          delete: {
            args: Prisma.CastellDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>
          }
          update: {
            args: Prisma.CastellUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>
          }
          deleteMany: {
            args: Prisma.CastellDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CastellUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CastellUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>[]
          }
          upsert: {
            args: Prisma.CastellUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>
          }
          aggregate: {
            args: Prisma.CastellAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCastell>
          }
          groupBy: {
            args: Prisma.CastellGroupByArgs<ExtArgs>
            result: $Utils.Optional<CastellGroupByOutputType>[]
          }
          count: {
            args: Prisma.CastellCountArgs<ExtArgs>
            result: $Utils.Optional<CastellCountAggregateOutputType> | number
          }
        }
      }
      Usuari: {
        payload: Prisma.$UsuariPayload<ExtArgs>
        fields: Prisma.UsuariFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>
          }
          findFirst: {
            args: Prisma.UsuariFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>
          }
          findMany: {
            args: Prisma.UsuariFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>[]
          }
          create: {
            args: Prisma.UsuariCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>
          }
          createMany: {
            args: Prisma.UsuariCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuariCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>[]
          }
          delete: {
            args: Prisma.UsuariDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>
          }
          update: {
            args: Prisma.UsuariUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>
          }
          deleteMany: {
            args: Prisma.UsuariDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuariUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>[]
          }
          upsert: {
            args: Prisma.UsuariUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>
          }
          aggregate: {
            args: Prisma.UsuariAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuari>
          }
          groupBy: {
            args: Prisma.UsuariGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariCountAggregateOutputType> | number
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
    actuacio?: ActuacioOmit
    castell?: CastellOmit
    usuari?: UsuariOmit
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
   * Count Type ActuacioCountOutputType
   */

  export type ActuacioCountOutputType = {
    castells: number
  }

  export type ActuacioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    castells?: boolean | ActuacioCountOutputTypeCountCastellsArgs
  }

  // Custom InputTypes
  /**
   * ActuacioCountOutputType without action
   */
  export type ActuacioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActuacioCountOutputType
     */
    select?: ActuacioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActuacioCountOutputType without action
   */
  export type ActuacioCountOutputTypeCountCastellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CastellWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Actuacio
   */

  export type AggregateActuacio = {
    _count: ActuacioCountAggregateOutputType | null
    _avg: ActuacioAvgAggregateOutputType | null
    _sum: ActuacioSumAggregateOutputType | null
    _min: ActuacioMinAggregateOutputType | null
    _max: ActuacioMaxAggregateOutputType | null
  }

  export type ActuacioAvgAggregateOutputType = {
    id: number | null
  }

  export type ActuacioSumAggregateOutputType = {
    id: number | null
  }

  export type ActuacioMinAggregateOutputType = {
    id: number | null
    data: Date | null
    dataHora: Date | null
    lloc: string | null
    ciutat: string | null
  }

  export type ActuacioMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    dataHora: Date | null
    lloc: string | null
    ciutat: string | null
  }

  export type ActuacioCountAggregateOutputType = {
    id: number
    data: number
    dataHora: number
    lloc: number
    ciutat: number
    _all: number
  }


  export type ActuacioAvgAggregateInputType = {
    id?: true
  }

  export type ActuacioSumAggregateInputType = {
    id?: true
  }

  export type ActuacioMinAggregateInputType = {
    id?: true
    data?: true
    dataHora?: true
    lloc?: true
    ciutat?: true
  }

  export type ActuacioMaxAggregateInputType = {
    id?: true
    data?: true
    dataHora?: true
    lloc?: true
    ciutat?: true
  }

  export type ActuacioCountAggregateInputType = {
    id?: true
    data?: true
    dataHora?: true
    lloc?: true
    ciutat?: true
    _all?: true
  }

  export type ActuacioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actuacio to aggregate.
     */
    where?: ActuacioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuacios to fetch.
     */
    orderBy?: ActuacioOrderByWithRelationInput | ActuacioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActuacioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuacios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuacios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actuacios
    **/
    _count?: true | ActuacioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActuacioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActuacioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActuacioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActuacioMaxAggregateInputType
  }

  export type GetActuacioAggregateType<T extends ActuacioAggregateArgs> = {
        [P in keyof T & keyof AggregateActuacio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActuacio[P]>
      : GetScalarType<T[P], AggregateActuacio[P]>
  }




  export type ActuacioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActuacioWhereInput
    orderBy?: ActuacioOrderByWithAggregationInput | ActuacioOrderByWithAggregationInput[]
    by: ActuacioScalarFieldEnum[] | ActuacioScalarFieldEnum
    having?: ActuacioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActuacioCountAggregateInputType | true
    _avg?: ActuacioAvgAggregateInputType
    _sum?: ActuacioSumAggregateInputType
    _min?: ActuacioMinAggregateInputType
    _max?: ActuacioMaxAggregateInputType
  }

  export type ActuacioGroupByOutputType = {
    id: number
    data: Date
    dataHora: Date | null
    lloc: string | null
    ciutat: string
    _count: ActuacioCountAggregateOutputType | null
    _avg: ActuacioAvgAggregateOutputType | null
    _sum: ActuacioSumAggregateOutputType | null
    _min: ActuacioMinAggregateOutputType | null
    _max: ActuacioMaxAggregateOutputType | null
  }

  type GetActuacioGroupByPayload<T extends ActuacioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActuacioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActuacioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActuacioGroupByOutputType[P]>
            : GetScalarType<T[P], ActuacioGroupByOutputType[P]>
        }
      >
    >


  export type ActuacioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    dataHora?: boolean
    lloc?: boolean
    ciutat?: boolean
    castells?: boolean | Actuacio$castellsArgs<ExtArgs>
    _count?: boolean | ActuacioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actuacio"]>

  export type ActuacioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    dataHora?: boolean
    lloc?: boolean
    ciutat?: boolean
  }, ExtArgs["result"]["actuacio"]>

  export type ActuacioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    dataHora?: boolean
    lloc?: boolean
    ciutat?: boolean
  }, ExtArgs["result"]["actuacio"]>

  export type ActuacioSelectScalar = {
    id?: boolean
    data?: boolean
    dataHora?: boolean
    lloc?: boolean
    ciutat?: boolean
  }

  export type ActuacioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "dataHora" | "lloc" | "ciutat", ExtArgs["result"]["actuacio"]>
  export type ActuacioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    castells?: boolean | Actuacio$castellsArgs<ExtArgs>
    _count?: boolean | ActuacioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActuacioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ActuacioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ActuacioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actuacio"
    objects: {
      castells: Prisma.$CastellPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      dataHora: Date | null
      lloc: string | null
      ciutat: string
    }, ExtArgs["result"]["actuacio"]>
    composites: {}
  }

  type ActuacioGetPayload<S extends boolean | null | undefined | ActuacioDefaultArgs> = $Result.GetResult<Prisma.$ActuacioPayload, S>

  type ActuacioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActuacioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActuacioCountAggregateInputType | true
    }

  export interface ActuacioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actuacio'], meta: { name: 'Actuacio' } }
    /**
     * Find zero or one Actuacio that matches the filter.
     * @param {ActuacioFindUniqueArgs} args - Arguments to find a Actuacio
     * @example
     * // Get one Actuacio
     * const actuacio = await prisma.actuacio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActuacioFindUniqueArgs>(args: SelectSubset<T, ActuacioFindUniqueArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actuacio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActuacioFindUniqueOrThrowArgs} args - Arguments to find a Actuacio
     * @example
     * // Get one Actuacio
     * const actuacio = await prisma.actuacio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActuacioFindUniqueOrThrowArgs>(args: SelectSubset<T, ActuacioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actuacio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioFindFirstArgs} args - Arguments to find a Actuacio
     * @example
     * // Get one Actuacio
     * const actuacio = await prisma.actuacio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActuacioFindFirstArgs>(args?: SelectSubset<T, ActuacioFindFirstArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actuacio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioFindFirstOrThrowArgs} args - Arguments to find a Actuacio
     * @example
     * // Get one Actuacio
     * const actuacio = await prisma.actuacio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActuacioFindFirstOrThrowArgs>(args?: SelectSubset<T, ActuacioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actuacios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actuacios
     * const actuacios = await prisma.actuacio.findMany()
     * 
     * // Get first 10 Actuacios
     * const actuacios = await prisma.actuacio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actuacioWithIdOnly = await prisma.actuacio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActuacioFindManyArgs>(args?: SelectSubset<T, ActuacioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actuacio.
     * @param {ActuacioCreateArgs} args - Arguments to create a Actuacio.
     * @example
     * // Create one Actuacio
     * const Actuacio = await prisma.actuacio.create({
     *   data: {
     *     // ... data to create a Actuacio
     *   }
     * })
     * 
     */
    create<T extends ActuacioCreateArgs>(args: SelectSubset<T, ActuacioCreateArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actuacios.
     * @param {ActuacioCreateManyArgs} args - Arguments to create many Actuacios.
     * @example
     * // Create many Actuacios
     * const actuacio = await prisma.actuacio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActuacioCreateManyArgs>(args?: SelectSubset<T, ActuacioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actuacios and returns the data saved in the database.
     * @param {ActuacioCreateManyAndReturnArgs} args - Arguments to create many Actuacios.
     * @example
     * // Create many Actuacios
     * const actuacio = await prisma.actuacio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actuacios and only return the `id`
     * const actuacioWithIdOnly = await prisma.actuacio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActuacioCreateManyAndReturnArgs>(args?: SelectSubset<T, ActuacioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actuacio.
     * @param {ActuacioDeleteArgs} args - Arguments to delete one Actuacio.
     * @example
     * // Delete one Actuacio
     * const Actuacio = await prisma.actuacio.delete({
     *   where: {
     *     // ... filter to delete one Actuacio
     *   }
     * })
     * 
     */
    delete<T extends ActuacioDeleteArgs>(args: SelectSubset<T, ActuacioDeleteArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actuacio.
     * @param {ActuacioUpdateArgs} args - Arguments to update one Actuacio.
     * @example
     * // Update one Actuacio
     * const actuacio = await prisma.actuacio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActuacioUpdateArgs>(args: SelectSubset<T, ActuacioUpdateArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actuacios.
     * @param {ActuacioDeleteManyArgs} args - Arguments to filter Actuacios to delete.
     * @example
     * // Delete a few Actuacios
     * const { count } = await prisma.actuacio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActuacioDeleteManyArgs>(args?: SelectSubset<T, ActuacioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actuacios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actuacios
     * const actuacio = await prisma.actuacio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActuacioUpdateManyArgs>(args: SelectSubset<T, ActuacioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actuacios and returns the data updated in the database.
     * @param {ActuacioUpdateManyAndReturnArgs} args - Arguments to update many Actuacios.
     * @example
     * // Update many Actuacios
     * const actuacio = await prisma.actuacio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actuacios and only return the `id`
     * const actuacioWithIdOnly = await prisma.actuacio.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActuacioUpdateManyAndReturnArgs>(args: SelectSubset<T, ActuacioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actuacio.
     * @param {ActuacioUpsertArgs} args - Arguments to update or create a Actuacio.
     * @example
     * // Update or create a Actuacio
     * const actuacio = await prisma.actuacio.upsert({
     *   create: {
     *     // ... data to create a Actuacio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actuacio we want to update
     *   }
     * })
     */
    upsert<T extends ActuacioUpsertArgs>(args: SelectSubset<T, ActuacioUpsertArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actuacios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioCountArgs} args - Arguments to filter Actuacios to count.
     * @example
     * // Count the number of Actuacios
     * const count = await prisma.actuacio.count({
     *   where: {
     *     // ... the filter for the Actuacios we want to count
     *   }
     * })
    **/
    count<T extends ActuacioCountArgs>(
      args?: Subset<T, ActuacioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActuacioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actuacio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActuacioAggregateArgs>(args: Subset<T, ActuacioAggregateArgs>): Prisma.PrismaPromise<GetActuacioAggregateType<T>>

    /**
     * Group by Actuacio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioGroupByArgs} args - Group by arguments.
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
      T extends ActuacioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActuacioGroupByArgs['orderBy'] }
        : { orderBy?: ActuacioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActuacioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActuacioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actuacio model
   */
  readonly fields: ActuacioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actuacio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActuacioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    castells<T extends Actuacio$castellsArgs<ExtArgs> = {}>(args?: Subset<T, Actuacio$castellsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Actuacio model
   */
  interface ActuacioFieldRefs {
    readonly id: FieldRef<"Actuacio", 'Int'>
    readonly data: FieldRef<"Actuacio", 'DateTime'>
    readonly dataHora: FieldRef<"Actuacio", 'DateTime'>
    readonly lloc: FieldRef<"Actuacio", 'String'>
    readonly ciutat: FieldRef<"Actuacio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Actuacio findUnique
   */
  export type ActuacioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * Filter, which Actuacio to fetch.
     */
    where: ActuacioWhereUniqueInput
  }

  /**
   * Actuacio findUniqueOrThrow
   */
  export type ActuacioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * Filter, which Actuacio to fetch.
     */
    where: ActuacioWhereUniqueInput
  }

  /**
   * Actuacio findFirst
   */
  export type ActuacioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * Filter, which Actuacio to fetch.
     */
    where?: ActuacioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuacios to fetch.
     */
    orderBy?: ActuacioOrderByWithRelationInput | ActuacioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actuacios.
     */
    cursor?: ActuacioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuacios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuacios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actuacios.
     */
    distinct?: ActuacioScalarFieldEnum | ActuacioScalarFieldEnum[]
  }

  /**
   * Actuacio findFirstOrThrow
   */
  export type ActuacioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * Filter, which Actuacio to fetch.
     */
    where?: ActuacioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuacios to fetch.
     */
    orderBy?: ActuacioOrderByWithRelationInput | ActuacioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actuacios.
     */
    cursor?: ActuacioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuacios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuacios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actuacios.
     */
    distinct?: ActuacioScalarFieldEnum | ActuacioScalarFieldEnum[]
  }

  /**
   * Actuacio findMany
   */
  export type ActuacioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * Filter, which Actuacios to fetch.
     */
    where?: ActuacioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuacios to fetch.
     */
    orderBy?: ActuacioOrderByWithRelationInput | ActuacioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actuacios.
     */
    cursor?: ActuacioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuacios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuacios.
     */
    skip?: number
    distinct?: ActuacioScalarFieldEnum | ActuacioScalarFieldEnum[]
  }

  /**
   * Actuacio create
   */
  export type ActuacioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * The data needed to create a Actuacio.
     */
    data: XOR<ActuacioCreateInput, ActuacioUncheckedCreateInput>
  }

  /**
   * Actuacio createMany
   */
  export type ActuacioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actuacios.
     */
    data: ActuacioCreateManyInput | ActuacioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actuacio createManyAndReturn
   */
  export type ActuacioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * The data used to create many Actuacios.
     */
    data: ActuacioCreateManyInput | ActuacioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actuacio update
   */
  export type ActuacioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * The data needed to update a Actuacio.
     */
    data: XOR<ActuacioUpdateInput, ActuacioUncheckedUpdateInput>
    /**
     * Choose, which Actuacio to update.
     */
    where: ActuacioWhereUniqueInput
  }

  /**
   * Actuacio updateMany
   */
  export type ActuacioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actuacios.
     */
    data: XOR<ActuacioUpdateManyMutationInput, ActuacioUncheckedUpdateManyInput>
    /**
     * Filter which Actuacios to update
     */
    where?: ActuacioWhereInput
    /**
     * Limit how many Actuacios to update.
     */
    limit?: number
  }

  /**
   * Actuacio updateManyAndReturn
   */
  export type ActuacioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * The data used to update Actuacios.
     */
    data: XOR<ActuacioUpdateManyMutationInput, ActuacioUncheckedUpdateManyInput>
    /**
     * Filter which Actuacios to update
     */
    where?: ActuacioWhereInput
    /**
     * Limit how many Actuacios to update.
     */
    limit?: number
  }

  /**
   * Actuacio upsert
   */
  export type ActuacioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * The filter to search for the Actuacio to update in case it exists.
     */
    where: ActuacioWhereUniqueInput
    /**
     * In case the Actuacio found by the `where` argument doesn't exist, create a new Actuacio with this data.
     */
    create: XOR<ActuacioCreateInput, ActuacioUncheckedCreateInput>
    /**
     * In case the Actuacio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActuacioUpdateInput, ActuacioUncheckedUpdateInput>
  }

  /**
   * Actuacio delete
   */
  export type ActuacioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * Filter which Actuacio to delete.
     */
    where: ActuacioWhereUniqueInput
  }

  /**
   * Actuacio deleteMany
   */
  export type ActuacioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actuacios to delete
     */
    where?: ActuacioWhereInput
    /**
     * Limit how many Actuacios to delete.
     */
    limit?: number
  }

  /**
   * Actuacio.castells
   */
  export type Actuacio$castellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    where?: CastellWhereInput
    orderBy?: CastellOrderByWithRelationInput | CastellOrderByWithRelationInput[]
    cursor?: CastellWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CastellScalarFieldEnum | CastellScalarFieldEnum[]
  }

  /**
   * Actuacio without action
   */
  export type ActuacioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
  }


  /**
   * Model Castell
   */

  export type AggregateCastell = {
    _count: CastellCountAggregateOutputType | null
    _avg: CastellAvgAggregateOutputType | null
    _sum: CastellSumAggregateOutputType | null
    _min: CastellMinAggregateOutputType | null
    _max: CastellMaxAggregateOutputType | null
  }

  export type CastellAvgAggregateOutputType = {
    id: number | null
    actuacioId: number | null
  }

  export type CastellSumAggregateOutputType = {
    id: number | null
    actuacioId: number | null
  }

  export type CastellMinAggregateOutputType = {
    id: number | null
    nom: string | null
    actuacioId: number | null
    resultat: string | null
  }

  export type CastellMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    actuacioId: number | null
    resultat: string | null
  }

  export type CastellCountAggregateOutputType = {
    id: number
    nom: number
    actuacioId: number
    resultat: number
    _all: number
  }


  export type CastellAvgAggregateInputType = {
    id?: true
    actuacioId?: true
  }

  export type CastellSumAggregateInputType = {
    id?: true
    actuacioId?: true
  }

  export type CastellMinAggregateInputType = {
    id?: true
    nom?: true
    actuacioId?: true
    resultat?: true
  }

  export type CastellMaxAggregateInputType = {
    id?: true
    nom?: true
    actuacioId?: true
    resultat?: true
  }

  export type CastellCountAggregateInputType = {
    id?: true
    nom?: true
    actuacioId?: true
    resultat?: true
    _all?: true
  }

  export type CastellAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Castell to aggregate.
     */
    where?: CastellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Castells to fetch.
     */
    orderBy?: CastellOrderByWithRelationInput | CastellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CastellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Castells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Castells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Castells
    **/
    _count?: true | CastellCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CastellAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CastellSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CastellMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CastellMaxAggregateInputType
  }

  export type GetCastellAggregateType<T extends CastellAggregateArgs> = {
        [P in keyof T & keyof AggregateCastell]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCastell[P]>
      : GetScalarType<T[P], AggregateCastell[P]>
  }




  export type CastellGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CastellWhereInput
    orderBy?: CastellOrderByWithAggregationInput | CastellOrderByWithAggregationInput[]
    by: CastellScalarFieldEnum[] | CastellScalarFieldEnum
    having?: CastellScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CastellCountAggregateInputType | true
    _avg?: CastellAvgAggregateInputType
    _sum?: CastellSumAggregateInputType
    _min?: CastellMinAggregateInputType
    _max?: CastellMaxAggregateInputType
  }

  export type CastellGroupByOutputType = {
    id: number
    nom: string
    actuacioId: number
    resultat: string
    _count: CastellCountAggregateOutputType | null
    _avg: CastellAvgAggregateOutputType | null
    _sum: CastellSumAggregateOutputType | null
    _min: CastellMinAggregateOutputType | null
    _max: CastellMaxAggregateOutputType | null
  }

  type GetCastellGroupByPayload<T extends CastellGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CastellGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CastellGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CastellGroupByOutputType[P]>
            : GetScalarType<T[P], CastellGroupByOutputType[P]>
        }
      >
    >


  export type CastellSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    actuacioId?: boolean
    resultat?: boolean
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["castell"]>

  export type CastellSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    actuacioId?: boolean
    resultat?: boolean
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["castell"]>

  export type CastellSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    actuacioId?: boolean
    resultat?: boolean
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["castell"]>

  export type CastellSelectScalar = {
    id?: boolean
    nom?: boolean
    actuacioId?: boolean
    resultat?: boolean
  }

  export type CastellOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "actuacioId" | "resultat", ExtArgs["result"]["castell"]>
  export type CastellInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }
  export type CastellIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }
  export type CastellIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }

  export type $CastellPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Castell"
    objects: {
      actuacio: Prisma.$ActuacioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      actuacioId: number
      resultat: string
    }, ExtArgs["result"]["castell"]>
    composites: {}
  }

  type CastellGetPayload<S extends boolean | null | undefined | CastellDefaultArgs> = $Result.GetResult<Prisma.$CastellPayload, S>

  type CastellCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CastellFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CastellCountAggregateInputType | true
    }

  export interface CastellDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Castell'], meta: { name: 'Castell' } }
    /**
     * Find zero or one Castell that matches the filter.
     * @param {CastellFindUniqueArgs} args - Arguments to find a Castell
     * @example
     * // Get one Castell
     * const castell = await prisma.castell.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CastellFindUniqueArgs>(args: SelectSubset<T, CastellFindUniqueArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Castell that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CastellFindUniqueOrThrowArgs} args - Arguments to find a Castell
     * @example
     * // Get one Castell
     * const castell = await prisma.castell.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CastellFindUniqueOrThrowArgs>(args: SelectSubset<T, CastellFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Castell that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellFindFirstArgs} args - Arguments to find a Castell
     * @example
     * // Get one Castell
     * const castell = await prisma.castell.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CastellFindFirstArgs>(args?: SelectSubset<T, CastellFindFirstArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Castell that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellFindFirstOrThrowArgs} args - Arguments to find a Castell
     * @example
     * // Get one Castell
     * const castell = await prisma.castell.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CastellFindFirstOrThrowArgs>(args?: SelectSubset<T, CastellFindFirstOrThrowArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Castells that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Castells
     * const castells = await prisma.castell.findMany()
     * 
     * // Get first 10 Castells
     * const castells = await prisma.castell.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const castellWithIdOnly = await prisma.castell.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CastellFindManyArgs>(args?: SelectSubset<T, CastellFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Castell.
     * @param {CastellCreateArgs} args - Arguments to create a Castell.
     * @example
     * // Create one Castell
     * const Castell = await prisma.castell.create({
     *   data: {
     *     // ... data to create a Castell
     *   }
     * })
     * 
     */
    create<T extends CastellCreateArgs>(args: SelectSubset<T, CastellCreateArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Castells.
     * @param {CastellCreateManyArgs} args - Arguments to create many Castells.
     * @example
     * // Create many Castells
     * const castell = await prisma.castell.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CastellCreateManyArgs>(args?: SelectSubset<T, CastellCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Castells and returns the data saved in the database.
     * @param {CastellCreateManyAndReturnArgs} args - Arguments to create many Castells.
     * @example
     * // Create many Castells
     * const castell = await prisma.castell.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Castells and only return the `id`
     * const castellWithIdOnly = await prisma.castell.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CastellCreateManyAndReturnArgs>(args?: SelectSubset<T, CastellCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Castell.
     * @param {CastellDeleteArgs} args - Arguments to delete one Castell.
     * @example
     * // Delete one Castell
     * const Castell = await prisma.castell.delete({
     *   where: {
     *     // ... filter to delete one Castell
     *   }
     * })
     * 
     */
    delete<T extends CastellDeleteArgs>(args: SelectSubset<T, CastellDeleteArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Castell.
     * @param {CastellUpdateArgs} args - Arguments to update one Castell.
     * @example
     * // Update one Castell
     * const castell = await prisma.castell.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CastellUpdateArgs>(args: SelectSubset<T, CastellUpdateArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Castells.
     * @param {CastellDeleteManyArgs} args - Arguments to filter Castells to delete.
     * @example
     * // Delete a few Castells
     * const { count } = await prisma.castell.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CastellDeleteManyArgs>(args?: SelectSubset<T, CastellDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Castells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Castells
     * const castell = await prisma.castell.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CastellUpdateManyArgs>(args: SelectSubset<T, CastellUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Castells and returns the data updated in the database.
     * @param {CastellUpdateManyAndReturnArgs} args - Arguments to update many Castells.
     * @example
     * // Update many Castells
     * const castell = await prisma.castell.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Castells and only return the `id`
     * const castellWithIdOnly = await prisma.castell.updateManyAndReturn({
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
    updateManyAndReturn<T extends CastellUpdateManyAndReturnArgs>(args: SelectSubset<T, CastellUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Castell.
     * @param {CastellUpsertArgs} args - Arguments to update or create a Castell.
     * @example
     * // Update or create a Castell
     * const castell = await prisma.castell.upsert({
     *   create: {
     *     // ... data to create a Castell
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Castell we want to update
     *   }
     * })
     */
    upsert<T extends CastellUpsertArgs>(args: SelectSubset<T, CastellUpsertArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Castells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellCountArgs} args - Arguments to filter Castells to count.
     * @example
     * // Count the number of Castells
     * const count = await prisma.castell.count({
     *   where: {
     *     // ... the filter for the Castells we want to count
     *   }
     * })
    **/
    count<T extends CastellCountArgs>(
      args?: Subset<T, CastellCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CastellCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Castell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CastellAggregateArgs>(args: Subset<T, CastellAggregateArgs>): Prisma.PrismaPromise<GetCastellAggregateType<T>>

    /**
     * Group by Castell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellGroupByArgs} args - Group by arguments.
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
      T extends CastellGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CastellGroupByArgs['orderBy'] }
        : { orderBy?: CastellGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CastellGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCastellGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Castell model
   */
  readonly fields: CastellFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Castell.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CastellClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actuacio<T extends ActuacioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActuacioDefaultArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Castell model
   */
  interface CastellFieldRefs {
    readonly id: FieldRef<"Castell", 'Int'>
    readonly nom: FieldRef<"Castell", 'String'>
    readonly actuacioId: FieldRef<"Castell", 'Int'>
    readonly resultat: FieldRef<"Castell", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Castell findUnique
   */
  export type CastellFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * Filter, which Castell to fetch.
     */
    where: CastellWhereUniqueInput
  }

  /**
   * Castell findUniqueOrThrow
   */
  export type CastellFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * Filter, which Castell to fetch.
     */
    where: CastellWhereUniqueInput
  }

  /**
   * Castell findFirst
   */
  export type CastellFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * Filter, which Castell to fetch.
     */
    where?: CastellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Castells to fetch.
     */
    orderBy?: CastellOrderByWithRelationInput | CastellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Castells.
     */
    cursor?: CastellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Castells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Castells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Castells.
     */
    distinct?: CastellScalarFieldEnum | CastellScalarFieldEnum[]
  }

  /**
   * Castell findFirstOrThrow
   */
  export type CastellFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * Filter, which Castell to fetch.
     */
    where?: CastellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Castells to fetch.
     */
    orderBy?: CastellOrderByWithRelationInput | CastellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Castells.
     */
    cursor?: CastellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Castells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Castells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Castells.
     */
    distinct?: CastellScalarFieldEnum | CastellScalarFieldEnum[]
  }

  /**
   * Castell findMany
   */
  export type CastellFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * Filter, which Castells to fetch.
     */
    where?: CastellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Castells to fetch.
     */
    orderBy?: CastellOrderByWithRelationInput | CastellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Castells.
     */
    cursor?: CastellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Castells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Castells.
     */
    skip?: number
    distinct?: CastellScalarFieldEnum | CastellScalarFieldEnum[]
  }

  /**
   * Castell create
   */
  export type CastellCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * The data needed to create a Castell.
     */
    data: XOR<CastellCreateInput, CastellUncheckedCreateInput>
  }

  /**
   * Castell createMany
   */
  export type CastellCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Castells.
     */
    data: CastellCreateManyInput | CastellCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Castell createManyAndReturn
   */
  export type CastellCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * The data used to create many Castells.
     */
    data: CastellCreateManyInput | CastellCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Castell update
   */
  export type CastellUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * The data needed to update a Castell.
     */
    data: XOR<CastellUpdateInput, CastellUncheckedUpdateInput>
    /**
     * Choose, which Castell to update.
     */
    where: CastellWhereUniqueInput
  }

  /**
   * Castell updateMany
   */
  export type CastellUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Castells.
     */
    data: XOR<CastellUpdateManyMutationInput, CastellUncheckedUpdateManyInput>
    /**
     * Filter which Castells to update
     */
    where?: CastellWhereInput
    /**
     * Limit how many Castells to update.
     */
    limit?: number
  }

  /**
   * Castell updateManyAndReturn
   */
  export type CastellUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * The data used to update Castells.
     */
    data: XOR<CastellUpdateManyMutationInput, CastellUncheckedUpdateManyInput>
    /**
     * Filter which Castells to update
     */
    where?: CastellWhereInput
    /**
     * Limit how many Castells to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Castell upsert
   */
  export type CastellUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * The filter to search for the Castell to update in case it exists.
     */
    where: CastellWhereUniqueInput
    /**
     * In case the Castell found by the `where` argument doesn't exist, create a new Castell with this data.
     */
    create: XOR<CastellCreateInput, CastellUncheckedCreateInput>
    /**
     * In case the Castell was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CastellUpdateInput, CastellUncheckedUpdateInput>
  }

  /**
   * Castell delete
   */
  export type CastellDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * Filter which Castell to delete.
     */
    where: CastellWhereUniqueInput
  }

  /**
   * Castell deleteMany
   */
  export type CastellDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Castells to delete
     */
    where?: CastellWhereInput
    /**
     * Limit how many Castells to delete.
     */
    limit?: number
  }

  /**
   * Castell without action
   */
  export type CastellDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
  }


  /**
   * Model Usuari
   */

  export type AggregateUsuari = {
    _count: UsuariCountAggregateOutputType | null
    _avg: UsuariAvgAggregateOutputType | null
    _sum: UsuariSumAggregateOutputType | null
    _min: UsuariMinAggregateOutputType | null
    _max: UsuariMaxAggregateOutputType | null
  }

  export type UsuariAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariSumAggregateOutputType = {
    id: number | null
  }

  export type UsuariMinAggregateOutputType = {
    id: number | null
    correu: string | null
    contrassenya: string | null
    nom: string | null
  }

  export type UsuariMaxAggregateOutputType = {
    id: number | null
    correu: string | null
    contrassenya: string | null
    nom: string | null
  }

  export type UsuariCountAggregateOutputType = {
    id: number
    correu: number
    contrassenya: number
    nom: number
    _all: number
  }


  export type UsuariAvgAggregateInputType = {
    id?: true
  }

  export type UsuariSumAggregateInputType = {
    id?: true
  }

  export type UsuariMinAggregateInputType = {
    id?: true
    correu?: true
    contrassenya?: true
    nom?: true
  }

  export type UsuariMaxAggregateInputType = {
    id?: true
    correu?: true
    contrassenya?: true
    nom?: true
  }

  export type UsuariCountAggregateInputType = {
    id?: true
    correu?: true
    contrassenya?: true
    nom?: true
    _all?: true
  }

  export type UsuariAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuari to aggregate.
     */
    where?: UsuariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuaris to fetch.
     */
    orderBy?: UsuariOrderByWithRelationInput | UsuariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuaris
    **/
    _count?: true | UsuariCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariMaxAggregateInputType
  }

  export type GetUsuariAggregateType<T extends UsuariAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuari]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuari[P]>
      : GetScalarType<T[P], AggregateUsuari[P]>
  }




  export type UsuariGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariWhereInput
    orderBy?: UsuariOrderByWithAggregationInput | UsuariOrderByWithAggregationInput[]
    by: UsuariScalarFieldEnum[] | UsuariScalarFieldEnum
    having?: UsuariScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariCountAggregateInputType | true
    _avg?: UsuariAvgAggregateInputType
    _sum?: UsuariSumAggregateInputType
    _min?: UsuariMinAggregateInputType
    _max?: UsuariMaxAggregateInputType
  }

  export type UsuariGroupByOutputType = {
    id: number
    correu: string
    contrassenya: string
    nom: string
    _count: UsuariCountAggregateOutputType | null
    _avg: UsuariAvgAggregateOutputType | null
    _sum: UsuariSumAggregateOutputType | null
    _min: UsuariMinAggregateOutputType | null
    _max: UsuariMaxAggregateOutputType | null
  }

  type GetUsuariGroupByPayload<T extends UsuariGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariGroupByOutputType[P]>
        }
      >
    >


  export type UsuariSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correu?: boolean
    contrassenya?: boolean
    nom?: boolean
  }, ExtArgs["result"]["usuari"]>

  export type UsuariSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correu?: boolean
    contrassenya?: boolean
    nom?: boolean
  }, ExtArgs["result"]["usuari"]>

  export type UsuariSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correu?: boolean
    contrassenya?: boolean
    nom?: boolean
  }, ExtArgs["result"]["usuari"]>

  export type UsuariSelectScalar = {
    id?: boolean
    correu?: boolean
    contrassenya?: boolean
    nom?: boolean
  }

  export type UsuariOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "correu" | "contrassenya" | "nom", ExtArgs["result"]["usuari"]>

  export type $UsuariPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuari"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      correu: string
      contrassenya: string
      nom: string
    }, ExtArgs["result"]["usuari"]>
    composites: {}
  }

  type UsuariGetPayload<S extends boolean | null | undefined | UsuariDefaultArgs> = $Result.GetResult<Prisma.$UsuariPayload, S>

  type UsuariCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariCountAggregateInputType | true
    }

  export interface UsuariDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuari'], meta: { name: 'Usuari' } }
    /**
     * Find zero or one Usuari that matches the filter.
     * @param {UsuariFindUniqueArgs} args - Arguments to find a Usuari
     * @example
     * // Get one Usuari
     * const usuari = await prisma.usuari.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariFindUniqueArgs>(args: SelectSubset<T, UsuariFindUniqueArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuari that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariFindUniqueOrThrowArgs} args - Arguments to find a Usuari
     * @example
     * // Get one Usuari
     * const usuari = await prisma.usuari.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuari that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariFindFirstArgs} args - Arguments to find a Usuari
     * @example
     * // Get one Usuari
     * const usuari = await prisma.usuari.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariFindFirstArgs>(args?: SelectSubset<T, UsuariFindFirstArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuari that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariFindFirstOrThrowArgs} args - Arguments to find a Usuari
     * @example
     * // Get one Usuari
     * const usuari = await prisma.usuari.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuaris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuaris
     * const usuaris = await prisma.usuari.findMany()
     * 
     * // Get first 10 Usuaris
     * const usuaris = await prisma.usuari.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariWithIdOnly = await prisma.usuari.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuariFindManyArgs>(args?: SelectSubset<T, UsuariFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuari.
     * @param {UsuariCreateArgs} args - Arguments to create a Usuari.
     * @example
     * // Create one Usuari
     * const Usuari = await prisma.usuari.create({
     *   data: {
     *     // ... data to create a Usuari
     *   }
     * })
     * 
     */
    create<T extends UsuariCreateArgs>(args: SelectSubset<T, UsuariCreateArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuaris.
     * @param {UsuariCreateManyArgs} args - Arguments to create many Usuaris.
     * @example
     * // Create many Usuaris
     * const usuari = await prisma.usuari.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariCreateManyArgs>(args?: SelectSubset<T, UsuariCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuaris and returns the data saved in the database.
     * @param {UsuariCreateManyAndReturnArgs} args - Arguments to create many Usuaris.
     * @example
     * // Create many Usuaris
     * const usuari = await prisma.usuari.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuaris and only return the `id`
     * const usuariWithIdOnly = await prisma.usuari.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuariCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuariCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuari.
     * @param {UsuariDeleteArgs} args - Arguments to delete one Usuari.
     * @example
     * // Delete one Usuari
     * const Usuari = await prisma.usuari.delete({
     *   where: {
     *     // ... filter to delete one Usuari
     *   }
     * })
     * 
     */
    delete<T extends UsuariDeleteArgs>(args: SelectSubset<T, UsuariDeleteArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuari.
     * @param {UsuariUpdateArgs} args - Arguments to update one Usuari.
     * @example
     * // Update one Usuari
     * const usuari = await prisma.usuari.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariUpdateArgs>(args: SelectSubset<T, UsuariUpdateArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuaris.
     * @param {UsuariDeleteManyArgs} args - Arguments to filter Usuaris to delete.
     * @example
     * // Delete a few Usuaris
     * const { count } = await prisma.usuari.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariDeleteManyArgs>(args?: SelectSubset<T, UsuariDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuaris
     * const usuari = await prisma.usuari.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariUpdateManyArgs>(args: SelectSubset<T, UsuariUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuaris and returns the data updated in the database.
     * @param {UsuariUpdateManyAndReturnArgs} args - Arguments to update many Usuaris.
     * @example
     * // Update many Usuaris
     * const usuari = await prisma.usuari.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuaris and only return the `id`
     * const usuariWithIdOnly = await prisma.usuari.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuariUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuariUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuari.
     * @param {UsuariUpsertArgs} args - Arguments to update or create a Usuari.
     * @example
     * // Update or create a Usuari
     * const usuari = await prisma.usuari.upsert({
     *   create: {
     *     // ... data to create a Usuari
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuari we want to update
     *   }
     * })
     */
    upsert<T extends UsuariUpsertArgs>(args: SelectSubset<T, UsuariUpsertArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariCountArgs} args - Arguments to filter Usuaris to count.
     * @example
     * // Count the number of Usuaris
     * const count = await prisma.usuari.count({
     *   where: {
     *     // ... the filter for the Usuaris we want to count
     *   }
     * })
    **/
    count<T extends UsuariCountArgs>(
      args?: Subset<T, UsuariCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariAggregateArgs>(args: Subset<T, UsuariAggregateArgs>): Prisma.PrismaPromise<GetUsuariAggregateType<T>>

    /**
     * Group by Usuari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariGroupByArgs} args - Group by arguments.
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
      T extends UsuariGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariGroupByArgs['orderBy'] }
        : { orderBy?: UsuariGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuariGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuari model
   */
  readonly fields: UsuariFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuari.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Usuari model
   */
  interface UsuariFieldRefs {
    readonly id: FieldRef<"Usuari", 'Int'>
    readonly correu: FieldRef<"Usuari", 'String'>
    readonly contrassenya: FieldRef<"Usuari", 'String'>
    readonly nom: FieldRef<"Usuari", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuari findUnique
   */
  export type UsuariFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Filter, which Usuari to fetch.
     */
    where: UsuariWhereUniqueInput
  }

  /**
   * Usuari findUniqueOrThrow
   */
  export type UsuariFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Filter, which Usuari to fetch.
     */
    where: UsuariWhereUniqueInput
  }

  /**
   * Usuari findFirst
   */
  export type UsuariFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Filter, which Usuari to fetch.
     */
    where?: UsuariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuaris to fetch.
     */
    orderBy?: UsuariOrderByWithRelationInput | UsuariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuaris.
     */
    cursor?: UsuariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuaris.
     */
    distinct?: UsuariScalarFieldEnum | UsuariScalarFieldEnum[]
  }

  /**
   * Usuari findFirstOrThrow
   */
  export type UsuariFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Filter, which Usuari to fetch.
     */
    where?: UsuariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuaris to fetch.
     */
    orderBy?: UsuariOrderByWithRelationInput | UsuariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuaris.
     */
    cursor?: UsuariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuaris.
     */
    distinct?: UsuariScalarFieldEnum | UsuariScalarFieldEnum[]
  }

  /**
   * Usuari findMany
   */
  export type UsuariFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Filter, which Usuaris to fetch.
     */
    where?: UsuariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuaris to fetch.
     */
    orderBy?: UsuariOrderByWithRelationInput | UsuariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuaris.
     */
    cursor?: UsuariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuaris.
     */
    skip?: number
    distinct?: UsuariScalarFieldEnum | UsuariScalarFieldEnum[]
  }

  /**
   * Usuari create
   */
  export type UsuariCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuari.
     */
    data: XOR<UsuariCreateInput, UsuariUncheckedCreateInput>
  }

  /**
   * Usuari createMany
   */
  export type UsuariCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuaris.
     */
    data: UsuariCreateManyInput | UsuariCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuari createManyAndReturn
   */
  export type UsuariCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * The data used to create many Usuaris.
     */
    data: UsuariCreateManyInput | UsuariCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuari update
   */
  export type UsuariUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuari.
     */
    data: XOR<UsuariUpdateInput, UsuariUncheckedUpdateInput>
    /**
     * Choose, which Usuari to update.
     */
    where: UsuariWhereUniqueInput
  }

  /**
   * Usuari updateMany
   */
  export type UsuariUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuaris.
     */
    data: XOR<UsuariUpdateManyMutationInput, UsuariUncheckedUpdateManyInput>
    /**
     * Filter which Usuaris to update
     */
    where?: UsuariWhereInput
    /**
     * Limit how many Usuaris to update.
     */
    limit?: number
  }

  /**
   * Usuari updateManyAndReturn
   */
  export type UsuariUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * The data used to update Usuaris.
     */
    data: XOR<UsuariUpdateManyMutationInput, UsuariUncheckedUpdateManyInput>
    /**
     * Filter which Usuaris to update
     */
    where?: UsuariWhereInput
    /**
     * Limit how many Usuaris to update.
     */
    limit?: number
  }

  /**
   * Usuari upsert
   */
  export type UsuariUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuari to update in case it exists.
     */
    where: UsuariWhereUniqueInput
    /**
     * In case the Usuari found by the `where` argument doesn't exist, create a new Usuari with this data.
     */
    create: XOR<UsuariCreateInput, UsuariUncheckedCreateInput>
    /**
     * In case the Usuari was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariUpdateInput, UsuariUncheckedUpdateInput>
  }

  /**
   * Usuari delete
   */
  export type UsuariDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Filter which Usuari to delete.
     */
    where: UsuariWhereUniqueInput
  }

  /**
   * Usuari deleteMany
   */
  export type UsuariDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuaris to delete
     */
    where?: UsuariWhereInput
    /**
     * Limit how many Usuaris to delete.
     */
    limit?: number
  }

  /**
   * Usuari without action
   */
  export type UsuariDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
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


  export const ActuacioScalarFieldEnum: {
    id: 'id',
    data: 'data',
    dataHora: 'dataHora',
    lloc: 'lloc',
    ciutat: 'ciutat'
  };

  export type ActuacioScalarFieldEnum = (typeof ActuacioScalarFieldEnum)[keyof typeof ActuacioScalarFieldEnum]


  export const CastellScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    actuacioId: 'actuacioId',
    resultat: 'resultat'
  };

  export type CastellScalarFieldEnum = (typeof CastellScalarFieldEnum)[keyof typeof CastellScalarFieldEnum]


  export const UsuariScalarFieldEnum: {
    id: 'id',
    correu: 'correu',
    contrassenya: 'contrassenya',
    nom: 'nom'
  };

  export type UsuariScalarFieldEnum = (typeof UsuariScalarFieldEnum)[keyof typeof UsuariScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type ActuacioWhereInput = {
    AND?: ActuacioWhereInput | ActuacioWhereInput[]
    OR?: ActuacioWhereInput[]
    NOT?: ActuacioWhereInput | ActuacioWhereInput[]
    id?: IntFilter<"Actuacio"> | number
    data?: DateTimeFilter<"Actuacio"> | Date | string
    dataHora?: DateTimeNullableFilter<"Actuacio"> | Date | string | null
    lloc?: StringNullableFilter<"Actuacio"> | string | null
    ciutat?: StringFilter<"Actuacio"> | string
    castells?: CastellListRelationFilter
  }

  export type ActuacioOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    dataHora?: SortOrderInput | SortOrder
    lloc?: SortOrderInput | SortOrder
    ciutat?: SortOrder
    castells?: CastellOrderByRelationAggregateInput
  }

  export type ActuacioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActuacioWhereInput | ActuacioWhereInput[]
    OR?: ActuacioWhereInput[]
    NOT?: ActuacioWhereInput | ActuacioWhereInput[]
    data?: DateTimeFilter<"Actuacio"> | Date | string
    dataHora?: DateTimeNullableFilter<"Actuacio"> | Date | string | null
    lloc?: StringNullableFilter<"Actuacio"> | string | null
    ciutat?: StringFilter<"Actuacio"> | string
    castells?: CastellListRelationFilter
  }, "id">

  export type ActuacioOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    dataHora?: SortOrderInput | SortOrder
    lloc?: SortOrderInput | SortOrder
    ciutat?: SortOrder
    _count?: ActuacioCountOrderByAggregateInput
    _avg?: ActuacioAvgOrderByAggregateInput
    _max?: ActuacioMaxOrderByAggregateInput
    _min?: ActuacioMinOrderByAggregateInput
    _sum?: ActuacioSumOrderByAggregateInput
  }

  export type ActuacioScalarWhereWithAggregatesInput = {
    AND?: ActuacioScalarWhereWithAggregatesInput | ActuacioScalarWhereWithAggregatesInput[]
    OR?: ActuacioScalarWhereWithAggregatesInput[]
    NOT?: ActuacioScalarWhereWithAggregatesInput | ActuacioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Actuacio"> | number
    data?: DateTimeWithAggregatesFilter<"Actuacio"> | Date | string
    dataHora?: DateTimeNullableWithAggregatesFilter<"Actuacio"> | Date | string | null
    lloc?: StringNullableWithAggregatesFilter<"Actuacio"> | string | null
    ciutat?: StringWithAggregatesFilter<"Actuacio"> | string
  }

  export type CastellWhereInput = {
    AND?: CastellWhereInput | CastellWhereInput[]
    OR?: CastellWhereInput[]
    NOT?: CastellWhereInput | CastellWhereInput[]
    id?: IntFilter<"Castell"> | number
    nom?: StringFilter<"Castell"> | string
    actuacioId?: IntFilter<"Castell"> | number
    resultat?: StringFilter<"Castell"> | string
    actuacio?: XOR<ActuacioScalarRelationFilter, ActuacioWhereInput>
  }

  export type CastellOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    actuacioId?: SortOrder
    resultat?: SortOrder
    actuacio?: ActuacioOrderByWithRelationInput
  }

  export type CastellWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CastellWhereInput | CastellWhereInput[]
    OR?: CastellWhereInput[]
    NOT?: CastellWhereInput | CastellWhereInput[]
    nom?: StringFilter<"Castell"> | string
    actuacioId?: IntFilter<"Castell"> | number
    resultat?: StringFilter<"Castell"> | string
    actuacio?: XOR<ActuacioScalarRelationFilter, ActuacioWhereInput>
  }, "id">

  export type CastellOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    actuacioId?: SortOrder
    resultat?: SortOrder
    _count?: CastellCountOrderByAggregateInput
    _avg?: CastellAvgOrderByAggregateInput
    _max?: CastellMaxOrderByAggregateInput
    _min?: CastellMinOrderByAggregateInput
    _sum?: CastellSumOrderByAggregateInput
  }

  export type CastellScalarWhereWithAggregatesInput = {
    AND?: CastellScalarWhereWithAggregatesInput | CastellScalarWhereWithAggregatesInput[]
    OR?: CastellScalarWhereWithAggregatesInput[]
    NOT?: CastellScalarWhereWithAggregatesInput | CastellScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Castell"> | number
    nom?: StringWithAggregatesFilter<"Castell"> | string
    actuacioId?: IntWithAggregatesFilter<"Castell"> | number
    resultat?: StringWithAggregatesFilter<"Castell"> | string
  }

  export type UsuariWhereInput = {
    AND?: UsuariWhereInput | UsuariWhereInput[]
    OR?: UsuariWhereInput[]
    NOT?: UsuariWhereInput | UsuariWhereInput[]
    id?: IntFilter<"Usuari"> | number
    correu?: StringFilter<"Usuari"> | string
    contrassenya?: StringFilter<"Usuari"> | string
    nom?: StringFilter<"Usuari"> | string
  }

  export type UsuariOrderByWithRelationInput = {
    id?: SortOrder
    correu?: SortOrder
    contrassenya?: SortOrder
    nom?: SortOrder
  }

  export type UsuariWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correu?: string
    AND?: UsuariWhereInput | UsuariWhereInput[]
    OR?: UsuariWhereInput[]
    NOT?: UsuariWhereInput | UsuariWhereInput[]
    contrassenya?: StringFilter<"Usuari"> | string
    nom?: StringFilter<"Usuari"> | string
  }, "id" | "correu">

  export type UsuariOrderByWithAggregationInput = {
    id?: SortOrder
    correu?: SortOrder
    contrassenya?: SortOrder
    nom?: SortOrder
    _count?: UsuariCountOrderByAggregateInput
    _avg?: UsuariAvgOrderByAggregateInput
    _max?: UsuariMaxOrderByAggregateInput
    _min?: UsuariMinOrderByAggregateInput
    _sum?: UsuariSumOrderByAggregateInput
  }

  export type UsuariScalarWhereWithAggregatesInput = {
    AND?: UsuariScalarWhereWithAggregatesInput | UsuariScalarWhereWithAggregatesInput[]
    OR?: UsuariScalarWhereWithAggregatesInput[]
    NOT?: UsuariScalarWhereWithAggregatesInput | UsuariScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuari"> | number
    correu?: StringWithAggregatesFilter<"Usuari"> | string
    contrassenya?: StringWithAggregatesFilter<"Usuari"> | string
    nom?: StringWithAggregatesFilter<"Usuari"> | string
  }

  export type ActuacioCreateInput = {
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    castells?: CastellCreateNestedManyWithoutActuacioInput
  }

  export type ActuacioUncheckedCreateInput = {
    id?: number
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    castells?: CastellUncheckedCreateNestedManyWithoutActuacioInput
  }

  export type ActuacioUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    castells?: CastellUpdateManyWithoutActuacioNestedInput
  }

  export type ActuacioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    castells?: CastellUncheckedUpdateManyWithoutActuacioNestedInput
  }

  export type ActuacioCreateManyInput = {
    id?: number
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
  }

  export type ActuacioUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
  }

  export type ActuacioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
  }

  export type CastellCreateInput = {
    nom: string
    resultat: string
    actuacio: ActuacioCreateNestedOneWithoutCastellsInput
  }

  export type CastellUncheckedCreateInput = {
    id?: number
    nom: string
    actuacioId: number
    resultat: string
  }

  export type CastellUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    resultat?: StringFieldUpdateOperationsInput | string
    actuacio?: ActuacioUpdateOneRequiredWithoutCastellsNestedInput
  }

  export type CastellUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    actuacioId?: IntFieldUpdateOperationsInput | number
    resultat?: StringFieldUpdateOperationsInput | string
  }

  export type CastellCreateManyInput = {
    id?: number
    nom: string
    actuacioId: number
    resultat: string
  }

  export type CastellUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    resultat?: StringFieldUpdateOperationsInput | string
  }

  export type CastellUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    actuacioId?: IntFieldUpdateOperationsInput | number
    resultat?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariCreateInput = {
    correu: string
    contrassenya: string
    nom: string
  }

  export type UsuariUncheckedCreateInput = {
    id?: number
    correu: string
    contrassenya: string
    nom: string
  }

  export type UsuariUpdateInput = {
    correu?: StringFieldUpdateOperationsInput | string
    contrassenya?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    correu?: StringFieldUpdateOperationsInput | string
    contrassenya?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariCreateManyInput = {
    id?: number
    correu: string
    contrassenya: string
    nom: string
  }

  export type UsuariUpdateManyMutationInput = {
    correu?: StringFieldUpdateOperationsInput | string
    contrassenya?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    correu?: StringFieldUpdateOperationsInput | string
    contrassenya?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
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

  export type CastellListRelationFilter = {
    every?: CastellWhereInput
    some?: CastellWhereInput
    none?: CastellWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CastellOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActuacioCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    dataHora?: SortOrder
    lloc?: SortOrder
    ciutat?: SortOrder
  }

  export type ActuacioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActuacioMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    dataHora?: SortOrder
    lloc?: SortOrder
    ciutat?: SortOrder
  }

  export type ActuacioMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    dataHora?: SortOrder
    lloc?: SortOrder
    ciutat?: SortOrder
  }

  export type ActuacioSumOrderByAggregateInput = {
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

  export type ActuacioScalarRelationFilter = {
    is?: ActuacioWhereInput
    isNot?: ActuacioWhereInput
  }

  export type CastellCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    actuacioId?: SortOrder
    resultat?: SortOrder
  }

  export type CastellAvgOrderByAggregateInput = {
    id?: SortOrder
    actuacioId?: SortOrder
  }

  export type CastellMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    actuacioId?: SortOrder
    resultat?: SortOrder
  }

  export type CastellMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    actuacioId?: SortOrder
    resultat?: SortOrder
  }

  export type CastellSumOrderByAggregateInput = {
    id?: SortOrder
    actuacioId?: SortOrder
  }

  export type UsuariCountOrderByAggregateInput = {
    id?: SortOrder
    correu?: SortOrder
    contrassenya?: SortOrder
    nom?: SortOrder
  }

  export type UsuariAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuariMaxOrderByAggregateInput = {
    id?: SortOrder
    correu?: SortOrder
    contrassenya?: SortOrder
    nom?: SortOrder
  }

  export type UsuariMinOrderByAggregateInput = {
    id?: SortOrder
    correu?: SortOrder
    contrassenya?: SortOrder
    nom?: SortOrder
  }

  export type UsuariSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CastellCreateNestedManyWithoutActuacioInput = {
    create?: XOR<CastellCreateWithoutActuacioInput, CastellUncheckedCreateWithoutActuacioInput> | CastellCreateWithoutActuacioInput[] | CastellUncheckedCreateWithoutActuacioInput[]
    connectOrCreate?: CastellCreateOrConnectWithoutActuacioInput | CastellCreateOrConnectWithoutActuacioInput[]
    createMany?: CastellCreateManyActuacioInputEnvelope
    connect?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
  }

  export type CastellUncheckedCreateNestedManyWithoutActuacioInput = {
    create?: XOR<CastellCreateWithoutActuacioInput, CastellUncheckedCreateWithoutActuacioInput> | CastellCreateWithoutActuacioInput[] | CastellUncheckedCreateWithoutActuacioInput[]
    connectOrCreate?: CastellCreateOrConnectWithoutActuacioInput | CastellCreateOrConnectWithoutActuacioInput[]
    createMany?: CastellCreateManyActuacioInputEnvelope
    connect?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CastellUpdateManyWithoutActuacioNestedInput = {
    create?: XOR<CastellCreateWithoutActuacioInput, CastellUncheckedCreateWithoutActuacioInput> | CastellCreateWithoutActuacioInput[] | CastellUncheckedCreateWithoutActuacioInput[]
    connectOrCreate?: CastellCreateOrConnectWithoutActuacioInput | CastellCreateOrConnectWithoutActuacioInput[]
    upsert?: CastellUpsertWithWhereUniqueWithoutActuacioInput | CastellUpsertWithWhereUniqueWithoutActuacioInput[]
    createMany?: CastellCreateManyActuacioInputEnvelope
    set?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    disconnect?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    delete?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    connect?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    update?: CastellUpdateWithWhereUniqueWithoutActuacioInput | CastellUpdateWithWhereUniqueWithoutActuacioInput[]
    updateMany?: CastellUpdateManyWithWhereWithoutActuacioInput | CastellUpdateManyWithWhereWithoutActuacioInput[]
    deleteMany?: CastellScalarWhereInput | CastellScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CastellUncheckedUpdateManyWithoutActuacioNestedInput = {
    create?: XOR<CastellCreateWithoutActuacioInput, CastellUncheckedCreateWithoutActuacioInput> | CastellCreateWithoutActuacioInput[] | CastellUncheckedCreateWithoutActuacioInput[]
    connectOrCreate?: CastellCreateOrConnectWithoutActuacioInput | CastellCreateOrConnectWithoutActuacioInput[]
    upsert?: CastellUpsertWithWhereUniqueWithoutActuacioInput | CastellUpsertWithWhereUniqueWithoutActuacioInput[]
    createMany?: CastellCreateManyActuacioInputEnvelope
    set?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    disconnect?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    delete?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    connect?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    update?: CastellUpdateWithWhereUniqueWithoutActuacioInput | CastellUpdateWithWhereUniqueWithoutActuacioInput[]
    updateMany?: CastellUpdateManyWithWhereWithoutActuacioInput | CastellUpdateManyWithWhereWithoutActuacioInput[]
    deleteMany?: CastellScalarWhereInput | CastellScalarWhereInput[]
  }

  export type ActuacioCreateNestedOneWithoutCastellsInput = {
    create?: XOR<ActuacioCreateWithoutCastellsInput, ActuacioUncheckedCreateWithoutCastellsInput>
    connectOrCreate?: ActuacioCreateOrConnectWithoutCastellsInput
    connect?: ActuacioWhereUniqueInput
  }

  export type ActuacioUpdateOneRequiredWithoutCastellsNestedInput = {
    create?: XOR<ActuacioCreateWithoutCastellsInput, ActuacioUncheckedCreateWithoutCastellsInput>
    connectOrCreate?: ActuacioCreateOrConnectWithoutCastellsInput
    upsert?: ActuacioUpsertWithoutCastellsInput
    connect?: ActuacioWhereUniqueInput
    update?: XOR<XOR<ActuacioUpdateToOneWithWhereWithoutCastellsInput, ActuacioUpdateWithoutCastellsInput>, ActuacioUncheckedUpdateWithoutCastellsInput>
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

  export type CastellCreateWithoutActuacioInput = {
    nom: string
    resultat: string
  }

  export type CastellUncheckedCreateWithoutActuacioInput = {
    id?: number
    nom: string
    resultat: string
  }

  export type CastellCreateOrConnectWithoutActuacioInput = {
    where: CastellWhereUniqueInput
    create: XOR<CastellCreateWithoutActuacioInput, CastellUncheckedCreateWithoutActuacioInput>
  }

  export type CastellCreateManyActuacioInputEnvelope = {
    data: CastellCreateManyActuacioInput | CastellCreateManyActuacioInput[]
    skipDuplicates?: boolean
  }

  export type CastellUpsertWithWhereUniqueWithoutActuacioInput = {
    where: CastellWhereUniqueInput
    update: XOR<CastellUpdateWithoutActuacioInput, CastellUncheckedUpdateWithoutActuacioInput>
    create: XOR<CastellCreateWithoutActuacioInput, CastellUncheckedCreateWithoutActuacioInput>
  }

  export type CastellUpdateWithWhereUniqueWithoutActuacioInput = {
    where: CastellWhereUniqueInput
    data: XOR<CastellUpdateWithoutActuacioInput, CastellUncheckedUpdateWithoutActuacioInput>
  }

  export type CastellUpdateManyWithWhereWithoutActuacioInput = {
    where: CastellScalarWhereInput
    data: XOR<CastellUpdateManyMutationInput, CastellUncheckedUpdateManyWithoutActuacioInput>
  }

  export type CastellScalarWhereInput = {
    AND?: CastellScalarWhereInput | CastellScalarWhereInput[]
    OR?: CastellScalarWhereInput[]
    NOT?: CastellScalarWhereInput | CastellScalarWhereInput[]
    id?: IntFilter<"Castell"> | number
    nom?: StringFilter<"Castell"> | string
    actuacioId?: IntFilter<"Castell"> | number
    resultat?: StringFilter<"Castell"> | string
  }

  export type ActuacioCreateWithoutCastellsInput = {
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
  }

  export type ActuacioUncheckedCreateWithoutCastellsInput = {
    id?: number
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
  }

  export type ActuacioCreateOrConnectWithoutCastellsInput = {
    where: ActuacioWhereUniqueInput
    create: XOR<ActuacioCreateWithoutCastellsInput, ActuacioUncheckedCreateWithoutCastellsInput>
  }

  export type ActuacioUpsertWithoutCastellsInput = {
    update: XOR<ActuacioUpdateWithoutCastellsInput, ActuacioUncheckedUpdateWithoutCastellsInput>
    create: XOR<ActuacioCreateWithoutCastellsInput, ActuacioUncheckedCreateWithoutCastellsInput>
    where?: ActuacioWhereInput
  }

  export type ActuacioUpdateToOneWithWhereWithoutCastellsInput = {
    where?: ActuacioWhereInput
    data: XOR<ActuacioUpdateWithoutCastellsInput, ActuacioUncheckedUpdateWithoutCastellsInput>
  }

  export type ActuacioUpdateWithoutCastellsInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
  }

  export type ActuacioUncheckedUpdateWithoutCastellsInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
  }

  export type CastellCreateManyActuacioInput = {
    id?: number
    nom: string
    resultat: string
  }

  export type CastellUpdateWithoutActuacioInput = {
    nom?: StringFieldUpdateOperationsInput | string
    resultat?: StringFieldUpdateOperationsInput | string
  }

  export type CastellUncheckedUpdateWithoutActuacioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    resultat?: StringFieldUpdateOperationsInput | string
  }

  export type CastellUncheckedUpdateManyWithoutActuacioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    resultat?: StringFieldUpdateOperationsInput | string
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