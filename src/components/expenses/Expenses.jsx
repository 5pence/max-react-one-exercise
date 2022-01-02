import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
    
  const [selected, setSelected] = useState('2019');

  const onYearSelectHandler = (selected) => {
    setSelected(selected);
  };

  const filteredExpenses = expenses.filter(function(item) {
    return item.date.getFullYear().toString() === selected;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selected} onYearSelectHandler={onYearSelectHandler} />
        { filteredExpenses.length === 0 && <p>No Expenses Registered</p>}
        { filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <div className="expenses" key={expense.id}>
              <ExpenseItem expense={expense} />
            </div>
          ))
        }
      </Card>
    </div>
  );
};

export default Expenses;
