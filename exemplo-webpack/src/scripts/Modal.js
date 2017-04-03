import Logger from './Logger.js';

class Modal {
  constructor (elementId) {
    this.element = document.getElementById(elementId);
    let botaoFechar = document.getElementById('botao-fechar');

    botaoFechar.onclick = () => {
      this.hide();
    };
  }

  show () {
    Logger.log('Abrindo modal');
    this.element.classList.add('is-active');
  };

  hide () {
    Logger.log('Fechando modal');
    this.element.classList.remove('is-active');
  }
}

export default Modal
