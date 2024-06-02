document.getElementById("Registerform").addEventListener("submit", (event) => {


    event.preventDefault();
    const username = document.getElementById("Rgname")
    const password = document.getElementById("Rgpassword")

    const Registerbtn = document.getElementById("Rgbtn")

    Registerbtn.onclick = () => {
        localStorage.setItem("username", username.value)
        localStorage.setItem("Password", password.value)

        alert("User successsfully Registered")
        window.location.href = "login.html"

        console.log("User Registered")
        console.log(each)
    }
})