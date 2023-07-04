// function functionName() {
//     //
// }
let y = 10;
let tensquared = (function (x) { return x * x; }(y));
console.log(tensquared);

const sum = (x, y) => { return x + y; }; //Arrow functions
console.log(sum(10, 20));

const constantFunc = () => 42;
console.log(constantFunc());

function getScore() { 
    const num1 = 2;
    const num2 = 3;

    function add() { 
        return `score ${num1 + num2}`;
    }

    return add();
}

console.log(getScore());

// The outer function defines a variable called "name"
const pet = function (name) {
  const getName = function () {
    // The inner function has access to the "name" variable of the outer function
    return name;
  };
  return getName(); // Return the inner function, thereby exposing it to outer scopes
};

const myPet = pet("Jhony");

console.log(myPet);



