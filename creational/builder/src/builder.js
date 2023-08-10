/*
  Neste exemplo, temos a classe `Product`, que é o objeto complexo a ser criado. 
  Em seguida, temos a classe `ProductBuilder`, que contém métodos para configurar as partes do objeto
  `Product`. Através dos métodos `buildPartA`, `buildPartB` e `buildPartC`, você pode configurar 
  cada parte do objeto `Product`. Finalmente, o método `getResult()` retorna o objeto 
  Product` final após todas as configurações.

  Usando o padrão Builder, você pode facilmente criar diferentes variações do objeto 
  complexo `Product` com o mesmo  processo de construção, tornando o código mais modular e flexível.
*/

// Classe Product representa o objeto complexo a ser criado
class Product {

    constructor() {
      this.partA = null;
      this.partB = null;
      this.partC = null;
    }
  
    // Métodos para configurar as partes do objeto complexo
    setPartA(part) {
      this.partA = part;
    }
  
    setPartB(part) {
      this.partB = part;
    }
  
    setPartC(part) {
      this.partC = part;
    }
  
    // Método para exibir as partes do objeto complexo
    show() {
      console.log(`Part A: ${this.partA}`);
      console.log(`Part B: ${this.partB}`);
      console.log(`Part C: ${this.partC}`);
    }
  }
  
  // Classe Builder responsável por construir o objeto complexo passo a passo
  class ProductBuilder {

    constructor() {
      this.product = new Product();
    }
  
    buildPartA(part) {
      this.product.setPartA(part);
    }
  
    buildPartB(part) {
      this.product.setPartB(part);
    }
  
    buildPartC(part) {
      this.product.setPartC(part);
    }
  
    getResult() {
      return this.product;
    }
  }
  
  // Exemplo de uso:
  const builder = new ProductBuilder();
  
  builder.buildPartA("A1");
  builder.buildPartB("B1");
  builder.buildPartC("C1");
  
  const product = builder.getResult();

  product.show();
  