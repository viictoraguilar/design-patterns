// Patron de clase
class Persona {
  constructor(nombre, email) {
    this.nombre = nombre
    this.email = email
  }
}

const persona = new Persona('Victor','victor@correo.com')
const don = new Persona('Don Gabs','don@correo.com')

console.log(persona)
console.log(don)

class Mascota {
  constructor(nombre, tipo, color) {
    this.nombre = nombre
    this.tipo = tipo
    this.color = color
  }
}

const canela = new Mascota('Canela','Perro','Café')
const polvoron = new Mascota('Polvito','Gato','Blanco')

console.log(canela)
console.log(polvoron)