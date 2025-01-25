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
        agregarLista(contenido)
    }
    console.log(amigos)
    limpiarInput()
}

//Limpia input
function limpiarInput () {
    document.getElementById('amigo').value=""
}

//Agregar los nombres a la lista que aparece debajo
function agregarLista(nombre) {
    lista = document.getElementById('listaAmigos')
    let amigoNuevo = document.createElement('li')
    amigoNuevo.textContent = nombre
    lista.appendChild(amigoNuevo)
}
