let myArr = ['a', 'b', 'c'];
let myArr2 = ['d', 'e', 'f'];

console.log(myArr.concat(myArr2));
console.log(myArr.join("-"));

//let myArray = [1, 2, [3, 4]];
let myArray = [1, 4, [3, 2]]; // 2, 3, 4, 1
console.log(myArray);
console.log(myArray.flat());
console.log(myArray.flat().sort());
console.log(myArray.flat().reverse());

const myArray1 = ["Wind", "Rain", "Fire" ];
console.log(myArray1);
console.log(myArray1.sort());
console.log(myArray.flat().reverse());

const myArray2 = ["Wind", "Rain", "Fire", "Test", 10, "Cat"];

console.log(myArray2.filter((element) => typeof element === "string"));




