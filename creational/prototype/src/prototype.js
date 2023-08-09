/*
  Neste exemplo, temos a classe `Prototype`, que atua como o protótipo para a criação de novos objetos. 
  Ela possui um atributo `value` e  um método `clone()` que cria uma nova instância clonando o protótipo.

  Ao criar instâncias do protótipo, como `prototypeInstance`, você pode cloná-las para criar novos objetos, 
  como `clone1` e `clone2`. Cada clone pode ter seu próprio valor modificado, 
  enquanto compartilha a mesma estrutura básica do protótipo original.

  O padrão Prototype é particularmente útil quando você precisa criar várias instâncias de um objeto com configurações 
  iniciais semelhantes ou quando o processo de criação de objetos é complexo e pesado. 
  Isso ajuda a melhorar a eficiência e a reusabilidade do código.
*/


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
  