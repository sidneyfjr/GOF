*"Sem violar o encapsulamento, capturar e externalizar um estado interno de um objeto, de maneira que o objeto possa ser restaurado para esse estado mais tarde."*

O padrão Memento é um padrão de projeto comportamental que permite capturar e externalizar o estado interno de um objeto, sem violar o encapsulamento, de forma que esse estado possa ser restaurado posteriormente, levando o objeto de volta ao seu estado anterior.

O padrão Memento é composto por três principais componentes:

***Originador (Originator):*** É o objeto cujo estado desejamos salvar. Ele cria um objeto Memento contendo um instantâneo do seu estado interno e também pode restaurar seu estado a partir de um Memento.

***Memento:*** É um objeto que armazena o estado interno de um Originador. Normalmente, contém uma cópia dos atributos do Originador no momento em que foi criado. O Memento pode ter métodos para obter e definir o estado.

***Cuidador (Caretaker):*** É responsável por armazenar os objetos Memento. Ele pode manter vários estados do Originador, o que é útil para implementar funcionalidades de desfazer/refazer.

O padrão Memento é um padrão de projeto poderoso e versátil que pode ser aplicado em várias situações para gerenciar estados e oferecer funcionalidades de desfazer/refazer. Aqui estão alguns outros exemplos de uso do padrão Memento em diferentes contextos:
Editores Gráficos ou de Texto Avançados: Em editores de texto ou gráficos, o padrão Memento pode ser usado para implementar funcionalidades de desfazer/refazer operações, permitindo aos usuários voltar e avançar em suas ações.


***Aplicativos de Processamento de Dados:*** Em aplicativos que envolvem o processamento de dados complexos ou científicos, o padrão Memento pode ser usado para salvar e restaurar estados de cálculos ou análises.

***Sistemas de Gerenciamento de Documentos:*** Em aplicativos de edição de documentos, o padrão Memento pode ser usado para permitir que os usuários salvem diferentes versões de um documento e restaurem essas versões conforme necessário.

***Jogos:*** Em jogos, o padrão Memento pode ser usado para permitir que os jogadores salvem e restaurem seu progresso em diferentes pontos do jogo.

***Sistemas de Navegação:*** Em aplicativos de navegação, o padrão Memento pode ser usado para permitir que os usuários naveguem para trás e para frente através das páginas visitadas, restaurando o estado da página anterior.

***Sistemas de E-mail:*** Em aplicativos de e-mail, o padrão Memento pode ser usado para permitir que os usuários desfaçam ou refaçam ações, como enviar ou excluir e-mails.