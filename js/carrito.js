class PerfumeCarrito extends Perfume{
    constructor(){
        super(),
        this.cantidad = 0
    }
}


const arrayPerfumesEnCarrito = [];

const obtenerPrecioTotal = () =>{
    const total = arrayPerfumesEnCarrito.reduce((accumulator, curValue) =>accumulator + curValue.precio, 0)
}

const eliminarPerfumeDelCarrito = (perfAEliminar) =>{
    arrayPerfumesEnCarrito = arrayPerfumesEnCarrito.filter(perfu => perfu.nombre != perfAEliminar)
}

const confirmarCompra = () =>{
    //
}