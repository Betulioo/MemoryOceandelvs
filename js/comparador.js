// this function compare the selected cards and compared it
const compareCards = () => {
const firstCardDiv$$ = document.querySelectorAll('.selected');
const removeClass =()=>{

    firstCardDiv$$[0].classList.remove("descubierta");
    firstCardDiv$$[1].classList.remove("descubierta");
    firstCardDiv$$[0].classList.remove("selected");
    firstCardDiv$$[1].classList.remove("selected");

}

    const firstCard = cardsPicked[0];
    const secondCard = cardsPicked[1];

  

if (firstCard.id !== secondCard.id){
    setTimeout(removeClass,800);
    cardsPicked=[];

    //here goes the counter function
    contador()
}else {
setTimeout(()=>{
    cardsMatched.push(cardsPicked[0]);
    firstCardDiv$$[0].classList.remove("selected");
    firstCardDiv$$[1].classList.remove("selected");
    firstCardDiv$$[0].hidden = true;
    firstCardDiv$$[1].hidden = true;
    cardsPicked=[];
    asideCards(cardsMatched);
    scorePlay();

},900)

}
    // console.log(cardsPicked);

  
  };
