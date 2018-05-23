// tslint:disable

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

class Student {
    fullName: string;
    protected socialSecurityNumber: number;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.socialSecurityNumber = Math.random();
    }
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
