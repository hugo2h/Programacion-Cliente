"use strict";

import { aObjetos, delReves, imprimirObjetos, mayus } from "./ejercicio1.js";
import { arrayRandom, mayorDe5 } from "./ejercicio2.js";

let array = ["cnb", "josemi", "hugo", "juanra", "aaron"];

console.log('Ejercicio 1');
console.log(`Nombre en Mayúscula: ${mayus(array)}`);
console.log(`Orden del revés: ${delReves(array)}`);
imprimirObjetos(aObjetos(array));

console.log("Ejercicio 2");

let array1 = arrayRandom();
let array2 = arrayRandom();
let array3 = arrayRandom();

let juntos = [...array1, ...array2, ...array3].join(", ")
console.log(`Valor de todos los arrays: ${juntos}`)
console.log(`Valor con los mayores de 5: ${mayorDe5(array1, array2, array3)}`);

console.log("Ejercicio 3");