const length=document.querySelector(".count")
const range=document.querySelector(".range")
const generate=document.querySelector(".Generate")
const checkboxs = document.querySelectorAll(".cb")
const finalPassword=document.querySelector(".final")

let upper=false;
let lower=false;
let number=false;
let symbol=false;

range.addEventListener("input",(e)=>{
    length.textContent=range.value
});

function getcheckbox(){
    upper=checkboxs[0].checked,
    lower=checkboxs[1].checked,
    number=checkboxs[2].checked,
    symbol=checkboxs[3].checked
}

function randomUpper(){
    const UPPERCASE = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];
const n=Math.floor(Math.random()*25)
return UPPERCASE[n];
}
function randomlower(){
   const LOWERCASE = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"
];
const n=Math.floor(Math.random()*25)
return LOWERCASE[n];
}
function randomNumber(){
  const NUMBERS = [
  "0","1","2","3","4","5","6","7","8","9"
];
const n=Math.floor(Math.random()*9)
return NUMBERS[n];
}
function randomSymbol(){
   const SYMBOLS = [
  "!","@","#","$","%","^","&","*",
  "(",")","-","_","=","+",
  "[","]","{","}","|",
  ";",":","'",'"',
  ",",".","<",">","?",
  "/","~","`"
];
const n=Math.floor(Math.random()*(SYMBOLS.length-1))
return SYMBOLS[n];
}
function randomfromarray(arr){
    const n=arr.length;
    const x=Math.floor(Math.random()*(n));
    console.log(x);
    
    return arr[x];
}
generate.addEventListener("click",(e)=>{
    console.log(range.value);
    getcheckbox();
    let characters=[];
    if(upper)characters.push(randomUpper)
    if(lower)characters.push(randomlower)
    if(number)characters.push(randomNumber)
    if(symbol)characters.push(randomSymbol)
    let password="";
    for(let i=0;i<range.value;i++){
        password+=randomfromarray(characters)();
    }
    finalPassword.value=password
})

