/*
La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla:
function multiply(a, b){
a * b
}
*/

alert('Bienvenido!!! \nPrecione aceptar');

let a = parseFloat(prompt('ingrese el valor de a'));
console.log(a);
let b = parseFloat(prompt('ingrese el valor de b'));
console.log(b);

multiply(a, b);
function multiply(a, b){
return a * b;
}

let resultado = multiply(a, b);
console.log(resultado); 


