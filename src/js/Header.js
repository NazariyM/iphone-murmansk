import {
  throttle,
  css,
  Resp
} from './_helpers';

class Header {
  constructor() {
    this.body = document.querySelector('body');
    this.header = document.querySelector('.header');
    this.nav = this.header.querySelector('.header__nav');
    this.navBtn = this.header.querySelector('.header__nav-btn');

    this.init();
  }

  init() {
    this.initFix();
    if (!Resp.isDesk) {
      this.toggleNav();
      this.onResize();
    }
  }

  initFix() {
    const _this = this;
    const toggleHeaderScroll = throttle(() => {
      toggleHeader();
    }, 0, this);

    function toggleHeader() {
      if (window.pageYOffset > 0 && !_this.header.classList.contains(css.menuActive)) {
        _this.header.classList.add('header_fixed');
      } else {
        _this.header.classList.remove('header_fixed');
      }
    }

    window.addEventListener('scroll', toggleHeaderScroll);
  }

  toggleNav() {
    this.navBtn.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle(css.active);
      this.body.classList.toggle(css.locked);
      this.nav.classList.toggle(css.active);
    });
  }

  onResize() {
    window.addEventListener('reize', () => {
      console.log('res');
      this.nav.classList.remove(css.active);
      this.navBtn.classList.remove(css.active);
      this.body.classList.remove(css.locked);
    });
  }
}

export const HeaderAPI = new Header();
