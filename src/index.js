//Módulos
const express = require("express");
const app = express();
//importamos los módulos de express y creamos una constante para guardar en ella los módulos los constructores y demás
const morgan = require("morgan");
//módulo que nos facilita el testeo ya que devuelve varios datos: el tipo de petición, tiempo de respuesta, la ruta, el estado mediante códigos como 200, 404,  etc
//const cors = require("cors");

//Configuración
app.set("port", process.env.PORT || 8181);
//configurar el puerto principal, el 8181 (o 8080 normalmente) es nuestro local host o "espacio" local
//el process.env.PORT es para que al subirlo a un host (desplegarlo) se configure automaticamente
//al usar el puerto 8080 la terminal me indicaba que ya estaba en uso, por tanto opté por el 8181 por ejemplo
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
//dependiendo del formato que usemos dentro de morgan("") nos mostrará más o menos información relacionada a la petición del server
//common por ejemplo muestra la fecha y hora de la petición, cosa que dev no hace
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(cors());

app.listen(app.get("port"), () => {
  console.log("hola desde el puerto " + app.get("port"));
});

//Routes
app.use(require("./routes/index"));
//llama al módulo para que funcione
