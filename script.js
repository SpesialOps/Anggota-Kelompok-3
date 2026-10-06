// ==============================
// MENU MOBILE
// ==============================

const menuButton = document.getElementById("menuButton");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// ==============================
// MENU OTOMATIS TERTUTUP
// SETELAH LINK DIKLIK
// ==============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});


// ==============================
// EFEK SCROLL
// ==============================

window.addEventListener("scroll", function() {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(2, 6, 23, 0.95)";

    } else {

        navbar.style.background =
            "rgba(15, 23, 42, 0.85)";

    }

});
