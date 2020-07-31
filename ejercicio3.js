var valor = 0;
var cTotal = 0;

valor = parseInt(prompt('Digita el precio'));

cTotal = cIva(valor);

function cIva(nP){
    const precio = nP;
    const ivaPrecio = nP * 0.21;
    const total = precio + ivaPrecio;
    console.log("El precio sin iva es: "+ precio + " Iva: "+ ivaPrecio + " El Total es: "+ total);
}