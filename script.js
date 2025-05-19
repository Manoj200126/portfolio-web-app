$(document).ready(function(){
  // sticky navbar
  $(window).scroll(function(){
    if(this.scrollY > 20) $('.navbar').addClass("sticky");
    else $('.navbar').removeClass("sticky");

    if(this.scrollY > 500) $('.scroll-up-btn').addClass("show");
    else $('.scroll-up-btn').removeClass("show");
  });

  // scroll-up behavior
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
    $('html').css("scrollBehavior", "smooth");
  });

  $(document).ready(function(){
  // simple menu toggle
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
});

  // typing animations
  new Typed(".typing", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100, backSpeed: 60, loop: true
  });
  new Typed(".typing-2", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100, backSpeed: 60, loop: true
  });

  // === Removed Owl Carousel init ===
});
