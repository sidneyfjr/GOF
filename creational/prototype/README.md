*“Especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetos pela cópia desse protótipo”.*


O padrão **Prototype** é um padrão de projeto de software que permite criar novos objetos ***duplicando*** um objeto existente, chamado de protótipo. Isso é útil quando a criação direta de um objeto é ineficiente ou quando você deseja criar instâncias de um objeto com configurações iniciais semelhantes.

Em vez de criar um novo objeto do zero e configurá-lo completamente, o padrão Prototype permite ***clonar*** um objeto existente, mantendo suas características básicas. Ou seja, ao invés de alterar o objeto é feita uma cópia e essa cópia é  alterada. Dessa forma é possível trabalhar com objetos imutáveis.Isso pode economizar recursos e tempo, especialmente quando os objetos têm partes complexas ou recursos pesados.

A ideia por trás do padrão Prototype é criar uma hierarquia de protótipos, onde cada objeto tem uma referência para seu protótipo. Quando um novo objeto é solicitado, ele é criado clonando o protótipo existente, que pode ser modificado conforme necessário.

Alguns exemplos comuns de uso do padrão Prototype:

1. ***Clonagem de Elementos Gráficos em Aplicações de Design:*** Em sistemas de design gráfico, é comum clonar elementos como formas, imagens e textos para criar variações ou duplicatas semelhantes.

2. ***Geração de Relatórios Personalizados:*** Sistemas de geração de relatórios frequentemente usam o padrão Prototype para criar cópias de relatórios com estruturas e formatações semelhantes, mas com dados específicos para diferentes departamentos ou usuários.

3. ***Criação de Itens em Jogos de RPG:*** Jogos de role-playing (RPG) muitas vezes usam o padrão Prototype para criar cópias de itens, como armas e poções, que têm atributos e comportamentos similares, mas podem ser únicos em termos de nome ou efeito.

4. ***Criação de Elementos de Interface Gráfica em Aplicações:*** Interfaces gráficas podem usar o padrão Prototype para criar cópias de componentes de interface, como botões, campos de entrada e caixas de seleção, com estilos e comportamentos semelhantes.

5. ***Criação de Documentos em Sistemas de Edição:*** Sistemas de edição de documentos podem usar o padrão Prototype para criar cópias de documentos, mantendo estruturas e formatações similares, mas permitindo ajustes e personalizações.