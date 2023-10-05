function onScroll() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
}

var swiper = new Swiper('.slide-content', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

ScrollReveal({
  origin: 'top',
  distance: '30px',
  durantion: 700
}).reveal(
  '#cells .title, #boxes, #boxes .donation-title, #boxes .all-donations, #declaration, #declaration h1, #declaration .container, #information, #information .div1, #information .div2, #information .div3, #information .div4, #agende, #agende h2,#agende div, #agende #developer'
);
