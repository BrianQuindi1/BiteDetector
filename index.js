import express from "express";
import cors from "cors";

import UsuariosRouter from "./src/Controllers/usuariosController.js"
import PicadurasRouter from "./src/Controllers/picadurasController.js"
import HistorialRouter from './src/Controllers/historialController.js'
import IARouter from "./src/Controllers/IAcontroller.js"
import ContactoRouter from "./src/Controllers/contactosController.js"
const app= express();
const port =3000;
app.use(cors())

app.use(express.static('public'))
app.use(express.json());



app.use("/api/usuario", UsuariosRouter);
app.use("/api/picadura", PicadurasRouter);
app.use("/api/historial", HistorialRouter);
app.use("/api/contacto", ContactoRouter);
app.use("/api/IA", IARouter);

app.get('/', async(req,res)=>{
    res.json({ message: "Hola desde el servidor!" });
})
app.listen(port,()=>{
    console.log('example app listening on port '+ port)
})