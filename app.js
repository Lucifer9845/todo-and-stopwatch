const display = document.getElementById('displaytime');
const playPauseBtn = document.getElementById('playbtn');

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isrunning = false;

function start(){
    if(!isrunning){
        startTime = Date.now()-elapsedTime;
        timer = setInterval(update, 10);
        isrunning = true;
        playPauseBtn.classList.remove('fa-play');
        playPauseBtn.classList.add( 'fa-pause' );
    }
    else if(isrunning)
    {
        clearInterval(timer);
        elapsedTime = Date.now()-startTime;
        isrunning = false;
        playPauseBtn.classList.remove('fa-pause');
        playPauseBtn.classList.add( 'fa-play' );
    }

}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;    
    isrunning = false;
    display.textContent="00:00:00:00"
}

// function pause(){
//     if(isrunning)
//     {
//         clearInterval(timer);
//         elapsedTime = Date.now()-startTime;
//         isrunning = false;
//     }
// }

function update(){
    const currentTime= Date.now();
    elapsedTime = currentTime-startTime;

    let hours = Math.floor(elapsedTime/ (1000*60*60));
    let minute = Math.floor(elapsedTime/(1000*60)%60)
    let seconds = Math.floor(elapsedTime/(1000)%60);
    let miliseconds = Math.floor(elapsedTime%1000 /10);

    hours = String(hours).padStart(2,'0');
    minute = String(minute).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    miliseconds = String(miliseconds).padStart(2, '0');

    display.textContent=`${hours}:${minute}:${seconds}:${miliseconds}`;
}