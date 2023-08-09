*“Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações”*

O padrão **Builder** é um padrão de projeto de software que permite criar um ***objeto complexo*** - objeto com construtor complexo, composto de vários objetos ou com um algoritmo de criação complexo - ***em etapas***. Ou seja, ao invés de criar o objeto diretamente pelo construtor da classe é criada uma outra classe, classe builder, para criar esse objeto. Assim não é preciso criar vários construtores para abranger as várias possibilidades de criação do objeto.

Esse padrão é útil quando a criação direta de um objeto complexo é difícil ou quando você deseja criar várias variações do mesmo objeto, mantendo o mesmo processo de construção. Isso pode tornar o código mais legível, modular e flexível, permitindo que você adicione ou remova etapas de construção conforme necessário.

A ideia básica por trás do padrão Builder é ter uma classe Builder que contém métodos para configurar os diferentes aspectos do objeto a ser criado. Uma vez que todas as configurações são feitas, o Builder pode produzir o objeto final usando um método de construção.

Aqui estão alguns outros exemplos de uso do padrão Builder:

1. ***Criação de Documentos:*** Em processadores de texto ou sistemas de geração de documentos, o padrão Builder pode ser usado para criar documentos complexos, onde você pode definir diferentes estilos, fontes, imagens e layouts.

2. ***Criação de Configurações de Software:*** Em software de edição ou design, o padrão Builder pode ser usado para criar configurações de projeto com diferentes opções, como resolução, cores e efeitos.

3. ***Criação de Widgets de Interface Gráfica:*** Ao construir interfaces gráficas, o padrão Builder pode ser aplicado para criar diferentes tipos de widgets (botões, campos de entrada, listas) e personalizá-los com diferentes estilos e funcionalidades.

4. ***Criação de Refeições Personalizadas:*** Em um sistema de pedidos de comida, o padrão Builder pode ser usado para criar refeições personalizadas, onde você seleciona diferentes itens (prato principal, acompanhamento, bebida) e configurações.

5. ***Criação de Personagens em Jogos:*** Em jogos de videogame, o padrão Builder pode ser usado para criar personagens com diferentes atributos (força, agilidade, magia) e equipamentos específicos.