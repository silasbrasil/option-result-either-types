export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

const ok = <T>(value: T): Result<T> => ({
  ok: true,
  value: value
})

const fail = (error: Error): Result<never> => ({
  ok: false,
  error: error
})

/**Tests */
const returnSomething = () => {
  return ok({ age: 23 })
}

const run = () => {
  const res = returnSomething()

  if(res.ok === true) return res.value
  
  res.error.message
}

console.log(run())
