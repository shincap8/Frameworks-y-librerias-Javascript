$(function () {
    tituloamarillo()
    tableroInicio()
})

//Función de Animacion del Titulo Principal
function tituloblanco() {
    $('.main-titulo').animate({
        color: "#fff"
    }, 1000, function () {
        setTimeout(tituloamarillo, 2500);
    })
};
function tituloamarillo() {
    $('.main-titulo').animate({
        color: "#DCFF0E"
    }, 1000, function () {
        setTimeout(tituloblanco, 2500);
    })
};
//------------------------------------------
//Función para el tablero inicial 
var id = 1;
function tableroInicio() {
    var cantidad = 7
    for (var j = 1; j <= cantidad; j++) {
        for (var i = 0; i < cantidad; i++) {
            var aleatorio = Math.round(Math.random() * (4 - 1) + parseInt(1))
            var pick = "image/" + aleatorio.toString() + ".png"
            if ($('.col-' + j + ' img').length < 7) {
                $('.col-' + j).append('<img src="' + pick + '" class="elemento" id="' + id + '">');
            } id++;
        }
    }
}
//-------------------------------------------

//Funciones para comparar columnas y filas
function derecha() {
    var cantidad = 7;
    var numero = 0;
    for (var i = 0; i < cantidad; i++) {
        for (var j = 1; j < cantidad; j++) {
            var objeto = $('.col-' + j + ' .elemento');
            if ((j + 2) <= 7 && (objeto[i].src == $('.col-' + (j + 1) + ' .elemento')[i].src) && ((objeto[i].src == $('.col-' + (j + 2) + ' .elemento')[i].src))) {
                for (var k = 0; k < cantidad; k++) {
                    if ((j + k) <= 7 && objeto[i].src == $('.col-' + (j + k) + ' .elemento')[i].src) {
                        numero = '#' + $('.col-' + (j + k) + ' .elemento')[i].id
                        $(numero).addClass('eliminar')
                    } else break
                }
            }
        }
    }
}

function abajo() {
    var cantidad = 7;
    var numero = 0;
    for (var j = 1; j <= cantidad; j++) {
        for (var i = 0; i < cantidad; i++) {
            var objeto = $('.col-' + j + ' .elemento');
            if ((i + 2) < 7 && (objeto[i].src == objeto[i + 1].src) && (objeto[i].src == objeto[i + 2].src)) {
                for (var k = 0; k < cantidad; k++) {
                    if ((i + k) < 7 && objeto[i].src == objeto[i + k].src) {
                        numero = '#' + objeto[i + k].id;
                        $(numero).addClass('eliminar')
                    } else break
                }
            }
        }
    }
}
//-------------------------------------------------------------------------------------
//Funciones para eliminar Dulces iguales
function titilar() {
    if ($('.eliminar').length!=0) {
        $('.eliminar').animate({ opacity: 0 }, 300)
            .animate({ opacity: 1 }, 300)
            .animate({ opacity: 0 }, 300)
            .animate({ opacity: 1 }, 300)
            .animate({ opacity: 0 }, 300)
            .animate({ opacity: 1 }, 300)
            .animate({ opacity: 0 }, 300)
            .animate({ opacity: 1 }, 300)
            .animate({ opacity: 0 }, 300)
            .animate({ opacity: 1 }, 300)
            .animate({ opacity: 0 }, 350,
                function () {
                    puntaje()
                    $('.eliminar').remove()
                    setTimeout(rellenar, 250)
                }
            )
        derecha()
        abajo() 
    } else return false;
}
//-----------------------------------------------------------------------------------
//Funcion para añadir despues de eliminar iguales
function rellenar() {
    var cantidad = 7
    var fill = 0
    for (i = 1; i <= cantidad; i++) {
        if ($('.col-' + i + ' img').length < 7) {
            fill = cantidad - $('.col-' + i + ' img').length
            for (j = 0; j < fill; j++) {
                var aleatorio = Math.round(Math.random() * (4 - 1) + parseInt(1))
                var pick = "image/" + aleatorio.toString() + ".png"
                $('.col-' + i).prepend('<img src="' + pick + '" class="elemento" id="' + id + '">');
                id++
            }
        }
    }
}
//-------------------------------------------------------------------------------------
//Funcion para calcular puntaje
var puntos = 0;
function puntaje() { 
    puntos = puntos + ($('.eliminar').length * 15)
    $('#score-text').text(puntos)
}


