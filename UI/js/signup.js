// const nigState = [
//   {
//     name: "Abia",
//     capital: "Umuahia",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Adamawa",
//     capital: "Yola",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Akwa Ibom",
//     capital: "Uyo",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Anambra",
//     capital: "Awka",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Bauchi",
//     capital: "Bauchi",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Benue",
//     capital: "Makurdi",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Borno",
//     capital: "Maiduguri",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Bayelsa",
//     capital: "Yenagoa",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Cross River",
//     capital: "Calabar",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Delta",
//     capital: "Asaba",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Ebonyi",
//     capital: "Abakaliki",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Edo",
//     capital: "Benin",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Ekiti",
//     capital: "Ado-Ekiti",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Enugu",
//     capital: "Enugu",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Federal Capital Territory",
//     capital: "Abuja",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Gombe",
//     capital: "Gombe",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Jigawa",
//     capital: "Dutse",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Imo",
//     capital: "Owerri",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Kaduna",
//     capital: "Kaduna",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Kebbi",
//     capital: "Birnin Kebbi",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Kano",
//     capital: "Kano",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Kogi",
//     capital: "Lokoja",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Lagos",
//     capital: "Ikeja",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Katsina",
//     capital: "Katsina",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Kwara",
//     capital: "Ilorin",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Nasarawa",
//     capital: "Lafia",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Niger",
//     capital: "Minna",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Ogun",
//     capital: "Abeokuta",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Ondo",
//     capital: "Akure",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Rivers",
//     capital: "Port Harcourt",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Oyo",
//     capital: "Ibadan",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Osun",
//     capital: "Osogbo",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Sokoto",
//     capital: "Sokoto",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Plateau",
//     capital: "Jos",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Taraba",
//     capital: "Jalingo",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Yobe",
//     capital: "Damaturu",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   },
//   {
//     name: "Zamfara",
//     capital: "Gusau",
//     constituency: ["Abia Central", "Abia North", "Abia South"]
//   }
// ];
// const inputStateDOM = document.querySelector("#inputState");
// const inputCitiesDOM = document.querySelector("#inputCities");

// document.addEventListener("DOMContentLoaded", async () => {
//   const cities = await fetch(
//     "http://locationsng-api.herokuapp.com/api/v1/states"
//   );
//   const k = await cities.json();
//   console.log(k);
// });
// "http://locationsng-api.herokuapp.com/api/v1/states/lagos/lgas"
//"http://locationsng-api.herokuapp.com/api/v1/cities"
(function($) {
  "use strict";

  // Preloader
  $(window).on("load", function() {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function() {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $(".nav-menu").superfish({
    animation: {
      opacity: "show"
    },
    speed: 400
  });

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container")
      .clone()
      .prop({
        id: "mobile-nav"
      });
    $mobile_nav.find("> ul").attr({
      class: "",
      id: ""
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on("click", ".menu-has-children i", function(e) {
      $(this)
        .next()
        .toggleClass("menu-item-active");
      $(this)
        .nextAll("ul")
        .eq(0)
        .slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on("click", "#mobile-nav-toggle", function(e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-scrolled")) {
            top_space = top_space - 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this)
            .closest("li")
            .addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, #mobile-nav");
  var main_nav_height = $("#header").outerHeight();

  $(window).on("scroll", function() {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find("li").removeClass("menu-active menu-item-active");
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("menu-active menu-item-active");
      }
    });
  });

  // Intro carousel
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel
    .find(".carousel-inner")
    .children(".carousel-item")
    .each(function(index) {
      index === 0
        ? introCarouselIndicators.append(
            "<li data-target='#introCarousel' data-slide-to='" +
              index +
              "' class='active'></li>"
          )
        : introCarouselIndicators.append(
            "<li data-target='#introCarousel' data-slide-to='" +
              index +
              "'></li>"
          );

      $(this).css(
        "background-image",
        "url('" +
          $(this)
            .children(".carousel-background")
            .children("img")
            .attr("src") +
          "')"
      );
      $(this)
        .children(".carousel-background")
        .remove();
    });

  $("#portfolio-flters li").on("click", function() {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
})(jQuery);
