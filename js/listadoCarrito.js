let miCarrito = JSON.parse(localStorage.getItem('arrCarrito')) || [] ;

let botonAbrirCarrito = document.getElementById('btnAbrirCarrito');
botonAbrirCarrito.onclick = ()=>{
    miCarrito.length!==0 ? mostrarCarrito(miCarrito) : mostrarMsjVacio(); 
    //mostrarCarrito(miCarrito);
    //obtenerCantidadProductos();
}

window.addEventListener('load', function() {
    mostrarCarrito(miCarrito)
    obtenerCantidadProductos()
});

const mostrarMsjVacio = () =>{
    botonVaciarCarrito.style.display = "none"
    let contenedorCarrito = document.getElementById('listaCarrito');
    contenedorCarrito.innerHTML = '';
    let nuevalista = document.createElement('li');
    nuevalista.innerHTML = ` <li class="list-group-item list-group-item-danger">No hay productos agregados</li>`;
    contenedorCarrito.appendChild(nuevalista);
}

const mostrarCarrito = (miCarrito) =>{
    botonVaciarCarrito.style.display = "hidden"
    let contenedorCarrito = document.getElementById('listaCarrito');
    contenedorCarrito.innerHTML = '';
    for(let cart of miCarrito){
        let nuevalista = document.createElement('li');
        nuevalista.innerHTML = ` <li class="list-group-item">${cart.cantidad} ${cart.nombre} ${cart.fragancia} $${cart.total}</li>`;
        contenedorCarrito.appendChild(nuevalista);
    }
    let total = obtenerPrecioTotal(miCarrito)
    let nuevalista = document.createElement('li');
    nuevalista.innerHTML = ` <li class="list-group-item list-group-item-danger">TOTAL: $${total}</li>`;
    contenedorCarrito.appendChild(nuevalista);
    obtenerCantidadProductos();
}

const obtenerCantidadProductos =() =>{
    let spanCantProd = document.getElementById('cantProductos');
    spanCantProd.innerText= miCarrito.length;
}

const obtenerPrecioTotal = (curValue) =>{
    return miCarrito.reduce((accumulator, curValue) =>accumulator + curValue.total, 0)
}

let botonVaciarCarrito = document.getElementById('btnVaciarCarrito');
botonVaciarCarrito.onclick = ()=>{ 
    localStorage.removeItem('arrCarrito')
    location.reload()
}