import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setNewExpenseContent(<button onClick={addNewExpenseHandler}>Add New Expense</button>)
  };

  const addNewExpenseHandler = () => {
    setNewExpenseContent(<ExpenseForm onSavedExpenseData={saveExpenseHandler} 
                                      onCancelHandler={cancelNewExpenseHandler} />);
  };

  const cancelNewExpenseHandler = () => {
    setNewExpenseContent(<button onClick={addNewExpenseHandler}>Add New Expense</button>)
  }

  const [newExpenseContent, setNewExpenseContent] = 
    useState(<button onClick={addNewExpenseHandler}>Add New Expense</button>);

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
