//Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en la consola.

alert('Bienvenido!!! Veamos si tu numero es par o impar \nPrecione aceptar');

let numero = parseFloat(prompt('Ingrese un numero aleatorio: '));
console.log(`Numero: ${numero}`);

if(numero % 2 === 0) {
    console.log(`El numero ${numero} es par`);
    alert(`El numero ${numero} es par`);
} else {
    console.log(`El numero ${numero} es impar`);
    alert(`El numero ${numero} es impar`);
}