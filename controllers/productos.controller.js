const connect = require("../db/db");

const metodo = (req, res) => {
  const sql = "SELECT * FROM productos";
  connect.query(sql, (error, rows) => {
    if (error) {
      console.error("Database query error:", error);
      return res
        .status(500)
        .json({ error: "Intente más tarde", details: error.message });
    }
    res.json(rows);
  });
};

const agregar = (req, res) => {
  const {nombre, apellido, num_doc} = req.body;
  
  const sql = "INSERT INTO clientes (nombre, apellido, num_doc) VALUES (?, ?, ?)";
  connect.query(sql, [nombre, apellido, num_doc], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente más tarde" });
    }

    const final = { ...req.body, id_clientes: result.insertId};
   
    res.status(201).json(final);
  });
};


module.exports = {
  metodo,
  agregar,
};
