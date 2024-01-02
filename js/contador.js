const contador = () =>{
    count++
  const divCount$$ =  document.querySelector('[data-function="attempts"]');
  divCount$$.textContent=` ${count}`
}

const scorePlay = () =>{
    score++
    const divCount$$ =  document.querySelector('[data-function="score"]');
    divCount$$.textContent=` ${score}`
}