function calculadora(numero1, numero2, operador) {
    
    let operadores = ["+","-","*","/","%"];

    let resultado = 0;

    switch (operador) {
        case "+":
            resultado = suma(numero1, numero2);
            break;
        case "-":
            resultado = resta(numero1, numero2);
            break;
        case "*":
            resultado = multi(numero1, numero2);
            break;
        case "/":
            resultado = division(numero1, numero2);
            break;
        case "%":
            resultado = modulo(numero1, numero2);
            break;
        default:
            break;
    }

    return resultado;
    

}

function suma(numero1, numero2){
    return numero1 + numero2;
}

function resta(numero1, numero2){
    return numero1 - numero2;
}

function multi(numero1, numero2){
    return numero1 * numero2;
}

function division(numero1, numero2){
    if (numero2 === 0) {
        return "Error: No se puede dividir entre 0";
        
    }
    return numero1 / numero2;
}

function modulo(numero1, numero2){
    if (numero2 === 0) {
        return "Error: No se puede hacer un modulo de 0";
        
    }
    return numero1 % numero2;
}

export {calculadora};