const cnx = require('./cnx');
const sql = require('mssql');

async function getEstudiantes() {
    try {
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('select * from Table_est');
        console.log(salida.recordset);
    } catch (err) {
        console.log(err);
    }
}
getEstudiantes();
module.exports = {
    getEstudiantes: getEstudiantes
}