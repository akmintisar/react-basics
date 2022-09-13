import ExpenseItem from "./ExpenseItem";
import "./NewComponentExpenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./Chart/ExpenseChart";

function NewComponentExpenses(props) {
  const [year, setYear] = useState("");

  const yearHandler = (element) => {
    setYear(element.target.value);
  };
  const basedOnYear = props.expenses.filter(
    (element) => element.date.getFullYear() === Number(year)
  );

  // let mainData = <p>No data available for this Year!</p>;
  // if (basedOnYear.length > 0) {
  //   mainData = basedOnYear.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     ></ExpenseItem>
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={yearHandler}></ExpensesFilter>
        <ExpenseChart expenses={basedOnYear}></ExpenseChart>
        <ExpensesList items={basedOnYear}></ExpensesList>
        {/* {basedOnYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))} */}

        {/* <ExpenseItem
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
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default NewComponentExpenses;
