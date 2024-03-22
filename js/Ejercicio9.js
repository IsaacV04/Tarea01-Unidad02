/*Crear un programa que determine si un string introducido por un usuario inicia con un
número o con una letra.
*/

alert('Bienvenido!!! \nPrecione aceptar')

let texto = prompt('Ingrese una frase cualquiera: ');
console.log(`Frase: ${texto}`);

let Numero = /^[0-9]/;

let Letra = /^[a-zA-Z]/;

if(Numero.test(texto)) {
    console.log(`Empieza con un numero: ${texto.slice(0,1)}`);
} else if(Letra.test(texto)) {
    console.log(`Empieza con una letra: ${texto.slice(0,1)}`);
} else {
    console.log(`No empieza con una letra: ${texto.slice(0,1)}`);
}