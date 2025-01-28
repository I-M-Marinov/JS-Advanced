function createCard(face, suit) {

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suitsMap = {
        'S': '\u2660', // Spades
        'H': '\u2665', // Hearts
        'D': '\u2666', // Diamonds
        'C': '\u2663'  // Clubs
    };

    if (!validFaces.includes(face)) {
        if (!suitsMap[suit]) {
            throw new Error(`Error`);
        }
    }


    return {
        face,
        suit,
        toString() {
            return `${face}${suitsMap[suit]}`;
        }
    };
}



try {

const card1 = createCard('A', 'S');
console.log(card1.toString()); // Output: A♠

const card2 = createCard('10', 'H');
console.log(card2.toString()); // Output: 10♥

const card3 = createCard('Q', 'D');
console.log(card3.toString()); // Output: Q♦

const invalidCard = createCard('1', 'X'); 

} catch (error) {
    console.log(error.message);
}
