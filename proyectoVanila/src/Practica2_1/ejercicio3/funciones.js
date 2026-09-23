function multiplosDe3(numero){
    if (!isNaN(numero) && numero > 0) {
        let multiplos = [];
        for (let i = 0; i <= numero; i++) {
            if (i % 3 === 0) {
                multiplos.push(i);
            }
         
        }
        return multiplos;   
    } else{
        return "No es un numero";
    }
}

export {multiplosDe3};