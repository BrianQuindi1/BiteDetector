import sql from "mssql";
import config from "../../dbconfig.js";

export default class HistorialServices {
  getById = async (id) => {
    let returnEntity = null;
    console.log("Estoy en: HistorialServices.GetById(id)");
    try {
      let pool = await sql.connect(config);
      let result = await pool
        .request()
        .input("pId", sql.Int, id)
        .query("SELECT * FROM Historial  INNER JOIN Picadura on Historial.IdPicadura=Picadura.IdPicadura INNER JOIN Insecto on Picadura.IdInsecto=Insecto.IdInsecto  WHERE idUsuario = @pId ");
      returnEntity = result.recordsets[0][0];
    } catch (error) {
      console.log(error);
    }
    return returnEntity;
  };
  
  getAll = async () => {
    let returnEntity = null;
    console.log("Estoy en: HistorialServices.GetById(id)");
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
        .query("SELECT * FROM Historial ");
      returnEntity = result.recordset;
    } catch (error) {
      console.log(error);
    }
    return returnEntity;
  };
  InsertarAlHistorial = async (IdPicadura, IdUsuario) => {
    let rowsAffected = 0;
    console.log(
      "Estoy en: UsuariosServices.InsertarAlHistorial(IdPicadura,IdUsuario)"
    );
    console.log(IdPicadura + "Us" + IdUsuario);
    try {
      let pool = await sql.connect(config);
      let result = await pool
        .request()
        .input("pIdPicadura", sql.Int, IdPicadura)
        .input("pIdUsuario", sql.Int, IdUsuario)
        .query(
          "INSERT [historial] (IdPicadura,IdUsuario) VALUES (@pIdPicadura,@pIdUsuario)"
        );
      rowsAffected = result.rowsAffected;
    } catch (error) {
      console.log(error);
    }
    return rowsAffected;
  };
}
