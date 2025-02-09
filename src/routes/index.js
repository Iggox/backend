const { Router } = require("express");
const router = Router();

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

router.post("/rutaPost", (req, res) => {
  console.log("Enviada una petición POST");
  res.send("Hola, soy la 1era ruta POST");
});

module.exports = router;
