//Namespace

const torteriaApp = {}

torteriaApp.platillos = [
  {
    platillo: 'Torta de Jamón',
    precio: 25
  },
  {
    platillo: 'Torta Alemana',
    precio: 40
  },
  {
    platillo: 'Torta de Milaneza',
    precio: 45
  }
]

torteriaApp.funciones = {
  mostrarMenu: platillos => {
    console.log(`Bienvenidos a nuestro menú`)

    platillos.forEach((platillo, index) => {
      console.log(`${index} :  ${platillo.platillo} $${platillo.precio}`)
    })
  },
  ordernar: id => {
    console.log(`Tu pedido: ${torteriaApp.platillos[id].platillo} se está preparando`)
  },
  agregarPlatillo: (platillo,precio) => {
    const nuevo = {
      platillo,
      precio
    }

    torteriaApp.platillos.push(nuevo)
  }
}



torteriaApp.funciones.ordernar(1)

torteriaApp.funciones.agregarPlatillo('Torta especial', 50)
const {platillos} = torteriaApp
torteriaApp.funciones.mostrarMenu(platillos)