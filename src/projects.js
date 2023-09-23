'use strict';

// 카테고리 버튼이 클릭되면 카테고리별로 필터링 되는 로직
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }
  handleActiveSelection(event.target);
  filterProjects(filter);

  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
});

function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  projectsContainer.classList.add('anim-out');
  projects.forEach((project) => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}
