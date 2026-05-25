import{ Schema, model} from "mongoose";

const EsquemaEmpleados = new Schema( {
    "numero de empleado": String,
    nombre: String,
    sueldo: String
})

const EsquemaAlumnos = new Schema( {
    nombre: String,
    calificacion: Number,
    materia: String
})

export const TablaEmpleados = new model("tabla de empleados", EsquemaEmpleados)//creacion de tabla en la base de datos//

export const TablaAlumnos = new model("tabla de alumnos", EsquemaAlumnos)//creacion de tabla en la base de datos//

