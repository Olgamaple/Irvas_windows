import closeModal from './closeModal';
import openModal from './openModal';

 const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]');

      trigger.forEach(item => {
        item.addEventListener('click', (e) => {
          if (e.target) {
            e.preventDefault();
          }
  
          windows.forEach(item => {
            closeModal(item);
          });
  
          openModal(modal);
        });
  
        if (item.classList.contains('popup_calc_button') || item.classList.contains('popup_calc_profile_button')) {
          item.disabled = true;
        }
      });


      modal.addEventListener('click', (e) => {
        if (e.target === modal && closeClickOverlay) {
          windows.forEach(item => {
            closeModal(item);
          });
  
          closeModal(modal);
        }
      });
  
      close.addEventListener('click', () => {
        windows.forEach(item => {
          closeModal(item);
        });
  
        closeModal(modal);
      });
    }


  function showModalByTime(selector, time) {
    setTimeout(function() {
    openModal(document.querySelector(selector));
    }, time);
  }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 60000);
 };

 export default modals;