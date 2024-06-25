const express = require("express");
const router = express.Router();

const controller = require("../controllers/productos.controller");
router.get("/", controller.listado);
router.get("/:cod_product", controller.obtenerPorId);
router.post("/", controller.agregar);
router.put("/:cod_product", controller.actualizar);
module.exports = router;
