import Toastify from "toastify-js";

/**
 * Esta función recibe un deck y retorna una carta
 * @param {Array<string>} deck eg. ['C','D','H','S']
 * @returns {String} retorna una carta
 */
export const pedirCarta = (deck) => {

    if (!deck ||  deck.length === 0 ) {
        Toastify({
            text: "No hay cartas en el deck",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    }
    return deck.pop();
}