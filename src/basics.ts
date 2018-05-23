// tslint:disable

// union types

interface A {
    a: number
}

interface B {
    b: number
}

const a: A | B = { a: 1 };

const b: A | B = { b: 2 };

const ab: A | B = { a: 1, b: 2 };

// discriminated unions

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape): number {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}
