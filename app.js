//Declaracion de variables
let amigos = []
let contenido

//revisa que el dato sea un nombre y lo agrega a la lista de amigos
function agregarAmigo(){
    contenido = document.getElementById('amigo').value.trim()
    if(contenido == ""){
        alert("Por favor, inserte un nombre")
    }
    else{
        amigos.push(contenido)
    }
    console.log(amigos)
    limpiar()
}

//Limpia la barra de entrada de texto
function limpiar () {
    document.getElementById('amigo').value=""
}

function agregarLista() {
    console.log("hola")
}