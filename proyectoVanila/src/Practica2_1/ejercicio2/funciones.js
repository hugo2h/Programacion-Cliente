function espar(numero){
        if (numero % 2 === 0) {
            return true;
        }
        return false;
    }
function esPositivo(numero){
        if (numero > 0) {
            return true;
        }
        return false;
    }
function esPrimo(numero){
        if (numero < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }

function analisisNumerico(numero){
    let resultadoEsPar = espar(numero) ? `es par`: `es impar`;
    let resultadoEsPositivo = esPositivo(numero) ? `es positivo`: `es negativo`;
    let resultadoEsPrimo = esPrimo(numero) ? `es primo`: `no es primo`;


    if (!isNaN(numero)) {
       return console.log(`El número ${numero}: ${resultadoEsPar}, ${resultadoEsPositivo}, ${resultadoEsPrimo}`);
    } else {
        console.log(`Error: ${numero} no es un número`);
    }
}

export {analisisNumerico};