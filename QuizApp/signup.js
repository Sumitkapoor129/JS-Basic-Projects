const eye=document.querySelector(".show-pass")
const eye2=document.querySelector(".show-conf-pass")
const pass=document.querySelector(".password")
const confpass=document.querySelector(".c-password")
const form=document.querySelector("form")

const username=document.querySelector(".username")
const usernameHead=document.querySelector(".username-head")
const email=document.querySelector(".email")
const emailhead=document.querySelector(".email-head")
const contact=document.querySelector(".contact")
const contacthead=document.querySelector(".contact-head")
const passhead=document.querySelector(".pass-head")
const confpasshead=document.querySelector(".conf-pass-head")


//Regex
const contactValidarion=/^[6-9]\d{9}$/;
const emailValidation=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const strongPassValidator=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


// Show/Hide Password
eye.addEventListener("click",(e)=>{
    pass.type = pass.type=="password"?"text":"password";

})
eye2.addEventListener("click",(e)=>{
    confpass.type = confpass.type=="password"?"text":"password";
})


function warning(message,ele){
    const div=document.createElement("span");
    div.textContent="( *"+message+")";
    div.style.color="red"
    div.style.marginLeft="20px"
    div.style.fontSize="16px"
    div.style.textAlign="right"
    div.classList.add("warning")
    ele.appendChild(div);
}
// Validate Username
username.addEventListener("input",(e)=>{
    
    // For Username
    const msg="Username Already Taken"
    if(localStorage.getItem(username.value)!=null){
    warning(msg,usernameHead);}
    else if(usernameHead.children.length==2){
        usernameHead.children[1].remove();
    }
})

form.addEventListener("submit",(e)=>{
    if(passhead.children[0]){
        passhead.children[0].remove()
        }
    if(confpasshead.children[0]){
        confpasshead.children[0].remove()
        }
    if(!emailValidation.test(email.value)){
        if(emailhead.children[0]){
            emailhead.children[0].remove()
        }
        warning("Enter a valid Email Address",emailhead)
        e.preventDefault();
    }
    if(!contactValidarion.test(contact.value)){
         if(contacthead.children[0]){
            contacthead.children[0].remove()
            console.log("contact removed");
            
        }
        warning("Enter a valid Contact No.",contacthead);
        e.preventDefault();
    }
   
    if(!strongPassValidator.test(pass.value)){
         if(pass.value==""){
            warning("this field cannot be empty",passhead);
         }
         else{
            warning("Password Is Too weak",passhead);
         }
        
        e.preventDefault();
    }

    if(strongPassValidator.test(pass.value) && confpass.value !== pass.value){
        warning("Password Does Not Match",confpasshead);
        e.preventDefault();
    }
})




