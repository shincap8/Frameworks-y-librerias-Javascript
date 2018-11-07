$(function () {
    tituloamarillo()
    tableroInicio()
    eliminarH()
    eliminarV()
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
    var id = 1
    for (var j = 1; j <= cantidad; j++) {
        for (var i = 0; i < cantidad; i++) {
            var aleatorio = Math.round(Math.random() * (4 - 1) + parseInt(1))
            var pick = "image/" + aleatorio.toString() + ".png"
            if ($('.col-' + j + ' img').length < 7) {
                $('.col-' + j).append('<img src="' + pick + '" class="elemento" id="'+id+'">');
            } id++;
        } 
    }
    return id; 
}
//-------------------------------------------
//Funciones para comparar columnas y filas
function derecha() {
    var cantidad = 7;
    var grid = [];
    for (var i = 0; i < cantidad; i++) {
        grid[i] = [];
        for (var j = 1; j < cantidad; j++) {
            var objeto = $('.col-' + j + ' .elemento');
            if ((j + 2) <= 7 && (objeto[i].src == $('.col-' + (j + 1) + ' .elemento')[i].src) && ((objeto[i].src == $('.col-' + (j + 2) + ' .elemento')[i].src))) {
                for (var k = 0; k < cantidad; k++) {
                    if ((j + k) <= 7 && objeto[i].src == $('.col-' + (j + k) + ' .elemento')[i].src) {
                        grid[i][j + k] = $('.col-' + (j + k) + ' .elemento')[i].id;
                    } else break
                }
            }
        }
    }
    return grid;
}

function abajo() {
    var cantidad = 7;
    var grid = [];
    for (var j = 1; j <= cantidad; j++) {
        grid[j] = [];
        for (var i = 0; i < cantidad; i++) {
            var objeto = $('.col-' + j + ' .elemento');
            if ((i + 2) < 7 && (objeto[i].src == objeto[i + 1].src) && (objeto[i].src == objeto[i + 2].src)) {
                for (var k = 0; k < cantidad; k++) {
                    if ((i + k) < 7 && objeto[i].src == objeto[i + k].src) {
                        grid[j][i + k] = objeto[i + k].id;
                    } else break
                }
            }
        }
    }
    return grid;
}
//-------------------------------------------------------------------------------------
//Funciones para eliminar Dulces iguales
function eliminarH() {
    var cantidad = 7;
    var gridX = derecha();
    var id = 0;
    console.log(gridX);
    for (i = 0; i < cantidad; i++) {
        if (gridX[i].length != 0) {
            for (var j = 1; j <= gridX.length; j++) {
                if (gridX[i][j] != 0) {
                    id = '#'+gridX[i][j]
                    $(id).addClass('eliminar')
                }
            }
        }
    }
}

function eliminarV() {
    var cantidad = 7;
    var gridY = abajo();
    var id = 0;
    console.log(gridY);
    for (j = 1; j <= cantidad; j++) {
        if (gridY[j].length != 0) {
            for (var i = 1; i < gridY.length; i++) {
                if (gridY[j][i] != 0) {
                    id = '#' + gridY[j][i]
                    $(id).addClass('eliminar')
                }
            }
        }
    }
}