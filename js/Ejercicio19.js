/*
Usando for, crear un programa que determine si un número es perfecto o no, (se dice
que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3).
*/

alert('Bienvenido!!! Veamos si tu numero es perfecto o no \nPrecione aceptar');


let numero = parseFloat(prompt('Ingrese un numero aleatorio: '));
console.log(`Numero: ${numero}`);

let divisores = [];
 for(let i=0; i < numero; i++) {
    if(numero % i === 0) {
        divisores.push(i);
    }   
 }

 divisores.push(numero);

 console.log(`Los divisores son: ${divisores}`);
 alert(`Los divisores son: ${divisores}`);

let suma = 0;

for(i = 1; i <= numero; i++) {
    if(numero % i ===0){
        divisores.push(i);
        suma += i;
    }
}

 if(numero === (suma/2)) {
    console.log('Su numero es perfecto');
    alert('Su numero es perfecto');
 } else {
    console.log('Su numero no es perfecto');
    alert('Su numero no es perfecto');
 }