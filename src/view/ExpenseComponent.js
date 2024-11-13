import { createElement } from "../framework/render.js";


function createExpenseComponentTemplate(expense) {
    const {type,name,value}=expense

    return (
        `<div class="expense">
        <h2>category: ${type}</h2>
        <p>name: ${name}</p>
        <p>amount: ${value}</p>
        </div>`
    )
}

export default class ExpenseComponent {
    constructor({expense}) {
        this.expense=expense;
    }

    get template(){
       return createExpenseComponentTemplate(this.expense)
    }

    getElement(){
        if(!this.element){
            this.element=createElement(this.template)
        }
        return this.element;
    }
}