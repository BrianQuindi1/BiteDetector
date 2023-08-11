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

router.delete('/eliminarUsuario/:id', async(req, res) =>{
    let svc = new UsuariosServices();
    let respuesta = await svc.DeleteUsuario(req.params.id);
    return res.status(200).json(respuesta);
    });

router.post('/login', async (req, res) =>{
    let svc = new UsuariosServices();
    let entidad = req.body;
    let respuesta;
    let returnEntity;

    returnEntity = await svc.login(entidad);
    if (returnEntity != null) {
        returnEntity.Password = '*'.repeat(10);
        //respuesta = res.status(statusCodes.OK).json(returnEntity);
        respuesta = res.status(200).json(returnEntity);
    } else {
        //respuesta = res.status (statusCodes.NOT_FOUND).send('usuario inexistente');
        respuesta = res.status(404).send("usuario inexistente");
    }
});


export default router;