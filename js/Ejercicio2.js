//Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres.
alert('Bienvenido!!, Ingresa tres numeros y averigüemos cuales es mayor\nPrecione aceptar');

let numero1 = parseFloat(prompt('Ingrese el primer numero: '));
console.log(`Numero 1: ${numero1}`);
let numero2 = parseFloat(prompt('Ingrese el segundo numero: '));
console.log(`Numero 2: ${numero2}`);
let numero3 = parseFloat(prompt('Ingrese el tercer numero: '));
console.log(`Numero 3: ${numero3}`);

if(numero1 == numero2 ) {
    console.log(`El primer y el segundo numero son iguales: ${numero1}, ${numero2}`);
    alert(`El primer y el segundo numero son iguales: ${numero1}, ${numero2}`)
} else if(numero2 == numero3) {
    console.log(`El segundo y el tercer numero son iguales: ${numero2}, ${numero3}`);
    alert(`El segundo y el tercer numero son iguales: ${numero2}, ${numero3}`);
} else if(numero1 == numero3) {
    console.log(`El primer y el tercer numero son iguales : ${numero1}, ${numero3}`);
    alert(`El primer y el tercer numero son iguales : ${numero1}, ${numero3}`);
} else if(numero1 == numero2 == numero3) {
    console.log(`Los tres numeros son iguales: ${numero1}, ${numero2}, ${numero3}`);
    alert(`Los tres numeros son iguales: ${numero1}, ${numero2}, ${numero3}`);
} else if(numero2 > numero3 && numero1 > numero2) {
    console.log(`El primer numero (${numero1}) es el mayor`);
    alert(`El primer numero (${numero1}) es el mayor`);
} else  if(numero2 > numero3) {
    console.log(`El segundo numero (${numero2}) es el mayor`);
    alert(`El segundo numero (${numero2}) es el mayor`);
} else {
    console.log(`El tercer numero (${numero3}) es el mayor`);
    alert(`El tercer numero (${numero3}) es el mayor`);
}