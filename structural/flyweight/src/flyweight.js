/*
Neste exemplo, temos a classe ModeloDeCarro, que representa a parte intrínseca dos 
objetos Flyweight, contendo informações compartilhadas entre várias instâncias. 
A classe FabricaDeModelosDeCarro atua como uma fábrica de objetos Flyweight e garante 
que objetos Flyweight únicos sejam compartilhados entre os clientes. 
A classe Cliente representa a parte extrínseca dos objetos e contém informações 
específicas para cada instância.
*/

// Classe Flyweight (parte intrínseca)
class ModeloDeCarro {
    constructor(modelo) {
        this.modelo = modelo;
    }
}

// Fabrica de Flyweights
class FabricaDeModelosDeCarro {
    constructor() {
        this.modelos = {};
    }
    
    obterModelo(modelo) {
        if (!this.modelos[modelo]) {
            this.modelos[modelo] = new ModeloDeCarro(modelo);
        }
        return this.modelos[modelo];
    }
}

// Classe Cliente (parte extrínseca)
class Cliente {
    constructor(nome, modelo) {
        this.nome = nome;
        this.modelo = modelo;
    }
    
    exibirDetalhes() {
        console.log(`Cliente: ${this.nome}, Modelo: ${this.modelo.modelo}`);
    }
}

// Uso
const fabrica = new FabricaDeModelosDeCarro();

const cliente1 = new Cliente("Alice", fabrica.obterModelo("Sedan"));
const cliente2 = new Cliente("Bob", fabrica.obterModelo("SUV"));
const cliente3 = new Cliente("Carol", fabrica.obterModelo("Sedan"));

cliente1.exibirDetalhes(); // Saída: Cliente: Alice, Modelo: Sedan
cliente2.exibirDetalhes(); // Saída: Cliente: Bob, Modelo: SUV
cliente3.exibirDetalhes(); // Saída: Cliente: Carol, Modelo: Sedan
