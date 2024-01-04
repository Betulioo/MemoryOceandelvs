const endGame = ()=>{

    let endDiv$$ = document.createElement('div');
    endDiv$$.classList="endDiv fadeInFoward";

    let endImg$$ = document.createElement('img');
    endImg$$.classList="endImg"
    endImg$$.setAttribute('src','./public/assets/memoryGame/endGame.png');

    endDiv$$.appendChild(endImg$$);
    main$$.appendChild(endDiv$$);

}

const endFn = () =>{
    if (score===oceanCards6.length){
        chronometer();
        endGame();
    }
}