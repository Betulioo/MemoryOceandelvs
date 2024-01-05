const endGame = ()=>{
    main$$.innerHTML = "";
    let endDiv$$ = document.createElement("div");
    endDiv$$.classList = "endDiv fadeInFoward";
    endDiv$$.id = "endDiv";
    let endImg$$ = document.createElement("img");
    endImg$$.classList = "endImg";
    endImg$$.setAttribute("src", "./public/assets/memoryGame/endGame.png");
    const canva = document.createElement("canvas");
    canva.id = "confetti";
    const nextLvlBtn$$ = document.createElement("button");
    nextLvlBtn$$.setAttribute("type", "button");
    nextLvlBtn$$.classList = "nextLvlBtn btn btn-primary";
    nextLvlBtn$$.id = "nextLvlBtn";
    nextLvlBtn$$.innerText = "Next level \xa1Hurray! ";
    nextLvlBtn$$.onclick = newGame;
    const tryAgainBtn$$ = document.createElement("button");
    tryAgainBtn$$.setAttribute("type", "button");
    tryAgainBtn$$.classList = "tryAgainBtn btn btn-primary";
    tryAgainBtn$$.id = "tryAgainBtn";
    tryAgainBtn$$.innerText = "See new cards :)";
    tryAgainBtn$$.onclick = newGame;
    endDiv$$.appendChild(canva);
    endDiv$$.appendChild(endImg$$);
    endDiv$$.appendChild(tryAgainBtn$$);
    endDiv$$.appendChild(nextLvlBtn$$);
    main$$.appendChild(endDiv$$);
    confeti();
    const cardssDiv$$ = document.querySelector('[data-function="cardsReady"]');
    if (cardssDiv$$) cardssDiv$$.style.display = "none";
};
const endFn = ()=>{
    if (score === oceanCards6.length) {
        chronometer();
        endGame();
    }
};

//# sourceMappingURL=index.fb4f0d23.js.map
