/*
Neste exemplo, temos a classe abstrata Component que define a interface comum para objetos
individuais (Leaf) e composições de objetos (Composite). 
As classes Leaf e Composite herdam de Component e implementam o método operation 
de acordo com suas necessidades.

A classe Composite mantém uma lista de filhos (Componentes) e implementa métodos para 
adicionar e remover filhos. O método operation da classe Composite percorre todos 
os filhos e chama o método operation de cada um, construindo a operação composta.
*/

class Component {

    constructor(name) {
      this.name = name;
    }
  
    operation() {
      throw new Error("Subclasses must implement operation method.");
    }
  }
  
  class Leaf extends Component {
    operation() {
      return `Leaf ${this.name} is being operated.`;
    }
  }
  
  class Composite extends Component {
    
    constructor(name) {
      super(name);
      this.children = [];
    }
  
    add(child) {
      this.children.push(child);
    }
  
    remove(child) {
      const index = this.children.indexOf(child);
      if (index !== -1) {
        this.children.splice(index, 1);
      }
    }
  
    operation() {
      const childOperations = this.children.map(child => child.operation());
      return `Composite ${this.name} is being operated. Children: [${childOperations.join(", ")}]`;
    }
  }
  
  // Exemplo de uso
  const leaf1 = new Leaf("Leaf 1");
  const leaf2 = new Leaf("Leaf 2");
  
  const composite1 = new Composite("Composite 1");
  composite1.add(leaf1);
  composite1.add(leaf2);
  
  const leaf3 = new Leaf("Leaf 3");
  const leaf4 = new Leaf("Leaf 4");
  
  const composite2 = new Composite("Composite 2");
  composite2.add(leaf3);
  composite2.add(leaf4);
  
  const rootComposite = new Composite("Root Composite");
  rootComposite.add(composite1);
  rootComposite.add(composite2);
  
  console.log(leaf1.operation()); // Saída: Leaf Leaf 1 is being operated.
  console.log(composite1.operation()); // Saída: Composite Composite 1 is being operated. Children: [Leaf Leaf 1 is being operated., Leaf Leaf 2 is being operated.]
  console.log(rootComposite.operation()); // Saída: Composite Root Composite is being operated. Children: [Composite Composite 1 is being operated. Children: [Leaf Leaf 1 is being operated., Leaf Leaf 2 is being operated.], Composite Composite 2 is being operated. Children: [Leaf Leaf 3 is being operated., Leaf Leaf 4 is being operated.]]
  