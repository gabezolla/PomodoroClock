const clock = document.querySelector(".timeStamp");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const restart = document.querySelector("#restart");
const breakbut = document.querySelector("#break-choose");
const timerbut = document.querySelector("#timer-choose");
document.getElementById('timer-choose').style.backgroundColor = 'rgb(69, 143, 69)'; 
var beepSound = new Audio('bell-sound.mp3');
beepSound.volume = 0.5;

let initialTime = 1500;
//let initialTime = 10;
let timer;
let breakTime = 300; 

function createDate(stopwatch){
    const contDate = new Date(stopwatch*1000);
    return contDate.toLocaleTimeString('pt-BR', {
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
    });
}

function changeBreak(){
    document.getElementById('timer-choose').style.backgroundColor = 'rgb(91, 91, 156)';
    document.getElementById('break-choose').style.backgroundColor = 'rgb(69, 143, 69)';
    initialTime = breakTime;
    clock.innerHTML = createDate(initialTime);    
}

function startPomodoro(){
    timer = setInterval(function(){
        initialTime--;
        clock.innerHTML = createDate(initialTime);        
        
        if(initialTime==0){
            beepSound.play();
            initialTime = 0;
            clearInterval(timer);
            changeBreak();        
    }}, 1000);
}

start.addEventListener('click', function(event){
    clearInterval(timer), // evita que dois timers sejam iniciados simultaneamente
    startPomodoro();
});

pause.addEventListener('click', function(event){
    clearInterval(timer);
});

restart.addEventListener('click', function(event){
    if(document.getElementById('break-choose').style.backgroundColor == 'rgb(69, 143, 69)'){        
            clearInterval(timer),
            initialTime = 300,
            clock.innerHTML = createDate(initialTime);
    }
    else {
        clearInterval(timer),
        initialTime = 1500,
        clock.innerHTML = createDate(initialTime);
    }
});

timerbut.addEventListener('click', function(event){
    document.getElementById('timer-choose').style.backgroundColor = 'rgb(69, 143, 69)',
    document.getElementById('break-choose').style.backgroundColor = 'rgb(91, 91, 156)',
    clearInterval(timer),
    initialTime = 1500,
    clock.innerHTML = createDate(initialTime);
});

breakbut.addEventListener('click', function(event){
    document.getElementById('timer-choose').style.backgroundColor = 'rgb(91, 91, 156)',
    document.getElementById('break-choose').style.backgroundColor = 'rgb(69, 143, 69)',
    clearInterval(timer),
    changeBreak();
})



