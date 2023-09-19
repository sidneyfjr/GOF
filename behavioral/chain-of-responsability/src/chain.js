/*
    Neste exemplo, temos três tipos de aprovadores: Gerente (Manager), Diretor (Director), e CEO (CEO). 
    Cada aprovador decide se pode aprovar a despesa com base em seu limite. Se não puder, 
    a solicitação é passada para o próximo aprovador na cadeia. O padrão Chain of Responsibility facilita 
    a passagem da solicitação ao longo da cadeia até que alguém possa aprová-la.
*/

class Expense {
    constructor(amount, description) {
      this.amount = amount;
      this.description = description;
    }
  }
  
  class Approver {
    setNext(approver) {
      this.nextApprover = approver;
    }
  
    processExpense(expense) {
      if (this.canApprove(expense)) {
        console.log(`${this.constructor.name} approved the expense: ${expense.description}`);
      } else if (this.nextApprover) {
        console.log(`${this.constructor.name} cannot approve. Passing to ${this.nextApprover.constructor.name}`);
        this.nextApprover.processExpense(expense);
      } else {
        console.log(`No one can approve the expense: ${expense.description}`);
      }
    }
  
    canApprove(expense) {
      // To be overridden by subclasses
      return false;
    }
  }
  
  class Manager extends Approver {
    canApprove(expense) {
      return expense.amount <= 1000;
    }
  }
  
  class Director extends Approver {
    canApprove(expense) {
      return expense.amount <= 5000;
    }
  }
  
  class CEO extends Approver {
    canApprove(expense) {
      return expense.amount <= 10000;
    }
  }
  
  const manager = new Manager();
  const director = new Director();
  const ceo = new CEO();
  
  manager.setNext(director);
  director.setNext(ceo);
  
  const expense1 = new Expense(800, 'Team lunch');
  const expense2 = new Expense(4500, 'Business trip');
  const expense3 = new Expense(12000, 'Conference sponsorship');
  
  manager.processExpense(expense1);
  manager.processExpense(expense2);
  manager.processExpense(expense3);
  