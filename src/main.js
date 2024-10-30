'use strict';

// header 투명에서 스크롤해서 내리면 primary로
const header = document.querySelector('.header');
const headerY = header.offsetHeight;
document.addEventListener('scroll', function () {
  if (window.scrollY > headerY) {
    header.classList.add('black');
  } else {
    header.classList.remove('black');
  }
});

// home__container의 투명도와 스크롤
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', function () {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// home top으로 올려주는 화살표를 중간 높이쯤 스크롤을 내렸을 때 보이게
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', function () {
  if (window.scrollY > homeHeight / 2) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});

// 모바일 스크린 크기일 때, 헤더 대신 토글 버튼이 보이고 누르면 메뉴 보이게
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

// 헤더 메뉴의 하나를 클릭하면 메뉴가 자동으로 닫히게
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('active');
});
