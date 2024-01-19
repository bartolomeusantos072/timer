
const timer = document.querySelector('.timer');
let segundos =0;
let interval;


function convertSegundosHoras(segundos){
    const data = new Date(segundos* 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'GMT'
    });
}

function runTimer(){
    interval = setInterval(function runTimer() {
        segundos++;
        timer.innerHTML= convertSegundosHoras(segundos);
    },10)
}

document.addEventListener('click',function(e){
    const eventSearch =e.target.classList;
    if(eventSearch.contains('play')){
        functionPlay()
    }else if(eventSearch.contains('pause')){
        functionPause();
    }else if(eventSearch.contains('reset')){
        functionReset();
    }
     
})

function functionPlay(){
    const play = document.querySelector('.play');
    play.innerHTML = `Pause`;
    play.classList.replace('play','pause');
    timer.innerHTML=`${runTimer()}`;
    timer.style.color='black';
   
}

function functionPause(){
    clearInterval(interval);
    const pause = document.querySelector('.pause');
    pause.innerHTML = `Play`;
    pause.classList.replace('pause','play');
    timer.style.color='red';
}

function functionReset(){
    clearInterval(interval);
    segundos=0;
    timer.innerHTML='00:00:00';
    timer.style.color='red';
}