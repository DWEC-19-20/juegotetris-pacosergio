# TETRIS - PRÁCTICA 4.1

Proyecto basado en la recreación del mítico "Tetris", uno de los juegos más populares creado en 1985 por Alexei Pajitnov.

## AUTORES:
* **Francisco Izquierdo:** Documentación, JS
* **Javier Jusdado:** CSS, JS
* **Sergio Ruíz:** Documentación, JS

## Hecho con:
  - JavaScript
  - HTML
  - CSS
  
## Directorios y ficheros:
  * CSS: Contiene el archivo que define el estilo de la página.
  * js: Contiene los archivos del juego.
    - Juego.js: Salida de piezas y control del teclado.
    - Pieza.js: Movimiento de las piezas.
    - Tablero.js: Dibuja el tablero y se encarga de borrarlo al completar filas.
    - script.js: Inicia el juego y agrega las funciones al html.
    - tetrominos.js: Contiene los arrays de las piezas.
  * Multimedia: Contiene audio e imagenes. 
  * index.html: Contiene el código html.
  
## Puntos de la práctica:
  1. Cómo usuario querría poder mover las piezas del Tetris pulsando flecha izquierda o derecha para que pueda elegir donde situar la pieza **Sergio** - **Javier**
  2. Cómo usuario querría poder mover las piezas del Tetris rápidamente pulsando flecha abajo una vez elegida donde situar la pieza para que pueda ganar tiempo **Sergio** - **Javier**
  3. Cómo usuario querría poder girar las piezas del Tetris pulsando flecha arriba para que encaje mejor **Javier** - **Francisco**
  4. Cómo usuario querría visualizar mi puntuación y/o lineas desbloqueadas para que sepa si voy a superar un record **Sergio** - **Francisco**
  5. Cómo usuario querría visualizar la/s siguiente/s pieza/s para que pueda planear donde ponerla **Francisco**
  6. Cómo usuario querría visualizar el record más alto para que intente superarlo **Sergio** - **Javier**
  7. Cómo usuario querría aumentar la dificultad aumentando la dificultad para que suponga un reto mayor obtener un record **Sergio** - **Francisco**
  8. Cómo programador analista querría utilizar un canvas HTML5 para que se visualice el array del juego de 10 x 20 **Javier** - **Francisco**
  9. Cómo programador analista querría tener definidas las clases Juego, Pieza, Tablero para utilizar las ventajas de la programación orientada a objetos **Sergio** - **Francisco**
  10. Cómo programador analista querría tener en la clase Pieza tenga las propiedades tetromino, color, tetrominioActual, númeroTetrominio, posiciónX, posiciónY, posición además de redibir una instancia del tablero para poder utilizarlo en el juego **Sergio** - **Francisco**
  11. Cómo programador analista querría tener en la clase Pieza los métodos moverIzquierda, moverDerecha, rotar y moverAbajo para que se mueva la pieza activa  **Sergio** - **Javier**
  12. Cómo programador analista querría que el método rotar de la clase Pieza controle si está en el borde del tablero para poder girar la pieza solo si tiene espacio **Sergio** - **Francisco**
  13. Cómo programador analista querría tener en la clase Pieza el método fijar cuando la pieza activa toque una pieza ocupada del tablero para que se pueda eliminar filas y obtener la siguiente pieza **Javier** - **Francisco**
  14. Cómo programador analista querría que el cuando se fije una pieza se llame a la función comprobarFilas de la clase Tablero, para que elimine las filas completadas **Sergio** - **Javier**
  15. Cómo programador analista querría que el cuando se fije una pieza se llama a la función termine el juego si la pieza ocupa una posición más alta al tablero, para que el juego termine **Sergio** - **Francisco**
  16. Cómo programador analista querría modificar la función caer para que después de un número de lineas completadas, aumente el nivel, para que caiga la pieza con más velocidad **Sergio** - **Francisco**
  17. Cómo programador analista querría tener una función piezaAleatoria en la clase Juego para que obtenga la pieza aleatoria en el juego y la siguiente a jugar **Javier** - **Francisco**
  18. Cómo programador analista querría tener test unitarios de las funciones esVacio, eliminarFilasCompletas, colision, fijar para que este seguro del correcto funcionamiento del juego **En proceso**

# 
