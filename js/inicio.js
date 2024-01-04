//this function create the table with the cards

const createTable = (cardArray) => {
 main$$.innerHTML=""
    const divCards$$ = document.createElement("div");
    divCards$$.setAttribute("data-function","cardsReady");
    divCards$$.classList="cardsReady"

    const divGrid$$ = document.createElement("div");
    divGrid$$.setAttribute("data-function","grid");
    divGrid$$.classList="mesi"

    main$$.appendChild(divCards$$);
    main$$.appendChild(divGrid$$);

    let divTable$$ = document.createElement("div");
    divTable$$.className = `tableDiv mesa`;
    divGrid$$.appendChild(divTable$$);

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
            
      };
      
      // onInit();
      
    