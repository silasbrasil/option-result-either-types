import * as Option from 'fp-ts/Option'

console.log(Option.none)
console.log(Option.some(12))

const maybeValue = Option.some(222)

if (maybeValue._tag === 'Some') {
  console.log(maybeValue.value)
}
