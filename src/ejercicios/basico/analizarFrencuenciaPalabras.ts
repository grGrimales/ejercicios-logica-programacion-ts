/*

Escribe una función en TypeScript llamada analizarFrecuenciaPalabras que tome una cadena de texto como entrada y devuelva un objeto donde las claves sean las palabras y los valores sean el número de veces que cada palabra aparece en la cadena. Ignora la diferencia entre mayúsculas y minúsculas.

analizarFrecuenciaPalabras("Hola mundo hola") 
// Debería devolver { hola: 2, mundo: 1 }

analizarFrecuenciaPalabras("   Hola    mundo   hola ") 
// Debería devolver { hola: 2, mundo: 1 }

analizarFrecuenciaPalabras("¡Hola, mundo! Hola... Mundo.") 
// Debería devolver { hola: 2, mundo: 2 }


{

"hola": 2

} = { [key: strin] : number }
*/

const analizarFrecuenciaPalabras = (texto: string): { [key: string] : number } => {



    const frecuenciaPalabras: {
        [key: string] : number 
    } = {};
    
    // EL texto no sea una cadena vacia.
    if( texto.trim() === '' )  throw new Error('El texto no debe estar vacio');
    
    
    
    const arraysPalabras = texto
    .toLowerCase()
    .replace(/[^\w\s]/g,'') 
    .split(' ')
    .filter(palabra => palabra !== '');
    
    
    // cambiar por un reduce
    arraysPalabras.forEach( palabra => {
    
        if(frecuenciaPalabras[palabra]) {
            frecuenciaPalabras[palabra]++;
        } else {
            frecuenciaPalabras[palabra] = 1;
        }
    });
    
    
    // { hola: 1}
    // { hola: 1 , mundo: 1}
    // { hola: 1 , mundo: 1, otra: 1}
    // { hola: 1 , mundo: 1, otra: 1, cosa: 1}
    // { hola: 2 , mundo: 1, otra: 1, cosa: 1}
    
    return frecuenciaPalabras;
    
    }
    
    
    console.log(analizarFrecuenciaPalabras('hola, mundo!!     otra    cosa hola'));