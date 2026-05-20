import{ Schema, model} from "mongoose";

const EsquemaAlumnos = new Schema( {
    nombre: String,
    calificacion: Number,
    materia: String 
})

export const TablaAlumnos = new model("tabla de alumnos reprobados", EsquemaAlumnos)//creacion de tabla en la base de datos//

