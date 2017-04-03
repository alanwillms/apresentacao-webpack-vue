import Logger from './Logger.js';
import Modal from './Modal.js';

class Application {
  contructor () {
    Logger.log('Iniciando aplicação');
  }

  run () {
    document.getElementById('botao-abrir').onclick = function() {
      var modal = new Modal('modal')
      modal.show()
    };
  }
};

export default Application;
