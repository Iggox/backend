const { Router } = require("express");
const router = Router();
let test = require("./../test");

//Raiz
router.get("/", (req, res) => {
  console.log("Aviso: alguien a accecido al servidor.");
  res.send(
    "¡Bienvenid@! Has accedido al servidor en desarrollo. Puedes ver las rutas disponibles en /rutas"
  );
});

router.get("/rutas", (req, res) => {
  console.log("Aviso: alguien a accecido rutas.");
  res.send(
    "Las rutas disponibles actualmente son: rutaGet, rutaGetConRouter, rutaGetConJSON"
  );
});

router.get("/rutaGet", (req, res) => {
  console.log("Aviso: alguien a accecido a rutaGet.");
  res.send("Hola, has accedido a la rutaGet");
});

router.get("/rutaGetConRouter", (req, res) => {
  console.log("Aviso: alguien a accecido a rutaGetConRouter.");
  res.send("Hola, has accedido a la rutaGetConRouter");
});

router.get("/rutaGetConJSON", (req, res) => {
  console.log("Aviso: alguien a accecido a rutaGetConJSON.");
  res.json({
    Title: "Hola, has accedido a la rutaGetConJSON",
    Párrafos: {
      Párrafo: [
        {
          Contenido:
            "Probando a establecer un JSON desde el mismo archivo routes.",
        },
        { Contenido: "Probablemente haya una forma más fácil de hacer esto." },
        { Contenido: "Por el momento sólo son pruebas." },
      ],
    },
  });
});

//Rutas POST
//Son distintas a las rutas get ya que estas traen consigo datos del usuario, normalmente provenientes de formularios
router.post("/rutaPost", (req, res) => {
  console.log("Enviada una petición POST");
  res.send("Hola, soy la 1era ruta POST");
});

router.post("/rutaPost2", (req, res) => {
  console.log("Aviso, se ha accedido a la 2da POST");
  res.send("Hola, soy la 2da ruta POST");
});

router.post("/rutaPostConJson", (req, res) => {
  console.log("Enviada una petición POST con JSON");
  res.json({
    Title: "Hola, has accedido a la rutaPostConJSON",
    Párrafos: {
      Párrafo: [
        {
          Contenido: "Estableciendo un JSON desde una ruta POST.",
        },
        { Contenido: "lorem ipsum etc etc etc" },
      ],
    },
  });
});

router.post("/rutaPostConBody", (req, res) => {
  console.log("Enviada una petición POST");
  console.log(req.body);
  /*res.json({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    sexo: req.body.sexo,
    nacimiento: req.body.nacimiento,
  });*/
  //res.send("Se han recibido todos los datos introducidos.");
  res.redirect("https://holamundo-backendnode.onrender.com/rutaPostConBody");
});

//probando con el módulo "test" importado
router.post("/rutaPostTest", (req, res) => {
  req.body = test.objeto1;
  console.log("Enviada una petición POST");
  console.log(req.body);
  res.send(test.objeto1);
  // res.send(test.clase);
  //
});

module.exports = router;
