import sql from 'mssql';
import config from '../../dbconfig.js'
import Usuario from '../Models/Usuario.js';
export default class UsuariosServices {

    InsertarUsuarioNuevo = async (usuario) => {
        let rowsAffected = 0;
        console.log(usuario);
        console.log('Estoy en: UsuariosServices.InsertarUsuarioNuevo(usuario)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pMail', sql.VarChar, usuario.Mail)
                .input('pPassword', sql.VarChar, usuario.Password)
                .input('pNombre', sql.VarChar, usuario.Nombre)
                .query('INSERT [Usuario] ( [Mail], [Nombre], [Password]) VALUES (@pMail,@pNombre,@pPassword)')
            rowsAffected = result.rowsAffected
        } catch (error) {
            console.log(error);

        }
        return rowsAffected;
    }
    InsertarContactoNuevo = async (contacto) => {
        let rowsAffected = 0;
        console.log('Estoy en: UsuariosServices.InsertarContactoNuevo(contacto,usuario)');
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
    DeleteUsuario = async (id) => {
        let rowsAffected = 0;
        console.log('estoy en UsuarioService deleteUsuario');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM Usuario WHERE Id = @pId')
            return rowsAffected;
        } catch (error) {
            console.log(error);
        }

    }

    DeleteContacto = async (id) => {
        let rowsAffected = 0;
        console.log('estoy en UsuarioService deleteContacto');
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


    //de a partir de aca es el login
    login = async (usuario) => {
        //no tiene ningun expiration date porque no se si lo tiene que tener.
        let returnEntity = null;
        let rowsAffected;
        returnEntity = await this.getByMailPassword(usuario.Mail, usuario.Password)
        console.log(returnEntity.Token);
        if (returnEntity != null) {
            if ((returnEntity.Token == null) || (returnEntity.ExpirationDate == null)) {
                console.log("Entra");
                rowsAffected = await this.generateTokenById(returnEntity.IdUsuario);
                console.log("el token esta en null");

                console.log(rowsAffected);
            } else {
                console.log("estan los datos");
                rowsAffected = await this.refreshTokenById(returnEntity.IdUsuario, returnEntity.Token, returnEntity.ExpirationDate); // verificar si el token y el expiration date estan bien
            }
            if (rowsAffected > 0) {
                returnEntity = await this.getByMailPassword(usuario.Mail, usuario.Password);
            }
        }

        return returnEntity;
    }

    getByMailPassword = async (mail, password) => {
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pMail', sql.VarChar, mail)
                .input('pPassword', sql.VarChar, password)
                .query(`SELECT * FROM Usuario where Mail = @pMail AND Password = @pPassword`);
            returnEntity = result.recordset[0];
        } catch (error) {
            console.log(error); // aca tiene que ir otra cosa que use el log error
        }
        return returnEntity;
    }
    
    addMinutes = (minutes, date) => {
        return new Date(date.getTime() + minutes * 60000);
    }

    generateTokenById = async (id) => {
        let rowsAffected = 0;
        let token = crypto.randomUUID();
        let expirationDate = this.addMinutes(15, new Date()); // Add expiration date here

        try {
            rowsAffected = await this.refreshTokenById(id, token, expirationDate);
        } catch (error) {
            logHelper.logError(`UsuarioService-->generateTokenById`, error);
        }
        return rowsAffected;
    }


    refreshTokenById = async (id, token, expirationDate) => {
        let rowsAffected = 0;

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pToken', sql.VarChar, token)
                .input('pExpirationDate', sql.DateTime, expirationDate)
                .input('pId', sql.Int, id)
                .query(`UPDATE Usuario SET Token= @pToken, ExpirationDate = @pExpirationDate WHERE idUsuario = @pId`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error); // aca tiene que ir otra cosa que use el log error
        }
        return rowsAffected;
    }



}