import { Router } from 'express';
import HistorialServices from '../Services/Historial-services.js';


const router = Router();
const historialServices = new HistorialServices();
router.get('/:id', async (req, res) => {
    console.log("Estoy en historial controller get by id");
    let respuesta;

    const historial = await historialServices.getById(req.params.id);
    console.log(historial);
    if (historial != null) {

        respuesta = res.status(200).json(historial);
    }
    else {
        respuesta = res.status(404).send("no se encontro el usuario");
    }
    return respuesta;

});
router.get('/', async (req, res) => {
    console.log("Estoy en historial controller getAll");
    let respuesta;

    const historial = await historialServices.getAll();
    if (historial != null) {
        respuesta = res.status(200).json(historial);
    }
    else {
        respuesta = res.status(404).send("algo fallo obteniendo el historial");
    }
    return respuesta;

});



router.post('/Agregar', async (req, res) => {
    console.log('Estoy en picadura controller insert');
    console.log(req.body);
    
    const picadura = await historialServices.InsertarAlHistorial(req.body.IdPicadura ,req.body.IdUsuario);

    return res.status(201).json(picadura);
});


export default router;

