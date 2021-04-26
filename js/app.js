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

/* #Component Years
================================================== */


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