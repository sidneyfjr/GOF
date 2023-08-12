/*
    Neste exemplo, temos a classe EuropeanSocket que representa um dispositivo com 
    uma interface de tomada europeia. No entanto, o cliente espera uma interface 
    de tomada americana representada pela classe USASocketInterface.

    O adaptador USASocketAdapter recebe um objeto EuropeanSocket e implementa 
    a interface USASocketInterface, traduzindo a chamada do método connect do cliente 
    para a chamada do método plugIn do objeto EuropeanSocket.

    A função chargeDevice é o cliente que utiliza a interface esperada (USASocketInterface) 
    para carregar um dispositivo, no entanto, por meio do adaptador, ele também é 
    capaz de utilizar um dispositivo com a interface incompatível (EuropeanSocket).
*/

// Classe com interface incompatível
class EuropeanSocket {
    plugIn() {
      return "Plugged into European socket";
    }
  }
  
  // Interface esperada pelo cliente
  class USASocketInterface {
    connect() {
      throw new Error("Subclasses must implement connect method.");
    }
  }
  
  // Adaptador que converte a interface incompatível em uma interface compatível
  class USASocketAdapter extends USASocketInterface {
    constructor(europeanSocket) {
      super();
      this.europeanSocket = europeanSocket;
    }
  
    connect() {
      return this.europeanSocket.plugIn() + " with adapter to USA socket";
    }
  }
  
  // Cliente que utiliza a interface esperada
  function chargeDevice(socket) {
    console.log(socket.connect());
  }
  
  // Exemplo de uso
  const europeanSocket = new EuropeanSocket();
  const usaSocketAdapter = new USASocketAdapter(europeanSocket);
  
  chargeDevice(usaSocketAdapter);
  