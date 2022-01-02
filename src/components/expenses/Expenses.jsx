import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
    
  const onYearSelectHandler = (event) => {
    console.log("in expenses: ", event);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearSelectHandler={onYearSelectHandler} />
        {expenses.map((expense) => (
          <div className="expenses" key={expense.id}>
            <ExpenseItem expense={expense} />
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
