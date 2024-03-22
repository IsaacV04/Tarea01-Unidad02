//Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

alert('Bienvenido!!! \nPrecione aceptar');

let array = [] 

for(let i=1; i <= 20; i++) {
    array.push(Math.floor(Math.random()*20));
}

console.log(array);