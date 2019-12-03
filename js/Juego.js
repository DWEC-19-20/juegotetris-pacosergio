const puntuacion = document.getElementById("score");
const record = document.getElementById("record");

class Juego {

    constructor(cvs, canvasNext) {
        this.ctx = cvs.getContext("2d");
        this.ctx.clearRect(0,0,200,400);
        this.ctxNext =  canvasNext.getContext('2d');
        this._tablero = new Tablero(20, 10, 20, this.ctx, this.ctxNext);
        this._pieza = this.piezaAleatoria();
        this.gameOver = false;
        this._comenzarCaer = Date.now();
        this.score = 0;
        this.tCaida = 1000;
        this._pSig = this.piezaAleatoria();
        this.velUp = true;
        this.act=0;
        
    }

    // devuelve una pieza aleatoria
    piezaAleatoria = () => {
        
        let aleatorio = (Math.random() * (PIEZAS.length -1)).toFixed(0);
        return new Pieza(aleatorio, this._tablero);

    }

    // Tabla pieza siguiente

    initNext = () => {
        ctxNext.canvas.width = 4 * 20;
        ctxNext.canvas.height = 4 * 20;
        ctxNext.scale(20, 20);
    }

    get tablero() {
        return this._tablero;
    }

    get pieza() {
        return this._pieza;
    }

    set pieza(pieza) {
        this._pieza = pieza;
    }

    get comenzarCaer() {
        return this._comenzarCaer;
    }
    set comenzarCaer(comenzarCaer) {
        this._comenzarCaer = comenzarCaer;
    }
    caer = () => {
        let ahora = Date.now();
        let delta = ahora - this.comenzarCaer;
        if (delta > this.vel()) {
            this.pieza.moverAbajo();
            this.comenzarCaer = Date.now();
        }
        if (!this.gameOver) {
            requestAnimationFrame(this.caer);
        }
    }
    vel = () => {
        
        let menosTiempo=20;
        
        if(this.velUp && this.score > 0 && (this.score%100) == 0 && this.score != this.act){
            
            this.act = this.act+100;
                       
            this.velUp=false;
            
                if (this.tCaida == 200){

                    this.tCaida=200;

                } else {

                    this.tCaida = this.tCaida - menosTiempo;
                    this.act = this.score;
                }
                                    
        }
        
        this.velUp=true;
        return this.tCaida;
        
    }
    control = (event) => {
        if (event.keyCode == 37) {
            this.pieza.moverIzquierda();
            this.comenzarCaer = Date.now();
        } else if (event.keyCode == 38) {
            this.pieza.rotar();
            this.comenzarCaer = Date.now();
        } else if (event.keyCode == 39) {
            this.pieza.moverDerecha();
            this.comenzarCaer = Date.now();
        } else if (event.keyCode == 40) {
            this.pieza.moverAbajo();
        }
    }
    
}