/*
Neste exemplo, temos a classe abstrata AbstractFactory que define métodos para criar 
diferentes produtos de uma família. As classes ConcreteFactoryA e ConcreteFactoryB 
herdam de AbstractFactory e implementam os métodos de criação de produtos para 
suas respectivas famílias.

As classes ProductA1, ProductA2, ProductB1 e ProductB2 são as classes concretas de produtos, 
cada uma correspondendo a um tipo de produto na família A ou B.

O método clientCode é onde você utiliza a fábrica concreta para criar produtos 
e interage com eles. O padrão Abstract Factory permite alternar facilmente entre 
diferentes famílias de produtos (Concrete Factories) enquanto mantém a consistência 
na criação de produtos dentro de cada família.
*/

// Abstract Factory que define métodos para criar diferentes produtos
class AbstractFactory {

    createProductA() {
      throw new Error("Subclasses must implement createProductA method.");
    }
  
    createProductB() {
      throw new Error("Subclasses must implement createProductB method.");
    }

  }
  
  // Concrete Factory para a família de produtos A
  class ConcreteFactoryA extends AbstractFactory {

    createProductA() {
      return new ProductA1();
    }
  
    createProductB() {
      return new ProductB1();
    }

  }
  
  // Concrete Factory para a família de produtos B
  class ConcreteFactoryB extends AbstractFactory {

    createProductA() {
      return new ProductA2();
    }
  
    createProductB() {
      return new ProductB2();
    }

  }
  
  // Interfaces para os produtos da família A
  class ProductA1 {
    getInfo() {
      return "Product A1";
    }
  }
  
  class ProductA2 {
    getInfo() {
      return "Product A2";
    }
  }
  
  // Interfaces para os produtos da família B
  class ProductB1 {
    getInfo() {
      return "Product B1";
    }
  }
  
  class ProductB2 {
    getInfo() {
      return "Product B2";
    }
  }
  
  // Exemplo de uso
  function clientCode(factory) {

    const productA = factory.createProductA();
    const productB = factory.createProductB();
  
    console.log(productA.getInfo()); // Saída: Product A1
    console.log(productB.getInfo()); // Saída: Product B1
    
  }
  
  // Usando Concrete Factory da família A
  const factoryA = new ConcreteFactoryA();
  clientCode(factoryA);
  
  // Usando Concrete Factory da família B
  const factoryB = new ConcreteFactoryB();
  clientCode(factoryB);
  