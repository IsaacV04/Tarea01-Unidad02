/*
Dado el array = [1,2,3,4,5,6]
a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
pantalla.
b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
pantalla.
c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
en pantalla.
d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
e. Generar una copia de un array pero con todos los elementos incrementados en 1.
f. Calcular el promedio
*/

alert('Bienvenido!!! \nPrecione acetar');

let array = [1, 2, 3, 4, 5, 6]

//a
let i = 0;
while( i < array.length) {
    console.log('#',array[i]);
    i++;
}

console.log('-----------------------------------------');

//b
for(i=0; i < array.length; i++) {
    console.log('#',array[i]);
}

console.log('-----------------------------------------');

//c
array.forEach((numeros) => {
    console.log('#',numeros);
});

console.log('-----------------------------------------');

//d
array.forEach((numeros) => {
    console.log('#',numeros += 1);
});

console.log('-----------------------------------------');

//d.1 esto lo descubri haciendo pruebas
array.forEach((numeros, suma) => {
    numeros += suma;
    console.log('#',numeros);
});

console.log('-----------------------------------------');

//e
let copiaArray = array.map((elemento) => {
    return elemento + 1;
});

console.log(copiaArray);


console.log('-----------------------------------------');

//f
let promedio = array.reduce((total, numeros) => total + parseInt(numeros) / 6);
console.log(promedio); 