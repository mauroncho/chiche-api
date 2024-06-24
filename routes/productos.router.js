const express = require("express");
const router = express.Router();

const controller = require("../controllers/productos.controller");
router.get("/", controller.metodo);

module.exports = router;
