const puntuacion = document.getElementById("score");
const record = document.getElementById("record");
const record2 = document.getElementById("record2");
const record3 = document.getElementById("record3");
const record4 = document.getElementById("record4");
const record5 = document.getElementById("record5");
const records = [0,0,0,0,0];
const velocidad = document.getElementById("velocidad");

class Juego {

    constructor(cvs) {
        this.ctx = cvs.getContext("2d");
        this.ctx.clearRect(0,0,200,400);
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

        for(let c = 0 ; c < records.length ; c++){

            if(records[c] < this.score){
         
                if(records[0] != records[1] || records[c] != records[c-1]){
                    records[c] = this.score;
                    break;
                }
            }

        }

        records.sort(function(a,b){return a-b});

        record.innerHTML = records[4];
        record2.innerHTML = records[3];
        record3.innerHTML = records[2];
        record4.innerHTML = records[1];
        record5.innerHTML = records[0];

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
}