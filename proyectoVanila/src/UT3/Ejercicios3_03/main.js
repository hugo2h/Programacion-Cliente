"use strict";

import { curso } from "./ejercicio1";
import { discente } from "./ejercicio2";

console.log('Primer Ejercicio');
curso.mostrar();

console.log('\nSegundo Ejercicio:');

console.log('Calcular Media');
console.log(discente.calcularMedia());
console.log('Imprimir Aficiones:');
console.log(discente.imprimirAficiones());
console.log('Imprimir Informe:');
discente.imprimirInforme();

console.log('\nTercer Ejercicio');
curso.matricular(discente);
curso.mostrar(curso.alumnos);

