import { max } from '@tensorflow/tfjs';
import sql from 'mssql';
import config from '../../dbconfig.js'


export default class InsectoService{
    getByName = async (nombre) => {
        
        let returnEntity = null;
        console.log('Estoy en: InsectoService.GetByName(nombre)');
        console.log('El nombre que me esta llegandoe es: ', nombre);
        try {
            console.log(`Executing SQL query: SELECT IdInsecto FROM Insecto WHERE Nombre = @pNombre`);
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.VarChar, nombre)
                .query(`SELECT IdInsecto FROM Insecto WHERE Nombre = @pNombre`);
                
            returnEntity = result.recordsets[0];
            console.log('Query result:', result);
            console.log('Return entity:', returnEntity);
        } catch (error) {
            console.error('Error executing SQL query:', error);
        }
    }
   
    }
