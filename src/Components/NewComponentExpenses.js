import ExpenseItem from "./ExpenseItem";
import "./NewComponentExpenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function NewComponentExpenses(props) {
  const [year, setYear] = useState("");
  const yearHandler = (element) => {
    setYear(element.target.value);
  };
  console.log(year);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={yearHandler}></ExpensesFilter>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default NewComponentExpenses;
