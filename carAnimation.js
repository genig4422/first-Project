var TrendingSlider = new Swiper('.trending-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 1500, // milliseconds between slides
      disableOnInteraction: false, // continue autoplay even when user interacts with the slider
    },
  });
  
  // Pause autoplay on mouseenter
  TrendingSlider.el.addEventListener('mouseenter', function () {
    TrendingSlider.autoplay.stop();
  });
  
  // Resume autoplay on mouseleave
  TrendingSlider.el.addEventListener('mouseleave', function () {
    TrendingSlider.autoplay.start();
  });
  