import { max } from '@tensorflow/tfjs';
import sql from 'mssql';
import config from '../../dbconfig.js'


export default class InsectoService{
    getByName = async (nombre) => {
        let returnEntity = null;
        console.log('Estoy en: InsectoService.GetByName(nombre)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input('pNombre', sql.VarChar, nombre)
                                    .query('SELECT IdInsecto FROM Insecto WHERE Nombre = @pNombre');
            returnEntity = result.recordsets[0][0]; //[0]
            console.log(returnEntity);
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
   
    }
