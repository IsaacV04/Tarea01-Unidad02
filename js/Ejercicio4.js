//Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a.
alert('Bienvenido!!, Ingresa una frase y veamos cuantas "a" tiene \nPrecione aceptar');

let frase = prompt('Igrese una frase cualquiera: ');
console.log(`La frase: ${frase}`);

let fraseArreglo = frase.toLowerCase();

let contador = 0;
for(let i=0; i<frase.length; i++) {
    if(fraseArreglo[i] == 'a' || fraseArreglo[i] == 'á') {
        contador++;
    }
}

console.log(`La letra "A" aparece ${contador} veces en la frase: ${frase}`);
alert(`La letra "A" aparece ${contador} veces en la frase: ${frase}`);