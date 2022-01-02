import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
    
  const [selected, setSelected] = useState('2019');

  const onYearSelectHandler = (selected) => {
    console.log("in expenses: ", selected);
    setSelected(selected);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selected} onYearSelectHandler={onYearSelectHandler} />
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
