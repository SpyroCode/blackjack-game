/**
 * Función que crea una carta en HTML
 * @param carta {string} - Carta a crear
 * @returns {HTMLImageElement} - Elemento HTML de la carta
 */
export const crearCartaHtml = (carta) => {
    if( !carta ) throw new Error('No se recibió la carta');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
};