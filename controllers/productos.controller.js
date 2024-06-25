const connect = require("../db/db");
//obtener listado de productos
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
//obtener un producto especifico segun su id
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
//agregar un producto a la db
const agregar = (req, res) => {
  const { nombre, stock, precio, cod_categoria, id_clientes } = req.body;

  if (!nombre || !stock || !precio || !cod_categoria || !id_clientes) {
    return res.status(400).json({ error: "Faltan campos requeridos" });
  }

  const sql =
    "INSERT INTO productos (nombre, stock, precio, cod_categoria, id_clientes) VALUES (?, ?, ?, ?, ?)";

  connect.query(
    sql,
    [nombre, stock, precio, cod_categoria, id_clientes],
    (error, result) => {
      if (error) {
        console.error("Error de consulta a la base de datos:", error);
        return res.status(500).json({ error: "Intente más tarde" });
      }

      const producto = {
        id: result.insertId,
        nombre,
        stock,
        precio,
        cod_categoria,
        id_clientes,
      };

      res.status(201).json(producto);
    }
  );
};

const actualizar = (req, res) => {
  const { cod_product } = req.params;
  const { nombre, stock, precio, cod_categoria, id_clientes } = req.body;

  if (!nombre || !stock || !precio || !cod_categoria || !id_clientes) {
    return res.status(400).json({ error: "Faltan campos requeridos" });
  }

  const sql =
    "UPDATE productos SET nombre = ?, stock = ?, precio = ?, cod_categoria = ?, id_clientes = ? WHERE cod_product = ?";

  connect.query(
    sql,
    [nombre, stock, precio, cod_categoria, id_clientes, cod_product],
    (error, result) => {
      if (error) {
        console.error("Error de consulta a la base de datos:", error);
        return res.status(500).json({ error: "Intente más tarde" });
      }
      const producto = { ...req.body, ...req.params };
      res.json(producto);
    }
  );
};
module.exports = {
  listado,
  agregar,
  obtenerPorId,
  actualizar,
};
