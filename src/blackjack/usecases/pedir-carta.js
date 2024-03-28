/**
 * Esta función recibe un deck y retorna una carta
 * @param {Array<string>} deck eg. ['C','D','H','S']
 * @returns {String} retorna una carta
 */
export const pedirCarta = (deck) => {

    if (!deck ||  deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    return deck.pop();
}