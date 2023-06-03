import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {

  const [isClicked = false, setIsClicked] = useState(false);

  const changeIsClicked = function(){
    return setIsClicked(!isClicked);
  }

    const saveExpenseData = (enteredExpense)=>{
      const expense = {
        ...enteredExpense,
        id: Math.random().toString,
    };
    props.onAddExpense(expense);
    changeIsClicked();
    }

     return <div className="new-expense">
      {isClicked === false ? 
      <button onClick={changeIsClicked}>Add New Expense</button> :
       <ExpenseForm onClickButton={changeIsClicked} onSaveExpense={saveExpenseData} />
      }</div>
};

export default NewExpense;