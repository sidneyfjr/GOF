/*
    Neste exemplo, temos uma coleção de números representada pela classe NumberCollection
    e um iterador representado pela classe NumberIterator. 
    O iterador permite percorrer a coleção de números de forma sequencial, 
    ocultando os detalhes da implementação da coleção.
*/

class NumberIterator {
    constructor(numbers) {
      this.numbers = numbers;
      this.index = 0;
    }
  
    hasNext() {
      return this.index < this.numbers.length;
    }
  
    next() {
      return this.numbers[this.index++];
    }
  }
  
  class NumberCollection {
    constructor() {
      this.numbers = [];
    }
  
    addNumber(number) {
      this.numbers.push(number);
    }
  
    createIterator() {
      return new NumberIterator(this.numbers);
    }
  }
  
  // Uso
  const numberCollection = new NumberCollection();
  numberCollection.addNumber(1);
  numberCollection.addNumber(2);
  numberCollection.addNumber(3);
  
  const iterator = numberCollection.createIterator();
  
  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
  