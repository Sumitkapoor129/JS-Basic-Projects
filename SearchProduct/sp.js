const products =Array.from(document.querySelectorAll(".product"));
const input=document.querySelector(".input");
disabled=true;
input.addEventListener("input",(e)=>{
    console.log(input.value);
    products.forEach((p)=>{
        if(p.textContent.includes(input.value)){
            p.classList.remove("hidden")
        }
        else{
            p.classList.add("hidden");
        }
    })
    
})


