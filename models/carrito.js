export class Carrito{
    constructor(nombre, fragancia, precio){
        this.nombre = nombre.toUpperCase();
        this.fragancia = fragancia.toLowerCase();
        this.precio = precio.replace('$','');
        this.cantidad = 1;
        this.total = Number(this.precio)*this.cantidad;
    }
}