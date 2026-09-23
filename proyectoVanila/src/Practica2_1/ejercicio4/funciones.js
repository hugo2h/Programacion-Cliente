"use strict";

function potencia(numero1, numero2){
    if (!isNaN(numero1) && !isNaN(numero2)) {
        let repeticiones = 0;
        let resultado = 1;
        while(repeticiones < numero2){

            resultado *=numero1;
            repeticiones++;
            
        }

        
        return resultado;
        
    }
    
}

export {potencia};
