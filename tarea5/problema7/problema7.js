var numero = document.querySelector('#numero');
var persona = document.querySelector('#persona');
var btnUno = document.querySelector('#btnUno');
var resultado = document.querySelector('#resultado');
var mensaje = document.querySelector('#mensaje');

btnUno.addEventListener('click' , problema7);

var v = [];
function problema7(){
    lista.innerHTML="";
    var n = Number(numero.value);
    v.push(n);
    v.sort();
    for (i=0;i<v.length;i++) {
    var row = lista.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = v[i];
    }
}