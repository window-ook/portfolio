// 헤더 색을 투명에서 스크롤해서 내리면 primary색으로 내리는 스타일링
const header = document.querySelector('.header');
const headerY = header.offsetHeight;
document.addEventListener('scroll', function () {
  if (window.scrollY > headerY) {
    header.classList.add('black');
  } else {
    header.classList.remove('black');
  }
});

// eventListner 하나당 로직 하나를 가질 수 있게 분리하는게 성능, 가독성면에서 더 좋다.
// 홈 섹션의 투명도와 스크롤을 적용한 스타일링
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', function () {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
