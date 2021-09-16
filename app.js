let express = require("express");
let rutasProductos = require("./routes/productos");
let rutasMain = require("./routes/main")

let app = express();

app.listen(3000, () => console.log("EXITOSO"));

app.use("/productos", rutasProductos);
app.use("/", rutasMain);

