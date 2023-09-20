*“Define o esqueleto de um algoritmo em uma operação, postergando a definição de alguns passos para subclasses. O template method permite que as subclasses redefinam certos passos de uma algoritmo sem mudar sua estrutura”*

O padrão Template Method é um padrão de projeto comportamental que define a estrutura de um algoritmo em uma classe base, mas permite que as subclasses substituam partes específicas do algoritmo sem alterar sua estrutura. Isso promove a reutilização de código e a extensibilidade do comportamento de uma classe.

Principais componentes do padrão Template Method:

***Classe Abstrata (Abstract Class):*** Define o esqueleto do algoritmo em um método template. Este método consiste em uma série de passos, alguns dos quais podem ser implementados diretamente na classe abstrata e outros que podem ser deixados abertos (abstract), para serem implementados por subclasses.

***Método Template (Template Method):*** É o método principal que define a sequência de passos do algoritmo. Pode chamar métodos abstratos (ou opcionalmente implementados) que serão fornecidos pelas subclasses.

***Métodos Concretos (Concrete Methods):*** São os métodos que implementam partes específicas do algoritmo. Esses métodos podem ser obrigatórios ou opcionais para as subclasses.

O padrão Template Method é útil quando você deseja definir um algoritmo com uma estrutura fixa, mas permitir que partes desse algoritmo sejam implementadas por subclasses de maneiras diferentes.
