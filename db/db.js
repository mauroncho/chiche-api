const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "mysql-cami.alwaysdata.net",
  user: "cami_don_chiche",
  password: "vaquero",
  database: "cami_don_chiche",
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  }
  console.log("Conectado a la base de datos");
});

module.exports = connection;
