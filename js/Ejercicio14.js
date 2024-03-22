/*
Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
ingresa el usuario en un prompt.
*/

alert('Bienvendio!!! \nPrecione aceptar');

let n = parseFloat(prompt('Ingrese el limite del ciclo: '));
console.log(`Limite: ${n}`);

let i = 0;

while (i <= n) {
    console.log(i);
    i++;
    i++;
} 