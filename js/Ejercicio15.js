/*
Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
ingresa el usuario en un prompt.
*/

alert('Bienvendio!!! \nPrecione aceptar');

let n = parseFloat(prompt('Ingrese el limite del ciclo: '));
console.log(`Limite: ${n}`);

let i = n;

while (i >= 1) {
    console.log(i);
    i--;
}