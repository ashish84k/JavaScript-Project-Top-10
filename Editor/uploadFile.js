let uploadContent = document.querySelector(".upload-content");
let uploadedImg = document.querySelector(".uploadedImg");
let file = document.querySelector(".file");
let editorBox = document.querySelector(".editor-box");
let rangeBox = document.querySelector(".range-box");
let leftBoxes = document.querySelectorAll(".leftBoxes");
let canvas = document.querySelector(".canvas");
let lineSizes = document.querySelector('.line-size');
let ctx = canvas.getContext("2d");
canvas.height = 300;
canvas.width = 500;

let artRemove = new Image();




let indexTemp=1;
// left Boxes Control
let toBoxOn = (e) =>{
    // toIndexOff(leftBoxes,indexTemp,"close");
    if(e==9){
        classRemove(document.querySelector(".BlenderModeBox"),"hide");
    }
    indexTemp = e;
    toIndexOn(leftBoxes,e,"close");
    
}

let toBoxOff = (e) =>{
    
    artRemove.style.right='-100%';
    if(e==9){
        classAdd(document.querySelector(".BlenderModeBox"),"hide");
    }else{
        toIndexOff(leftBoxes,e,"close");
    }

}


// uploader mathod
let upload = () =>{
    let fileRrader = file.files[0]
    let url =URL.createObjectURL(fileRrader);
    createImgObject(url);
    tempFile = leftBoxes[0];
    classRemove(leftBoxes[0],"close");
}



function createImgObject(url){
    
    this.newTags = document.createElement("img");
    newTags.setAttribute("onclick","setImage(this)");
    newTags.src = url;    
    uploadContent.append(newTags);
}

function setImage(e){

    this.newTags = document.createElement('img');
    this.newTags.src = e.src;
    ctx.drawImage(this.newTags,0,0,canvas.width,canvas.height)
    console.log(ctx);
    
    classAdd(tempFile,"close");
}


// all filter logical task 
let active = document.querySelectorAll(".active");

let tempFilter = {
    
    brightness : "brightness(100%)",
    grayscale :   "grayscale(0%)",
    blur      :  "blur()",
    saturate :   "saturate(100%)",
    opacity :  "opacity(100%)",
    contrast : "contrast(100%)",

    
    brightnessValue : 100,
    grayscaleValue :   100,
    blurValue      :  0,
    saturateValue :   100,
    opacityValue :  100,
    contrastValue : 100
};


let btnTemp =  rangeBox;
let btnTempValue="brightness";

let button = document.querySelectorAll(".button");
let filterBtn = (e) =>{
    toClose(button,"btnColor");
    classRemove(e,"btnColor");
    // btnTemp = e;
    classAdd(e,"btnColor")
                
        document.querySelector("#range").value = tempFilter[e.innerHTML+"Value"];
        
    

   
    btnTempValue = e.innerHTML;
    document.querySelector(".rangeName").innerHTML = btnTempValue;
    
}



// add new  filter 
let rangeValue1 = document.querySelector(".range-value1");
let rangeValue = document.querySelector(".range-value");
let hide = document.querySelector(".hide");
let range = (e)=>{
        rangeValue1.innerHTML = e.value;

    rangeValue.setAttribute("style",`margin-left: ${e.value*1.3}px`);
    classRemove(hide,"hide")

    // set object value
    if(btnTempValue=="blur"){
        tempFilter[btnTempValue] = `${btnTempValue}(${e.value/10}px)`
    }else{
        
            tempFilter[btnTempValue] = `${btnTempValue}(${e.value}%)`
    }


    // set objec value
    tempFilter[btnTempValue+"Value"] = e.value;

    // get  objec value
    let filterAplay='';
    for(item in tempFilter){
        if(item =="brightnessValue"){
            break;
        }else{
            
            filterAplay += tempFilter[item];
        }
    }
    
    canvas.style.filter=`${filterAplay}`;
    
    e.addEventListener("mouseleave",()=>{
        hide.classList.add("hide");
    })
}


let lineValue=1;
let lineSizeValue;
let currentX,currentY;
let lineChange = (e) =>{
    console.log(e.value);
    lineValue = e.value;
}


let artControl = (e) =>{

    artRemove.style.right='-100%'
    if(e.getAttribute('data-title')==='Line_Width'){
        lineSize(e);
        artRemove = e.parentElement.parentElement.nextElementSibling;
        artRemove.style.right='20%';
    } else if(e.getAttribute('data-title')==='art-templet'){
        artRemove = e.parentElement.parentElement.nextElementSibling.nextElementSibling;
        artRemove.style.right='20%'
    }

   
}


let artcolor = 'clack';

let artColor = (e) =>{
    artcolor = e.value;
}


let lineSize = (e) =>{
    lineSizeValue = e;
    canvas.style.cursor='crosshair';
    canvas.addEventListener('mousedown',(e)=>{
        
        currentX = event.offsetX;
        currentY = event.offsetY;
        canvas.addEventListener('mousemove',drowStart)
        canvas.addEventListener('mouseup',drowRemove)
    })
}



let i =0
let drowStart = (e)=>{
    if(lineSizeValue==="circleFill"){
        
        // ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.arc(currentX,currentY,e.offsetX-currentX+e.offsetY-currentY,0,7);
        ctx.fill();
        ctx.fillStyle=artcolor;
    }
    else if(lineSizeValue==="circle"){
        
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.arc(currentX,currentY,e.offsetX-currentX+e.offsetY-currentY,0,7);
    }
    else if(lineSizeValue==="square"){
        
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.rect(currentX,currentY,e.offsetX-currentX,e.offsetY-currentY);
    }else if(lineSizeValue==="squareFill"){
        
        // ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.rect(currentX,currentY,e.offsetX-currentX,e.offsetY-currentY);
        ctx.fill();
        ctx.fillStyle=artcolor;
    }
    else{

        ctx.lineTo(e.offsetX,e.offsetY)
    }
    ctx.strokeStyle=artcolor;
    ctx.lineWidth=lineValue;
    ctx.stroke();
}
let drowRemove = () =>{
    
    ctx.beginPath();
    canvas.removeEventListener('mousemove',drowStart)
    canvas.removeEventListener('mouseup',drowRemove)
}






