
// audio.play();

let audio = new Audio();
let temp = audio;
let songsList = document.querySelector(".songsList"); 
let IDINTERVAL;

for(items of songsList.children){
    
    items.addEventListener("click",(e)=>{
        
        if(e.target.nodeName == 'I'){
            audio.src='songs/'+e.currentTarget.children[1].innerText;
            audio.play();
            temp.style.animation='';
            temp.style.color='black';
            temp.setAttribute('class','fa-solid fa-play');
            temp = e.currentTarget.children[2];
            e.currentTarget.children[2].setAttribute('class','fa-solid fa-pause');
            e.currentTarget.children[2].style.animation = '2s animation1 linear infinite';
            musicImg.style.animation = '2s animation1 linear infinite'
            document.querySelector(".p").innerHTML=e.currentTarget.children[1].innerText;
            document.querySelectorAll(".fa-music")[2].style.animation = '1s animation linear infinite';
            
            clearInterval(IDINTERVAL);
            timing();
// console.log(document.querySelectorAll(".fa-music")[2])
        }else{
            document.querySelector('.boxMusicTitle').innerHTML=e.currentTarget.children[1].innerText;
        }
        
    })
};
let i = 0;
let time = 0;

let boxplay = document.querySelector(".boxplay");
boxplay.addEventListener("click",(e)=>{
    i=10;
    console.log(e.target.classList.contains('fa-chevron-righ'));
    if(e.target.classList.contains('fa-play')){
        audio.src='songs/'+e.currentTarget.children[3].innerText;
        audio.play();
        musicImg.style.animation = '2s animation1 linear infinite'
        document.querySelector(".p").innerHTML=e.currentTarget.children[3].innerText;
        
        temp.style.animation='';
        temp.style.color='black';
        temp.setAttribute('class','fa-solid fa-play');
        temp = e.target;
        e.target.setAttribute('class','fa-solid fa-pause');
        
        clearInterval(IDINTERVAL);
        timing();
    }else if(e.target.classList.contains('fa-chevron-right')){
        audio.currentTime += i;
        time +=i;
    }
    else if(e.target.classList.contains('fa-chevron-left')){
        audio.currentTime -= i;

    }

})

// i=0;
function timing(){
    time = 0;
    IDINTERVAL = setInterval(() => {
        time += 1; 
        if(time > 60){
            time = 0;
        }
        document.querySelector(".songsTiming").innerHTML =Math.floor(audio.currentTime/60)+":"+time;    
},1000);

}
