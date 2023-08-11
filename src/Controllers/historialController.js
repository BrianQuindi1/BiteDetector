import { Router } from 'express';
import HistorialServices from '../Services/Historial-services.js';


const router = Router();
const historialServices = new HistorialServices();
router.get('/:id', async (req, res) => {
    console.log("Estoy en historial controller get by id");
    let respuesta;

    const historial = await historialServices.getById(req.params.id);
    if (historial != null) {

        respuesta = res.status(200).json(historial);
    }
    else {
        respuesta = res.status(404).send("no se encontro el usuario");
    }
    return respuesta;

});

export default router;
