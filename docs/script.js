$(document).ready(function () {
  $(window).on("scroll", function () {
    $(".scroll-down").css("top", "-80px");
    if (window.outerWidth > 500) {
      if ($(window).scrollTop() > $(".scroll-down").offset().top + 20) {
        $("#nav-bar").addClass("fixed-nav");
      } else {
        $("#nav-bar").removeClass("fixed-nav");
      }
      if ($(window).scrollTop() > $(".profile-container").offset().top - 2) {
        resetActive();
        $("#profile-nav-item").addClass("active");
      }

      if (
        $(window).scrollTop() >
        $(".experiences-container").offset().top - 2
      ) {
        resetActive();
        $("#experience-nav-item").addClass("active");
      }

      if ($(window).scrollTop() > $(".skills-container").offset().top - 2) {
        resetActive();
        $("#skill-nav-item").addClass("active");
      }

      if (
        $(window).scrollTop() >
        $(".achievements-container").offset().top - 2
      ) {
        resetActive();
        $("#achievement-nav-item").addClass("active");
      }

      if ($(window).scrollTop() > $(".contact-container").offset().top - 2) {
        resetActive();
        $("#contact-nav-item").addClass("active");
      }
    }
  });

  function resetActive() {
    $("#profile-nav-item").removeClass("active");
    $("#experience-nav-item").removeClass("active");
    $("#skill-nav-item").removeClass("active");
    $("#achievement-nav-item").removeClass("active");
    $("#contact-nav-item").removeClass("active");
  }

  if (window.outerHeight < 800) {
    $(".section-title").css("fontSize", "22px");
    $(".section-sub-title").css("fontSize", "20px");
    $(".photo-container").css("width", "154px");
    $(".photo-container").css("height", "154px");
    $(".photo-container img").css("width", "150px");
    $(".photo-container img").css("height", "150px");
    $(".profile-right").css("padding-top", "0px");
    $(".profile-right").css("fontSize", "15px");
    $(".profile-right").css("lineHeight", "26px");
    $(".work-experience").css("padding", "25px");
    $(".work-item").css("fontSize", "14px");
    $(".work-company").css("fontSize", "15px");
    $(".work-duration").css("fontSize", "12px");
    $(".work-item-2").css("top", "150px");
    $(".work-item-2-circle").css("top", "150px");
    $(".work-item-3").css("top", "275px");
    $(".work-item-3-circle").css("top", "275px");
    $(".work-item-4").css("top", "400px");
    $(".work-item-4-circle").css("top", "400px");
    $(".skill-item").css("fontSize", "16px");
    $(".skill-item").css("marginTop", "25px");
    $(".sub-title").css("marginBottom", "20px");
    $(".sub-title").css("fontSize", "18px");
    $(".award-text").css("fontSize", "14px");
    $(".certification-text").css("fontSize", "14px");
  } 
  
  if (window.outerHeight < 700) {
    $(".section-title").css("fontSize", "20px");
    $(".section-sub-title").css("fontSize", "18px");
    $(".photo-container").css("width", "134px");
    $(".photo-container").css("height", "134px");
    $(".photo-container img").css("width", "130px");
    $(".photo-container img").css("height", "130px");
    $(".profile-right").css("padding-top", "0px");
    $(".profile-right").css("fontSize", "14px");
    $(".profile-right").css("lineHeight", "23px");
    $(".work-experience").css("padding", "20px");
    $(".work-item").css("fontSize", "13px");
    $(".work-company").css("fontSize", "14px");
    $(".work-duration").css("fontSize", "11px");
    $(".work-item-2").css("top", "125px");
    $(".work-item-2-circle").css("top", "125px");
    $(".work-item-3").css("top", "250px");
    $(".work-item-3-circle").css("top", "250px");
    $(".work-item-4").css("top", "375px");
    $(".work-item-4-circle").css("top", "375px");
    $(".skill-item").css("fontSize", "15px");
    $(".skill-item").css("marginTop", "20px");
    $(".sub-title").css("marginBottom", "15px");
    $(".sub-title").css("fontSize", "16px");
    $(".award-text").css("fontSize", "13px");
    $(".certification-text").css("fontSize", "13px");
    $(".profile-container").css("padding", "20px 20px");
    $(".experiences-container").css("padding", "20px 20px");
    $(".skills-container").css("padding", "20px 20px");
    $(".achievements-container").css("padding", "20px 20px");
    $(".contact-container").css("padding", "20px 20px");
    $(".social img").css("margin", "0px 20px");
    $(".social img").css("width", "40px");
    $(".skills-container .section-content").css("width", "300px");
  }
});
