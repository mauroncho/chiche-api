const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "mysql-mauroncho.alwaysdata.net",
  user: "mauroncho",
  password: "Don_chiche",
  database: "mauroncho_don_chiche",
});

connection.connect((error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Conectado a la base de datos");
});

module.exports = connection;
