*“Agregar responsabilidades adicionais a um objeto dinamicamente. Os decorators fornecem uma alternativa flexível ao uso de subclasses para extensão de funcionalidades.”*

O padrão de projeto **Decorator** é um padrão estrutural que permite adicionar ***comportamentos adicionais*** a objetos individuais de forma ***dinâmica***, sem alterar sua estrutura. Ele é usado para ***estender*** as funcionalidades de objetos existentes ***sem*** precisar criar ***subclasses*** complexas ou modificar o código-fonte original. O padrão Decorator segue o princípio "aberto para extensão, fechado para modificação", o que significa que você pode adicionar novos comportamentos sem alterar o código existente.

Alguns exemplos de uso do padrão Decorator:

1. ***Interfaces Gráficas (GUI):*** Em uma GUI, você pode usar o padrão Decorator para adicionar bordas, sombras, cores de fundo e outros estilos a componentes visuais, como botões e janelas, sem alterar suas classes subjacentes.

2. ***Autenticação e Autorização:*** O padrão Decorator pode ser usado para adicionar camadas de autenticação e autorização a diferentes partes de um sistema, permitindo que você implemente políticas de segurança de maneira modular.

3. ***Logging e Monitoramento:*** O Decorator pode ser usado para adicionar funcionalidades de logging e monitoramento a componentes do sistema, registrando informações sem afetar o fluxo principal do código.

4. ***Manipulação de Dados:*** Em sistemas de manipulação de dados, como bancos de dados ou APIs de serviços web, o Decorator pode ser usado para adicionar validações, transformações ou enriquecimento de dados antes de serem processados.

5. ***Cache:*** Você pode usar o Decorator para adicionar caching a certas operações ou funções, melhorando a performance do sistema ao armazenar resultados temporariamente.
