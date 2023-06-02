import { useState } from 'react';
import ExpenseItem from '../Expenses/ExpenseItem'
import '../Expenses/Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from './ExpenseFilter';
function Expenses(props){
  const [dropdownData,setDropdownData] = useState("");

    const getdropdownDataFunc = function(data){
      setDropdownData(data);
      console.log(dropdownData);
    }

    return <Card className="expenses">
     
        <ExpensesFilter selected={dropdownData} onChangeFilter={getdropdownDataFunc} />
        {props.expenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />))}
    </Card>
}

export default Expenses;

