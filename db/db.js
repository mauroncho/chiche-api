const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "XXXX",
  password: "123456",
  database: "XXXX",
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  }
  console.log("Conectado a la base de datos");
});

module.exports = connection;
