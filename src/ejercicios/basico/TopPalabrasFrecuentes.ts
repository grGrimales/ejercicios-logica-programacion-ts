/*
Ejercicio: Contador de Palabras Más Frecuentes
Descripción:
Escribe una función en TypeScript llamada topPalabrasFrecuentes que tome una cadena de texto y un número n como entrada, y devuelva un array con las n palabras más frecuentes en la cadena. La función debe ignorar la diferencia entre mayúsculas y minúsculas y eliminar signos de puntuación.

Instrucciones:
Crea una función llamada topPalabrasFrecuentes.
La función debe tomar dos argumentos: una cadena de texto y un número n.
La función debe devolver un array con las n palabras más frecuentes en la cadena, ordenadas de más a menos frecuente.
Ignora las diferencias entre mayúsculas y minúsculas.
Usa expresiones regulares para eliminar los signos de puntuación.
Usa un objeto para almacenar la frecuencia de cada palabra.
Ordena las palabras por su frecuencia antes de devolver las n palabras más frecuentes.


topPalabrasFrecuentes("Hola hola mundo. Hola mundo mundo!", 2)
// Debería devolver ["hola", "mundo"]

topPalabrasFrecuentes("Un dos tres, un dos dos tres, un dos tres, cuatro cinco seis.", 3)
// Debería devolver ["dos" , "un",  "tres"]


*/

const topPalabrasFrecuentes = ( texto: string, n:number) =>{


    const frecuencia : { [key: string] : number} = {}

 const data =   texto   
    .toLowerCase()
    .replace( /[^\w\s]/g ,'') //     /[^\w\s]/g
    .split(' ')
    .filter( item => item !== '')
    

    data.forEach( item => {
        if(frecuencia[item]){
            frecuencia[item] ++
        }else{
            frecuencia[item] = 1
        }
    })

    const dataModified = Object.entries(frecuencia)

    dataModified.sort((a, b) => b[1] - a[1])

    const dataFinally = dataModified.map(item => item[0])
    .slice(0, n)

   
    console.log( dataFinally)

    return dataFinally

}


topPalabrasFrecuentes("dos, tres, dos, tres, cuatro, cinco ", 2)