export const NUMBERS = {
  ONE: "ONE",
  TWO: "TWO",
  THREE: "THREE",
} as const satisfies Record<string, string>;

export type Numbers = Values<typeof NUMBERS>;

type Values<T> = T[keyof T];