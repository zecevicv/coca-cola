/* #Component Video Slider Slider
================================================== */
if (document.querySelector('.component-video-slider')) {
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
}

/* #Component Years - Flipdown JS
================================================== */
if (document.querySelector('.flipdown')) {
  new FlipDown(1593561600, "flipdown").start();
}

/* #Home Virtual Tour
================================================== */
if (document.querySelector('#homeVirtualTour')) {
  var homeVirtualTour = new Vue({
    el: '#homeVirtualTour',
    data: {
      zero: false,
      classic: false
    }
  });
}

/* #Timeline Bottles Slider
================================================== */
if (document.querySelector('.timeline-bottles')) {
  var swiper = new Swiper('.timeline-bottles .swiper-container', {
    slidesPerView: 4.6,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.5
      },
      1024: {
        slidesPerView: 4.6,
      }
    }
  });
}

/* #Timeline Years Slider
================================================== */
if (document.querySelector('.timeline-years')) {
  var swiper = new Swiper('.timeline-years .swiper-container', {
    slidesPerView: 4,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.25
      },
      1024: {
        slidesPerView: 4,
      }
    }
  });
}