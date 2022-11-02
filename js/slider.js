document.addEventListener('DOMContentLoaded', function () {
  const heroSlider = document.querySelector('.hero .swiper-container');
  let heroSwiper = new Swiper(heroSlider, {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000
    },
  });

  const eventsSlider = document.querySelector('.events .swiper-container');
  let eventsSwiper = new Swiper(eventsSlider, {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 3000,
    },

    scrollbar: {
      hide: true,
    },
  });

  document.querySelectorAll(".swiper-pagination-bullet").forEach(function (bulletEle) {
    bulletEle.style.width = '10px'
    bulletEle.style.height = '10px'
    bulletEle.style.backgroundColor = 'var(--g-color)'
    bulletEle.style.margin = '0'
  })


  const projectSwiper = new Swiper(".js-partners-slider", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      type:"fraction"
    },

    navigation: {
      nextEl: '.js-partners-next',
      prevEl: '.js-partners-prev',
      disabledClass: '.nav-btn--disabled'
    },

    breakpoints: {
      611: {
        slidesPerView: 2,
        spaceBetween: 34
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 50
      },

      1281: {
        slidesPerView: 3,
        spaceBetween: 50
      },
    }
  });


  const publicationSlider = document.querySelector('.publication .swiper-container');
  let publicationSwiper = new Swiper(publicationSlider, {
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    scrollbar: {
      hide: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 49,
      },
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    }
  });
})
