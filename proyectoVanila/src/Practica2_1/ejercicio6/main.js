"use strict";

import { calculadora } from "./funciones.js";

let suma = calculadora(2,2,"+");
let resta = calculadora(5,2,"-");
let multiplicacion = calculadora(8,7,"*");
let division = calculadora(10,2,"/");
let divisionPorCero = calculadora(10,0,"/");
let modulo = calculadora(10,3,"%");

console.log(`La suma es ${suma}`);
console.log(`La resta es ${resta}`);
console.log(`La multiplicación es ${multiplicacion}`);
console.log(`La división es ${division}`);
console.log(`La división por cero es ${divisionPorCero}`);
console.log(`El módulo es ${modulo}`);
