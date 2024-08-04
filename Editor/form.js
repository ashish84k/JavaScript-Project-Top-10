let fInput = document.querySelectorAll(".fInput");
let name = document.querySelectorAll(".name");
let form = document.querySelector(".form");

for(let i=0; i<fInput.length; i++){
fInput[i].addEventListener("focus",(e)=>{
    name[i].style="margin-top:12px;backdrop-filter: blur(4px);transition:.5s;font-size: 14px;";
    
})

}

for(let i=0; i<fInput.length; i++){
fInput[i].addEventListener("focusout",(e)=>{
    name[i].style="transition:.5s;";
})

}


function fClose(){
    form.classList.add("hide");
}


let login = ()=>{
    form.classList.remove("hide");
}


