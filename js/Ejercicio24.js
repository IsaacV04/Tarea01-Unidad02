/*
Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
introducido por el usuario a través de un prompt.
*/

alert('Bienvenido!!! Ingresa el numero de casillas para un array \nPrecione aceptar');

let N = prompt('Ingrese el numero de casillas');
console.log(`Casillas: ${N}`);

if(N !== Number) {
    console.log('Eso no es un numero');
}

let array = [] 

for(let i=1; i <= N; i++) {
    array.push(Math.floor(Math.random()*20));
}

console.log(array);