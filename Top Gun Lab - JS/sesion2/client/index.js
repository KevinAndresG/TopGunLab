// Ejemplos en numbers
console.log(2 + 2); // 4​
console.log(4 - 2); // 2
console.log(3 * 2); // 6​
console.log(2 / 2); // 1​​
console.log(2 % 2); // 0​
console.log(3 ** 3); // 27​

//Ejemplos en strings
console.log("Hola, mi nombre es " + "Kevin"); // "Hola, mi nombre es Kevin"​

// // Ejemplos de operadores de comparación
// console.log("10 > 20", 10 > 20); // false
// console.log("10 < 20", 10 < 20); // true
// console.log('"10" == 10', "10" == 10); // true
// console.log('"10" === 10', "10" === 10); // false
// console.log("10 === 10", 10 === 10); // true

// // Ejemplos de coerción
// const valor1 = "5";
// const valor2 = 9;
// let suma = valor1 + valor2;

// console.log(suma);


// // Ejemplos estructuras de control
// const edad = prompt("¿Cuál es tu edad?") ?? 0;

// if (edad >= 24) {
//   console.log("Ya superaste la edad máxima para prestar servicio militar");
// } else if (edad >= 18) {
//   console.log("Debes enlistarte para cumplir el servicio militar");
// } else {
//   console.log("Eres menor de edad, no puedes prestar servicio militar");
// }

// // Expresiones y declaraciones

// let nombre = "Juan" //declaración o sentencia
// console.log(let nombre = "Juan") // SyntaxError

// 2 + 3 // -> 5
// let resultado = 2 + 3

// // ❌ Ambos códigos están mal y sirven para
// // ilustrar que no debes usar declaraciones
// // cuando espera expresiones

// if (let nombre = "Juan") { // ❌ SyntaxError
//     console.log("Hola, Juan")
// }

//   while (let i = 0) { // ❌ SyntaxError
//     console.log("Iteración")
//     i = i + 1
// }


let flag = true;
let edad = 0;

while (edad < 18) {
    console.log("Tu edad es: " + edad);
    if (edad === 18) {
        console.log("Ya eres mayor de edad, eres viejo");
    }
    edad = edad + 1;
}