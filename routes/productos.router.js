const express = require("express");
const router = express.Router();

const controller = require("../controllers/productos.controller");
router.get("/", controller.listado);
router.get("/:id", controller.obtenerPorId);
router.post("/", controller.agregar);

module.exports = router;
