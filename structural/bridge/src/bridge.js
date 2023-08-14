/*
Neste exemplo, temos uma hierarquia de cores (implementações) e uma hierarquia de formas (abstrações). 
A classe Shape contém uma referência à classe de implementação Color, permitindo que 
diferentes formas sejam desenhadas com diferentes cores sem a necessidade de criar 
uma classe separada para cada combinação forma-cor. Isso ilustra como o padrão Bridge separa 
a abstração da implementação, permitindo flexibilidade e extensibilidade no design do software.
*/

// Implementação de cores
class Color {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Red extends Color {
    constructor() {
      super("red");
    }
  }
  
  class Blue extends Color {
    constructor() {
      super("blue");
    }
  }
  
  // Abstração de formas
  class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    draw() {
      console.log(`Drawing a ${this.color.name} square`);
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    draw() {
      console.log(`Drawing a ${this.color.name} circle`);
    }
  }
  
  // Exemplo de uso
  const red = new Red();
  const blue = new Blue();
  
  const redSquare = new Square(red);
  const blueCircle = new Circle(blue);
  
  redSquare.draw(); // Output: Drawing a red square
  blueCircle.draw(); // Output: Drawing a blue circle
  