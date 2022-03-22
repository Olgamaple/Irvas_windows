import calcScroll from './calcScroll';

function openModal(elem, display = 'block') {
  elem.style.display = display;
  document.body.style.overflow = 'hidden';
  document.body.style.marginRight = `${calcScroll()}px`;
}

export default openModal;