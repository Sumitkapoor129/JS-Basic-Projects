

const form =document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("hy");

    try {
        const response = await fetch("http://127.0.0.1:5000/quiz/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: form.email.value,
                password: form.password.value
            })
        });
        if (response.ok) {
        const data = await response.json();
        console.log("data:", data);
        document.cookie=`token=${data.token}`
            window.location.href = "Quiz.html";
        }
        else{
            window.location.href = "Login.html";
        }

    } catch (err) {
        console.error("Fetch failed:", err);
    }
});
