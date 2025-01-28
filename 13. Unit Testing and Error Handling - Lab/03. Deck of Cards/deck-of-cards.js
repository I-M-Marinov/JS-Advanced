function printDeckOfCards(cards) {

    function createCard(face, suit) {

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const suitsMap = {
            'S': '\u2660', // Spades
            'H': '\u2665', // Hearts
            'D': '\u2666', // Diamonds
            'C': '\u2663'  // Clubs
        };

        if (!validFaces.includes(face) || !suitsMap[suit]) {
            throw new Error(`Invalid card: ${card}`);
        }

        return {
            face,
            suit,
            toString() {
                return `${face}${suitsMap[suit]}`;
            }
        };
    }

    const result = [];

    for (const card of cards) {

        try {
            const face = card.slice(0, -1); 
            const suit = card.slice(-1);  

            const cardObj = createCard(face, suit);
            result.push(cardObj.toString());

        } catch (error) {
            console.log(`Invalid card: ${card}`);
            return; 
        }
    }

    console.log(result.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']); // Output: A♠ 10♦ K♥ 2♣
printDeckOfCards(['5S', '3D', 'QD', '1C']); // Output: Invalid card: 1C
