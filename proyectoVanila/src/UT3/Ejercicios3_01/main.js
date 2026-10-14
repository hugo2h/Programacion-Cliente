"use strict";

import { sumando } from "./ejercicio1.js";
import { imprimirTabla } from "./ejercicio2.js";

console.log("Ejercicio 1");

const resultado = sumando(2,3,4,5);

console.log((resultado ? `El resultado es ${resultado}` : `Tonto ponlo bien`));


console.log("Ejercicio 2")
console.log(imprimirTabla(4));