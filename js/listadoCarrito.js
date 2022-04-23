let miCarrito = JSON.parse(localStorage.getItem('arrCarrito')) || [] ;

let botonAbrirCarrito = document.getElementById('btnAbrirCarrito');
botonAbrirCarrito.onclick = ()=>{
    miCarrito = JSON.parse(localStorage.getItem('arrCarrito')) || [] ;
    miCarrito.length!==0 ? mostrarCarrito(miCarrito) : mostrarMsjVacio(); 
}

window.addEventListener('load', function() {
    mostrarCarrito()
});

const mostrarMsjVacio = () =>{
    botonVaciarCarrito.style.display = "none";
    botonConfirmarCarrito.style.display = "none"
    let contenedorCarrito = document.getElementById('listaCarrito');
    contenedorCarrito.innerHTML = '';
    let nuevalista = document.createElement('li');
    nuevalista.innerHTML = ` <li class="list-group-item list-group-item-danger">No hay productos agregados</li>`;
    contenedorCarrito.appendChild(nuevalista);
}

const mostrarCarrito = () =>{
    miCarrito = JSON.parse(localStorage.getItem('arrCarrito')) || [] ;
    botonVaciarCarrito.style.display = "hidden"
    botonConfirmarCarrito.style.display = "hidden"
    let contenedorCarrito = document.getElementById('listaCarrito');
    contenedorCarrito.innerHTML = '';
    for(let cart of miCarrito){
        let {cantidad, nombre, fragancia, total} = cart
        let nuevalista = document.createElement('li');
        nuevalista.innerHTML = ` <li class="list-group-item">${cantidad} ${nombre} ${fragancia} $${total}</li>`;
        contenedorCarrito.appendChild(nuevalista);
    }
    let total = obtenerPrecioTotal(miCarrito)
    let nuevalista = document.createElement('li');
    nuevalista.innerHTML = ` <li class="list-group-item list-group-item-danger">TOTAL: $${total}</li>`;
    contenedorCarrito.appendChild(nuevalista);
    obtenerCantidadProductos(miCarrito.length);
}

const obtenerCantidadProductos =(cantProd) =>{
    let spanCantProd = document.getElementById('cantProductos');
    spanCantProd.innerText= cantProd;
}

const obtenerPrecioTotal = (curValue) =>{
    return miCarrito.reduce((accumulator, curValue) =>accumulator + curValue.total, 0)
}

let botonVaciarCarrito = document.getElementById('btnVaciarCarrito');
botonVaciarCarrito.onclick = ()=>{ mensajeVaciarCarrito()}

let botonConfirmarCarrito =document.getElementById('btnConfirmarCarrito');
botonConfirmarCarrito.onclick = ()=>{ mensajeConfirmarCarrito() }