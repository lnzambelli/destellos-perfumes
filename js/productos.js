class Perfume{
    constructor(nombre, fragancia, precio, categoria){
        this.nombre = nombre.toUpperCase();
        this.fragancia = fragancia.toLowerCase();
        this.categoria = categoria.toUpperCase();
        this.precio = Number(precio);
        this.urlImg = "./../img/foto-perfume.webp";
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
    let contenedorDeProductos = document.getElementById("listadoDeProductos");
    
    for(let perfume of arrayListado){
        let nuevoPerfume = document.createElement('div');
        nuevoPerfume.innerHTML = ` <div class="col" >
        <div class="card h-100" id="eliminado">
        <img src=${perfume.urlImg} class="card-img-top w-50 m-auto" alt="...">
        <div class="card-body">
        <h5 class="card-title text-center">${perfume.nombre}</h5>
        <p class="card-text text-center">${perfume.fragancia}</p>
        <div class="d-flex justify-content-center">
            <button type="button" class="btn rounded-pill">$${perfume.precio} <i class="bi bi-cart-plus"></i></button>
        </div>
        </div>
        </div> 
        </div>`;
        contenedorDeProductos.append(nuevoPerfume)
    }
}


const filtrarPorCategoria = (categSeleccionada) =>{

}

const buscarPorNombre = (nombreDePerfume) =>{
    const arrayEncontrados = arrayPerfumes.filter(perf => perf.nombre == nombreDePerfume.toUpperCase());
    if (arrayEncontrados.length > 0){
        let resultado = document.getElementById("resultadoFiltro");
        for(let aux of arrayEncontrados){
            let encontrados = document.createElement('li');
            encontrados.innerHTML = `<li>${aux.nombre} - ${aux.fragancia} - $ ${aux.precio} </li>`;
            resultado.append(encontrados);
        }
        //MOSTRAMOS LA SUMA DE TODOS LOS PRECIOS ENCONTRADOS
        const suma = arrayEncontrados.reduce((acumulador, valor) =>acumulador + valor.precio, 0);
        let sumatoria = document.getElementById("sumaBusqueda");
        sumatoria.innerText = `TOTAL: $ ${suma}`;

    }else{
        alert("perfume no encontrado!!")
    }

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

mostrarArray(arrayPerfumes)

let botonBusquedaPorNombre = document.getElementById("btnBuscador");
botonBusquedaPorNombre.onclick = ()=>{ 
    let perfumeIngresado = document.getElementById("inputBuscador");
    buscarPorNombre(perfumeIngresado.value) 
}
