class Perfume{
    constructor(codId, nombre, fragancia, precio, categoria){
        this.codId = codId;
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
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Carolina Herrera", "212 men",16900,"Hombre"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Natura", "mad men",10900,"Hombre"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Natura", "aaaa",9500,"Hombre"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Natura", "bbbb",15000,"Hombre"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Loewe", "Agua Ella",13200,"Mujer"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Loewe", "Aire",15675,"Mujer"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Versace", "Bright Crystal",16320,"Mujer"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Kaloo", "Kaloo blue",2450,"Niños"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Kaloo ", "Kaloo red",2950,"Niños"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Kaloo", "Kaloo white",2000,"Niños"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Kaloo ", "Kaloo black",2900,"Niños"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Calvin Klein", "Ck one",16900,"Unisex"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Calvin Klein", "Ck one new",14900,"Unisex"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Calvin Klein", "Ck one old",12500,"Unisex"));
    arrayPerfumes.push(new Perfume(arrayPerfumes.length,"Calvin Klein", "Ck one bb",13600,"Unisex"));
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


const filtrarPorCategoria = (categSeleccionada, idListado) =>{
    let arrayFiltro = [];
    let contenedorDeProductos = document.getElementById(idListado);
    contenedorDeProductos.innerHTML = '';
    
    arrayFiltro = arrayPerfumes.filter(perf => perf.categoria == categSeleccionada);
    for(let perfume of arrayFiltro){
        let nuevoPerfume = document.createElement('div', );
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
        contenedorDeProductos.append(nuevoPerfume);
    }
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

let botonCategoriaMujer = document.getElementById("v-pills-mujer-tab");
botonCategoriaMujer.onclick = ()=>{ 
    let idListado = 'listadoDeProductosMujer';
    filtrarPorCategoria(botonCategoriaMujer.innerText, idListado) ;
}

let botonCategoriaHombre = document.getElementById("v-pills-hombre-tab");
botonCategoriaHombre.onclick = ()=>{ 
    let idListado = 'listadoDeProductosHombre';
    filtrarPorCategoria(botonCategoriaHombre.innerText, idListado) ;
}

let botonCategoriaNinos = document.getElementById("v-pills-ninos-tab");
botonCategoriaNinos.onclick = ()=>{ 
    let idListado = 'listadoDeProductosNinos';
    filtrarPorCategoria(botonCategoriaNinos.innerText, idListado) ;
}

let botonCategoriaUnisex = document.getElementById("v-pills-unisex-tab");
botonCategoriaUnisex.onclick = ()=>{ 
    let idListado = 'listadoDeProductosUnisex';
    filtrarPorCategoria(botonCategoriaUnisex.innerText, idListado) ;
}
