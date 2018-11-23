var nombre = document.querySelector('#nombre');
var btnUno = document.querySelector('#btnUno');

var lista = document.querySelector('#lista');


btnUno.addEventListener('click' , problema9);



function problema9(){ 
    lista.innerHTML="";
    var v = [];
    var n = nombre.value;
    v.push(n);
    v.sort();
    for (i=0;i<v.length;i++) {
    var row = lista.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = v[i];
    }
}

