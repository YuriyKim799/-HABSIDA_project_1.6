export const feedbackFunc = () => {
  const feedbackEl = document.querySelector('.modal-feedback');

  const feedbackCloseBtn = document.querySelector('.modal-feedback__close-btn');

  const messageBtnEls = document.querySelectorAll('.nav-buttons__message-btn');

  const modalSidebarEl = document.querySelector('.main__tablet-sidebar');

  const feedBackCloseBtnTablet = document.querySelector('.modal-feedback__close-btn--form');

  messageBtnEls.forEach(el => {
    el.addEventListener('click', showModalWindow);
  })

  function showModalWindow() {
    if (!modalSidebarEl.classList.contains('modal-sidebar__active')) {
      modalSidebarEl.classList.add('modal-sidebar__active')
      feedbackEl.classList.toggle('modal-feedback__active');
    } else {
      feedbackEl.classList.toggle('modal-feedback__active');
    }
  }

  feedbackCloseBtn.addEventListener('click', () => {
    feedbackEl.classList.toggle('modal-feedback__active');
  })

  feedBackCloseBtnTablet.addEventListener('click', () => {
    feedbackEl.classList.toggle('modal-feedback__active');
  })
}