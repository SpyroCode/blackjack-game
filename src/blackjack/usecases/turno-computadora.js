import Toastify from 'toastify-js'
import {crearCartaHtml, pedirCarta, valorCarta} from "./";

/**
 *
 * @param {Number} puntosMinimos puntos minimos para ganar
 * @param {HTMLElement} puntosHTML puntos de jugador y computadora
 * @param {HTMLElement} divCartasComputadora div de cartas de la computadora
 * @param {Array<string>} deck deck de cartas
 */
export  const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck =[] ) => {
    if (!puntosMinimos) {
        Toastify({
            text: "Se necesita los puntos minimos son necesarios",
            duration: 3000,
            newWindow: true,
            className: "error",
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    };
    if (!deck) {
        Toastify({
            text: "Se necesita el deck de cartas",
            duration: 3000,
            newWindow: true,
            className: "error",
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    };

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
            Toastify({
                text: "Nadie gana :(",
                duration: 3000,
                newWindow: true,
                className: "info",
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();
        } else if ( puntosMinimos > 21 ) {
            Toastify({
                text: "Computadora gana",
                duration: 3000,
                newWindow: true,
                className: "info",
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();
        } else if( puntosComputadora > 21 ) {
            Toastify({
                text: "Jugador Gana",
                duration: 3000,
                newWindow: true,
                className: "success",
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();
        } else {
            Toastify({
                text: "Computadora Gana",
                duration: 3000,
                newWindow: true,
                className: "info",
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();
        }
    }, 100 );
}