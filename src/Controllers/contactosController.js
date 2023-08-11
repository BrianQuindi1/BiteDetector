import { Router } from 'express';
import ContactosServices from '../Services/Contactos-services.js';



const router = Router();
const contactosServices = new ContactosServices();
router.get('/:id', async (req, res) => {
    console.log("Estoy en contactos controller get by id");
    let respuesta;

    const contacto = await contactosServices.getById(req.params.id);
    if (contacto != null) {

        respuesta = res.status(200).json(contacto);
    }
    else {
        respuesta = res.status(404).send("no se encontro el usuario");
    }
    return respuesta;

});
router.post('/crearContacto', async(req,res)=>{
    let svc = new UsuariosServices();
   let cuerpo=req.body
   console.log(cuerpo);
    let respuesta = await svc.InsertarContactoNuevo(req.body);
    return res.send(respuesta);
});


router.delete('/eliminarContacto/:id', async(req, res) =>{
let svc = new UsuariosServices();
let respuesta = await svc.DeleteContacto(req.params.id);
return res.status(200).json(respuesta);
});


export default router;

