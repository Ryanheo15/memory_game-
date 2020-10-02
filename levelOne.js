cardArray=[
    {text: "A", image: "images/Level1/Alien.png"},
    {text: "A", image: "images/Level1/Alien@2x.png"},
    {text: "B", image: "images/Level1/Bee.png"},
    {text: "B", image: "images/Level1/Bee@2x.png"},
    {text: "C", image: "images/Level1/C-Saw-C.png"},
    {text: "C", image: "images/Level1/C-Saw-C@2x.png"},
    {text: "D", image: "images/Level1/Dude.png"},
    {text: "D", image: "images/Level1/Dude@2x.png"},
    {text: "E", image: "images/Level1/Elfee-E.png"},
    {text: "E", image: "images/Level1/Elfee-E@2x.png"},
    {text: "F", image: "images/Level1/FitFred.png"},
    {text: "F", image: "images/Level1/FitFred@2x.png"},
    {text: "G", image: "images/Level1/Girl.png"},
    {text: "G", image: "images/Level1/Girl@2x.png"},
    {text: "H", image: "images/Level1/GoGreen.png"},
    {text: "H", image: "images/Level1/GoGreen@2x.png"},
    {text: "I", image: "images/Level1/MrFace.png"},
    {text: "I", image: "images/Level1/MrFace@2x.png"}
];

clickedCard=[];

matchedCard=[];


///////////////////////////////////////// SHUFFLE DECK
var shuffleDeck=function(){
  // Using the Fisher-Yates (Knuth) shuffle
  var currentIndex = cardArray.length
  , temporaryValue
  , randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cardArray[currentIndex];
    cardArray[currentIndex] = cardArray[randomIndex];
    cardArray[randomIndex] = temporaryValue;
  }
}
///////////////////////////////////////// End shuffle DECK
  shuffleDeck();
  console.log(cardArray);
var board=document.getElementById("board");

for(var i=0; i<cardArray.length; i++){

  // appending cards to board
  var cardsBack=document.createElement("div");
  cardsBack.classList.add("card");
  board.appendChild(cardsBack);

  // adding images to cardback
  var images=document.createElement("img");
  images.src = cardArray[i].image;
  images.className="image";
  cardsBack.appendChild(images);



  // Change color of cards on click
  cardsBack.addEventListener("click",function(){

    var card = this;
    if (clickedCard.length < 2){
     card.classList.add("image");
      card.classList.add("match"); // add class of match to all cards
      clickedCard.push(card.innerHTML);
      matchedCard.push(card);

      //// compares cards that are clicked on
      if (clickedCard.length === 2){
        let image1 = clickedCard[0].split("/")[2].split(" ")[0];
        let image2 = clickedCard[1].split("/")[2].split(" ")[0];

        if(image1.includes("@2x")){
          image1 = image1.replace("@2x", "");
        }
        if(image2.includes("@2x")){
          image2 = image2.replace("@2x", "");
        }

        if (image1 === image2){

          console.log("It's a match!");
            clickedCard=[];
            matchedCard=[];
        } else {
          console.log("It's not a match!")
          setTimeout(turnOffAllCards, 1000);
          for (i=0; i<matchedCard.length; i++){
            matchedCard[i].classList.remove("match");
          }
          matchedCard=[];
           // calls turnOffAllCards
        }
      } // close if statement
    } // close second if statement
  }) // event listener
} // close for loop

function turnOffAllCards(){
  var frontCards = document.querySelectorAll("div.image:not(.match)");
  for(var i = 0; i < frontCards.length; i++){
    frontCards[i].classList.remove("image");
    clickedCard=[];

  }

}
