/*
Neste exemplo, temos a classe abstrata GUIFactory que define métodos para criar 
componentes de interface, como botões e caixas de seleção. As classes WindowsFactory
e MacFactory herdam de GUIFactory e implementam os métodos de criação de componentes 
no estilo Windows e macOS, respectivamente.

As classes WindowsButton, MacButton, WindowsCheckbox e MacCheckbox são as 
classes concretas de componentes de interface, cada uma correspondendo a um estilo 
específico de componente.

O método createUI é onde você utiliza a fábrica concreta para criar componentes 
de interface e os renderiza. O padrão Abstract Factory permite criar interfaces 
compatíveis com diferentes estilos visuais (Concrete Factories) enquanto mantém a 
consistência na criação de componentes dentro de cada estilo.
*/

// Abstract Factory para criar componentes de interface
class GUIFactory {

    createButton() {
      throw new Error("Subclasses must implement createButton method.");
    }
  
    createCheckbox() {
      throw new Error("Subclasses must implement createCheckbox method.");
    }

  }
  
  // Concrete Factory para criar componentes de interface no estilo Windows
  class WindowsFactory extends GUIFactory {

    createButton() {
      return new WindowsButton();
    }
  
    createCheckbox() {
      return new WindowsCheckbox();
    }

  }
  
  // Concrete Factory para criar componentes de interface no estilo macOS
  class MacFactory extends GUIFactory {

    createButton() {
      return new MacButton();
    }
  
    createCheckbox() {
      return new MacCheckbox();
    }
    
  }
  
  // Interfaces para os componentes de interface
  class Button {
    render() {
      throw new Error("Subclasses must implement render method.");
    }
  }
  
  class WindowsButton extends Button {
    render() {
      console.log("Rendering a Windows-style button.");
    }
  }
  
  class MacButton extends Button {
    render() {
      console.log("Rendering a macOS-style button.");
    }
  }
  
  class Checkbox {
    render() {
      throw new Error("Subclasses must implement render method.");
    }
  }
  
  class WindowsCheckbox extends Checkbox {
    render() {
      console.log("Rendering a Windows-style checkbox.");
    }
  }
  
  class MacCheckbox extends Checkbox {
    render() {
      console.log("Rendering a macOS-style checkbox.");
    }
  }
  
  // Exemplo de uso
  function createUI(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
  
    button.render();
    checkbox.render();
  }
  
  // Usando Concrete Factory para Windows
  const windowsFactory = new WindowsFactory();
  createUI(windowsFactory);
  
  // Usando Concrete Factory para macOS
  const macFactory = new MacFactory();
  createUI(macFactory);
  