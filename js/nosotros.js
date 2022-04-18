//obtengo vendedores de assets
const misVendedores = dataVendedores;

//funcion para mostrar en dom
const mostrarVendedores = (listadoVendedores) =>{
    //obtengo el body para agregar filas a la tabla

    let itemsTablaVendedores = document.getElementById('listadoVendedores');
    itemsTablaVendedores.innerHTML='';
    for(let vendedor of listadoVendedores){
        let {name, email, address: {city}, phone} = vendedor
        let nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML= `  <td>${name}</td>
                                <td>${city}</td>
                                <td>${email}</td>
                                <td>${phone}</td> `
        itemsTablaVendedores.append(nuevaFila)
    }  
}

mostrarVendedores(misVendedores)