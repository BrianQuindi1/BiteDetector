import sql from 'mssql';
import config from '../../dbconfig.js'


export default class ContactosServices{
    getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: ContactosServices.GetById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input('pId', sql.Int, id)
                                    .query('SELECT * FROM Contacto WHERE idUsuario = @pId');
            returnEntity = result.recordsets[0][0];

        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    DeleteContacto = async (id) => {
        let rowsAffected = 0;
        console.log('estoy en ContactosServices deleteContacto');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM Contacto WHERE Id = @pId')
            return rowsAffected;
        } catch (error) {
            console.log(error);
        }

    }
    InsertarContactoNuevo = async (contacto) => {
        let rowsAffected = 0;
        console.log('Estoy en: Contacto.InsertarContactoNuevo(contacto,usuario)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.VarChar, contacto.Nombre)
                .input('pNumero', sql.Int, contacto.Numero)
                .input('pIdUsuario', sql.VarChar, contacto.IdUsuario)
                .query('INSERT [Contacto] (IdUsuario,Nombre,Numero) VALUES (@pIdUsuario,@pNombre,@pNumero)')
            rowsAffected = result.rowsAffected
        } catch (error) {
            console.log(error);

        }
        return rowsAffected;
    }

}