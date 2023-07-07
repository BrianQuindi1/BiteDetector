import { Router} from 'express';
import PicadurasServices from '../Services/Picaduras-services';

const router = Router();
const picaduraService = new PicadurasServices();



router.get('/:id', async (req, res) =>{
console.log("Estoy en picadura controller get by id");
let respuesta;

const picadura = await pizzaService.getPicaduraById(req.params.id);
if(picadura!=null) {

    respuesta = res.status(200).json(picadura);
}
else{
    respuesta = res.status(404).send("no se encontro la picadura"); 
}
return respuesta;

});



router.post('', async (req, res) =>{
console.log('Estoy en picadura controller insert');

const picadura = await picaduraService.
});