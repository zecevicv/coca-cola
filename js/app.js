/* #Component Video Slider Slider
================================================== */
var swiper = new Swiper('.component-video-slider .swiper-container', {
  slidesPerView: 3.65,
  breakpoints: {
    0: {
      slidesPerView: 1.5
    },
    1024: {
      slidesPerView: 3.65,
    }
  }
});

/* #Component Years - Flipdown JS
================================================== */
new FlipDown(1593561600, "flipdown").start();

/* #Home Virtual Tour
================================================== */
var homeVirtualTour = new Vue({
  el: '#homeVirtualTour',
  data: {
    zero: false,
    classic: false
  }
})