//Escribir un programa que escriba en pantalla los divisores de un número dado. 

alert('Bienvenido!!! Veamos cuales son los divisores de tu numero \nPrecione aceptar');

let numero = parseFloat(prompt('Ingrese un numero aleatorio: '));
console.log(`Numero: ${numero}`);

let divisores = [];
 for(let i=0; i <= numero; i++) {
    if(numero % i === 0) {
        divisores.push(i);
    }   
 }

 divisores.push(numero);

 console.log(`Los divisores son: ${divisores}`);
 alert(`Los divisores son: ${divisores}`);