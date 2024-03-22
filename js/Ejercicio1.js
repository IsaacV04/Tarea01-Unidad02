//Escriba un programa que pida dos números y escriba en la consola cuál es el mayor.

alert('Bienvenido!!, Ingresa dos numero y averigüemos cual es mayor \nPrecione aceptar');

let numero1 = parseFloat(prompt('Ingrese el primero numero: '));
console.log(`Numero 1: ${numero1}`);

let numero2 = parseFloat(prompt('Ingrese el segundo numero: '));
console.log(`Numero 2: ${numero2}`);

if(numero1 > numero2) {
    console.log(`El primer numero (${numero1}) es mayor que el segundo numero (${numero2})`);
    alert(`El primer numero (${numero1}) es mayor que el segundo numero (${numero2})`);
}
else if(numero1 == numero2) {
    console.log(`El primer y segundo numero (${numero1} y ${numero2}) son iguales`);
    alert(`El primer y segundo numero (${numero1} y ${numero2}) son iguales`);
}
else {
    console.log(`El segundo numero (${numero2}) es mayor que el primer numero (${numero1})`);
    alert(`El segundo numero (${numero2}) es mayor que el primer numero (${numero1})`);
}