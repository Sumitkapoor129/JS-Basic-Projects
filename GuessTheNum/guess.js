const form=document.querySelector('form');
let guessRem=10;
let num=0;
let isStarted=false;
let preguess="Previous Guesses";
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    preguess=preguess+document.querySelector('#userinput').value+"  -"
    document.querySelector("#previous").textContent=`${preguess}`
    if(guessRem>0 && !(isStarted)){
    document.querySelector('#userinput').disabled=false
    document.querySelector('.submit').value="Submit"
    document.querySelector('#remaining').textContent=`Gues-Remaining ${guessRem}`;
    num=Math.floor((Math.random())*100);
    isStarted=true;
    }
    else if(guessRem>0 && isStarted){
        const userinput=document.querySelector('#userinput').value;
        if(parseInt(userinput)==num){
            document.querySelector('#result').value='YOU WON CONGRATS !!!!'
            document.querySelector('.submit').value="Restart"
            guessRem=-1;
        }
        else if(parseInt(userinput)>num){
            document.querySelector('#result').value=`${userinput} is Greater then Number`
            guessRem--;
            document.querySelector('#remaining').textContent=`Guess-Remaining ${guessRem}`;
            document.querySelector('#userinput').value=""
        }   
        else if(parseInt(userinput)<num ||userinput==""){
            document.querySelector('#result').value=`${userinput} is Smaller then Number`
            guessRem--;
            document.querySelector('#remaining').textContent=`Guess-Remaining ${guessRem}`;
            document.querySelector('#userinput').value=""
        }   

    }

    else if(guessRem==0){
        guessRem=-1;
        document.querySelector('#remaining').textContent=`Gues-Remaining ${guessRem}`;
        document.querySelector('.submit').value="Play Again"
        
        alert("You Loose")
    }

    else{
        location.reload();
    }
})
