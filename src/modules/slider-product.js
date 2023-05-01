export const activateProductSlider = () => {
  const dots = document.querySelectorAll('.slider-product__main-dots--item');

  const sliderLine = document.querySelector('.slider-product__main-list');
  let position = 0;

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      position = 262 * index;
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

  const sliderProductEl = document.querySelector('.slider-product__main');

  const sliderProductBtn = document.querySelector('.slider-product__main--button');

  const sliderProductBtnVector = document.querySelector('.slider-product__main--button--vector');

  const sliderProductBtnText = document.querySelector('.slider-product__main--button--text');

  sliderProductBtn.addEventListener('click', () => {
    sliderProductBtnVector.classList.toggle('rotate-vector');
    if (sliderProductBtnText.innerText == "Показать все") {
      sliderProductEl.style.maxHeight = 650 + 'px';
      sliderProductBtnText.innerText = "Скрыть"
    } else {
      sliderProductBtnText.innerText = "Показать все";
      sliderProductEl.style.maxHeight = 190 + 'px';
    }
  })

  window.addEventListener('resize', () => {
    if (document.body.clientWidth >= 767) {
      sliderLine.style.left = 0 + 'px';
      syncDots(0)
    }
  });
}