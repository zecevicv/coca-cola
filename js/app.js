/* #Header
================================================== */
if (Vue) {
  new Vue({
    el: '.header',
    data: {
      showMenu: false
    },
    watch: {
      showMenu: function (val) {
        const body = document.querySelector('body');
        if (val == true) {
          body.classList.add('no-scroll');
        } else {
          body.classList.remove('no-scroll');
        }
      },
    }
  });
}

/* #Component Video Slider
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
        slidesPerView: 1.5
      },
      1024: {
        slidesPerView: 4,
      }
    }
  });
}

/* #Visitors Center
================================================== */
if (document.querySelector('.visitors-center-faq .faqs')) {
  const faqs = document.querySelectorAll('.visitors-center-faq .faq');

  faqs.forEach((faq) => {
    new Vue({
      el: faq,
      data: {
        open: false
      }
    });
  });
}

/* #DIY Slider
======================================================= */
if (document.querySelector('.diy-navigation .swiper-container')) {
  new Swiper('.diy-navigation .swiper-container', {
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
    breakpoints: {
      0: {
        slidesPerView: 4,
        allowTouchMove: true,
      },
      1024: {
        slidesPerView: 4,
        allowTouchMove: false,
      }
    },
  });
}

/* #Post Card Slider
======================================================= */
if (document.querySelector('.post-card .swiper-container')) {
  new Swiper('.post-card .swiper-container', {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.post-card .swiper-button-next',
      prevEl: '.post-card .swiper-button-prev',
    },
  });
}

/* #Flipdown
======================================================= */
function setupFlip(tick) {
  const flipCard = tick._element.querySelector('.tick-flip');
  flipCard.addEventListener('click', (e) => {
    if (
      e.target.closest('.tick-flip-panel-back') ||
      e.target.closest('.tick-flip-panel-back-highlight') ||
      e.target.closest('.tick-flip-panel-text-wrapper')
    ) {
      if (tick.value == 1) {
        tick.value = 9;
      } else {
        tick.value--;
      }
    } else {
      if (tick.value == 9) {
        tick.value = 1;
      } else {
        tick.value++;
      }
    }
  });
}