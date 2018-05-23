import { Increase } from './increase';
import { Decrease } from './decrease';

export type Action 
    = Increase
    | Decrease
    ;

export * from './increase';
export * from './decrease';