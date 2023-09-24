var navbarBtnIcon = document.getElementById("navbar-btn-icon")
var checkBox = document.getElementById("check")
checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        navbarBtnIcon.classList.remove("navbar-btn-icon-rotate-0")
        navbarBtnIcon.classList.add("navbar-btn-icon-rotate-45")
    } else {
        navbarBtnIcon.classList.remove("navbar-btn-icon-rotate-45")
        navbarBtnIcon.classList.add("navbar-btn-icon-rotate-0")
    }
})