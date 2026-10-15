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

        return (discente.notas.primera + discente.notas.segunda + discente.notas.tercera) / 3;
    }
}

export {discente};