import { useState } from "react";
import NewComponentExpenses from "./Components/NewComponentExpenses";
import NewExpenses from "./Components/NewExpenses";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expenseData) => {
    console.log("in app_js");
    console.log(expenseData);
    setExpenses((prevExpenses) => {
      console.log(expenseData.date);
      console.log(prevExpenses[1].date);
      return [...prevExpenses, expenseData];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpenses={addExpenseHandler}></NewExpenses>
      <NewComponentExpenses expenses={expenses}></NewComponentExpenses>
    </div>
  );
}

export default App;
