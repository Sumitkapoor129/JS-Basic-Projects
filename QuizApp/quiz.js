const start =document.querySelector(".start")
const timer=document.querySelector(".timer")
const clock=document.querySelector(".clock")
const warning=document.querySelector(".warning")
const Question_Box=document.querySelector(".que")
const choices=document.querySelectorAll(".opt")

const questions = [{question: "Question",
                    options: ["1", "2", "3", "4"] ,
                    correctIndex:1
                },{question: "Question2",
                    options: ["1", "2", "3", "4"] ,
                    correctIndex:1
                },{question: "Question3",
                    options: ["1", "2", "3", "4"] ,
                    correctIndex:1
                },{question: "Question4",
                    options: ["1", "2", "3", "4"] ,
                    correctIndex:1
                }];


const clockhtml=timer.innerHTML



let started=false;
let interval;
// Time per Question
function startTimer(){
    started=true;
    let time=15; 
    if(interval)clearInterval(interval)


    clock.remove();
    timer.textContent=time;
    time--;

interval=setInterval(()=>{
        if(time==-1){
            clearInterval(interval)
            timer.innerHTML=clockhtml; 
            warning.classList.remove("hidden")
        }
        
        else{
        if(time<=10){
            timer.style.color="red"
        }
        timer.textContent=time;
        time--;}
    },1000)
}
function displayque(num){
    if(started){
    Question_Box.textContent=questions[num].question;

    let a=0
    console.log(a);
    
    choices.forEach(choice=>{
        console.log(choice);
        
        choice.textContent=questions[num].options[a];
        a++;
    })}
}



start.addEventListener("click",(e)=>{
    startTimer()
    displayque(0)
    setTimeout(
        ()=>{
            displayque(1)
        startTimer()},3000);
})



