
/*
Filtrar números impares:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosImpares =

Filtrar números menores que 0:
const numeros = [-10, -5, 0, 5, 10, 15];
const menoresQueCero 

Filtrar números que sean múltiplos de 5:
const numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const multiplosDeCinco =

Filtrar números mayores o iguales a 10 y menores o iguales a 20:
const numeros = [5, 10, 15, 20, 25, 30];
const entre10y20 =


Filtrar números con parte decimal (números flotantes):
const numeros = [1.5, 2, 2.5, 3, 3.5, 4];
const numerosFlotantes = 


Filtrar palabras que contengan más de una 'a':
const palabras = ["banana", "apple", "avocado", "grape", "peach"];
const masDeUnaA

Filtrar palabras que sean palíndromos (se leen igual al derecho y al revés):
const palabras = ["level", "radar", "hello", "world", "madam"];
const palindromos

Filtrar palabras que tengan exactamente 3 letras:
const palabras = ["cat", "dog", "bird", "ant", "bee"];
const tresLetras

Filtrar palabras que no contengan vocales:
const palabras = ["sky", "try", "fly", "hello", "world"];
const sinVocales 


Filtrar palabras que contengan una letra repetida consecutivamente:
const palabras = ["book", "tree", "loop", "happy", "sad"];
const letraRepetida =


*/

import { type } from "os";
import { types } from "util";


//Filtrar números impares:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosImpares = numeros.filter( numero => numero % 2 !== 0)

console.log(numerosImpares)

//Filtrar números menores que 0:
const numerosDos = [-10, -5, 0, 5, 10, 15];
const menoresQueCero  = numerosDos.filter( numero => numero < 0)

console.log(menoresQueCero)

//Filtrar números que sean múltiplos de 5:
const numerosTres = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const multiplosDeCinco = numerosTres.filter( numero => numero % 5 === 0)

console.log(multiplosDeCinco)

//Filtrar números mayores o iguales a 10 y menores o iguales a 20:
const numerosCuatro = [5, 10, 15, 20, 25, 30];
const entre10y20 = numerosCuatro.filter( numero => numero >= 10 && numero <= 20)

console.log(entre10y20)

//Filtrar números con parte decimal (números flotantes):
const numerosCinco = [1.5, 2, 2.5, 3, 3.5, 4];
const numerosFlotantes = numerosCinco.filter( numero => numero.valueOf)

console.log(numerosFlotantes)

