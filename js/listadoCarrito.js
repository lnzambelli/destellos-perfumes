let miCarrito = JSON.parse(localStorage.getItem('arrCarrito')) || [] ;

let botonAbrirCarrito = document.getElementById('btnAbrirCarrito');
botonAbrirCarrito.onclick = ()=>{
    miCarrito.length!==0 ? mostrarCarrito(miCarrito) : mostrarMsjVacio(); 
}

window.addEventListener('load', function() {
    mostrarCarrito(miCarrito)
    obtenerCantidadProductos()
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

const mostrarCarrito = (miCarrito) =>{
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
    
    Swal.fire({
        title: 'Esta seguro?',
        text: "No se podra recuperar los productos",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Vaciado!',
            'Los productos fueron eliminados',
            'success'
          )
          localStorage.removeItem('arrCarrito');
          setTimeout(() => {
            location.reload()
        }, 3000);
        }
      }) 
}

let botonConfirmarCarrito =document.getElementById('btnConfirmarCarrito');
botonConfirmarCarrito.onclick = ()=>{ 
    Swal.fire({
        title: 'Confirmar Compra?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, comprar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            `Gracias!!`,
            'Su compra fue realizada con éxito',
            'success'
          )
          localStorage.removeItem('arrCarrito');
          setTimeout(() => {
            location.reload()
        }, 3000);
        }
      }) 
  
}