/*
Crear una función que tome como parámetro un arreglo de números, retornar el número
menor, si es un número negativo mostrar su valor absoluto.
*/

alert('Bienvenido!!! \nPrecione aceptar');

function retornarElNumeroMenor(array) {
    if (array.length === 0) {
        return 0;
    }

    let menor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (Math.abs(array[i]) < Math.abs(menor)) {
        }
    }

    return Math.abs(menor);
}

let array = [];

let entrada = prompt('Ingrese cualquier cantidad de numeros separados por una coma (,): ');
let numeros = entrada.split(',');
console.log(entrada);

numeros.forEach(casilla => { array.push(casilla.trim())});

let menor = retornarElNumeroMenor(numeros);
console.log("El número menor es:", menor);


