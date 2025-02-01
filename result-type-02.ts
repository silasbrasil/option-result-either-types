export type Result<T, E extends Error> = Ok<T, E> | Err<T, E>;

interface Ok<T, E extends Error> {
  value: T,
  isOk: (this: Result<T, E>) => this is Ok<T, E>,
  isErr: (this: Result<T, E>) => this is Err<T, E>,
}

interface Err<T, E extends Error> {
  error: E,
  isOk: (this: Result<T, E>) => this is Ok<T, E>,
  isErr: (this: Result<T, E>) => this is Err<T, E>,
}

export function ok<T, E extends Error>(value: T): Result<T, E> {
  return {
    value: value,
    isOk: (): this is Ok<T, E> => true,
    isErr: (): this is Err<T, E> => false,
  }
}

export const error = <T, E extends Error>(error: E): Result<T, E> => ({
  error: error,
  isOk: (): this is Ok<T, E> => false,
  isErr: (): this is Err<T, E> => true,
})

/**Test */
const getResult = () => {
  return ok({ firstName: 'Jhon' })
}

const run = () => {
  const res = getResult()

  if(res.isOk()) return res.value.firstName

  return res.error.message
}

console.log(run())
