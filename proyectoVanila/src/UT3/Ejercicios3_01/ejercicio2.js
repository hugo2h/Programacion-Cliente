"use strict"

const imprimirTabla = (numero, funcion) => {

    let tablasFinales = ""
    if (esNumero && numero > 2) {
       for (let i = numero; i > 0; i--) {
            
            tablasFinales += `Tabla de ${i}\n${calcularTabla(i)}\n`;
        
       }

       return tablasFinales
    }
    

}

const calcularTabla = (numero) => {

    let resultado = "";

    for (let i = 1; i <= 10; i++) {

        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }

    return resultado;

}

const esNumero = (numero) => {
    return !isNaN(numero);
}

export {imprimirTabla};