var nombre = document.querySelector('#nombre');
var btnUno = document.querySelector('#btnUno');
var resultado = document.querySelector('#resultado');

btnUno.addEventListener('click' , problema5);

var v = []; 
function problema5(){
    resultado.innerHTML="";
    var n = nombre.value;
    v.push(n);
    v.sort();
    for (i=0;i<v.length;i++) {
    var row = resultado.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = v[i];
    }

}