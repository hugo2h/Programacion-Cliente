 "use strict";
 
 const curso = {

    curso: "DAW",

    año: 2026,

    descripcion: "Desarrollo Aplicaciones Web",

    alumnos: [], // array vacío con los alumnos del curso.

    mostrar: () => {
        
        for (const valor in curso) {
            
            if (typeof curso[valor] !== "function"){
            console.log(`${valor}: ${curso[valor]}`);
        
            }
        }

    }
  };

export {curso};