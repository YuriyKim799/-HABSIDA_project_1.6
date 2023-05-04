export const showText = () => {
  const textContEl = document.querySelector('.features-text__desc--continued');

  const textDescEl = document.querySelector('.features-text__desc');

  const featuresBtnEl = document.querySelector('.features-text__wrap');

  const btnElVector = document.querySelector('.features-btn__vector');

  const btnElText = document.querySelector('.features-text__wrap--btn-text');

  featuresBtnEl.addEventListener('click', () => {
    btnElVector.classList.toggle('rotate-vector');
    textContEl.classList.toggle('show-continued');
    if (btnElText.innerText == "Читать далее") {
      // textDescEl.style.height = 295 + 'px';
      btnElText.innerText = "Скрыть";
    } else {
      btnElText.innerText = "Читать далее";
      // textDescEl.style.height = 75 + 'px';
    }
  });

  // if(document.body.clientWidth < 768) {
  //   containerEl.style.height = 535 + 'px';
  // }

  // window.addEventListener('resize', () => {
  //   if (document.body.clientWidth < 768) {
  //     containerEl.style.height = 535 + 'px';
  //   } else if (document.body.clientWidth > 768) {
  //     containerEl.style.height = 215 + 'px';
  //   }
  // })

}