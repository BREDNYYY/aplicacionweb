import { TablaEmpleados } from "../models/empleados.models.js";

TablaEmpleados.create( {
    "numero de empleado": "17",
    nombre: "omar",
    sueldo: "25000"
})

TablaEmpleados.create( {
    "numero de empleado": "18",
    nombre: "jhosue",
    sueldo: "30000"
})

export const test = () => {console.log("si se esta llamando al controlador correctamente")}