const chronometer = ()=>{
    if (score === 0) intervalId = setInterval(()=>{
        segundos++;
        if (segundos < 10) chronoDiv$$.textContent = `0${minutos}:0${segundos}`;
        else if (segundos >= 10) {
            chronoDiv$$.textContent = `0${minutos}:${segundos}`;
            if (segundos > 59) {
                minutos++;
                segundos = 0;
                chronoDiv$$.textContent = `0${minutos}:0${segundos}`;
            }
        } else if (minutos > 9) {
            minutos++;
            chronoDiv$$.textContent = `${minutos}:0${segundos}`;
        }
    }, 1000);
    else clearInterval(intervalId);
};

//# sourceMappingURL=index.68ce8bb2.js.map
