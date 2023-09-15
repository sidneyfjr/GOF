*"Encapsular uma solicitação como um objeto, assim permitindo que você parametrize clientes com operações, enfileire solicitações, e suporte operações que podem ser desfeitas."*

O padrão de projeto **Command** é um padrão comportamental que encapsula uma solicitação como um objeto, permitindo que você parametrize clientes com operações, enfileire solicitações, registre comandos e implemente operações reversíveis (desfazer).

O padrão Command é composto por quatro principais componentes:

***Comando (Command):*** Representa a interface que todos os comandos concretos devem implementar. Geralmente, essa interface possui um único método, como executar().

***Comando Concreto (Concrete Command):*** São as classes que implementam a interface do Comando. Cada classe representa uma ação específica a ser executada.

***Invocador (Invoker):*** É responsável por armazenar e acionar os comandos. Ele não precisa conhecer os detalhes de como cada comando funciona, apenas os executa quando solicitado.

***Receptor (Receiver):*** Representa o objeto que executa a ação real associada a um comando. O receptor é quem realiza o trabalho quando o comando é executado.

O padrão de projeto Command é versátil e pode ser aplicado em uma variedade de cenários onde você deseja encapsular uma solicitação como um objeto. Aqui estão alguns exemplos de uso do padrão Command em diferentes contextos:

***Sistema de Filas de Tarefas:*** Em sistemas que precisam gerenciar filas de tarefas, como processamento em lotes ou sistemas de mensagens, você pode usar o padrão Command para representar cada tarefa como um objeto Command e enfileirá-las para execução.

***Controle de Histórico de Navegação:*** Em aplicativos da web, o padrão Command pode ser usado para gerenciar o histórico de navegação. Cada página ou ação de navegação pode ser representada como um objeto Command, e um invocador pode rastrear o histórico de comandos para permitir navegação para frente e para trás.

***Sistema de Transações:*** Em sistemas de gerenciamento de banco de dados, o padrão Command pode ser usado para implementar transações. Cada comando SQL é encapsulado como um objeto Command, e as transações podem ser controladas com um invocador.

***Automatização de Tarefas:*** Em sistemas de automação, como scripts ou bots, o padrão Command pode ser usado para encapsular comandos que realizam tarefas específicas, como enviar e-mails, fazer login em contas, coletar dados da web, etc.

***Controle de Dispositivos IoT:*** Em sistemas de controle de dispositivos de Internet das Coisas (IoT), o padrão Command pode ser usado para representar comandos para ligar, desligar ou ajustar dispositivos remotamente.
