import { Increase } from './increase';
import { SetIncrement } from './set-increment';
import { Decrease } from './decrease';
import { SetDecrement } from './set-decrement';
import { PushToHistory } from './push-to-history';

export type Action 
    = Increase
    | SetIncrement
    | Decrease
    | SetDecrement
    | PushToHistory
    ;

export * from './increase';
export * from './set-increment';
export * from './decrease';
export * from './set-decrement';
export * from './push-to-history';
