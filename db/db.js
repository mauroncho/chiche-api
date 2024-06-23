const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "mysql-mauroncho.alwaysdata.net",
  user: "mauroncho_don_chiche",
  password: "Don_chiche",
  database: "mauroncho_don_chiche",
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  }
  console.log("Conectado a la base de datos");
});

module.exports = connection;
