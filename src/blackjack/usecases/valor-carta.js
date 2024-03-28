import Toastify from "toastify-js";

/**
 * Devuelve el valor de la carta
 * @param {String} carta
 * @returns {number|number} valor de la carta
 */
export const valorCarta = ( carta ) => {
    if ( !carta ) {
        Toastify({
            text: "Se necesita la carta",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    }

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
        ( valor === 'A' ) ? 11 : 10
        : valor * 1;
}