const tabItem = document.querySelectorAll('.tab-item');
const contentItem = document.querySelectorAll('.content-item');

tabItem.forEach(i => i.addEventListener('click', fun));

function fun(e) {
    removeBorder();
    removeShow()
    this.classList.add('tab-border');
    console.log(this.id);
    const contentItem = document.querySelector(`#${this.id}-content`);
    contentItem.classList.add('show');
}

function removeBorder() {
    tabItem.forEach(i => i.classList.remove('tab-border'));
}

function removeShow() {
    contentItem.forEach(i => i.classList.remove('show'));
}