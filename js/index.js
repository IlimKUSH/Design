var slider1 = new Swiper ('.swiper', {
  loop: true
}) 
var slider2 = new Swiper ('.swiper2', {
  loop: true
})


const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const swiper2 = new Swiper('.swiper2', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiper3 = new Swiper('.clientsSwiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // Header Burger
const headerBurger = document.querySelector('.header__burger')
const headerBurgerLink = document.querySelectorAll('.header-burger__link')
const body = document.querySelector('body')
if (headerBurger) {
    headerBurger.addEventListener ('click', () => {
        body.classList.toggle('burger')
    });
    headerBurgerLink.forEach((el) => {
        el.addEventListener('click', () => {
            body.classList.toggle('burger')
        })
    });
}

