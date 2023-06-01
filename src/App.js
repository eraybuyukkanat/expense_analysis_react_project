import Expenses from "./components/Expenses/Expenses.js";

function App() {
  const expenses = [
    {
      expenseTitle: "Insurance",
      expenseDate: new Date(1988, 1, 11),
      expenseAmount: 545,
    },
    {expenseTitle: "Insurance",
    expenseDate: new Date(2025, 5, 12),
    expenseAmount: 111,
  },
  {expenseTitle: "Insurance",
  expenseDate: new Date(2015, 12, 9),
  expenseAmount: 22,
},
  ];
  
  return (
    <div>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
