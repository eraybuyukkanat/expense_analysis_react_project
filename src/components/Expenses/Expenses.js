import { useState } from 'react';
import ExpenseItem from '../Expenses/ExpenseItem'
import '../Expenses/Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from './ExpenseFilter';
function Expenses(props){


 
  const [dropdownData,setDropdownData] = useState("");
  const filteredExpenses = props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === dropdownData;
  });
    const getdropdownDataFunc = function(data){
      setDropdownData(data);
      console.log(dropdownData);
    }

    return <Card className="expenses">
     
        <ExpensesFilter selected={dropdownData} onChangeFilter={getdropdownDataFunc} />
        {filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}
    </Card>
}

export default Expenses;

