var numero = document.querySelector('#numero');
var eliminar = document.querySelector('#eliminar');
var btnUno = document.querySelector('#btnUno');
var btnDos = document.querySelector('#btnDos');
var resultado = document.querySelector('#resultado');
var borrado = document.querySelector('#borrado');

btnUno.addEventListener('click' , problema4);
btnDos.addEventListener('click', borrar);
var v = [];

function problema4(){
    resultado.innerHTML = "";
    var t = Number(numero.value);
    
    for(var i = 0; i < t; i++){
      a = Math.trunc(Math.random() * 100);
      v[i] = a;  
      var row = resultado.insertRow(-1);
      var cell = row.insertCell(0);
      cell.innerHTML = v[i];
    }
}
    function borrar(){
    var r = Number(eliminar.value);
    var t = Number(numero.value); 
    

    for(var i = 0; i < t; i++){
        if (v[i] == r) {v.splice(i,1)};
        
    }
    for (var i = 0; i < v.length; i++) {
        var row = borrado.insertRow(-1);
      var cell = row.insertCell(0);
      cell.innerHTML = v[i];
    }
    }