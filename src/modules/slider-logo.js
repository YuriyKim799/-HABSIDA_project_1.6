export const activateLogoSlider = () => {
  const dots = document.querySelectorAll('.slider-logo__main-dots--item');

  const sliderLine = document.querySelector('.slider-logo__main-list');
  let position = 0;

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      position = 264 * index;
      sliderLine.style.left = -position + 'px';
      syncDots(index)
    })
  })


  const syncDots = (index) => {
    for (let dot of dots) {
      dot.classList.remove('active-dot');
    }
    dots[index].classList.add('active-dot');
  }

  const sliderLogoEl = document.querySelector('.slider-logo__main');

  const sliderLogoBtn = document.querySelector('.slider-logo__main--button');

  const sliderLogoBtnVector = document.querySelector('.slider-logo__main--button--vector');

  const sliderLogoBtnText = document.querySelector('.slider-logo__main--button--text');

  sliderLogoBtn.addEventListener('click', () => {
    sliderLogoBtnVector.classList.toggle('rotate-vector');
    if (sliderLogoBtnText.innerText == "Показать все") {
      sliderLogoEl.style.maxHeight = 388 + 'px';
      sliderLogoBtnText.innerText = "Скрыть"
    } else {
      sliderLogoBtnText.innerText = "Показать все";
      sliderLogoEl.style.maxHeight = 212 + 'px';
    }
  })

  window.addEventListener('resize', () => {
    if (document.body.clientWidth >= 767) {
      sliderLine.style.left = 0 + 'px';
      syncDots(0)
    }
  });
}