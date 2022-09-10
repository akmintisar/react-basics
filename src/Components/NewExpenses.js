import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpenses(props) {
  const savedData = (savedExpenseData) => {
    const expenseData = {
      id: Math.round(Math.random() * 10).toString(),
      ...savedExpenseData,
    };
    props.onAddExpenses(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={savedData} />
    </div>
  );
}

export default NewExpenses;
