var panes = new Array("Pan Rustico","Hogaza Integral","Colon Candeal","Croisant");
var precios = new Array("0.55","0.80","0.75","0.60");
var total=0;
var precio=0;
var rows=1;

var contador=0;
function cargarProductos(){

    for(var i=0;i<panes.length;i++){
        var option = document.createElement("option");
        option.text=panes[i];
        document.getElementById("tipo").add(option);
    }

}
function cargarPrecio(producto){

    for(var i=0;i<panes.length;i++){
        if(panes[i]==producto)
        document.getElementById("precio").value=precios[i];
    }
}
function cargarCantidad(){
    var cantidad= document.getElementById("cantidad").value;
    precio=document.getElementById("precio").value;
    total=(precio*cantidad).toFixed(2);
    document.getElementById("total").value=total;

    
}
function crearFila(){

    var producto = document.getElementById("tipo").value;
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;
    var elementoTd = document.createElement("TD");
    var botBorrar= document.createElement("INPUT");
    botBorrar.setAttribute("type", "checkbox");
    botBorrar.setAttribute("id",rows.toString());  
    
    if(cantidad != ""){
  
        var tablita = document.getElementById("tabla");
        var row = tablita.insertRow(-1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);  

        cell1.innerHTML = producto;
        cell2.innerHTML = precio;
        cell3.innerHTML = cantidad;
        cell4.innerHTML = total;
        

        elementoTd.appendChild(botBorrar);
        tablita.rows[rows].appendChild(elementoTd);
        rows = rows +1;
        document.getElementById("cantidad").value="";
        document.getElementById("totalCompra").value="";


    }else {
        alert("es obligatorio seleccionar un producto y cantidad");
    }
}
function eliminarFila(){
    document.getElementById("totalCompra").value="";
    var check;
    var table = document.getElementById("tabla");
    var fila;

    for(var i =table.rows.length-1;i>=0;i--){
        fila=table.rows[i];
        check = document.getElementById(i.toString());
        if(check.checked){
            table.deleteRow(check.id);
            rows = rows-1;
        }
    }
}
function precioTotal(){
    var pretotal = 0;
    var tabla = document.getElementsByTagName("tr");
    var valor=0;

    for(var i=0;i< tabla.length;i++){
        console.log(tabla.length);
        var x=document.getElementById("tabla").rows[i].cells;
        valor = parseFloat(x[3].innerHTML);
        console.log(valor);       
        if(!isNaN(valor)){
            pretotal += valor;
        }       
    }
    console.log(pretotal); 
    totalCompra.value=pretotal.toFixed(2);
}
//boton comprar para activar el alert
function Comprar(){
    if(document.getElementById("totalCompra").value!="")
        alert("Se a realizado la compra con exito!");
    else
    alert("No se a realizado ninguna compra!");
}

function crearFilas(){

    var table = document.getElementById("tablaId");
    var fila = table.insertRow(-1);//pos donde insertar la nueva fila

    //creamos las celdas en esa posicion de la fila
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);
    var celda5 = fila.insertCell(4);

    //valores
    var producto=panesLista.options[panesLista.selectedIndex].text;
    var precio=document.getElementById("precio").value;
    var cant=document.getElementById("cantidad").value;
    var total=document.getElementById("total").value;

    var botonBorrar = document.createElement("button"); 
        botonBorrar.innerHTML="Borrar Producto";

    //insertamos el valor a cada celda
      celda1.innerHTML = producto;
      celda2.innerHTML = precio;
      celda3.innerHTML = cant;
      celda4.innerHTML = total;
      celda5.appendChild(botonBorrar); 

      //añadimos el atributo id a boton para modificarlo luego.
       botonBorrar.setAttribute("class","btn btn-block btn-outline-danger");
       botonBorrar.setAttribute("id","bf");
       botonBorrar.onclick=function (){borrarUnaFila(this)};
}
