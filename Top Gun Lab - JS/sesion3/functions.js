const car = function (name) {
  return name;
};
console.log(car("Ford Focus"));

// const otherCar = function (name) {
//   function getCarName() {
//     return name;
//   }
//   return getCarName;
// };
// console.log(otherCar("Ford Mustang"));


//PARÁMETROS POR DEFECTO Y REST PARAMETERS
// function multiply(a, b = 1) {
//     return a * b;
// }
// console.log(multiply(5)); // 5

// function multiply(multiplier, ...theArgs) {
//   return theArgs.map((x) => multiplier * x);
// }
  
// const arr = multiply(2, 1, 2, 3);
// console.log(arr); // [2, 4, 6]


// // The outer function defines a variable called "name"
// const pet = function (name) {
//   const getName = function () {
//     // The inner function has access to the "name" variable of the outer function
//     return name;
//   };
//   return getName; // Return the inner function, thereby exposing it to outer scopes
// };
// const myPet = pet("Vivie");
// console.log(myPet()); // "Vivie"


// function outside() {
//   const x = 5; //Is this one going to be the priority?
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// console.log(outside()(10)); // 20 (instead of 10)

/*
    ¿Cuál de estos ejemplos es más breve para hacer un array
    de la longitud de las cadenas de caracteres?
*/
// const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// const a2 = a.map(function (s) {
//   return s.length;
// });
// console.log(a2); // [8, 6, 7, 9]

// const a3 = a.map((s) => s.length);
// console.log(a3); // [8, 6, 7, 9]


//HOF
// const calculate = (firstNumber, secondNumber, operation) =>
//   operation(firstNumber, secondNumber);

// const addition = function (a, b) {
//   return a + b;
// };
// const multiplication = (a, b) => a * b;


// const substractionResult = calculate(100, 2, (num1, num2) => num1 - num2);
// const divisionResult = calculate(100, 2, (num1, num2) => num1 / num2);
// const additionResult = calculate(100, 2, addition);
// const multiplicationResult = calculate(100, 2, multiplication);

// console.table({
//   substractionResult,
//   divisionResult,
//   additionResult,
//   multiplicationResult,
// });