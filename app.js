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

//Selecciona un amigo de forma aleatoria y lo muestra en pantalla
function sortearAmigo() {
    if (amigos.length > 0){
        let longitud = amigos.length
        let aleatorio = Math.floor(Math.random()*(longitud))
        let amigoElegido = amigos[aleatorio]
        lista = document.getElementById('resultado')
        lista.innerHTML=""
        let ganador = document.createElement('li')
        ganador.textContent = amigoElegido
        lista.appendChild(ganador)
        limpiarPantalla()
        
    }
    else{
        alert("Lista vacia")
    }
}

function limpiarPantalla() {
    lista = document.getElementById('listaAmigos')
    lista.innerHTML=""
}