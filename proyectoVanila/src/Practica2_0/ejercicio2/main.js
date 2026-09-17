"use strict";
import { calcularMedia, mejorMedia } from './funciones.js';
let equipoJuan = [89, 120, 103];
let equipoMiguel = [116, 94, 123];

let mediaJuan = calcularMedia(equipoJuan);
let mediaMiguel = calcularMedia(equipoMiguel);


console.log("El equipo de Juan tiene una media de " + calcularMedia(equipoJuan));
console.log("El equipo de Miguel tiene una media de " + calcularMedia(equipoMiguel));
console.log(mejorMedia(equipoJuan, equipoMiguel));