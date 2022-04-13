/*---------------------------------------------------
OBTENGO LOS DATOS DEL JSON DE PERFUMES
----------------------------------------------------*/
const listaPerfumesJSON = [
    { nombre: "Carolina Herrera",fragancia: "212 men",precio: 16900,categoria: "Hombre",urlImg:"./../img/productos/carolinaHerrera.webp"},
    { nombre: "Loewe",fragancia: "7 Loewe Anonimo",precio: 14500,categoria: "Hombre",urlImg:"./../img/productos/loewe.webp"},
    { nombre: "Armani",fragancia: "Acqua Di Gio",precio: 18600,categoria: "Hombre",urlImg:"./../img/productos/armani.webp"},
    { nombre: "Kenzo",fragancia: "Aqua",precio: 14000,categoria: "Hombre",urlImg:"./../img/productos/kenzo.webp"},
    { nombre: "Lanvin",fragancia: "A girl In Capri",precio: 12500,categoria: "Mujer",urlImg:"./../img/productos/lanvin.webp"},
    { nombre: "Chanel",fragancia: "Coco",precio: 17950,categoria: "Mujer",urlImg:"./../img/productos/chanel.webp"},
    { nombre: "Givenchy",fragancia: "Amarige",precio: 16800,categoria: "Mujer",urlImg:"./../img/productos/givenchy.webp"},
    { nombre: "Guerlain",fragancia: "Aqua Allegoria Rosa",precio: 9900,categoria: "Mujer",urlImg:"./../img/productos/guerlain.webp"},
    { nombre: "Tom Ford",fragancia: "Costa Azzurra",precio: 52700,categoria: "Unisex",urlImg:"./../img/productos/tomFord.webp"},
    { nombre: "Tommy Now",fragancia: "Them",precio: 10490,categoria: "Unisex",urlImg:"./../img/productos/TommyNow.png"},
    { nombre: "Dior",fragancia: "Cologne",precio: 9990,categoria: "Unisex",urlImg:"./../img/productos/dior.webp"},
    { nombre: "Davidoff",fragancia: "Cool Water",precio: 11750,categoria: "Unisex",urlImg:"./../img/productos/davidoff.webp"},
    { nombre: "Kaloo",fragancia: "Blue",precio: 2450,categoria: "Niños",urlImg:"./../img/productos/kaloo.webp"},
    { nombre: "Cacharel",fragancia: "Anais Anais",precio: 12100,categoria: "Niños",urlImg:"./../img/productos/cacharel.webp"},
    { nombre: "Mugler",fragancia: "Angel",precio: 14200,categoria: "Niños",urlImg:"./../img/productos/mugler.webp"},
    { nombre: "Burberry",fragancia: "Heroe",precio: 15500,categoria: "Niños",urlImg:"./../img/productos/Burberry.webp"}
]

/*
let request = new XMLHttpRequest();
request.open("GET", "../assets/perfumes.json", false);
request.send(null);
let listaPerfumesJSON = JSON.parse(request.responseText);
*/

/*---------------------------------------------------
CLASES
----------------------------------------------------*/
class Perfume{
    constructor(nombre, fragancia, precio, categoria,urlImg){
        this.nombre = nombre.toUpperCase();
        this.fragancia = fragancia.toLowerCase();
        this.categoria = categoria.toUpperCase();
        this.precio = Number(precio);
        this.urlImg = urlImg;
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
    for(let p of listaPerfumesJSON){
        arrayPerfumes.push(new Perfume(p.nombre,p.fragancia,p.precio,p.categoria,p.urlImg));
    }
    
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
            <img src=${perfume.urlImg} class="card-img-top w-50 m-auto " alt="...">
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
            <img src=${perfume.urlImg} class="card-img-top w-50 m-auto " alt="...">
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
    setTimeout(() => {
        location.reload()
    }, 1000);
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