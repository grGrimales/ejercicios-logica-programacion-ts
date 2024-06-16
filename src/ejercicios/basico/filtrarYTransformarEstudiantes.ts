
/*

Filtrar y Transformar una Lista de Estudiantes
Descripción:
Escribe una función en TypeScript llamada filtrarYTransformarEstudiantes que tome una lista de objetos de estudiantes 
y devuelva una lista de strings con los nombres de los estudiantes que tienen una nota mayor o igual a 7. La función debe
 filtrar los estudiantes por su nota y luego transformar el resultado en un array de strings que contengan los nombres de los estudiantes aprobados.

Detalles del Ejercicio:
Cada estudiante es representado por un objeto con las siguientes propiedades:

nombre: string
nota: number


const estudiantes = [
  { nombre: "Juan", nota: 6 },
  { nombre: "María", nota: 8 },
  { nombre: "Pedro", nota: 7 },
  { nombre: "Ana", nota: 9 },
  { nombre: "Luis", nota: 5 }
];


["María", "Pedro", "Ana"]



*/

interface Estudiante {
    nombre: string,
    nota: number
}

const filtrarYTransformarEstudiantes = (estudiantes: Estudiante[]) => {

    if (estudiantes.length === 0) return [];

    const result = estudiantes
        .filter(estudiante => estudiante.nota >= 7)
        .map(estudiante => estudiante.nombre)

    return result


}

const estudiantes = [
    { nombre: "Juan", nota: 6 },
    { nombre: "María", nota: 8 },
    { nombre: "Pedro", nota: 7 },
    { nombre: "Ana", nota: 9 },
    { nombre: "Luis", nota: 5 }
];

console.log(filtrarYTransformarEstudiantes(estudiantes))
console.log(filtrarYTransformarEstudiantes([]))
