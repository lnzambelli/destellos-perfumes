const mensajeFormContacto = (name)=>{
    Swal.fire({
        icon: 'success',
        title:  `Gracias ${name}`,
        text: 'Tu mensaje se envio con éxito!',
        timer: 2000
    })
}

const mensajeConfirmarCarrito = () =>{
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

const mensajeVaciarCarrito = () => {
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
          }, 2000);
        }
      })
}

const mensajeProdAgregadoAlCarrito = () =>{
    Swal.fire('Agregado al carrito!')
}