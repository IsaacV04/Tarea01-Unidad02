/*
Crear una función que reciba un número entero y muestre un error si el tipo de dato
pasado es de otro tipo.
*/

alert('Bienvenido!!! Veamos si tu numero es valido \nPrecione aceptar');

let entrada = prompt('Ingrese un numero entero: ');
console.log(`Numero: ${entrada}`);

let numero = Number(entrada);

console.log(Number.isInteger(numero));


function verificarNumero(numero) {
    if(!Number.isInteger(numero)) {
        console.log('No es un numero');
    } else {
        console.log('Es un numero');
    }
}

verificarNumero(numero);