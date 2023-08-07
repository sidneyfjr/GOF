Intenção: “Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações”

Permite criar um objeto complexo - objeto com construtor complexo, composto de vários objetos ou com um algoritmo de criação complexo - em etapas.

Ao invés de criar o objeto diretamente pelo construtor da classe eu crio uma outra classe, classe builder, para criar esse objeto. Assim eu não preciso criar vários construtores para abranger as várias possibilidades de criação do objeto.

O padrão Builder é um padrão de projeto de software que é usado para criar objetos complexos passo a passo. Ele separa a construção de um objeto complexo de sua representação, permitindo que o mesmo processo de construção crie diferentes representações do objeto.

O padrão Builder é útil quando a criação direta de um objeto complexo é difícil ou quando você deseja criar várias variações do mesmo objeto, mantendo o mesmo processo de construção. Isso pode tornar o código mais legível, modular e flexível, permitindo que você adicione ou remova etapas de construção conforme necessário.

A ideia básica por trás do padrão Builder é ter uma classe Builder que contém métodos para configurar os diferentes aspectos do objeto a ser criado. Uma vez que todas as configurações são feitas, o Builder pode produzir o objeto final usando um método de construção.
