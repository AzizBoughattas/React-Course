import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [entredTitle, setEntredTitle] = useState("");
  const [entredAmount, setEntredAmount] = useState("");
  const [entredDate, setEntredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:'',
  // })

  const titleChangeHandler = (event) => {
    setEntredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // })
    // setUserInput((prevState) => {
    //     return {...prevState,enteredTitle:event.target.value}
    // })
  };
  const amountChangeHandler = (event) => {
    setEntredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    // })
  };
  const dateChangeHandler = (event) => {
    setEntredDate(event.target.value);
    //    setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entredTitle,
      amount:+ entredAmount,
      date: new Date(entredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEntredTitle("");
    setEntredAmount("");
    setEntredDate("");
  };

  // let Switch = false
  // const showForm = () => {
  //   Switch = !Switch
  //   console.log(Switch)
  // }

  // if(!Switch) {
  //   return <button onClick={showForm}>Add New Expense</button>
  // }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={entredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={entredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={entredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onCancelEditing}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
