import _ from "underscore";
import Toastify from "toastify-js";

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Eg. ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Eg. ['A','J','Q','K']
 * @returns {Array<string>} retorna un deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if ( !tiposDeCarta || !tiposEspeciales || tiposDeCarta.length === 0 || tiposEspeciales.length === 0) {
        Toastify({
            text: "Se necesitan los tipos de cartas y los tipos especiales",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    }
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}