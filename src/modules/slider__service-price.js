export const activatePriceSlider = () => {
  const dots = document.querySelectorAll('.service-price__slider-dots--item');

  const sliderLine = document.querySelector('.service-price__slider-list');
  let position = 0;

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      position = 274 * index;
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

  window.addEventListener('resize', () => {
    if (document.body.clientWidth >= 767) {
      sliderLine.style.left = 0 + 'px';
      syncDots(0)
    }
  });
}