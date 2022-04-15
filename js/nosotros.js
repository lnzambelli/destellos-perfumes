//obtengo vendedores de assets
const misVendedores = dataVendedores;

//funcion para mostrar en dom
const mostrarVendedores = (listadoVendedores) =>{
    //obtengo el body para agregar filas a la tabla

    let itemsTablaVendedores = document.getElementById('listadoVendedores');
    itemsTablaVendedores.innerHTML='';
    for(let vendedor of listadoVendedores){
        let nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML= `  <td>${vendedor.name}</td>
                                <td>${vendedor.address.city}</td>
                                <td>${vendedor.email}</td>
                                <td>${vendedor.phone}</td> `
        itemsTablaVendedores.append(nuevaFila)
    }  
}

mostrarVendedores(misVendedores)