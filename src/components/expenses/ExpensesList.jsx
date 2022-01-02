import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    <h2 className="expenses-list__fallback">No Expenses Registered</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))};
    </ul>
  );
};

export default ExpensesList;
