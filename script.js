$(document).ready(function () {
  alert(window.innerWidth)
  alert(window.innerHeight)
  alert(window.outerWidth)
  alert(window.outerHeight)
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > $(".scroll-down").offset().top + 20) {
      $("#nav-bar").addClass("fixed-nav");
    } else {
      $("#nav-bar").removeClass("fixed-nav");
    }

    if ($(window).scrollTop() > $(".profile-container").offset().top - 2) {
      resetActive();
      $("#profile-nav-item").addClass("active");
    }

    if ($(window).scrollTop() > $(".experiences-container").offset().top - 2) {
      resetActive();
      $("#experience-nav-item").addClass("active");
    }

    if ($(window).scrollTop() > $(".skills-container").offset().top - 2) {
      resetActive();
      $("#skill-nav-item").addClass("active");
    }

    if ($(window).scrollTop() > $(".achievements-container").offset().top - 2) {
      resetActive();
      $("#achievement-nav-item").addClass("active");
    }

    if ($(window).scrollTop() > $(".contact-container").offset().top - 2) {
      resetActive();
      $("#contact-nav-item").addClass("active");
    }

    $("#profile-nav-item").on("click", function() {
      $("#profile-nav-item").addClass("active");
    });

    $("#experience-nav-item").on("click", function() {
      $("#experience-nav-item").addClass("active");
    });

    $("#skill-nav-item").on("click", function() {
      $("#skill-nav-item").addClass("active");
    });

    $("#achievement-nav-item").on("click", function() {
      $("#achievement-nav-item").addClass("active");
    });

    $("#contact-nav-item").on("click", function() {
      $("#contact-nav-item").addClass("active");
    });

  });

  function resetActive() {
    $("#profile-nav-item").removeClass("active");
    $("#experience-nav-item").removeClass("active");
    $("#skill-nav-item").removeClass("active");
    $("#achievement-nav-item").removeClass("active");
    $("#contact-nav-item").removeClass("active");
  }
});
