/*
Usar for, realizar la suma de todos los números pares entre N y M donde N y M los
ingresa un usuario.
*/

alert('Bienvenido!!! \nPrecione aceptar');

let entrada = prompt('Ingrese el limite inferior y el superior separados por una ",": ');
let limites = entrada.split(', ');
let N = parseFloat(limites[0]);
let M = parseFloat(limites[1]);

console.log(`Limite inferior: ${N}
Limite superior: ${M}`);

let suma = 0;

for (let i = N; i <= M; i++) {
    if(i % 2 === 0) {
        suma += i;
    } else {
        console.log(i);
    }
}

console.log(`La suma es: ${suma}`);