/*
Um exemplo bem conhecido de uso do padrão Factory Method no dia a dia é a criação de objetos em bibliotecas de interface gráfica (GUI) em diversas linguagens de programação.

Imagine que você esteja desenvolvendo uma aplicação com uma GUI e precisa criar diferentes tipos de botões, como botões de OK, Cancelar e Ajuda. Em vez de criar esses botões diretamente no código da aplicação, você pode usar o padrão Factory Method para criar uma hierarquia de classes que lida com a criação de botões. Isso permite que você adicione novos tipos de botões no futuro sem modificar o código principal da aplicação.

Neste exemplo, temos a classe base `Button` e subclasses como `OkButton`, `CancelButton` e `HelpButton`, cada uma representando um tipo de botão. O Factory Method `createButton` permite criar diferentes tipos de botões de acordo com o argumento passado.

Usar o padrão Factory Method nesse cenário permite que você adicione facilmente novos tipos de botões sem modificar a lógica principal da aplicação. Isso é especialmente útil em situações onde a GUI pode evoluir com o tempo e você deseja manter seu código flexível e extensível.
*/

// Classe base para botões
class Button {
  constructor(label) {
    this.label = label;
  }

  click() {
    console.log(`${this.label} button clicked.`);
  }
}

// Subclasses de botões
class OkButton extends Button {
  constructor() {
    super("OK");
  }
}

class CancelButton extends Button {
  constructor() {
    super("Cancel");
  }
}

class HelpButton extends Button {
  constructor() {
    super("Help");
  }
}

// Factory Method para criar botões
function createButton(type) {
  switch (type) {
    case "ok":
      return new OkButton();
    case "cancel":
      return new CancelButton();
    case "help":
      return new HelpButton();
    default:
      throw new Error(`Invalid button type: ${type}`);
  }
}

// Exemplo de uso
const okButton = createButton("ok");
okButton.click(); // Saída: OK button clicked.

const cancelButton = createButton("cancel");
cancelButton.click(); // Saída: Cancel button clicked.

const helpButton = createButton("help");
helpButton.click(); // Saída: Help button clicked.
