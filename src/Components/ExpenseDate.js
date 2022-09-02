import "./ExpenseDate.css";

function ExpenseDate(props) {
  const dayExpense = props.date.toLocaleString("en-us", { month: "long" });
  const monthExpense = props.date.toLocaleString("en-us", { day: "2-digit" });
  const yearExpense = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{dayExpense}</div>
      <div className="expense-date__month">{monthExpense}</div>
      <div className="expense-date__year">{yearExpense}</div>
    </div>
  );
}

export default ExpenseDate;
