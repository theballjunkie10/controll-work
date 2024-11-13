import { expense } from "./mock/expenses.js";
import ExpenseComponent from "./view/ExpenseComponent.js";


const ExpenseListContainer = document.querySelector('.expense-list'); 

for (let index = 0; index < expense.length; index++) {

    const expenseComponentInstance = new ExpenseComponent({ expense: expense[index] }); 
    
  
    ExpenseListContainer.insertAdjacentElement('beforeend', expenseComponentInstance.getElement());
}