/*Usando for mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
ingresa el usuario en un prompt.
*/

alert('Bienvendio!!! \nPrecione aceptar');

let n = parseFloat(prompt('Ingrese el limite del ciclo: '));
console.log(`Limite: ${n}`);

for (let i = 0; i <= n; i++) {
    console.log(i);
}