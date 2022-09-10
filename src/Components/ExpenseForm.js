import "./ExpenseForm.css";
import { useState } from "react";
function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   date: "",
  //   amount: "",
  // });

  const clickHandlerTitle = (e) => {
    setTitle(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, title: e.target.value };
    // });
  };
  const clickHandlerDate = (e) => {
    setDate(e.target.value);
    console.log(e.target);
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
  };
  const clickHandlerAmount = (e) => {
    setAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={clickHandlerTitle} value={title} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min=".01"
              step=".01"
              onChange={clickHandlerAmount}
              value={amount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2013-01-01"
              max="2023-01-01"
              onChange={clickHandlerDate}
              value={date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expenses</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
