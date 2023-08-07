Intenção: “Garantir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma”

Exemplos: 

Um objeto de configuração, um config.js, por exemplo,  que é usado por toda a aplicação.

Um módulo em javascript ou python, uma vez criado e exportado, será o mesmo em toda a aplicação. 

Definir o tema da aplicação.

Um pool de conexão para acesso ao banco de dados.

Em muitos casos substitui variáveis globais.

Obs: Quebra o princípio da responsabilidade única.

O padrão Singleton é um padrão de projeto de software que garante que uma classe tenha apenas uma única instância e fornece um ponto de acesso global para essa instância. Isso significa que, em uma aplicação, independentemente de quantas vezes você tentar criar uma instância dessa classe, ela sempre retornará a mesma instância já criada anteriormente.

O padrão Singleton é útil em cenários em que você precisa ter apenas uma única instância de uma classe para compartilhar dados ou recursos em todo o sistema. Isso pode ser especialmente útil em casos de gerenciamento de configurações, caches, conexões de banco de dados, entre outros.

A implementação básica do padrão Singleton envolve a definição de um método estático na classe que é responsável por garantir que apenas uma instância da classe seja criada e retornada sempre que for solicitado.
