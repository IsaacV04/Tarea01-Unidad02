/*
Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y
10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup
para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el
programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de
"Vuelva a intentarlo"
*/

alert('Bienvenido!!! Veamos si puedes adivinar un numero entre 1 y 10');

numeroRandom = Math.floor(Math.random()* 10) + 1;

let entrada = parseFloat(prompt('Ingrese su predicción: '));
console.log(`Su predicción: ${entrada}`);

if(entrada === numeroRandom) {
    console.log('Buen trabajo, has adivinado el numero generado!!!');
} else {
    console.log(`No has adivinado, el numero era: ${numeroRandom} vuelve a intentarlo...`);
}
