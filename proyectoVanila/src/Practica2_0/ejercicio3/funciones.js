export function numeros(numero1, numero2){
    let valor = numero2;
    for (let index = 0; index < numero1; index++) {
        
        console.log(valor);
        valor = valor *2;
        
    }
    return valor;
}