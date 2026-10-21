 "use strict";
 
 const curso = {

    curso: "DAW",

    año: 2026,

    descripcion: "Desarrollo Aplicaciones Web",

    alumnos: [], // array vacío con los alumnos del curso.

    mostrar: () => {
        
        for (const valor in curso) {
        if (typeof curso[valor] !== "function"){
            if (Array.isArray(curso[valor])) {
                console.log(`${valor}:`);
                for (const i in curso[valor]) {
                    console.log(`   - ${curso[valor][i].nombre}`);
                }
            } else {
                console.log(`${valor}: ${curso[valor]}`);
            }
        }
    }
},
    
    //Ejercicio 3
    matricular: (discente) => {
        return curso.alumnos = [...curso.alumnos, discente];
    }
  };

export {curso};