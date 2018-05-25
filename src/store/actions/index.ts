import { Increase } from './increase';
import { SetIncrement } from './set-increment';
import { Decrease } from './decrease';
import { SetDecrement } from './set-decrement';

export type Action 
    = Increase
    | SetIncrement
    | Decrease
    | SetDecrement
    ;

export * from './increase';
export * from './set-increment';
export * from './decrease';
export * from './set-decrement';
