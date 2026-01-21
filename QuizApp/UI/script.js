const start =document.querySelector(".start")
const timer=document.querySelector(".timer")
const clock=document.querySelector(".clock")
const warning=document.querySelector(".warning")
const Question_Box=document.querySelector(".que")
const choices=document.querySelectorAll(".opt")
const choices_cont=document.querySelector(".Q-Options")
const Question_No =document.querySelector(".heading-q")
const pop_up=document.querySelector(".pop");
const quizstruct=document.querySelector(".container")
const pop_retry=document.querySelector(".retry-btn")
const pop_continue=document.querySelector(".continue-btn")
const coins=document.querySelector(".coins")
const score_box=document.querySelector(".score")
const highest=document.querySelector(".highest")
const signup=document.querySelector(".login-btn");

const coins_count=document.querySelector(".coin-count")


let coin=0;
let email="";

const profile=document.createElement("span");
profile.className="profile-info";

let isloggedin=false;

function verifylogin(){
    const tokenn=localStorage.getItem("token");
    if(!tokenn){
        return
    }
    const data=fetch('http://127.0.0.1:5000/quiz/verify', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials:"include",
            body: JSON.stringify({
                token:tokenn
            })
        }).then(response=>{
            if(response.ok){
            isloggedin=true;
            console.log(isloggedin);
            return response.json();
        } 
        }).then(data=>{
            console.log(data);

            document.querySelector(".login-btn").remove();
            profile.textContent=data.name;
            document.querySelector('.profile').appendChild(profile);
            coins_count.textContent=data.coins;
            coin=data.coins;
            email=data.email;

        })
        
}
verifylogin();

function setcoin(){
    fetch('http://127.0.0.1:5000/quiz/setcoins', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials:"include",
            body: JSON.stringify({
                coins:coin,
                email:email
            })
        })
}


let score=0;

const questions = [
    {question: "What is the capital of India?",
     options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
     correctIndex: 1
    },
    {question: "Which planet is known as the Red Planet?",
     options: ["Earth", "Venus", "Mars", "Jupiter"],
     correctIndex: 2
    },
    {question: "Who is known as the Father of the Nation in India?",
     options: ["Jawaharlal Nehru", "Bhagat Singh", "Subhash Chandra Bose", "Mahatma Gandhi"],
     correctIndex: 3
    },
    {question: "What is the national animal of India?",
     options: ["Lion", "Tiger", "Elephant", "Leopard"],
     correctIndex: 1
    },
    {question: "Which is the largest ocean in the world?",
     options: ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Pacific Ocean"],
     correctIndex: 3
    },
    {question: "How many continents are there in the world?",
     options: ["5", "6", "7", "8"],
     correctIndex: 2
    },
    {question: "Which gas do plants absorb from the atmosphere?",
     options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
     correctIndex: 2
    },
    {question: "Who wrote the Indian national anthem?",
     options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subramania Bharati"],
     correctIndex: 0
    },
    {question: "What is the currency of Japan?",
     options: ["Won", "Yuan", "Yen", "Dollar"],
     correctIndex: 2
    },
    {question: "Which is the longest river in the world?",
     options: ["Amazon", "Ganga", "Nile", "Yangtze"],
     correctIndex: 2
    },
    {question: "Which metal is liquid at room temperature?",
     options: ["Iron", "Mercury", "Aluminium", "Silver"],
     correctIndex: 1
    },
    {question: "Who invented the telephone?",
     options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
     correctIndex: 1
    },
    {question: "What is the smallest prime number?",
     options: ["0", "1", "2", "3"],
     correctIndex: 2
    },
    {question: "Which country is known as the Land of the Rising Sun?",
     options: ["China", "South Korea", "Japan", "Thailand"],
     correctIndex: 2
    },
    {question: "How many players are there in a cricket team?",
     options: ["9", "10", "11", "12"],
     correctIndex: 2
    },
    {question: "Which organ pumps blood in the human body?",
     options: ["Brain", "Lungs", "Heart", "Liver"],
     correctIndex: 2
    },
    {question: "Which is the national bird of India?",
     options: ["Peacock", "Eagle", "Sparrow", "Parrot"],
     correctIndex: 0
    },
    {question: "What is the hardest natural substance on Earth?",
     options: ["Gold", "Iron", "Diamond", "Platinum"],
     correctIndex: 2
    },
    {question: "Which planet is closest to the Sun?",
     options: ["Earth", "Venus", "Mercury", "Mars"],
     correctIndex: 2
    },
    {question: "Which festival is known as the Festival of Lights in India?",
     options: ["Holi", "Diwali", "Eid", "Christmas"],
     correctIndex: 1
    }
];
const asked=[];
function randomQue(){
    let num=Math.floor(Math.random()*questions.length)
    asked.forEach(ele=>{
        if(num==ele)num=randomQue();
    })
    asked.push(num);
    return num;
}
function loadHighestScore(){
    const score=localStorage.getItem("highest");
highest.textContent=score?`Highest - ${score}`:"Highest - 0"
}
loadHighestScore()
function loadScore(){
    score_box.textContent=`Score - ${score}`
}

function compareScore(){
    if(score >localStorage.getItem("highest")){
        localStorage.setItem("highest",score)
        loadHighestScore();
    }
}


const clockhtml=timer.innerHTML



let started=false;
let interval;
let question_number=0;
function startTimer(){
    timer.style.color="#00ffff"
    started=true;
    let time=15; 
    if(interval)clearInterval(interval)


    clock.remove();
    timer.textContent=time;
    time--;

interval=setInterval(()=>{
        if(time==0){
            lost()
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
        Question_No.textContent=`Question ${question_number+1}`
        Question_Box.textContent=questions[num].question;
        let a=0
        choices.forEach(choice=>{
            choice.textContent=questions[num].options[a];
            a++;
    })}
}
function reset(){
   Question_No.textContent=`Question`
   timer.style.color="black"
        Question_Box.textContent=""
        let a=0
        choices.forEach(choice=>{
            choice.textContent=""
            a++;
    })
    
    question_number=0;
}
function pauseTimer(){
    clearInterval(interval)
    timer.innerHTML=clockhtml 
}
function lost(){
            pauseTimer()
            quizstruct.classList.toggle("blur")
            pop_up.classList.toggle("hidden");
            document.querySelector(".pop-message").textContent="YOU LOST !"
            console.log(pop_up);
            if(coins.textContent.trim()<50){
                pop_continue.style.backgroundColor="red";
            }
}

let Q_num=randomQue();
start.addEventListener("click",(e)=>{
    if(!started){
    
    start.textContent="Reset"
    startTimer()
    
    displayque(Q_num)}
    else{
        started=false;
        start.textContent="Start"
        reset()
        pauseTimer()
    }   
})

choices_cont.addEventListener("click",(e)=>{
    if(started && e.target.classList.contains("opt")){
        const correct=questions[Q_num].correctIndex

        if(e.target.textContent==questions[Q_num].options[correct]){
            e.target.classList.toggle("correct");
            score+=10;
            loadScore()
            compareScore()
            coins_count.textContent-=(-10);
            coin+=10;
            console.log(coins_count);
            Q_num=randomQue()
            pauseTimer()
            question_number++;
            setcoin();
            verifylogin()
            setTimeout(()=>{
                e.target.classList.toggle("correct");
                warning.classList.toggle("hidden")
                startTimer();
                displayque(Q_num)
                start.textContent="Reset"
            },1000);
        }
        else{
            lost()
            // setTimeout(()=>{
            //     warning.classList.toggle("hidden")
            //     reset()
            //     start.textContent="Retry"
            //     started=false;
            // },1000);
        }
    }
})

pop_retry.addEventListener("click",(e)=>{
    pop_up.classList.toggle("hidden");
    quizstruct.classList.toggle("blur")
    timer.style.color="black"
    score=0;
    loadScore();
    question_number=0;
    Q_num=randomQue()
    displayque(Q_num)
    startTimer()
    started=true;
})
pop_continue.addEventListener("click",(e)=>{
    if(coins.textContent.trim()>=50){
        coins.children[1].textContent =coins.textContent.trim()- 50;
        coin-=50;
        setcoin();
        verifylogin();
        pop_up.classList.toggle("hidden");
        quizstruct.classList.toggle("blur")
        timer.style.color="black"
        displayque(Q_num)
        startTimer()
    }
    started=true;
})
console.log(coins.textContent.trim());

signup.addEventListener("click",(e)=>{
    window.location.href="signup.html"
})
