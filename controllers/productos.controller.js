const connect = require("../db/db");

const listado = (req, res) => {
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

const obtenerPorId = (req, res) => {
  console.log(req.params);
  const { cod_product } = req.params;
  const sql = "SELECT * FROM productos WHERE cod_product = ?";
  connect.query(sql, [cod_product], (error, rows) => {
    if (error) {
      console.error("Database query error:", error);
      return res
        .status(500)
        .json({ error: "Intente más tarde", details: error.message });
    }

    if (rows.length === 0) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(rows[0]);
  });
};

const agregar = (req, res) => {
  const { nombre, apellido, num_doc } = req.body;

  const sql =
    "INSERT INTO clientes (nombre, apellido, num_doc) VALUES (?, ?, ?)";
  connect.query(sql, [nombre, apellido, num_doc], (error, result) => {
    console.log(result);
    if (error) {
      return res.status(500).json({ error: "Intente más tarde" });
    }

    const final = { ...req.body, id_clientes: result.insertId };

    res.status(201).json(final);
  });
};

module.exports = {
  listado,
  agregar,
  obtenerPorId,
};
