var numero = document.querySelector('#numero');
var persona = document.querySelector('#persona');
var btnUno = document.querySelector('#btnUno');
var resultado = document.querySelector('#resultado');
var mensaje = document.querySelector('#mensaje');

var v=[];
var n=[];
btnUno.addEventListener('click' , problema7);


function inicio(){
    resultado.innerHTML="";
    for (i=0;i<= 35;i++) {
        v[i]="Disponible";
        n[i]=i;
    var row = resultado.insertRow(-1);
    var cell = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell.innerHTML = n[i];
    cell2.innerHTML = v[i];
    }  
}

function problema7(){
    resultado.innerHTML="";
    for (i=0;i<= 35;i++) {
        v[i]="Disponible";
        n[i]=i;
    var row = resultado.insertRow(-1);
    var cell = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell.innerHTML = n[i];
    cell2.innerHTML = v[i];
    }  
}