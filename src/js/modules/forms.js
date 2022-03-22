import checkNumInputs from "./checkNumInputs";
import closeModal from './closeModal';


const forms = (state) => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        windows = document.querySelectorAll('[data-modal]');

        // checkNumInputs('input[name="user_phone"]');

  const message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
      document.querySelector('.status').textContent = message.loading;

      let res = await fetch(url, {
          method: "POST",
          body: data
      });

      return await res.text();
  };

  const clearInputs = () => {
      inputs.forEach(item => {
            switch(item.getAttribute('type')) {
                case 'text':
                    item.value = '';
                    break;
                case 'checkbox':
                    item.checked = false;
                    break;
            }
        });
        
    };

    const clearState = () => {
        for (let key in state) {
            if (key !== 'shape' && key !== 'type') {
                delete state[key];
            }
        }
    };

    checkNumInputs('input[name="user_phone"]');

  form.forEach(item => {
      item.addEventListener('submit', (e) => {
          e.preventDefault();

          let statusMessage = document.createElement('div');
          statusMessage.classList.add('status');
          item.appendChild(statusMessage);

          const formData = new FormData(item);

          if (item.getAttribute('data-calc') === 'end') {
              for ( let key in state) {
                  formData.append(key, state[key]);
              }
          }

          postData('assets/server.php', formData)
              .then(res => {
                //   console.log(res);
                  statusMessage.textContent = message.success;
              })
              .catch(() => statusMessage.textContent = message.failure)
              .finally(() => {
                    clearInputs();
                    clearState();
                    document.querySelector('.popup_calc_button').disabled = true;
                    document.querySelector('.popup_calc_profile_button').disabled = true;
                    // const fin = 
                    new Promise(resolve => {
                        setTimeout(() => {
                            statusMessage.remove();
                            resolve();
                        }, 3000);
                    })
                    .then(() => {
                        windows.forEach(item => {
                            closeModal(item);
                        });
                    })
                })
        });
    });
}

export default forms;