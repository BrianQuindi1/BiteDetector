import { Router } from 'express';
import PicadurasServices from '../Services/Picaduras-services.js';

const router = Router();
const picaduraService = new PicadurasServices();



router.get('/:id', async (req, res) => {
    console.log("Estoy en picadura controller get by id");
    let respuesta;

    const picadura = await picaduraService.getPicaduraById(req.params.id);
    if (picadura != null) {

        respuesta = res.status(200).json(picadura);
    }
    else {
        respuesta = res.status(404).send("no se encontro la picadura");
    }
    return respuesta;

});



router.post('', async (req, res) => {
    console.log('Estoy en picadura controller insert');

    const picadura = await picaduraService.insertPicadura(req.body);

    return res.status(201).json(picadura);
});

router.put('/:id', async (req, res) => {
    console.log('Estoy en picadura controller update');

    const picadura = await picaduraService.updatePicadura(req.body);

    return res.status(200).json(picadura);
}); 

router.delete('/:id', async (req, res) => {
    console.log('Estoy en picadura controller delete');

    const picadura = await picaduraService.deletePicaduraById(req.params.id);

    return res.status(200).json(picadura);
});

export default router;

