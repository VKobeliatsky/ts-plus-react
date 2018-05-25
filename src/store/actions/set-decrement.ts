
export type SetDecrement = {
    type: 'SET_DECREMENT',
    value: number
};

export function setDecrement(
    value: number
): SetDecrement {
    return {
        type: 'SET_DECREMENT',
        value
    };
}