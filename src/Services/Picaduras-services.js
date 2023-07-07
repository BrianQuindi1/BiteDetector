import sql from 'mssql';
import config from '../../dbconfig.js'

export default class PicadurasServices {
    insertPicadura = async (Picadura) => {
        let returnEntity = null;
        console.log('Estoy en: PicadurasServices.insertPicadura(Picadura)')
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pFoto', sql.VarChar, Picadura.Foto)
                .input('pEstado', sql.VarChar, Picadura.Estado)
                .input('pIdInsecto', sql.Int, Picadura.IdInsecto)
                .input('pProbabilidades', sql.Float, Picadura.Probabilidades)
                .query('INSERT INTO Picadura (Foto, Estado, IdInsecto, Probabilidades) VALUES(@pFoto, @pEstado, @pIdInsecto, @pProbabilidades)');
            returnEntity = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    updatePicadura = async (id, Picadura) => {
        let updateReturn = null;
        console.log('Estoy en: PicadurasServices.updatePicadura');
        console.log(Picadura);
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .input('pFoto', sql.VarChar, Picadura.Foto)
                .input('pEstado', sql.VarChar, Picadura.Estado)
                .input('pIdInsecto', sql.Int, Picadura.IdInsecto)
                .input('pProbabilidades', sql.Float, Picadura.Probabilidades)
                .query('UPDATE Picadura set Foto = @pFoto, Estado = @pEstado, IdInsecto = @pIdInsecto, Probabilidades = @pProbabilidades WHERE IdPicadura = @pId;');
            updateReturn = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return updateReturn;
    }

    deletePicaduraById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PicadurasServices.deletePicaduraById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM Picadura WHERE IdPicadura = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    getPicaduraById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PicadurasServices.getPicaduraById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM Picadura WHERE IdPicadura = @pId');
            returnEntity = result.recordsets[0][0];

        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}
