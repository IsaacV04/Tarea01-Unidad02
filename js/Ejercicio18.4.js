/*
Usando for, solicitar al usuario un número y utilizando console.log para mostrar la
tabla del número hasta 12.
*/

alert('Bienvendio!!!, ingresa un numero y mira la tabla hasta el 12 \nPrecione aceptar');

let n = parseFloat(prompt('Ingrese el numero que quiere multiplicar: '));
console.log(`Limite: ${n}`);

for (let i = 1; i <= 12; i++) {
    let multi = i * n
    console.log(`${i} x ${n} : ${multi}`);
}