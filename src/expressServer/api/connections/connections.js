const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection(({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: "portfolio-test",
    port: "3306"

}));

mysqlConnection.connect( err => {
    if (err){
        console.log(`Error en db : ${err}`)
        return;
    }else {
        console.log(`db Ok!`)
    }
});

module.exports = mysqlConnection;
