import { TablaProductos } from "../models/productos.models.js";

TablaProductos.create( {
    "producto": "tijeras",
    "stock": 10,
    "precio": 15
})

TablaProductos.create( {
    "producto": "libreta",
    "stock": 5,
    "precio": 30
})

TablaProductos.create( {
    "producto": "sacapuntas",
    "stock": 15,
    "precio": 5
})

export const test = () => {console.log("si se esta llamando al controlador correctamente")}