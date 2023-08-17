/*
Neste exemplo, temos a classe base Stream que representa a interface dos componentes 
que podem ser decorados. A classe FileStream é um componente concreto que implementa 
a interface Stream. As classes EncryptionDecorator e CompressionDecorator são 
os decoradores concretos que estendem o comportamento da classe base Stream.

O uso do padrão Decorator nesse cenário permite adicionar funcionalidades 
extras de criptografia e compressão aos fluxos de dados, de forma modular e flexível, 
sem modificar o código existente da classe base ou dos componentes concretos.
*/

// Component interface
class Stream {
    write(data) {
        throw new Error("Método não implementado");
    }
    read() {
        throw new Error("Método não implementado");
    }
}

// Concrete Component
class FileStream extends Stream {
    constructor(filename) {
        super();
        this.filename = filename;
    }
    write(data) {
        console.log(`Escrevendo "${data}" no arquivo ${this.filename}`);
    }
    read() {
        console.log(`Lendo dados do arquivo ${this.filename}`);
    }
}

// Decorator abstract class
class StreamDecorator extends Stream {
    constructor(stream) {
        super();
        this.stream = stream;
    }
    write(data) {
        this.stream.write(data);
    }
    read() {
        this.stream.read();
    }
}

// Concrete Decorators
class EncryptionDecorator extends StreamDecorator {
    write(data) {
        console.log(`Criptografando os dados: "${data}"`);
        super.write(data);
    }
    read() {
        super.read();
        console.log("Descriptografando os dados");
    }
}

class CompressionDecorator extends StreamDecorator {
    write(data) {
        console.log(`Comprimindo os dados: "${data}"`);
        super.write(data);
    }
    read() {
        super.read();
        console.log("Descomprimindo os dados");
    }
}

// Uso
const fileStream = new FileStream("documento.txt");

const encryptedFileStream = new EncryptionDecorator(fileStream);
encryptedFileStream.write("Dados sensíveis");

const compressedEncryptedFileStream = new CompressionDecorator(encryptedFileStream);
compressedEncryptedFileStream.write("Dados importantes");

// Saídas no console:
// Criptografando os dados: "Dados sensíveis"
// Escrevendo "Dados sensíveis" no arquivo documento.txt
// Comprimindo os dados: "Dados importantes"
// Criptografando os dados: "Dados importantes"
// Escrevendo "Dados importantes" no arquivo documento.txt
