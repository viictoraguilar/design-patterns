//Singleton previene que no se creen muchas instancias de una misma clase

let instancia = null

class Persona{
  constructor(nombre,email) {
    if(!instancia) {
      this.nombre = nombre
      this.email = email
      instancia = this
    } else {
      return instancia
    }
  }
}

const persona = new Persona('Victor','correo@correo.com')
console.log(persona)

const persona2 = new Persona('Hugo', 'hugo@correo.com')
console.log(persona2)

let instanciaMascota = null

class Mascota {
  constructor(nombre, color, tipo) {
    if(!instanciaMascota) {
      this.nombre = nombre
      this.color = color
      this.tipo = tipo
      instanciaMascota = this
    } else {
      return instanciaMascota
    }
  }
}

const canela = new Mascota('Canela', 'cafe', 'perro')
console.log(canela)
const polvito = new Mascota('Polvito F','blanco','gato')
console.log(polvito)