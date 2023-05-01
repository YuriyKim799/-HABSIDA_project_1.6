export const showModalCall = () => {
  const modalCallEl = document.querySelector('.modal-call');

  const modalCallCloseBtn = document.querySelector('.modal-call__close-btn');

  const callBtnEls = document.querySelectorAll('.nav-buttons__phone-btn');

  const modalSidebarEl = document.querySelector('.main__tablet-sidebar');

  const modalCallCloseBtnTablet = document.querySelector('.modal-call__close-btn--form');

  callBtnEls.forEach(el => {
    el.addEventListener('click', showModalCallWindow)
  });

  function showModalCallWindow() {
    if (!modalSidebarEl.classList.contains('modal-sidebar__active')) {
      modalSidebarEl.classList.add('modal-sidebar__active')
      modalCallEl.classList.toggle('modal-call__active');
    } else {
      modalCallEl.classList.toggle('modal-call__active');
    }
  }

  modalCallCloseBtn.addEventListener('click', () => {
    modalCallEl.classList.toggle('modal-call__active')
  });

  modalCallCloseBtnTablet.addEventListener('click', () => {
    modalCallEl.classList.toggle('modal-call__active');
  })
}