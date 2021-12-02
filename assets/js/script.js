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
    strings: ["Selamat Datang di Website Dunia <b>Fauna</b>"],
    typeSpeed: 150,
    delaySpeed: 900,
    loop: false,
});
new Typed("#text-description", {
    strings: [
        "Apa itu <b>Fauna ?</b>",
        "Fauna, dari bahasa Latin, atau alam hewan artinya adalah <b>khazanah</b> segala macam jenis hewan yang hidup di bagian tertentu atau periode tertentu. ",
    ],
    typeSpeed: 150,
    startDelay: 4000,
    delaySpeed: 2000,
    loop: false,
});

(function() {
    var options = {
        whatsapp: "0895328885809", // WhatsApp number
        email: "muhamad.ardi.tif21@polban.ac.id", // Email
        call_to_action: "Kirimi kami pesan", // Call to action
        button_color: "#A8CE50", // Color of button
        position: "right", // Position may be 'right' or 'left'
        order: "email,whatsapp", // Order of buttons
    };
    var proto = document.location.protocol,
        host = "getbutton.io",
        url = proto + "//static." + host;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url + "/widget-send-button/js/init.js";
    s.onload = function() {
        WhWidgetSendButton.init(host, proto, options);
    };
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
})();