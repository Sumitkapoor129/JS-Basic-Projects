let num = 100;
const container= document.querySelector('.container');
let drawing =false;
for(let i=0;i<num;i++){
const div=document.createElement('div');
div.className="inside";
container.appendChild(div);
}


const inner=document.querySelectorAll('.inside')
console.log(inner);

inner.forEach((x)=>{
for(let i=0;i<num*2;i++){
const div=document.createElement('div');
div.className="inner";
x.appendChild(div);}
}
)

container.addEventListener("click",()=>{
    if(drawing)drawing=false;
    else{
    drawing=true;}
})

container.addEventListener("pointermove",(e)=>{
    if(drawing)e.target.classList.add("active")
})
