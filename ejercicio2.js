var a = 0;
var b = 0;
var c = 0;
var d = 0;
var cPromedio = 0;

a = parseInt(prompt('Digita un numero'));
b = parseInt(prompt('Digita un numero'));
c = parseInt(prompt('Digita un numero'));
d = parseInt(prompt('Digita un numero'));

cPromedio = Promedio (a,b,c,d);

function Promedio(nA, nB, nC, nD) {
    const resultado = (nA+nB+nC+nD)/4;
    console.log("El resultado es: "+ resultado);
}