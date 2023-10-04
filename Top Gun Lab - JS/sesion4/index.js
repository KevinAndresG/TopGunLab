// Ejemplo de CALLBACK
// setTimeout(() => {
//   console.log("Hola desde callback dentro de setTimeout");
// }, 2000);

// const saludarCallback = () => {
//   console.log("Hola desde callback saludarCallback");
// };
// setTimeout(saludarCallback, 2000);

// //Ejemplo complicado de Callbacks
// const pizzaInicial = {
//   horneada: false,
//   tieneMasaHecha: false,
//   toppings: [],
//   salsaBase: "",
// };
// const hacerMasa = (pizza, agregarSalsaBaseCallback) => {
//   pizza.tieneMasaHecha = true;
//   return agregarSalsaBaseCallback(pizza);
// };
// const agregarSalsaBase = (pizza, agregarToppingsCallback) => {
//   pizza.salsaBase = "Tomate";
//   console.log("Agregando salsa base");
//   return agregarToppingsCallback(pizza, ["Queso, Jamón, Piña"]);
// };
// const agregarToppings = (pizza, toppings, hornearCallback) => {
//   console.log("Agregando toppings: ", toppings);
//   pizza.toppings = toppings;
//   return hornearCallback(pizza);
// };
// const hornear = (pizza) => {
//   pizza.horneada = true;
//   console.log("Horneando esta pizza... ");
//   return pizza;
// };

// const hacerPizzaHawaiiana = (pizzaSinNada) => {
//   return hacerMasa(pizzaSinNada, (salsaPizza) =>
//     agregarSalsaBase(salsaPizza, (toppingsPizza, currentToppings) =>
//       agregarToppings(toppingsPizza, currentToppings, hornear)
//     )
//   );
// };

// console.log(hacerPizzaHawaiiana(pizzaInicial));




//Ejemplo de PROMISES
const promesa = new Promise(function ejecutarPromesa(resolve, reject) {
  console.log("Esto es lo que sucede al ejecutar la promesa inicialmente");

  setTimeout(function comenzarTimeout() {
    console.log("Código del setTimeout");
  }, 2000);

  //throw new Error("Erroooor");

  //reject("¡Fallo!");

  //resolve("¡Exito!");
})
  .then(function correrThen(texto) {
    console.log("Hola desde el .then: ", texto);
  })
  .catch(function correrCatch(texto) {
    console.log("Hola desde el .catch: ", texto);
  })
  .finally(function correrFinally() {
    console.log("FINALLY");
  });

console.log("Final del archivo");




const servirlaAlCliente = () => {
  console.log("Sirviendo la pizza");
}
const recibirPagoDelCliente = () => {
  console.log("Recibiendo pago");
}
const darCambioAlCliente = () => {
  console.log("Devolviendo cambio");
}
// // Ejemplo de Pizza pero en promesas
// const pizzaInicial = {
//   horneada: false,
//   tieneMasaHecha: false,
//   toppings: [],
//   salsaBase: "",
// };
// const hacerMasa = (pizza) => {
//   pizza.tieneMasaHecha = true;
//   return pizza;
// };
// const agregarSalsaBase = (pizza) => {
//   pizza.salsaBase = "Tomate";
//   return pizza;
// };
// const agregarToppings = (pizza, toppings) => {
//   pizza.toppings = toppings;
//   return pizza;
// };
// const hornear = (pizza) => {
//   pizza.horneada = true;
//   return pizza;
// };

// const hacerPizzaHawaiianaPromise = (pizzaSinNada) =>
//   new Promise((resolve) => {
//     console.log("Iniciando preparación");
//     resolve(pizzaSinNada);
//   })
//     .then((pizza) => hacerMasa(pizza))
//     .then((pizzaConMasa) => agregarSalsaBase(pizzaConMasa))
//     .then((pizzaConSalsa) =>
//       agregarToppings(pizzaConSalsa, ["Queso, Jamón, Piña"])
//     )
//     .then((pizzaConToppings) => hornear(pizzaConToppings))
//     .then((res) => {
//       console.log(res);
//       servirlaAlCliente();
//       recibirPagoDelCliente();
//       darCambioAlCliente();
//     });

// hacerPizzaHawaiianaPromise(pizzaInicial); // Papi, recuerde ejecutar la promesa

const pizzaInicial = {
  horneada: false,
  tieneMasaHecha: false,
  toppings: [],
  salsaBase: "",
};
const hacerMasaPromise = (pizza) =>
  new Promise((resolve) => {
    pizza.tieneMasaHecha = true;
    resolve(pizza);
  });
const agregarSalsaBasePromise = (pizza) =>
  new Promise((resolve) => {
    pizza.salsaBase = "Tomate";
    resolve(pizza);
  });
const agregarToppingsPromise = (pizza, toppings) =>
  new Promise((resolve) => {
    pizza.toppings = toppings;
    resolve(pizza);
  });
const hornearPromise = (pizza) =>
  new Promise((resolve) => {
    pizza.horneada = true;
    resolve(pizza);
  });

const hacerPizzaHawaiianaPromise = (pizzaSinNada) =>
  new Promise((resolve) => {
    console.log("Pedido recibido");
    resolve(pizzaSinNada);
  });
//hacerPizzaHawaiianaPromise(pizzaInicial); // Papi, recuerde ejecutar la promesa




// Ejemplo Async Await
// hacerPizzaHawaiianaAsync = async (pedidoPizza) => {
//   const pizzaSinMasa = await hacerPizzaHawaiianaPromise(pedidoPizza);
//   console.log("pizzaSinMasa", pizzaSinMasa);
//   const pizzaConMasa = await hacerMasaPromise(pizzaSinMasa);
//   const pizzaConSalsa = await agregarSalsaBasePromise(pizzaConMasa);
//   const pizzaConToppings = await agregarToppingsPromise(pizzaConSalsa, [
//     "Queso, Jamón, Piña",
//   ]);
//   const pizzaHorneada = await hornearPromise(pizzaConToppings);
//   servirlaAlCliente();
//   recibirPagoDelCliente();
//   darCambioAlCliente();
//   console.log("Pizza terminada: ", pizzaHorneada);
//   return pizzaHorneada;
// };
// hacerPizzaHawaiianaAsync(pizzaInicial);



// // Ejemplo de tirada de dados
// const doTask = (iterations) =>
//   new Promise((resolve, reject) => {
//     const numbers = [];

//     for (let i = 0; i < iterations; i++) {
//       const number = 1 + Math.floor(Math.random() * 6);
//       numbers.push(number);
//       if (number === 6) {
//         reject({
//           error: true,
//           message: "Se ha sacado un 6",
//         });
//       }
//     }

//     resolve({
//       error: false,
//       value: numbers,
//     });
//   });



const pizza = pizzaService.crearMasa();
const pizzaConSalsa = pizzaService.añadirSalsaBase("Tomate");
Promise.all([pizza, pizzaConSalsa])
  .then((resp) => {
    const pizza = resp[0].data;
    const pizzaConMasa = resp[1].data;
  })
  .catch((error) => {
    console.error('Error: ', error);
  });
