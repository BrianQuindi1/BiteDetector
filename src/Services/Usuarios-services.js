import sql from 'mssql';
import config from '../../dbconfig.js'
import Usuario from '../Models/Usuario.js';
export default class UsuariosServices{

    InsertarUsuarioNuevo= async (usuario) =>{
        let rowsAffected = 0;
        console.log('Estoy en: UsuariosServices.InsertarUsuarioNuevo(usuario)');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pMail',sql.VarChar,usuario.Mail)
            .input('pContraseña',sql.VarChar,usuario.Contraseña)
            .input('pNombre',sql.VarChar,usuario.Nombre)
            .query('INSERT [Usuario] ( [Mail], [Nombre], [Contraseña]) VALUES (@pMail,@pContraseña,@pNombre)')
            rowsAffected = result.rowsAffected
        }catch(error){
            console.log(error);

        }
    return rowsAffected;
    }
    InsertarContactoNuevo= async (contacto) =>{
        let rowsAffected = 0;
        console.log('Estoy en: UsuariosServices.InsertarContactoNuevo(contacto,usuario)');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pNombre',sql.VarChar,contacto.Nombre)
            .input('pNumero',sql.Int,contacto.Numero)
            .input('pIdUsuario',sql.VarChar,contacto.IdUsuario)
            .query('INSERT [Contacto] (IdUsuario,Nombre,Numero) VALUES (@pIdUsuario,@pNombre,@pNumero)')
            rowsAffected = result.rowsAffected
        }catch(error){
            console.log(error);

        }
    return rowsAffected;
    }
    DeleteUsuario = async (id) =>{
        let rowsAffected=0;
        console.log('estoy en UsuarioService deleteUsuario');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request().input('pId', sql.Int, id)
                         .query('DELETE FROM Usuario WHERE Id = @pId')
            return rowsAffected;
        } catch(error) {
            console.log(error);
        }

    }

    DeleteContacto = async (id) =>{
        let rowsAffected=0;
        console.log('estoy en UsuarioService deleteContacto');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request().input('pId', sql.Int, id)
                         .query('DELETE FROM Contacto WHERE Id = @pId')
            return rowsAffected;
        } catch(error) {
            console.log(error);
        }

    }


    //de a partir de aca es el login
    login = async (usuario) => {
        //no tiene ningun expiration date porque no se si lo tiene que tener.
        let returnEntity=null;
        let rowsAffected;
        returnEntity= this.getByUsernamePassword(usuario.UserName, usuario.Password)
        if(returnEntity!=null){
            if ((returnEntity.Token==null)||(returnEntity.Token.ExpirationDate==null)){
                console.log("el token esta en null");
                rowsAffected = await this.generateTokenById(returnEntity.Id);
            }else{
                console.log ("estan los datos");
                rowsAffected = await this.refreshTokenById(returnEntity.Id, returnEntity.Token, expirationDate); // verificar si el token y el expiration date estan bien
            }
            if(rowsAffected > 0){
                returnEntity = await this.getByUsernamePassword(usuario.UserName, usuario.Password);
            }
        }
        
     return returnEntity;       
}

    getByUsernamePassword = async (userName, password)=> {
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request().input('pUserName', sql.VarChar, userName).input('pPassword', sql.VarChar, password)
                                    .query(`SELECT * FROM Usuarios where UserName = @pUserName AND Password = @pPassword`);
            returnEntity=result.recordset[0];
        } catch (error) {
            console.log(error); // aca tiene que ir otra cosa que use el log error
        }
        return returnEntity;
    }


    generateTokenById = async (id)=>{
        let rowsAffected = 0;
        let token = crypto.randomUUID();
        //let expirationDate = this.addMinutes(15, new Date());

        try{
            //rowsAffected = await this.refreshTokenById(id, token, expirationDate);
            rowsAffected = await this.refreshTokenById(id, token);
        }
        catch(error){
            logHelper.logError(`UsuarioService-->generateTokenById`, error);
        }
     return rowsAffected;
    }


    refreshTokenById = async (id, token) => {
        let rowsAffected = 0;      

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pToken', sql.VarChar, token)
            .input('pId', sql.Int, id)
                                    .query(`UPDATE Usuarios SET Token= @pToken WHERE Id = @pId`);
            rowsAffected=result.rowsAffected;
        } catch (error) {
            console.log(error); // aca tiene que ir otra cosa que use el log error
        }
        return rowsAffected;
    }



}