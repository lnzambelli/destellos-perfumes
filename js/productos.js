class Perfume{
    constructor(marca, nombre, precio){
        this.marca = marca.toUpperCase();
        this.nombre = nombre.toLowerCase();
        this.precio = Number(precio);
    }
    sumarIva(){
        return this.precio=this.precio * 1.21;
    }
}

//OBTENER DATOS DE LOS PERFUMES:

const obtenerDatos= () =>{
    do{
        marca = prompt("ingrese marca del perfume");
        nombre = prompt("ingrese nombre del perfume");
        precio = Number(prompt("ingrese un precio de compra "));
        console.log(precio.toString())
        console.log(precio)
        if(marca =="" || nombre == "" || precio =="" || precio.toString() == 'NaN'){
            alert("Error: Existen campos sin completar, vuelva a ingresar los datos");
        }
    }while(marca =="" || nombre == "" || precio =="" || precio.toString() =='NaN')

    let nuevoPerfume = new Perfume(marca,nombre,precio);

    return nuevoPerfume
}


const crearProducto =() =>{
    let ingresarOtro = true;
    const arrayPerfumes = [];
    while(ingresarOtro){
        let newPerfume = obtenerDatos();
        arrayPerfumes.push(newPerfume);
        
        ingresarOtro = confirm("nuevo producto??");
    }
    
    //RECORREMOS PARA MOSTRAR LOS ELEMNTOS
    for(let perfume of arrayPerfumes){
        document.write(perfume.nombre+": $"+perfume.precio+"<br>")
    }

    //OBTENEMOS EL PRECIO TOTAL SUMANDO LOS ELEMENTOS
    const total = arrayPerfumes.reduce((accumulator, curValue) =>accumulator + curValue.precio, 0)

    //ALERTA DE ENVIO GRATIS
    if (total >=500){
        alert("ENVIO GRATIS POR HACER UNA COMPRA MAYO A $500");
    }

    //MOSTRAMOS EL TOTAL EN EL DOCUMNT
    document.write("------------------------"+"<br>");
    document.write("TOTAL: $"+total+"<br>");
    document.write("------------------------"+"<br>");
}

crearProducto()
