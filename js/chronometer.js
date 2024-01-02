
const chronometer = () =>{
    let chronoDiv$$ = document.querySelector('[data-function="chronometer"]');

   intervalId = setInterval(()=>{
        segundos++   
        if(segundos < 10)    {     
        chronoDiv$$.textContent=`0${minutos}:0${segundos}`;
    } else if(segundos>=10){

        chronoDiv$$.textContent=`0${minutos}:${segundos}`;
        if (segundos > 59){
            minutos++
            segundos =0;
            chronoDiv$$.textContent=`0${minutos}:0${segundos}`;
    
        } 

    }    

        },1000);
    }