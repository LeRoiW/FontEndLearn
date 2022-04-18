var that;
class menu_tab {
  constructor(id) {
    // 获取元素
    that = this;
    this.main = document.querySelector(id);
    this.lis = this.main.querySelectorAll('.menu_tab li');
    this.init();
  }
  init() {
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggle_menu_tab;
    }
  }
  toggle_menu_tab() {
    that.clear_class();
    this.className = 'menu_picked';
  }
  clear_class() {
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].className = '';
    }
  }
}

new menu_tab('.main');
