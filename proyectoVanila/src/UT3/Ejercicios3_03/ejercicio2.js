"use strict";

const discente = {
    
    id: "1",

    nombre: "Hugo",
    
    apellidos: "Merino",

    aficiones: ["Gimnasio", "Videojuegos", "Informática"],

    notas: {
        primera: 7,
        segunda: 8,
        tercera: 9,
    },

    calcularMedia:  () => {

        return `La media es de: ${(discente.notas.primera + discente.notas.segunda + discente.notas.tercera) / 3}`;
    },

    imprimirAficiones: () => {
        let cadena = "";

         discente.aficiones.map((v,i,a) => {
            cadena =`${cadena} ${v}`;
        })
        return cadena;

    },

    imprimirInforme: () =>{
        
            console.log(`Discente: ${discente.nombre} ${discente.apellidos}`)
            console.log(`Aficiones:`) 
            discente.aficiones.map((v,i,a) => {
            console.log(`   -${v}`);
        })
            console.log(`Notas: ${discente.notas.primera}, ${discente.notas.segunda}, ${discente.notas.tercera}`);
        }

    }



export {discente};