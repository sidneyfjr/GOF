/*
    Neste exemplo, temos o comando abstrato Comando com o método executar(), 
    dois comandos concretos (Ligacao e Desligamento) que implementam o executar(), 
    um receptor (Luz) que possui as ações reais, e um invocador (ControleRemoto) que 
    pode receber e executar comandos.
*/

// Comando (Command)
class Comando {
    executar() {
      throw new Error("Método executar deve ser implementado por subclasses.");
    }
  }
  
  // Comando Concreto 1 (Concrete Command)
  class Ligacao {
    constructor(dispositivo) {
      this.dispositivo = dispositivo;
    }
    
    executar() {
      this.dispositivo.ligar();
    }
  }
  
  // Comando Concreto 2 (Concrete Command)
  class Desligamento {
    constructor(dispositivo) {
      this.dispositivo = dispositivo;
    }
    
    executar() {
      this.dispositivo.desligar();
    }
  }
  
  // Receptor (Receiver)
  class Luz {
    ligar() {
      console.log("Luz ligada");
    }
  
    desligar() {
      console.log("Luz desligada");
    }
  }
  
  // Invocador (Invoker)
  class ControleRemoto {
    constructor() {
      this.comando = null;
    }
  
    setComando(comando) {
      this.comando = comando;
    }
  
    pressionarBotao() {
      this.comando.executar();
    }
  }
  
  // Uso
  const luz = new Luz();
  const ligarLuz = new Ligacao(luz);
  const desligarLuz = new Desligamento(luz);
  
  const controle = new ControleRemoto();
  
  controle.setComando(ligarLuz);
  controle.pressionarBotao(); // Saída: Luz ligada
  
  controle.setComando(desligarLuz);
  controle.pressionarBotao(); // Saída: Luz desligada
  