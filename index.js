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
  // stagePadding:50,
  center: false,
  autoplayTimeout:2000,
  responsive:{
      0:{
        items:2
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
var showChar = 120;
	var ellipsestext = "...";
	var moretext = "Read More";
	var lesstext = "Read Less";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
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

// sem tab js
$("a.nav-link").on('click', function () {
  $(".tab-pane").hide();
  $($(this).attr("href")).show();
  if ($(this).hasClass('active')) {
      return;
  }

  $(".nav-link").removeClass('active');
  $(this).addClass('active');
});

$('.moreless-button').click(function () {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
      $(this).text("Read less")
  } else {
      $(this).text("Read more")
  }
});