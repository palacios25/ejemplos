import Producto from "./producto.js";

class Main{
    constructor(document){
        this.nombre = document.querySelector('#nombre');
        this.precio = document.querySelector('#precio');
        this.cantidad = document.querySelector('#cantidad');
        
        document.querySelector('#btn').addEventListener("click", this.onAgregar); 
    }
    onAgregar(){
        let nombre = document.querySelector('#nombre');
        let precio = document.querySelector('#precio');
        let cantidad = document.querySelector('#cantidad');

        let p1 = new Producto(
            nombre.value,
            Number(precio.value),
            Number(cantidad.value)
        );

        console.log(
            "La duracion de la pelicula " +
            p1.nombre + " es de " +
            p1.getDuracionEnHoras() + " horas"
        );
    }
     
     
}