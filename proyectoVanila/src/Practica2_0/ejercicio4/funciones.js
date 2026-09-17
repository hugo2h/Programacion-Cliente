export function factura(nombre="Producto generico", precio=100, impuesto=21) {
    
    if (!isNaN(precio) && !isNaN(impuesto) ) {
         return console.log(`${nombre}, ${precio - calcularImpuesto(precio, impuesto)}`);

    } else{
        return console.log("Error: El precio y el impuesto deben ser números.");
    }
   
}

function calcularImpuesto(precio, impuesto) {
    return precio * impuesto / 100; 

}