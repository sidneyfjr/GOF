/*
Neste exemplo, a classe Employee representa os funcionários da empresa. 
Eles podem ser Manager (gerente) ou Employee (funcionário). Os gerentes 
podem ter subordinados (outros funcionários ou gerentes), formando uma hierarquia.

O método addSubordinate permite adicionar subordinados a um gerente, 
e o método getSubordinates retorna a lista de subordinados de um funcionário. 
O método toString retorna uma representação em texto do funcionário.

A função printHierarchy percorre a estrutura organizacional e imprime 
a hierarquia de funcionários, identificando os níveis através do recuo.

Nesse cenário, o padrão Composite permite que os funcionários individuais 
e os gerentes sejam tratados de maneira uniforme na estrutura hierárquica, 
tornando a lógica de manipulação mais coesa e consistente.
*/

class Employee {

    constructor(name, role) {
      this.name = name;
      this.role = role;
      this.subordinates = [];
      
    }
  
    addSubordinate(subordinate) {
      this.subordinates.push(subordinate);
    }
  
    getSubordinates() {
      return this.subordinates;
    }
  
    toString() {
      return `${this.role}: ${this.name}`;
    }
  }
  
  // Exemplo de uso
  const ceo = new Employee("John", "CEO");
  
  const manager1 = new Employee("Alice", "Manager");
  const manager2 = new Employee("Bob", "Manager");
  
  const employee1 = new Employee("Emma", "Employee");
  const employee2 = new Employee("Daniel", "Employee");
  const employee3 = new Employee("Grace", "Employee");
  const employee4 = new Employee("Henry", "Employee");
  
  manager1.addSubordinate(employee1);
  manager1.addSubordinate(employee2);
  manager2.addSubordinate(employee3);
  manager2.addSubordinate(employee4);
  
  ceo.addSubordinate(manager1);
  ceo.addSubordinate(manager2);
  
  function printHierarchy(employee, level = 0) {
    console.log(" ".repeat(level * 4) + employee.toString());
  
    for (const subordinate of employee.getSubordinates()) {
      printHierarchy(subordinate, level + 1);
    }
  }
  
  printHierarchy(ceo);
  