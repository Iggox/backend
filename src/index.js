const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8181);
//al usar el puerto 8080 la terminal me indicaba que ya estaba en uso, por tanto usé 8181

function leerPuerto() {
  console.log("hola desde el puerto " + app.get("port"));
}

app.listen(app.get("port"), leerPuerto());
