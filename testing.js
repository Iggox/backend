//                                                                      PROBANDO COSAS, NO FUNCIONA
class Hosteleria {
  #mesas;
  #camareros;
  #cocineros;
  #precioMenu;
  constructor(mesas, camareros, cocineros, precioMenu) {
    this.mesas = mesas;
    this.camareros = camareros;
    this.cocineros = cocineros;
    this.precioMenu = precioMenu;
  }
  set mesas(Mesas) {
    this.#mesas = this.valoresCorrectos(Mesas, this.#mesas);
  }
  set camareros(Camareros) {
    this.#camareros = this.valoresCorrectos(Camareros, this.#camareros);
  }
  set cocineros(Cocineros) {
    this.#cocineros = this.valoresCorrectos(Cocineros, this.#cocineros);
  }
  set precioMenu(PrecioMenu) {
    this.#precioMenu = this.valoresCorrectos(PrecioMenu, this.#precioMenu);
  }
  atencionCliente() {
    if (this.#mesas > this.#camareros) {
      let Atencion = "ala";
      console.log(`${Atencion} atención al cliente. Pocos camareros.`);
    } else if (this.#mesas <= this.#camareros) {
      let Atencion = "Buena";
      console.log(`${Atencion} atención al cliente relación mesas/camareros.`);
    }
  }
  valoresCorrectos(param1, param2) {
    if (param1.constructor === Number) {
      param2 = param1;
      return param2;
    } else {
      console.log(`El valor dado no es un integer`);
    }
  }
  get asd() {
    return this.#mesas;
  }
}
class Bar extends Hosteleria {
  constructor(mesas, camareros, cocineros, precioMenu, metrosBarra) {
    super(mesas, camareros, cocineros, precioMenu);
    this.metrosBarra = metrosBarra;
  }
}
class Restaurante extends Hosteleria {
  constructor(mesas, camareros, cocineros, precioMenu, estrellasMichelin) {
    super(mesas, camareros, cocineros, precioMenu);
    this.estrellasMichelin = estrellasMichelin;
  }
}
class Burguer extends Hosteleria {
  constructor(mesas, camareros, cocineros, precioMenu, servicioDomicilio) {
    super(mesas, camareros, cocineros, precioMenu);
    this.servicioDomicilio = servicioDomicilio;
  }
  get atencionCliente() {
    if (this.mesas / 3 > this.cocineros) {
      return console.log(`Mala atención al cliente. Pocos cocineros.`);
    } else if (this.mesas / 3 <= this.cocineros) {
      return console.log(`Buena atención al cliente relación mesas/cocineros.`);
    }
  }
}

let establecimiento1 = new Bar(10, 10, 5, 12, 7);
let establecimiento2 = new Restaurante(10, 5, 3, 25, 1);
let establecimiento3 = new Burguer(15, 0, 6, 7, false);

console.log(" ");

console.log(establecimiento1.atencionCliente());

//                                                                      PROBANDO COSAS, NO FUNCIONA
