import { TablaAlumnos } from "../models/alumno.models.js";

TablaAlumnos.create( {
    nombre: "jh",
    calificacion: 5,
    materia: "matematicas"
})

export const test = () => {console.log("si se esta llamando al controlador correctamente")}