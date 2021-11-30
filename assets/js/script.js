const menuToggle = document.querySelector(".menu-toggle .input");
const navUl = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo img");
const linkBeranda = document.querySelector(".beranda");
const linkTentang = document.querySelector(".kelompok");
const linkKontak = document.querySelector(".kontak");

menuToggle.addEventListener("click", () => {
    navUl.classList.toggle("slide");
});

// create event listener if scroll is 250 add class to nav element
window.addEventListener("scroll", (e) => {
    let scroll = this.scrollY;
    console.log(scroll);
    if (!scroll || scroll < 0) {
        // add class active link to nav link
        linkBeranda.className = "active";
    } else {
        if (scroll > 680) {
            // size logo
            logo.className = "logo-small";
            // add class to element
            nav.className = "nav-bg-primary";

            // navlink tentang
            if (scroll < 6790) {
                // add class active link to nav link
                linkTentang.className = "active";
            } else {
                // remove class active link to nav link
                linkTentang.className = "";
            }

            if (scroll > 6790) {
                // add class active link to nav link
                linkKontak.className = "active";
            } else {
                // remove class active link to nav link
                linkKontak.className = "";
            }

            // remove class active link to nav link
            linkBeranda.className = "";
        } else {
            // remove class logo-small
            logo.className = "";

            // remove if up scroll
            // remove class to element
            nav.className = "";

            // remove class active link to nav link
            linkTentang.className = "";
        }
    }
});

new Typed("#text-hero", {
    strings: [
        "Selamat Datang di Website Dunia Fauna",
        "Kami menyediakan berbagai macam Kelompok Fauna",
    ],
    typeSpeed: 150,
    delaySpeed: 900,
    loop: true,
});