AOS.init();

$(".testimonials-slider").slick({
  dots: false, // Add navigation dots
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1200,
  prevArrow: $(".btn-prev"),
  nextArrow: $(".btn-next"),
});
$(".nav-hidden").addClass("hide-nav");

$(".link-item-nav").click(() => {
  $(".nav-hidden").toggleClass("hide-nav");
  $(".navbar").toggleClass("hide-nav");
});
// close menu
$(".close-menu").click(() => {
  $(".nav-hidden").toggleClass("hide-nav");
  $(".navbar").toggleClass("hide-nav");
  $("html").addClass("overflow-hidden");
});

//burger-menu
$(".burger-menu").click(function () {
  $(".nav-hidden").toggleClass("hide-nav");
  $(".navbar").toggleClass("hide-nav");
  $("html").addClass("overflow-hidden");
});

// dot slider
$(".dot").click(function () {
  $(".dot").removeClass("active");
  $(this).addClass("active");
});

$(document).ready(function () {
  const slides = $(".slide-hero");
  const prevBtn = $("#btn-prev");
  const nextBtn = $("#btn-next");
  const dots = $(".dot");
  let currentIndex = 0;

  function showSlide(index) {
    slides.hide();
    slides.eq(index).show();
  }

  function updateDots() {
    dots.removeClass("active");
    dots.eq(currentIndex).addClass("active");
  }

  prevBtn.click(function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    updateDots();
  });

  nextBtn.click(function () {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    updateDots();
  });

  dots.click(function () {
    currentIndex = dots.index(this);
    showSlide(currentIndex);
    updateDots();
  });

  // Initialize the first slide and dots
  showSlide(currentIndex);
  updateDots();
});
