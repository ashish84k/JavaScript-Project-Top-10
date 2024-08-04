let tempFile;
function toClose(list,remove,add){
    list.forEach(element => {
        if(element.classList.contains(remove)){
            element.classList.remove(remove);
            element.classList.add(add);
        };
        
    });
}


function toIndexOn(list,index,add){
    tempFile = list[index];
    list[index].classList.remove(add);
}


function toIndexOff(list,index,add){
    list[index].classList.add(add);
}

function classAdd(tags,add){
    tags.classList.add(add);
}


function classRemove(tags,add){
    tags.classList.remove(add);
}


    





