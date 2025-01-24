/**
 * Option data type
*/

interface None { _tag: 'None' }

interface Some<A> { _tag: 'Some', value: A }

type Option<A> = Some<A> | None

const some = <A>(x: A): Option<A> =>
  ({ _tag: 'Some', value: x })

const none: Option<never> = { _tag: 'None' }

const isNone = <A>(x: Option<A>): x is None =>
  x._tag === 'None'

  /** Tests */
const someValue = some(23)

console.log(someValue)
console.log(none)


/**
 * Pattern Matching to Option data type
 */
type Match = <A, B>(onNone: () => B, onSome: (a: A) => B) =>
  (x: Option<A>) => B

const match: Match = (onNone, onSome) => x =>
  isNone(x) ? onNone() : onSome(x.value)


/**Tests */
const maybeNum = some(444)
const result = match(
  () => `number does not exist`,
  (a: number) => `number is ${a}` 
)(maybeNum)

console.log(result)

/** ValueOf to type Option */

type ValueOfOr = <A>(onNone: () => A) =>
  (x: Option<A>) => A

type ValueOf = <A>(x: Option<A>) => A

const valueOf: ValueOf = (x) => x._tag === 'Some' ? x.value : null

const valueOfOr: ValueOfOr = (onNone) => x => isNone(x) ? onNone() : x.value;

console.log(
  valueOfOr(() => 'The name is empty')(some('Silas'))
)
console.log(
  valueOfOr(() => 'Empty')(none)
)

console.log(valueOf(some(123)))