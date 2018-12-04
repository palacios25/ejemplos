var m = new Main(document); 

export default class Producto {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    getDuracionEnHoras(){
        let r = this.duracion / 60;
        return r;
    }
}