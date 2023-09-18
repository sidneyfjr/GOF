/*
Neste exemplo, temos um contexto (AlertaContexto) que possui um estado inicial (verde). 
Conforme o estado muda (amarelo ou vermelho), o comportamento associado muda, 
demonstrando a aplicação do padrão State.
*/

// Interface para representar os estados
class Estado {
    alerta() {
      throw new Error('Esta é uma função abstrata.');
    }
  }
  
  // Estado concreto: Alerta Verde
  class AlertaVerde extends Estado {
    alerta() {
      return 'Alerta verde: Tudo normal.';
    }
  }
  
  // Estado concreto: Alerta Amarelo
  class AlertaAmarelo extends Estado {
    alerta() {
      return 'Alerta amarelo: Atenção, situação não usual.';
    }
  }
  
  // Estado concreto: Alerta Vermelho
  class AlertaVermelho extends Estado {
    alerta() {
      return 'Alerta vermelho: Situação crítica!';
    }
  }
  
  // Contexto que gerencia os estados
  class AlertaContexto {
    constructor() {
      this.estado = new AlertaVerde();
    }
  
    // Define o estado atual
    setEstado(estado) {
      this.estado = estado;
    }
  
    // Chama o método do estado atual
    alerta() {
      return this.estado.alerta();
    }
  }
  
  // Uso
  const contexto = new AlertaContexto();
  
  console.log(contexto.alerta());  // Saída: Alerta verde: Tudo normal.
  
  contexto.setEstado(new AlertaAmarelo());
  console.log(contexto.alerta());  // Saída: Alerta amarelo: Atenção, situação não usual.
  
  contexto.setEstado(new AlertaVermelho());
  console.log(contexto.alerta());  // Saída: Alerta vermelho: Situação crítica!
  