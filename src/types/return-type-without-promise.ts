/* eslint-disable @typescript-eslint/no-explicit-any */

export type ReturnTypeWithoutPromise<T extends (...args: any) => any> =
  T extends (...args: any) => Promise<infer U> ? U : never
