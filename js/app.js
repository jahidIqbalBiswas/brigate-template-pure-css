$(document).ready(function() {
    $('.your-class').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    });
    //counterUp
    $('.counter').counterUp({
        delay: 100,
        time: 2000
    });

});
//preloader
window.addEventListener('load', function() {
    var preloader = document.querySelector("#preloader");
    preloader.classList.add("preloaderOpen");
});
//search interface
var search = document.querySelector(".search-btn");
var searchWindow = document.querySelector(".search");
var overlayId = document.getElementById("overlay");
var sIcon = document.querySelector(".fa-search");
var cIcon = document.querySelector(".fa-times");
search.addEventListener("click", function() {
    searchWindow.classList.toggle("search-open");
    overlayId.classList.toggle("overlay");
    if (sIcon.classList.contains("s-icon-none")) {
        sIcon.classList.remove("s-icon-none");
        cIcon.classList.add("cross-icon");
    } else {
        sIcon.classList.add("s-icon-none");
        cIcon.classList.remove("cross-icon");
    };
});
overlayId.addEventListener("click", function() {
    searchWindow.classList.remove("search-open");
    this.classList.remove("overlay");
    sIcon.classList.remove("s-icon-none");
    cIcon.classList.add("cross-icon");
    mblMenu.classList.remove("block");
});

//sticky navbar
window.onscroll = function() { myFunction() };

// Get the header
var header = document.querySelector("nav");
var searchInfo = document.querySelector(".searchInfo");
// Get the offset position of the navbar
var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        searchInfo.classList.add("searchInfoTranslate");
    } else {
        header.classList.remove("sticky");
        searchInfo.classList.remove("searchInfoTranslate");
    };
};
//subItems
var firstMenu = document.querySelector(".homes");
var pages = document.querySelector(".pages");
var service = document.querySelector(".service");
var project = document.querySelector(".project");
var blog = document.querySelector(".blog");
var home22nd = document.querySelector(".home2-2nd");
var blogSinglePost = document.querySelector(".blogSinglePost");
var page1 = document.querySelector(".page1");
var page2 = document.querySelector(".page2");

//togglers
var mainToggler = document.querySelector(".toggler");
var mblMenu = document.querySelector("#mblMenu");
var mainMenuToggler = document.querySelector(".icon-home");
var mainMenuToggler2 = document.querySelector(".icon-home2");
var mainMenuToggler3 = document.querySelector(".icon-home3");
var mainMenuToggler4 = document.querySelector(".icon-home4");
var mainMenuToggler5 = document.querySelector(".icon-home5");
var icon2ndHome1 = document.querySelector(".icon-2nd-home1");
var icon2ndHome2 = document.querySelector(".icon-2nd-home2");
var iconPageHome1 = document.querySelector(".icon-page-home1");
var iconPageHome2 = document.querySelector(".icon-page-home2");
//first step
mainToggler.addEventListener("click", function() {
    mblMenu.classList.toggle("menuItems");
    mblMenu.classList.toggle("openMenu");
    this.classList.toggle("activeToggler");
});
//second step
mainMenuToggler.addEventListener("click", function() {
    firstMenu.classList.toggle("block");
    pages.classList.remove("block");
    service.classList.remove("block");
    project.classList.remove("block");
    blog.classList.remove("block");
    this.classList.toggle("activeToggler");
    mainMenuToggler2.classList.remove("activeToggler")
    mainMenuToggler3.classList.remove("activeToggler")

    mainMenuToggler4.classList.remove("activeToggler")

    mainMenuToggler5.classList.remove("activeToggler")


});
mainMenuToggler2.addEventListener("click", function() {
    pages.classList.toggle("block");
    firstMenu.classList.remove("block");
    service.classList.remove("block");
    project.classList.remove("block");
    blog.classList.remove("block");
    this.classList.toggle("activeToggler");
    mainMenuToggler.classList.remove("activeToggler")
    mainMenuToggler3.classList.remove("activeToggler")

    mainMenuToggler4.classList.remove("activeToggler")

    mainMenuToggler5.classList.remove("activeToggler")


});
mainMenuToggler3.addEventListener("click", function() {
    service.classList.toggle("block");
    firstMenu.classList.remove("block");
    pages.classList.remove("block");
    project.classList.remove("block");
    blog.classList.remove("block");
    blog.classList.remove("block");
    this.classList.toggle("activeToggler");
    mainMenuToggler.classList.remove("activeToggler")
    mainMenuToggler2.classList.remove("activeToggler")

    mainMenuToggler4.classList.remove("activeToggler")

    mainMenuToggler5.classList.remove("activeToggler")
});
mainMenuToggler4.addEventListener("click", function() {
    project.classList.toggle("block");
    firstMenu.classList.remove("block");
    pages.classList.remove("block");
    service.classList.remove("block");
    blog.classList.remove("block");
    this.classList.toggle("activeToggler");
    mainMenuToggler.classList.remove("activeToggler");
    mainMenuToggler2.classList.remove("activeToggler");

    mainMenuToggler3.classList.remove("activeToggler");

    mainMenuToggler5.classList.remove("activeToggler");
});
mainMenuToggler5.addEventListener("click", function() {
    blog.classList.toggle("block");
    firstMenu.classList.remove("block");
    pages.classList.remove("block");
    service.classList.remove("block");
    project.classList.remove("block");
    this.classList.toggle("activeToggler");
    mainMenuToggler.classList.remove("activeToggler");
    mainMenuToggler2.classList.remove("activeToggler");

    mainMenuToggler3.classList.remove("activeToggler");

    mainMenuToggler4.classList.remove("activeToggler");
});
//third step menu
icon2ndHome1.addEventListener("click", function() {
    home22nd.classList.toggle("block");
    this.classList.toggle("activeToggler");
    iconPageHome1.classList.remove("activeToggler");
    iconPageHome2.classList.remove("activeToggler");

});
iconPageHome1.addEventListener("click", function() {
    page1.classList.toggle("block");
    page2.classList.remove("block");
    this.classList.toggle("activeToggler");
    icon2ndHome1.classList.remove("activeToggler");
    iconPageHome2.classList.remove("activeToggler");
});
iconPageHome2.addEventListener("click", function() {
    page2.classList.toggle("block");
    page1.classList.remove("block");
    this.classList.toggle("activeToggler");
    icon2ndHome1.classList.remove("activeToggler");
    iconPageHome1.classList.remove("activeToggler");
});
//fourth step
icon2ndHome2.addEventListener("click", function() {
    blogSinglePost.classList.toggle("block");
    this.classList.toggle("activeToggler");
});
//wow js
new WOW().init();