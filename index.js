import express from "express";
import cors from "cors";

const app= express();
const port =3000;
app.use(cors())

app.use(express.static('public'))
app.use(express.json());

app.get('/', async(req,res)=>{
    res.json({ message: "Hola desde el servidor!" });
})
app.listen(port,()=>{
    console.log('example app listening on port '+ port)
})