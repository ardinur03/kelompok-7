const menuToggle = document.querySelector(".menu-toggle .input");
const navUl = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelector("nav ul li .nav-link");

menuToggle.addEventListener("click", () => {
    navUl.classList.toggle("slide");
});

// create event listener if scroll is 250 add class to nav element
window.addEventListener("scroll", (e) => {
    let scroll = this.scrollY;
    if (scroll > 680) {
        // remove class to element
        nav.className = "nav-bg-primary";
    } else {
        // add class to element
        nav.className = "";
    }
});