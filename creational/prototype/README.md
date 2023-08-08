Intenção: “Especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetos pela cópia desse protótipo”.

O padrão Prototype é um padrão de projeto de software que permite criar novos objetos duplicando um objeto existente, chamado de protótipo. Isso é útil quando a criação direta de um objeto é ineficiente ou quando você deseja criar instâncias de um objeto com configurações iniciais semelhantes.

Em vez de criar um novo objeto do zero e configurá-lo completamente, o padrão Prototype permite clonar um objeto existente, mantendo suas características básicas. Isso pode economizar recursos e tempo, especialmente quando os objetos têm partes complexas ou recursos pesados.

A ideia por trás do padrão Prototype é criar uma hierarquia de protótipos, onde cada objeto tem uma referência para seu protótipo. Quando um novo objeto é solicitado, ele é criado clonando o protótipo existente, que pode ser modificado conforme necessário.
