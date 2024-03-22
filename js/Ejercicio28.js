/*
Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
contenga sólo las palabras que empiezan con una vocal.
*/

alert('Bienvenido!!! \nPrecione aceptar');

function PalabrasInicienConVocal(array) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    return array.filter(function(palabra) {
        return vocales.includes(palabra[0].toLowerCase());
    });
}

let array = [];

let entrada = prompt('Ingrese cualquier cantidad de palaabras separadas por una coma');
let palabras = entrada.split(',');
console.log(entrada);

palabras.forEach(casilla => { array.push(casilla.trim())});

let palabrasConVocales = PalabrasInicienConVocal(palabras);
console.log(palabrasConVocales);
