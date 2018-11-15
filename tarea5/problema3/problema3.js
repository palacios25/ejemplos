var numero = document.querySelector('#numero');
var buscar = document.querySelector('#buscar');
var remplazar = document.querySelector('#remplazar');
var btnUno = document.querySelector('#btnUno');
var btnDos = document.querySelector('#btnDos');
var resultado = document.querySelector('#resultado');
var remplazo = document.querySelector('#remplazo');

btnUno.addEventListener('click' , problema3);
btnDos.addEventListener('click', reemplaza);
var v = [];

function problema3(){
    resultado.innerHTML = "";
    var t = Number(numero.value);
    var ver = Number(buscar.value);
    
    
    for(var i = 0; i < t; i++){
      a = Math.trunc(Math.random() * 100);
      v[i] = a;  
      var row = resultado.insertRow(-1);
      var cell = row.insertCell(0);
      cell.innerHTML = v[i];
    }
}
    function reemplaza(){
    var r = Number(remplazar.value);
    var t = Number(numero.value);
    var ver = Number(buscar.value); 
    

    for(var i = 0; i < t; i++){
        if (v[i] == ver) {v[i]=r};
        var row = remplazo.insertRow(-1);
      var cell = row.insertCell(0);
      cell.innerHTML = v[i];
    }
    }

