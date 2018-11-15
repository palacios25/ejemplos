var numero = document.querySelector('#numero');
var buscar = document.querySelector('#buscar');
var btnUno = document.querySelector('#btnUno');
var btnDos = document.querySelector('#btnDos');
var resultado = document.querySelector('#resultado');

btnUno.addEventListener('click' , problema1);
btnDos.addEventListener('click' , problema2);

function problema1(){
 resultado.innerHTML="";
    var t = Number(numero.value);
    var v = [];
    
    for(var i = 0; i < t; i++){
      a = Math.trunc(Math.random() * 100);
      v[i] = a;       
    }
    for(var i = 0; i < v.length; i++){
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = v[i];
    }
}

function problema2(){
    resultado.innerHTML = "";
    var t = Number(numero.value);
    var ver = Number(buscar.value);
    var v = [];
    
    for(var i = 0; i < t; i++){
      a = Math.trunc(Math.random() * 100);
      v[i] = a;       
    }
    var contador = 0;
    for(var i = 0; i < v.length; i++){
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = v[i];

        if(v[i] === ver){
            cell.style.backgroundcolor = "#f5a9a9";
            contador++;
        }
    }
    var row = resultado.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = 'El numero ' + ver + ' se encontro' + contador + 'veces';
}