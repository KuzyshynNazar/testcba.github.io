jQuery(document).ready(function($) {
    $('.portfolio__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        asNavFor: '.portfolio__slider-nav'
    });
    $('.portfolio__slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.portfolio__slider-for',
        // dots: true,
        arrows: true,
        centerMode: true,
        focusOnSelect: true
    });
});

jQuery(document).ready(function($) {
    $('.reviews__slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true
    });
});

var menu = document.querySelector(".header__menu-items")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        xIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

var menuLinks = document.querySelectorAll(".header__menu-link")

menuLinks.forEach(
    function(menuLink) {
        menuLink.addEventListener("click", toggleMenu)
    }
)