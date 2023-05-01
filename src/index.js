import './index.html';
import './index.scss';
import { feedbackFunc } from './modules/feedback';
import { sideBarFunc } from './modules/sidebar';
import { showModalCall } from './modules/modal-call';
import { activateLogoSlider } from './modules/slider-logo';
import { activateProductSlider } from './modules/slider-product';
import { activatePriceSlider } from './modules/slider__service-price';

activateProductSlider();
activateLogoSlider();
activatePriceSlider();
sideBarFunc();
feedbackFunc();
showModalCall();