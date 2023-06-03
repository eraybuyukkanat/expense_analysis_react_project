import { useState } from "react";
import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [dropdownData, setDropdownData] = useState("");
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === dropdownData;
  });
  const getdropdownDataFunc = function (data) {
    setDropdownData(data);
    console.log(dropdownData);
  };

 

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={dropdownData}
        onChangeFilter={getdropdownDataFunc}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
