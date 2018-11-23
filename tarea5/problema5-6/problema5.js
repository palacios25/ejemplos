var nombre = document.querySelector('#nombre');
var buscar = document.querySelector('#buscar');
var btnUno = document.querySelector('#btnUno');
var btnDos = document.querySelector('#btnDos');
var resultado = document.querySelector('#resultado');
var lista = document.querySelector('#lista');

btnUno.addEventListener('click' , problema5);
btnDos.addEventListener('click' , problema6);

var v = []; 
function problema5(){
    lista.innerHTML="";
    var n = nombre.value;
    v.push(n);
    v.sort();
    for (i=0;i<v.length;i++) {
    var row = lista.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = v[i];
    }

}

function problema6(){
    resultado.innerHTML="";
    var b = buscar.value;

    for(var i = 0; i < v.length; i++){
        if (v[i].substring(0,b.length) == b) {
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = v[i];
        }
        
    }
}