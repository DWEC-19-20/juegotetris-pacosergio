const puntuacion = document.getElementById("score");
const record = document.getElementById("record");
const record2 = document.getElementById("record2");
const record3 = document.getElementById("record3");
const record4 = document.getElementById("record4");
const record5 = document.getElementById("record5");
var records = [0,0,0,0,0];
const velocidad = document.getElementById("velocidad");

class Juego {

    constructor(cvs, cvsNext) {
        this.ctx = cvs.getContext("2d");
        this._tablero = new Tablero(20, 10, 30, this.ctx);
        this.ctxNext = cvsNext.getContext("2d");
        this.miniTablero = new Tablero(5, 5, 30, this.ctxNext);
        this._pSig = this.piezaAleatoria();
        this._pSigN;
        this._pieza = this._pSig;
        this.gameOver = false;
        this._comenzarCaer = Date.now();
        this.score = 0;
        this.tCaida = 1000;
        this.velUp = true;
        this.act=0;
        this._pSig.tablero = this.miniTablero;
        this._pSig.x = 1;
        this._pSig.y = 1;
    }

    // devuelve una pieza aleatoria
    piezaAleatoria = () => {
        
        let aleatorio = (Math.random() * (PIEZAS.length -1)).toFixed(0);
        this._pSigN = aleatorio;
        return new Pieza(aleatorio, this._tablero);

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
        
        let menosTiempo=100;
        
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
        
        if (this.tCaida == 900) {
            velocidad.innerHTML="x10";
        } else if(this.tCaida == 800) {
            velocidad.innerHTML="x20";
        } else if(this.tCaida == 700) {
            velocidad.innerHTML="x30";
        } else if(this.tCaida == 600) {
            velocidad.innerHTML="x40";
        } else if(this.tCaida == 500) {
            velocidad.innerHTML="x50";
        } else if(this.tCaida == 400) {
            velocidad.innerHTML="x60";
        } else if(this.tCaida == 300) {
            velocidad.innerHTML="x70";
        } else if(this.tCaida == 200) {
            velocidad.innerHTML="Máxima";
        }
        
        this.velUp=true;
        return this.tCaida;
        
        
       
        
    }
    
    pAltas = () => {

        if(juego.gameOver == true){
            
            for(let c = 0 ; c < records.length ; c++){
                
                if(records[c] < juego.score){
                    
                    records[c] = juego.score;
                    break;
                    
                }
                
            }
            
            let Arecords = records.sort(function(a,b) {return a-b;});
            
            record.innerHTML = Arecords[4];
            record2.innerHTML = Arecords[3];
            record3.innerHTML = Arecords[2];
            record4.innerHTML = Arecords[1];
            record5.innerHTML = Arecords[0];
            
        }

    }
    
    control = (event) => {
        if(!this.gameOver){
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
    
    dibujarMiniTablero = () => {
        
        let miniP = new Pieza(this._pSigN, this.miniTablero);
        miniP.x=0;
        miniP.y=0;
        miniP.dibujar();
        
    }
    
}