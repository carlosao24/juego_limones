let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ALTURA_SUELO = 20;
const ALTURA_PERSONAJE = 40;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}

function dibujarSuelo(){
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0,canvas.height - ALTURA_SUELO, canvas.width, ALTURA_SUELO);

}

function dibujarPersonaje(){
    ctx.fillStyle = "yellow";
    ctx.fillRect(canvas.width/2, canvas.height -(ALTURA_SUELO + ALTURA_PERSONAJE), 40, ALTURA_PERSONAJE);
}