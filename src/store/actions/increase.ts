export type Increase = {
    type: 'INCREASE',
    increment: number
};

export function increase(
    n: number
): Increase {
    return {type: 'INCREASE', increment: n};
}
