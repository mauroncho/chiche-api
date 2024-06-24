const connect = require("../db/db");

const metodo = (req, res) =>{
     const sql = "SELECT * FROM productos";
     connect.query(sql, (error, rows) => {
        if(error){
            return res.status(500).json({ error: "Intente mas tarde"});
        }
        res.json(rows)
    });
};

module.exports = metodo;