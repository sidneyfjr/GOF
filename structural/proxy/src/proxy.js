/*
Um exemplo comum para ilustrar o padrão Proxy é a implementação de um proxy de imagem
em uma aplicação web. Suponha que você tenha uma imagem grande que leva tempo para carregar. 
Você pode usar um proxy para adiar o carregamento real da imagem até que ela seja 
exibida na tela. Enquanto isso, o proxy pode exibir uma imagem de carregamento ou 
até mesmo carregar uma versão em cache da imagem.
*/

// Interface do objeto real
class Imagem {
    constructor(nome) {
        this.nome = nome;
    }
    exibir() {
        console.log(`Exibindo imagem: ${this.nome}`);
    }
}

// Objeto real
class ImagemReal extends Imagem {
    constructor(nome) {
        super(nome);
        this.carregarImagem();
    }
    carregarImagem() {
        console.log(`Carregando imagem: ${this.nome}`);
    }
    exibir() {
        super.exibir();
    }
}

// Proxy
class ProxyImagem extends Imagem {

    constructor(nome) {
        super(nome);
        this.imagemReal = null;
    }

    exibir() {
        if (!this.imagemReal) {
            this.imagemReal = new ImagemReal(this.nome);
        }
        this.imagemReal.exibir();
    }

}

// Uso
const imagemProxy = new ProxyImagem("foto.jpg");

// O carregamento real da imagem ocorre somente quando a imagem é exibida
imagemProxy.exibir();
