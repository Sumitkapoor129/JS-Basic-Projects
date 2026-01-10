let isStarted1=false;
let isStarted2=false;

let res1=""
let res2=""
let interval;
const box1=document.querySelector(".b1");
const box2=document.querySelector(".b2");
const head=document.querySelector("#h");

const colours=['blue','red','pink','white','grey','green','brown','purple']
function randomc(){
    const num=Math.floor(Math.random()*colours.length);
    return colours[num];
}
document.querySelector(".start").addEventListener("click",(e)=>{
    if(interval){
        clearInterval(interval);
        interval="";
    }
    isStarted1=true;
    isStarted2=true;
    e.stopPropagation();
    interval=setInterval(()=>{
        if(isStarted1){
            box1.style.backgroundColor=randomc();
        }
        if(isStarted2){
            box2.style.backgroundColor=randomc();
        }

    },150)
},true)

box1.addEventListener("click",()=>{
    if(isStarted1){
    isStarted1=false;
    res1=box1.style.backgroundColor;
    console.log(res1);
    if(res1===res2){
        head.textContent="YOU WON !!!!!"
        head.style.backgroundColor="Green"
    }
    else if(res1 != res2 && res2 !=""){
        head.textContent="YOU LOST !!!!!"
        head.style.backgroundColor="Red"
    }
}
    
},false)

box2.addEventListener("click",()=>{
    if(isStarted2){
    isStarted2=false;
    res2=box2.style.backgroundColor;
    console.log(res2);
    if(res1===res2){
        head.textContent="YOU WON !!!!!"
        head.style.backgroundColor="Green"
    }
    else if(res1 != res2 && res1 !=""){
        head.textContent="YOU LOST !!!!!"
        head.style.backgroundColor="Red"
    }
}
},false)
