import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseFilterHandler = (date) => {
    setFilteredYear(date);
  };

  const filteredExpense = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onExpenseFilterHandler={expenseFilterHandler}
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
