import { Option, O as Maybe } from './my-option-type-01'

const showValue = <T>(option: Option<T>) => {
  if (option.isSome) {
    console.log(option.value)
    return
  }

  console.log('No value was given')
}

const myValue = Maybe.some(44444)

showValue(Maybe.none)
showValue(myValue)