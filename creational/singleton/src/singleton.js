/*
  Neste exemplo, a classe `Singleton` tem um atributo `data`, que é um array usado para armazenar informações. O método `getInstance()` é responsável por garantir que apenas uma instância da classe seja criada. Quando você chama `getInstance()`, ele verifica se a instância já foi criada (verificando se `Singleton.instance` existe). Se a instância já existe, ele a retorna; caso contrário, cria uma nova instância e a armazena em `Singleton.instance`.

  Dessa forma, todas as vezes que você chamar `getInstance()`, receberá a mesma instância da classe `Singleton`, permitindo o compartilhamento de dados e recursos em todo o código.
*/

class Singleton {
  
    constructor() {
      // Aqui você pode definir os atributos que deseja na sua classe Singleton
      // Esses atributos serão compartilhados em todas as instâncias.
      this.data = [];
    }
  
    // Método estático que retorna a única instância da classe
    static getInstance() {
      // Se a instância ainda não existir, crie-a
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      // Sempre retorne a mesma instância
      return Singleton.instance;
    }
  
    // Métodos de exemplo
    addData(item) {
      this.data.push(item);
    }
  
    getData() {
      return this.data;
    }
  }
  
  // Exemplo de uso:
  const instance1 = Singleton.getInstance();
  instance1.addData("Item 1");
  
  const instance2 = Singleton.getInstance();
  instance2.addData("Item 2");
  
  console.log(instance1.getData()); // Saída: [ 'Item 1', 'Item 2' ]
  console.log(instance2.getData()); // Saída: [ 'Item 1', 'Item 2' ]
  console.log(instance1 === instance2); // Saída: true (ambas as variáveis se referem à mesma instância)
  