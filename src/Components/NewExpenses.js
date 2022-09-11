import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpenses(props) {
  const [display, setDisplay] = useState(false);

  const clickHandler = () => {
    setDisplay(true);
  };

  const cancelHandler = () => {
    setDisplay(false);
  };

  const savedData = (savedExpenseData) => {
    const expenseData = {
      id: Math.round(Math.random() * 10).toString(),
      ...savedExpenseData,
    };
    props.onAddExpenses(expenseData);
  };

  return (
    <div className="new-expense">
      {!display && <button onClick={clickHandler}>Add New Expenses</button>}
      {display && <ExpenseForm onSaveData={savedData} cancel={cancelHandler} />}
    </div>
  );
}

export default NewExpenses;
