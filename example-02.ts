export interface SomeType<T> {
    type: 'some';
    value: T;
    /*** Returns the value of the Option if it exists, otherwise throws an error.*/
    unwrap(): T;
    /*** Returns the value of the Option if it exists, otherwise returns the provided default value.*/
    unwrapOr(defaultValue: T): T;
    /*** Returns the value of the Option if it exists, otherwise calls the provided function and returns its result.*/
    unwrapOrElse(fn: () => T): T;
    /*** Returns true if the Option contains a value, false otherwise.*/
    isSome(): boolean;
    /*** Returns true if the Option does not contain a value, false otherwise.*/
    isNone(): boolean;
}

export interface NoneType {
    type: 'none';
    /*** Throws an error because None does not contain a value.*/
    unwrap(): never;
    /*** Returns the provided default value because None does not contain a value.*/
    unwrapOr<T>(defaultValue: T): T;
    /*** Calls the provided function and returns its result because None does not contain a value.*/
    unwrapOrElse<T>(fn: () => T): T;
    /*** Returns true if the Option contains a value, false otherwise.*/
    isSome(): boolean;
    /*** Returns true if the Option does not contain a value, false otherwise.*/
    isNone(): boolean;
}

export type Option<T> = SomeType<T> | NoneType


export function Some<T>(value: T): Option<T> {
    return {
        type: 'some',
        value,
        unwrap: () => value,
        unwrapOr: () => value,
        unwrapOrElse: () => value,
        isSome: () => true,
        isNone: () => false
    };
}
/**
 * Represents an empty Option with no value.
 * @returns An Option with the 'none' type.
 */
export const None: Option<never> = {
    type: 'none',
    unwrap: () => { throw new Error('Cannot unwrap None'); },
    unwrapOr: <T>(defaultValue: T) => defaultValue,
    unwrapOrElse: <T>(fn: () => T) => fn(),
    isSome: () => false,
    isNone: () => true
};
//Freezing the None object to prevent any changes.
Object.freeze(None);


console.log(Some(12).unwrap())
console.log(None)