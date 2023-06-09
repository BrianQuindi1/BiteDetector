import express from "express";
import cors from "cors";
import UsuariosServices from "./Services/Usuarios-services.js";

const app= express();
const port =3000;
app.use(cors())

app.use(express.static('public'))
app.use(express.json());

app.post('/crearUsuario', async(req,res)=>{
    let svc = new UsuariosServices();
   let cuerpo=req.body
   console.log(cuerpo);
    let respuesta = await svc.InsertarUsuarioNuevo(req.body);
    res.send(respuesta);
})
app.post('/crearContacto', async(req,res)=>{
    let svc = new UsuariosServices();
   let cuerpo=req.body
   console.log(cuerpo);
    let respuesta = await svc.InsertarContactoNuevo(req.body);
    res.send(respuesta);
})
app.get('/', async(req,res)=>{
    res.json({ message: "Hola desde el servidor!" });
})
app.listen(port,()=>{
    console.log('example app listening on port '+ port)
})