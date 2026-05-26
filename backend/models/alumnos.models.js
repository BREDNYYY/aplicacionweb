import{ Schema, model} from "mongoose";

const EsquemaAlumnos = new Schema( {
    "alumno": String,
    "calificacion": Number,
    "materia": String
})

export const TablaAlumnos = new model("tabla de alumnos", EsquemaAlumnos)//creacion de tabla en la base de datos//
    