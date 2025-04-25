const { Router } = require("express");
const router = Router();
let test = require("./../test");
const OpenAI = require("openai");

//Raiz
router.get("/", (req, res) => {
  console.log("Aviso: alguien a accecido al servidor.");
  res.redirect("https://iggox.github.io/web_Frontend/");
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
    Contenido: "Probando a establecer un JSON desde el mismo archivo routes.",
  });
});

router.get("/rutaGetConBody", (req, res) => {
  console.log("Enviada una petición GET");
  console.log(req.body);
  /*res.json({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    sexo: req.body.sexo,
    nacimiento: req.body.nacimiento,
  });*/
  //res.send("Se han recibido todos los datos introducidos.");
  res.redirect("https://iggox.github.io/web_Frontend/");
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
  console.log(req.body);
  res.json({
    Title: "Hola, has accedido a la rutaPostConJSON",
    Contenido: "Estableciendo un JSON desde una ruta POST.",
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
  res.redirect("https://iggox.github.io/web_Frontend/");
});

router.post("/rutaPostConBody2", (req, res) => {
  console.log("Enviada una petición POST");
  console.log(req.body);
  /* funcionar funciona, si le doy el mismo nombre que el json que genero, me lo devuelve tal cual, pero el server tira error de algo
  res.json({
    nombre: req.body.nombre,
  });
  */
  //res.send("Se han recibido todos los datos introducidos.");
  res.send(req.body);
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

router.post("/rutaPOST_IA", (req, res) => {
  const openai = new OpenAI({
    apiKey:
      "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",
  });

  const completion = openai.chat.completions.create({
    model: "gpt-4.1",
    store: true,
    messages: [
      {
        role: "developer",
        content:
          "Eres una persona risueña, por lo que  a veces añadirás un jijiji a tus respuestas. " +
          req.body.comando,
      },
    ],
  });

  completion.then((result) => {
    res.send(result.choices[0]);
  });
});

module.exports = router;
