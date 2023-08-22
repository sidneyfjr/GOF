/*
Um exemplo comum para ilustrar o padrão Facade é o uso de um sistema de home theater. 
Esse sistema envolve vários componentes, como a TV, o reprodutor de DVD, o receiver e os 
alto-falantes. Cada um desses componentes pode ter várias configurações e operações complexas. 
O padrão Facade permitiria criar uma interface única e simplificada para controlar todo 
o sistema de home theater, ocultando a complexidade de como cada componente funciona.

Nesse exemplo, a classe HomeTheaterFacade atua como a fachada para controlar todo o sistema
 de home theater. Ela oferece métodos simples como assistirFilme e pararFilme, 
 que encapsulam a complexidade de ligar e desligar os componentes 
 individuais e reproduzir filmes.
 */
class TV {
    ligar() {
        console.log("TV ligada");
    }
    desligar() {
        console.log("TV desligada");
    }
}

class DVDPlayer {
    ligar() {
        console.log("DVD player ligado");
    }
    desligar() {
        console.log("DVD player desligado");
    }
    reproduzirFilme() {
        console.log("Reproduzindo filme no DVD");
    }
}

class Receiver {
    ligar() {
        console.log("Receiver ligado");
    }
    desligar() {
        console.log("Receiver desligado");
    }
    configurarSom() {
        console.log("Configurando som no Receiver");
    }
}

// Facade
class HomeTheaterFacade {
    constructor(tv, dvdPlayer, receiver) {
        this.tv = tv;
        this.dvdPlayer = dvdPlayer;
        this.receiver = receiver;
    }
    
    assistirFilme() {
        this.tv.ligar();
        this.receiver.ligar();
        this.dvdPlayer.ligar();
        this.dvdPlayer.reproduzirFilme();
    }
    
    pararFilme() {
        this.dvdPlayer.desligar();
        this.receiver.desligar();
        this.tv.desligar();
    }
}

// Uso
const minhaTV = new TV();
const meuDVDPlayer = new DVDPlayer();
const meuReceiver = new Receiver();

const meuHomeTheater = new HomeTheaterFacade(minhaTV, meuDVDPlayer, meuReceiver);

meuHomeTheater.assistirFilme(); // Saída no console: TV ligada, Receiver ligado, DVD player ligado, Reproduzindo filme no DVD
meuHomeTheater.pararFilme(); // Saída no console: DVD player desligado, Receiver desligado, TV desligada
