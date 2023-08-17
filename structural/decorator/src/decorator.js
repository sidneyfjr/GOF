/*
Um exemplo comum que ilustra o padrão Decorator é a customização de uma bebida em um café. 
Suponha que você tenha uma classe Bebida que representa uma bebida genérica, 
e você deseja adicionar condimentos extras a essa bebida, como leite, açúcar ou creme, 
sem precisar criar várias subclasses para cada combinação possível. 
O padrão Decorator é perfeito para isso.

Nesse exemplo, temos a classe base Bebida, que representa a interface dos componentes 
que podem ser decorados. A classe Cafe é um componente concreto. 
As classes LeiteDecorator e AcucarDecorator são os decoradores concretos, 
que estendem o comportamento da classe base Bebida. O padrão Decorator permite 
a combinação flexível desses decoradores para criar diferentes combinações 
de funcionalidades extras.
*/

// Component interface
class Bebida {
    getDescricao() {
        return "Bebida genérica";
    }
    custo() {
        return 0;
    }
}

// Concrete Component
class Cafe extends Bebida {
    getDescricao() {
        return "Café";
    }
    custo() {
        return 5;
    }
}

// Decorator abstract class
class Decorator extends Bebida {
    constructor(bebida) {
        super();
        this._bebida = bebida;
    }
    getDescricao() {
        return this._bebida.getDescricao();
    }
}

// Concrete Decorators
class LeiteDecorator extends Decorator {
    getDescricao() {
        return this._bebida.getDescricao() + ", com Leite";
    }
    custo() {
        return this._bebida.custo() + 2;
    }
}

class AcucarDecorator extends Decorator {
    getDescricao() {
        return this._bebida.getDescricao() + ", com Açúcar";
    }
    custo() {
        return this._bebida.custo() + 1;
    }
}

// Uso
const meuCafe = new Cafe();
console.log(meuCafe.getDescricao()); // Saída: Café
console.log(meuCafe.custo()); // Saída: 5

const cafeComLeite = new LeiteDecorator(meuCafe);
console.log(cafeComLeite.getDescricao()); // Saída: Café, com Leite
console.log(cafeComLeite.custo()); // Saída: 7

const cafeComLeiteEAçucar = new AcucarDecorator(new LeiteDecorator(meuCafe));
console.log(cafeComLeiteEAçucar.getDescricao()); // Saída: Café, com Leite, com Açúcar
console.log(cafeComLeiteEAçucar.custo()); // Saída: 9
