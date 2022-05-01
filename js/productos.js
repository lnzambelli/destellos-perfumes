/*---------------------------------------------------
OBTENGO LOS DATOS DEL JS EXTERNO DE PERFUMES
----------------------------------------------------*/
const listaPerfumesJSON = dataPerfumes || [] ;

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
        let {urlImg,nombre,fragancia,precio} = perfume
        nuevoPerfume.innerHTML = ` <div class="col" >
            <form class="card h-100 formCard">
            <img src=${urlImg} class="card-img-top w-50 mx-auto mt-2" alt="...">
            <div class="card-body">
            <p class="card-title text-center">${nombre}</p>
            <p class="card-text text-center">${fragancia}</p>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn rounded-pill btnAgregar">$${precio} <i class="bi bi-cart-plus"></i></button>
            </div>
            </div>
            </form> 
        </div>`;
        contenedorDeProductos.append(nuevoPerfume)
    }
}

/*---------------------------------------------------
FILTROS POR CATEGORIA
----------------------------------------------------*/
const filtrarPorCategoria = (categSeleccionada, idListado) =>{
   
    let contenedorDeProductos = document.getElementById(idListado);
    contenedorDeProductos.innerHTML = '';
    
    arrayFiltro = arrayPerfumes.filter(perf => perf.categoria == categSeleccionada);
    for(let perfume of arrayFiltro){
        let {urlImg,nombre,fragancia,precio} = perfume
        let nuevoPerfume = document.createElement('div', );
        nuevoPerfume.innerHTML = ` <div class="col" >
            <form class="card h-100 formCard">
            <img src=${urlImg} class="card-img-top w-50 mx-auto mt-2 " alt="...">
            <div class="card-body">
            <p class="card-title text-center">${nombre}</p>
            <p class="card-text text-center">${fragancia}</p>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn rounded-pill btnAgregar">$${precio} <i class="bi bi-cart-plus"></i></button>
            </div>
            </div>
            </form> 
        </div>`;
        contenedorDeProductos.append(nuevoPerfume);
    }
}

/*---------------------------------------------------------------
ELEMENTO OCULTO (NO UTILIZADO) BUSCADOR DE PRODUCTOS POR NOMBRE
----------------------------------------------------------------*/
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
        console.log("perfume no encontrado!!")
    }
}

/*---------------------------------------------------
GUARDO EN LOCAL STORAGE
----------------------------------------------------*/
let arrayCarrito = [];

const agregarAlCarrito= (perfume) =>{
    let nuevo = new Carrito(perfume[0], perfume[1], perfume[2])
    if (localStorage.getItem('arrCarrito')==null){
        arrayCarrito.push(nuevo);
        localStorage.setItem('arrCarrito', JSON.stringify(arrayCarrito))
    }else{
        arrayCarrito = JSON.parse(localStorage.getItem('arrCarrito'))
        arrayEncontrado = arrayCarrito.filter(dato => dato.nombre==nuevo.nombre);
        if(arrayEncontrado.length==0){
            arrayCarrito = JSON.parse(localStorage.getItem('arrCarrito'))
            arrayCarrito.push(nuevo)
            localStorage.setItem('arrCarrito', JSON.stringify(arrayCarrito))
        }
        else{
            arrayCarrito = JSON.parse(localStorage.getItem('arrCarrito'))
            arrayCarrito.forEach(dato =>{
                if(dato.nombre==nuevo.nombre){
                    dato.cantidad++;
                    dato.total = dato.cantidad * dato.precio;
                }
            })
            localStorage.setItem('arrCarrito', JSON.stringify(arrayCarrito))
        }
    }
    mensajeProdAgregadoAlCarrito()
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
FUNCION PARA OBTENER INFORMACION DEL PRODUCTO
----------------------------------------------------*/
function enviarDatos(e){
    e.preventDefault();
    //obtener el dato
    let dato = e.target;
    
   let prod = (dato.children[1].innerText);

   let newCartPerfume = prod.split('\n\n');

   agregarAlCarrito(newCartPerfume);
}