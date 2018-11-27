var nombre = document.querySelector('#nombre');
var btnUno = document.querySelector('#btnUno');
var btnDos = document.querySelector('#btnDos');

var lista = document.querySelector('#lista');
var reproducida = document.querySelector('#reproducida');

btnUno.addEventListener('click' , problema9);
btnDos.addEventListener('click' , reproducir);


var v = [];
function problema9(){ 
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

function reproducir(){
    reproducida.innerHTML = "";
    var i = 0;
    i=Math.trunc(Math.random()*v.length-1);
    reproducida.innerHTML = "La cancion que se esta reproduciendo es " + v[i];
    
}