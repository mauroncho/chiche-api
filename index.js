const express = require("express");
const app = express();
const productosRouter = require("./routes/productos.router");
//deploy en https://chiche-api.vercel.app/

app.use(express.json());
app.use("/productos", productosRouter);

app.get("/", (req, res) => {
  res.send("Hola!!");
});

app.post("/", (req,res) => {
  res.send("POST");
});

app.put("/", (req,res) => {
  res.send("PUT");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));
