export type Some<T> = {
  value: T,
  isSome: true
}

export type None = {
  isSome: false
}

export type Option<T> = Some<T> | None

const some = <T>(value: T): Option<T> => {
  return { value: value, isSome: true }
}

const none: Option<never> = { isSome: false }

export const O = {
  some,
  none
} as const
