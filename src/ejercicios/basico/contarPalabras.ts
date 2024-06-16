/*
Ejercicio: Contador de Palabras
Descripción:
Escribe una función en JavaScript llamada contarPalabras que tome una cadena de texto como entrada y devuelva el número de palabras en la cadena. Una palabra se define como cualquier secuencia de caracteres no vacía que está delimitada por espacios.

Instrucciones:
Crea una función llamada contarPalabras.
La función debe tomar un solo argumento, que es una cadena de texto.
La función debe devolver un número entero que representa el número de palabras en la cadena de texto.
Usa el método split de los strings para dividir la cadena en palabras.
Asegúrate de manejar correctamente los casos en los que la cadena de texto esté vacía o contenga solo espacios.



Ejemplo de entrada y salida:
contarPalabras("Hola mundo") // Debería devolver 2
contarPalabras("   Hola    mundo   ") // Debería devolver 2
contarPalabras("") // Debería devolver 0
contarPalabras("Una prueba más complicada con varias palabras") // Debería devolver 7

*/

//  export const contarPalabras = (texto: string) => {

//     let totalPalabras;

//     console.log(texto)

//     //Si la palabra existe devuelve cuantas palabras tiene



//     if (texto) {

//         totalPalabras = texto.split(texto.trim())

//         console.log( texto.split(texto.trim()))

//         console.log(totalPalabras.length)

//     } else if(texto){

//     } else if (texto == '') {
//         totalPalabras = 0
//         console.log(totalPalabras)

//     }

//     return totalPalabras;

// }


// //contarPalabras('Hola Grediana');
// //contarPalabras('')
// contarPalabras('Una prueba más complicada con varias palabras');


export const contarPalabras = (texto: string): number => {

    let totalPalabras = 0;

    if(texto.trim() == '') return totalPalabras;

    totalPalabras = texto
    .split(' ')
    .filter( palabra => palabra !== '')
    .length
  

    return totalPalabras 
}

console.log(contarPalabras('Hola mundo'));
console.log(contarPalabras(''));
console.log(contarPalabras('   '));


/*
metodos

trim
split(' ')
filter


propiedades

length

*/