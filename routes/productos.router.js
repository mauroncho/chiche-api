const express = require("express");
const router = express.Router();

const controller = require("../controllers/productos.controller");
router.get("/", controller.metodo);
router.post("/", controller.agregar);

module.exports = router;
