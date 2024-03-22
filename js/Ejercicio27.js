/*
Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
solo los números pares, pista: utilizar reduce().
*/
alert('Bienvenido!!! \nPrecione aceptar');

function obtenerNumerosPares(array) {
    return array.reduce((acumulador, numero) => {
        if (numero % 2 === 0) {
            acumulador.push(numero);
        }
        return acumulador;
    }, []);
}

let array = [];

let entrada = prompt('Ingrese cualquier cantidad de numeros separados por una coma (,): ');
let numeros = entrada.split(',');
console.log(entrada);

numeros.forEach(casilla => { array.push(casilla.trim())});

let numerosPares = obtenerNumerosPares(numeros);
console.log(numerosPares);
