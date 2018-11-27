var nombre = document.querySelector('#nombre');
var numero = document.querySelector('#numero');
var buscar = document.querySelector('#buscar');
var btnUno = document.querySelector('#btnUno');
var btnDos = document.querySelector('#btnDos');
var agenda = document.querySelector('#agenda');

btnUno.addEventListener('click' , problema10);
btnDos.addEventListener('click' , problema11);

var v = [];
var num = [];
function problema10(){ 
    agenda.innerHTML="";
    var n = nombre.value;
    var nume = numero.value;
    v.push(n);
    num.push(nume);
    for (i=0;i<v.length;i++) {
    var row = agenda.insertRow(-1);
    var cell = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell.innerHTML = v[i];
    cell2.innerHTML = num[i];
    }

}

function problema11(){
    resultado.innerHTML="";
    var b = buscar.value;
    
    for(var i = 0; i < v.length; i++){
        if (v[i].substring(0,b.length) == b){
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell.innerHTML = v[i];
        cell2.innerHTML = num[i];
        }
        
    }
}