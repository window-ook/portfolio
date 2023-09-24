const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#testimonial',
  '#contact',
];
const sections = sectionIds.map((id) => document.querySelector(id)); // 섹션의 id
const navItems = sectionIds.map(
  (id) => document.querySelector(`[href="${id}"]`) // 네비게이션 바의 a 태그
);
const visibleSections = sectionIds.map(() => false);
let activeNavItem = navItems[0];

const options = {
  rootMargin: '-20% 0px 0px 0px',
  threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

// 옵저버 콜백
function observerCallback(entries) {
  let selectLastone;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastone =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;
  });
  console.log(visibleSections);
  console.log('무조건 라스트 섹션!!', selectLastone);

  const navIndex = selectLastone
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);
  selectNavItem(navIndex);
}

// 첫번째 인터섹션
function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return;
  activeNavItem.classList.remove('active');
  activeNavItem = navItem;
  activeNavItem.classList.add('active');
}
