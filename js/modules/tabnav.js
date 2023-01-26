export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const activeClass = 'ativo';
  function activeTab(index) {
    tabContent.forEach((item) => item.classList.remove(activeClass));
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add(activeClass, direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);
    tabMenu.forEach((item, index) => item.addEventListener('click', () => activeTab(index)));
  }
}
