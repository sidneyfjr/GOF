*“Fornecer um meio de acessar, sequencialmente, os elementos de um objeto agregado sem expor a representação subjacente”*

O padrão Iterator é um padrão de projeto comportamental que fornece um meio de acessar os elementos de uma coleção de objetos de maneira sequencial, sem expor os detalhes da estrutura interna dessa coleção. Ele separa o processo de iteração dos elementos da coleção da implementação da coleção em si.

Principais componentes do padrão Iterator:

***Iterador (Iterator):*** Define uma interface que os iteradores devem seguir, incluindo métodos para acessar o próximo elemento, verificar se há mais elementos e reiniciar a iteração.

***Coleção (Aggregate):*** Define uma interface para criar um objeto iterador. É a interface que os objetos agregados devem implementar para fornecer um iterador para sua coleção.

***Iterador Concreto (Concrete Iterator):*** Implementa a interface do iterador para uma coleção específica. Mantém a posição atual na coleção e implementa as operações definidas pela interface do iterador.

***Coleção Concreta (Concrete Aggregate):*** Implementa a interface de coleção, fornecendo um iterador concreto para percorrer seus elementos.

A principal intenção do padrão Iterator é oferecer uma maneira uniforme de percorrer os elementos de uma coleção, independentemente da sua implementação interna, tornando mais fácil e flexível a iteração sobre diferentes tipos de coleções.
