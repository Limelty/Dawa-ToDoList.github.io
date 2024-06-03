document.getElementById("Loginform").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("Lgname")
    const password = document.getElementById("Lgpassword")

    const Loginbtn = document.getElementById("Lgbtn")

    const stroedUsername = localStorage.getItem("username")
    const storedPassword = localStorage.getItem("Password")

    Loginbtn.onclick = () => {
        console.log("logged in")
        if (username.value === stroedUsername && password.value === storedPassword) {
            alert(`Login Successful, Welcome to the web ${username.value}!`)
            window.location.href = "main.html"
        }else{
            alert('Login Failed')
        }
    }
})
