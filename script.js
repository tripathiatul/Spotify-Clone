console.log("Welcome to Spotify")
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songs=[

    {songName:"1", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"2", filePath:"song/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"3", filePath:"song/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"4", filePath:"song/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"5", filePath:"song/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"6", filePath:"song/6.mp3", coverPath:"covers/6 .jpg"},
]

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
       audioElement.play(); 
       masterplay.classList.remove('fa-circle-play');
       masterplay.classList.add('fa-circle-pause');
       gif.style.opactiy=1;

    }
    else
    {
        audioElement.pause(); 
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opactiy=0;
 
     }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})