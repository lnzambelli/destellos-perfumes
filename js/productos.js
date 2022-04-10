/*---------------------------------------------------
CLASES
----------------------------------------------------*/
class Perfume{
    constructor(nombre, fragancia, precio, categoria){
        this.nombre = nombre.toUpperCase();
        this.fragancia = fragancia.toLowerCase();
        this.categoria = categoria.toUpperCase();
        this.precio = Number(precio);
        this.urlImg = "./../img/foto-perfume.webp";
    }
}

class Carrito{
    constructor(nombre, fragancia, precio){
        this.nombre = nombre.toUpperCase();
        this.fragancia = fragancia.toLowerCase();
        this.precio = precio.replace('$','');
        this.cantidad = 1;
        this.total = Number(this.precio)*this.cantidad;
    }
}

/*---------------------------------------------------
CARGA DE PRODUCTOS 
----------------------------------------------------*/

const arrayPerfumes = [];

const cargarArray= () =>{
    arrayPerfumes.push(new Perfume("Carolina Herrera", "212 men",16900,"Hombre"));
    arrayPerfumes.push(new Perfume("Natura", "mad men",10900,"Hombre"));
    arrayPerfumes.push(new Perfume("Ntaaa", "aaaa",9500,"Hombre"));
    arrayPerfumes.push(new Perfume("Aaaaa", "bbbb",15000,"Hombre"));
    arrayPerfumes.push(new Perfume("Loewe", "Agua Ella",13200,"Mujer"));
    arrayPerfumes.push(new Perfume("Loewe aaa", "Aire",15675,"Mujer"));
    arrayPerfumes.push(new Perfume("Versace", "Bright Crystal",16320,"Mujer"));
    arrayPerfumes.push(new Perfume("Kaloo aa", "Kaloo blue",2450,"Niños"));
    arrayPerfumes.push(new Perfume("Kaloo bb", "Kaloo red",2950,"Niños"));
    arrayPerfumes.push(new Perfume("Kaloo cc", "Kaloo white",2000,"Niños"));
    arrayPerfumes.push(new Perfume("Kaloo dd", "Kaloo black",2900,"Niños"));
    arrayPerfumes.push(new Perfume("Calvin K", "Ck one",16900,"Unisex"));
    arrayPerfumes.push(new Perfume("Calvin Klein", "Ck one new",14900,"Unisex"));
    arrayPerfumes.push(new Perfume("Calvin Kl", "Ck one old",12500,"Unisex"));
    arrayPerfumes.push(new Perfume("Calvin", "Ck one bb",13600,"Unisex"));
}

/*---------------------------------------------------
RECORREMOS EL ARRAY Y MOSTRAMOS EN EL DOCUMENT
----------------------------------------------------*/
const mostrarArray =(arrayListado) => {
    let contenedorDeProductos = document.getElementById("listadoDeProductos");

    for(let perfume of arrayListado){
        let nuevoPerfume = document.createElement('div');
        nuevoPerfume.innerHTML = ` <div class="col" >
            <form class="card h-100 formCard">
            <img src=${perfume.urlImg} class="card-img-top w-50 m-auto" alt="...">
            <div class="card-body">
            <p class="card-title text-center">${perfume.nombre}</p>
            <p class="card-text text-center">${perfume.fragancia}</p>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn rounded-pill btnAgregar">$${perfume.precio} <i class="bi bi-cart-plus"></i></button>
            </div>
            </div>
            </form> 
        </div>`;
        contenedorDeProductos.append(nuevoPerfume)
    }
}

/*---------------------------------------------------
FILTROS
----------------------------------------------------*/

const filtrarPorCategoria = (categSeleccionada, idListado) =>{
   
    let contenedorDeProductos = document.getElementById(idListado);
    contenedorDeProductos.innerHTML = '';
    
    arrayFiltro = arrayPerfumes.filter(perf => perf.categoria == categSeleccionada);
    for(let perfume of arrayFiltro){
        let nuevoPerfume = document.createElement('div', );
        nuevoPerfume.innerHTML = ` <div class="col" >
            <form class="card h-100 formCard">
            <img src=${perfume.urlImg} class="card-img-top w-50 m-auto" alt="...">
            <div class="card-body">
            <p class="card-title text-center">${perfume.nombre}</p>
            <p class="card-text text-center">${perfume.fragancia}</p>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn rounded-pill btnAgregar">$${perfume.precio} <i class="bi bi-cart-plus"></i></button>
            </div>
            </div>
            </form> 
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
MENSAJE DE CONFIRMACION DE PROD AGREGADO AL CARRITO (CLICK)
----------------------------------------------------*/

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
let toastMensaje = document.getElementById('liveToast')
let toast = new bootstrap.Toast(toastLiveExample)

/*---------------------------------------------------
GUARDO EN LOCAL STORAGE
----------------------------------------------------*/

let arrayCarrito = [];

const agregarAlCarrito= (perfume) =>{
    let nuevo = new Carrito(perfume[0], perfume[1], perfume[2])
    if (localStorage.getItem('arrCarrito')==null){
        arrayCarrito.push(nuevo);
        localStorage.setItem('arrCarrito', JSON.stringify(arrayCarrito))
        toast.show();
    }else{
        arrayCarrito = JSON.parse(localStorage.getItem('arrCarrito'))
        arrayEncontrado = arrayCarrito.filter(dato => dato.nombre==nuevo.nombre);
        if(arrayEncontrado.length==0){
            arrayCarrito = JSON.parse(localStorage.getItem('arrCarrito'))
            arrayCarrito.push(nuevo)
            localStorage.setItem('arrCarrito', JSON.stringify(arrayCarrito))
            toast.show()
        }
        else{
            arrayCarrito = JSON.parse(localStorage.getItem('arrCarrito'))
            arrayCarrito.forEach(dato =>{
                if(dato.nombre==nuevo.nombre){
                    dato.cantidad++;
                    dato.total = dato.cantidad * dato.precio;
                    toast.show()
                }
            })
            localStorage.setItem('arrCarrito', JSON.stringify(arrayCarrito))
        }
    }
    location.reload()
    mostrarCarrito(arrayCarrito)
}


//EJECUTAMOS LOS METODOS
cargarArray();

mostrarArray(arrayPerfumes)

/*---------------------------------------------------
OBTENEMOS BOTONES PARA FILTRAR POR CATEGORIA
----------------------------------------------------*/

let botonBusquedaPorNombre = document.getElementById("btnBuscador");
botonBusquedaPorNombre.onclick = ()=>{ 
    let perfumeIngresado = document.getElementById("inputBuscador");
    buscarPorNombre(perfumeIngresado.value) 
}

let botonCategoriaMujer = document.getElementById("v-pills-mujer-tab");
botonCategoriaMujer.onclick = ()=>{ 
    let idListado = 'listadoDeProductosMujer';
    filtrarPorCategoria(botonCategoriaMujer.innerText, idListado) ;
    obtenerBotonesYEscuchar();
}

let botonCategoriaHombre = document.getElementById("v-pills-hombre-tab");
botonCategoriaHombre.onclick = ()=>{ 
    let idListado = 'listadoDeProductosHombre';
    filtrarPorCategoria(botonCategoriaHombre.innerText, idListado) ;
    obtenerBotonesYEscuchar();
}

let botonCategoriaNinos = document.getElementById("v-pills-ninos-tab");
botonCategoriaNinos.onclick = ()=>{ 
    let idListado = 'listadoDeProductosNinos';
    filtrarPorCategoria(botonCategoriaNinos.innerText, idListado) ;
    obtenerBotonesYEscuchar();
}

let botonCategoriaUnisex = document.getElementById("v-pills-unisex-tab");
botonCategoriaUnisex.onclick = ()=>{ 
    let idListado = 'listadoDeProductosUnisex';
    filtrarPorCategoria(botonCategoriaUnisex.innerText, idListado) ;
    obtenerBotonesYEscuchar();
}

function obtenerBotonesYEscuchar(){
    let dataPerfume = document.getElementsByClassName("formCard");

    for(let perfume of dataPerfume){
        perfume.addEventListener('submit',enviarDatos); 
    }
}


obtenerBotonesYEscuchar();

/*---------------------------------------------------
FUNCION PARA OBTENER INFORMACION DEL PROD
----------------------------------------------------*/

function enviarDatos(e){
    e.preventDefault();
    //obtener el dato
    let dato = e.target;
    
   let prod = (dato.children[1].innerText);

   let newCartPerfume = prod.split('\n\n');

   agregarAlCarrito(newCartPerfume);
}