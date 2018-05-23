export type Decrease = {
    type: 'DECREASE',
    decrement: number
};

export function decrease(
    n: number
): Decrease {
    return {type: 'DECREASE', decrement: n};
}
