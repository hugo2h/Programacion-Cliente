"use strict";

function media(){

    let contador = 0;

    for (let i = 0; i < arguments.length; i++) {
        
        if (!isNaN(arguments[i]) && arguments[i] >= 0) {
            
            contador += arguments[i];

        }

        
        
    }

    return contador / arguments.length;
}

export {media};