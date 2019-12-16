var audioOff = true;

function setAudio(){

    var sonido = document.createElement("audio");
    sonido.setAttribute("src","multimedia/Tetris_99.mp4");
    sonido.setAttribute("hidden","true");
    sonido.setAttribute("autoplay","true");
    sonido.setAttribute("loop","true");
    sonido.volume = 0.4;
    audioOff = false;
    document.body.appendChild(sonido);
    
}


const cvs = document.getElementById("tetris");
const cvsNext = document.getElementById("piezaSiguiente");
const juego = new Juego(cvs, cvsNext);

document.getElementById("btComenzar").addEventListener("click", function(){    
    
    document.addEventListener("keydown", juego.control);
    if(audioOff)setAudio();
    velocidad.innerHTML="Normal";
    juego._tablero.dibujarTableroVacio();
    juego._tablero.dibujarTablero();
    juego.miniTablero.dibujarTableroVacio();
    juego.miniTablero.dibujarTablero();
    juego._pieza = juego.piezaAleatoria();
    juego.caer();
    juego.score = 0;
    juego.tCaida = 1000;
    juego.pAltas();
    juego.gameOver = false;
    document.getElementById("score").innerHTML = 0;
    
});

document.getElementById("btComenzar1").addEventListener("click", function(){    
    
    document.addEventListener("keydown", juego.control);
    if(audioOff)setAudio();
    velocidad.innerHTML="x20";
    juego.tCaida = 800;
    juego._tablero.dibujarTableroVacio();
    juego._tablero.dibujarTablero();
    juego.miniTablero.dibujarTableroVacio();
    juego.miniTablero.dibujarTablero();
    juego._pieza = juego.piezaAleatoria();
    juego.caer();
    juego.score = 0;
    juego.tCaida = 1000;
    juego.pAltas();
    juego.gameOver = false;
    document.getElementById("score").innerHTML = 0;
    
});

document.getElementById("btComenzar2").addEventListener("click", function(){    
    
    document.addEventListener("keydown", juego.control);
    if(audioOff)setAudio();
    velocidad.innerHTML="x40";
    juego.tCaida = 600;
    juego._tablero.dibujarTableroVacio();
    juego._tablero.dibujarTablero();
    juego.miniTablero.dibujarTableroVacio();
    juego.miniTablero.dibujarTablero();
    juego._pieza = juego.piezaAleatoria();
    juego.caer();
    juego.score = 0;
    juego.tCaida = 1000;
    juego.pAltas();
    juego.gameOver = false;
    document.getElementById("score").innerHTML = 0;
    
});

document.getElementById("btComenzar3").addEventListener("click", function(){    
    
    document.addEventListener("keydown", juego.control);
    if(audioOff)setAudio();
    velocidad.innerHTML="x60";
    juego.tCaida = 400;
    juego._tablero.dibujarTableroVacio();
    juego._tablero.dibujarTablero();
    juego.miniTablero.dibujarTableroVacio();
    juego.miniTablero.dibujarTablero();
    juego._pieza = juego.piezaAleatoria();
    juego.caer();
    juego.score = 0;
    juego.tCaida = 1000;
    juego.pAltas();
    juego.gameOver = false;
    document.getElementById("score").innerHTML = 0;
    
});