/*
    Neste exemplo, temos um editor que mantém um conteúdo e permite criar e 
    restaurar a partir de objetos Memento. O objeto Memento mantém o estado do conteúdo do editor. 
    O Cuidador (History) armazena os diferentes estados do editor, permitindo restaurar para estados anteriores. 
    É uma representação simplificada, mas ilustra a ideia fundamental do padrão Memento.
*/

// Originador
class Editor {
    constructor() {
      this.content = "";
    }
  
    createMemento() {
      return new Memento(this.content);
    }
  
    restoreFromMemento(memento) {
      this.content = memento.getState();
    }
  
    setContent(content) {
      this.content = content;
    }
  
    getContent() {
      return this.content;
    }
  }
  
  // Memento
  class Memento {
    constructor(state) {
      this.state = state;
    }
  
    getState() {
      return this.state;
    }
  }
  
  // Cuidador
  class History {
    constructor() {
      this.mementos = [];
    }
  
    push(memento) {
      this.mementos.push(memento);
    }
  
    pop() {
      return this.mementos.pop();
    }
  }
  
  // Uso
  const editor = new Editor();
  const history = new History();
  
  editor.setContent("Primeiro conteúdo.");
  history.push(editor.createMemento());
  
  editor.setContent("Segundo conteúdo.");
  history.push(editor.createMemento());
  
  editor.setContent("Conteúdo final.");
  history.push(editor.createMemento());
  
  // Restaurando ao segundo conteúdo
  editor.restoreFromMemento(history.pop());
  console.log(editor.getContent());  // Saída: Segundo conteúdo.
  
  // Restaurando ao primeiro conteúdo
  editor.restoreFromMemento(history.pop());
  console.log(editor.getContent());  // Saída: Primeiro conteúdo.
  