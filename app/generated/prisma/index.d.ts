
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model EmailVerificationToken
 * 
 */
export type EmailVerificationToken = $Result.DefaultSelection<Prisma.$EmailVerificationTokenPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model NfcCard
 * 
 */
export type NfcCard = $Result.DefaultSelection<Prisma.$NfcCardPayload>
/**
 * Model TransactionType
 * 
 */
export type TransactionType = $Result.DefaultSelection<Prisma.$TransactionTypePayload>
/**
 * Model PropertyTemplate
 * 
 */
export type PropertyTemplate = $Result.DefaultSelection<Prisma.$PropertyTemplatePayload>
/**
 * Model TransactionTemplate
 * 
 */
export type TransactionTemplate = $Result.DefaultSelection<Prisma.$TransactionTemplatePayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GameStatus: {
  ACTIVE: 'ACTIVE',
  ENDED: 'ENDED'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]


export const TransactionDirection: {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT',
  TRANSFER: 'TRANSFER'
};

export type TransactionDirection = (typeof TransactionDirection)[keyof typeof TransactionDirection]


export const TransactionKind: {
  BALANCE_UPDATE: 'BALANCE_UPDATE',
  TRANSFER: 'TRANSFER',
  BUY_PROPERTY: 'BUY_PROPERTY',
  PAY_RENT: 'PAY_RENT',
  MORTGAGE_PROPERTY: 'MORTGAGE_PROPERTY',
  COMMUNITY_CHEST: 'COMMUNITY_CHEST',
  CHANCE: 'CHANCE',
  TAX: 'TAX'
};

export type TransactionKind = (typeof TransactionKind)[keyof typeof TransactionKind]


export const PropertyGroup: {
  BROWN: 'BROWN',
  LIGHT_BLUE: 'LIGHT_BLUE',
  PINK: 'PINK',
  ORANGE: 'ORANGE',
  RED: 'RED',
  YELLOW: 'YELLOW',
  GREEN: 'GREEN',
  DARK_BLUE: 'DARK_BLUE'
};

export type PropertyGroup = (typeof PropertyGroup)[keyof typeof PropertyGroup]


export const PropertyKind: {
  RESIDENTIAL: 'RESIDENTIAL',
  TRANSPORT: 'TRANSPORT',
  UTILITY: 'UTILITY'
};

export type PropertyKind = (typeof PropertyKind)[keyof typeof PropertyKind]

}

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

export type TransactionDirection = $Enums.TransactionDirection

export const TransactionDirection: typeof $Enums.TransactionDirection

export type TransactionKind = $Enums.TransactionKind

export const TransactionKind: typeof $Enums.TransactionKind

export type PropertyGroup = $Enums.PropertyGroup

export const PropertyGroup: typeof $Enums.PropertyGroup

export type PropertyKind = $Enums.PropertyKind

export const PropertyKind: typeof $Enums.PropertyKind

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerificationToken`: Exposes CRUD operations for the **EmailVerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerificationTokens
    * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
    * ```
    */
  get emailVerificationToken(): Prisma.EmailVerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nfcCard`: Exposes CRUD operations for the **NfcCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NfcCards
    * const nfcCards = await prisma.nfcCard.findMany()
    * ```
    */
  get nfcCard(): Prisma.NfcCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionType`: Exposes CRUD operations for the **TransactionType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionTypes
    * const transactionTypes = await prisma.transactionType.findMany()
    * ```
    */
  get transactionType(): Prisma.TransactionTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyTemplate`: Exposes CRUD operations for the **PropertyTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyTemplates
    * const propertyTemplates = await prisma.propertyTemplate.findMany()
    * ```
    */
  get propertyTemplate(): Prisma.PropertyTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionTemplate`: Exposes CRUD operations for the **TransactionTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionTemplates
    * const transactionTemplates = await prisma.transactionTemplate.findMany()
    * ```
    */
  get transactionTemplate(): Prisma.TransactionTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    EmailVerificationToken: 'EmailVerificationToken',
    Game: 'Game',
    Player: 'Player',
    NfcCard: 'NfcCard',
    TransactionType: 'TransactionType',
    PropertyTemplate: 'PropertyTemplate',
    TransactionTemplate: 'TransactionTemplate',
    Transaction: 'Transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "emailVerificationToken" | "game" | "player" | "nfcCard" | "transactionType" | "propertyTemplate" | "transactionTemplate" | "transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      EmailVerificationToken: {
        payload: Prisma.$EmailVerificationTokenPayload<ExtArgs>
        fields: Prisma.EmailVerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          update: {
            args: Prisma.EmailVerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerificationToken>
          }
          groupBy: {
            args: Prisma.EmailVerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      NfcCard: {
        payload: Prisma.$NfcCardPayload<ExtArgs>
        fields: Prisma.NfcCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NfcCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NfcCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NfcCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NfcCardPayload>
          }
          findFirst: {
            args: Prisma.NfcCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NfcCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NfcCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NfcCardPayload>
          }
          findMany: {
            args: Prisma.NfcCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NfcCardPayload>[]
          }
          create: {
            args: Prisma.NfcCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NfcCardPayload>
          }
          createMany: {
            args: Prisma.NfcCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NfcCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NfcCardPayload>[]
          }
          delete: {
            args: Prisma.NfcCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NfcCardPayload>
          }
          update: {
            args: Prisma.NfcCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NfcCardPayload>
          }
          deleteMany: {
            args: Prisma.NfcCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NfcCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NfcCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NfcCardPayload>[]
          }
          upsert: {
            args: Prisma.NfcCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NfcCardPayload>
          }
          aggregate: {
            args: Prisma.NfcCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNfcCard>
          }
          groupBy: {
            args: Prisma.NfcCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<NfcCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.NfcCardCountArgs<ExtArgs>
            result: $Utils.Optional<NfcCardCountAggregateOutputType> | number
          }
        }
      }
      TransactionType: {
        payload: Prisma.$TransactionTypePayload<ExtArgs>
        fields: Prisma.TransactionTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          findFirst: {
            args: Prisma.TransactionTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          findMany: {
            args: Prisma.TransactionTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>[]
          }
          create: {
            args: Prisma.TransactionTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          createMany: {
            args: Prisma.TransactionTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>[]
          }
          delete: {
            args: Prisma.TransactionTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          update: {
            args: Prisma.TransactionTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          deleteMany: {
            args: Prisma.TransactionTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>[]
          }
          upsert: {
            args: Prisma.TransactionTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          aggregate: {
            args: Prisma.TransactionTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionType>
          }
          groupBy: {
            args: Prisma.TransactionTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionTypeCountAggregateOutputType> | number
          }
        }
      }
      PropertyTemplate: {
        payload: Prisma.$PropertyTemplatePayload<ExtArgs>
        fields: Prisma.PropertyTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyTemplatePayload>
          }
          findFirst: {
            args: Prisma.PropertyTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyTemplatePayload>
          }
          findMany: {
            args: Prisma.PropertyTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyTemplatePayload>[]
          }
          create: {
            args: Prisma.PropertyTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyTemplatePayload>
          }
          createMany: {
            args: Prisma.PropertyTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyTemplatePayload>[]
          }
          delete: {
            args: Prisma.PropertyTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyTemplatePayload>
          }
          update: {
            args: Prisma.PropertyTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyTemplatePayload>
          }
          deleteMany: {
            args: Prisma.PropertyTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyTemplatePayload>[]
          }
          upsert: {
            args: Prisma.PropertyTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyTemplatePayload>
          }
          aggregate: {
            args: Prisma.PropertyTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyTemplate>
          }
          groupBy: {
            args: Prisma.PropertyTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyTemplateCountAggregateOutputType> | number
          }
        }
      }
      TransactionTemplate: {
        payload: Prisma.$TransactionTemplatePayload<ExtArgs>
        fields: Prisma.TransactionTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTemplatePayload>
          }
          findFirst: {
            args: Prisma.TransactionTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTemplatePayload>
          }
          findMany: {
            args: Prisma.TransactionTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTemplatePayload>[]
          }
          create: {
            args: Prisma.TransactionTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTemplatePayload>
          }
          createMany: {
            args: Prisma.TransactionTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTemplatePayload>[]
          }
          delete: {
            args: Prisma.TransactionTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTemplatePayload>
          }
          update: {
            args: Prisma.TransactionTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTemplatePayload>
          }
          deleteMany: {
            args: Prisma.TransactionTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTemplatePayload>[]
          }
          upsert: {
            args: Prisma.TransactionTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTemplatePayload>
          }
          aggregate: {
            args: Prisma.TransactionTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionTemplate>
          }
          groupBy: {
            args: Prisma.TransactionTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionTemplateCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    emailVerificationToken?: EmailVerificationTokenOmit
    game?: GameOmit
    player?: PlayerOmit
    nfcCard?: NfcCardOmit
    transactionType?: TransactionTypeOmit
    propertyTemplate?: PropertyTemplateOmit
    transactionTemplate?: TransactionTemplateOmit
    transaction?: TransactionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    games: number
    emailVerificationTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | UserCountOutputTypeCountGamesArgs
    emailVerificationTokens?: boolean | UserCountOutputTypeCountEmailVerificationTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    players: number
    transactions: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | GameCountOutputTypeCountPlayersArgs
    transactions?: boolean | GameCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    outgoingTransactions: number
    incomingTransactions: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outgoingTransactions?: boolean | PlayerCountOutputTypeCountOutgoingTransactionsArgs
    incomingTransactions?: boolean | PlayerCountOutputTypeCountIncomingTransactionsArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountOutgoingTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountIncomingTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type TransactionTypeCountOutputType
   */

  export type TransactionTypeCountOutputType = {
    templates: number
    transactions: number
  }

  export type TransactionTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | TransactionTypeCountOutputTypeCountTemplatesArgs
    transactions?: boolean | TransactionTypeCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * TransactionTypeCountOutputType without action
   */
  export type TransactionTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTypeCountOutputType
     */
    select?: TransactionTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionTypeCountOutputType without action
   */
  export type TransactionTypeCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTemplateWhereInput
  }

  /**
   * TransactionTypeCountOutputType without action
   */
  export type TransactionTypeCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type PropertyTemplateCountOutputType
   */

  export type PropertyTemplateCountOutputType = {
    templates: number
  }

  export type PropertyTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | PropertyTemplateCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * PropertyTemplateCountOutputType without action
   */
  export type PropertyTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplateCountOutputType
     */
    select?: PropertyTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyTemplateCountOutputType without action
   */
  export type PropertyTemplateCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTemplateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    email: string | null
    emailVerified: Date | null
    passwordHash: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    email: string | null
    emailVerified: Date | null
    passwordHash: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    username: number
    email: number
    emailVerified: number
    passwordHash: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    email?: true
    emailVerified?: true
    passwordHash?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    email?: true
    emailVerified?: true
    passwordHash?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    email?: true
    emailVerified?: true
    passwordHash?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    username: string | null
    email: string | null
    emailVerified: Date | null
    passwordHash: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    passwordHash?: boolean
    games?: boolean | User$gamesArgs<ExtArgs>
    emailVerificationTokens?: boolean | User$emailVerificationTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    passwordHash?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "username" | "email" | "emailVerified" | "passwordHash", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | User$gamesArgs<ExtArgs>
    emailVerificationTokens?: boolean | User$emailVerificationTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      games: Prisma.$GamePayload<ExtArgs>[]
      emailVerificationTokens: Prisma.$EmailVerificationTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      username: string | null
      email: string | null
      emailVerified: Date | null
      passwordHash: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends User$gamesArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailVerificationTokens<T extends User$emailVerificationTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$emailVerificationTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly passwordHash: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.games
   */
  export type User$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.emailVerificationTokens
   */
  export type User$emailVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    cursor?: EmailVerificationTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerificationToken
   */

  export type AggregateEmailVerificationToken = {
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  export type EmailVerificationTokenMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    expiresAt: Date | null
    tokenHash: string | null
    email: string | null
    userId: string | null
  }

  export type EmailVerificationTokenMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    expiresAt: Date | null
    tokenHash: string | null
    email: string | null
    userId: string | null
  }

  export type EmailVerificationTokenCountAggregateOutputType = {
    id: number
    createdAt: number
    expiresAt: number
    tokenHash: number
    email: number
    userId: number
    _all: number
  }


  export type EmailVerificationTokenMinAggregateInputType = {
    id?: true
    createdAt?: true
    expiresAt?: true
    tokenHash?: true
    email?: true
    userId?: true
  }

  export type EmailVerificationTokenMaxAggregateInputType = {
    id?: true
    createdAt?: true
    expiresAt?: true
    tokenHash?: true
    email?: true
    userId?: true
  }

  export type EmailVerificationTokenCountAggregateInputType = {
    id?: true
    createdAt?: true
    expiresAt?: true
    tokenHash?: true
    email?: true
    userId?: true
    _all?: true
  }

  export type EmailVerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationToken to aggregate.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerificationTokens
    **/
    _count?: true | EmailVerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type GetEmailVerificationTokenAggregateType<T extends EmailVerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
      : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
  }




  export type EmailVerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithAggregationInput | EmailVerificationTokenOrderByWithAggregationInput[]
    by: EmailVerificationTokenScalarFieldEnum[] | EmailVerificationTokenScalarFieldEnum
    having?: EmailVerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationTokenCountAggregateInputType | true
    _min?: EmailVerificationTokenMinAggregateInputType
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type EmailVerificationTokenGroupByOutputType = {
    id: string
    createdAt: Date
    expiresAt: Date
    tokenHash: string
    email: string
    userId: string
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  type GetEmailVerificationTokenGroupByPayload<T extends EmailVerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    tokenHash?: boolean
    email?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    tokenHash?: boolean
    email?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    tokenHash?: boolean
    email?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectScalar = {
    id?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    tokenHash?: boolean
    email?: boolean
    userId?: boolean
  }

  export type EmailVerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "expiresAt" | "tokenHash" | "email" | "userId", ExtArgs["result"]["emailVerificationToken"]>
  export type EmailVerificationTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailVerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerificationToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      expiresAt: Date
      tokenHash: string
      email: string
      userId: string
    }, ExtArgs["result"]["emailVerificationToken"]>
    composites: {}
  }

  type EmailVerificationTokenGetPayload<S extends boolean | null | undefined | EmailVerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationTokenPayload, S>

  type EmailVerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationTokenCountAggregateInputType | true
    }

  export interface EmailVerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerificationToken'], meta: { name: 'EmailVerificationToken' } }
    /**
     * Find zero or one EmailVerificationToken that matches the filter.
     * @param {EmailVerificationTokenFindUniqueArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationTokenFindUniqueArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationTokenFindFirstArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
     * 
     * // Get first 10 EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationTokenFindManyArgs>(args?: SelectSubset<T, EmailVerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerificationToken.
     * @param {EmailVerificationTokenCreateArgs} args - Arguments to create a EmailVerificationToken.
     * @example
     * // Create one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.create({
     *   data: {
     *     // ... data to create a EmailVerificationToken
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationTokenCreateArgs>(args: SelectSubset<T, EmailVerificationTokenCreateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerificationTokens.
     * @param {EmailVerificationTokenCreateManyArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationTokenCreateManyArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerificationTokens and returns the data saved in the database.
     * @param {EmailVerificationTokenCreateManyAndReturnArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerificationToken.
     * @param {EmailVerificationTokenDeleteArgs} args - Arguments to delete one EmailVerificationToken.
     * @example
     * // Delete one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.delete({
     *   where: {
     *     // ... filter to delete one EmailVerificationToken
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationTokenDeleteArgs>(args: SelectSubset<T, EmailVerificationTokenDeleteArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpdateArgs} args - Arguments to update one EmailVerificationToken.
     * @example
     * // Update one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationTokenUpdateArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerificationTokens.
     * @param {EmailVerificationTokenDeleteManyArgs} args - Arguments to filter EmailVerificationTokens to delete.
     * @example
     * // Delete a few EmailVerificationTokens
     * const { count } = await prisma.emailVerificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationTokenDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationTokenUpdateManyArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens and returns the data updated in the database.
     * @param {EmailVerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many EmailVerificationTokens.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailVerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpsertArgs} args - Arguments to update or create a EmailVerificationToken.
     * @example
     * // Update or create a EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.upsert({
     *   create: {
     *     // ... data to create a EmailVerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationTokenUpsertArgs>(args: SelectSubset<T, EmailVerificationTokenUpsertArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenCountArgs} args - Arguments to filter EmailVerificationTokens to count.
     * @example
     * // Count the number of EmailVerificationTokens
     * const count = await prisma.emailVerificationToken.count({
     *   where: {
     *     // ... the filter for the EmailVerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationTokenCountArgs>(
      args?: Subset<T, EmailVerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailVerificationTokenAggregateArgs>(args: Subset<T, EmailVerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationTokenAggregateType<T>>

    /**
     * Group by EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends EmailVerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailVerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerificationToken model
   */
  readonly fields: EmailVerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmailVerificationToken model
   */
  interface EmailVerificationTokenFieldRefs {
    readonly id: FieldRef<"EmailVerificationToken", 'String'>
    readonly createdAt: FieldRef<"EmailVerificationToken", 'DateTime'>
    readonly expiresAt: FieldRef<"EmailVerificationToken", 'DateTime'>
    readonly tokenHash: FieldRef<"EmailVerificationToken", 'String'>
    readonly email: FieldRef<"EmailVerificationToken", 'String'>
    readonly userId: FieldRef<"EmailVerificationToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerificationToken findUnique
   */
  export type EmailVerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findUniqueOrThrow
   */
  export type EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findFirst
   */
  export type EmailVerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findFirstOrThrow
   */
  export type EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findMany
   */
  export type EmailVerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationTokens to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken create
   */
  export type EmailVerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
  }

  /**
   * EmailVerificationToken createMany
   */
  export type EmailVerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationToken createManyAndReturn
   */
  export type EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken update
   */
  export type EmailVerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which EmailVerificationToken to update.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken updateMany
   */
  export type EmailVerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken updateManyAndReturn
   */
  export type EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken upsert
   */
  export type EmailVerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailVerificationToken to update in case it exists.
     */
    where: EmailVerificationTokenWhereUniqueInput
    /**
     * In case the EmailVerificationToken found by the `where` argument doesn't exist, create a new EmailVerificationToken with this data.
     */
    create: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
    /**
     * In case the EmailVerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
  }

  /**
   * EmailVerificationToken delete
   */
  export type EmailVerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter which EmailVerificationToken to delete.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken deleteMany
   */
  export type EmailVerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationTokens to delete
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken without action
   */
  export type EmailVerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    playersCount: number | null
    initialBalance: number | null
  }

  export type GameSumAggregateOutputType = {
    playersCount: number | null
    initialBalance: number | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerUserId: string | null
    status: $Enums.GameStatus | null
    playersCount: number | null
    initialBalance: number | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerUserId: string | null
    status: $Enums.GameStatus | null
    playersCount: number | null
    initialBalance: number | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    ownerUserId: number
    status: number
    playersCount: number
    initialBalance: number
    startedAt: number
    endedAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    playersCount?: true
    initialBalance?: true
  }

  export type GameSumAggregateInputType = {
    playersCount?: true
    initialBalance?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    ownerUserId?: true
    status?: true
    playersCount?: true
    initialBalance?: true
    startedAt?: true
    endedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    ownerUserId?: true
    status?: true
    playersCount?: true
    initialBalance?: true
    startedAt?: true
    endedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    ownerUserId?: true
    status?: true
    playersCount?: true
    initialBalance?: true
    startedAt?: true
    endedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    ownerUserId: string | null
    status: $Enums.GameStatus
    playersCount: number
    initialBalance: number
    startedAt: Date
    endedAt: Date | null
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerUserId?: boolean
    status?: boolean
    playersCount?: boolean
    initialBalance?: boolean
    startedAt?: boolean
    endedAt?: boolean
    owner?: boolean | Game$ownerArgs<ExtArgs>
    players?: boolean | Game$playersArgs<ExtArgs>
    transactions?: boolean | Game$transactionsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerUserId?: boolean
    status?: boolean
    playersCount?: boolean
    initialBalance?: boolean
    startedAt?: boolean
    endedAt?: boolean
    owner?: boolean | Game$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerUserId?: boolean
    status?: boolean
    playersCount?: boolean
    initialBalance?: boolean
    startedAt?: boolean
    endedAt?: boolean
    owner?: boolean | Game$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerUserId?: boolean
    status?: boolean
    playersCount?: boolean
    initialBalance?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "ownerUserId" | "status" | "playersCount" | "initialBalance" | "startedAt" | "endedAt", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Game$ownerArgs<ExtArgs>
    players?: boolean | Game$playersArgs<ExtArgs>
    transactions?: boolean | Game$transactionsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Game$ownerArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Game$ownerArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      players: Prisma.$PlayerPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      ownerUserId: string | null
      status: $Enums.GameStatus
      playersCount: number
      initialBalance: number
      startedAt: Date
      endedAt: Date | null
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends Game$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Game$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    players<T extends Game$playersArgs<ExtArgs> = {}>(args?: Subset<T, Game$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Game$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Game$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
    readonly ownerUserId: FieldRef<"Game", 'String'>
    readonly status: FieldRef<"Game", 'GameStatus'>
    readonly playersCount: FieldRef<"Game", 'Int'>
    readonly initialBalance: FieldRef<"Game", 'Int'>
    readonly startedAt: FieldRef<"Game", 'DateTime'>
    readonly endedAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.owner
   */
  export type Game$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Game.players
   */
  export type Game$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Game.transactions
   */
  export type Game$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    seat: number | null
    balance: number | null
  }

  export type PlayerSumAggregateOutputType = {
    seat: number | null
    balance: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    gameId: string | null
    name: string | null
    seat: number | null
    balance: number | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    gameId: string | null
    name: string | null
    seat: number | null
    balance: number | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    gameId: number
    name: number
    seat: number
    balance: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    seat?: true
    balance?: true
  }

  export type PlayerSumAggregateInputType = {
    seat?: true
    balance?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    gameId?: true
    name?: true
    seat?: true
    balance?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    gameId?: true
    name?: true
    seat?: true
    balance?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    gameId?: true
    name?: true
    seat?: true
    balance?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    gameId: string
    name: string
    seat: number
    balance: number
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameId?: boolean
    name?: boolean
    seat?: boolean
    balance?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    nfcCard?: boolean | Player$nfcCardArgs<ExtArgs>
    outgoingTransactions?: boolean | Player$outgoingTransactionsArgs<ExtArgs>
    incomingTransactions?: boolean | Player$incomingTransactionsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameId?: boolean
    name?: boolean
    seat?: boolean
    balance?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameId?: boolean
    name?: boolean
    seat?: boolean
    balance?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameId?: boolean
    name?: boolean
    seat?: boolean
    balance?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "gameId" | "name" | "seat" | "balance", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    nfcCard?: boolean | Player$nfcCardArgs<ExtArgs>
    outgoingTransactions?: boolean | Player$outgoingTransactionsArgs<ExtArgs>
    incomingTransactions?: boolean | Player$incomingTransactionsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      nfcCard: Prisma.$NfcCardPayload<ExtArgs> | null
      outgoingTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      incomingTransactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      gameId: string
      name: string
      seat: number
      balance: number
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nfcCard<T extends Player$nfcCardArgs<ExtArgs> = {}>(args?: Subset<T, Player$nfcCardArgs<ExtArgs>>): Prisma__NfcCardClient<$Result.GetResult<Prisma.$NfcCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    outgoingTransactions<T extends Player$outgoingTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Player$outgoingTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomingTransactions<T extends Player$incomingTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Player$incomingTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'String'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
    readonly updatedAt: FieldRef<"Player", 'DateTime'>
    readonly gameId: FieldRef<"Player", 'String'>
    readonly name: FieldRef<"Player", 'String'>
    readonly seat: FieldRef<"Player", 'Int'>
    readonly balance: FieldRef<"Player", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.nfcCard
   */
  export type Player$nfcCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NfcCard
     */
    select?: NfcCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NfcCard
     */
    omit?: NfcCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NfcCardInclude<ExtArgs> | null
    where?: NfcCardWhereInput
  }

  /**
   * Player.outgoingTransactions
   */
  export type Player$outgoingTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Player.incomingTransactions
   */
  export type Player$incomingTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model NfcCard
   */

  export type AggregateNfcCard = {
    _count: NfcCardCountAggregateOutputType | null
    _min: NfcCardMinAggregateOutputType | null
    _max: NfcCardMaxAggregateOutputType | null
  }

  export type NfcCardMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    playerId: string | null
  }

  export type NfcCardMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    playerId: string | null
  }

  export type NfcCardCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    uid: number
    playerId: number
    _all: number
  }


  export type NfcCardMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    playerId?: true
  }

  export type NfcCardMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    playerId?: true
  }

  export type NfcCardCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    playerId?: true
    _all?: true
  }

  export type NfcCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NfcCard to aggregate.
     */
    where?: NfcCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NfcCards to fetch.
     */
    orderBy?: NfcCardOrderByWithRelationInput | NfcCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NfcCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NfcCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NfcCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NfcCards
    **/
    _count?: true | NfcCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NfcCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NfcCardMaxAggregateInputType
  }

  export type GetNfcCardAggregateType<T extends NfcCardAggregateArgs> = {
        [P in keyof T & keyof AggregateNfcCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNfcCard[P]>
      : GetScalarType<T[P], AggregateNfcCard[P]>
  }




  export type NfcCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NfcCardWhereInput
    orderBy?: NfcCardOrderByWithAggregationInput | NfcCardOrderByWithAggregationInput[]
    by: NfcCardScalarFieldEnum[] | NfcCardScalarFieldEnum
    having?: NfcCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NfcCardCountAggregateInputType | true
    _min?: NfcCardMinAggregateInputType
    _max?: NfcCardMaxAggregateInputType
  }

  export type NfcCardGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    uid: string
    playerId: string
    _count: NfcCardCountAggregateOutputType | null
    _min: NfcCardMinAggregateOutputType | null
    _max: NfcCardMaxAggregateOutputType | null
  }

  type GetNfcCardGroupByPayload<T extends NfcCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NfcCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NfcCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NfcCardGroupByOutputType[P]>
            : GetScalarType<T[P], NfcCardGroupByOutputType[P]>
        }
      >
    >


  export type NfcCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uid?: boolean
    playerId?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nfcCard"]>

  export type NfcCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uid?: boolean
    playerId?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nfcCard"]>

  export type NfcCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uid?: boolean
    playerId?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nfcCard"]>

  export type NfcCardSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uid?: boolean
    playerId?: boolean
  }

  export type NfcCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "uid" | "playerId", ExtArgs["result"]["nfcCard"]>
  export type NfcCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type NfcCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type NfcCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $NfcCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NfcCard"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      uid: string
      playerId: string
    }, ExtArgs["result"]["nfcCard"]>
    composites: {}
  }

  type NfcCardGetPayload<S extends boolean | null | undefined | NfcCardDefaultArgs> = $Result.GetResult<Prisma.$NfcCardPayload, S>

  type NfcCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NfcCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NfcCardCountAggregateInputType | true
    }

  export interface NfcCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NfcCard'], meta: { name: 'NfcCard' } }
    /**
     * Find zero or one NfcCard that matches the filter.
     * @param {NfcCardFindUniqueArgs} args - Arguments to find a NfcCard
     * @example
     * // Get one NfcCard
     * const nfcCard = await prisma.nfcCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NfcCardFindUniqueArgs>(args: SelectSubset<T, NfcCardFindUniqueArgs<ExtArgs>>): Prisma__NfcCardClient<$Result.GetResult<Prisma.$NfcCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NfcCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NfcCardFindUniqueOrThrowArgs} args - Arguments to find a NfcCard
     * @example
     * // Get one NfcCard
     * const nfcCard = await prisma.nfcCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NfcCardFindUniqueOrThrowArgs>(args: SelectSubset<T, NfcCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NfcCardClient<$Result.GetResult<Prisma.$NfcCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NfcCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NfcCardFindFirstArgs} args - Arguments to find a NfcCard
     * @example
     * // Get one NfcCard
     * const nfcCard = await prisma.nfcCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NfcCardFindFirstArgs>(args?: SelectSubset<T, NfcCardFindFirstArgs<ExtArgs>>): Prisma__NfcCardClient<$Result.GetResult<Prisma.$NfcCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NfcCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NfcCardFindFirstOrThrowArgs} args - Arguments to find a NfcCard
     * @example
     * // Get one NfcCard
     * const nfcCard = await prisma.nfcCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NfcCardFindFirstOrThrowArgs>(args?: SelectSubset<T, NfcCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__NfcCardClient<$Result.GetResult<Prisma.$NfcCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NfcCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NfcCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NfcCards
     * const nfcCards = await prisma.nfcCard.findMany()
     * 
     * // Get first 10 NfcCards
     * const nfcCards = await prisma.nfcCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nfcCardWithIdOnly = await prisma.nfcCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NfcCardFindManyArgs>(args?: SelectSubset<T, NfcCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NfcCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NfcCard.
     * @param {NfcCardCreateArgs} args - Arguments to create a NfcCard.
     * @example
     * // Create one NfcCard
     * const NfcCard = await prisma.nfcCard.create({
     *   data: {
     *     // ... data to create a NfcCard
     *   }
     * })
     * 
     */
    create<T extends NfcCardCreateArgs>(args: SelectSubset<T, NfcCardCreateArgs<ExtArgs>>): Prisma__NfcCardClient<$Result.GetResult<Prisma.$NfcCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NfcCards.
     * @param {NfcCardCreateManyArgs} args - Arguments to create many NfcCards.
     * @example
     * // Create many NfcCards
     * const nfcCard = await prisma.nfcCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NfcCardCreateManyArgs>(args?: SelectSubset<T, NfcCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NfcCards and returns the data saved in the database.
     * @param {NfcCardCreateManyAndReturnArgs} args - Arguments to create many NfcCards.
     * @example
     * // Create many NfcCards
     * const nfcCard = await prisma.nfcCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NfcCards and only return the `id`
     * const nfcCardWithIdOnly = await prisma.nfcCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NfcCardCreateManyAndReturnArgs>(args?: SelectSubset<T, NfcCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NfcCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NfcCard.
     * @param {NfcCardDeleteArgs} args - Arguments to delete one NfcCard.
     * @example
     * // Delete one NfcCard
     * const NfcCard = await prisma.nfcCard.delete({
     *   where: {
     *     // ... filter to delete one NfcCard
     *   }
     * })
     * 
     */
    delete<T extends NfcCardDeleteArgs>(args: SelectSubset<T, NfcCardDeleteArgs<ExtArgs>>): Prisma__NfcCardClient<$Result.GetResult<Prisma.$NfcCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NfcCard.
     * @param {NfcCardUpdateArgs} args - Arguments to update one NfcCard.
     * @example
     * // Update one NfcCard
     * const nfcCard = await prisma.nfcCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NfcCardUpdateArgs>(args: SelectSubset<T, NfcCardUpdateArgs<ExtArgs>>): Prisma__NfcCardClient<$Result.GetResult<Prisma.$NfcCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NfcCards.
     * @param {NfcCardDeleteManyArgs} args - Arguments to filter NfcCards to delete.
     * @example
     * // Delete a few NfcCards
     * const { count } = await prisma.nfcCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NfcCardDeleteManyArgs>(args?: SelectSubset<T, NfcCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NfcCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NfcCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NfcCards
     * const nfcCard = await prisma.nfcCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NfcCardUpdateManyArgs>(args: SelectSubset<T, NfcCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NfcCards and returns the data updated in the database.
     * @param {NfcCardUpdateManyAndReturnArgs} args - Arguments to update many NfcCards.
     * @example
     * // Update many NfcCards
     * const nfcCard = await prisma.nfcCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NfcCards and only return the `id`
     * const nfcCardWithIdOnly = await prisma.nfcCard.updateManyAndReturn({
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
    updateManyAndReturn<T extends NfcCardUpdateManyAndReturnArgs>(args: SelectSubset<T, NfcCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NfcCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NfcCard.
     * @param {NfcCardUpsertArgs} args - Arguments to update or create a NfcCard.
     * @example
     * // Update or create a NfcCard
     * const nfcCard = await prisma.nfcCard.upsert({
     *   create: {
     *     // ... data to create a NfcCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NfcCard we want to update
     *   }
     * })
     */
    upsert<T extends NfcCardUpsertArgs>(args: SelectSubset<T, NfcCardUpsertArgs<ExtArgs>>): Prisma__NfcCardClient<$Result.GetResult<Prisma.$NfcCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NfcCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NfcCardCountArgs} args - Arguments to filter NfcCards to count.
     * @example
     * // Count the number of NfcCards
     * const count = await prisma.nfcCard.count({
     *   where: {
     *     // ... the filter for the NfcCards we want to count
     *   }
     * })
    **/
    count<T extends NfcCardCountArgs>(
      args?: Subset<T, NfcCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NfcCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NfcCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NfcCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NfcCardAggregateArgs>(args: Subset<T, NfcCardAggregateArgs>): Prisma.PrismaPromise<GetNfcCardAggregateType<T>>

    /**
     * Group by NfcCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NfcCardGroupByArgs} args - Group by arguments.
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
      T extends NfcCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NfcCardGroupByArgs['orderBy'] }
        : { orderBy?: NfcCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NfcCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNfcCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NfcCard model
   */
  readonly fields: NfcCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NfcCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NfcCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NfcCard model
   */
  interface NfcCardFieldRefs {
    readonly id: FieldRef<"NfcCard", 'String'>
    readonly createdAt: FieldRef<"NfcCard", 'DateTime'>
    readonly updatedAt: FieldRef<"NfcCard", 'DateTime'>
    readonly uid: FieldRef<"NfcCard", 'String'>
    readonly playerId: FieldRef<"NfcCard", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NfcCard findUnique
   */
  export type NfcCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NfcCard
     */
    select?: NfcCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NfcCard
     */
    omit?: NfcCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NfcCardInclude<ExtArgs> | null
    /**
     * Filter, which NfcCard to fetch.
     */
    where: NfcCardWhereUniqueInput
  }

  /**
   * NfcCard findUniqueOrThrow
   */
  export type NfcCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NfcCard
     */
    select?: NfcCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NfcCard
     */
    omit?: NfcCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NfcCardInclude<ExtArgs> | null
    /**
     * Filter, which NfcCard to fetch.
     */
    where: NfcCardWhereUniqueInput
  }

  /**
   * NfcCard findFirst
   */
  export type NfcCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NfcCard
     */
    select?: NfcCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NfcCard
     */
    omit?: NfcCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NfcCardInclude<ExtArgs> | null
    /**
     * Filter, which NfcCard to fetch.
     */
    where?: NfcCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NfcCards to fetch.
     */
    orderBy?: NfcCardOrderByWithRelationInput | NfcCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NfcCards.
     */
    cursor?: NfcCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NfcCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NfcCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NfcCards.
     */
    distinct?: NfcCardScalarFieldEnum | NfcCardScalarFieldEnum[]
  }

  /**
   * NfcCard findFirstOrThrow
   */
  export type NfcCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NfcCard
     */
    select?: NfcCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NfcCard
     */
    omit?: NfcCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NfcCardInclude<ExtArgs> | null
    /**
     * Filter, which NfcCard to fetch.
     */
    where?: NfcCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NfcCards to fetch.
     */
    orderBy?: NfcCardOrderByWithRelationInput | NfcCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NfcCards.
     */
    cursor?: NfcCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NfcCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NfcCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NfcCards.
     */
    distinct?: NfcCardScalarFieldEnum | NfcCardScalarFieldEnum[]
  }

  /**
   * NfcCard findMany
   */
  export type NfcCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NfcCard
     */
    select?: NfcCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NfcCard
     */
    omit?: NfcCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NfcCardInclude<ExtArgs> | null
    /**
     * Filter, which NfcCards to fetch.
     */
    where?: NfcCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NfcCards to fetch.
     */
    orderBy?: NfcCardOrderByWithRelationInput | NfcCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NfcCards.
     */
    cursor?: NfcCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NfcCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NfcCards.
     */
    skip?: number
    distinct?: NfcCardScalarFieldEnum | NfcCardScalarFieldEnum[]
  }

  /**
   * NfcCard create
   */
  export type NfcCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NfcCard
     */
    select?: NfcCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NfcCard
     */
    omit?: NfcCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NfcCardInclude<ExtArgs> | null
    /**
     * The data needed to create a NfcCard.
     */
    data: XOR<NfcCardCreateInput, NfcCardUncheckedCreateInput>
  }

  /**
   * NfcCard createMany
   */
  export type NfcCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NfcCards.
     */
    data: NfcCardCreateManyInput | NfcCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NfcCard createManyAndReturn
   */
  export type NfcCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NfcCard
     */
    select?: NfcCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NfcCard
     */
    omit?: NfcCardOmit<ExtArgs> | null
    /**
     * The data used to create many NfcCards.
     */
    data: NfcCardCreateManyInput | NfcCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NfcCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NfcCard update
   */
  export type NfcCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NfcCard
     */
    select?: NfcCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NfcCard
     */
    omit?: NfcCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NfcCardInclude<ExtArgs> | null
    /**
     * The data needed to update a NfcCard.
     */
    data: XOR<NfcCardUpdateInput, NfcCardUncheckedUpdateInput>
    /**
     * Choose, which NfcCard to update.
     */
    where: NfcCardWhereUniqueInput
  }

  /**
   * NfcCard updateMany
   */
  export type NfcCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NfcCards.
     */
    data: XOR<NfcCardUpdateManyMutationInput, NfcCardUncheckedUpdateManyInput>
    /**
     * Filter which NfcCards to update
     */
    where?: NfcCardWhereInput
    /**
     * Limit how many NfcCards to update.
     */
    limit?: number
  }

  /**
   * NfcCard updateManyAndReturn
   */
  export type NfcCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NfcCard
     */
    select?: NfcCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NfcCard
     */
    omit?: NfcCardOmit<ExtArgs> | null
    /**
     * The data used to update NfcCards.
     */
    data: XOR<NfcCardUpdateManyMutationInput, NfcCardUncheckedUpdateManyInput>
    /**
     * Filter which NfcCards to update
     */
    where?: NfcCardWhereInput
    /**
     * Limit how many NfcCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NfcCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NfcCard upsert
   */
  export type NfcCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NfcCard
     */
    select?: NfcCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NfcCard
     */
    omit?: NfcCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NfcCardInclude<ExtArgs> | null
    /**
     * The filter to search for the NfcCard to update in case it exists.
     */
    where: NfcCardWhereUniqueInput
    /**
     * In case the NfcCard found by the `where` argument doesn't exist, create a new NfcCard with this data.
     */
    create: XOR<NfcCardCreateInput, NfcCardUncheckedCreateInput>
    /**
     * In case the NfcCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NfcCardUpdateInput, NfcCardUncheckedUpdateInput>
  }

  /**
   * NfcCard delete
   */
  export type NfcCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NfcCard
     */
    select?: NfcCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NfcCard
     */
    omit?: NfcCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NfcCardInclude<ExtArgs> | null
    /**
     * Filter which NfcCard to delete.
     */
    where: NfcCardWhereUniqueInput
  }

  /**
   * NfcCard deleteMany
   */
  export type NfcCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NfcCards to delete
     */
    where?: NfcCardWhereInput
    /**
     * Limit how many NfcCards to delete.
     */
    limit?: number
  }

  /**
   * NfcCard without action
   */
  export type NfcCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NfcCard
     */
    select?: NfcCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NfcCard
     */
    omit?: NfcCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NfcCardInclude<ExtArgs> | null
  }


  /**
   * Model TransactionType
   */

  export type AggregateTransactionType = {
    _count: TransactionTypeCountAggregateOutputType | null
    _min: TransactionTypeMinAggregateOutputType | null
    _max: TransactionTypeMaxAggregateOutputType | null
  }

  export type TransactionTypeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    code: $Enums.TransactionKind | null
    label: string | null
  }

  export type TransactionTypeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    code: $Enums.TransactionKind | null
    label: string | null
  }

  export type TransactionTypeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    code: number
    label: number
    _all: number
  }


  export type TransactionTypeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    code?: true
    label?: true
  }

  export type TransactionTypeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    code?: true
    label?: true
  }

  export type TransactionTypeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    code?: true
    label?: true
    _all?: true
  }

  export type TransactionTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionType to aggregate.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionTypes
    **/
    _count?: true | TransactionTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionTypeMaxAggregateInputType
  }

  export type GetTransactionTypeAggregateType<T extends TransactionTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionType[P]>
      : GetScalarType<T[P], AggregateTransactionType[P]>
  }




  export type TransactionTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTypeWhereInput
    orderBy?: TransactionTypeOrderByWithAggregationInput | TransactionTypeOrderByWithAggregationInput[]
    by: TransactionTypeScalarFieldEnum[] | TransactionTypeScalarFieldEnum
    having?: TransactionTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionTypeCountAggregateInputType | true
    _min?: TransactionTypeMinAggregateInputType
    _max?: TransactionTypeMaxAggregateInputType
  }

  export type TransactionTypeGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    code: $Enums.TransactionKind
    label: string
    _count: TransactionTypeCountAggregateOutputType | null
    _min: TransactionTypeMinAggregateOutputType | null
    _max: TransactionTypeMaxAggregateOutputType | null
  }

  type GetTransactionTypeGroupByPayload<T extends TransactionTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionTypeGroupByOutputType[P]>
        }
      >
    >


  export type TransactionTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    code?: boolean
    label?: boolean
    templates?: boolean | TransactionType$templatesArgs<ExtArgs>
    transactions?: boolean | TransactionType$transactionsArgs<ExtArgs>
    _count?: boolean | TransactionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionType"]>

  export type TransactionTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    code?: boolean
    label?: boolean
  }, ExtArgs["result"]["transactionType"]>

  export type TransactionTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    code?: boolean
    label?: boolean
  }, ExtArgs["result"]["transactionType"]>

  export type TransactionTypeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    code?: boolean
    label?: boolean
  }

  export type TransactionTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "code" | "label", ExtArgs["result"]["transactionType"]>
  export type TransactionTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | TransactionType$templatesArgs<ExtArgs>
    transactions?: boolean | TransactionType$transactionsArgs<ExtArgs>
    _count?: boolean | TransactionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TransactionTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TransactionTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionType"
    objects: {
      templates: Prisma.$TransactionTemplatePayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      code: $Enums.TransactionKind
      label: string
    }, ExtArgs["result"]["transactionType"]>
    composites: {}
  }

  type TransactionTypeGetPayload<S extends boolean | null | undefined | TransactionTypeDefaultArgs> = $Result.GetResult<Prisma.$TransactionTypePayload, S>

  type TransactionTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionTypeCountAggregateInputType | true
    }

  export interface TransactionTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionType'], meta: { name: 'TransactionType' } }
    /**
     * Find zero or one TransactionType that matches the filter.
     * @param {TransactionTypeFindUniqueArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionTypeFindUniqueArgs>(args: SelectSubset<T, TransactionTypeFindUniqueArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionTypeFindUniqueOrThrowArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeFindFirstArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionTypeFindFirstArgs>(args?: SelectSubset<T, TransactionTypeFindFirstArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeFindFirstOrThrowArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionTypes
     * const transactionTypes = await prisma.transactionType.findMany()
     * 
     * // Get first 10 TransactionTypes
     * const transactionTypes = await prisma.transactionType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionTypeWithIdOnly = await prisma.transactionType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionTypeFindManyArgs>(args?: SelectSubset<T, TransactionTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionType.
     * @param {TransactionTypeCreateArgs} args - Arguments to create a TransactionType.
     * @example
     * // Create one TransactionType
     * const TransactionType = await prisma.transactionType.create({
     *   data: {
     *     // ... data to create a TransactionType
     *   }
     * })
     * 
     */
    create<T extends TransactionTypeCreateArgs>(args: SelectSubset<T, TransactionTypeCreateArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionTypes.
     * @param {TransactionTypeCreateManyArgs} args - Arguments to create many TransactionTypes.
     * @example
     * // Create many TransactionTypes
     * const transactionType = await prisma.transactionType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionTypeCreateManyArgs>(args?: SelectSubset<T, TransactionTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionTypes and returns the data saved in the database.
     * @param {TransactionTypeCreateManyAndReturnArgs} args - Arguments to create many TransactionTypes.
     * @example
     * // Create many TransactionTypes
     * const transactionType = await prisma.transactionType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionTypes and only return the `id`
     * const transactionTypeWithIdOnly = await prisma.transactionType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionType.
     * @param {TransactionTypeDeleteArgs} args - Arguments to delete one TransactionType.
     * @example
     * // Delete one TransactionType
     * const TransactionType = await prisma.transactionType.delete({
     *   where: {
     *     // ... filter to delete one TransactionType
     *   }
     * })
     * 
     */
    delete<T extends TransactionTypeDeleteArgs>(args: SelectSubset<T, TransactionTypeDeleteArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionType.
     * @param {TransactionTypeUpdateArgs} args - Arguments to update one TransactionType.
     * @example
     * // Update one TransactionType
     * const transactionType = await prisma.transactionType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionTypeUpdateArgs>(args: SelectSubset<T, TransactionTypeUpdateArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionTypes.
     * @param {TransactionTypeDeleteManyArgs} args - Arguments to filter TransactionTypes to delete.
     * @example
     * // Delete a few TransactionTypes
     * const { count } = await prisma.transactionType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionTypeDeleteManyArgs>(args?: SelectSubset<T, TransactionTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionTypes
     * const transactionType = await prisma.transactionType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionTypeUpdateManyArgs>(args: SelectSubset<T, TransactionTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionTypes and returns the data updated in the database.
     * @param {TransactionTypeUpdateManyAndReturnArgs} args - Arguments to update many TransactionTypes.
     * @example
     * // Update many TransactionTypes
     * const transactionType = await prisma.transactionType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionTypes and only return the `id`
     * const transactionTypeWithIdOnly = await prisma.transactionType.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionType.
     * @param {TransactionTypeUpsertArgs} args - Arguments to update or create a TransactionType.
     * @example
     * // Update or create a TransactionType
     * const transactionType = await prisma.transactionType.upsert({
     *   create: {
     *     // ... data to create a TransactionType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionType we want to update
     *   }
     * })
     */
    upsert<T extends TransactionTypeUpsertArgs>(args: SelectSubset<T, TransactionTypeUpsertArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeCountArgs} args - Arguments to filter TransactionTypes to count.
     * @example
     * // Count the number of TransactionTypes
     * const count = await prisma.transactionType.count({
     *   where: {
     *     // ... the filter for the TransactionTypes we want to count
     *   }
     * })
    **/
    count<T extends TransactionTypeCountArgs>(
      args?: Subset<T, TransactionTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionTypeAggregateArgs>(args: Subset<T, TransactionTypeAggregateArgs>): Prisma.PrismaPromise<GetTransactionTypeAggregateType<T>>

    /**
     * Group by TransactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeGroupByArgs} args - Group by arguments.
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
      T extends TransactionTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionTypeGroupByArgs['orderBy'] }
        : { orderBy?: TransactionTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionType model
   */
  readonly fields: TransactionTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templates<T extends TransactionType$templatesArgs<ExtArgs> = {}>(args?: Subset<T, TransactionType$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends TransactionType$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, TransactionType$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TransactionType model
   */
  interface TransactionTypeFieldRefs {
    readonly id: FieldRef<"TransactionType", 'String'>
    readonly createdAt: FieldRef<"TransactionType", 'DateTime'>
    readonly updatedAt: FieldRef<"TransactionType", 'DateTime'>
    readonly code: FieldRef<"TransactionType", 'TransactionKind'>
    readonly label: FieldRef<"TransactionType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TransactionType findUnique
   */
  export type TransactionTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where: TransactionTypeWhereUniqueInput
  }

  /**
   * TransactionType findUniqueOrThrow
   */
  export type TransactionTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where: TransactionTypeWhereUniqueInput
  }

  /**
   * TransactionType findFirst
   */
  export type TransactionTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTypes.
     */
    distinct?: TransactionTypeScalarFieldEnum | TransactionTypeScalarFieldEnum[]
  }

  /**
   * TransactionType findFirstOrThrow
   */
  export type TransactionTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTypes.
     */
    distinct?: TransactionTypeScalarFieldEnum | TransactionTypeScalarFieldEnum[]
  }

  /**
   * TransactionType findMany
   */
  export type TransactionTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTypes to fetch.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    distinct?: TransactionTypeScalarFieldEnum | TransactionTypeScalarFieldEnum[]
  }

  /**
   * TransactionType create
   */
  export type TransactionTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionType.
     */
    data: XOR<TransactionTypeCreateInput, TransactionTypeUncheckedCreateInput>
  }

  /**
   * TransactionType createMany
   */
  export type TransactionTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionTypes.
     */
    data: TransactionTypeCreateManyInput | TransactionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionType createManyAndReturn
   */
  export type TransactionTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionTypes.
     */
    data: TransactionTypeCreateManyInput | TransactionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionType update
   */
  export type TransactionTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionType.
     */
    data: XOR<TransactionTypeUpdateInput, TransactionTypeUncheckedUpdateInput>
    /**
     * Choose, which TransactionType to update.
     */
    where: TransactionTypeWhereUniqueInput
  }

  /**
   * TransactionType updateMany
   */
  export type TransactionTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionTypes.
     */
    data: XOR<TransactionTypeUpdateManyMutationInput, TransactionTypeUncheckedUpdateManyInput>
    /**
     * Filter which TransactionTypes to update
     */
    where?: TransactionTypeWhereInput
    /**
     * Limit how many TransactionTypes to update.
     */
    limit?: number
  }

  /**
   * TransactionType updateManyAndReturn
   */
  export type TransactionTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * The data used to update TransactionTypes.
     */
    data: XOR<TransactionTypeUpdateManyMutationInput, TransactionTypeUncheckedUpdateManyInput>
    /**
     * Filter which TransactionTypes to update
     */
    where?: TransactionTypeWhereInput
    /**
     * Limit how many TransactionTypes to update.
     */
    limit?: number
  }

  /**
   * TransactionType upsert
   */
  export type TransactionTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionType to update in case it exists.
     */
    where: TransactionTypeWhereUniqueInput
    /**
     * In case the TransactionType found by the `where` argument doesn't exist, create a new TransactionType with this data.
     */
    create: XOR<TransactionTypeCreateInput, TransactionTypeUncheckedCreateInput>
    /**
     * In case the TransactionType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionTypeUpdateInput, TransactionTypeUncheckedUpdateInput>
  }

  /**
   * TransactionType delete
   */
  export type TransactionTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter which TransactionType to delete.
     */
    where: TransactionTypeWhereUniqueInput
  }

  /**
   * TransactionType deleteMany
   */
  export type TransactionTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionTypes to delete
     */
    where?: TransactionTypeWhereInput
    /**
     * Limit how many TransactionTypes to delete.
     */
    limit?: number
  }

  /**
   * TransactionType.templates
   */
  export type TransactionType$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateInclude<ExtArgs> | null
    where?: TransactionTemplateWhereInput
    orderBy?: TransactionTemplateOrderByWithRelationInput | TransactionTemplateOrderByWithRelationInput[]
    cursor?: TransactionTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionTemplateScalarFieldEnum | TransactionTemplateScalarFieldEnum[]
  }

  /**
   * TransactionType.transactions
   */
  export type TransactionType$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * TransactionType without action
   */
  export type TransactionTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
  }


  /**
   * Model PropertyTemplate
   */

  export type AggregatePropertyTemplate = {
    _count: PropertyTemplateCountAggregateOutputType | null
    _avg: PropertyTemplateAvgAggregateOutputType | null
    _sum: PropertyTemplateSumAggregateOutputType | null
    _min: PropertyTemplateMinAggregateOutputType | null
    _max: PropertyTemplateMaxAggregateOutputType | null
  }

  export type PropertyTemplateAvgAggregateOutputType = {
    price: number | null
    rentBase: number | null
    rent1House: number | null
    rent2Houses: number | null
    rent3Houses: number | null
    rent4Houses: number | null
    rentHotel: number | null
    housePrice: number | null
    hotelPrice: number | null
    mortgageValue: number | null
    boardIndex: number | null
  }

  export type PropertyTemplateSumAggregateOutputType = {
    price: number | null
    rentBase: number | null
    rent1House: number | null
    rent2Houses: number | null
    rent3Houses: number | null
    rent4Houses: number | null
    rentHotel: number | null
    housePrice: number | null
    hotelPrice: number | null
    mortgageValue: number | null
    boardIndex: number | null
  }

  export type PropertyTemplateMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    propertyGroup: $Enums.PropertyGroup | null
    kind: $Enums.PropertyKind | null
    propertySet: string | null
    country: string | null
    landmark: string | null
    icon: string | null
    price: number | null
    rentBase: number | null
    rent1House: number | null
    rent2Houses: number | null
    rent3Houses: number | null
    rent4Houses: number | null
    rentHotel: number | null
    housePrice: number | null
    hotelPrice: number | null
    mortgageValue: number | null
    boardIndex: number | null
    color: string | null
  }

  export type PropertyTemplateMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    propertyGroup: $Enums.PropertyGroup | null
    kind: $Enums.PropertyKind | null
    propertySet: string | null
    country: string | null
    landmark: string | null
    icon: string | null
    price: number | null
    rentBase: number | null
    rent1House: number | null
    rent2Houses: number | null
    rent3Houses: number | null
    rent4Houses: number | null
    rentHotel: number | null
    housePrice: number | null
    hotelPrice: number | null
    mortgageValue: number | null
    boardIndex: number | null
    color: string | null
  }

  export type PropertyTemplateCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    propertyGroup: number
    kind: number
    propertySet: number
    country: number
    landmark: number
    icon: number
    price: number
    rentBase: number
    rent1House: number
    rent2Houses: number
    rent3Houses: number
    rent4Houses: number
    rentHotel: number
    housePrice: number
    hotelPrice: number
    mortgageValue: number
    boardIndex: number
    color: number
    _all: number
  }


  export type PropertyTemplateAvgAggregateInputType = {
    price?: true
    rentBase?: true
    rent1House?: true
    rent2Houses?: true
    rent3Houses?: true
    rent4Houses?: true
    rentHotel?: true
    housePrice?: true
    hotelPrice?: true
    mortgageValue?: true
    boardIndex?: true
  }

  export type PropertyTemplateSumAggregateInputType = {
    price?: true
    rentBase?: true
    rent1House?: true
    rent2Houses?: true
    rent3Houses?: true
    rent4Houses?: true
    rentHotel?: true
    housePrice?: true
    hotelPrice?: true
    mortgageValue?: true
    boardIndex?: true
  }

  export type PropertyTemplateMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    propertyGroup?: true
    kind?: true
    propertySet?: true
    country?: true
    landmark?: true
    icon?: true
    price?: true
    rentBase?: true
    rent1House?: true
    rent2Houses?: true
    rent3Houses?: true
    rent4Houses?: true
    rentHotel?: true
    housePrice?: true
    hotelPrice?: true
    mortgageValue?: true
    boardIndex?: true
    color?: true
  }

  export type PropertyTemplateMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    propertyGroup?: true
    kind?: true
    propertySet?: true
    country?: true
    landmark?: true
    icon?: true
    price?: true
    rentBase?: true
    rent1House?: true
    rent2Houses?: true
    rent3Houses?: true
    rent4Houses?: true
    rentHotel?: true
    housePrice?: true
    hotelPrice?: true
    mortgageValue?: true
    boardIndex?: true
    color?: true
  }

  export type PropertyTemplateCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    propertyGroup?: true
    kind?: true
    propertySet?: true
    country?: true
    landmark?: true
    icon?: true
    price?: true
    rentBase?: true
    rent1House?: true
    rent2Houses?: true
    rent3Houses?: true
    rent4Houses?: true
    rentHotel?: true
    housePrice?: true
    hotelPrice?: true
    mortgageValue?: true
    boardIndex?: true
    color?: true
    _all?: true
  }

  export type PropertyTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyTemplate to aggregate.
     */
    where?: PropertyTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyTemplates to fetch.
     */
    orderBy?: PropertyTemplateOrderByWithRelationInput | PropertyTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyTemplates
    **/
    _count?: true | PropertyTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyTemplateMaxAggregateInputType
  }

  export type GetPropertyTemplateAggregateType<T extends PropertyTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyTemplate[P]>
      : GetScalarType<T[P], AggregatePropertyTemplate[P]>
  }




  export type PropertyTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyTemplateWhereInput
    orderBy?: PropertyTemplateOrderByWithAggregationInput | PropertyTemplateOrderByWithAggregationInput[]
    by: PropertyTemplateScalarFieldEnum[] | PropertyTemplateScalarFieldEnum
    having?: PropertyTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyTemplateCountAggregateInputType | true
    _avg?: PropertyTemplateAvgAggregateInputType
    _sum?: PropertyTemplateSumAggregateInputType
    _min?: PropertyTemplateMinAggregateInputType
    _max?: PropertyTemplateMaxAggregateInputType
  }

  export type PropertyTemplateGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    propertyGroup: $Enums.PropertyGroup
    kind: $Enums.PropertyKind
    propertySet: string
    country: string
    landmark: string
    icon: string | null
    price: number
    rentBase: number
    rent1House: number
    rent2Houses: number
    rent3Houses: number
    rent4Houses: number
    rentHotel: number
    housePrice: number
    hotelPrice: number
    mortgageValue: number
    boardIndex: number
    color: string | null
    _count: PropertyTemplateCountAggregateOutputType | null
    _avg: PropertyTemplateAvgAggregateOutputType | null
    _sum: PropertyTemplateSumAggregateOutputType | null
    _min: PropertyTemplateMinAggregateOutputType | null
    _max: PropertyTemplateMaxAggregateOutputType | null
  }

  type GetPropertyTemplateGroupByPayload<T extends PropertyTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyTemplateGroupByOutputType[P]>
        }
      >
    >


  export type PropertyTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    propertyGroup?: boolean
    kind?: boolean
    propertySet?: boolean
    country?: boolean
    landmark?: boolean
    icon?: boolean
    price?: boolean
    rentBase?: boolean
    rent1House?: boolean
    rent2Houses?: boolean
    rent3Houses?: boolean
    rent4Houses?: boolean
    rentHotel?: boolean
    housePrice?: boolean
    hotelPrice?: boolean
    mortgageValue?: boolean
    boardIndex?: boolean
    color?: boolean
    templates?: boolean | PropertyTemplate$templatesArgs<ExtArgs>
    _count?: boolean | PropertyTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyTemplate"]>

  export type PropertyTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    propertyGroup?: boolean
    kind?: boolean
    propertySet?: boolean
    country?: boolean
    landmark?: boolean
    icon?: boolean
    price?: boolean
    rentBase?: boolean
    rent1House?: boolean
    rent2Houses?: boolean
    rent3Houses?: boolean
    rent4Houses?: boolean
    rentHotel?: boolean
    housePrice?: boolean
    hotelPrice?: boolean
    mortgageValue?: boolean
    boardIndex?: boolean
    color?: boolean
  }, ExtArgs["result"]["propertyTemplate"]>

  export type PropertyTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    propertyGroup?: boolean
    kind?: boolean
    propertySet?: boolean
    country?: boolean
    landmark?: boolean
    icon?: boolean
    price?: boolean
    rentBase?: boolean
    rent1House?: boolean
    rent2Houses?: boolean
    rent3Houses?: boolean
    rent4Houses?: boolean
    rentHotel?: boolean
    housePrice?: boolean
    hotelPrice?: boolean
    mortgageValue?: boolean
    boardIndex?: boolean
    color?: boolean
  }, ExtArgs["result"]["propertyTemplate"]>

  export type PropertyTemplateSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    propertyGroup?: boolean
    kind?: boolean
    propertySet?: boolean
    country?: boolean
    landmark?: boolean
    icon?: boolean
    price?: boolean
    rentBase?: boolean
    rent1House?: boolean
    rent2Houses?: boolean
    rent3Houses?: boolean
    rent4Houses?: boolean
    rentHotel?: boolean
    housePrice?: boolean
    hotelPrice?: boolean
    mortgageValue?: boolean
    boardIndex?: boolean
    color?: boolean
  }

  export type PropertyTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "propertyGroup" | "kind" | "propertySet" | "country" | "landmark" | "icon" | "price" | "rentBase" | "rent1House" | "rent2Houses" | "rent3Houses" | "rent4Houses" | "rentHotel" | "housePrice" | "hotelPrice" | "mortgageValue" | "boardIndex" | "color", ExtArgs["result"]["propertyTemplate"]>
  export type PropertyTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | PropertyTemplate$templatesArgs<ExtArgs>
    _count?: boolean | PropertyTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PropertyTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PropertyTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyTemplate"
    objects: {
      templates: Prisma.$TransactionTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      propertyGroup: $Enums.PropertyGroup
      kind: $Enums.PropertyKind
      propertySet: string
      country: string
      landmark: string
      icon: string | null
      price: number
      rentBase: number
      rent1House: number
      rent2Houses: number
      rent3Houses: number
      rent4Houses: number
      rentHotel: number
      housePrice: number
      hotelPrice: number
      mortgageValue: number
      boardIndex: number
      color: string | null
    }, ExtArgs["result"]["propertyTemplate"]>
    composites: {}
  }

  type PropertyTemplateGetPayload<S extends boolean | null | undefined | PropertyTemplateDefaultArgs> = $Result.GetResult<Prisma.$PropertyTemplatePayload, S>

  type PropertyTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyTemplateCountAggregateInputType | true
    }

  export interface PropertyTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyTemplate'], meta: { name: 'PropertyTemplate' } }
    /**
     * Find zero or one PropertyTemplate that matches the filter.
     * @param {PropertyTemplateFindUniqueArgs} args - Arguments to find a PropertyTemplate
     * @example
     * // Get one PropertyTemplate
     * const propertyTemplate = await prisma.propertyTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyTemplateFindUniqueArgs>(args: SelectSubset<T, PropertyTemplateFindUniqueArgs<ExtArgs>>): Prisma__PropertyTemplateClient<$Result.GetResult<Prisma.$PropertyTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyTemplateFindUniqueOrThrowArgs} args - Arguments to find a PropertyTemplate
     * @example
     * // Get one PropertyTemplate
     * const propertyTemplate = await prisma.propertyTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyTemplateClient<$Result.GetResult<Prisma.$PropertyTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyTemplateFindFirstArgs} args - Arguments to find a PropertyTemplate
     * @example
     * // Get one PropertyTemplate
     * const propertyTemplate = await prisma.propertyTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyTemplateFindFirstArgs>(args?: SelectSubset<T, PropertyTemplateFindFirstArgs<ExtArgs>>): Prisma__PropertyTemplateClient<$Result.GetResult<Prisma.$PropertyTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyTemplateFindFirstOrThrowArgs} args - Arguments to find a PropertyTemplate
     * @example
     * // Get one PropertyTemplate
     * const propertyTemplate = await prisma.propertyTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyTemplateClient<$Result.GetResult<Prisma.$PropertyTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyTemplates
     * const propertyTemplates = await prisma.propertyTemplate.findMany()
     * 
     * // Get first 10 PropertyTemplates
     * const propertyTemplates = await prisma.propertyTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyTemplateWithIdOnly = await prisma.propertyTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyTemplateFindManyArgs>(args?: SelectSubset<T, PropertyTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyTemplate.
     * @param {PropertyTemplateCreateArgs} args - Arguments to create a PropertyTemplate.
     * @example
     * // Create one PropertyTemplate
     * const PropertyTemplate = await prisma.propertyTemplate.create({
     *   data: {
     *     // ... data to create a PropertyTemplate
     *   }
     * })
     * 
     */
    create<T extends PropertyTemplateCreateArgs>(args: SelectSubset<T, PropertyTemplateCreateArgs<ExtArgs>>): Prisma__PropertyTemplateClient<$Result.GetResult<Prisma.$PropertyTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyTemplates.
     * @param {PropertyTemplateCreateManyArgs} args - Arguments to create many PropertyTemplates.
     * @example
     * // Create many PropertyTemplates
     * const propertyTemplate = await prisma.propertyTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyTemplateCreateManyArgs>(args?: SelectSubset<T, PropertyTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyTemplates and returns the data saved in the database.
     * @param {PropertyTemplateCreateManyAndReturnArgs} args - Arguments to create many PropertyTemplates.
     * @example
     * // Create many PropertyTemplates
     * const propertyTemplate = await prisma.propertyTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyTemplates and only return the `id`
     * const propertyTemplateWithIdOnly = await prisma.propertyTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyTemplate.
     * @param {PropertyTemplateDeleteArgs} args - Arguments to delete one PropertyTemplate.
     * @example
     * // Delete one PropertyTemplate
     * const PropertyTemplate = await prisma.propertyTemplate.delete({
     *   where: {
     *     // ... filter to delete one PropertyTemplate
     *   }
     * })
     * 
     */
    delete<T extends PropertyTemplateDeleteArgs>(args: SelectSubset<T, PropertyTemplateDeleteArgs<ExtArgs>>): Prisma__PropertyTemplateClient<$Result.GetResult<Prisma.$PropertyTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyTemplate.
     * @param {PropertyTemplateUpdateArgs} args - Arguments to update one PropertyTemplate.
     * @example
     * // Update one PropertyTemplate
     * const propertyTemplate = await prisma.propertyTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyTemplateUpdateArgs>(args: SelectSubset<T, PropertyTemplateUpdateArgs<ExtArgs>>): Prisma__PropertyTemplateClient<$Result.GetResult<Prisma.$PropertyTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyTemplates.
     * @param {PropertyTemplateDeleteManyArgs} args - Arguments to filter PropertyTemplates to delete.
     * @example
     * // Delete a few PropertyTemplates
     * const { count } = await prisma.propertyTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyTemplateDeleteManyArgs>(args?: SelectSubset<T, PropertyTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyTemplates
     * const propertyTemplate = await prisma.propertyTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyTemplateUpdateManyArgs>(args: SelectSubset<T, PropertyTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyTemplates and returns the data updated in the database.
     * @param {PropertyTemplateUpdateManyAndReturnArgs} args - Arguments to update many PropertyTemplates.
     * @example
     * // Update many PropertyTemplates
     * const propertyTemplate = await prisma.propertyTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyTemplates and only return the `id`
     * const propertyTemplateWithIdOnly = await prisma.propertyTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropertyTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyTemplate.
     * @param {PropertyTemplateUpsertArgs} args - Arguments to update or create a PropertyTemplate.
     * @example
     * // Update or create a PropertyTemplate
     * const propertyTemplate = await prisma.propertyTemplate.upsert({
     *   create: {
     *     // ... data to create a PropertyTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyTemplate we want to update
     *   }
     * })
     */
    upsert<T extends PropertyTemplateUpsertArgs>(args: SelectSubset<T, PropertyTemplateUpsertArgs<ExtArgs>>): Prisma__PropertyTemplateClient<$Result.GetResult<Prisma.$PropertyTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyTemplateCountArgs} args - Arguments to filter PropertyTemplates to count.
     * @example
     * // Count the number of PropertyTemplates
     * const count = await prisma.propertyTemplate.count({
     *   where: {
     *     // ... the filter for the PropertyTemplates we want to count
     *   }
     * })
    **/
    count<T extends PropertyTemplateCountArgs>(
      args?: Subset<T, PropertyTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyTemplateAggregateArgs>(args: Subset<T, PropertyTemplateAggregateArgs>): Prisma.PrismaPromise<GetPropertyTemplateAggregateType<T>>

    /**
     * Group by PropertyTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyTemplateGroupByArgs} args - Group by arguments.
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
      T extends PropertyTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyTemplateGroupByArgs['orderBy'] }
        : { orderBy?: PropertyTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyTemplate model
   */
  readonly fields: PropertyTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templates<T extends PropertyTemplate$templatesArgs<ExtArgs> = {}>(args?: Subset<T, PropertyTemplate$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PropertyTemplate model
   */
  interface PropertyTemplateFieldRefs {
    readonly id: FieldRef<"PropertyTemplate", 'String'>
    readonly createdAt: FieldRef<"PropertyTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyTemplate", 'DateTime'>
    readonly name: FieldRef<"PropertyTemplate", 'String'>
    readonly propertyGroup: FieldRef<"PropertyTemplate", 'PropertyGroup'>
    readonly kind: FieldRef<"PropertyTemplate", 'PropertyKind'>
    readonly propertySet: FieldRef<"PropertyTemplate", 'String'>
    readonly country: FieldRef<"PropertyTemplate", 'String'>
    readonly landmark: FieldRef<"PropertyTemplate", 'String'>
    readonly icon: FieldRef<"PropertyTemplate", 'String'>
    readonly price: FieldRef<"PropertyTemplate", 'Int'>
    readonly rentBase: FieldRef<"PropertyTemplate", 'Int'>
    readonly rent1House: FieldRef<"PropertyTemplate", 'Int'>
    readonly rent2Houses: FieldRef<"PropertyTemplate", 'Int'>
    readonly rent3Houses: FieldRef<"PropertyTemplate", 'Int'>
    readonly rent4Houses: FieldRef<"PropertyTemplate", 'Int'>
    readonly rentHotel: FieldRef<"PropertyTemplate", 'Int'>
    readonly housePrice: FieldRef<"PropertyTemplate", 'Int'>
    readonly hotelPrice: FieldRef<"PropertyTemplate", 'Int'>
    readonly mortgageValue: FieldRef<"PropertyTemplate", 'Int'>
    readonly boardIndex: FieldRef<"PropertyTemplate", 'Int'>
    readonly color: FieldRef<"PropertyTemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PropertyTemplate findUnique
   */
  export type PropertyTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplate
     */
    select?: PropertyTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyTemplate
     */
    omit?: PropertyTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PropertyTemplate to fetch.
     */
    where: PropertyTemplateWhereUniqueInput
  }

  /**
   * PropertyTemplate findUniqueOrThrow
   */
  export type PropertyTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplate
     */
    select?: PropertyTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyTemplate
     */
    omit?: PropertyTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PropertyTemplate to fetch.
     */
    where: PropertyTemplateWhereUniqueInput
  }

  /**
   * PropertyTemplate findFirst
   */
  export type PropertyTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplate
     */
    select?: PropertyTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyTemplate
     */
    omit?: PropertyTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PropertyTemplate to fetch.
     */
    where?: PropertyTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyTemplates to fetch.
     */
    orderBy?: PropertyTemplateOrderByWithRelationInput | PropertyTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyTemplates.
     */
    cursor?: PropertyTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyTemplates.
     */
    distinct?: PropertyTemplateScalarFieldEnum | PropertyTemplateScalarFieldEnum[]
  }

  /**
   * PropertyTemplate findFirstOrThrow
   */
  export type PropertyTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplate
     */
    select?: PropertyTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyTemplate
     */
    omit?: PropertyTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PropertyTemplate to fetch.
     */
    where?: PropertyTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyTemplates to fetch.
     */
    orderBy?: PropertyTemplateOrderByWithRelationInput | PropertyTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyTemplates.
     */
    cursor?: PropertyTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyTemplates.
     */
    distinct?: PropertyTemplateScalarFieldEnum | PropertyTemplateScalarFieldEnum[]
  }

  /**
   * PropertyTemplate findMany
   */
  export type PropertyTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplate
     */
    select?: PropertyTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyTemplate
     */
    omit?: PropertyTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PropertyTemplates to fetch.
     */
    where?: PropertyTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyTemplates to fetch.
     */
    orderBy?: PropertyTemplateOrderByWithRelationInput | PropertyTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyTemplates.
     */
    cursor?: PropertyTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyTemplates.
     */
    skip?: number
    distinct?: PropertyTemplateScalarFieldEnum | PropertyTemplateScalarFieldEnum[]
  }

  /**
   * PropertyTemplate create
   */
  export type PropertyTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplate
     */
    select?: PropertyTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyTemplate
     */
    omit?: PropertyTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyTemplate.
     */
    data: XOR<PropertyTemplateCreateInput, PropertyTemplateUncheckedCreateInput>
  }

  /**
   * PropertyTemplate createMany
   */
  export type PropertyTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyTemplates.
     */
    data: PropertyTemplateCreateManyInput | PropertyTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyTemplate createManyAndReturn
   */
  export type PropertyTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplate
     */
    select?: PropertyTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyTemplate
     */
    omit?: PropertyTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyTemplates.
     */
    data: PropertyTemplateCreateManyInput | PropertyTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyTemplate update
   */
  export type PropertyTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplate
     */
    select?: PropertyTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyTemplate
     */
    omit?: PropertyTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyTemplate.
     */
    data: XOR<PropertyTemplateUpdateInput, PropertyTemplateUncheckedUpdateInput>
    /**
     * Choose, which PropertyTemplate to update.
     */
    where: PropertyTemplateWhereUniqueInput
  }

  /**
   * PropertyTemplate updateMany
   */
  export type PropertyTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyTemplates.
     */
    data: XOR<PropertyTemplateUpdateManyMutationInput, PropertyTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PropertyTemplates to update
     */
    where?: PropertyTemplateWhereInput
    /**
     * Limit how many PropertyTemplates to update.
     */
    limit?: number
  }

  /**
   * PropertyTemplate updateManyAndReturn
   */
  export type PropertyTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplate
     */
    select?: PropertyTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyTemplate
     */
    omit?: PropertyTemplateOmit<ExtArgs> | null
    /**
     * The data used to update PropertyTemplates.
     */
    data: XOR<PropertyTemplateUpdateManyMutationInput, PropertyTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PropertyTemplates to update
     */
    where?: PropertyTemplateWhereInput
    /**
     * Limit how many PropertyTemplates to update.
     */
    limit?: number
  }

  /**
   * PropertyTemplate upsert
   */
  export type PropertyTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplate
     */
    select?: PropertyTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyTemplate
     */
    omit?: PropertyTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyTemplate to update in case it exists.
     */
    where: PropertyTemplateWhereUniqueInput
    /**
     * In case the PropertyTemplate found by the `where` argument doesn't exist, create a new PropertyTemplate with this data.
     */
    create: XOR<PropertyTemplateCreateInput, PropertyTemplateUncheckedCreateInput>
    /**
     * In case the PropertyTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyTemplateUpdateInput, PropertyTemplateUncheckedUpdateInput>
  }

  /**
   * PropertyTemplate delete
   */
  export type PropertyTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplate
     */
    select?: PropertyTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyTemplate
     */
    omit?: PropertyTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyTemplateInclude<ExtArgs> | null
    /**
     * Filter which PropertyTemplate to delete.
     */
    where: PropertyTemplateWhereUniqueInput
  }

  /**
   * PropertyTemplate deleteMany
   */
  export type PropertyTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyTemplates to delete
     */
    where?: PropertyTemplateWhereInput
    /**
     * Limit how many PropertyTemplates to delete.
     */
    limit?: number
  }

  /**
   * PropertyTemplate.templates
   */
  export type PropertyTemplate$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateInclude<ExtArgs> | null
    where?: TransactionTemplateWhereInput
    orderBy?: TransactionTemplateOrderByWithRelationInput | TransactionTemplateOrderByWithRelationInput[]
    cursor?: TransactionTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionTemplateScalarFieldEnum | TransactionTemplateScalarFieldEnum[]
  }

  /**
   * PropertyTemplate without action
   */
  export type PropertyTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplate
     */
    select?: PropertyTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyTemplate
     */
    omit?: PropertyTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyTemplateInclude<ExtArgs> | null
  }


  /**
   * Model TransactionTemplate
   */

  export type AggregateTransactionTemplate = {
    _count: TransactionTemplateCountAggregateOutputType | null
    _avg: TransactionTemplateAvgAggregateOutputType | null
    _sum: TransactionTemplateSumAggregateOutputType | null
    _min: TransactionTemplateMinAggregateOutputType | null
    _max: TransactionTemplateMaxAggregateOutputType | null
  }

  export type TransactionTemplateAvgAggregateOutputType = {
    defaultAmount: number | null
  }

  export type TransactionTemplateSumAggregateOutputType = {
    defaultAmount: number | null
  }

  export type TransactionTemplateMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    direction: $Enums.TransactionDirection | null
    defaultAmount: number | null
    description: string | null
    transactionTypeId: string | null
    propertyTemplateId: string | null
  }

  export type TransactionTemplateMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    direction: $Enums.TransactionDirection | null
    defaultAmount: number | null
    description: string | null
    transactionTypeId: string | null
    propertyTemplateId: string | null
  }

  export type TransactionTemplateCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    direction: number
    defaultAmount: number
    description: number
    transactionTypeId: number
    propertyTemplateId: number
    _all: number
  }


  export type TransactionTemplateAvgAggregateInputType = {
    defaultAmount?: true
  }

  export type TransactionTemplateSumAggregateInputType = {
    defaultAmount?: true
  }

  export type TransactionTemplateMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    direction?: true
    defaultAmount?: true
    description?: true
    transactionTypeId?: true
    propertyTemplateId?: true
  }

  export type TransactionTemplateMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    direction?: true
    defaultAmount?: true
    description?: true
    transactionTypeId?: true
    propertyTemplateId?: true
  }

  export type TransactionTemplateCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    direction?: true
    defaultAmount?: true
    description?: true
    transactionTypeId?: true
    propertyTemplateId?: true
    _all?: true
  }

  export type TransactionTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionTemplate to aggregate.
     */
    where?: TransactionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTemplates to fetch.
     */
    orderBy?: TransactionTemplateOrderByWithRelationInput | TransactionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionTemplates
    **/
    _count?: true | TransactionTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionTemplateMaxAggregateInputType
  }

  export type GetTransactionTemplateAggregateType<T extends TransactionTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionTemplate[P]>
      : GetScalarType<T[P], AggregateTransactionTemplate[P]>
  }




  export type TransactionTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTemplateWhereInput
    orderBy?: TransactionTemplateOrderByWithAggregationInput | TransactionTemplateOrderByWithAggregationInput[]
    by: TransactionTemplateScalarFieldEnum[] | TransactionTemplateScalarFieldEnum
    having?: TransactionTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionTemplateCountAggregateInputType | true
    _avg?: TransactionTemplateAvgAggregateInputType
    _sum?: TransactionTemplateSumAggregateInputType
    _min?: TransactionTemplateMinAggregateInputType
    _max?: TransactionTemplateMaxAggregateInputType
  }

  export type TransactionTemplateGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    direction: $Enums.TransactionDirection
    defaultAmount: number | null
    description: string | null
    transactionTypeId: string
    propertyTemplateId: string | null
    _count: TransactionTemplateCountAggregateOutputType | null
    _avg: TransactionTemplateAvgAggregateOutputType | null
    _sum: TransactionTemplateSumAggregateOutputType | null
    _min: TransactionTemplateMinAggregateOutputType | null
    _max: TransactionTemplateMaxAggregateOutputType | null
  }

  type GetTransactionTemplateGroupByPayload<T extends TransactionTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionTemplateGroupByOutputType[P]>
        }
      >
    >


  export type TransactionTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    direction?: boolean
    defaultAmount?: boolean
    description?: boolean
    transactionTypeId?: boolean
    propertyTemplateId?: boolean
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    propertyTemplate?: boolean | TransactionTemplate$propertyTemplateArgs<ExtArgs>
  }, ExtArgs["result"]["transactionTemplate"]>

  export type TransactionTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    direction?: boolean
    defaultAmount?: boolean
    description?: boolean
    transactionTypeId?: boolean
    propertyTemplateId?: boolean
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    propertyTemplate?: boolean | TransactionTemplate$propertyTemplateArgs<ExtArgs>
  }, ExtArgs["result"]["transactionTemplate"]>

  export type TransactionTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    direction?: boolean
    defaultAmount?: boolean
    description?: boolean
    transactionTypeId?: boolean
    propertyTemplateId?: boolean
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    propertyTemplate?: boolean | TransactionTemplate$propertyTemplateArgs<ExtArgs>
  }, ExtArgs["result"]["transactionTemplate"]>

  export type TransactionTemplateSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    direction?: boolean
    defaultAmount?: boolean
    description?: boolean
    transactionTypeId?: boolean
    propertyTemplateId?: boolean
  }

  export type TransactionTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "direction" | "defaultAmount" | "description" | "transactionTypeId" | "propertyTemplateId", ExtArgs["result"]["transactionTemplate"]>
  export type TransactionTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    propertyTemplate?: boolean | TransactionTemplate$propertyTemplateArgs<ExtArgs>
  }
  export type TransactionTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    propertyTemplate?: boolean | TransactionTemplate$propertyTemplateArgs<ExtArgs>
  }
  export type TransactionTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    propertyTemplate?: boolean | TransactionTemplate$propertyTemplateArgs<ExtArgs>
  }

  export type $TransactionTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionTemplate"
    objects: {
      transactionType: Prisma.$TransactionTypePayload<ExtArgs>
      propertyTemplate: Prisma.$PropertyTemplatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      direction: $Enums.TransactionDirection
      defaultAmount: number | null
      description: string | null
      transactionTypeId: string
      propertyTemplateId: string | null
    }, ExtArgs["result"]["transactionTemplate"]>
    composites: {}
  }

  type TransactionTemplateGetPayload<S extends boolean | null | undefined | TransactionTemplateDefaultArgs> = $Result.GetResult<Prisma.$TransactionTemplatePayload, S>

  type TransactionTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionTemplateCountAggregateInputType | true
    }

  export interface TransactionTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionTemplate'], meta: { name: 'TransactionTemplate' } }
    /**
     * Find zero or one TransactionTemplate that matches the filter.
     * @param {TransactionTemplateFindUniqueArgs} args - Arguments to find a TransactionTemplate
     * @example
     * // Get one TransactionTemplate
     * const transactionTemplate = await prisma.transactionTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionTemplateFindUniqueArgs>(args: SelectSubset<T, TransactionTemplateFindUniqueArgs<ExtArgs>>): Prisma__TransactionTemplateClient<$Result.GetResult<Prisma.$TransactionTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionTemplateFindUniqueOrThrowArgs} args - Arguments to find a TransactionTemplate
     * @example
     * // Get one TransactionTemplate
     * const transactionTemplate = await prisma.transactionTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionTemplateClient<$Result.GetResult<Prisma.$TransactionTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTemplateFindFirstArgs} args - Arguments to find a TransactionTemplate
     * @example
     * // Get one TransactionTemplate
     * const transactionTemplate = await prisma.transactionTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionTemplateFindFirstArgs>(args?: SelectSubset<T, TransactionTemplateFindFirstArgs<ExtArgs>>): Prisma__TransactionTemplateClient<$Result.GetResult<Prisma.$TransactionTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTemplateFindFirstOrThrowArgs} args - Arguments to find a TransactionTemplate
     * @example
     * // Get one TransactionTemplate
     * const transactionTemplate = await prisma.transactionTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionTemplateClient<$Result.GetResult<Prisma.$TransactionTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionTemplates
     * const transactionTemplates = await prisma.transactionTemplate.findMany()
     * 
     * // Get first 10 TransactionTemplates
     * const transactionTemplates = await prisma.transactionTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionTemplateWithIdOnly = await prisma.transactionTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionTemplateFindManyArgs>(args?: SelectSubset<T, TransactionTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionTemplate.
     * @param {TransactionTemplateCreateArgs} args - Arguments to create a TransactionTemplate.
     * @example
     * // Create one TransactionTemplate
     * const TransactionTemplate = await prisma.transactionTemplate.create({
     *   data: {
     *     // ... data to create a TransactionTemplate
     *   }
     * })
     * 
     */
    create<T extends TransactionTemplateCreateArgs>(args: SelectSubset<T, TransactionTemplateCreateArgs<ExtArgs>>): Prisma__TransactionTemplateClient<$Result.GetResult<Prisma.$TransactionTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionTemplates.
     * @param {TransactionTemplateCreateManyArgs} args - Arguments to create many TransactionTemplates.
     * @example
     * // Create many TransactionTemplates
     * const transactionTemplate = await prisma.transactionTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionTemplateCreateManyArgs>(args?: SelectSubset<T, TransactionTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionTemplates and returns the data saved in the database.
     * @param {TransactionTemplateCreateManyAndReturnArgs} args - Arguments to create many TransactionTemplates.
     * @example
     * // Create many TransactionTemplates
     * const transactionTemplate = await prisma.transactionTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionTemplates and only return the `id`
     * const transactionTemplateWithIdOnly = await prisma.transactionTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionTemplate.
     * @param {TransactionTemplateDeleteArgs} args - Arguments to delete one TransactionTemplate.
     * @example
     * // Delete one TransactionTemplate
     * const TransactionTemplate = await prisma.transactionTemplate.delete({
     *   where: {
     *     // ... filter to delete one TransactionTemplate
     *   }
     * })
     * 
     */
    delete<T extends TransactionTemplateDeleteArgs>(args: SelectSubset<T, TransactionTemplateDeleteArgs<ExtArgs>>): Prisma__TransactionTemplateClient<$Result.GetResult<Prisma.$TransactionTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionTemplate.
     * @param {TransactionTemplateUpdateArgs} args - Arguments to update one TransactionTemplate.
     * @example
     * // Update one TransactionTemplate
     * const transactionTemplate = await prisma.transactionTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionTemplateUpdateArgs>(args: SelectSubset<T, TransactionTemplateUpdateArgs<ExtArgs>>): Prisma__TransactionTemplateClient<$Result.GetResult<Prisma.$TransactionTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionTemplates.
     * @param {TransactionTemplateDeleteManyArgs} args - Arguments to filter TransactionTemplates to delete.
     * @example
     * // Delete a few TransactionTemplates
     * const { count } = await prisma.transactionTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionTemplateDeleteManyArgs>(args?: SelectSubset<T, TransactionTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionTemplates
     * const transactionTemplate = await prisma.transactionTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionTemplateUpdateManyArgs>(args: SelectSubset<T, TransactionTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionTemplates and returns the data updated in the database.
     * @param {TransactionTemplateUpdateManyAndReturnArgs} args - Arguments to update many TransactionTemplates.
     * @example
     * // Update many TransactionTemplates
     * const transactionTemplate = await prisma.transactionTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionTemplates and only return the `id`
     * const transactionTemplateWithIdOnly = await prisma.transactionTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionTemplate.
     * @param {TransactionTemplateUpsertArgs} args - Arguments to update or create a TransactionTemplate.
     * @example
     * // Update or create a TransactionTemplate
     * const transactionTemplate = await prisma.transactionTemplate.upsert({
     *   create: {
     *     // ... data to create a TransactionTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionTemplate we want to update
     *   }
     * })
     */
    upsert<T extends TransactionTemplateUpsertArgs>(args: SelectSubset<T, TransactionTemplateUpsertArgs<ExtArgs>>): Prisma__TransactionTemplateClient<$Result.GetResult<Prisma.$TransactionTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTemplateCountArgs} args - Arguments to filter TransactionTemplates to count.
     * @example
     * // Count the number of TransactionTemplates
     * const count = await prisma.transactionTemplate.count({
     *   where: {
     *     // ... the filter for the TransactionTemplates we want to count
     *   }
     * })
    **/
    count<T extends TransactionTemplateCountArgs>(
      args?: Subset<T, TransactionTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionTemplateAggregateArgs>(args: Subset<T, TransactionTemplateAggregateArgs>): Prisma.PrismaPromise<GetTransactionTemplateAggregateType<T>>

    /**
     * Group by TransactionTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTemplateGroupByArgs} args - Group by arguments.
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
      T extends TransactionTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionTemplateGroupByArgs['orderBy'] }
        : { orderBy?: TransactionTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionTemplate model
   */
  readonly fields: TransactionTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactionType<T extends TransactionTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionTypeDefaultArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    propertyTemplate<T extends TransactionTemplate$propertyTemplateArgs<ExtArgs> = {}>(args?: Subset<T, TransactionTemplate$propertyTemplateArgs<ExtArgs>>): Prisma__PropertyTemplateClient<$Result.GetResult<Prisma.$PropertyTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TransactionTemplate model
   */
  interface TransactionTemplateFieldRefs {
    readonly id: FieldRef<"TransactionTemplate", 'String'>
    readonly createdAt: FieldRef<"TransactionTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"TransactionTemplate", 'DateTime'>
    readonly name: FieldRef<"TransactionTemplate", 'String'>
    readonly direction: FieldRef<"TransactionTemplate", 'TransactionDirection'>
    readonly defaultAmount: FieldRef<"TransactionTemplate", 'Int'>
    readonly description: FieldRef<"TransactionTemplate", 'String'>
    readonly transactionTypeId: FieldRef<"TransactionTemplate", 'String'>
    readonly propertyTemplateId: FieldRef<"TransactionTemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TransactionTemplate findUnique
   */
  export type TransactionTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTemplate to fetch.
     */
    where: TransactionTemplateWhereUniqueInput
  }

  /**
   * TransactionTemplate findUniqueOrThrow
   */
  export type TransactionTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTemplate to fetch.
     */
    where: TransactionTemplateWhereUniqueInput
  }

  /**
   * TransactionTemplate findFirst
   */
  export type TransactionTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTemplate to fetch.
     */
    where?: TransactionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTemplates to fetch.
     */
    orderBy?: TransactionTemplateOrderByWithRelationInput | TransactionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTemplates.
     */
    cursor?: TransactionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTemplates.
     */
    distinct?: TransactionTemplateScalarFieldEnum | TransactionTemplateScalarFieldEnum[]
  }

  /**
   * TransactionTemplate findFirstOrThrow
   */
  export type TransactionTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTemplate to fetch.
     */
    where?: TransactionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTemplates to fetch.
     */
    orderBy?: TransactionTemplateOrderByWithRelationInput | TransactionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTemplates.
     */
    cursor?: TransactionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTemplates.
     */
    distinct?: TransactionTemplateScalarFieldEnum | TransactionTemplateScalarFieldEnum[]
  }

  /**
   * TransactionTemplate findMany
   */
  export type TransactionTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTemplates to fetch.
     */
    where?: TransactionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTemplates to fetch.
     */
    orderBy?: TransactionTemplateOrderByWithRelationInput | TransactionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionTemplates.
     */
    cursor?: TransactionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTemplates.
     */
    skip?: number
    distinct?: TransactionTemplateScalarFieldEnum | TransactionTemplateScalarFieldEnum[]
  }

  /**
   * TransactionTemplate create
   */
  export type TransactionTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionTemplate.
     */
    data: XOR<TransactionTemplateCreateInput, TransactionTemplateUncheckedCreateInput>
  }

  /**
   * TransactionTemplate createMany
   */
  export type TransactionTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionTemplates.
     */
    data: TransactionTemplateCreateManyInput | TransactionTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionTemplate createManyAndReturn
   */
  export type TransactionTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionTemplates.
     */
    data: TransactionTemplateCreateManyInput | TransactionTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionTemplate update
   */
  export type TransactionTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionTemplate.
     */
    data: XOR<TransactionTemplateUpdateInput, TransactionTemplateUncheckedUpdateInput>
    /**
     * Choose, which TransactionTemplate to update.
     */
    where: TransactionTemplateWhereUniqueInput
  }

  /**
   * TransactionTemplate updateMany
   */
  export type TransactionTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionTemplates.
     */
    data: XOR<TransactionTemplateUpdateManyMutationInput, TransactionTemplateUncheckedUpdateManyInput>
    /**
     * Filter which TransactionTemplates to update
     */
    where?: TransactionTemplateWhereInput
    /**
     * Limit how many TransactionTemplates to update.
     */
    limit?: number
  }

  /**
   * TransactionTemplate updateManyAndReturn
   */
  export type TransactionTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * The data used to update TransactionTemplates.
     */
    data: XOR<TransactionTemplateUpdateManyMutationInput, TransactionTemplateUncheckedUpdateManyInput>
    /**
     * Filter which TransactionTemplates to update
     */
    where?: TransactionTemplateWhereInput
    /**
     * Limit how many TransactionTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionTemplate upsert
   */
  export type TransactionTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionTemplate to update in case it exists.
     */
    where: TransactionTemplateWhereUniqueInput
    /**
     * In case the TransactionTemplate found by the `where` argument doesn't exist, create a new TransactionTemplate with this data.
     */
    create: XOR<TransactionTemplateCreateInput, TransactionTemplateUncheckedCreateInput>
    /**
     * In case the TransactionTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionTemplateUpdateInput, TransactionTemplateUncheckedUpdateInput>
  }

  /**
   * TransactionTemplate delete
   */
  export type TransactionTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateInclude<ExtArgs> | null
    /**
     * Filter which TransactionTemplate to delete.
     */
    where: TransactionTemplateWhereUniqueInput
  }

  /**
   * TransactionTemplate deleteMany
   */
  export type TransactionTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionTemplates to delete
     */
    where?: TransactionTemplateWhereInput
    /**
     * Limit how many TransactionTemplates to delete.
     */
    limit?: number
  }

  /**
   * TransactionTemplate.propertyTemplate
   */
  export type TransactionTemplate$propertyTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyTemplate
     */
    select?: PropertyTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyTemplate
     */
    omit?: PropertyTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyTemplateInclude<ExtArgs> | null
    where?: PropertyTemplateWhereInput
  }

  /**
   * TransactionTemplate without action
   */
  export type TransactionTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTemplate
     */
    select?: TransactionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTemplate
     */
    omit?: TransactionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTemplateInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
    fromBalanceBefore: number | null
    fromBalanceAfter: number | null
    toBalanceBefore: number | null
    toBalanceAfter: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
    fromBalanceBefore: number | null
    fromBalanceAfter: number | null
    toBalanceBefore: number | null
    toBalanceAfter: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    gameId: string | null
    transactionTypeId: string | null
    direction: $Enums.TransactionDirection | null
    amount: number | null
    note: string | null
    fromPlayerId: string | null
    toPlayerId: string | null
    fromBalanceBefore: number | null
    fromBalanceAfter: number | null
    toBalanceBefore: number | null
    toBalanceAfter: number | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    gameId: string | null
    transactionTypeId: string | null
    direction: $Enums.TransactionDirection | null
    amount: number | null
    note: string | null
    fromPlayerId: string | null
    toPlayerId: string | null
    fromBalanceBefore: number | null
    fromBalanceAfter: number | null
    toBalanceBefore: number | null
    toBalanceAfter: number | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    gameId: number
    transactionTypeId: number
    direction: number
    amount: number
    note: number
    fromPlayerId: number
    toPlayerId: number
    fromBalanceBefore: number
    fromBalanceAfter: number
    toBalanceBefore: number
    toBalanceAfter: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
    fromBalanceBefore?: true
    fromBalanceAfter?: true
    toBalanceBefore?: true
    toBalanceAfter?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
    fromBalanceBefore?: true
    fromBalanceAfter?: true
    toBalanceBefore?: true
    toBalanceAfter?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    gameId?: true
    transactionTypeId?: true
    direction?: true
    amount?: true
    note?: true
    fromPlayerId?: true
    toPlayerId?: true
    fromBalanceBefore?: true
    fromBalanceAfter?: true
    toBalanceBefore?: true
    toBalanceAfter?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    gameId?: true
    transactionTypeId?: true
    direction?: true
    amount?: true
    note?: true
    fromPlayerId?: true
    toPlayerId?: true
    fromBalanceBefore?: true
    fromBalanceAfter?: true
    toBalanceBefore?: true
    toBalanceAfter?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    gameId?: true
    transactionTypeId?: true
    direction?: true
    amount?: true
    note?: true
    fromPlayerId?: true
    toPlayerId?: true
    fromBalanceBefore?: true
    fromBalanceAfter?: true
    toBalanceBefore?: true
    toBalanceAfter?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    gameId: string
    transactionTypeId: string
    direction: $Enums.TransactionDirection
    amount: number
    note: string | null
    fromPlayerId: string | null
    toPlayerId: string | null
    fromBalanceBefore: number | null
    fromBalanceAfter: number | null
    toBalanceBefore: number | null
    toBalanceAfter: number | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameId?: boolean
    transactionTypeId?: boolean
    direction?: boolean
    amount?: boolean
    note?: boolean
    fromPlayerId?: boolean
    toPlayerId?: boolean
    fromBalanceBefore?: boolean
    fromBalanceAfter?: boolean
    toBalanceBefore?: boolean
    toBalanceAfter?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    fromPlayer?: boolean | Transaction$fromPlayerArgs<ExtArgs>
    toPlayer?: boolean | Transaction$toPlayerArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameId?: boolean
    transactionTypeId?: boolean
    direction?: boolean
    amount?: boolean
    note?: boolean
    fromPlayerId?: boolean
    toPlayerId?: boolean
    fromBalanceBefore?: boolean
    fromBalanceAfter?: boolean
    toBalanceBefore?: boolean
    toBalanceAfter?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    fromPlayer?: boolean | Transaction$fromPlayerArgs<ExtArgs>
    toPlayer?: boolean | Transaction$toPlayerArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameId?: boolean
    transactionTypeId?: boolean
    direction?: boolean
    amount?: boolean
    note?: boolean
    fromPlayerId?: boolean
    toPlayerId?: boolean
    fromBalanceBefore?: boolean
    fromBalanceAfter?: boolean
    toBalanceBefore?: boolean
    toBalanceAfter?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    fromPlayer?: boolean | Transaction$fromPlayerArgs<ExtArgs>
    toPlayer?: boolean | Transaction$toPlayerArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameId?: boolean
    transactionTypeId?: boolean
    direction?: boolean
    amount?: boolean
    note?: boolean
    fromPlayerId?: boolean
    toPlayerId?: boolean
    fromBalanceBefore?: boolean
    fromBalanceAfter?: boolean
    toBalanceBefore?: boolean
    toBalanceAfter?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "gameId" | "transactionTypeId" | "direction" | "amount" | "note" | "fromPlayerId" | "toPlayerId" | "fromBalanceBefore" | "fromBalanceAfter" | "toBalanceBefore" | "toBalanceAfter", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    fromPlayer?: boolean | Transaction$fromPlayerArgs<ExtArgs>
    toPlayer?: boolean | Transaction$toPlayerArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    fromPlayer?: boolean | Transaction$fromPlayerArgs<ExtArgs>
    toPlayer?: boolean | Transaction$toPlayerArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    fromPlayer?: boolean | Transaction$fromPlayerArgs<ExtArgs>
    toPlayer?: boolean | Transaction$toPlayerArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      transactionType: Prisma.$TransactionTypePayload<ExtArgs>
      fromPlayer: Prisma.$PlayerPayload<ExtArgs> | null
      toPlayer: Prisma.$PlayerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      gameId: string
      transactionTypeId: string
      direction: $Enums.TransactionDirection
      amount: number
      note: string | null
      fromPlayerId: string | null
      toPlayerId: string | null
      fromBalanceBefore: number | null
      fromBalanceAfter: number | null
      toBalanceBefore: number | null
      toBalanceAfter: number | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactionType<T extends TransactionTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionTypeDefaultArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromPlayer<T extends Transaction$fromPlayerArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$fromPlayerArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    toPlayer<T extends Transaction$toPlayerArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$toPlayerArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
    readonly gameId: FieldRef<"Transaction", 'String'>
    readonly transactionTypeId: FieldRef<"Transaction", 'String'>
    readonly direction: FieldRef<"Transaction", 'TransactionDirection'>
    readonly amount: FieldRef<"Transaction", 'Int'>
    readonly note: FieldRef<"Transaction", 'String'>
    readonly fromPlayerId: FieldRef<"Transaction", 'String'>
    readonly toPlayerId: FieldRef<"Transaction", 'String'>
    readonly fromBalanceBefore: FieldRef<"Transaction", 'Int'>
    readonly fromBalanceAfter: FieldRef<"Transaction", 'Int'>
    readonly toBalanceBefore: FieldRef<"Transaction", 'Int'>
    readonly toBalanceAfter: FieldRef<"Transaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.fromPlayer
   */
  export type Transaction$fromPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
  }

  /**
   * Transaction.toPlayer
   */
  export type Transaction$toPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    username: 'username',
    email: 'email',
    emailVerified: 'emailVerified',
    passwordHash: 'passwordHash'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmailVerificationTokenScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    tokenHash: 'tokenHash',
    email: 'email',
    userId: 'userId'
  };

  export type EmailVerificationTokenScalarFieldEnum = (typeof EmailVerificationTokenScalarFieldEnum)[keyof typeof EmailVerificationTokenScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerUserId: 'ownerUserId',
    status: 'status',
    playersCount: 'playersCount',
    initialBalance: 'initialBalance',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    gameId: 'gameId',
    name: 'name',
    seat: 'seat',
    balance: 'balance'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const NfcCardScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    uid: 'uid',
    playerId: 'playerId'
  };

  export type NfcCardScalarFieldEnum = (typeof NfcCardScalarFieldEnum)[keyof typeof NfcCardScalarFieldEnum]


  export const TransactionTypeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    code: 'code',
    label: 'label'
  };

  export type TransactionTypeScalarFieldEnum = (typeof TransactionTypeScalarFieldEnum)[keyof typeof TransactionTypeScalarFieldEnum]


  export const PropertyTemplateScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    propertyGroup: 'propertyGroup',
    kind: 'kind',
    propertySet: 'propertySet',
    country: 'country',
    landmark: 'landmark',
    icon: 'icon',
    price: 'price',
    rentBase: 'rentBase',
    rent1House: 'rent1House',
    rent2Houses: 'rent2Houses',
    rent3Houses: 'rent3Houses',
    rent4Houses: 'rent4Houses',
    rentHotel: 'rentHotel',
    housePrice: 'housePrice',
    hotelPrice: 'hotelPrice',
    mortgageValue: 'mortgageValue',
    boardIndex: 'boardIndex',
    color: 'color'
  };

  export type PropertyTemplateScalarFieldEnum = (typeof PropertyTemplateScalarFieldEnum)[keyof typeof PropertyTemplateScalarFieldEnum]


  export const TransactionTemplateScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    direction: 'direction',
    defaultAmount: 'defaultAmount',
    description: 'description',
    transactionTypeId: 'transactionTypeId',
    propertyTemplateId: 'propertyTemplateId'
  };

  export type TransactionTemplateScalarFieldEnum = (typeof TransactionTemplateScalarFieldEnum)[keyof typeof TransactionTemplateScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    gameId: 'gameId',
    transactionTypeId: 'transactionTypeId',
    direction: 'direction',
    amount: 'amount',
    note: 'note',
    fromPlayerId: 'fromPlayerId',
    toPlayerId: 'toPlayerId',
    fromBalanceBefore: 'fromBalanceBefore',
    fromBalanceAfter: 'fromBalanceAfter',
    toBalanceBefore: 'toBalanceBefore',
    toBalanceAfter: 'toBalanceAfter'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


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
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'GameStatus[]'
   */
  export type ListEnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TransactionKind'
   */
  export type EnumTransactionKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionKind'>
    


  /**
   * Reference to a field of type 'TransactionKind[]'
   */
  export type ListEnumTransactionKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionKind[]'>
    


  /**
   * Reference to a field of type 'PropertyGroup'
   */
  export type EnumPropertyGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyGroup'>
    


  /**
   * Reference to a field of type 'PropertyGroup[]'
   */
  export type ListEnumPropertyGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyGroup[]'>
    


  /**
   * Reference to a field of type 'PropertyKind'
   */
  export type EnumPropertyKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyKind'>
    


  /**
   * Reference to a field of type 'PropertyKind[]'
   */
  export type ListEnumPropertyKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyKind[]'>
    


  /**
   * Reference to a field of type 'TransactionDirection'
   */
  export type EnumTransactionDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionDirection'>
    


  /**
   * Reference to a field of type 'TransactionDirection[]'
   */
  export type ListEnumTransactionDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionDirection[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    username?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordHash?: StringFilter<"User"> | string
    games?: GameListRelationFilter
    emailVerificationTokens?: EmailVerificationTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    games?: GameOrderByRelationAggregateInput
    emailVerificationTokens?: EmailVerificationTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordHash?: StringFilter<"User"> | string
    games?: GameListRelationFilter
    emailVerificationTokens?: EmailVerificationTokenListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
  }

  export type EmailVerificationTokenWhereInput = {
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    id?: UuidFilter<"EmailVerificationToken"> | string
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    tokenHash?: StringFilter<"EmailVerificationToken"> | string
    email?: StringFilter<"EmailVerificationToken"> | string
    userId?: UuidFilter<"EmailVerificationToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailVerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    tokenHash?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailVerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    email?: StringFilter<"EmailVerificationToken"> | string
    userId?: UuidFilter<"EmailVerificationToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type EmailVerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    tokenHash?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    _count?: EmailVerificationTokenCountOrderByAggregateInput
    _max?: EmailVerificationTokenMaxOrderByAggregateInput
    _min?: EmailVerificationTokenMinOrderByAggregateInput
  }

  export type EmailVerificationTokenScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EmailVerificationToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
    tokenHash?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    email?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    userId?: UuidWithAggregatesFilter<"EmailVerificationToken"> | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: UuidFilter<"Game"> | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    ownerUserId?: UuidNullableFilter<"Game"> | string | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    playersCount?: IntFilter<"Game"> | number
    initialBalance?: IntFilter<"Game"> | number
    startedAt?: DateTimeFilter<"Game"> | Date | string
    endedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    players?: PlayerListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerUserId?: SortOrderInput | SortOrder
    status?: SortOrder
    playersCount?: SortOrder
    initialBalance?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    players?: PlayerOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    ownerUserId?: UuidNullableFilter<"Game"> | string | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    playersCount?: IntFilter<"Game"> | number
    initialBalance?: IntFilter<"Game"> | number
    startedAt?: DateTimeFilter<"Game"> | Date | string
    endedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    players?: PlayerListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerUserId?: SortOrderInput | SortOrder
    status?: SortOrder
    playersCount?: SortOrder
    initialBalance?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Game"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    ownerUserId?: UuidNullableWithAggregatesFilter<"Game"> | string | null
    status?: EnumGameStatusWithAggregatesFilter<"Game"> | $Enums.GameStatus
    playersCount?: IntWithAggregatesFilter<"Game"> | number
    initialBalance?: IntWithAggregatesFilter<"Game"> | number
    startedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: UuidFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    gameId?: UuidFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    seat?: IntFilter<"Player"> | number
    balance?: IntFilter<"Player"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    nfcCard?: XOR<NfcCardNullableScalarRelationFilter, NfcCardWhereInput> | null
    outgoingTransactions?: TransactionListRelationFilter
    incomingTransactions?: TransactionListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameId?: SortOrder
    name?: SortOrder
    seat?: SortOrder
    balance?: SortOrder
    game?: GameOrderByWithRelationInput
    nfcCard?: NfcCardOrderByWithRelationInput
    outgoingTransactions?: TransactionOrderByRelationAggregateInput
    incomingTransactions?: TransactionOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gameId_seat?: PlayerGameIdSeatCompoundUniqueInput
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    gameId?: UuidFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    seat?: IntFilter<"Player"> | number
    balance?: IntFilter<"Player"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    nfcCard?: XOR<NfcCardNullableScalarRelationFilter, NfcCardWhereInput> | null
    outgoingTransactions?: TransactionListRelationFilter
    incomingTransactions?: TransactionListRelationFilter
  }, "id" | "gameId_seat">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameId?: SortOrder
    name?: SortOrder
    seat?: SortOrder
    balance?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Player"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    gameId?: UuidWithAggregatesFilter<"Player"> | string
    name?: StringWithAggregatesFilter<"Player"> | string
    seat?: IntWithAggregatesFilter<"Player"> | number
    balance?: IntWithAggregatesFilter<"Player"> | number
  }

  export type NfcCardWhereInput = {
    AND?: NfcCardWhereInput | NfcCardWhereInput[]
    OR?: NfcCardWhereInput[]
    NOT?: NfcCardWhereInput | NfcCardWhereInput[]
    id?: UuidFilter<"NfcCard"> | string
    createdAt?: DateTimeFilter<"NfcCard"> | Date | string
    updatedAt?: DateTimeFilter<"NfcCard"> | Date | string
    uid?: StringFilter<"NfcCard"> | string
    playerId?: UuidFilter<"NfcCard"> | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type NfcCardOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    playerId?: SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type NfcCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uid?: string
    playerId?: string
    AND?: NfcCardWhereInput | NfcCardWhereInput[]
    OR?: NfcCardWhereInput[]
    NOT?: NfcCardWhereInput | NfcCardWhereInput[]
    createdAt?: DateTimeFilter<"NfcCard"> | Date | string
    updatedAt?: DateTimeFilter<"NfcCard"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id" | "uid" | "playerId">

  export type NfcCardOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    playerId?: SortOrder
    _count?: NfcCardCountOrderByAggregateInput
    _max?: NfcCardMaxOrderByAggregateInput
    _min?: NfcCardMinOrderByAggregateInput
  }

  export type NfcCardScalarWhereWithAggregatesInput = {
    AND?: NfcCardScalarWhereWithAggregatesInput | NfcCardScalarWhereWithAggregatesInput[]
    OR?: NfcCardScalarWhereWithAggregatesInput[]
    NOT?: NfcCardScalarWhereWithAggregatesInput | NfcCardScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NfcCard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NfcCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NfcCard"> | Date | string
    uid?: StringWithAggregatesFilter<"NfcCard"> | string
    playerId?: UuidWithAggregatesFilter<"NfcCard"> | string
  }

  export type TransactionTypeWhereInput = {
    AND?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    OR?: TransactionTypeWhereInput[]
    NOT?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    id?: UuidFilter<"TransactionType"> | string
    createdAt?: DateTimeFilter<"TransactionType"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionType"> | Date | string
    code?: EnumTransactionKindFilter<"TransactionType"> | $Enums.TransactionKind
    label?: StringFilter<"TransactionType"> | string
    templates?: TransactionTemplateListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type TransactionTypeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    code?: SortOrder
    label?: SortOrder
    templates?: TransactionTemplateOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type TransactionTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: $Enums.TransactionKind
    AND?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    OR?: TransactionTypeWhereInput[]
    NOT?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    createdAt?: DateTimeFilter<"TransactionType"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionType"> | Date | string
    label?: StringFilter<"TransactionType"> | string
    templates?: TransactionTemplateListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id" | "code">

  export type TransactionTypeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    code?: SortOrder
    label?: SortOrder
    _count?: TransactionTypeCountOrderByAggregateInput
    _max?: TransactionTypeMaxOrderByAggregateInput
    _min?: TransactionTypeMinOrderByAggregateInput
  }

  export type TransactionTypeScalarWhereWithAggregatesInput = {
    AND?: TransactionTypeScalarWhereWithAggregatesInput | TransactionTypeScalarWhereWithAggregatesInput[]
    OR?: TransactionTypeScalarWhereWithAggregatesInput[]
    NOT?: TransactionTypeScalarWhereWithAggregatesInput | TransactionTypeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TransactionType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TransactionType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TransactionType"> | Date | string
    code?: EnumTransactionKindWithAggregatesFilter<"TransactionType"> | $Enums.TransactionKind
    label?: StringWithAggregatesFilter<"TransactionType"> | string
  }

  export type PropertyTemplateWhereInput = {
    AND?: PropertyTemplateWhereInput | PropertyTemplateWhereInput[]
    OR?: PropertyTemplateWhereInput[]
    NOT?: PropertyTemplateWhereInput | PropertyTemplateWhereInput[]
    id?: UuidFilter<"PropertyTemplate"> | string
    createdAt?: DateTimeFilter<"PropertyTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyTemplate"> | Date | string
    name?: StringFilter<"PropertyTemplate"> | string
    propertyGroup?: EnumPropertyGroupFilter<"PropertyTemplate"> | $Enums.PropertyGroup
    kind?: EnumPropertyKindFilter<"PropertyTemplate"> | $Enums.PropertyKind
    propertySet?: StringFilter<"PropertyTemplate"> | string
    country?: StringFilter<"PropertyTemplate"> | string
    landmark?: StringFilter<"PropertyTemplate"> | string
    icon?: StringNullableFilter<"PropertyTemplate"> | string | null
    price?: IntFilter<"PropertyTemplate"> | number
    rentBase?: IntFilter<"PropertyTemplate"> | number
    rent1House?: IntFilter<"PropertyTemplate"> | number
    rent2Houses?: IntFilter<"PropertyTemplate"> | number
    rent3Houses?: IntFilter<"PropertyTemplate"> | number
    rent4Houses?: IntFilter<"PropertyTemplate"> | number
    rentHotel?: IntFilter<"PropertyTemplate"> | number
    housePrice?: IntFilter<"PropertyTemplate"> | number
    hotelPrice?: IntFilter<"PropertyTemplate"> | number
    mortgageValue?: IntFilter<"PropertyTemplate"> | number
    boardIndex?: IntFilter<"PropertyTemplate"> | number
    color?: StringNullableFilter<"PropertyTemplate"> | string | null
    templates?: TransactionTemplateListRelationFilter
  }

  export type PropertyTemplateOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    propertyGroup?: SortOrder
    kind?: SortOrder
    propertySet?: SortOrder
    country?: SortOrder
    landmark?: SortOrder
    icon?: SortOrderInput | SortOrder
    price?: SortOrder
    rentBase?: SortOrder
    rent1House?: SortOrder
    rent2Houses?: SortOrder
    rent3Houses?: SortOrder
    rent4Houses?: SortOrder
    rentHotel?: SortOrder
    housePrice?: SortOrder
    hotelPrice?: SortOrder
    mortgageValue?: SortOrder
    boardIndex?: SortOrder
    color?: SortOrderInput | SortOrder
    templates?: TransactionTemplateOrderByRelationAggregateInput
  }

  export type PropertyTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PropertyTemplateWhereInput | PropertyTemplateWhereInput[]
    OR?: PropertyTemplateWhereInput[]
    NOT?: PropertyTemplateWhereInput | PropertyTemplateWhereInput[]
    createdAt?: DateTimeFilter<"PropertyTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyTemplate"> | Date | string
    propertyGroup?: EnumPropertyGroupFilter<"PropertyTemplate"> | $Enums.PropertyGroup
    kind?: EnumPropertyKindFilter<"PropertyTemplate"> | $Enums.PropertyKind
    propertySet?: StringFilter<"PropertyTemplate"> | string
    country?: StringFilter<"PropertyTemplate"> | string
    landmark?: StringFilter<"PropertyTemplate"> | string
    icon?: StringNullableFilter<"PropertyTemplate"> | string | null
    price?: IntFilter<"PropertyTemplate"> | number
    rentBase?: IntFilter<"PropertyTemplate"> | number
    rent1House?: IntFilter<"PropertyTemplate"> | number
    rent2Houses?: IntFilter<"PropertyTemplate"> | number
    rent3Houses?: IntFilter<"PropertyTemplate"> | number
    rent4Houses?: IntFilter<"PropertyTemplate"> | number
    rentHotel?: IntFilter<"PropertyTemplate"> | number
    housePrice?: IntFilter<"PropertyTemplate"> | number
    hotelPrice?: IntFilter<"PropertyTemplate"> | number
    mortgageValue?: IntFilter<"PropertyTemplate"> | number
    boardIndex?: IntFilter<"PropertyTemplate"> | number
    color?: StringNullableFilter<"PropertyTemplate"> | string | null
    templates?: TransactionTemplateListRelationFilter
  }, "id" | "name">

  export type PropertyTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    propertyGroup?: SortOrder
    kind?: SortOrder
    propertySet?: SortOrder
    country?: SortOrder
    landmark?: SortOrder
    icon?: SortOrderInput | SortOrder
    price?: SortOrder
    rentBase?: SortOrder
    rent1House?: SortOrder
    rent2Houses?: SortOrder
    rent3Houses?: SortOrder
    rent4Houses?: SortOrder
    rentHotel?: SortOrder
    housePrice?: SortOrder
    hotelPrice?: SortOrder
    mortgageValue?: SortOrder
    boardIndex?: SortOrder
    color?: SortOrderInput | SortOrder
    _count?: PropertyTemplateCountOrderByAggregateInput
    _avg?: PropertyTemplateAvgOrderByAggregateInput
    _max?: PropertyTemplateMaxOrderByAggregateInput
    _min?: PropertyTemplateMinOrderByAggregateInput
    _sum?: PropertyTemplateSumOrderByAggregateInput
  }

  export type PropertyTemplateScalarWhereWithAggregatesInput = {
    AND?: PropertyTemplateScalarWhereWithAggregatesInput | PropertyTemplateScalarWhereWithAggregatesInput[]
    OR?: PropertyTemplateScalarWhereWithAggregatesInput[]
    NOT?: PropertyTemplateScalarWhereWithAggregatesInput | PropertyTemplateScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PropertyTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PropertyTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyTemplate"> | Date | string
    name?: StringWithAggregatesFilter<"PropertyTemplate"> | string
    propertyGroup?: EnumPropertyGroupWithAggregatesFilter<"PropertyTemplate"> | $Enums.PropertyGroup
    kind?: EnumPropertyKindWithAggregatesFilter<"PropertyTemplate"> | $Enums.PropertyKind
    propertySet?: StringWithAggregatesFilter<"PropertyTemplate"> | string
    country?: StringWithAggregatesFilter<"PropertyTemplate"> | string
    landmark?: StringWithAggregatesFilter<"PropertyTemplate"> | string
    icon?: StringNullableWithAggregatesFilter<"PropertyTemplate"> | string | null
    price?: IntWithAggregatesFilter<"PropertyTemplate"> | number
    rentBase?: IntWithAggregatesFilter<"PropertyTemplate"> | number
    rent1House?: IntWithAggregatesFilter<"PropertyTemplate"> | number
    rent2Houses?: IntWithAggregatesFilter<"PropertyTemplate"> | number
    rent3Houses?: IntWithAggregatesFilter<"PropertyTemplate"> | number
    rent4Houses?: IntWithAggregatesFilter<"PropertyTemplate"> | number
    rentHotel?: IntWithAggregatesFilter<"PropertyTemplate"> | number
    housePrice?: IntWithAggregatesFilter<"PropertyTemplate"> | number
    hotelPrice?: IntWithAggregatesFilter<"PropertyTemplate"> | number
    mortgageValue?: IntWithAggregatesFilter<"PropertyTemplate"> | number
    boardIndex?: IntWithAggregatesFilter<"PropertyTemplate"> | number
    color?: StringNullableWithAggregatesFilter<"PropertyTemplate"> | string | null
  }

  export type TransactionTemplateWhereInput = {
    AND?: TransactionTemplateWhereInput | TransactionTemplateWhereInput[]
    OR?: TransactionTemplateWhereInput[]
    NOT?: TransactionTemplateWhereInput | TransactionTemplateWhereInput[]
    id?: UuidFilter<"TransactionTemplate"> | string
    createdAt?: DateTimeFilter<"TransactionTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionTemplate"> | Date | string
    name?: StringFilter<"TransactionTemplate"> | string
    direction?: EnumTransactionDirectionFilter<"TransactionTemplate"> | $Enums.TransactionDirection
    defaultAmount?: IntNullableFilter<"TransactionTemplate"> | number | null
    description?: StringNullableFilter<"TransactionTemplate"> | string | null
    transactionTypeId?: UuidFilter<"TransactionTemplate"> | string
    propertyTemplateId?: UuidNullableFilter<"TransactionTemplate"> | string | null
    transactionType?: XOR<TransactionTypeScalarRelationFilter, TransactionTypeWhereInput>
    propertyTemplate?: XOR<PropertyTemplateNullableScalarRelationFilter, PropertyTemplateWhereInput> | null
  }

  export type TransactionTemplateOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    direction?: SortOrder
    defaultAmount?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    transactionTypeId?: SortOrder
    propertyTemplateId?: SortOrderInput | SortOrder
    transactionType?: TransactionTypeOrderByWithRelationInput
    propertyTemplate?: PropertyTemplateOrderByWithRelationInput
  }

  export type TransactionTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TransactionTemplateWhereInput | TransactionTemplateWhereInput[]
    OR?: TransactionTemplateWhereInput[]
    NOT?: TransactionTemplateWhereInput | TransactionTemplateWhereInput[]
    createdAt?: DateTimeFilter<"TransactionTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionTemplate"> | Date | string
    direction?: EnumTransactionDirectionFilter<"TransactionTemplate"> | $Enums.TransactionDirection
    defaultAmount?: IntNullableFilter<"TransactionTemplate"> | number | null
    description?: StringNullableFilter<"TransactionTemplate"> | string | null
    transactionTypeId?: UuidFilter<"TransactionTemplate"> | string
    propertyTemplateId?: UuidNullableFilter<"TransactionTemplate"> | string | null
    transactionType?: XOR<TransactionTypeScalarRelationFilter, TransactionTypeWhereInput>
    propertyTemplate?: XOR<PropertyTemplateNullableScalarRelationFilter, PropertyTemplateWhereInput> | null
  }, "id" | "name">

  export type TransactionTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    direction?: SortOrder
    defaultAmount?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    transactionTypeId?: SortOrder
    propertyTemplateId?: SortOrderInput | SortOrder
    _count?: TransactionTemplateCountOrderByAggregateInput
    _avg?: TransactionTemplateAvgOrderByAggregateInput
    _max?: TransactionTemplateMaxOrderByAggregateInput
    _min?: TransactionTemplateMinOrderByAggregateInput
    _sum?: TransactionTemplateSumOrderByAggregateInput
  }

  export type TransactionTemplateScalarWhereWithAggregatesInput = {
    AND?: TransactionTemplateScalarWhereWithAggregatesInput | TransactionTemplateScalarWhereWithAggregatesInput[]
    OR?: TransactionTemplateScalarWhereWithAggregatesInput[]
    NOT?: TransactionTemplateScalarWhereWithAggregatesInput | TransactionTemplateScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TransactionTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TransactionTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TransactionTemplate"> | Date | string
    name?: StringWithAggregatesFilter<"TransactionTemplate"> | string
    direction?: EnumTransactionDirectionWithAggregatesFilter<"TransactionTemplate"> | $Enums.TransactionDirection
    defaultAmount?: IntNullableWithAggregatesFilter<"TransactionTemplate"> | number | null
    description?: StringNullableWithAggregatesFilter<"TransactionTemplate"> | string | null
    transactionTypeId?: UuidWithAggregatesFilter<"TransactionTemplate"> | string
    propertyTemplateId?: UuidNullableWithAggregatesFilter<"TransactionTemplate"> | string | null
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: UuidFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    gameId?: UuidFilter<"Transaction"> | string
    transactionTypeId?: UuidFilter<"Transaction"> | string
    direction?: EnumTransactionDirectionFilter<"Transaction"> | $Enums.TransactionDirection
    amount?: IntFilter<"Transaction"> | number
    note?: StringNullableFilter<"Transaction"> | string | null
    fromPlayerId?: UuidNullableFilter<"Transaction"> | string | null
    toPlayerId?: UuidNullableFilter<"Transaction"> | string | null
    fromBalanceBefore?: IntNullableFilter<"Transaction"> | number | null
    fromBalanceAfter?: IntNullableFilter<"Transaction"> | number | null
    toBalanceBefore?: IntNullableFilter<"Transaction"> | number | null
    toBalanceAfter?: IntNullableFilter<"Transaction"> | number | null
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    transactionType?: XOR<TransactionTypeScalarRelationFilter, TransactionTypeWhereInput>
    fromPlayer?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    toPlayer?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameId?: SortOrder
    transactionTypeId?: SortOrder
    direction?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    fromPlayerId?: SortOrderInput | SortOrder
    toPlayerId?: SortOrderInput | SortOrder
    fromBalanceBefore?: SortOrderInput | SortOrder
    fromBalanceAfter?: SortOrderInput | SortOrder
    toBalanceBefore?: SortOrderInput | SortOrder
    toBalanceAfter?: SortOrderInput | SortOrder
    game?: GameOrderByWithRelationInput
    transactionType?: TransactionTypeOrderByWithRelationInput
    fromPlayer?: PlayerOrderByWithRelationInput
    toPlayer?: PlayerOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    gameId?: UuidFilter<"Transaction"> | string
    transactionTypeId?: UuidFilter<"Transaction"> | string
    direction?: EnumTransactionDirectionFilter<"Transaction"> | $Enums.TransactionDirection
    amount?: IntFilter<"Transaction"> | number
    note?: StringNullableFilter<"Transaction"> | string | null
    fromPlayerId?: UuidNullableFilter<"Transaction"> | string | null
    toPlayerId?: UuidNullableFilter<"Transaction"> | string | null
    fromBalanceBefore?: IntNullableFilter<"Transaction"> | number | null
    fromBalanceAfter?: IntNullableFilter<"Transaction"> | number | null
    toBalanceBefore?: IntNullableFilter<"Transaction"> | number | null
    toBalanceAfter?: IntNullableFilter<"Transaction"> | number | null
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    transactionType?: XOR<TransactionTypeScalarRelationFilter, TransactionTypeWhereInput>
    fromPlayer?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    toPlayer?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameId?: SortOrder
    transactionTypeId?: SortOrder
    direction?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    fromPlayerId?: SortOrderInput | SortOrder
    toPlayerId?: SortOrderInput | SortOrder
    fromBalanceBefore?: SortOrderInput | SortOrder
    fromBalanceAfter?: SortOrderInput | SortOrder
    toBalanceBefore?: SortOrderInput | SortOrder
    toBalanceAfter?: SortOrderInput | SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    gameId?: UuidWithAggregatesFilter<"Transaction"> | string
    transactionTypeId?: UuidWithAggregatesFilter<"Transaction"> | string
    direction?: EnumTransactionDirectionWithAggregatesFilter<"Transaction"> | $Enums.TransactionDirection
    amount?: IntWithAggregatesFilter<"Transaction"> | number
    note?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    fromPlayerId?: UuidNullableWithAggregatesFilter<"Transaction"> | string | null
    toPlayerId?: UuidNullableWithAggregatesFilter<"Transaction"> | string | null
    fromBalanceBefore?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    fromBalanceAfter?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    toBalanceBefore?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    toBalanceAfter?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash: string
    games?: GameCreateNestedManyWithoutOwnerInput
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash: string
    games?: GameUncheckedCreateNestedManyWithoutOwnerInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    games?: GameUpdateManyWithoutOwnerNestedInput
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    games?: GameUncheckedUpdateManyWithoutOwnerNestedInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type EmailVerificationTokenCreateInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    tokenHash: string
    email: string
    user: UserCreateNestedOneWithoutEmailVerificationTokensInput
  }

  export type EmailVerificationTokenUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    tokenHash: string
    email: string
    userId: string
  }

  export type EmailVerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutEmailVerificationTokensNestedInput
  }

  export type EmailVerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailVerificationTokenCreateManyInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    tokenHash: string
    email: string
    userId: string
  }

  export type EmailVerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EmailVerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.GameStatus
    playersCount: number
    initialBalance: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    owner?: UserCreateNestedOneWithoutGamesInput
    players?: PlayerCreateNestedManyWithoutGameInput
    transactions?: TransactionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerUserId?: string | null
    status?: $Enums.GameStatus
    playersCount: number
    initialBalance: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    players?: PlayerUncheckedCreateNestedManyWithoutGameInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    playersCount?: IntFieldUpdateOperationsInput | number
    initialBalance?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneWithoutGamesNestedInput
    players?: PlayerUpdateManyWithoutGameNestedInput
    transactions?: TransactionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    playersCount?: IntFieldUpdateOperationsInput | number
    initialBalance?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUncheckedUpdateManyWithoutGameNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerUserId?: string | null
    status?: $Enums.GameStatus
    playersCount: number
    initialBalance: number
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    playersCount?: IntFieldUpdateOperationsInput | number
    initialBalance?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    playersCount?: IntFieldUpdateOperationsInput | number
    initialBalance?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlayerCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    seat: number
    balance: number
    game: GameCreateNestedOneWithoutPlayersInput
    nfcCard?: NfcCardCreateNestedOneWithoutPlayerInput
    outgoingTransactions?: TransactionCreateNestedManyWithoutFromPlayerInput
    incomingTransactions?: TransactionCreateNestedManyWithoutToPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    name: string
    seat: number
    balance: number
    nfcCard?: NfcCardUncheckedCreateNestedOneWithoutPlayerInput
    outgoingTransactions?: TransactionUncheckedCreateNestedManyWithoutFromPlayerInput
    incomingTransactions?: TransactionUncheckedCreateNestedManyWithoutToPlayerInput
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutPlayersNestedInput
    nfcCard?: NfcCardUpdateOneWithoutPlayerNestedInput
    outgoingTransactions?: TransactionUpdateManyWithoutFromPlayerNestedInput
    incomingTransactions?: TransactionUpdateManyWithoutToPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    nfcCard?: NfcCardUncheckedUpdateOneWithoutPlayerNestedInput
    outgoingTransactions?: TransactionUncheckedUpdateManyWithoutFromPlayerNestedInput
    incomingTransactions?: TransactionUncheckedUpdateManyWithoutToPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    name: string
    seat: number
    balance: number
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type NfcCardCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    player: PlayerCreateNestedOneWithoutNfcCardInput
  }

  export type NfcCardUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    playerId: string
  }

  export type NfcCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    player?: PlayerUpdateOneRequiredWithoutNfcCardNestedInput
  }

  export type NfcCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type NfcCardCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    playerId: string
  }

  export type NfcCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type NfcCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTypeCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    code: $Enums.TransactionKind
    label: string
    templates?: TransactionTemplateCreateNestedManyWithoutTransactionTypeInput
    transactions?: TransactionCreateNestedManyWithoutTransactionTypeInput
  }

  export type TransactionTypeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    code: $Enums.TransactionKind
    label: string
    templates?: TransactionTemplateUncheckedCreateNestedManyWithoutTransactionTypeInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTransactionTypeInput
  }

  export type TransactionTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: EnumTransactionKindFieldUpdateOperationsInput | $Enums.TransactionKind
    label?: StringFieldUpdateOperationsInput | string
    templates?: TransactionTemplateUpdateManyWithoutTransactionTypeNestedInput
    transactions?: TransactionUpdateManyWithoutTransactionTypeNestedInput
  }

  export type TransactionTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: EnumTransactionKindFieldUpdateOperationsInput | $Enums.TransactionKind
    label?: StringFieldUpdateOperationsInput | string
    templates?: TransactionTemplateUncheckedUpdateManyWithoutTransactionTypeNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTransactionTypeNestedInput
  }

  export type TransactionTypeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    code: $Enums.TransactionKind
    label: string
  }

  export type TransactionTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: EnumTransactionKindFieldUpdateOperationsInput | $Enums.TransactionKind
    label?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: EnumTransactionKindFieldUpdateOperationsInput | $Enums.TransactionKind
    label?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyTemplateCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    propertyGroup?: $Enums.PropertyGroup
    kind?: $Enums.PropertyKind
    propertySet?: string
    country?: string
    landmark?: string
    icon?: string | null
    price?: number
    rentBase?: number
    rent1House?: number
    rent2Houses?: number
    rent3Houses?: number
    rent4Houses?: number
    rentHotel?: number
    housePrice?: number
    hotelPrice?: number
    mortgageValue?: number
    boardIndex?: number
    color?: string | null
    templates?: TransactionTemplateCreateNestedManyWithoutPropertyTemplateInput
  }

  export type PropertyTemplateUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    propertyGroup?: $Enums.PropertyGroup
    kind?: $Enums.PropertyKind
    propertySet?: string
    country?: string
    landmark?: string
    icon?: string | null
    price?: number
    rentBase?: number
    rent1House?: number
    rent2Houses?: number
    rent3Houses?: number
    rent4Houses?: number
    rentHotel?: number
    housePrice?: number
    hotelPrice?: number
    mortgageValue?: number
    boardIndex?: number
    color?: string | null
    templates?: TransactionTemplateUncheckedCreateNestedManyWithoutPropertyTemplateInput
  }

  export type PropertyTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    propertyGroup?: EnumPropertyGroupFieldUpdateOperationsInput | $Enums.PropertyGroup
    kind?: EnumPropertyKindFieldUpdateOperationsInput | $Enums.PropertyKind
    propertySet?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    rentBase?: IntFieldUpdateOperationsInput | number
    rent1House?: IntFieldUpdateOperationsInput | number
    rent2Houses?: IntFieldUpdateOperationsInput | number
    rent3Houses?: IntFieldUpdateOperationsInput | number
    rent4Houses?: IntFieldUpdateOperationsInput | number
    rentHotel?: IntFieldUpdateOperationsInput | number
    housePrice?: IntFieldUpdateOperationsInput | number
    hotelPrice?: IntFieldUpdateOperationsInput | number
    mortgageValue?: IntFieldUpdateOperationsInput | number
    boardIndex?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    templates?: TransactionTemplateUpdateManyWithoutPropertyTemplateNestedInput
  }

  export type PropertyTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    propertyGroup?: EnumPropertyGroupFieldUpdateOperationsInput | $Enums.PropertyGroup
    kind?: EnumPropertyKindFieldUpdateOperationsInput | $Enums.PropertyKind
    propertySet?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    rentBase?: IntFieldUpdateOperationsInput | number
    rent1House?: IntFieldUpdateOperationsInput | number
    rent2Houses?: IntFieldUpdateOperationsInput | number
    rent3Houses?: IntFieldUpdateOperationsInput | number
    rent4Houses?: IntFieldUpdateOperationsInput | number
    rentHotel?: IntFieldUpdateOperationsInput | number
    housePrice?: IntFieldUpdateOperationsInput | number
    hotelPrice?: IntFieldUpdateOperationsInput | number
    mortgageValue?: IntFieldUpdateOperationsInput | number
    boardIndex?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    templates?: TransactionTemplateUncheckedUpdateManyWithoutPropertyTemplateNestedInput
  }

  export type PropertyTemplateCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    propertyGroup?: $Enums.PropertyGroup
    kind?: $Enums.PropertyKind
    propertySet?: string
    country?: string
    landmark?: string
    icon?: string | null
    price?: number
    rentBase?: number
    rent1House?: number
    rent2Houses?: number
    rent3Houses?: number
    rent4Houses?: number
    rentHotel?: number
    housePrice?: number
    hotelPrice?: number
    mortgageValue?: number
    boardIndex?: number
    color?: string | null
  }

  export type PropertyTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    propertyGroup?: EnumPropertyGroupFieldUpdateOperationsInput | $Enums.PropertyGroup
    kind?: EnumPropertyKindFieldUpdateOperationsInput | $Enums.PropertyKind
    propertySet?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    rentBase?: IntFieldUpdateOperationsInput | number
    rent1House?: IntFieldUpdateOperationsInput | number
    rent2Houses?: IntFieldUpdateOperationsInput | number
    rent3Houses?: IntFieldUpdateOperationsInput | number
    rent4Houses?: IntFieldUpdateOperationsInput | number
    rentHotel?: IntFieldUpdateOperationsInput | number
    housePrice?: IntFieldUpdateOperationsInput | number
    hotelPrice?: IntFieldUpdateOperationsInput | number
    mortgageValue?: IntFieldUpdateOperationsInput | number
    boardIndex?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    propertyGroup?: EnumPropertyGroupFieldUpdateOperationsInput | $Enums.PropertyGroup
    kind?: EnumPropertyKindFieldUpdateOperationsInput | $Enums.PropertyKind
    propertySet?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    rentBase?: IntFieldUpdateOperationsInput | number
    rent1House?: IntFieldUpdateOperationsInput | number
    rent2Houses?: IntFieldUpdateOperationsInput | number
    rent3Houses?: IntFieldUpdateOperationsInput | number
    rent4Houses?: IntFieldUpdateOperationsInput | number
    rentHotel?: IntFieldUpdateOperationsInput | number
    housePrice?: IntFieldUpdateOperationsInput | number
    hotelPrice?: IntFieldUpdateOperationsInput | number
    mortgageValue?: IntFieldUpdateOperationsInput | number
    boardIndex?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionTemplateCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    direction: $Enums.TransactionDirection
    defaultAmount?: number | null
    description?: string | null
    transactionType: TransactionTypeCreateNestedOneWithoutTemplatesInput
    propertyTemplate?: PropertyTemplateCreateNestedOneWithoutTemplatesInput
  }

  export type TransactionTemplateUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    direction: $Enums.TransactionDirection
    defaultAmount?: number | null
    description?: string | null
    transactionTypeId: string
    propertyTemplateId?: string | null
  }

  export type TransactionTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    defaultAmount?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: TransactionTypeUpdateOneRequiredWithoutTemplatesNestedInput
    propertyTemplate?: PropertyTemplateUpdateOneWithoutTemplatesNestedInput
  }

  export type TransactionTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    defaultAmount?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionTypeId?: StringFieldUpdateOperationsInput | string
    propertyTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionTemplateCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    direction: $Enums.TransactionDirection
    defaultAmount?: number | null
    description?: string | null
    transactionTypeId: string
    propertyTemplateId?: string | null
  }

  export type TransactionTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    defaultAmount?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    defaultAmount?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionTypeId?: StringFieldUpdateOperationsInput | string
    propertyTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
    game: GameCreateNestedOneWithoutTransactionsInput
    transactionType: TransactionTypeCreateNestedOneWithoutTransactionsInput
    fromPlayer?: PlayerCreateNestedOneWithoutOutgoingTransactionsInput
    toPlayer?: PlayerCreateNestedOneWithoutIncomingTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    transactionTypeId: string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    fromPlayerId?: string | null
    toPlayerId?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    game?: GameUpdateOneRequiredWithoutTransactionsNestedInput
    transactionType?: TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput
    fromPlayer?: PlayerUpdateOneWithoutOutgoingTransactionsNestedInput
    toPlayer?: PlayerUpdateOneWithoutIncomingTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    transactionTypeId?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    toPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    transactionTypeId: string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    fromPlayerId?: string | null
    toPlayerId?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    transactionTypeId?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    toPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type EmailVerificationTokenListRelationFilter = {
    every?: EmailVerificationTokenWhereInput
    some?: EmailVerificationTokenWhereInput
    none?: EmailVerificationTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailVerificationTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    passwordHash?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    passwordHash?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    passwordHash?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmailVerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    tokenHash?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type EmailVerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    tokenHash?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type EmailVerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    tokenHash?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerUserId?: SortOrder
    status?: SortOrder
    playersCount?: SortOrder
    initialBalance?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    playersCount?: SortOrder
    initialBalance?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerUserId?: SortOrder
    status?: SortOrder
    playersCount?: SortOrder
    initialBalance?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerUserId?: SortOrder
    status?: SortOrder
    playersCount?: SortOrder
    initialBalance?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    playersCount?: SortOrder
    initialBalance?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
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

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type NfcCardNullableScalarRelationFilter = {
    is?: NfcCardWhereInput | null
    isNot?: NfcCardWhereInput | null
  }

  export type PlayerGameIdSeatCompoundUniqueInput = {
    gameId: string
    seat: number
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameId?: SortOrder
    name?: SortOrder
    seat?: SortOrder
    balance?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    seat?: SortOrder
    balance?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameId?: SortOrder
    name?: SortOrder
    seat?: SortOrder
    balance?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameId?: SortOrder
    name?: SortOrder
    seat?: SortOrder
    balance?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    seat?: SortOrder
    balance?: SortOrder
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type NfcCardCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    playerId?: SortOrder
  }

  export type NfcCardMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    playerId?: SortOrder
  }

  export type NfcCardMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    playerId?: SortOrder
  }

  export type EnumTransactionKindFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionKind | EnumTransactionKindFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionKind[] | ListEnumTransactionKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionKind[] | ListEnumTransactionKindFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionKindFilter<$PrismaModel> | $Enums.TransactionKind
  }

  export type TransactionTemplateListRelationFilter = {
    every?: TransactionTemplateWhereInput
    some?: TransactionTemplateWhereInput
    none?: TransactionTemplateWhereInput
  }

  export type TransactionTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionTypeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    code?: SortOrder
    label?: SortOrder
  }

  export type TransactionTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    code?: SortOrder
    label?: SortOrder
  }

  export type TransactionTypeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    code?: SortOrder
    label?: SortOrder
  }

  export type EnumTransactionKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionKind | EnumTransactionKindFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionKind[] | ListEnumTransactionKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionKind[] | ListEnumTransactionKindFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionKindWithAggregatesFilter<$PrismaModel> | $Enums.TransactionKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionKindFilter<$PrismaModel>
    _max?: NestedEnumTransactionKindFilter<$PrismaModel>
  }

  export type EnumPropertyGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyGroup | EnumPropertyGroupFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyGroup[] | ListEnumPropertyGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyGroup[] | ListEnumPropertyGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyGroupFilter<$PrismaModel> | $Enums.PropertyGroup
  }

  export type EnumPropertyKindFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyKind | EnumPropertyKindFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyKind[] | ListEnumPropertyKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyKind[] | ListEnumPropertyKindFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyKindFilter<$PrismaModel> | $Enums.PropertyKind
  }

  export type PropertyTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    propertyGroup?: SortOrder
    kind?: SortOrder
    propertySet?: SortOrder
    country?: SortOrder
    landmark?: SortOrder
    icon?: SortOrder
    price?: SortOrder
    rentBase?: SortOrder
    rent1House?: SortOrder
    rent2Houses?: SortOrder
    rent3Houses?: SortOrder
    rent4Houses?: SortOrder
    rentHotel?: SortOrder
    housePrice?: SortOrder
    hotelPrice?: SortOrder
    mortgageValue?: SortOrder
    boardIndex?: SortOrder
    color?: SortOrder
  }

  export type PropertyTemplateAvgOrderByAggregateInput = {
    price?: SortOrder
    rentBase?: SortOrder
    rent1House?: SortOrder
    rent2Houses?: SortOrder
    rent3Houses?: SortOrder
    rent4Houses?: SortOrder
    rentHotel?: SortOrder
    housePrice?: SortOrder
    hotelPrice?: SortOrder
    mortgageValue?: SortOrder
    boardIndex?: SortOrder
  }

  export type PropertyTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    propertyGroup?: SortOrder
    kind?: SortOrder
    propertySet?: SortOrder
    country?: SortOrder
    landmark?: SortOrder
    icon?: SortOrder
    price?: SortOrder
    rentBase?: SortOrder
    rent1House?: SortOrder
    rent2Houses?: SortOrder
    rent3Houses?: SortOrder
    rent4Houses?: SortOrder
    rentHotel?: SortOrder
    housePrice?: SortOrder
    hotelPrice?: SortOrder
    mortgageValue?: SortOrder
    boardIndex?: SortOrder
    color?: SortOrder
  }

  export type PropertyTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    propertyGroup?: SortOrder
    kind?: SortOrder
    propertySet?: SortOrder
    country?: SortOrder
    landmark?: SortOrder
    icon?: SortOrder
    price?: SortOrder
    rentBase?: SortOrder
    rent1House?: SortOrder
    rent2Houses?: SortOrder
    rent3Houses?: SortOrder
    rent4Houses?: SortOrder
    rentHotel?: SortOrder
    housePrice?: SortOrder
    hotelPrice?: SortOrder
    mortgageValue?: SortOrder
    boardIndex?: SortOrder
    color?: SortOrder
  }

  export type PropertyTemplateSumOrderByAggregateInput = {
    price?: SortOrder
    rentBase?: SortOrder
    rent1House?: SortOrder
    rent2Houses?: SortOrder
    rent3Houses?: SortOrder
    rent4Houses?: SortOrder
    rentHotel?: SortOrder
    housePrice?: SortOrder
    hotelPrice?: SortOrder
    mortgageValue?: SortOrder
    boardIndex?: SortOrder
  }

  export type EnumPropertyGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyGroup | EnumPropertyGroupFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyGroup[] | ListEnumPropertyGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyGroup[] | ListEnumPropertyGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyGroupWithAggregatesFilter<$PrismaModel> | $Enums.PropertyGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyGroupFilter<$PrismaModel>
    _max?: NestedEnumPropertyGroupFilter<$PrismaModel>
  }

  export type EnumPropertyKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyKind | EnumPropertyKindFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyKind[] | ListEnumPropertyKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyKind[] | ListEnumPropertyKindFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyKindWithAggregatesFilter<$PrismaModel> | $Enums.PropertyKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyKindFilter<$PrismaModel>
    _max?: NestedEnumPropertyKindFilter<$PrismaModel>
  }

  export type EnumTransactionDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionDirection | EnumTransactionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionDirectionFilter<$PrismaModel> | $Enums.TransactionDirection
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TransactionTypeScalarRelationFilter = {
    is?: TransactionTypeWhereInput
    isNot?: TransactionTypeWhereInput
  }

  export type PropertyTemplateNullableScalarRelationFilter = {
    is?: PropertyTemplateWhereInput | null
    isNot?: PropertyTemplateWhereInput | null
  }

  export type TransactionTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    direction?: SortOrder
    defaultAmount?: SortOrder
    description?: SortOrder
    transactionTypeId?: SortOrder
    propertyTemplateId?: SortOrder
  }

  export type TransactionTemplateAvgOrderByAggregateInput = {
    defaultAmount?: SortOrder
  }

  export type TransactionTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    direction?: SortOrder
    defaultAmount?: SortOrder
    description?: SortOrder
    transactionTypeId?: SortOrder
    propertyTemplateId?: SortOrder
  }

  export type TransactionTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    direction?: SortOrder
    defaultAmount?: SortOrder
    description?: SortOrder
    transactionTypeId?: SortOrder
    propertyTemplateId?: SortOrder
  }

  export type TransactionTemplateSumOrderByAggregateInput = {
    defaultAmount?: SortOrder
  }

  export type EnumTransactionDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionDirection | EnumTransactionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionDirectionWithAggregatesFilter<$PrismaModel> | $Enums.TransactionDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionDirectionFilter<$PrismaModel>
    _max?: NestedEnumTransactionDirectionFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PlayerNullableScalarRelationFilter = {
    is?: PlayerWhereInput | null
    isNot?: PlayerWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameId?: SortOrder
    transactionTypeId?: SortOrder
    direction?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    fromPlayerId?: SortOrder
    toPlayerId?: SortOrder
    fromBalanceBefore?: SortOrder
    fromBalanceAfter?: SortOrder
    toBalanceBefore?: SortOrder
    toBalanceAfter?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    fromBalanceBefore?: SortOrder
    fromBalanceAfter?: SortOrder
    toBalanceBefore?: SortOrder
    toBalanceAfter?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameId?: SortOrder
    transactionTypeId?: SortOrder
    direction?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    fromPlayerId?: SortOrder
    toPlayerId?: SortOrder
    fromBalanceBefore?: SortOrder
    fromBalanceAfter?: SortOrder
    toBalanceBefore?: SortOrder
    toBalanceAfter?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameId?: SortOrder
    transactionTypeId?: SortOrder
    direction?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    fromPlayerId?: SortOrder
    toPlayerId?: SortOrder
    fromBalanceBefore?: SortOrder
    fromBalanceAfter?: SortOrder
    toBalanceBefore?: SortOrder
    toBalanceAfter?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    fromBalanceBefore?: SortOrder
    fromBalanceAfter?: SortOrder
    toBalanceBefore?: SortOrder
    toBalanceAfter?: SortOrder
  }

  export type GameCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GameCreateWithoutOwnerInput, GameUncheckedCreateWithoutOwnerInput> | GameCreateWithoutOwnerInput[] | GameUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutOwnerInput | GameCreateOrConnectWithoutOwnerInput[]
    createMany?: GameCreateManyOwnerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type EmailVerificationTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GameCreateWithoutOwnerInput, GameUncheckedCreateWithoutOwnerInput> | GameCreateWithoutOwnerInput[] | GameUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutOwnerInput | GameCreateOrConnectWithoutOwnerInput[]
    createMany?: GameCreateManyOwnerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GameUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GameCreateWithoutOwnerInput, GameUncheckedCreateWithoutOwnerInput> | GameCreateWithoutOwnerInput[] | GameUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutOwnerInput | GameCreateOrConnectWithoutOwnerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutOwnerInput | GameUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GameCreateManyOwnerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutOwnerInput | GameUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutOwnerInput | GameUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type EmailVerificationTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    set?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    disconnect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    delete?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    update?: EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationTokenUpdateManyWithWhereWithoutUserInput | EmailVerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GameCreateWithoutOwnerInput, GameUncheckedCreateWithoutOwnerInput> | GameCreateWithoutOwnerInput[] | GameUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutOwnerInput | GameCreateOrConnectWithoutOwnerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutOwnerInput | GameUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GameCreateManyOwnerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutOwnerInput | GameUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutOwnerInput | GameUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    set?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    disconnect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    delete?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    update?: EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationTokenUpdateManyWithWhereWithoutUserInput | EmailVerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmailVerificationTokensInput = {
    create?: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmailVerificationTokensNestedInput = {
    create?: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationTokensInput
    upsert?: UserUpsertWithoutEmailVerificationTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailVerificationTokensInput, UserUpdateWithoutEmailVerificationTokensInput>, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
  }

  export type UserCreateNestedOneWithoutGamesInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    connect?: UserWhereUniqueInput
  }

  export type PlayerCreateNestedManyWithoutGameInput = {
    create?: XOR<PlayerCreateWithoutGameInput, PlayerUncheckedCreateWithoutGameInput> | PlayerCreateWithoutGameInput[] | PlayerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutGameInput | PlayerCreateOrConnectWithoutGameInput[]
    createMany?: PlayerCreateManyGameInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutGameInput = {
    create?: XOR<TransactionCreateWithoutGameInput, TransactionUncheckedCreateWithoutGameInput> | TransactionCreateWithoutGameInput[] | TransactionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGameInput | TransactionCreateOrConnectWithoutGameInput[]
    createMany?: TransactionCreateManyGameInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<PlayerCreateWithoutGameInput, PlayerUncheckedCreateWithoutGameInput> | PlayerCreateWithoutGameInput[] | PlayerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutGameInput | PlayerCreateOrConnectWithoutGameInput[]
    createMany?: PlayerCreateManyGameInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<TransactionCreateWithoutGameInput, TransactionUncheckedCreateWithoutGameInput> | TransactionCreateWithoutGameInput[] | TransactionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGameInput | TransactionCreateOrConnectWithoutGameInput[]
    createMany?: TransactionCreateManyGameInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutGamesNestedInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    upsert?: UserUpsertWithoutGamesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesInput, UserUpdateWithoutGamesInput>, UserUncheckedUpdateWithoutGamesInput>
  }

  export type PlayerUpdateManyWithoutGameNestedInput = {
    create?: XOR<PlayerCreateWithoutGameInput, PlayerUncheckedCreateWithoutGameInput> | PlayerCreateWithoutGameInput[] | PlayerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutGameInput | PlayerCreateOrConnectWithoutGameInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutGameInput | PlayerUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PlayerCreateManyGameInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutGameInput | PlayerUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutGameInput | PlayerUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutGameNestedInput = {
    create?: XOR<TransactionCreateWithoutGameInput, TransactionUncheckedCreateWithoutGameInput> | TransactionCreateWithoutGameInput[] | TransactionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGameInput | TransactionCreateOrConnectWithoutGameInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutGameInput | TransactionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: TransactionCreateManyGameInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutGameInput | TransactionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutGameInput | TransactionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PlayerUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<PlayerCreateWithoutGameInput, PlayerUncheckedCreateWithoutGameInput> | PlayerCreateWithoutGameInput[] | PlayerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutGameInput | PlayerCreateOrConnectWithoutGameInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutGameInput | PlayerUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PlayerCreateManyGameInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutGameInput | PlayerUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutGameInput | PlayerUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<TransactionCreateWithoutGameInput, TransactionUncheckedCreateWithoutGameInput> | TransactionCreateWithoutGameInput[] | TransactionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGameInput | TransactionCreateOrConnectWithoutGameInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutGameInput | TransactionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: TransactionCreateManyGameInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutGameInput | TransactionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutGameInput | TransactionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutPlayersInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput
    connect?: GameWhereUniqueInput
  }

  export type NfcCardCreateNestedOneWithoutPlayerInput = {
    create?: XOR<NfcCardCreateWithoutPlayerInput, NfcCardUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: NfcCardCreateOrConnectWithoutPlayerInput
    connect?: NfcCardWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutFromPlayerInput = {
    create?: XOR<TransactionCreateWithoutFromPlayerInput, TransactionUncheckedCreateWithoutFromPlayerInput> | TransactionCreateWithoutFromPlayerInput[] | TransactionUncheckedCreateWithoutFromPlayerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFromPlayerInput | TransactionCreateOrConnectWithoutFromPlayerInput[]
    createMany?: TransactionCreateManyFromPlayerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutToPlayerInput = {
    create?: XOR<TransactionCreateWithoutToPlayerInput, TransactionUncheckedCreateWithoutToPlayerInput> | TransactionCreateWithoutToPlayerInput[] | TransactionUncheckedCreateWithoutToPlayerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutToPlayerInput | TransactionCreateOrConnectWithoutToPlayerInput[]
    createMany?: TransactionCreateManyToPlayerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NfcCardUncheckedCreateNestedOneWithoutPlayerInput = {
    create?: XOR<NfcCardCreateWithoutPlayerInput, NfcCardUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: NfcCardCreateOrConnectWithoutPlayerInput
    connect?: NfcCardWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutFromPlayerInput = {
    create?: XOR<TransactionCreateWithoutFromPlayerInput, TransactionUncheckedCreateWithoutFromPlayerInput> | TransactionCreateWithoutFromPlayerInput[] | TransactionUncheckedCreateWithoutFromPlayerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFromPlayerInput | TransactionCreateOrConnectWithoutFromPlayerInput[]
    createMany?: TransactionCreateManyFromPlayerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutToPlayerInput = {
    create?: XOR<TransactionCreateWithoutToPlayerInput, TransactionUncheckedCreateWithoutToPlayerInput> | TransactionCreateWithoutToPlayerInput[] | TransactionUncheckedCreateWithoutToPlayerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutToPlayerInput | TransactionCreateOrConnectWithoutToPlayerInput[]
    createMany?: TransactionCreateManyToPlayerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type GameUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput
    upsert?: GameUpsertWithoutPlayersInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutPlayersInput, GameUpdateWithoutPlayersInput>, GameUncheckedUpdateWithoutPlayersInput>
  }

  export type NfcCardUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<NfcCardCreateWithoutPlayerInput, NfcCardUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: NfcCardCreateOrConnectWithoutPlayerInput
    upsert?: NfcCardUpsertWithoutPlayerInput
    disconnect?: NfcCardWhereInput | boolean
    delete?: NfcCardWhereInput | boolean
    connect?: NfcCardWhereUniqueInput
    update?: XOR<XOR<NfcCardUpdateToOneWithWhereWithoutPlayerInput, NfcCardUpdateWithoutPlayerInput>, NfcCardUncheckedUpdateWithoutPlayerInput>
  }

  export type TransactionUpdateManyWithoutFromPlayerNestedInput = {
    create?: XOR<TransactionCreateWithoutFromPlayerInput, TransactionUncheckedCreateWithoutFromPlayerInput> | TransactionCreateWithoutFromPlayerInput[] | TransactionUncheckedCreateWithoutFromPlayerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFromPlayerInput | TransactionCreateOrConnectWithoutFromPlayerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutFromPlayerInput | TransactionUpsertWithWhereUniqueWithoutFromPlayerInput[]
    createMany?: TransactionCreateManyFromPlayerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutFromPlayerInput | TransactionUpdateWithWhereUniqueWithoutFromPlayerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutFromPlayerInput | TransactionUpdateManyWithWhereWithoutFromPlayerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutToPlayerNestedInput = {
    create?: XOR<TransactionCreateWithoutToPlayerInput, TransactionUncheckedCreateWithoutToPlayerInput> | TransactionCreateWithoutToPlayerInput[] | TransactionUncheckedCreateWithoutToPlayerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutToPlayerInput | TransactionCreateOrConnectWithoutToPlayerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutToPlayerInput | TransactionUpsertWithWhereUniqueWithoutToPlayerInput[]
    createMany?: TransactionCreateManyToPlayerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutToPlayerInput | TransactionUpdateWithWhereUniqueWithoutToPlayerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutToPlayerInput | TransactionUpdateManyWithWhereWithoutToPlayerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NfcCardUncheckedUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<NfcCardCreateWithoutPlayerInput, NfcCardUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: NfcCardCreateOrConnectWithoutPlayerInput
    upsert?: NfcCardUpsertWithoutPlayerInput
    disconnect?: NfcCardWhereInput | boolean
    delete?: NfcCardWhereInput | boolean
    connect?: NfcCardWhereUniqueInput
    update?: XOR<XOR<NfcCardUpdateToOneWithWhereWithoutPlayerInput, NfcCardUpdateWithoutPlayerInput>, NfcCardUncheckedUpdateWithoutPlayerInput>
  }

  export type TransactionUncheckedUpdateManyWithoutFromPlayerNestedInput = {
    create?: XOR<TransactionCreateWithoutFromPlayerInput, TransactionUncheckedCreateWithoutFromPlayerInput> | TransactionCreateWithoutFromPlayerInput[] | TransactionUncheckedCreateWithoutFromPlayerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFromPlayerInput | TransactionCreateOrConnectWithoutFromPlayerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutFromPlayerInput | TransactionUpsertWithWhereUniqueWithoutFromPlayerInput[]
    createMany?: TransactionCreateManyFromPlayerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutFromPlayerInput | TransactionUpdateWithWhereUniqueWithoutFromPlayerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutFromPlayerInput | TransactionUpdateManyWithWhereWithoutFromPlayerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutToPlayerNestedInput = {
    create?: XOR<TransactionCreateWithoutToPlayerInput, TransactionUncheckedCreateWithoutToPlayerInput> | TransactionCreateWithoutToPlayerInput[] | TransactionUncheckedCreateWithoutToPlayerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutToPlayerInput | TransactionCreateOrConnectWithoutToPlayerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutToPlayerInput | TransactionUpsertWithWhereUniqueWithoutToPlayerInput[]
    createMany?: TransactionCreateManyToPlayerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutToPlayerInput | TransactionUpdateWithWhereUniqueWithoutToPlayerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutToPlayerInput | TransactionUpdateManyWithWhereWithoutToPlayerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutNfcCardInput = {
    create?: XOR<PlayerCreateWithoutNfcCardInput, PlayerUncheckedCreateWithoutNfcCardInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutNfcCardInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutNfcCardNestedInput = {
    create?: XOR<PlayerCreateWithoutNfcCardInput, PlayerUncheckedCreateWithoutNfcCardInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutNfcCardInput
    upsert?: PlayerUpsertWithoutNfcCardInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutNfcCardInput, PlayerUpdateWithoutNfcCardInput>, PlayerUncheckedUpdateWithoutNfcCardInput>
  }

  export type TransactionTemplateCreateNestedManyWithoutTransactionTypeInput = {
    create?: XOR<TransactionTemplateCreateWithoutTransactionTypeInput, TransactionTemplateUncheckedCreateWithoutTransactionTypeInput> | TransactionTemplateCreateWithoutTransactionTypeInput[] | TransactionTemplateUncheckedCreateWithoutTransactionTypeInput[]
    connectOrCreate?: TransactionTemplateCreateOrConnectWithoutTransactionTypeInput | TransactionTemplateCreateOrConnectWithoutTransactionTypeInput[]
    createMany?: TransactionTemplateCreateManyTransactionTypeInputEnvelope
    connect?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutTransactionTypeInput = {
    create?: XOR<TransactionCreateWithoutTransactionTypeInput, TransactionUncheckedCreateWithoutTransactionTypeInput> | TransactionCreateWithoutTransactionTypeInput[] | TransactionUncheckedCreateWithoutTransactionTypeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTransactionTypeInput | TransactionCreateOrConnectWithoutTransactionTypeInput[]
    createMany?: TransactionCreateManyTransactionTypeInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionTemplateUncheckedCreateNestedManyWithoutTransactionTypeInput = {
    create?: XOR<TransactionTemplateCreateWithoutTransactionTypeInput, TransactionTemplateUncheckedCreateWithoutTransactionTypeInput> | TransactionTemplateCreateWithoutTransactionTypeInput[] | TransactionTemplateUncheckedCreateWithoutTransactionTypeInput[]
    connectOrCreate?: TransactionTemplateCreateOrConnectWithoutTransactionTypeInput | TransactionTemplateCreateOrConnectWithoutTransactionTypeInput[]
    createMany?: TransactionTemplateCreateManyTransactionTypeInputEnvelope
    connect?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutTransactionTypeInput = {
    create?: XOR<TransactionCreateWithoutTransactionTypeInput, TransactionUncheckedCreateWithoutTransactionTypeInput> | TransactionCreateWithoutTransactionTypeInput[] | TransactionUncheckedCreateWithoutTransactionTypeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTransactionTypeInput | TransactionCreateOrConnectWithoutTransactionTypeInput[]
    createMany?: TransactionCreateManyTransactionTypeInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumTransactionKindFieldUpdateOperationsInput = {
    set?: $Enums.TransactionKind
  }

  export type TransactionTemplateUpdateManyWithoutTransactionTypeNestedInput = {
    create?: XOR<TransactionTemplateCreateWithoutTransactionTypeInput, TransactionTemplateUncheckedCreateWithoutTransactionTypeInput> | TransactionTemplateCreateWithoutTransactionTypeInput[] | TransactionTemplateUncheckedCreateWithoutTransactionTypeInput[]
    connectOrCreate?: TransactionTemplateCreateOrConnectWithoutTransactionTypeInput | TransactionTemplateCreateOrConnectWithoutTransactionTypeInput[]
    upsert?: TransactionTemplateUpsertWithWhereUniqueWithoutTransactionTypeInput | TransactionTemplateUpsertWithWhereUniqueWithoutTransactionTypeInput[]
    createMany?: TransactionTemplateCreateManyTransactionTypeInputEnvelope
    set?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    disconnect?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    delete?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    connect?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    update?: TransactionTemplateUpdateWithWhereUniqueWithoutTransactionTypeInput | TransactionTemplateUpdateWithWhereUniqueWithoutTransactionTypeInput[]
    updateMany?: TransactionTemplateUpdateManyWithWhereWithoutTransactionTypeInput | TransactionTemplateUpdateManyWithWhereWithoutTransactionTypeInput[]
    deleteMany?: TransactionTemplateScalarWhereInput | TransactionTemplateScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutTransactionTypeNestedInput = {
    create?: XOR<TransactionCreateWithoutTransactionTypeInput, TransactionUncheckedCreateWithoutTransactionTypeInput> | TransactionCreateWithoutTransactionTypeInput[] | TransactionUncheckedCreateWithoutTransactionTypeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTransactionTypeInput | TransactionCreateOrConnectWithoutTransactionTypeInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTransactionTypeInput | TransactionUpsertWithWhereUniqueWithoutTransactionTypeInput[]
    createMany?: TransactionCreateManyTransactionTypeInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTransactionTypeInput | TransactionUpdateWithWhereUniqueWithoutTransactionTypeInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTransactionTypeInput | TransactionUpdateManyWithWhereWithoutTransactionTypeInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionTemplateUncheckedUpdateManyWithoutTransactionTypeNestedInput = {
    create?: XOR<TransactionTemplateCreateWithoutTransactionTypeInput, TransactionTemplateUncheckedCreateWithoutTransactionTypeInput> | TransactionTemplateCreateWithoutTransactionTypeInput[] | TransactionTemplateUncheckedCreateWithoutTransactionTypeInput[]
    connectOrCreate?: TransactionTemplateCreateOrConnectWithoutTransactionTypeInput | TransactionTemplateCreateOrConnectWithoutTransactionTypeInput[]
    upsert?: TransactionTemplateUpsertWithWhereUniqueWithoutTransactionTypeInput | TransactionTemplateUpsertWithWhereUniqueWithoutTransactionTypeInput[]
    createMany?: TransactionTemplateCreateManyTransactionTypeInputEnvelope
    set?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    disconnect?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    delete?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    connect?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    update?: TransactionTemplateUpdateWithWhereUniqueWithoutTransactionTypeInput | TransactionTemplateUpdateWithWhereUniqueWithoutTransactionTypeInput[]
    updateMany?: TransactionTemplateUpdateManyWithWhereWithoutTransactionTypeInput | TransactionTemplateUpdateManyWithWhereWithoutTransactionTypeInput[]
    deleteMany?: TransactionTemplateScalarWhereInput | TransactionTemplateScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutTransactionTypeNestedInput = {
    create?: XOR<TransactionCreateWithoutTransactionTypeInput, TransactionUncheckedCreateWithoutTransactionTypeInput> | TransactionCreateWithoutTransactionTypeInput[] | TransactionUncheckedCreateWithoutTransactionTypeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTransactionTypeInput | TransactionCreateOrConnectWithoutTransactionTypeInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTransactionTypeInput | TransactionUpsertWithWhereUniqueWithoutTransactionTypeInput[]
    createMany?: TransactionCreateManyTransactionTypeInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTransactionTypeInput | TransactionUpdateWithWhereUniqueWithoutTransactionTypeInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTransactionTypeInput | TransactionUpdateManyWithWhereWithoutTransactionTypeInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionTemplateCreateNestedManyWithoutPropertyTemplateInput = {
    create?: XOR<TransactionTemplateCreateWithoutPropertyTemplateInput, TransactionTemplateUncheckedCreateWithoutPropertyTemplateInput> | TransactionTemplateCreateWithoutPropertyTemplateInput[] | TransactionTemplateUncheckedCreateWithoutPropertyTemplateInput[]
    connectOrCreate?: TransactionTemplateCreateOrConnectWithoutPropertyTemplateInput | TransactionTemplateCreateOrConnectWithoutPropertyTemplateInput[]
    createMany?: TransactionTemplateCreateManyPropertyTemplateInputEnvelope
    connect?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
  }

  export type TransactionTemplateUncheckedCreateNestedManyWithoutPropertyTemplateInput = {
    create?: XOR<TransactionTemplateCreateWithoutPropertyTemplateInput, TransactionTemplateUncheckedCreateWithoutPropertyTemplateInput> | TransactionTemplateCreateWithoutPropertyTemplateInput[] | TransactionTemplateUncheckedCreateWithoutPropertyTemplateInput[]
    connectOrCreate?: TransactionTemplateCreateOrConnectWithoutPropertyTemplateInput | TransactionTemplateCreateOrConnectWithoutPropertyTemplateInput[]
    createMany?: TransactionTemplateCreateManyPropertyTemplateInputEnvelope
    connect?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
  }

  export type EnumPropertyGroupFieldUpdateOperationsInput = {
    set?: $Enums.PropertyGroup
  }

  export type EnumPropertyKindFieldUpdateOperationsInput = {
    set?: $Enums.PropertyKind
  }

  export type TransactionTemplateUpdateManyWithoutPropertyTemplateNestedInput = {
    create?: XOR<TransactionTemplateCreateWithoutPropertyTemplateInput, TransactionTemplateUncheckedCreateWithoutPropertyTemplateInput> | TransactionTemplateCreateWithoutPropertyTemplateInput[] | TransactionTemplateUncheckedCreateWithoutPropertyTemplateInput[]
    connectOrCreate?: TransactionTemplateCreateOrConnectWithoutPropertyTemplateInput | TransactionTemplateCreateOrConnectWithoutPropertyTemplateInput[]
    upsert?: TransactionTemplateUpsertWithWhereUniqueWithoutPropertyTemplateInput | TransactionTemplateUpsertWithWhereUniqueWithoutPropertyTemplateInput[]
    createMany?: TransactionTemplateCreateManyPropertyTemplateInputEnvelope
    set?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    disconnect?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    delete?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    connect?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    update?: TransactionTemplateUpdateWithWhereUniqueWithoutPropertyTemplateInput | TransactionTemplateUpdateWithWhereUniqueWithoutPropertyTemplateInput[]
    updateMany?: TransactionTemplateUpdateManyWithWhereWithoutPropertyTemplateInput | TransactionTemplateUpdateManyWithWhereWithoutPropertyTemplateInput[]
    deleteMany?: TransactionTemplateScalarWhereInput | TransactionTemplateScalarWhereInput[]
  }

  export type TransactionTemplateUncheckedUpdateManyWithoutPropertyTemplateNestedInput = {
    create?: XOR<TransactionTemplateCreateWithoutPropertyTemplateInput, TransactionTemplateUncheckedCreateWithoutPropertyTemplateInput> | TransactionTemplateCreateWithoutPropertyTemplateInput[] | TransactionTemplateUncheckedCreateWithoutPropertyTemplateInput[]
    connectOrCreate?: TransactionTemplateCreateOrConnectWithoutPropertyTemplateInput | TransactionTemplateCreateOrConnectWithoutPropertyTemplateInput[]
    upsert?: TransactionTemplateUpsertWithWhereUniqueWithoutPropertyTemplateInput | TransactionTemplateUpsertWithWhereUniqueWithoutPropertyTemplateInput[]
    createMany?: TransactionTemplateCreateManyPropertyTemplateInputEnvelope
    set?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    disconnect?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    delete?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    connect?: TransactionTemplateWhereUniqueInput | TransactionTemplateWhereUniqueInput[]
    update?: TransactionTemplateUpdateWithWhereUniqueWithoutPropertyTemplateInput | TransactionTemplateUpdateWithWhereUniqueWithoutPropertyTemplateInput[]
    updateMany?: TransactionTemplateUpdateManyWithWhereWithoutPropertyTemplateInput | TransactionTemplateUpdateManyWithWhereWithoutPropertyTemplateInput[]
    deleteMany?: TransactionTemplateScalarWhereInput | TransactionTemplateScalarWhereInput[]
  }

  export type TransactionTypeCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<TransactionTypeCreateWithoutTemplatesInput, TransactionTypeUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutTemplatesInput
    connect?: TransactionTypeWhereUniqueInput
  }

  export type PropertyTemplateCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<PropertyTemplateCreateWithoutTemplatesInput, PropertyTemplateUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: PropertyTemplateCreateOrConnectWithoutTemplatesInput
    connect?: PropertyTemplateWhereUniqueInput
  }

  export type EnumTransactionDirectionFieldUpdateOperationsInput = {
    set?: $Enums.TransactionDirection
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionTypeUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<TransactionTypeCreateWithoutTemplatesInput, TransactionTypeUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutTemplatesInput
    upsert?: TransactionTypeUpsertWithoutTemplatesInput
    connect?: TransactionTypeWhereUniqueInput
    update?: XOR<XOR<TransactionTypeUpdateToOneWithWhereWithoutTemplatesInput, TransactionTypeUpdateWithoutTemplatesInput>, TransactionTypeUncheckedUpdateWithoutTemplatesInput>
  }

  export type PropertyTemplateUpdateOneWithoutTemplatesNestedInput = {
    create?: XOR<PropertyTemplateCreateWithoutTemplatesInput, PropertyTemplateUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: PropertyTemplateCreateOrConnectWithoutTemplatesInput
    upsert?: PropertyTemplateUpsertWithoutTemplatesInput
    disconnect?: PropertyTemplateWhereInput | boolean
    delete?: PropertyTemplateWhereInput | boolean
    connect?: PropertyTemplateWhereUniqueInput
    update?: XOR<XOR<PropertyTemplateUpdateToOneWithWhereWithoutTemplatesInput, PropertyTemplateUpdateWithoutTemplatesInput>, PropertyTemplateUncheckedUpdateWithoutTemplatesInput>
  }

  export type GameCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<GameCreateWithoutTransactionsInput, GameUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutTransactionsInput
    connect?: GameWhereUniqueInput
  }

  export type TransactionTypeCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<TransactionTypeCreateWithoutTransactionsInput, TransactionTypeUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutTransactionsInput
    connect?: TransactionTypeWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutOutgoingTransactionsInput = {
    create?: XOR<PlayerCreateWithoutOutgoingTransactionsInput, PlayerUncheckedCreateWithoutOutgoingTransactionsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutOutgoingTransactionsInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutIncomingTransactionsInput = {
    create?: XOR<PlayerCreateWithoutIncomingTransactionsInput, PlayerUncheckedCreateWithoutIncomingTransactionsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutIncomingTransactionsInput
    connect?: PlayerWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<GameCreateWithoutTransactionsInput, GameUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutTransactionsInput
    upsert?: GameUpsertWithoutTransactionsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutTransactionsInput, GameUpdateWithoutTransactionsInput>, GameUncheckedUpdateWithoutTransactionsInput>
  }

  export type TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<TransactionTypeCreateWithoutTransactionsInput, TransactionTypeUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutTransactionsInput
    upsert?: TransactionTypeUpsertWithoutTransactionsInput
    connect?: TransactionTypeWhereUniqueInput
    update?: XOR<XOR<TransactionTypeUpdateToOneWithWhereWithoutTransactionsInput, TransactionTypeUpdateWithoutTransactionsInput>, TransactionTypeUncheckedUpdateWithoutTransactionsInput>
  }

  export type PlayerUpdateOneWithoutOutgoingTransactionsNestedInput = {
    create?: XOR<PlayerCreateWithoutOutgoingTransactionsInput, PlayerUncheckedCreateWithoutOutgoingTransactionsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutOutgoingTransactionsInput
    upsert?: PlayerUpsertWithoutOutgoingTransactionsInput
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutOutgoingTransactionsInput, PlayerUpdateWithoutOutgoingTransactionsInput>, PlayerUncheckedUpdateWithoutOutgoingTransactionsInput>
  }

  export type PlayerUpdateOneWithoutIncomingTransactionsNestedInput = {
    create?: XOR<PlayerCreateWithoutIncomingTransactionsInput, PlayerUncheckedCreateWithoutIncomingTransactionsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutIncomingTransactionsInput
    upsert?: PlayerUpsertWithoutIncomingTransactionsInput
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutIncomingTransactionsInput, PlayerUpdateWithoutIncomingTransactionsInput>, PlayerUncheckedUpdateWithoutIncomingTransactionsInput>
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
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

  export type NestedEnumTransactionKindFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionKind | EnumTransactionKindFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionKind[] | ListEnumTransactionKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionKind[] | ListEnumTransactionKindFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionKindFilter<$PrismaModel> | $Enums.TransactionKind
  }

  export type NestedEnumTransactionKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionKind | EnumTransactionKindFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionKind[] | ListEnumTransactionKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionKind[] | ListEnumTransactionKindFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionKindWithAggregatesFilter<$PrismaModel> | $Enums.TransactionKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionKindFilter<$PrismaModel>
    _max?: NestedEnumTransactionKindFilter<$PrismaModel>
  }

  export type NestedEnumPropertyGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyGroup | EnumPropertyGroupFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyGroup[] | ListEnumPropertyGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyGroup[] | ListEnumPropertyGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyGroupFilter<$PrismaModel> | $Enums.PropertyGroup
  }

  export type NestedEnumPropertyKindFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyKind | EnumPropertyKindFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyKind[] | ListEnumPropertyKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyKind[] | ListEnumPropertyKindFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyKindFilter<$PrismaModel> | $Enums.PropertyKind
  }

  export type NestedEnumPropertyGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyGroup | EnumPropertyGroupFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyGroup[] | ListEnumPropertyGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyGroup[] | ListEnumPropertyGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyGroupWithAggregatesFilter<$PrismaModel> | $Enums.PropertyGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyGroupFilter<$PrismaModel>
    _max?: NestedEnumPropertyGroupFilter<$PrismaModel>
  }

  export type NestedEnumPropertyKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyKind | EnumPropertyKindFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyKind[] | ListEnumPropertyKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyKind[] | ListEnumPropertyKindFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyKindWithAggregatesFilter<$PrismaModel> | $Enums.PropertyKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyKindFilter<$PrismaModel>
    _max?: NestedEnumPropertyKindFilter<$PrismaModel>
  }

  export type NestedEnumTransactionDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionDirection | EnumTransactionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionDirectionFilter<$PrismaModel> | $Enums.TransactionDirection
  }

  export type NestedEnumTransactionDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionDirection | EnumTransactionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionDirectionWithAggregatesFilter<$PrismaModel> | $Enums.TransactionDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionDirectionFilter<$PrismaModel>
    _max?: NestedEnumTransactionDirectionFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type GameCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.GameStatus
    playersCount: number
    initialBalance: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    players?: PlayerCreateNestedManyWithoutGameInput
    transactions?: TransactionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.GameStatus
    playersCount: number
    initialBalance: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    players?: PlayerUncheckedCreateNestedManyWithoutGameInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutOwnerInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutOwnerInput, GameUncheckedCreateWithoutOwnerInput>
  }

  export type GameCreateManyOwnerInputEnvelope = {
    data: GameCreateManyOwnerInput | GameCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type EmailVerificationTokenCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    tokenHash: string
    email: string
  }

  export type EmailVerificationTokenUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    tokenHash: string
    email: string
  }

  export type EmailVerificationTokenCreateOrConnectWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenCreateManyUserInputEnvelope = {
    data: EmailVerificationTokenCreateManyUserInput | EmailVerificationTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutOwnerInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutOwnerInput, GameUncheckedUpdateWithoutOwnerInput>
    create: XOR<GameCreateWithoutOwnerInput, GameUncheckedCreateWithoutOwnerInput>
  }

  export type GameUpdateWithWhereUniqueWithoutOwnerInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutOwnerInput, GameUncheckedUpdateWithoutOwnerInput>
  }

  export type GameUpdateManyWithWhereWithoutOwnerInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutOwnerInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: UuidFilter<"Game"> | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    ownerUserId?: UuidNullableFilter<"Game"> | string | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    playersCount?: IntFilter<"Game"> | number
    initialBalance?: IntFilter<"Game"> | number
    startedAt?: DateTimeFilter<"Game"> | Date | string
    endedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
  }

  export type EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    update: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    data: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateManyWithWhereWithoutUserInput = {
    where: EmailVerificationTokenScalarWhereInput
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailVerificationTokenScalarWhereInput = {
    AND?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
    OR?: EmailVerificationTokenScalarWhereInput[]
    NOT?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
    id?: UuidFilter<"EmailVerificationToken"> | string
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    tokenHash?: StringFilter<"EmailVerificationToken"> | string
    email?: StringFilter<"EmailVerificationToken"> | string
    userId?: UuidFilter<"EmailVerificationToken"> | string
  }

  export type UserCreateWithoutEmailVerificationTokensInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash: string
    games?: GameCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutEmailVerificationTokensInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash: string
    games?: GameUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutEmailVerificationTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
  }

  export type UserUpsertWithoutEmailVerificationTokensInput = {
    update: XOR<UserUpdateWithoutEmailVerificationTokensInput, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
    create: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailVerificationTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailVerificationTokensInput, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
  }

  export type UserUpdateWithoutEmailVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    games?: GameUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    games?: GameUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutGamesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash: string
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGamesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash: string
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
  }

  export type PlayerCreateWithoutGameInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    seat: number
    balance: number
    nfcCard?: NfcCardCreateNestedOneWithoutPlayerInput
    outgoingTransactions?: TransactionCreateNestedManyWithoutFromPlayerInput
    incomingTransactions?: TransactionCreateNestedManyWithoutToPlayerInput
  }

  export type PlayerUncheckedCreateWithoutGameInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    seat: number
    balance: number
    nfcCard?: NfcCardUncheckedCreateNestedOneWithoutPlayerInput
    outgoingTransactions?: TransactionUncheckedCreateNestedManyWithoutFromPlayerInput
    incomingTransactions?: TransactionUncheckedCreateNestedManyWithoutToPlayerInput
  }

  export type PlayerCreateOrConnectWithoutGameInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutGameInput, PlayerUncheckedCreateWithoutGameInput>
  }

  export type PlayerCreateManyGameInputEnvelope = {
    data: PlayerCreateManyGameInput | PlayerCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutGameInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
    transactionType: TransactionTypeCreateNestedOneWithoutTransactionsInput
    fromPlayer?: PlayerCreateNestedOneWithoutOutgoingTransactionsInput
    toPlayer?: PlayerCreateNestedOneWithoutIncomingTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutGameInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactionTypeId: string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    fromPlayerId?: string | null
    toPlayerId?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
  }

  export type TransactionCreateOrConnectWithoutGameInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutGameInput, TransactionUncheckedCreateWithoutGameInput>
  }

  export type TransactionCreateManyGameInputEnvelope = {
    data: TransactionCreateManyGameInput | TransactionCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGamesInput = {
    update: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
  }

  export type UserUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlayerUpsertWithWhereUniqueWithoutGameInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutGameInput, PlayerUncheckedUpdateWithoutGameInput>
    create: XOR<PlayerCreateWithoutGameInput, PlayerUncheckedCreateWithoutGameInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutGameInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutGameInput, PlayerUncheckedUpdateWithoutGameInput>
  }

  export type PlayerUpdateManyWithWhereWithoutGameInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutGameInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    OR?: PlayerScalarWhereInput[]
    NOT?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    id?: UuidFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    gameId?: UuidFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    seat?: IntFilter<"Player"> | number
    balance?: IntFilter<"Player"> | number
  }

  export type TransactionUpsertWithWhereUniqueWithoutGameInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutGameInput, TransactionUncheckedUpdateWithoutGameInput>
    create: XOR<TransactionCreateWithoutGameInput, TransactionUncheckedCreateWithoutGameInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutGameInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutGameInput, TransactionUncheckedUpdateWithoutGameInput>
  }

  export type TransactionUpdateManyWithWhereWithoutGameInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutGameInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: UuidFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    gameId?: UuidFilter<"Transaction"> | string
    transactionTypeId?: UuidFilter<"Transaction"> | string
    direction?: EnumTransactionDirectionFilter<"Transaction"> | $Enums.TransactionDirection
    amount?: IntFilter<"Transaction"> | number
    note?: StringNullableFilter<"Transaction"> | string | null
    fromPlayerId?: UuidNullableFilter<"Transaction"> | string | null
    toPlayerId?: UuidNullableFilter<"Transaction"> | string | null
    fromBalanceBefore?: IntNullableFilter<"Transaction"> | number | null
    fromBalanceAfter?: IntNullableFilter<"Transaction"> | number | null
    toBalanceBefore?: IntNullableFilter<"Transaction"> | number | null
    toBalanceAfter?: IntNullableFilter<"Transaction"> | number | null
  }

  export type GameCreateWithoutPlayersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.GameStatus
    playersCount: number
    initialBalance: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    owner?: UserCreateNestedOneWithoutGamesInput
    transactions?: TransactionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerUserId?: string | null
    status?: $Enums.GameStatus
    playersCount: number
    initialBalance: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayersInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
  }

  export type NfcCardCreateWithoutPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
  }

  export type NfcCardUncheckedCreateWithoutPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
  }

  export type NfcCardCreateOrConnectWithoutPlayerInput = {
    where: NfcCardWhereUniqueInput
    create: XOR<NfcCardCreateWithoutPlayerInput, NfcCardUncheckedCreateWithoutPlayerInput>
  }

  export type TransactionCreateWithoutFromPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
    game: GameCreateNestedOneWithoutTransactionsInput
    transactionType: TransactionTypeCreateNestedOneWithoutTransactionsInput
    toPlayer?: PlayerCreateNestedOneWithoutIncomingTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutFromPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    transactionTypeId: string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    toPlayerId?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
  }

  export type TransactionCreateOrConnectWithoutFromPlayerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutFromPlayerInput, TransactionUncheckedCreateWithoutFromPlayerInput>
  }

  export type TransactionCreateManyFromPlayerInputEnvelope = {
    data: TransactionCreateManyFromPlayerInput | TransactionCreateManyFromPlayerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutToPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
    game: GameCreateNestedOneWithoutTransactionsInput
    transactionType: TransactionTypeCreateNestedOneWithoutTransactionsInput
    fromPlayer?: PlayerCreateNestedOneWithoutOutgoingTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutToPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    transactionTypeId: string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    fromPlayerId?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
  }

  export type TransactionCreateOrConnectWithoutToPlayerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutToPlayerInput, TransactionUncheckedCreateWithoutToPlayerInput>
  }

  export type TransactionCreateManyToPlayerInputEnvelope = {
    data: TransactionCreateManyToPlayerInput | TransactionCreateManyToPlayerInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithoutPlayersInput = {
    update: XOR<GameUpdateWithoutPlayersInput, GameUncheckedUpdateWithoutPlayersInput>
    create: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutPlayersInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutPlayersInput, GameUncheckedUpdateWithoutPlayersInput>
  }

  export type GameUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    playersCount?: IntFieldUpdateOperationsInput | number
    initialBalance?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneWithoutGamesNestedInput
    transactions?: TransactionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    playersCount?: IntFieldUpdateOperationsInput | number
    initialBalance?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type NfcCardUpsertWithoutPlayerInput = {
    update: XOR<NfcCardUpdateWithoutPlayerInput, NfcCardUncheckedUpdateWithoutPlayerInput>
    create: XOR<NfcCardCreateWithoutPlayerInput, NfcCardUncheckedCreateWithoutPlayerInput>
    where?: NfcCardWhereInput
  }

  export type NfcCardUpdateToOneWithWhereWithoutPlayerInput = {
    where?: NfcCardWhereInput
    data: XOR<NfcCardUpdateWithoutPlayerInput, NfcCardUncheckedUpdateWithoutPlayerInput>
  }

  export type NfcCardUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type NfcCardUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutFromPlayerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutFromPlayerInput, TransactionUncheckedUpdateWithoutFromPlayerInput>
    create: XOR<TransactionCreateWithoutFromPlayerInput, TransactionUncheckedCreateWithoutFromPlayerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutFromPlayerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutFromPlayerInput, TransactionUncheckedUpdateWithoutFromPlayerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutFromPlayerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutFromPlayerInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutToPlayerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutToPlayerInput, TransactionUncheckedUpdateWithoutToPlayerInput>
    create: XOR<TransactionCreateWithoutToPlayerInput, TransactionUncheckedCreateWithoutToPlayerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutToPlayerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutToPlayerInput, TransactionUncheckedUpdateWithoutToPlayerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutToPlayerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutToPlayerInput>
  }

  export type PlayerCreateWithoutNfcCardInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    seat: number
    balance: number
    game: GameCreateNestedOneWithoutPlayersInput
    outgoingTransactions?: TransactionCreateNestedManyWithoutFromPlayerInput
    incomingTransactions?: TransactionCreateNestedManyWithoutToPlayerInput
  }

  export type PlayerUncheckedCreateWithoutNfcCardInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    name: string
    seat: number
    balance: number
    outgoingTransactions?: TransactionUncheckedCreateNestedManyWithoutFromPlayerInput
    incomingTransactions?: TransactionUncheckedCreateNestedManyWithoutToPlayerInput
  }

  export type PlayerCreateOrConnectWithoutNfcCardInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutNfcCardInput, PlayerUncheckedCreateWithoutNfcCardInput>
  }

  export type PlayerUpsertWithoutNfcCardInput = {
    update: XOR<PlayerUpdateWithoutNfcCardInput, PlayerUncheckedUpdateWithoutNfcCardInput>
    create: XOR<PlayerCreateWithoutNfcCardInput, PlayerUncheckedCreateWithoutNfcCardInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutNfcCardInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutNfcCardInput, PlayerUncheckedUpdateWithoutNfcCardInput>
  }

  export type PlayerUpdateWithoutNfcCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutPlayersNestedInput
    outgoingTransactions?: TransactionUpdateManyWithoutFromPlayerNestedInput
    incomingTransactions?: TransactionUpdateManyWithoutToPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutNfcCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    outgoingTransactions?: TransactionUncheckedUpdateManyWithoutFromPlayerNestedInput
    incomingTransactions?: TransactionUncheckedUpdateManyWithoutToPlayerNestedInput
  }

  export type TransactionTemplateCreateWithoutTransactionTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    direction: $Enums.TransactionDirection
    defaultAmount?: number | null
    description?: string | null
    propertyTemplate?: PropertyTemplateCreateNestedOneWithoutTemplatesInput
  }

  export type TransactionTemplateUncheckedCreateWithoutTransactionTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    direction: $Enums.TransactionDirection
    defaultAmount?: number | null
    description?: string | null
    propertyTemplateId?: string | null
  }

  export type TransactionTemplateCreateOrConnectWithoutTransactionTypeInput = {
    where: TransactionTemplateWhereUniqueInput
    create: XOR<TransactionTemplateCreateWithoutTransactionTypeInput, TransactionTemplateUncheckedCreateWithoutTransactionTypeInput>
  }

  export type TransactionTemplateCreateManyTransactionTypeInputEnvelope = {
    data: TransactionTemplateCreateManyTransactionTypeInput | TransactionTemplateCreateManyTransactionTypeInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutTransactionTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
    game: GameCreateNestedOneWithoutTransactionsInput
    fromPlayer?: PlayerCreateNestedOneWithoutOutgoingTransactionsInput
    toPlayer?: PlayerCreateNestedOneWithoutIncomingTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutTransactionTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    fromPlayerId?: string | null
    toPlayerId?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
  }

  export type TransactionCreateOrConnectWithoutTransactionTypeInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTransactionTypeInput, TransactionUncheckedCreateWithoutTransactionTypeInput>
  }

  export type TransactionCreateManyTransactionTypeInputEnvelope = {
    data: TransactionCreateManyTransactionTypeInput | TransactionCreateManyTransactionTypeInput[]
    skipDuplicates?: boolean
  }

  export type TransactionTemplateUpsertWithWhereUniqueWithoutTransactionTypeInput = {
    where: TransactionTemplateWhereUniqueInput
    update: XOR<TransactionTemplateUpdateWithoutTransactionTypeInput, TransactionTemplateUncheckedUpdateWithoutTransactionTypeInput>
    create: XOR<TransactionTemplateCreateWithoutTransactionTypeInput, TransactionTemplateUncheckedCreateWithoutTransactionTypeInput>
  }

  export type TransactionTemplateUpdateWithWhereUniqueWithoutTransactionTypeInput = {
    where: TransactionTemplateWhereUniqueInput
    data: XOR<TransactionTemplateUpdateWithoutTransactionTypeInput, TransactionTemplateUncheckedUpdateWithoutTransactionTypeInput>
  }

  export type TransactionTemplateUpdateManyWithWhereWithoutTransactionTypeInput = {
    where: TransactionTemplateScalarWhereInput
    data: XOR<TransactionTemplateUpdateManyMutationInput, TransactionTemplateUncheckedUpdateManyWithoutTransactionTypeInput>
  }

  export type TransactionTemplateScalarWhereInput = {
    AND?: TransactionTemplateScalarWhereInput | TransactionTemplateScalarWhereInput[]
    OR?: TransactionTemplateScalarWhereInput[]
    NOT?: TransactionTemplateScalarWhereInput | TransactionTemplateScalarWhereInput[]
    id?: UuidFilter<"TransactionTemplate"> | string
    createdAt?: DateTimeFilter<"TransactionTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionTemplate"> | Date | string
    name?: StringFilter<"TransactionTemplate"> | string
    direction?: EnumTransactionDirectionFilter<"TransactionTemplate"> | $Enums.TransactionDirection
    defaultAmount?: IntNullableFilter<"TransactionTemplate"> | number | null
    description?: StringNullableFilter<"TransactionTemplate"> | string | null
    transactionTypeId?: UuidFilter<"TransactionTemplate"> | string
    propertyTemplateId?: UuidNullableFilter<"TransactionTemplate"> | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutTransactionTypeInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutTransactionTypeInput, TransactionUncheckedUpdateWithoutTransactionTypeInput>
    create: XOR<TransactionCreateWithoutTransactionTypeInput, TransactionUncheckedCreateWithoutTransactionTypeInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutTransactionTypeInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutTransactionTypeInput, TransactionUncheckedUpdateWithoutTransactionTypeInput>
  }

  export type TransactionUpdateManyWithWhereWithoutTransactionTypeInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTransactionTypeInput>
  }

  export type TransactionTemplateCreateWithoutPropertyTemplateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    direction: $Enums.TransactionDirection
    defaultAmount?: number | null
    description?: string | null
    transactionType: TransactionTypeCreateNestedOneWithoutTemplatesInput
  }

  export type TransactionTemplateUncheckedCreateWithoutPropertyTemplateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    direction: $Enums.TransactionDirection
    defaultAmount?: number | null
    description?: string | null
    transactionTypeId: string
  }

  export type TransactionTemplateCreateOrConnectWithoutPropertyTemplateInput = {
    where: TransactionTemplateWhereUniqueInput
    create: XOR<TransactionTemplateCreateWithoutPropertyTemplateInput, TransactionTemplateUncheckedCreateWithoutPropertyTemplateInput>
  }

  export type TransactionTemplateCreateManyPropertyTemplateInputEnvelope = {
    data: TransactionTemplateCreateManyPropertyTemplateInput | TransactionTemplateCreateManyPropertyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type TransactionTemplateUpsertWithWhereUniqueWithoutPropertyTemplateInput = {
    where: TransactionTemplateWhereUniqueInput
    update: XOR<TransactionTemplateUpdateWithoutPropertyTemplateInput, TransactionTemplateUncheckedUpdateWithoutPropertyTemplateInput>
    create: XOR<TransactionTemplateCreateWithoutPropertyTemplateInput, TransactionTemplateUncheckedCreateWithoutPropertyTemplateInput>
  }

  export type TransactionTemplateUpdateWithWhereUniqueWithoutPropertyTemplateInput = {
    where: TransactionTemplateWhereUniqueInput
    data: XOR<TransactionTemplateUpdateWithoutPropertyTemplateInput, TransactionTemplateUncheckedUpdateWithoutPropertyTemplateInput>
  }

  export type TransactionTemplateUpdateManyWithWhereWithoutPropertyTemplateInput = {
    where: TransactionTemplateScalarWhereInput
    data: XOR<TransactionTemplateUpdateManyMutationInput, TransactionTemplateUncheckedUpdateManyWithoutPropertyTemplateInput>
  }

  export type TransactionTypeCreateWithoutTemplatesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    code: $Enums.TransactionKind
    label: string
    transactions?: TransactionCreateNestedManyWithoutTransactionTypeInput
  }

  export type TransactionTypeUncheckedCreateWithoutTemplatesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    code: $Enums.TransactionKind
    label: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutTransactionTypeInput
  }

  export type TransactionTypeCreateOrConnectWithoutTemplatesInput = {
    where: TransactionTypeWhereUniqueInput
    create: XOR<TransactionTypeCreateWithoutTemplatesInput, TransactionTypeUncheckedCreateWithoutTemplatesInput>
  }

  export type PropertyTemplateCreateWithoutTemplatesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    propertyGroup?: $Enums.PropertyGroup
    kind?: $Enums.PropertyKind
    propertySet?: string
    country?: string
    landmark?: string
    icon?: string | null
    price?: number
    rentBase?: number
    rent1House?: number
    rent2Houses?: number
    rent3Houses?: number
    rent4Houses?: number
    rentHotel?: number
    housePrice?: number
    hotelPrice?: number
    mortgageValue?: number
    boardIndex?: number
    color?: string | null
  }

  export type PropertyTemplateUncheckedCreateWithoutTemplatesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    propertyGroup?: $Enums.PropertyGroup
    kind?: $Enums.PropertyKind
    propertySet?: string
    country?: string
    landmark?: string
    icon?: string | null
    price?: number
    rentBase?: number
    rent1House?: number
    rent2Houses?: number
    rent3Houses?: number
    rent4Houses?: number
    rentHotel?: number
    housePrice?: number
    hotelPrice?: number
    mortgageValue?: number
    boardIndex?: number
    color?: string | null
  }

  export type PropertyTemplateCreateOrConnectWithoutTemplatesInput = {
    where: PropertyTemplateWhereUniqueInput
    create: XOR<PropertyTemplateCreateWithoutTemplatesInput, PropertyTemplateUncheckedCreateWithoutTemplatesInput>
  }

  export type TransactionTypeUpsertWithoutTemplatesInput = {
    update: XOR<TransactionTypeUpdateWithoutTemplatesInput, TransactionTypeUncheckedUpdateWithoutTemplatesInput>
    create: XOR<TransactionTypeCreateWithoutTemplatesInput, TransactionTypeUncheckedCreateWithoutTemplatesInput>
    where?: TransactionTypeWhereInput
  }

  export type TransactionTypeUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: TransactionTypeWhereInput
    data: XOR<TransactionTypeUpdateWithoutTemplatesInput, TransactionTypeUncheckedUpdateWithoutTemplatesInput>
  }

  export type TransactionTypeUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: EnumTransactionKindFieldUpdateOperationsInput | $Enums.TransactionKind
    label?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutTransactionTypeNestedInput
  }

  export type TransactionTypeUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: EnumTransactionKindFieldUpdateOperationsInput | $Enums.TransactionKind
    label?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutTransactionTypeNestedInput
  }

  export type PropertyTemplateUpsertWithoutTemplatesInput = {
    update: XOR<PropertyTemplateUpdateWithoutTemplatesInput, PropertyTemplateUncheckedUpdateWithoutTemplatesInput>
    create: XOR<PropertyTemplateCreateWithoutTemplatesInput, PropertyTemplateUncheckedCreateWithoutTemplatesInput>
    where?: PropertyTemplateWhereInput
  }

  export type PropertyTemplateUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: PropertyTemplateWhereInput
    data: XOR<PropertyTemplateUpdateWithoutTemplatesInput, PropertyTemplateUncheckedUpdateWithoutTemplatesInput>
  }

  export type PropertyTemplateUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    propertyGroup?: EnumPropertyGroupFieldUpdateOperationsInput | $Enums.PropertyGroup
    kind?: EnumPropertyKindFieldUpdateOperationsInput | $Enums.PropertyKind
    propertySet?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    rentBase?: IntFieldUpdateOperationsInput | number
    rent1House?: IntFieldUpdateOperationsInput | number
    rent2Houses?: IntFieldUpdateOperationsInput | number
    rent3Houses?: IntFieldUpdateOperationsInput | number
    rent4Houses?: IntFieldUpdateOperationsInput | number
    rentHotel?: IntFieldUpdateOperationsInput | number
    housePrice?: IntFieldUpdateOperationsInput | number
    hotelPrice?: IntFieldUpdateOperationsInput | number
    mortgageValue?: IntFieldUpdateOperationsInput | number
    boardIndex?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyTemplateUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    propertyGroup?: EnumPropertyGroupFieldUpdateOperationsInput | $Enums.PropertyGroup
    kind?: EnumPropertyKindFieldUpdateOperationsInput | $Enums.PropertyKind
    propertySet?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    rentBase?: IntFieldUpdateOperationsInput | number
    rent1House?: IntFieldUpdateOperationsInput | number
    rent2Houses?: IntFieldUpdateOperationsInput | number
    rent3Houses?: IntFieldUpdateOperationsInput | number
    rent4Houses?: IntFieldUpdateOperationsInput | number
    rentHotel?: IntFieldUpdateOperationsInput | number
    housePrice?: IntFieldUpdateOperationsInput | number
    hotelPrice?: IntFieldUpdateOperationsInput | number
    mortgageValue?: IntFieldUpdateOperationsInput | number
    boardIndex?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.GameStatus
    playersCount: number
    initialBalance: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    owner?: UserCreateNestedOneWithoutGamesInput
    players?: PlayerCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerUserId?: string | null
    status?: $Enums.GameStatus
    playersCount: number
    initialBalance: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    players?: PlayerUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutTransactionsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutTransactionsInput, GameUncheckedCreateWithoutTransactionsInput>
  }

  export type TransactionTypeCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    code: $Enums.TransactionKind
    label: string
    templates?: TransactionTemplateCreateNestedManyWithoutTransactionTypeInput
  }

  export type TransactionTypeUncheckedCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    code: $Enums.TransactionKind
    label: string
    templates?: TransactionTemplateUncheckedCreateNestedManyWithoutTransactionTypeInput
  }

  export type TransactionTypeCreateOrConnectWithoutTransactionsInput = {
    where: TransactionTypeWhereUniqueInput
    create: XOR<TransactionTypeCreateWithoutTransactionsInput, TransactionTypeUncheckedCreateWithoutTransactionsInput>
  }

  export type PlayerCreateWithoutOutgoingTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    seat: number
    balance: number
    game: GameCreateNestedOneWithoutPlayersInput
    nfcCard?: NfcCardCreateNestedOneWithoutPlayerInput
    incomingTransactions?: TransactionCreateNestedManyWithoutToPlayerInput
  }

  export type PlayerUncheckedCreateWithoutOutgoingTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    name: string
    seat: number
    balance: number
    nfcCard?: NfcCardUncheckedCreateNestedOneWithoutPlayerInput
    incomingTransactions?: TransactionUncheckedCreateNestedManyWithoutToPlayerInput
  }

  export type PlayerCreateOrConnectWithoutOutgoingTransactionsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutOutgoingTransactionsInput, PlayerUncheckedCreateWithoutOutgoingTransactionsInput>
  }

  export type PlayerCreateWithoutIncomingTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    seat: number
    balance: number
    game: GameCreateNestedOneWithoutPlayersInput
    nfcCard?: NfcCardCreateNestedOneWithoutPlayerInput
    outgoingTransactions?: TransactionCreateNestedManyWithoutFromPlayerInput
  }

  export type PlayerUncheckedCreateWithoutIncomingTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    name: string
    seat: number
    balance: number
    nfcCard?: NfcCardUncheckedCreateNestedOneWithoutPlayerInput
    outgoingTransactions?: TransactionUncheckedCreateNestedManyWithoutFromPlayerInput
  }

  export type PlayerCreateOrConnectWithoutIncomingTransactionsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutIncomingTransactionsInput, PlayerUncheckedCreateWithoutIncomingTransactionsInput>
  }

  export type GameUpsertWithoutTransactionsInput = {
    update: XOR<GameUpdateWithoutTransactionsInput, GameUncheckedUpdateWithoutTransactionsInput>
    create: XOR<GameCreateWithoutTransactionsInput, GameUncheckedCreateWithoutTransactionsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutTransactionsInput, GameUncheckedUpdateWithoutTransactionsInput>
  }

  export type GameUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    playersCount?: IntFieldUpdateOperationsInput | number
    initialBalance?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneWithoutGamesNestedInput
    players?: PlayerUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    playersCount?: IntFieldUpdateOperationsInput | number
    initialBalance?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUncheckedUpdateManyWithoutGameNestedInput
  }

  export type TransactionTypeUpsertWithoutTransactionsInput = {
    update: XOR<TransactionTypeUpdateWithoutTransactionsInput, TransactionTypeUncheckedUpdateWithoutTransactionsInput>
    create: XOR<TransactionTypeCreateWithoutTransactionsInput, TransactionTypeUncheckedCreateWithoutTransactionsInput>
    where?: TransactionTypeWhereInput
  }

  export type TransactionTypeUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: TransactionTypeWhereInput
    data: XOR<TransactionTypeUpdateWithoutTransactionsInput, TransactionTypeUncheckedUpdateWithoutTransactionsInput>
  }

  export type TransactionTypeUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: EnumTransactionKindFieldUpdateOperationsInput | $Enums.TransactionKind
    label?: StringFieldUpdateOperationsInput | string
    templates?: TransactionTemplateUpdateManyWithoutTransactionTypeNestedInput
  }

  export type TransactionTypeUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: EnumTransactionKindFieldUpdateOperationsInput | $Enums.TransactionKind
    label?: StringFieldUpdateOperationsInput | string
    templates?: TransactionTemplateUncheckedUpdateManyWithoutTransactionTypeNestedInput
  }

  export type PlayerUpsertWithoutOutgoingTransactionsInput = {
    update: XOR<PlayerUpdateWithoutOutgoingTransactionsInput, PlayerUncheckedUpdateWithoutOutgoingTransactionsInput>
    create: XOR<PlayerCreateWithoutOutgoingTransactionsInput, PlayerUncheckedCreateWithoutOutgoingTransactionsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutOutgoingTransactionsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutOutgoingTransactionsInput, PlayerUncheckedUpdateWithoutOutgoingTransactionsInput>
  }

  export type PlayerUpdateWithoutOutgoingTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutPlayersNestedInput
    nfcCard?: NfcCardUpdateOneWithoutPlayerNestedInput
    incomingTransactions?: TransactionUpdateManyWithoutToPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutOutgoingTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    nfcCard?: NfcCardUncheckedUpdateOneWithoutPlayerNestedInput
    incomingTransactions?: TransactionUncheckedUpdateManyWithoutToPlayerNestedInput
  }

  export type PlayerUpsertWithoutIncomingTransactionsInput = {
    update: XOR<PlayerUpdateWithoutIncomingTransactionsInput, PlayerUncheckedUpdateWithoutIncomingTransactionsInput>
    create: XOR<PlayerCreateWithoutIncomingTransactionsInput, PlayerUncheckedCreateWithoutIncomingTransactionsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutIncomingTransactionsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutIncomingTransactionsInput, PlayerUncheckedUpdateWithoutIncomingTransactionsInput>
  }

  export type PlayerUpdateWithoutIncomingTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutPlayersNestedInput
    nfcCard?: NfcCardUpdateOneWithoutPlayerNestedInput
    outgoingTransactions?: TransactionUpdateManyWithoutFromPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutIncomingTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    nfcCard?: NfcCardUncheckedUpdateOneWithoutPlayerNestedInput
    outgoingTransactions?: TransactionUncheckedUpdateManyWithoutFromPlayerNestedInput
  }

  export type GameCreateManyOwnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.GameStatus
    playersCount: number
    initialBalance: number
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type EmailVerificationTokenCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    tokenHash: string
    email: string
  }

  export type GameUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    playersCount?: IntFieldUpdateOperationsInput | number
    initialBalance?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUpdateManyWithoutGameNestedInput
    transactions?: TransactionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    playersCount?: IntFieldUpdateOperationsInput | number
    initialBalance?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUncheckedUpdateManyWithoutGameNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    playersCount?: IntFieldUpdateOperationsInput | number
    initialBalance?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmailVerificationTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EmailVerificationTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EmailVerificationTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerCreateManyGameInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    seat: number
    balance: number
  }

  export type TransactionCreateManyGameInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactionTypeId: string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    fromPlayerId?: string | null
    toPlayerId?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
  }

  export type PlayerUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    nfcCard?: NfcCardUpdateOneWithoutPlayerNestedInput
    outgoingTransactions?: TransactionUpdateManyWithoutFromPlayerNestedInput
    incomingTransactions?: TransactionUpdateManyWithoutToPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    nfcCard?: NfcCardUncheckedUpdateOneWithoutPlayerNestedInput
    outgoingTransactions?: TransactionUncheckedUpdateManyWithoutFromPlayerNestedInput
    incomingTransactions?: TransactionUncheckedUpdateManyWithoutToPlayerNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    transactionType?: TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput
    fromPlayer?: PlayerUpdateOneWithoutOutgoingTransactionsNestedInput
    toPlayer?: PlayerUpdateOneWithoutIncomingTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTypeId?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    toPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTypeId?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    toPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionCreateManyFromPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    transactionTypeId: string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    toPlayerId?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
  }

  export type TransactionCreateManyToPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    transactionTypeId: string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    fromPlayerId?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
  }

  export type TransactionUpdateWithoutFromPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    game?: GameUpdateOneRequiredWithoutTransactionsNestedInput
    transactionType?: TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput
    toPlayer?: PlayerUpdateOneWithoutIncomingTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutFromPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    transactionTypeId?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    toPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionUncheckedUpdateManyWithoutFromPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    transactionTypeId?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    toPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionUpdateWithoutToPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    game?: GameUpdateOneRequiredWithoutTransactionsNestedInput
    transactionType?: TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput
    fromPlayer?: PlayerUpdateOneWithoutOutgoingTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutToPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    transactionTypeId?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionUncheckedUpdateManyWithoutToPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    transactionTypeId?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionTemplateCreateManyTransactionTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    direction: $Enums.TransactionDirection
    defaultAmount?: number | null
    description?: string | null
    propertyTemplateId?: string | null
  }

  export type TransactionCreateManyTransactionTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    direction: $Enums.TransactionDirection
    amount: number
    note?: string | null
    fromPlayerId?: string | null
    toPlayerId?: string | null
    fromBalanceBefore?: number | null
    fromBalanceAfter?: number | null
    toBalanceBefore?: number | null
    toBalanceAfter?: number | null
  }

  export type TransactionTemplateUpdateWithoutTransactionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    defaultAmount?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    propertyTemplate?: PropertyTemplateUpdateOneWithoutTemplatesNestedInput
  }

  export type TransactionTemplateUncheckedUpdateWithoutTransactionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    defaultAmount?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    propertyTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionTemplateUncheckedUpdateManyWithoutTransactionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    defaultAmount?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    propertyTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUpdateWithoutTransactionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    game?: GameUpdateOneRequiredWithoutTransactionsNestedInput
    fromPlayer?: PlayerUpdateOneWithoutOutgoingTransactionsNestedInput
    toPlayer?: PlayerUpdateOneWithoutIncomingTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutTransactionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    toPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionUncheckedUpdateManyWithoutTransactionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    toPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    fromBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    fromBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceBefore?: NullableIntFieldUpdateOperationsInput | number | null
    toBalanceAfter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionTemplateCreateManyPropertyTemplateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    direction: $Enums.TransactionDirection
    defaultAmount?: number | null
    description?: string | null
    transactionTypeId: string
  }

  export type TransactionTemplateUpdateWithoutPropertyTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    defaultAmount?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: TransactionTypeUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type TransactionTemplateUncheckedUpdateWithoutPropertyTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    defaultAmount?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTemplateUncheckedUpdateManyWithoutPropertyTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    defaultAmount?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionTypeId?: StringFieldUpdateOperationsInput | string
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