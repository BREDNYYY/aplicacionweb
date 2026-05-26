import { TablaAlumnos } from "../models/alumnos.models.js";

TablaAlumnos.create( {
    "alumno": "abner",
    "calificacion": 10,
    "materia": "calculo"
})

TablaAlumnos.create( {
    "alumno": "ivan",
    "calificacion": 90,
    "materia": "ingles"
})

TablaAlumnos.create( {
    "alumno": "jhosue",
    "calificacion": 85,
    "materia": "programacion"
})

TablaAlumnos.create( {
    "alumno": "omar",
    "calificacion": 85,
    "materia": "fisica"
})

export const test = () => {console.log("si se esta llamando al controlador correctamente")}