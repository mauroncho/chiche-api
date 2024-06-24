const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "mysql-mauroncho.alwaysdata.net",
  user: process.env.DB_USER || "mauroncho",
  password: process.env.DB_PASSWORD || "Don_chiche",
  database: process.env.DB_NAME || "mauroncho_don_chiche",
});

connection.connect((error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Conectado a la base de datos");
});

module.exports = connection;
