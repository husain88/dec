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

  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".accordion-header")
      .find(".fa")
      .addClass("fa-minus")
      .removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".accordion-header")
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".accordion-header")
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });
});

// owl carousel 
$('.uni-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  autoplay:true,
  stagePadding:50,
  center: true,
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
});

$('.popular-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots:true,
  autoplay:true,
  center: false,
  // stagePadding:10,
  autoplayTimeout:3000,
  responsive:{
      0:{
          items:1
      },
      300:{
        items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      },
      1200: {
        items: 4
      }
  }
})

// benefit card

$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

$('.moreless-button2').click(function() {
  $('.moretext2').slideToggle();
  if ($('.moreless-button2').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

$('.moreless-button3').click(function() {
  $('.moretext3').slideToggle();
  if ($('.moreless-button3').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

$('.moreless-button4').click(function() {
  $('.moretext4').slideToggle();
  if ($('.moreless-button4').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

$('.moreless-button5').click(function() {
  $('.moretext5').slideToggle();
  if ($('.moreless-button5').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

$('.moreless-button6').click(function() {
  $('.moretext6').slideToggle();
  if ($('.moreless-button6').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

$('.moreless-button7').click(function() {
  $('.moretext7').slideToggle();
  if ($('.moreless-button7').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

$('.testimonial-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:true,
  autoplay:true,
  center: true,
  // stagePadding:10,
  autoplayTimeout:5000,
  responsive:{
      0:{
          items:1
      },
      300:{
        items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
