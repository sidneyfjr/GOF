/*
    Neste exemplo, temos um publicador (Publisher) e três assinantes (Subscriber). 
    Os assinantes se inscrevem no publicador e são notificados quando o publicador 
    envia uma mensagem. Quando um assinante não deseja mais receber notificações, 
    ele pode se cancelar a inscrição. O padrão Observer é útil para implementar sistemas 
    em que os objetos precisam reagir a mudanças em outro objeto sem uma dependência direta.
*/
class Publisher {
    constructor() {
      this.subscribers = [];
    }
  
    subscribe(observer) {
      this.subscribers.push(observer);
    }
  
    unsubscribe(observer) {
      this.subscribers = this.subscribers.filter(subscriber => subscriber !== observer);
    }
  
    notify(message) {
      this.subscribers.forEach(subscriber => subscriber.update(message));
    }
  }
  
  class Subscriber {
    constructor(name) {
      this.name = name;
    }
  
    update(message) {
      console.log(`${this.name} received message: ${message}`);
    }
  }
  
  // Uso
  const publisher = new Publisher();
  
  const subscriber1 = new Subscriber('Subscriber 1');
  const subscriber2 = new Subscriber('Subscriber 2');
  const subscriber3 = new Subscriber('Subscriber 3');
  
  publisher.subscribe(subscriber1);
  publisher.subscribe(subscriber2);
  publisher.subscribe(subscriber3);
  
  publisher.notify('Hello!');
  
  publisher.unsubscribe(subscriber2);
  
  publisher.notify('How are you?');
  