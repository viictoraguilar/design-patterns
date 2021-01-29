//Patron constructor

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre
    this.email = email
  }
}

class Cliente extends Persona {
  constructor(nombre, email, empresa) {
    super(nombre,email)
    this.empresa = empresa
  }
}

const persona = new Persona('Victor','victor@correo.com')
console.log(persona)

const cliente = new Cliente('Hugo','cliente@correo.com','Avispa')

console.log(cliente)

// Ejemplo 2

class Mascota {
  constructor(nombre, color) {
    this.nombre = nombre 
    this.color = color
  }
}

class Perro extends Mascota {
  constructor(nombre, color, tamanio, sonido) {
    super(nombre, color, tamanio)
    this.sonido = sonido
  }
}

const perro = new Perro('Canela', 'cafe', 'Grande', 'Ladra')
console.log(perro)

class Gato extends Mascota {
  constructor(nombre,color, tamanio, come) {
    super(nombre, color, tamanio)
    this.come = come
  }
}

const gato = new Gato('Polvito','Blanco','chico', true)

console.log(gato)