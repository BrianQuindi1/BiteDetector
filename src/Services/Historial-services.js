import sql from 'mssql';
import config from '../../dbconfig.js'


export default class HistorialServices{
    getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: HistorialServices.GetById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input('pId', sql.Int, id)
                                    .query('SELECT * FROM Historial WHERE idUsuario = @pId');
            returnEntity = result.recordsets[0][0];

        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

}