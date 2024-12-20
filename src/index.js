const express = require("express");
const app = express();
//importamos los módulos de express y creamos una constante para guardar en ella los módulos los constructores y demás

app.set("port", process.env.PORT || 8181);
//configurar el puerto principal, el 8181 (o 8080 normalmente) es nuestro local host o "espacio" local
//el process.env.PORT es para que al subirlo a un host (desplegarlo) se configure automaticamente
//al usar el puerto 8080 la terminal me indicaba que ya estaba en uso, por tanto opté por el 8181 por ejemplo

app.listen(app.get("port"), leerPuerto());

function leerPuerto() {
  console.log("hola desde el puerto " + app.get("port"));
}

//Routes
app.use(require("./routes/index"));
