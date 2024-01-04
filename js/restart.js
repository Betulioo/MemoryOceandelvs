
startLi$$.style.display = "none";
pauseButton$$.style.display = "none";




const restart = () =>{
    const confetti$$ = document.getElementById('confetti');
    const endDiv$$ = document.getElementById('endDiv');

    clearInterval(intervalId);
    segundos = 0;
    minutos = 0;
    count = 0;
    score = 0;
    divCount$$.textContent=` ${count}`
    divCount2$$.textContent=` ${score}`
    // cardssDiv$$.style.display = "block"
        onInit();

    
}

const pause = ()=>{
    clearInterval(intervalId);
    startLi$$.style.display = "block";

}
pauseButton$$.onclick = pause;

const newGame = ()=>{
// this function sort sort the array and with the math.random  is sort randomdly
totalOceanCards.sort(()=> 0.5 - Math.random())
    restart()
    pauseButton$$.style.display = "block";
}
newGameButton$$.onclick = newGame;


const start = ()=>{
    chronometer();
    startLi$$.style.display = "none";

}
startButton$$.onclick = start;
