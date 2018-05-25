
export type SetIncrement = {
    type: 'SET_INCREMENT',
    value: number
};

export function setIncrement(
    value: number
): SetIncrement {
    return {
        type: 'SET_INCREMENT',
        value
    };
}