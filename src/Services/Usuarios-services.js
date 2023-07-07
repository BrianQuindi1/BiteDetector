import sql from 'mssql';
import config from '../dbconfig.js';
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

}