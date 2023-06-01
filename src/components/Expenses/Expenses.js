import ExpenseItem from '../Expenses/ExpenseItem'
import '../Expenses/Expenses.css';
import Card from "../UI/Card";
function Expenses(props){
    return <Card className="expenses">
        <ExpenseItem
        date={props.expenses[0].expenseDate}
        title={props.expenses[0].expenseTitle}
        amount={props.expenses[0].expenseAmount}
      />
      <ExpenseItem
        date={props.expenses[1].expenseDate}
        title={props.expenses[1].expenseTitle}
        amount={props.expenses[1].expenseAmount}
      />
      <ExpenseItem
        date={props.expenses[2].expenseDate}
        title={props.expenses[2].expenseTitle}
        amount={props.expenses[2].expenseAmount}
     />
    
    </Card>
}

export default Expenses;

