alert("Bienvenido a Compras.com.ar")

let productos = [
    {producto: "Manzana", precio: 570},
    {producto: "Banana", precio: 420},
    {producto: "Piña", precio: 830},
    {producto: "Pepino", precio: 600}
];

let eleccion
let sumaProductos = 0
let carrito = []
function suma(numero, multiplicacion){
    sumaProductos += productos[numero].precio * Number(multiplicacion)
    carrito.push(productos[numero].producto)

    return sumaProductos + carrito
}

while (eleccion !== "Listo") {
    eleccion = prompt(`Eliga qué producto desea comprar, si ya a terminado escriba 'Listo':
    Manzana
    Banana
    Piña
    Pepino`)

    let multiplicacion
    if (eleccion !== "Listo" || eleccion !== "Carrito") {
        multiplicacion = prompt("En que cantidad desea comprar el/la " + eleccion)
    }

    if (eleccion === "Manzana") {
        suma(0, multiplicacion)
    } else if (eleccion === "Banana") {
        suma(1, multiplicacion)
    } else if (eleccion === "Piña") {
        suma(2, multiplicacion)
    } else if (eleccion === "Pepino") {
        suma(3, multiplicacion)
    }
}

carrito.join(", ")

let eleccionFinal

while (eleccionFinal != "Listo") {
    eleccionFinal = prompt("Ya ha finalizado su eleccion, si desea ver su carrito escriba 'Carrito', si desea finalizar la compra escriba 'Listo'")
    if (eleccionFinal === "Carrito") {
        alert("Su carrito esta formado por " + carrito)
    } else if (eleccionFinal === "Listo") {
        alert("El precio de su compra es " + sumaProductos)
    }
}