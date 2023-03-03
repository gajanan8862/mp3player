let state = "paused";
const play_pause_btn = document.getElementById("btn2-img");
play_pause_btn.src = "./images/play-icon.png";
const spinner = document.getElementById("spinner");
spinner.classList.add("paused");
let line = document.getElementById("hrr");
line.classList.add("paused");

function playPause(){
    
    if(state=="playing"){
        play_pause_btn.src = "./images/play-icon.png";
        state = "paused";
    }else{
        play_pause_btn.src = "./images/pause-icon.png";
        state = "playing";
    }
    spinner.classList.toggle("paused");
    line.classList.toggle("paused");
}

var i=1;
function inc(){
    if(state=="playing"){
        if(i<=9){
            document.getElementById("start-time").innerHTML="0:0"+i;
        }else{
            document.getElementById("start-time").innerHTML="0:"+i;
        }
        if(i<59){
            i++;
        }else{
            i=0;
        }
    }
}
setInterval(inc,1000 );