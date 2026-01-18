const form =document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data=fetch("http://127.0.0.1:5000/login",{
        method:POST,
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email:form.email.value,
            password:form.password.value,
        })
    }).then()
})
