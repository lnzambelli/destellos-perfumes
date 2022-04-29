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
    
    mensajeFormContacto(miForm.nombre)
   
    //reseteamos el formulario
    dato.children[0].children[1].value ="";
    dato.children[1].children[1].value ="";
    dato.children[2].children[1].value ="";
    dato.children[3].children[1].value ="";
}

//OBTENEMOS PROVINCIAS DESDE LA API
const obtenerProvincias = async () => {

    const respuesta = await (fetch('https://apis.datos.gob.ar/georef/api/provincias'));
    const listadoProvincias = await respuesta.json();
    
    let selectProvincias = document.getElementById("exampleFormControlSelect1");
    for(let provincia of listadoProvincias.provincias){
        let {nombre} = provincia
        let nuevaProv = document.createElement('option');
        nuevaProv.innerHTML = ` <option>${nombre }</option> `;
        selectProvincias.append(nuevaProv)
    }
}

obtenerProvincias()
