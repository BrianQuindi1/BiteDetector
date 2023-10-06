import { Router } from 'express';
import Picadura from '../Models/Picadura.js';
import IApicaduraService from '../Services/IApicadura-service.js';
import PicadurasServices from '../Services/Picaduras-services.js';


const router = Router();
const IApicadura = new IApicaduraService();
const picaduraCon = new PicadurasServices()
router.post('', async (req, res) => {
    let cuerpo = req.body
    console.log("CUERPO: ");
    console.log(cuerpo);
    console.log("CUERPO: ", cuerpo);
    const inserto = await picaduraCon.insertPicadura(req.body); 
    const picadura = await picaduraCon.getPicaduraAgregada();
    console.log(picadura);
    console.log("Picadura:" + cuerpo);
    let respuesta = await IApicadura.detectarPicadura(cuerpo);
    console.log(respuesta);
    
    console.log("IDPICADURA:"+ picadura.IdPicadura);

    /*let NewPicadura = new Picadura({
        "IdPicadura": picadura.IdPicadura,
        "Foto": picadura.Foto,
        "Estado": respuesta.Estado,
        "idInsecto": respuesta.idInsecto,
        "Probabilidades": respuesta.Probabilidad,
    }
    )*/
    let NewPicadura = new Picadura();
    NewPicadura.IdPicadura=picadura.IdPicadura;
    NewPicadura.Foto=picadura.Foto
    NewPicadura.Estado=respuesta.Estado
    NewPicadura.IdInsecto=respuesta.Picadura
    NewPicadura.Probabilidades=respuesta.Probabilidad




    console.log(NewPicadura);

    const picaduraUpdate = await picaduraCon.updatePicadura(picadura.IdPicadura,NewPicadura)
    return res.send(respuesta);
});

export default router;