import Toastify from "toastify-js";

/**
 * Función que crea una carta en HTML
 * @param carta {string} - Carta a crear
 * @returns {HTMLImageElement} - Elemento HTML de la carta
 */
export const crearCartaHtml = (carta) => {
    if( !carta ) {
        Toastify({
            text: "No se recibió la carta",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    };

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
};