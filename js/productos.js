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

const  obtenerDatos= () =>{
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
    let sumaProductos = 0;
    let ingresarOtro = true;
    while(ingresarOtro){
        let newPerfume = obtenerDatos();
        for(let perfume in newPerfume){
            document.write(newPerfume[perfume]+"<br>")
        }
        sumaProductos =sumaProductos+newPerfume.precio;
        document.write("------------------------"+"<br>");
        document.write("TOTAL ACUMULADO: $"+sumaProductos+"<br>");
        document.write("------------------------"+"<br>");
        ingresarOtro = confirm("nuevo producto??");
    }
    if (sumaProductos >=500){
        alert("ENVIO GRATIS POR HACER UNA COMPRA MAYO A $500");
    }
}

crearProducto()
