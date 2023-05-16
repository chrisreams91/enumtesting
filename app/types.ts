import { Enumify } from "enumify";

export enum NUMBERS_ENUM {
  ONE = "ONE",
  TWO = "TWO",
  THREE = "THREE",
}

export const NUMBERS_AS_CONST = {
  ONE: "ONE",
  TWO: "TWO",
  THREE: "THREE",
} as const satisfies Record<string, string>;

export type NUMBERS_AS_CONST_VALUES = Values<typeof NUMBERS_AS_CONST>;

type Values<T> = T[keyof T];

export class NUMBERS_ENUMIFY extends Enumify {
  static ONE = new NUMBERS_ENUMIFY();
  static TWO = new NUMBERS_ENUMIFY();
  static THREE = new NUMBERS_ENUMIFY();
  static _ = NUMBERS_ENUMIFY.closeEnum();
}
