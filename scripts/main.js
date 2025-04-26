// ==================== Swiper ====================
if (document.querySelector('.applications.swiper')) {
  new Swiper('.applications.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

if (document.querySelector('.news.swiper')) {
  new Swiper('.news.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });
}

let swiperInstance = null;

function enableSwiper() {
  const container = document.querySelector('.swiper-container');
  const ul = container.querySelector('.adaptive-swiper-list');
  const items = ul.querySelectorAll('li');

  container.classList.add('swiper');
  ul.classList.add('swiper-wrapper');
  items.forEach(item => item.classList.add('swiper-slide'));

  swiperInstance = new Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: container.querySelector('.swiper-pagination'),
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
      }
    }
  });
}

function disableSwiper() {
  if (!swiperInstance) return;

  const container = document.querySelector('.swiper-container');
  const ul = container.querySelector('.adaptive-swiper-list');
  const items = ul.querySelectorAll('li');

  swiperInstance.destroy(true, true);
  swiperInstance = null;

  container.classList.remove('swiper');
  ul.classList.remove('swiper-wrapper');
  items.forEach(item => item.classList.remove('swiper-slide'));
}

function checkSwiperBreakpoint() {
  if (window.innerWidth < 768) {
    if (!swiperInstance) enableSwiper();
  } else {
    if (swiperInstance) disableSwiper();
  }
}

window.addEventListener('load', checkSwiperBreakpoint);
window.addEventListener('resize', checkSwiperBreakpoint);


// ==================== Телефонный инпут ====================
function initPhoneInput() {
  const input = document.querySelector('#phone');
  if (!input) return;

  const iti = window.intlTelInput(input, {
    initialCountry: 'ru',
    separateDialCode: true,
    utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@17/build/js/utils.js'
  });

  let mask;
  const PHONE_MASK = '(000) 000-00-00';

  function applyMask() {
    if (mask) mask.destroy();
    mask = IMask(input, {
      mask: PHONE_MASK,
      lazy: true,
      overwrite: true,
    });
  }

  input.addEventListener('countrychange', applyMask);
  applyMask();
}

document.addEventListener('DOMContentLoaded', initPhoneInput);

const mobileOverlay = document.getElementById("mobileOverlay");

document.querySelectorAll(".mobile-overlay__link").forEach(link => {
  link.addEventListener("click", () => {
    mobileOverlay.close();
  });
});

// const videosOverlay = document.getElementById("videosOverlay");

// document.querySelector(".videos-overlay__close-button").addEventListener("click", () => {
//   videosOverlay.close();
//   });
