const juego = document.getElementById("juegos");
const cajaJuego = document.getElementsByClassName("main-container__botones__juegos")

const info = document.getElementById("info");
const cajaInfo = document.getElementsByClassName("main-container__botones__informacion")


cajaJuego[0].addEventListener("click",function(){
    juego.click();
})


cajaInfo[0].addEventListener("click",function(){
    info.click();
})

