/*
Crear una función que tome como parámetro un arreglo de números, retornar un nuevo
arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1].
*/


function invertirArreglo(arreglo) {
    return arreglo.reverse();
}

let array = [];

let entrada = prompt('Ingrese cualquier cantidad de numeros separados por una coma (,): ');
let numeros = entrada.split(',');
console.log(entrada);

numeros.forEach(casilla => { array.push(casilla.trim())});

let arregloInvertido = invertirArreglo(numeros);
console.log(arregloInvertido);