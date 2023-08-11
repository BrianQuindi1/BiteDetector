import { Router } from 'express';
import Picadura from '../Models/Picadura';
import IApicaduraService from '../Services/IApicadura-service';
import PicadurasServices from '../Services/Picaduras-services';


const router = Router();
const IApicadura = new IApicaduraService();
const picaduraCon = new PicadurasServices()
router.post('', async (req, res) => {
       let cuerpo=req.body
       const picadura = await picaduraCon.insertPicadura(req.body);
       console.log(picadura);
        let respuesta = await IApicadura.detectarPicadura(picadura);
        const NewPicadura = new Picadura({
            IdPicadura: picadura.IdPicadura,
            Foto: picadura.Foto,
            Estado: respuesta.Estado,
            idInsecto: respuesta.idInsecto,
            Probabilidades: respuesta.Probabilidades,

}
        )
        
        const picaduraUpdate = await picaduraCon.updatePicadura(respuesta)
        return res.send(respuesta);
});

export default router;