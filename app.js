let songIndex=0;
let audioElement = new Audio('music/1.mp3');

let masterplay=document.getElementById("masterplay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById('gif')
let songItem=Array.from(document.getElementsByClassName('eachSong'))
let playButtons=Array.from(document.getElementsByClassName('far'))
console.log(playButtons);
let songToplay=Array.from(document.getElementsByClassName("timeStamp"))
let runningSong=document.getElementById('runningSong')
let prevplay=document.getElementById('prevplay')
let nextplay=document.getElementById('nextplay')


let songs = [{ filename: "Bazz-damial", filepath: "music/1.mp3", coverpath: "image/1.png" },
{ filename: "tujhme-rab", filepath: "music/2.mp3", coverpath: "image/1.png" },
{ filename: "Friends", filepath: "music/3.mp3", coverpath: "image/1.png" },
{ filename: "Bazz", filepath: "music/1.mp3", coverpath: "image/1.png" },
{ filename: "Bholenath", filepath: "music/5.mp3", coverpath: "image/1.png"},
{ filename: "koi-tumsa-nhi", filepath: "music/6.mp3", coverpath: "image/1.png" }]

songItem.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerHTML=songs[i].filename;
});


 songToplay.forEach((item)=>{
   // pauseForAll();
    item.addEventListener("click",(e)=>{
       let index=e.target.id;
       
       let playButton=  Array.from(item.getElementsByTagName('i'))

       if(audioElement.paused|| audioElement.currentTime<=0){
        
        pauseForAll();
        audioElement.src=`music/${index}.mp3`;
        audioElement.play();
        
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        playButton[0].classList.remove('fa-play-circle')
        playButton[0].classList.add('fa-pause-circle')
        gif.style.opacity=1;
        runningSong.innerText=songs[(index-1)].filename;
       } 
       else{
        const indexAT=audioElement.src.charAt(28);
        console.log(indexAT)
        
        if(index==indexAT){
        audioElement.pause();
        playButton[0].classList.remove('fa-pause-circle')
        playButton[0].classList.add('fa-play-circle')
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
        }
    
        else{
            audioElement.src=`music/${index}.mp3`; 
        audioElement.play();
        pauseForAll();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        playButton[0].classList.remove('fa-play-circle')
        playButton[0].classList.add('fa-pause-circle')
        gif.style.opacity=1;
        runningSong.innerText=songs[(index-1)].filename;
    
    
    }}
      
  

    })
 }
 )
function pauseForAll(){
    
    playButtons.forEach(element => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle')
    });
}

prevplay.addEventListener('click',()=>{
    var indexAT=parseInt(audioElement.src.charAt(28));
    if(indexAT===1){
        indexAT=6;
        audioElement.src=`music/${indexAT}.mp3`;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        runningSong.innerText=songs[(indexAT-1)].filename;
        
    }
    else{
        indexAT--;
        audioElement.src=`music/${indexAT}.mp3`;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        runningSong.innerText=songs[(indexAT-1)].filename;
    }

})
nextplay.addEventListener('click',()=>{
    var indexAT=parseInt(audioElement.src.charAt(28));
    if(indexAT===6){
        indexAT=1;
        audioElement.src=`music/${indexAT}.mp3`;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        runningSong.innerText=songs[(indexAT-1)].filename;
        
    }
    else{
        indexAT++;
        audioElement.src=`music/${indexAT}.mp3`;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        runningSong.innerText=songs[(indexAT-1)].filename;
    }

})



masterplay.addEventListener('click',()=>{
   if(audioElement.paused|| audioElement.currentTime<=0){
   
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
   } 
   else{
    pauseForAll();
   audioElement.pause();
   masterplay.classList.add('fa-play-circle');
   masterplay.classList.remove('fa-pause-circle');
   gif.style.opacity=0;
   }
})

audioElement.addEventListener('timeupdate',()=>{
   
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})