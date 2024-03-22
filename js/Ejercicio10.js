/*
Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
determine si el triángulo es válido o no.
*/

alert('Bienvenido!!! Veamos si tu triangulo es válido \nPrecione aceptar');

let entrada = prompt('Ingrese el valor de cada angulo, separado con ",": ');
let angulos = entrada.split(', ');
let angulo1 = parseFloat(angulos[0]);
let angulo2 = parseFloat(angulos[1]);
let angulo3 = parseFloat(angulos[2]);

console.log(`Angulos:
Angulo 1: ${angulo1}
Angulo 2: ${angulo2}
Angulo 3: ${angulo3}`);

let sumaAngulos = angulo1 + angulo2 + angulo3;

if (sumaAngulos === 180) {
    console.log('Tu triangulo es valido');
} else {
    console.log('Tu  triangulo no es valido');
}