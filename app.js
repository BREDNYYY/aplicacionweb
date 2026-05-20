import mongoose from "mongoose"; // libreria para conectarse con mongo db//
import dotenv from "dotenv"; //dotenv para poder llamar mi archivo .env//
import express from "express"; //libreria para crear el servidores//
import cors from "cors"; //libreria para seguridad en el server//
import { test } from "./backend/controllers/alumno.controllers.js"; //importando el controlador para probarlo//

dotenv.config(); 
mongoose.connect(process.env.url_bd) 
.then(() => console.log("funciono la base de datos"))
.catch((error) => console.log("no jalo esta madre jhhhh"))

//creando un servidor local//
const app = express();
app.use(cors());

app.listen(4000, ()=> console.log("funciono el servidor"))

test();