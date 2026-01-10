const display=document.querySelector(".display");
const sign=document.querySelector(".togg");
const nums=document.querySelectorAll(".num");
const actions=document.querySelectorAll(".action");

const numbers=[];
const operations=[];

console.log(nums);
let result=""


sign.addEventListener("click",(e)=>{
    if(display.value[0]=='-'){
        display.value=display.value.slice(1);
    }
    else{
        display.value='-'+display.value;
    }
})

nums.forEach((a)=>{
    a.addEventListener("click",(e)=>{
        display.value+=a.textContent
        result+=a.textContent
        console.log(a.textContent);
    })
})

actions.forEach((act)=>{
    act.addEventListener("click",(e)=>{
        if(act.textContent === "AC")display.value="";
        if(act.textContent === "DE")display.value=display.value.toString().slice(0,-1);
        if(act.textContent === "="){
            try{res=math.evaluate(display.value);}
            catch(e){
                res="Invalid input"
            }
            display.value=res;
            
        }
    })
})


