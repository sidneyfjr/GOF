// Classe base que atua como protótipo
class Prototype {
    constructor(value) {
      this.value = value;
    }
  
    clone() {
      return new Prototype(this.value);
    }
  }
  
  // Criação de instâncias a partir do protótipo
  const prototypeInstance = new Prototype("Default Value");
  
  const clone1 = prototypeInstance.clone();
  clone1.value = "Modified Value 1";
  
  const clone2 = prototypeInstance.clone();
  clone2.value = "Modified Value 2";
  
  console.log(prototypeInstance.value); // Saída: Default Value
  console.log(clone1.value); // Saída: Modified Value 1
  console.log(clone2.value); // Saída: Modified Value 2
  