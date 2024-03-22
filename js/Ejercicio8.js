/*Crear un programa que determine si un número introducido en un Prompt es divisible
por 5 o no, mostrar el resultado con console.log.
*/ 

alert('Bienvenido!!! Veamos si tu numero es divisible por 5 \nPrecione aceptar');

let numero = parseFloat(prompt('Ingrese un numero aleatorio: '));
console.log(`Numero: ${numero}`);

let division = numero / 5;

if(numero % 5 === 0) {
    console.log(`El numero ${numero} es divisible por 5\nLa respuesta a la division es ${division}`);
    alert(`El numero ${numero} es divisible por 5\nLa respuesta a la division es ${division}`);
} else {
    console.log(`El numero ${numero} es indivisible por 5`);
    alert(`El numero ${numero} es indivisible por 5`);
}