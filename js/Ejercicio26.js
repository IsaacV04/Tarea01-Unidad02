/*
El usuario ingresa un string con varias palabras separadas por coma en un popup y se
deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).
*/

alert('Bienvenido!!! \nPrecione aceptar');

let array = [];

let entrada = prompt('Ingrese cualquier cantidad de lapabras separadas por una coma (,): ');
let palabras = entrada.split(',');

palabras.forEach(casilla => { array.push(casilla.trim())});

console.log(array);