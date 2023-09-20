/*
    Neste exemplo, temos a classe abstrata HotBeverage que define um método prepareBeverage, 
    que segue uma sequência de passos para fazer uma bebida quente. As subclasses Tea e Coffee implementam 
    os métodos abstratos brew e addCondiments de maneira específica para preparar chá e café, respectivamente. 
    O método prepareBeverage serve como o método template que organiza a sequência de ações para fazer uma bebida quente.
*/

class HotBeverage {
    prepareBeverage() {
      this.boilWater();
      this.brew();
      this.pourInCup();
      this.addCondiments();
    }
  
    boilWater() {
      console.log('Boling water...');
    }
  
    pourInCup() {
      console.log('Pouring into cup...');
    }
  
    // Métodos abstratos que devem ser implementados pelas subclasses
    brew() {
      throw new Error('This method should be overridden by subclasses');
    }
  
    addCondiments() {
      throw new Error('This method should be overridden by subclasses');
    }
  }
  
  class Tea extends HotBeverage {
    brew() {
      console.log('Steeping the tea.');
    }
  
    addCondiments() {
      console.log('Adding lemon.');
    }
  }
  
  class Coffee extends HotBeverage {
    brew() {
      console.log('Brewing coffee.');
    }
  
    addCondiments() {
      console.log('Adding sugar and milk.');
    }
  }
  
  const tea = new Tea();
  console.log('Preparing tea:');
  tea.prepareBeverage();
  
  console.log('\n');
  
  const coffee = new Coffee();
  console.log('Preparing coffee:');
  coffee.prepareBeverage();
  