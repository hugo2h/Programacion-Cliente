import { imc } from './funciones.js';

let juan = imc(1.75, 16);
let marcos = imc(1.80, 20);

let esMayor = marcos > juan;
console.log(`El IMC de Juan es: ${juan}`);
console.log(`El IMC de Marcos es: ${marcos}`);
console.log(`Marcos tiene un IMC mayor que Juan?: ${esMayor}`);