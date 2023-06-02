import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
const INITIAL_EXPENSES = [
    
];
function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

 

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses]
    });
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> 
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
