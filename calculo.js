//Constructor

class zapatillas {
    constructor(marca, modelo, precio){
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio
    }
}


// Instanciar los objetos

const zapatilla1 = new zapatillas ("Nike","Air Force", 20000)
const zapatilla2 = new zapatillas ("Puma","Lamelo Ball", 30000)
const zapatilla3 = new zapatillas ("Adidas","Yeezy FOAM", 40000)
const zapatilla4 = new zapatillas ("Fila","Disruptor", 50000)
const zapatilla5 = new zapatillas ("New Balance","507", 60000)


// declaro el stock de las zapas
const stock = []
stock.push(zapatilla1, zapatilla2, zapatilla3, zapatilla4, zapatilla5)

// Menu para desplazarse

 function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
           1 - Agregar Zapatillas
           2 - Ordenar de mayor precio a menor
           3 - Consultar catálogo completo
           0 - Salir del menu`))
    
        switch(opcionIngresada){
            case 1:
                agregarZapas(stock)
            break
            case 2:
                ordenarMayorMenor(stock)
            break
            case 3:
                mostrarCatalogo(stock)
            break
            case 0:
                console.log("Gracias por utilizar nuestro servicio")
                salir = true
                return salir
            break
            default:
                console.log("Ingrese una opción correcta")
            break
        }
}


function agregarZapas(array)  {
    let nuevaMarca = prompt("Ingrese la marca de la nueva zapatilla")
    let nuevoModelo = prompt("Ingrese el nombre del modelo de la marca")
    let nuevoPrecio= prompt("Ingrese el monto del nuevo precio")

    const nuevaZapa = new zapatillas (nuevaMarca, nuevoModelo, nuevoPrecio)
    console.log(nuevaZapa)
    array.push(nuevaZapa)
 }

 function mostrarCatalogo(array){
    console.log("Las zapatillas disponibles son:")
    for(let elemento of array){
        console.log(elemento.marca, elemento.modelo, elemento.precio)
    }
}
function ordenarMayorMenor(array){
    const mayorMenor = [].concat(array)
    mayorMenor.sort((a,b)=> b.precio - a.precio)
    mostrarCatalogo(mayorMenor)
} 



preguntarOpcion()

 