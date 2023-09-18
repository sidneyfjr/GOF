*“Define um objeto que encapsula como um conjunto de objetos interage. O mediator promove o acoplamento fraco ao evitar que os objetos se refiram explicitamente uns aos outros, permitindo que você varie suas intenções”*

O padrão Mediator é um padrão de projeto comportamental que facilita a comunicação entre objetos em um sistema, promovendo o baixo acoplamento entre eles. Ele centraliza a comunicação, evitando que os objetos se comuniquem diretamente uns com os outros e, em vez disso, comuniquem-se por meio de um objeto mediador.

Principais componentes do padrão Mediator:

***Mediador (Mediator):*** Define uma interface para comunicação entre objetos colegas. É responsável por facilitar a comunicação entre os objetos, muitas vezes implementando a lógica de coordenação.

***Colega (Colleague):*** São os objetos que se comunicam entre si por meio do mediador. Cada colega conhece o mediador, mas não precisa conhecer os outros colegas.

O padrão Mediator é útil quando o comportamento de um objeto depende do estado ou ação de outros objetos em um sistema. Ele ajuda a evitar que os objetos se tornem fortemente acoplados e promove uma melhor organização e manutenção do código.
