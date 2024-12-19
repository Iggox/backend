const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8181);
//al usar el puerto 8080 la terminal me indicaba que ya estaba en uso, por tanto usé 8181

app.listen(app.get("port"), leerPuerto());

function leerPuerto() {
  console.log("hola desde el puerto " + app.get("port"));
}

app.get("/rutaGet", function (req, res) {
  console.log("Hola desde la consola, alguien a accecido a la rutaGet");
  res.send("Hola, has accedido a la rutaGet");
});
