const asideCards = (MatchedCards) => {
  let singlesCard = [];
  let cardMain$$ = document.createElement('div');
  cardMain$$.innerHTML = "";
  cardssDiv$$.appendChild(cardMain$$);
  main$$.appendChild(cardssDiv$$)


  if (
    MatchedCards.find((findedCard) => findedCard.name === MatchedCards.name)
  ) {
    return;
  } else {
    MatchedCards.forEach((element) => {
      singlesCard.push(element);
    });
  }
console.log(singlesCard);

if (singlesCard){
  setTimeout(()=>{
    cardMain$$.classList= "cardMain fadein";

    let cardDiv$$ = document.createElement("div");
    cardDiv$$.className = `cardDiv  card__contenido`;

    let cardImg$$ = document.createElement("img");
    cardImg$$.setAttribute("src", `${singlesCard[singlesCard.length-1].img}`);
    cardImg$$.className = `cardImg`;

    let cardDiv2$$ = document.createElement("div");
    cardDiv2$$.className = `card descubierta`;
    // cardDiv2$$.innerHTML = "";
    cardDiv2$$.setAttribute("data-id", singlesCard[singlesCard.length-1].id);
    cardDiv2$$.appendChild(cardDiv$$);
    cardDiv$$.appendChild(cardImg$$);
    cardMain$$.appendChild(cardDiv2$$);
    setTimeout(()=>{
      cardMain$$.classList.remove("fadein")
    },1500)

    //  cardDiv2$$.addEventListener("click",(event)=> flipCard(event,i))
    },1200)
    
}

};
