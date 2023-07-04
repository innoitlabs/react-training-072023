import { readlink } from "fs";

console.log("Hello Typescript");

function squareOf(n:number) {
    return n * n;
}

console.log(squareOf(2));

//Any
//let a;
let a = 456;
let b: any = 'str';
//a = 'string var';
a = 5;
let c: unknown = 30;
console.log(c);

if (typeof c === 'number') { 
    console.log(c + 10);
}

let bool1 = true;

let str: string;
str = 'strs';

// let obj: object{
//     b: 'y';
// }

let obj1 = {
    b: 'z'
}

console.log(obj1.b);

let b1 = {
  c: {
    d: 'f'
  }
}  

console.log(b1.c.d);

let c1: {
    firstname: string
    lastname: string
} = {
    firstname: 'john',
    lastname: 'williams'
}

class Person{
    constructor(
        public firstname: string,
        public lastname: string
    ) { }
}

c1 = new Person('first name', 'last name');
let c2 = new Person('first name', 'last name');

let a1 : {
    b: number
    c?: string
    [key: number]: boolean
}

a1 = { b: 1 }
a1 = { b: 1, c: undefined }
a1 = { b: 1, c: 'strval' }
a1 = { b: 1, 10: true, 20: false, 30: true }

//a1 = { 10: true }

let user: {
    readonly firstname: string
} = {
    firstname : 'abby'
}

console.log(user.firstname);
//Type Alias
type Age = number;

type Person1 = {
    name: string
    age: Age
}

let age: Age = 25;

let driver: Person1 = { 
    name: 'James',
    age: age
}

// Union Types and Intersection Types with Example
type Cat = { name: string, purrs: boolean }
type Dog = { name: string, barks: boolean, wags: boolean }
type CatOrDogOrBoth = Cat | Dog //Union type
type CatAndDog = Cat & Dog //Intersection Type

//Cat 
let a3: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true
}

let a4: CatOrDogOrBoth = {
    name: 'test a4',
    barks: true,
    wags: true
}


let a5: CatOrDogOrBoth = {
    name: 'Test a5',
    purrs: false,
    barks: false,
    wags: false
}

let a6: CatAndDog = {
    name: 'Bonkers',
    purrs: true,
    barks: false,
    wags: false
}

//Arrays

let arr1:number[];
arr1 =[1, 2, 3];
arr1.push(4);

var arr2: string[];
arr2 = ['a', 'b'];
arr2.push('c');

let arr3: (string | number)[] = [1, 'a',];
//arr3.push(true);

let arr4 = [];
arr4.push(110);
arr4.push('strtype');
arr4.push(true);

//Tuples
let tupl1: [number] = [1];
let tupl2: [number, string, number];
tupl2 = [1, 'strtuple', 100];

//readonly
let arr5: readonly number[] = [1, 2, 3];
//arr5.push();

//a function to return a null
function a7(x: number) { 
    if (x > 10) { 
        return x;
    }

    return null;
}

console.log(a7(9));
//a function to return a undefined
function a8() { 
    return undefined;
}
console.log(a8());

//void 
//never 
function a9() { 
    //throw TypeError("the error type");
    console.log("print something");
}
// Enum
enum Language { 
    English = 0,
    Spanish,
    Russian
}

console.log(Language.Spanish);
console.log(Language["Russian"]);

enum Language { 
    French = 3,
    Bengali
}

console.log(Language.French);

//functions 
function add(a:number,b:number):number { 
    //let x:number = a + b;
    return a + b;
}
 
console.log(add(10,50));

//Function expression
let greet2 = function (name: string) { 
    return 'Hello ' + name;
}

//Arrow function
let greet3 = (name: string): string => { return 'Hello ' + name };

console.log(greet2("Abby"));

//function constructor
let greet4 = new Function('name', 'return "hello " + name');
console.log(greet4("Abby1"));

//optional parameters in functions
function log(message: string, userId = 'Not signed in') { 
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId);
}

log("Page loaded");

//Generator function example (*)
function* createFibonacciGenerator() { 
    let a = 0;
    let b = 1;
    while (true) { 
        yield a;
        [a ,b] = [b, a+b]
    }
}

let fibonacciGen = createFibonacciGenerator();
console.log(fibonacciGen.next());
console.log(fibonacciGen.next());
console.log(fibonacciGen.next());
console.log(fibonacciGen.next());
console.log(fibonacciGen.next());
console.log(fibonacciGen.next());
console.log(fibonacciGen.next());
console.log(fibonacciGen.next());


function times(
    f: (index: number) => void,
    n: number
) {
    for (let i = 0; i < n; i++)
        f(i)
}

times(n => console.log(n), 4);

// type Filter = {
//     <T>(array:T[], f:(item:T) => boolean):T[] //Here T indicates the generic type
// }

//let filter: Filter = (array, f) => []

//console.log(filter([1, 2, 3], _ => _ > 2));

class Game { }
class Chess extends Game { }

type Sushi = { 
    calories: number
    salty: boolean
    tasty:boolean
}

interface Sushi1 { 
    calories: number
    salty: boolean
    tasty: boolean
}

interface Sushi2 extends Sushi1{ 
    objectVar: number
}

function printData<X, Y>(data1: X, data2: Y) { 
    console.log("data : ",data1, data2);
}

printData("hello", 10);