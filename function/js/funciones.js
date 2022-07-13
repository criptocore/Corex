"use strict";

function traerDelSuper(producto1, producto2) {
  console.log("la compra fue exitosa");
  return `te compre ${producto1} y también ${producto2}`;
}
let hijo = traerDelSuper("pan", "leche");
console.log(hijo);

let tio = traerDelSuper("queso", "pan");
tio = traerDelSuper("vino", "carne");
console.log(tio);

// --------------------------------------------------------------------------------

let miFuncion = function (producto1, producto2) {
  console.log("la compra fue exitosa - función asignada a una variable");
  return `Te compre ${producto1} y también ${producto2}`;
};
let regresaDato = miFuncion("pan", "azucar");
console.log(regresaDato);

// -----------------------------------------------------------------------------------






