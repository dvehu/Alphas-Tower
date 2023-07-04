const nav = document.getElementById('header');
const mobileNav = document.getElementById('navbar');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {

    if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden"),
        mobileNav.classList.remove("bring-it"),
        document.getElementById('tatcha').classList.add('komot'),
        document.getElementById('close-tatcha').classList.add('close-tatcha-padding')
    }

    else {
      nav.classList.remove("nav--hidden"),
      document.getElementById('tatcha').classList.remove('komot'),
      document.getElementById('close-tatcha').classList.remove('close-tatcha-padding')
    }
    lastScrollY = window.scrollY
});

window.addEventListener('scroll', () => {
    
    if (window.scrollY >= 400 ) {
        nav.classList.add("nav-bg-blur")

    } else {
        nav.classList.remove("nav-bg-blur")
    }

    lastScrollY = window.scrollY
});

const tatcha = document.getElementById('tatcha-wrapper');
const closeTatcha = document.getElementById('close-tatcha');

document.getElementById('close-tatcha').addEventListener('click', function() {
      if (1>0) {
        document.getElementById('tatcha-wrapper').classList.add('komot-tatcha')
        closeTatcha.style.display = 'none'     
      }
    });


// Doings animations on scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);