import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [selected, setSelected] = useState("2019");

  const onYearSelectHandler = (selected) => {
    setSelected(selected);
  };

  const filteredExpenses = expenses.filter(function (item) {
    return item.date.getFullYear().toString() === selected;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selected}
          onYearSelectHandler={onYearSelectHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
