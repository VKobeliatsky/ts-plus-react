import { Increment, Decrement } from './types';

export function increase(
    n: number = 1
): Increment {
    return {type: 'INCREMENT', increment: n};
}

export function decrease(
    n: number = 1
): Decrement {
    return {type: 'DECREMENT', decrement: n};
}
