class Tablero {
    constructor(filas, columnas, tamañoCuadrado, ctx, ctxNext) {
        this._fila = filas;
        this.colum = columnas;
        this.TC = tamañoCuadrado;
        this.ctx = ctx;
        this.vacio = "BLACK";
        
        this.tablero = [];
        
        for(var r = 0 ; r < this.filas ; r++){            
            this.tablero[r] = [];        
            for(var c = 0 ; c < this.columnas ; c++){                
                this.tablero[r][c] = this.vacio;                
            }
        }
    }

    // Es vacio si tiene el color WHITE
    esVacio = (x, y) => {
        
        if(this.tablero[y][x] == this.vacio) return true;
        
        else return false;
        
    }

    // Dibuja un en el canvas del color recibido
    dibujarCasilla = (x, y, color) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.TC, y * this.TC, this.TC, this.TC);
        this.ctx.strokeStyle = "RED";
        this.ctx.strokeRect(x * this.TC, y * this.TC, this.TC, this.TC);
    }

    // dibujar en el canvas según los colores del tablaro
    
    dibujarTablero = () => {
        
        for(var r = 0 ; r < this.filas ; r++){
            
            for(var c = 0 ; c < this.columnas ; c++){
                
                this.dibujarCasilla(c, r, this.tablero[r][c]);
                
            }
            
        }
        
    }
    
    dibujarTableroVacio = () => {
        
        for(var r = 0 ; r < this.filas ; r++){
            
            for(var c = 0 ; c < this.columnas ; c++){
                
                this.tablero[r][c] = this.vacio;
                
            }
            
        }
        
    }

    get filas() {
        
        return this._fila;
        
    }

    set filas(fila) {
        
        this._fila = fila;
        
    }

    get columnas() {
        
        return this.colum;
        
    }

    set columnas(columna) {
        
        this.colum = columna;
        
    }

    //Devuelve el color del tablero en la casilla indicada
    getCasilla = (f, c) => {
        
        return this.tablero[f][c];
        
    }

    //Cambiar el color del tablero en la casilla indicada
    setCasilla = (f, c, color) => {
        
        this.tablero[c][f] = color;      
        
    }

    // Eliminamos las filas que estén completas e incrementamos la puntuación
    eliminarFilasCompletas = () => {
        
        for(let f = 0 ; f < this.filas ; f++){
            
            let llena = true;
            
            for(let c = 0 ; c < this.columnas ; c++){
                
                llena = llena && this.tablero[f][c]!=this.vacio;
                
            }
            
            if(llena){
                
                for(let y = f ; y > 1 ; y--){
                    
                    for(let c = 0 ; c < this.columnas ; c++){
                        
                        this.tablero[y][c] = this.tablero[y-1][c];
                        
                    }
                    
                }
                
                for(let c = 0 ; c < this.columnas ; c++){
                    
                    this.tablero[0][c] = this.vacio;
                    
                }
                
                juego.score += 10;
                
            }
            
        }
        
        puntuacion.innerHTML = juego.score;
        
        juego.pAltas();

    }

}