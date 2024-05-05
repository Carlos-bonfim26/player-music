let progress = document.getElementById('progress');
let song = document.getElementById('song');
let crtlIcon = document.getElementById('crtlIcon');

song.onloadeddata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(crtlIcon.classList.contains('fa-pause')){
        song.pause();
        crtlIcon.classList.remove("fa-pause");
        crtlIcon.classList.add("fa-play");
    } else{
        song.play();
        crtlIcon.classList.remove("fa-play");
        crtlIcon.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(()=> { progress.value = song.currentTime;}, 10000);
   
} 

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    crtlIcon.classList.remove("fa-pause");
    crtlIcon.classList.add("fa-play");
}

function rewindSong(){
    const newTime = song.currentTime - 5;
    if(newTime > 0){
        song.currentTime = newTime
    } else{
        song.currentTime = 0;
    }
}

const rewindButton = document.getElementById('rewind');
rewindButton.addEventListener('click',rewindSong)

function advanceSong(){
    const newTime = song.currentTime + 5;
    if(newTime <= 322 ){
song.currentTime = newTime;
    } else{
        song.currentTime = 0
    }
}
const advanceButton = document.getElementById('advance');

advanceButton.addEventListener('click', advanceSong)