import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
