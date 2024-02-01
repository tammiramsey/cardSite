var deck = [
  "images/ace_of_spades.png",
  "images/ace_of_clubs.png",
  "images/ace_of_diamonds.png",
  "images/ace_of_hearts.png",
  "images/king_of_spades.png",
  "images/king_of_clubs.png",
  "images/king_of_diamonds.png",
  "images/king_of_hearts.png",
  "images/queen_of_spades.png",
  "images/queen_of_clubs.png",
  "images/queen_of_diamonds.png",
  "images/queen_of_hearts.png",
  "images/jack_of_spades.png",
  "images/jack_of_clubs.png",
  "images/jack_of_diamonds.png",
  "images/jack_of_hearts.png",
  "images/10_of_spades.png",
  "images/10_of_clubs.png",
  "images/10_of_diamonds.png",
  "images/10_of_hearts.png",
  "images/9_of_spades.png",
  "images/9_of_clubs.png",
  "images/9_of_diamonds.png",
  "images/9_of_hearts.png",
  "images/8_of_spades.png",
  "images/8_of_clubs.png",
  "images/8_of_diamonds.png",
  "images/8_of_hearts.png",
  "images/7_of_spades.png",
  "images/7_of_clubs.png",
  "images/7_of_diamonds.png",
  "images/7_of_hearts.png",
  "images/6_of_spades.png",
  "images/6_of_clubs.png",
  "images/6_of_diamonds.png",
  "images/6_of_hearts.png",
  "images/5_of_spades.png",
  "images/5_of_clubs.png",
  "images/5_of_diamonds.png",
  "images/5_of_hearts.png",
  "images/4_of_spades.png",
  "images/4_of_clubs.png",
  "images/4_of_diamonds.png",
  "images/4_of_hearts.png",
  "images/3_of_spades.png",
  "images/3_of_clubs.png",
  "images/3_of_diamonds.png",
  "images/3_of_hearts.png",
  "images/2_of_spades.png",
  "images/2_of_clubs.png",
  "images/2_of_diamonds.png",
  "images/2_of_hearts.png",
];

//array to store shuffled deck
var shuffledDeck = [];

//array to store references to the dealt images
var dealtImages = [];

function shuffle(){
    for(var i=0; i < 52; i++){
        var randomInteger = Math.floor(Math.random() * deck.length);
        shuffledDeck.push(deck[randomInteger]);
        deck.splice(randomInteger, 1);
    }
   deal();
}

//this function displays the images of the deck of cards
function deal() {
    var table = document.getElementById("velvet");

    for (var i=0; i <52; i++){
        var myImage = new Image();
        myImage.src = shuffledDeck[0];
        table.appendChild(myImage);
        dealtImages.push(myImage);
        shuffledDeck.splice(0,1);
    }
}


  
