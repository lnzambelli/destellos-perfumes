class Perfume{
    constructor(nombre, fragancia, precio, categoria,urlImg){
        this.nombre = nombre.toUpperCase();
        this.fragancia = fragancia.toLowerCase();
        this.categoria = categoria.toUpperCase();
        this.precio = Number(precio);
        this.urlImg = urlImg;
    }
}