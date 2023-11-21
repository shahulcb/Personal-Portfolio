
document.getElementById("register").addEventListener("submit", (event) => {
    event.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let rePassword = document.getElementById("rePassword").value

    let emailError = document.getElementById("emailError")
    let passwordError = document.getElementById("passwordError")
    let rePasswordError = document.getElementById("rePasswordError")
    emailError.style.display = "none"
    passwordError.style.display = "none"
    rePasswordError.style.display = "none"

    if (!email.match(emailRegex)) {
        emailError.style.display = "block"
        emailError.innerText = "Enter valid email"
        return false
    }
    if (password.length < 8 || password.length === '') {
        passwordError.style.display = "block"
        passwordError.innerText = "Password must be at least 8 characters"
        return false
    }
    if (password !== rePassword) {
        rePasswordError.style.display = "block"
        rePasswordError.innerText = "Invalid password"
    }
    return true
})