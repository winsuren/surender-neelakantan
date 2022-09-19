$(document).ready(function () {
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

    if (window.outerWidth < 500) {
      $(".overlay").css("height", window.outerHeight + "px")
      $(".bg-container").css("height", window.outerHeight + "px")
      $(".top-container").css("height", window.outerHeight + "px")
      $(".profile-container").css("height", window.outerHeight + "px")
      $(".experiences-container").css("height", window.outerHeight + "px")
      $(".skills-container").css("height", window.outerHeight + "px")
      $(".achievements-container").css("height", window.outerHeight + "px")
      $(".contact-container").css("height", window.outerHeight + "px")
    }

  });

  function resetActive() {
    $("#profile-nav-item").removeClass("active");
    $("#experience-nav-item").removeClass("active");
    $("#skill-nav-item").removeClass("active");
    $("#achievement-nav-item").removeClass("active");
    $("#contact-nav-item").removeClass("active");
  }
});
