// las piezas y sus colores 
const PIEZAS = [
    [Z, "orange"],
    [S, "cyan"],
    [T, "green"],
    [O, "grey"],
    [L, "purple"],
    [I, "red"],
    [J, "yellow"]
];

// La clase pieza
class Pieza {

    constructor(tetromino, tablero) {
        // propiedades numeroForma, tetrominioActual, posición x e y en el canvas  
        this.tetroI = 0;
        this.tetro = PIEZAS[tetromino];
        this.tetro = this.tetro[this.tetroI];
        this.aTetro = this.tetro[this.tetroI];
        this.color = PIEZAS[tetromino][1];
        this.tablero = tablero;
        this.x=4;
        this.y=-2;
        
    }

    // rota la piezaentre las distintas formas del tetrominio
    // de debe controlar que si está muy cerca de las paredes algunas no pueden girar
    rotar = () => {
    
        let posSig = this.tetro[(this.tetroI+1)%this.tetro.length];
        
        let empujar = 0;
        
        if(this.colision(0,0,posSig)){
            
            if(this.x > this.tablero.columnas/2) empujar = -1;
            
            else empujar = 1;
            
        }
        
        if(!this.colision(empujar,0,posSig)){
            
            this.borrar();
            this.x += empujar;
            this.tetroI = (this.tetroI+1)%this.tetro.length;
            this.aTetro = this.tetro[this.tetroI];
            this.dibujar();
            
        }
    
    }

    // rellena el tetromino de la pieza con su color en el canvas
    rellenar = (color) => {
        
         for(let f = 0 ; f < this.aTetro.length ; f++){
            
            for(let c = 0 ; c < this.aTetro.length ; c++){
                
                if(this.aTetro[f][c]){
                    this.tablero.dibujarCasilla(this.x+c,this.y+f,color);
                    
                }
                
            }
            
        }
        
    }

    // dibuja el color de una pieza
    dibujar = () => {
        
        this.rellenar(this.color);
        
    }

    // borra una pieza rellenandola de casillas blancas
    borrar = () => {
        
        this.rellenar(this.tablero.vacio);
      
    }

    // mover abajo la pieza, si queda fijada, deberá obtener una nueva
    moverAbajo = () => {
 
        if(!this.colision(0, 1,this.aTetro)) {
            
            this.borrar();
            this.y++;
            this.dibujar();
            
        }
        
        else{
            
            this.fijar();
            juego._pieza = juego._pSig; 
            juego._pSig = juego.piezaAleatoria();
            
        }
    
    }

    // mover derecha la pieza hasta chocar con la pared 
    moverDerecha = () => {
        
        if(!this.colision(1,0,this.aTetro)){
            this.borrar();
            this.x++;
            this.dibujar();
        }
        
    }

    // mover izquierda la pieza hasta chocar con la pared 
    moverIzquierda = () => {
        
        if(!this.colision(-1,0,this.aTetro)){
            this.borrar();
            this.x--;
            this.dibujar();
        }
        
    }

    // fijar pieza cuando choca con el suelo u otra pieza
    // hay que comprobar si se ha formado una o varias lineas para borrarlas 
    fijar = () => {
        
        for(let f = 0 ; f < this.aTetro.length ; f++){
            
            for(let c = 0 ; c < this.aTetro.length ; c++){
                
                if(!this.aTetro[f][c]) continue;
                
                if(this.y + f < 0){
                    
                    alert("Se acabó");
                    juego.gameOver = true;
                    break;
                    
                }
                
                this.tablero.tablero[this.y+f][this.x+c] = this.color;
                
            }
            
        }     
        
        this.tablero.eliminarFilasCompletas();
        
        this.tablero.dibujarTablero();
        
    }

    // Comprueba si se produce una colisión de una pieza con el suelo u otra pieza 
    colision = (x, y, pieza) => {
        
        for(let f = 0 ; f < pieza.length ; f++){
            
            for(let c = 0 ; c < pieza.length ; c++){
                
                if(!pieza[f][c]) continue;
                
                let pX = this.x + c + x;
                let pY = this.y + f + y;
                
                if(pX < 0 || pX >= this.tablero.columnas || pY >= this.tablero.filas) return true;
                
                if(pY < 0) continue;
                
                if(this.tablero.getCasilla(pY,pX) != this.tablero.vacio) return true;
                
            }
            
        }
        
        return false;
            
    }
    
}