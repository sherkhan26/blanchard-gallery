document.addEventListener('DOMContentLoaded', function () {

  let gallerySlider = new Swiper(".slides-container", {
    loop: false,
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 34
      },
      1920: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        grid : {
          rows: 2,
        },
        spaceBetween: 50
      },
    },
  });


})
