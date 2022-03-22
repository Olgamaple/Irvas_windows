import openModal from './openModal';
import closeModal from './closeModal';

// const images = () => {
//   const imgPopup = document.createElement('div'),
//         workSection = document.querySelector('.works'),
//         bigImage = document.createElement('img');

//         imgPopup.classList.add('popup');
//         workSection.appendChild(imgPopup);

//         imgPopup.style.justifyContent = 'center';
//         imgPopup.style.alignItems = 'center';
//         imgPopup.style.display = 'none';

//         imgPopup.appendChild(bigImage);

//         workSection.addEventListener('click', (e) => {
//           e.preventDefault();

//           let target = e.target;

//            if (target && target.classList.contains('preview')) {
//              imgPopup.style.display = 'flex';
//              const path = target.parentNode.getAttribute('href');
//              bigImage.setAttribute('src', path);
//            }

//            if (target && target.matches('div.popup')) {
//               imgPopup.style.display = 'none';
//            }
//         });
// };

// export default images;
function openImage() {
  const parentImg = document.querySelector('.works'),
      modalImg = document.createElement('div'),
      imgBig = document.createElement('img');

  modalImg.classList.add('popupImg');
  modalImg.style.cssText = 'display: none;position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 9;background-color: rgba(0, 0, 0, 0.5);justify-content:center;align-items:center;';
  parentImg.append(modalImg);

  imgBig.style.cssText = 'width:auto;height:85vh';
  modalImg.append(imgBig);

  parentImg.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target && e.target.classList.contains('preview')) {
      openModal(modalImg, 'flex');

      const path = e.target.parentNode.getAttribute('href');
      imgBig.setAttribute('src', path);
      imgBig.classList.add('grow');
    }

    if (e.target && e.target.matches('div.popupImg')) {
      closeModal(modalImg);
    }
  });
}

export default openImage;