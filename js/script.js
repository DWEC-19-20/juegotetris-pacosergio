function setAudio(){

    var sonido = document.createElement("audio");
    sonido.setAttribute("src","mp3/Tetris_99.mp4");
    sonido.setAttribute("hidden","true");
    sonido.setAttribute("autoplay","true");
    sonido.setAttribute("loop","true");
    sonido.volume = 0.4;
    document.body.appendChild(sonido);
    
}

const cvs = document.getElementById("tetris");
const canvasNext = document.getElementById("pSig");
const juego = new Juego(cvs, canvasNext);
document.addEventListener("keydown", juego.control);

document.getElementById("empezar").addEventListener("click", function(){    
   
    
    setAudio();
    juego._tablero.dibujarTableroVacio();
    juego._tablero.dibujarTablero();
    juego.caer();
    juego.score = 0;
    juego.gameOver = false;
    document.getElementById("score").innerHTML = 0;
    
});
/*
function desactiva_boton(boton){
    boton.disabled='disabled';
  
}*/