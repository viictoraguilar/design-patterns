function Vendedor(nombre) {
  this.nombre = nombre
  this.sala = null
}

Vendedor.prototype = {
  oferta: (articulo, precio) => {
    console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos con un precio de ${precio}`)
  },
  vendido: comprador => {
    console.log(`Vendido a ${comprador}`)
  }
}

function Comprador(nombre) {
  this.nombre = nombre
  this.sala = null
}

Comprador.prototype = {
  oferta: (cantidad, comprador) => {
    console.log(`${comprador.nombre} : ${cantidad}`)
  }
}

function Subasta() {
  let compradores = {}

  return {
    registrar: usuario => {
      compradores[usuario.nombre] = usuario
      usuario.sala = this
    }
  }
}

//Crear objetos
const victor = new Comprador('Victor')
const hugo = new Comprador('Hugo')
const vendedor = new Vendedor('Vendedor de Autos')
const subasta = new Subasta()

//Tienes que registrarlos
subasta.registrar(victor)
subasta.registrar(hugo)
subasta.registrar(vendedor)

vendedor.oferta('Mustang 66', 300)

victor.oferta(350, victor)
hugo.oferta(450, hugo)
victor.oferta(500, victor)
hugo.oferta(700, hugo)

vendedor.vendido('Hugo')