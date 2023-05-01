// export const mult = (a, b) => a * b;
// export const sum = async(a, b) => a + b;

export const sideBarFunc = () => {
  const burgerBtnEl = document.querySelector('.burger-menu');
  const modalSidebarEl = document.querySelector('.main__tablet-sidebar');
  const closeBtn = document.querySelector('.sidebar__close-btn');

  burgerBtnEl.addEventListener('click', (event) => {
    modalSidebarEl.classList.toggle('modal-sidebar__active');
  });
  closeBtn.addEventListener('click', () => {
    modalSidebarEl.classList.toggle('modal-sidebar__active');
  })


}



