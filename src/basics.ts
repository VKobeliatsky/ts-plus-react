// tslint:disable

const numArr: Array<number> = [1, 2, 3];
const strArr: Array<string> = ['foo', 'bar'];

function identity<T>(arg: T): T {
    return arg;
}

const a = identity('foo');