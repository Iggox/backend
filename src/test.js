class Cliente {
  constructor(nombre, apellido, dni, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.telefono = telefono;
  }

  imprimirConstructor() {
    console.log(constructor);
  }
}

let cliente1 = new Cliente(
  "Ignacio Ariel",
  "González",
  "Y8378985F",
  "642125347"
);

module.exports = { clase: Cliente, objeto1: cliente1 };
