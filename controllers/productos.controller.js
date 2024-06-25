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

// const agregar = (req, res) => {
//   const { cod_product, nombre, stock, precio, cod_categoria, id_clientes } =
//     req.body;

//   const sql =
//     "INSERT INTO productos (cod_product, nombre, stock, precio,  cod_categoria, id_clientes) VALUES (?, ?, ?, ?, ?, ?)";
//   connect.query(
//     sql,
//     [cod_product, nombre, stock, precio, cod_categoria, id_clientes],
//     (error, result) => {
//       console.log(result);
//       if (error) {
//         return res.status(500).json({ error: "Intente más tarde" });
//       }

//       const producto = { ...req.body };

//       res.status(201).json(producto);
//     }
//   );
// };

const agregar = (req, res) => {
  const { nombre, stock, precio, cod_categoria, id_clientes } = req.body;

  // Asegurarse de que todos los campos necesarios estén presentes
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

module.exports = {
  listado,
  agregar,
  obtenerPorId,
};
