"use strict";

const sumando = (...numeros) => {
    
    if (EsNumero(numeros) && numeros.length >= 2){
          return numeros.reduce((acc,v,i,a) => {
            return acc += v;
     });

    
    } else {
        return false;
    }    
}

const EsNumero = (num) => {

    if(Array.isArray(num)){
    return num.every((num) => {
    return !isNaN(num);
        });
    }
};

export {sumando};