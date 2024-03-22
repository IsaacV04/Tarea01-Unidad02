/*
Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
vacío debe devolver cero.
*/

alert('Bienvenido!!! Calculemos el promedio de tu arreglo \nPrecione acepptar');

function PromedioDeUnArreglo(array) {
    let suma = array.reduce((total, numero) => total + parseInt(numero), 0);
    return suma / array.length;
}

let array = [];

let entrada = prompt('Ingrese cualquier cantidad de numeros separados por una coma (,): ');
let numeros = entrada.split(',');
console.log(entrada);

numeros.forEach(casilla => { array.push(casilla.trim())});

let promedio = PromedioDeUnArreglo(numeros);
console.log(promedio); 
