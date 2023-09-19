*“Evita o acoplamento do remetente de uma solicitação ao seu destinatário, dando a mais de um objeto a chance de tratar a solicitação. Encadeia os objetos receptores e passa a solicitação ao longo da cadeia até que um objeto a trate.”*

O padrão Chain of Responsibility é um padrão de projeto comportamental que permite passar solicitações por uma cadeia de manipuladores. Cada manipulador decide se processa a solicitação ou a passa para o próximo manipulador na cadeia. Isso proporciona flexibilidade na execução de operações e evita acoplar o remetente de uma solicitação ao seu destinatário.

Principais componentes do padrão Chain of Responsibility:

***Handler (Manipulador):*** Define uma interface comum para todos os manipuladores na cadeia. Declara o método de manipulação da solicitação.

***Concrete Handler (Manipulador Concreto):*** Implementa a interface Handler e processa a solicitação, ou passa a solicitação para o próximo manipulador na cadeia, se não puder processá-la.

***Client (Cliente):*** Inicia a solicitação e a envia para o primeiro manipulador na cadeia.
O padrão Chain of Responsibility é útil quando você deseja que mais de um objeto possa processar uma solicitação, mas quer evitar o acoplamento entre o remetente e o destinatário da solicitação.
