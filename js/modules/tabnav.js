export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // ativa a tab de acordo com index da mesma
  activeTab(index) {
    this.tabContent.forEach((item) => item.classList.remove(this.activeClass));
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // adiciona os eventos as tabs
  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => item.addEventListener('click', () => this.activeTab(index)));
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item
      this.addTabNavEvent();
      this.activeTab(0);
    }
  }
}
