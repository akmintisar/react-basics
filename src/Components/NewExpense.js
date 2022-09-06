import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpenses(props) {
  const savedData = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpenses(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={savedData} />
    </div>
  );
}

export default NewExpenses;
