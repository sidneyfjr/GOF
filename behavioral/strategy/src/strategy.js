/*
Neste exemplo, temos duas estratégias diferentes de ordenação: ordenarCrescente e 
ordenarDecrescente. Em seguida, temos a classe Ordenador, que atua como o contexto e 
permite alternar dinamicamente entre essas estratégias de ordenação. O cliente pode 
escolher qual estratégia usar ao criar uma instância de Ordenador.

Quando ordenadorAscendente.ordenar(numeros) é chamado, a estratégia de ordenação 
em ordem crescente é usada, e quando ordenadorDescendente.ordenar(numeros) é chamado, 
a estratégia de ordenação em ordem decrescente é usada. Isso ilustra como o padrão 
Strategy permite que você mude o comportamento do algoritmo de ordenação sem alterar 
o código que o utiliza.
*/

// Estratégia 1: Ordenar em ordem crescente
function ordenarCrescente(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Estratégia 2: Ordenar em ordem decrescente
  function ordenarDecrescente(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  // Contexto que utiliza a estratégia
  class Ordenador {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    ordenar(arr) {
      return this.strategy(arr);
    }
  }
  
  // Uso
  const numeros = [5, 1, 4, 2, 3];
  const ordenadorAscendente = new Ordenador(ordenarCrescente);
  const ordenadorDescendente = new Ordenador(ordenarDecrescente);
  
  const numerosOrdenadosAscendente = ordenadorAscendente.ordenar(numeros);
  console.log("Ordenado em ordem crescente:", numerosOrdenadosAscendente);
  
  const numerosOrdenadosDescendente = ordenadorDescendente.ordenar(numeros);
  console.log("Ordenado em ordem decrescente:", numerosOrdenadosDescendente);
  