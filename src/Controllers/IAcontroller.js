import { Router } from 'express';
import Picadura from '../Models/Picadura.js';
import IApicaduraService from '../Services/IApicadura-service.js';
import PicadurasServices from '../Services/Picaduras-services.js';
import InsectoService from '../Services/Insecto-services.js';



const router = Router();
const IApicadura = new IApicaduraService();
const picaduraCon = new PicadurasServices()
const InsectoSrc = new InsectoService();
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
    const InfoInsecto = await InsectoSrc.getInsecto(respuesta.IdInsecto)
    console.log("Info Insecto:", InfoInsecto);
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
    NewPicadura.Foto=picadura.Foto;
    NewPicadura.Estado=respuesta.Estado;
    NewPicadura.IdInsecto=respuesta.IdInsecto;
    NewPicadura.Probabilidades=respuesta.Probabilidad;
    NewPicadura.Nombre=respuesta.Nombre;
    
    



    console.log(NewPicadura);

    const picaduraUpdate = await picaduraCon.updatePicadura(picadura.IdPicadura,NewPicadura)
    const Diagnostico ={
        IdPicadura:picadura.IdPicadura,
        Estado:respuesta.Estado,
        Probabilidad:respuesta.Probabilidad,
        Nombre:respuesta.Nombre,
        Recomendaciones:{SintomasGraves:InfoInsecto.SintomasGraves,SintomasLeves:InfoInsecto.SintomasLeves,Recomendaciones:InfoInsecto.Recomendaciones,MasInfo:InfoInsecto.MasInfo}

    }
    return res.send(Diagnostico);
});

export default router;