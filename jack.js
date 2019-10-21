function randomPick(temp)
{
    return temp[Math.floor(Math.random() * temp.length)];
}

var cards = {
    Ace: ["Spades", "Clubs", "Queens", "Kings"],
    Two: ["Spades", "Clubs", "Queens", "Kings"],
    Three: ["Spades", "Clubs", "Queens", "Kings"],
    Four: ["Spades", "Clubs", "Queens", "Kings"],
    Five: ["Spades", "Clubs", "Queens", "Kings"],
    Six: ["Spades", "Clubs", "Queens", "Kings"],
    Seven: ["Spades", "Clubs", "Queens", "Kings"],
    Eight: ["Spades", "Clubs", "Queens", "Kings"],
    Nine: ["Spades", "Clubs", "Queens", "Kings"],
    Ten: ["Spades", "Clubs", "Queens", "Kings"],
    Jack: ["Spades", "Clubs", "Queens", "Kings"],
    Queen: ["Spades", "Clubs", "Queens", "Kings"],
    King: ["Spades", "Clubs", "Queens", "Kings"],
    Ace: ["Spades", "Clubs", "Queens", "Kings"],
}

var faces = Object.keys(cards);
var face = randomPick(faces);

var suits = cards[face];
var suit = randomPick(suits);

var card = `${face} of ${suit}`

console.log(`Your card is a ${card}`)


