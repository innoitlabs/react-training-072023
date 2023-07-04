//https://nodejs.org/en
//install node 

var hello = "Hello "; //var example
console.log(hello);

let greetCountry = hello + "India"; //let example
console.log(greetCountry);

let aditions = 100 + 200;
//aditions = greetCountry;
//greetCountry = aditions;
console.log(greetCountry);

console.log(greetCountry.length); //number of chars in string
console.log(greetCountry.split(" ")[0]);
console.log(greetCountry.split(" ")[1]); //array

const substr = greetCountry.substring(0, 4);
console.log(substr);

const substr1 = greetCountry.slice(0, 5);
console.log(substr1);

const charAtIndex = greetCountry.indexOf("o");
console.log(charAtIndex);

const strUpper = greetCountry.toUpperCase();
console.log(strUpper);

const strLower = greetCountry.toLowerCase();
console.log(strLower);

console.log((strUpper === strUpper)); //booleans

//non primitive types


let obj = { x: 1, y: 2, z: { a: 10, b: 20} }; //Object type
console.log(obj.z);
console.log(obj.z.a);

let obj1 = { x: 1 };//
let obj2 = { x: 1 };//

console.log(typeof(obj1) === typeof(obj2));

const numStr = 10 + " Objects";
console.log(numStr);

const multStrNum = "Hello" * "10.5";
console.log(multStrNum);

console.log(typeof("2304050"));
console.log(typeof(Number("2304050")));
console.log(typeof (String(2304050)));

console.log(parseFloat("3.5 number"));

// function square(n) { 
//     console.log('square of 9 is ' + n * n);
//     return n * n;
// }

function square(n) { 
    console.log('square of 9 is ' + n * n);
}
//console.log(square(9));

let a = { b: null };
console.log(a.b?.c);

if (false) {
    console.log("false statement");
}
else { 
    console.log("true statement");
}

switch (4) { 
    case 1:
        console.log("switch statement 1");
        break;
    case 2:
        console.log("switch statement 2");
        break;
    default:
        console.log("switch statement default");
        break;
}

for (let i = 0; i <= 10; i++) { 
    //console.log(i);
}
let j = 0;
while (j<=10)
{ 
    //console.log(j);
    j++;
}

let book = {
    "author": "Williams",
    "name": "Javascript",
    "description" : "Lorem ipsum strings"
}

console.log(book["author"]);
console.log(book.name);
console.log(book);
const strBook = JSON.stringify(book);
console.log(strBook);
console.log(JSON.parse(strBook));

let mixedArray = [1, "str", 9.5];
let arr1 = new Array(5, 4, 6, 'abc');

let arr = [1, 2, 3]; //Array
console.log(arr[1]); 
let arr2 = [0, arr, 4, 5, 6];
console.log(arr2);
const arr3 = [0, ...arr, 4, 5, 6];
console.log(arr3);
console.log(arr3.length);

arr3.push(7);
arr3.push(8);
arr3[9] = 10;
arr3.push(55);
console.log(arr3);
console.log(arr3.length);

// arr3.forEach(element => {
//     console.log("Array element - " + element);
// });
//for in array indexes
// for (const i in arr3) {
//     console.log(i);
// }

//for of gives the output array elements
// for (const i of arr3) { 
//     console.log(i);
// }


//arr3.map(element => console.log("map elements - " + element));

// String interpolation
const name = 'Lev', time = 'today';
console.log(`Hello ${name}, how are you ${time}?`);

//Map
const sayings = new Map();
sayings.set('cat', 'meaow');
sayings.set('dog', 'woof');
sayings.set('bird', 'coo');

console.log(sayings);
console.log(sayings.size);

console.log(sayings.get('cat'));
console.log(sayings.has('dog'));
//console.log(sayings.delete('dog'));
//console.log(sayings);
for (const [key, value] of sayings) { 
    console.log(`${key} sounds ${value}`);
}

const set1 = new Set();
set1.add(10);
set1.add("Test");
set1.add("foo");

set1.has("foo"); //true
set1.size; //3
console.log(set1.has("foo"));
console.log(set1.size);

for (const element of set1) { 
    console.log(element);
}

const arrSet = Array.from(set1);
console.log(arrSet);

// console.log()
// console.log()

const dateVar = new Date();

console.log(dateVar);
console.log(dateVar.getDay());
console.log(dateVar.getDate());
console.log(dateVar.getMonth());
console.log(dateVar.getHours());