import {crearCartaHtml, pedirCarta, valorCarta} from "./";

/**
 *
 * @param {Number} puntosMinimos puntos minimos para ganar
 * @param {HTMLElement} puntosHTML puntos de jugador y computadora
 * @param {HTMLElement} divCartasComputadora div de cartas de la computadora
 * @param {Array<string>} deck deck de cartas
 */
export  const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck =[] ) => {
    if (!puntosMinimos) throw new Error('Se necesita los puntos minimos son necesarios');
    if (!deck) throw new Error('Se necesita el deck de cartas');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHtml( carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}