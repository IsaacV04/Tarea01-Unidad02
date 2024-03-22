//Determinar si una palabra empieza con mayúscula o no.

alert('Bienvenido!!! Veamos si tu palabra empieza con mayúscula \nPrecione aceptar');

let palabra = prompt('Ingresa una palabra aleatoria');
console.log(`Palabra: ${palabra}`);

let minus = /^[a-z]/;

let mayus = /^[A-Z]/;

if(minus.test(palabra)) {
    console.log(`Empieza con minuscula: ${palabra.slice(0,1)}`);
} else if(mayus.test(palabra)) {
    console.log(`Empieza con mayuscuka: ${palabra.slice(0,1)}`);
} else {
    console.log(`No empieza con una letra: ${palabra.slice(0,1)}`);
}