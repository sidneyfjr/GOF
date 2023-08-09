/*
  Neste exemplo, a classe `ConfigurationManager` é projetada para armazenar e fornecer configurações para a aplicação. No entanto, ao usar o padrão Singleton, garantimos que apenas uma única instância do `ConfigurationManager` seja criada e compartilhada em todas as partes da aplicação. Isso ajuda a manter a consistência das configurações e evita a criação de múltiplas instâncias, o que poderia levar a conflitos de configuração.

  O padrão Singleton nesse cenário ajuda a manter o acesso controlado e consistente às configurações da aplicação, evitando problemas de sincronização e garantindo que todos os componentes obtenham as mesmas configurações atualizadas.
*/

class ConfigurationManager {
  constructor() {
    // Aqui você armazenaria as configurações reais da aplicação
    this.configurations = {};
  }

  setConfiguration(key, value) {
    this.configurations[key] = value;
  }

  getConfiguration(key) {
    return this.configurations[key];
  }
}

// Singleton que garante uma única instância da classe ConfigurationManager
const configManager = (() => {
  let instance;

  return {
    getInstance: () => {
      if (!instance) {
        instance = new ConfigurationManager();
      }
      return instance;
    }
  };
})();

// Exemplo de uso
const appConfig = configManager.getInstance();
appConfig.setConfiguration("serverURL", "http://example.com");
appConfig.setConfiguration("timeout", 5000);

const anotherPartOfApp = () => {
  const appConfig = configManager.getInstance();
  const serverURL = appConfig.getConfiguration("serverURL");
  console.log(`Connecting to server at ${serverURL}`);
};

anotherPartOfApp(); // Saída: Connecting to server at http://example.com
