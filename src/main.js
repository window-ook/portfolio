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
