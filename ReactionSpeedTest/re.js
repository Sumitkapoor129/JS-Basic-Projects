const firstL=document.querySelector('#first').firstChild
const secondL=document.querySelector('#second').firstChild
const cont=document.querySelector('#cont')

function random(){
    return Math.floor(Math.random() * (6)) + 5;
}
let start=0;
let end=0;
let started=false;
let timeout;

cont.addEventListener("click",(e)=>{
if(!started){
    cont.style.backgroundColor="black";
firstL.textContent="Click Here";
started=true;
secondL.textContent ="When It Turns Green"
timeout=setTimeout(()=>{
start=performance.now();
cont.style.backgroundColor="green";
},2000)

}
else{
    if(start==0){
        clearTimeout(timeout);
        cont.style.backgroundColor="red";
        firstL.textContent=`Pressed Before Green`;
        secondL.textContent ="Click to Retry"
        started=false;
        start=0;
        end=0;
    }
    else{
    end=performance.now()
    cont.style.backgroundColor="black";
    firstL.textContent=`Reaction Speed -: ${end.toFixed(0)-start.toFixed(0)}ms`;
    secondL.textContent ="Click to Retry"
    started=false;
    start=0;
    end=0;
}
}
})
