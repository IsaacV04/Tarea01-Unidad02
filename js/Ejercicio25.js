/*
Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
un color introducido por el usuario a través de un prompt se encuentra dentro del array o
no.
*/

alert('Bienenido!!! Veamos si tu color ya existe en este array \nPrecione aceptar');

let colorUsuario = prompt('Ingrese un color: ');
console.log(`Color: ${colorUsuario}`);

let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

let existe = colores.some(color => color === colorUsuario);

if(existe === true) {
    console.log('El color esta en el Array');
} else {
    console.log('El color no existe en el Array');
}