class Formulario{
    constructor(nombre, email, localidad, mensaje){
        this.nombre = nombre.toLowerCase();
        this.email = email.toLowerCase();
        this.localidad = localidad.toLowerCase();
        this.mensaje = mensaje.toLowerCase();
    }
}

let dataFomulario = document.getElementById("form");

dataFomulario.addEventListener('submit',enviarDatos );

function enviarDatos(e){
    e.preventDefault();
    //obtener el dato
    let dato = e.target;
    
    const miForm = new Formulario(dato.children[0].children[1].value, dato.children[1].children[1].value, dato.children[2].children[1].value,dato.children[3].children[1].value);
    //obtengo los datos de cada uno de los hijos
    
    //alert(`${miForm.nombre} tu mensaje se envio correctamente! Gracias por contactarte`)
    
    Swal.fire({
        icon: 'success',
        title:  `Gracias ${miForm.nombre}`,
        text: 'Tu mensaje se envio con éxito!',
        timer: 2000
    })
    //reseteamos el formulario
    dato.children[0].children[1].value ="";
    dato.children[1].children[1].value ="";
    dato.children[2].children[1].value ="";
    dato.children[3].children[1].value ="";
}