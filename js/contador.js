const contador = () =>{
    count++

  score$$.classList.add("pulseHearth");
  divCount$$.textContent=` ${count}`;
  // setTimeout(()=>{
  //   score$$.classList.remove("pulseHearth")
  // },500)
}

const scorePlay = () =>{
    score++
    score$$.textContent=` ${score}`
    endFn()
}