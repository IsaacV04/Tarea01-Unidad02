//Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.
alert('Bienvenido!!, Ingresa una frase y veamos cuantas veces aparece cada vocal \nPrecione aceptar');

let frase = prompt('Igrese una frase cualquiera: ');
console.log(`La frase: ${frase}`);

let fraseArreglo = frase.toLowerCase();
let contadorA = 0;
for(let i=0; i<frase.length; i++) {
    if(fraseArreglo[i] == 'a' || fraseArreglo[i] == 'á') {
        contadorA++;
    }
}

let contadorE = 0;
for(let i=0; i<frase.length; i++) {
    if(fraseArreglo[i] == 'e' || fraseArreglo[i] == 'é') {
        contadorE++;
    }
}

let contadorI = 0;
for(let i=0; i<frase.length; i++) {
    if(fraseArreglo[i] == 'i' || fraseArreglo[i] == 'í') {
        contadorI++;
    }
}

let contadorO = 0;
for(let i=0; i<frase.length; i++) {
    if(fraseArreglo[i] == 'o' || fraseArreglo[i] == 'ó') {
        contadorO++;
    }
}

let contadorU = 0;
for(let i=0; i<frase.length; i++) {
    if(fraseArreglo[i] == 'u' || fraseArreglo[i] == 'ú') {
        contadorU++;
    }
}
console.log(`En la frase: ${frase}
La letra "A" aparece ${contadorA} veces 
La letra "E" aparece ${contadorE} veces
La letra "I" aparece ${contadorI} veces
La letra "O" aparece ${contadorO} veces
La letra "U" aparece ${contadorU} veces`);
alert(`En la frase: ${frase}
La letra "A" aparece ${contadorA} veces 
La letra "E" aparece ${contadorE} veces
La letra "I" aparece ${contadorI} veces
La letra "O" aparece ${contadorO} veces
La letra "U" aparece ${contadorU} veces`);