/*
Um exemplo bem conhecido de uso do padrão Proxy no dia a dia em JavaScript é a manipulação
de propriedades de objetos em tempo de execução. O Proxy é frequentemente usado para
adicionar lógica de interceptação às operações em objetos, permitindo que você
controle o acesso, a atribuição e outras ações em propriedades.

Neste exemplo, estamos usando um Proxy para o objeto pessoa, e estamos interceptando
a atribuição da propriedade idade. O Proxy verifica se a idade é um número positivo 
antes de permitir a atribuição. Se a validação falhar, ele lança uma exceção.
*/

// Objeto alvo
const pessoa = {
    nome: "João",
    idade: 30,
};

// Proxy para validar a atribuição de idade
const pessoaProxy = new Proxy(pessoa, {
    set(target, prop, value) {
        if (prop === "idade" && (typeof value !== "number" || value < 0)) {
            throw new Error("A idade deve ser um número positivo.");
        }
        target[prop] = value;
    },
});

// Uso do Proxy
console.log(pessoaProxy.nome); // Saída: João
console.log(pessoaProxy.idade); // Saída: 30

pessoaProxy.idade = 25; // Atribuição válida
console.log(pessoaProxy.idade); // Saída: 25

// Tentativa de atribuir uma idade inválida
try {
    pessoaProxy.idade = -5; // Isso lançará uma exceção devido à validação do Proxy
} catch (error) {
    console.error("Erro:", error.message); // Saída: Erro: A idade deve ser um número positivo.
}
