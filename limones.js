let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
let puntaje = 0;
let vidas = 3;

const ALTURA_SUELO = 20;
const ALTURA_PERSONAJE = 60;
const ANCHO_PERSONAJE = 40;
let personajeX = canvas.width/2;
let personajeY = canvas.height - (ALTURA_SUELO + ALTURA_PERSONAJE);

//limon
let limonX = canvas.width/2;
let limonY = 5;
const ANCHO_LIMON = 20;
const ALTO_LIMON = 20;


function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
}

function dibujarSuelo(){
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0,canvas.height - ALTURA_SUELO, canvas.width, ALTURA_SUELO);

}

function dibujarPersonaje(){
    ctx.fillStyle = "yellow";
    ctx.fillRect(personajeX, personajeY, ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}

function moverIzquierda(){
    personajeX = personajeX - 30;
    actualizarPantalla();
    detectarColision();
}
function moverDerecha(){
    personajeX = personajeX + 30;
    actualizarPantalla();
    detectarColision();
}

function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    pintarLimon();
}

function limpiarCanva(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function pintarLimon(){
    ctx.fillStyle = "green";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTO_LIMON);
}
function bajarLimon(){
    limonY = limonY + 10;
    actualizarPantalla();
    detectarColision();
    detectarPiso();
}

function detectarColision(){
    if(limonX + ANCHO_LIMON > personajeX && 
        limonX < personajeX + ANCHO_PERSONAJE &&
        limonY +ALTO_LIMON > personajeY &&
        limonY < personajeY + ALTURA_PERSONAJE ){
        //alert("ATRAPADO!!");
        aparecerLimon();
        puntaje = puntaje + 1;
        mostrarSpam("txtPuntaje", puntaje);
    }
}

function detectarPiso(){
    if(limonY + ALTO_LIMON == canvas.height - ALTURA_SUELO){
        aparecerLimon();
        vidas = vidas - 1;
        mostrarSpam("txtVidas", vidas);
    }
}

function aparecerLimon(){
    limonX = generarAletorio(0, canvas.width - ANCHO_LIMON);
    limonY = 0;
    actualizarPantalla();
}