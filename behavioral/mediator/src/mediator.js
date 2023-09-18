/*
    Neste exemplo, temos um mediador (Mediator) que gerencia os usuários (User). 
    Os usuários enviam mensagens através do mediador, que então redistribui as mensagens 
    para todos os outros usuários. O padrão Mediator facilita a comunicação entre o
    s usuários sem que eles precisem conhecer uns aos outros diretamente.
*/

class Mediator {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    sendMessage(message, sender) {
      for (const user of this.users) {
        if (user !== sender) {
          user.receiveMessage(message);
        }
      }
    }
  }
  
  class User {
    constructor(name, mediator) {
      this.name = name;
      this.mediator = mediator;
    }
  
    sendMessage(message) {
      console.log(`${this.name} enviou a mensagem: ${message}`);
      this.mediator.sendMessage(message, this);
    }
  
    receiveMessage(message) {
      console.log(`${this.name} recebeu a mensagem: ${message}`);
    }
  }
  
  const mediator = new Mediator();
  
  const user1 = new User('Alice', mediator);
  const user2 = new User('Bob', mediator);
  const user3 = new User('Charlie', mediator);
  
  mediator.addUser(user1);
  mediator.addUser(user2);
  mediator.addUser(user3);
  
  user1.sendMessage('Olá a todos!');
  user2.sendMessage('Oi, Alice!');
  