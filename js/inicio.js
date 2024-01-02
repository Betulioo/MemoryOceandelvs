//this function create the table with the cards

const createTable = (cardArray) => {
  let gridCardPicked$$ = document.querySelector('[data-function="cardsReady"]')
  gridDiv$$.innerHTML= ""
gridCardPicked$$.innerHTML = "";
    let divTable$$ = document.createElement("div");
    divTable$$.className = `tableDiv mesa`;
    gridDiv$$.appendChild(divTable$$);
      for (let i = 0; i < cardArray.length; i++) {
        const cardInfo = cardArray[i];    
        // console.log(i);
      
        let cardDiv$$ = document.createElement("div");
        cardDiv$$.className = `cardDiv card__contenido`;
    
        let cardImg$$ = document.createElement("img");
        cardImg$$.setAttribute("src", ``);
        cardImg$$.className = `cardImg`;
    
        let cardDiv2$$ = document.createElement("div");
        cardDiv2$$.className=`card`;
        cardDiv2$$.setAttribute('data-id',cardInfo.id)
        cardDiv2$$.appendChild(cardDiv$$);
        cardDiv$$.appendChild(cardImg$$);
        divTable$$.appendChild(cardDiv2$$);
        cardDiv2$$.addEventListener("click",(event)=> flipCard(event,i))
        
      }
    };
//this is our initializator function

    const onInit = () => {
        createTable(totalOceanCards);
        chronometer();
        setInterval(()=>{
          if (score===6){
            endGame();
            clearInterval();
        }
        })

      };
      
      // onInit();
      
    