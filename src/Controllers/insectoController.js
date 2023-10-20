
import InsectoService from '../Services/Insecto-services.js';


const router = Router();

const insectoSrc = new InsectoService();
router.get('/:id', async (req, res) => {
    console.log("Estoy en picadura controller get by id");
    let respuesta;

    const insecto = insectoSrc.getInsecto(req.params.id);
    if (insecto != null) {

        respuesta = res.status(200).json(insecto);
    }
    else {
        respuesta = res.status(404).send("no se encontro el insecto");
    }
    return respuesta;
});

export default router;