/*
Um exemplo bem conhecido de uso do padrão Prototype no dia a dia é na clonagem de objetos em aplicativos ou sistemas onde você precisa criar cópias de objetos com configurações semelhantes.

Considere um aplicativo de design gráfico, como um software de edição de imagens. Nesse cenário, é comum clonar elementos gráficos, como formas, textos ou camadas, para criar cópias com pequenas variações. O padrão Prototype permite criar essas cópias sem precisar recriar manualmente todas as configurações e propriedades de cada elemento.
*/

class Graphic {
    constructor() {
      this.type = "";
    }
  
    clone() {
      return Object.create(this);
    }
  
    getInfo() {
      return `Type: ${this.type}`;
    }
  }
  
  // Subclasses de elementos gráficos
  class Rectangle extends Graphic {
    constructor() {
      super();
      this.type = "Rectangle";
    }
  }
  
  class Circle extends Graphic {
    constructor() {
      super();
      this.type = "Circle";
    }
  }
  
  // Exemplo de uso
  const originalRectangle = new Rectangle();
  const clonedRectangle = originalRectangle.clone();
  
  const originalCircle = new Circle();
  const clonedCircle = originalCircle.clone();
  
  console.log(originalRectangle.getInfo()); // Saída: Type: Rectangle
  console.log(clonedRectangle.getInfo()); // Saída: Type: Rectangle
  
  console.log(originalCircle.getInfo()); // Saída: Type: Circle
  console.log(clonedCircle.getInfo()); // Saída: Type: Circle
  