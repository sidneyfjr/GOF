*“Flyweight é um padrão de projeto estrutural que tem a intenção de usar compartilhamento para suportar eficientemente grandes quantidades de objetos de forma granular”*

O padrão de projeto **Flyweight** é um padrão estrutural que visa ***otimizar*** o uso de ***memória*** ou ***recursos***, ***compartilhando*** de maneira eficiente ***objetos*** que possuem partes comuns entre si. Ele é útil quando você precisa lidar com um grande número de objetos semelhantes e deseja economizar recursos, minimizando a duplicação de dados.

A ideia fundamental do padrão Flyweight é dividir objetos em duas partes: uma parte intrínseca e uma parte extrínseca. A parte intrínseca contém informações que são compartilhadas entre vários objetos, enquanto a parte extrínseca contém informações específicas de cada objeto. Isso permite que várias instâncias compartilhem a parte intrínseca, reduzindo a quantidade de dados duplicados.

O padrão Flyweight é útil em situações onde você deseja economizar recursos compartilhando eficientemente objetos que possuem partes comuns. Aqui estão alguns exemplos de uso do padrão Flyweight:

***Gráficos e Jogos:*** Em jogos ou aplicativos gráficos, sprites ou objetos gráficos podem ser representados como objetos Flyweight. Os dados comuns, como imagens e animações, são compartilhados entre várias instâncias, economizando memória.

***Sistemas de Armazenamento em Cache:*** O padrão Flyweight é frequentemente usado em sistemas de cache, onde os objetos são armazenados em cache e compartilhados entre solicitações. Isso é útil para acelerar o acesso a recursos frequentemente usados, como dados de bancos de dados ou resultados de cálculos.

***Gerenciamento de Conexões de Rede:*** Em sistemas que fazem muitas conexões de rede, como clientes HTTP, os objetos de conexão podem ser implementados como objetos Flyweight. As conexões compartilham informações comuns, como configurações de rede, mas têm endpoints diferentes.

***Representação de Cores:*** Em sistemas de gráficos ou design, objetos Flyweight podem ser usados para representar cores. Cores comuns são compartilhadas entre objetos para economizar memória.

***Sistemas de Análise de Dados:*** Em sistemas que lidam com grandes conjuntos de dados, objetos Flyweight podem ser usados para representar colunas ou campos de dados comuns. Isso ajuda a economizar memória quando várias análises são realizadas.
