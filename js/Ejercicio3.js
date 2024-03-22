//Escriba un programa que pida un número y diga si es divisible por 2.
alert('Bienvenido!!, Ingresa un numero para saber su es divisible por 2 \nPrecione aceptar');

let numero = parseFloat(prompt('Ingrese el numero: '));
console.log(`Numero: ${numero}`);

if(numero % 2 == 0) {
    console.log(`El numero ${numero} si es divisible entre 2`);
    alert(`El numero ${numero} si es divisible entre 2`);
} else {
    console.log(`El numero ${numero} no es divisible entre 2`);
    alert(`El numero ${numero} no es divisible entre 2`);
}