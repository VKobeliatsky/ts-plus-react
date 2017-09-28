
export type Increment = {
    type: 'INCREMENT',
    increment: number
};

export type Decrement = {
    type: 'DECREMENT',
    decrement: number
};

export type CounterAction 
    = Increment
    | Decrement
    ;
