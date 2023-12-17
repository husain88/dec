$(document).ready(function () {
  $("ul.navbar-nav > li > a").click(function (e) {
    $("ul.navbar-nav > li > a").removeClass("active");
    $(this).addClass("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  // Hamburger menu
  var navbarToggler = document.querySelectorAll(".navbar-toggler")[0];
  navbarToggler.addEventListener("click", function (e) {
    e.target.children[0].classList.toggle("active");
  });
});

// owl carousel 
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  autoplay:true,
  stagePadding:50,
  autoplayTimeout:2000,
  responsive:{
      0:{
          items:2
      },
      300:{
        items:3
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})