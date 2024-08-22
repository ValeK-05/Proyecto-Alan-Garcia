document.getElementById("botonEncriptar").addEventListener('click', function () {
    var mensaje = document.getElementById("mensaje").value;
    mensaje = mensaje.toLowerCase()
    mensaje = mensaje.split("")

    encriptar(mensaje)
    mensaje = mensaje.join("")
    document.getElementById("mensajeRecibido").innerHTML = mensaje

    //var indiceEncontrado = buscarLetra("x")
    //console.log(indiceEncontrado)
})

const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function encriptar(mensaje) {

    for (var i = 0; i < mensaje.length; i++) {
        var letra = mensaje[i]

        if (esLetra(letra)) {
            if (letra == "v") {
                indice = 0
            } else if (letra == "w") {
                indice = 1
            } else if (letra == "x") {
                indice = 2
            } else if (letra == "y") {
                indice = 3
            } else if (letra == "z") {
                indice = 4
            } else {
                var indice = buscarLetra(letra)
                indice = indice + 5
            }


            mensaje[i] = abecedario[indice]
        }

    }

}

function buscarLetra(letra) {
    for (var i = 0; i < abecedario.length; i++) {
        if (letra == abecedario[i]) {
            return i;
        }
    }
}


function esLetra(caracter) {
    return /^\p{L}$/u.test(caracter);
}



//Desencriptar

document.getElementById("botonDesencriptar").addEventListener('click', function () {
    var mensaje = document.getElementById("mensaje").value;
    mensaje = mensaje.toLowerCase()
    mensaje = mensaje.split("")

    desencriptar(mensaje)
    mensaje = mensaje.join("")
    document.getElementById("mensajeRecibido").innerHTML = mensaje
})

function desencriptar(mensaje) {

    for (var i = 0; i < mensaje.length; i++) {
        var letra = mensaje[i]

        if (esLetra(letra)) {
            if (letra == "a") {
                indice = 22
            } else if (letra == "b") {
                indice = 23
            } else if (letra == "c") {
                indice = 24
            } else if (letra == "d") {
                indice = 25
            } else if (letra == "e") {
                indice = 26
            } else {
                var indice = buscarLetra(letra)
                indice = indice - 5
            }

            mensaje[i] = abecedario[indice]
        }

    }
    
}


