$(function () {
    tituloamarillo()
})

//Función del Titulo Principal
function tituloblanco() {
    $('.main-titulo').animate({
        color: "#fff"
    },1000, function () {
        setTimeout(tituloamarillo, 3000);
    })
};
function tituloamarillo() {
    $('.main-titulo').animate({
        color: "#DCFF0E"
    }, 1000, function () {
        setTimeout(tituloblanco, 3000);
    })
};
//------------------------------------------