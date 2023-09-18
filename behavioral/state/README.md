***"Permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado de classe."***

O padrão *State* é um padrão de projeto comportamental que permite que um objeto ***altere*** seu comportamento quando seu ***estado*** interno ***muda***. Isso é feito criando diferentes classes que representam estados distintos e permitindo que o objeto mude de uma classe de estado para outra conforme necessário.

As principais classes envolvidas no padrão State são:

***Contexto (Context):*** É a classe que contém a referência para o estado atual e permite a mudança de estado. O contexto é o objeto cujo comportamento está sendo alterado conforme os estados mudam.

***Estado (State):*** É uma interface ou classe abstrata que representa um estado específico. Cada estado concreto implementa essa interface e fornece a implementação do comportamento correspondente.

***Estado Concreto (Concrete State):*** São classes que implementam a interface do estado. Cada classe representa um estado específico e define o comportamento associado a esse estado.

O padrão State é útil quando o comportamento de um objeto depende do seu estado e as transições entre estados precisam ser gerenciadas de forma limpa e extensível.
