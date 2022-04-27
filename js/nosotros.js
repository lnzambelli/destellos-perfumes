//funcion para mostrar en dom
const mostrarVendedores = async () =>{
    try {
        //obtengo vendedores desde la API
        const respuesta = await (fetch('https://jsonplaceholder.typicode.com/users'));
        const listadoVendedores = await respuesta.json()
        
        //obtengo el body para agregar filas a la tabla
        let itemsTablaVendedores = document.getElementById('listadoVendedores');
        itemsTablaVendedores.innerHTML='';
        for(let vendedor of listadoVendedores){
            //desestructuramos los vendedores
            let {name, email, address: {city}, phone} = vendedor
            let nuevaFila = document.createElement('tr');
            nuevaFila.innerHTML= `  <td>${name}</td>
                                    <td>${city}</td>
                                    <td>${email}</td>
                                    <td>${phone}</td> `
            itemsTablaVendedores.append(nuevaFila)
        }  
    } catch (error) {
         //obtengo el body para mostar el error
         let itemsTablaVendedores = document.getElementById('listadoVendedores');
         itemsTablaVendedores.innerHTML='';
         let nuevaFila = document.createElement('tr');
         nuevaFila.style.color = "red"
         nuevaFila.innerHTML= `  <td></td>
                                <td>⚠  Ocurrio un ERROR</td>
                                <td>⚠ ${error}</td>
                                <td></td> `
         itemsTablaVendedores.append(nuevaFila)
    }
}

mostrarVendedores()