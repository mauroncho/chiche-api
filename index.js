const express = require("express");
const app = express();
const productosRouter = require("./routes/productos.router");

app.use(express.json());
app.use("/productos", productosRouter);

app.get("/", (req, res) => {
  res.send("Hola!!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));
