import React from "react";
import './ExpenseForm.css';


function ExpenseForm(){


    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    }

    const amountChangeHandler = (event) => {
        console.log(event.target.value);
    }
    const dateChangeHandler = (event) => {
        console.log(event.target.value);
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;