$(function () {
    tituloamarillo()
    tableroInicio()
    derecha()
    abajo()
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
function tableroInicio() {
    var cantidad = 7
    for (var j = 0; j <= cantidad; j++) {
        for (var i = 0; i < cantidad; i++) {
            var aleatorio = Math.round(Math.random() * (4 - 1) + parseInt(1))
            var pick = "image/" + aleatorio.toString() + ".png"
            if ($('.col-' + j + ' img').length < 7) {
                $('.col-' + j).append('<img src="' + pick + '", class="elemento">');
            }
        }
    }
}
//-------------------------------------------
//Función para verificar columnas y filas

function derecha() {
    var cantidad = 7;
    var grid = [];
    for (var i = 0; i < cantidad; i++) {
        grid[i]=[];
        for (var j = 1; j < cantidad; j++) {
            var objeto = $('.col-' + j + ' .elemento');
            if ((j + 2) <= 7 && (objeto[i].src == $('.col-' + (j + 1) + ' .elemento')[i].src) && ((objeto[i].src == $('.col-' + (j + 2) + ' .elemento')[i].src))) {
                for (var k = 0; k < cantidad; k++) {
                    if ((j + k) <= 7 && objeto[i].src == $('.col-' + (j + k) + ' .elemento')[i].src) {
                        grid[i][j+k]= 1;
                    } else break
                }
            } 
        }      
    } console.log(grid);
}

function abajo() {
    var cantidad = 7;
    var grid = [];
    for (var j = 1; j < cantidad; j++) {
        grid[j] = [];
        for (var i = 0; i < cantidad; i++) {
            var objeto = $('.col-' + j + ' .elemento');
            if ((i + 2) < 7 && (objeto[i].src == objeto[i + 1].src) && (objeto[i].src == objeto[i + 2].src)) {
                for (var k = 0; k < cantidad; k++) {
                    if ((i + k) < 7 && objeto[i].src == objeto[i+k].src) {
                        grid[j][i + k] = 1;
                    }else break
                }
            }
        }
    }console.log(grid);
}
//--------------------------------------------------------------------------------------------------------------------------