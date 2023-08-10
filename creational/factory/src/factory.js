/*
Neste exemplo, temos a classe base `Product`, que define a estrutura dos produtos a serem criados. 
As subclasses `ConcreteProductA` e `ConcreteProductB` herdam de `Product` e implementam 
detalhes específicos de cada tipo de produto.

A classe `Creator` define uma interface para o Factory Method `createProduct`, 
que é responsável por criar objetos `Product`. As subclasses `ConcreteCreatorA` e 
`ConcreteCreatorB` herdam de `Creator` e implementam o Factory Method para criar instâncias de
`ConcreteProductA` e `ConcreteProductB`, respectivamente.

Ao usar o padrão Factory Method, você pode criar diferentes tipos de produtos sem modificar 
o código das classes que utilizam esses produtos. Isso promove a flexibilidade e extensibilidade 
do código, permitindo a adição de novos tipos de produtos sem afetar a estrutura existente.

*/

// Classe base para produtos
class Product {
  
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `This is a ${this.name}.`;
  }
}

// Subclasses de produtos
class ConcreteProductA extends Product {
  constructor() {
    super("ConcreteProductA");
  }
}

class ConcreteProductB extends Product {
  constructor() {
    super("ConcreteProductB");
  }
}

// Interface do Factory Method
class Creator {
  createProduct() {
    throw new Error("Subclasses must implement createProduct method.");
  }
}

// Subclasses de Creator implementando Factory Method
class ConcreteCreatorA extends Creator {
  createProduct() {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  createProduct() {
    return new ConcreteProductB();
  }
}

// Exemplo de uso
const creatorA = new ConcreteCreatorA();
const productA = creatorA.createProduct();
console.log(productA.getInfo()); // Saída: This is a ConcreteProductA.

const creatorB = new ConcreteCreatorB();
const productB = creatorB.createProduct();
console.log(productB.getInfo()); // Saída: This is a ConcreteProductB.
