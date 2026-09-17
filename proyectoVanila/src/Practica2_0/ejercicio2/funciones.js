
"use strict";
export function calcularMedia(equipo){
    let puntos = 0;
    for (let i = 0; i < equipo.length; i++) {
        
      puntos += equipo[i];  
    }

    return puntos / equipo.length;
}

export function mejorMedia(equipo1, equipo2){

    return equipo1 < equipo2 ? "El equipo de Juan tiene mejor media" : "El equipo de Miguel tiene mejor media"

}