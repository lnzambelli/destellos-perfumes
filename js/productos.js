class Perfume{
    constructor(nombre, fragancia, precio, categoria){
        this.nombre = nombre.toUpperCase();
        this.fragancia = fragancia.toLowerCase();
        this.categoria = categoria.toUpperCase;
        this.precio = Number(precio);
        this.cantidad= 0;
    }
}

const arrayPerfumes = [];

const cargarArray= () =>{
    arrayPerfumes.push(new Perfume("Carolina Herrera", "212 men",16900,"Hombre"));
    arrayPerfumes.push(new Perfume("Loewe", "Agua Ella",13200,"Mujer"));
    arrayPerfumes.push(new Perfume("Loewe", "Aire",15675,"Mujer"));
    arrayPerfumes.push(new Perfume("Versace", "Bright Crystal",16320,"Mujer"));
    arrayPerfumes.push(new Perfume("Kaloo", "Kaloo blue",2450,"Niños"));
    arrayPerfumes.push(new Perfume("Calvin Klein", "Ck one",16900,"Unisex"));
}

//RRECORREMOS EL ARRAY Y MOSTRAMOS EN EL DOCUMENT
const mostrarArray =(arrayListado) => {
    for(let perfume of arrayListado){
        document.write(perfume.nombre+ " "+perfume.fragancia+": $"+perfume.precio+"<br>")
    }
}

const filtrarPorCategoria = (categSeleccionada) =>{
    arrayPerfumes.filter(perfu => perfu.categoria===categSeleccionada)
}

const buscarPorNombre = (valorIngresado) =>{
     arrayPerfumes.find(perfu => perfu.nombre.includes(valorIngresado))
}

const iniciarBusqueda = (nombreDePerfume) =>{
    const arrayEncontrados = arrayPerfumes.filter(perf => perf.nombre == nombreDePerfume.toUpperCase());
    if (arrayEncontrados.length > 0){
        document.write("LISTADO DE PERFUMES ENCONTRADOS: <br>")
        mostrarArray(arrayEncontrados)
    }else{
        alert("perfume no encontrado!!")
    }
    //MOSTRAMOS EN CONSOLA LA SUMA DE TODOS LOS PRECIOS ENCONTRADOS
    console.log("SUMATORIA: "+arrayEncontrados.reduce((acumulador, valor) =>acumulador + valor.precio, 0))
}

/*---------------------------------------------------
CARRITO DE COMPRA
----------------------------------------------------*/

const arrayCarrito = [];

const agregarAlCarrito= (perfume) =>{
    //condicion: si existe el producto sumo cant++ sino lo agrego
    this.arrayCarrito.push(perfume)
}

const obtenerPrecioTotal = () =>{
    const total = arrayCarrito.reduce((accumulator, curValue) =>accumulator + curValue.precio, 0)
}

const eliminarPerfumeDelCarrito = (perfAEliminar) =>{
    arrayCarrito = arrayCarrito.filter(perfu => perfu.nombre != perfAEliminar)
}

const confirmarCompra = () =>{
    alert("Gracias por su compra")
}


//EJECUTAMOS LOS METODOS
cargarArray();
const perfumeIngresado = prompt("Ingrese un nombre")
iniciarBusqueda(perfumeIngresado)
