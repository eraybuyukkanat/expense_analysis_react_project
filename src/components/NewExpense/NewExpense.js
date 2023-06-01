import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {

    const saveExpenseData = (enteredExpense)=>{
      const expense = {
        ...enteredExpense,
        id: Math.random().toString,
    };
    props.onAddExpense(expense);
    }

     return <div className="new-expense">
       <ExpenseForm onSaveExpense={saveExpenseData} />
     </div>
};

export default NewExpense;