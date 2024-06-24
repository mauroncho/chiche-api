const express = require("express");
const app = express();

const productosRouter = require("./routes/productos.router");
app.use("/productos", productosRouter);

app.get("/", (req, res) => {
 res.send("Hola!!");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`https://chiche-api.vercel.app/${PORT}`));


