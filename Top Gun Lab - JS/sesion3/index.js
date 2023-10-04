// // Accediendo a los elementos de un array

// const numbers = [1, 2, 3, 4, 5]
// let index = 2
// console.log(numbers[index]) // 3

// Accediendo a los elementos de un array dentro de otro array

// const numbers = [1, 2, 3, 4, 5, [11, 12, 13, 14, 15]];
// let index = 5;
// let subIndex = 3;

// const [firstNumber, , thirdNumber, , , [firstSubNumber]] = numbers;
// console.log(firstNumber, thirdNumber, firstSubNumber);

// console.log(numbers[index]); // [11, 12, 13, 14, 15]
//console.log(numbers[index][subIndex]) // ¿?

// // ¿Qué pasa si accedemos a un índice que no tiene un valor?

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers[10]) // undefined

// //Modificando elementos del array

// const numbers = [1, 2, 3, 4, 5]

// numbers[0] = 10
// numbers[2] = 30

// console.log(numbers) // [10, 2, 30, 4, 5]

// OBJETOS

// Creando un objeto que representa a una persona
// const persona = {
//     name: 'Kevin',
//     age: 23,
//     isWorking: true,
//     isSingle: true
// }

// const persona = {
//     name: 'Dani',
//     age: 30,
//     isWorking: true,
//     isSingle: true,
//     family: ['Daniel', 'Maria'], // array
//     address: { // otro objeto
//         street: 'Calle 33A',
//         number: 33,
//         city: 'Medellín'
//     },
//     eat: function () { // <- método
//         console.log('Estoy comiendo')
//     }
// }

// console.log(persona.name);
// persona.eat();

// let property = 'name'
// let method = 'eat'
// console.log(persona[property]);
// persona[method]();

// const { address: {street} } = persona;
// console.log(street);
// const { ['address']: direccion } = persona;
// console.log(direccion);


// const objetoComplejo = {
//   internalArray: [
//     [
//       {
//         anotherObject: {
//           true: [
//             function () {
//               // <- método
//               console.log("Estoy comiendo");
//             },
//           ],
//         },
//       },
//     ],
//   ],
// };
// // RETO: NO MOSTRAR, A VER SI NO LA EMBARRAS MOSTRÁNDOLO CUANDO NO SE SUPONE XD
// const {
//   internalArray: [
//     [
//       {
//         anotherObject: {
//           true: [eat],
//         },
//       },
//     ],
//   ],
// } = objetoComplejo;
// eat();
