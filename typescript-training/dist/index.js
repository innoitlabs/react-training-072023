"use strict";
console.log("Hello Typescript");
function squareOf(n) {
    return n * n;
}
console.log(squareOf(2));
//Any
//let a;
let a = 456;
let b = 'str';
//a = 'string var';
a = 5;
let c = 30;
console.log(c);
if (typeof c === 'number') {
    console.log(c + 10);
}
let bool1 = true;
let str;
str = 'strs';
// let obj: object{
//     b: 'y';
// }
let obj1 = {
    b: 'z'
};
console.log(obj1.b);
let b1 = {
    c: {
        d: 'f'
    }
};
console.log(b1.c.d);
let c1 = {
    firstname: 'john',
    lastname: 'williams'
};
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
c1 = new Person('first name', 'last name');
let c2 = new Person('first name', 'last name');
let a1;
a1 = { b: 1 };
a1 = { b: 1, c: undefined };
a1 = { b: 1, c: 'strval' };
a1 = { b: 1, 10: true, 20: false, 30: true };
//a1 = { 10: true }
let user = {
    firstname: 'abby'
};
console.log(user.firstname);
//# sourceMappingURL=index.js.map