import 'slick-carousel';

class Sliders {
  constructor() {
    this.$screenSlider = $('.screen__slider');
    this.$productView = $('.product__view');

    this.defaultOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      speed: 800,
      useTransform: true,
      adaptiveHeight: true,
      accessibility: false,
      swipe: true,
      arrows: false,
      rows: 0
    };

    this.init();
  }

  init() {
    if (this.$screenSlider.length) this.initScreenSlider();
    if (this.$productView.length) this.initProdView();
  }

  initScreenSlider() {
    this.$screenSlider.slick($.extend({}, this.defaultOptions, {
      dotsClass: 'screen__slider-dots',
      fade: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000
    }));
  }

  initProdView() {
    this.$productView.each((i, el) => {
      const $viewImg = $(el).find('.product__view-img');
      const $viewThumbs = $(el).find('.product__view-thumbs');

      $viewImg.slick($.extend({}, this.defaultOptions, {
        asNavFor: $viewThumbs,
        infinite: false,
        speed: 400
      }));
      $viewThumbs.slick($.extend({}, this.defaultOptions, {
        asNavFor: $viewImg,
        slidesToShow: 4,
        focusOnSelect: true,
        infinite: false
      }));
    });
  }
}

export default new Sliders();
