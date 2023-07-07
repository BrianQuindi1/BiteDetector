import { Router} from 'express';
import UsuariosServices from '../Services/Usuarios-services.js'

const router = Router();
const usuariosService = new UsuariosServices();



router.post('/crearUsuario', async(req,res)=>{
    let svc = new UsuariosServices();
   let cuerpo=req.body
   console.log(cuerpo);
    let respuesta = await svc.InsertarUsuarioNuevo(req.body);
    return res.send(respuesta);
});
router.post('/crearContacto', async(req,res)=>{
    let svc = new UsuariosServices();
   let cuerpo=req.body
   console.log(cuerpo);
    let respuesta = await svc.InsertarContactoNuevo(req.body);
    return res.send(respuesta);
});

/* falta hacer el service delete para que funcione
router.delete('/eliminarContacto/:id', async(req, res) =>{
let svc = new UsuariosServices();
let respuesta = await svc.DeleteContacto(req.params.id);
return res.status(200).json(respuesta);
});
*/

export default router;