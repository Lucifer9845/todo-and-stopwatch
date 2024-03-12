const display = document.getElementById('displaytime');
const playPauseBtn = document.getElementById('playbtn');
const lapsbtn = document.getElementById('laps');

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isrunning = false;
let lapcounter = 0;

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
        laps();
        clearInterval(timer);
        elapsedTime = Date.now()-startTime;
        isrunning = false;
        playPauseBtn.classList.remove('fa-pause');
        playPauseBtn.classList.add( 'fa-play' );
        
    }

}

function laps(){
    if(isrunning){
        const newlap = document.createElement('li');
        newlap.innerText = display.textContent;

        lapsbtn.appendChild(newlap);
        lapcounter++;
    }
}



function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;    
    isrunning = false;
    display.textContent="00:00:00:00"
    playPauseBtn.classList.remove('fa-pause');
    playPauseBtn.classList.add( 'fa-play' );

    //code which removes the added lap counter;
    while(lapcounter>0){
        lapsbtn.removeChild(lapsbtn.firstChild);
        lapcounter--;
    }
}

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


// the to-do List part
const todoInput = document.getElementById('todoInput');
const addtodobtn = document.getElementById('addbtn');
const todolist = document.getElementById('todolist');
let count = 0;

addtodobtn.addEventListener('click', ()=>{

    const todotext= todoInput.value;

    if(todotext !== '' && count<6){
        count++;
        const newtodoItem = document.createElement("li");
        newtodoItem.innerText = todotext;

        const deletebtn = document.createElement("i");
        deletebtn.classList.add("fa-solid" , "fa-xmark");

        deletebtn.addEventListener('click', ()=>{
            newtodoItem.remove();
            count--;
        })

        newtodoItem.appendChild(deletebtn);
        todolist.appendChild(newtodoItem);
        todoInput.value='';

    }
    else if(todotext===""){
        alert(`Enter an actual task, get some work done for real my g🤦`);
    }
    else {
        alert(`First complete those tasks which you already have, then add more. thu`)
    }
})